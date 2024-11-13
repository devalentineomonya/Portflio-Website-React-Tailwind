"use server";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const token = process.env.GITHUB_ACCESS_TOKEN;
const username = process.env.GITHUB_USER_NAME;
import { GithubRepo } from "../types/githubResponse";

const REPOSITORY_FRAGMENT = gql`
  fragment RepositoryFields on Repository {
    nameWithOwner
    collaborators {
      nodes {
        avatarUrl
        name
        url
        login
      }
    }
    id
    url
    languages(first: 4) {
      nodes {
        name
      }
    }
    description
    forkCount
    homepageUrl
    stargazers {
      totalCount
    }
  }
`;

const GET_PINNED_REPOS_AND_CONTRIBUTIONS = gql`
  query GetPinnedReposAndContributions($username: String!) {
    user(login: $username) {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
        edges {
          node {
            ...RepositoryFields
          }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
`;

export async function fetchPinnedReposAndContributions() {
  try {
    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    const { data } = await client.query({
      query: GET_PINNED_REPOS_AND_CONTRIBUTIONS,
      variables: { username },
    });

    const { user } = data;
    console.log(data);
    const pinnedRepos = user.pinnedItems.edges.map(
      (edge: { node: GithubRepo[] }) => edge.node
    );
    const contributions = user.contributionsCollection.contributionCalendar;
    return { pinnedRepos, contributions };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
}
