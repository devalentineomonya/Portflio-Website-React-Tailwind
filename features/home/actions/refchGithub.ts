"use server";
const token = process.env.GITHUB_ACCESS_TOKEN;
const username = process.env.GITHUB_USER_NAME;
import { githubRepo, userProfile } from "../types/githubResponse";
import { graphql } from "@octokit/graphql";

export async function fetchRepo() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    const data: githubRepo = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchProfile() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data: userProfile = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchPinnedReposAndContributions() {
  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const response: any = await graphqlWithAuth(`
      {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazerCount
                languages(first: 3) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
          contributionsCollection {
            totalCommitContributions
            totalPullRequestContributions
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `);

    return response.user;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
}
