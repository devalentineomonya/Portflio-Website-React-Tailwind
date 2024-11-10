"use server";

import { githubRepo, userProfile } from "../types/githubResponse";

export async function refchRepo() {
  try {
    const response = await fetch(
      "https://api.github.com/users/devalentineomonya/repos"
    );
    const data: githubRepo = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchProfile() {
  try {
    const response = await fetch(
      "https://api.github.com/users/devalentineomonya"
    );
    const data: userProfile = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
