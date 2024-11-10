export interface userProfile {
  name: string;
  blog: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface githubRepo {
  id: number;
  name: string;
  full_name: string;
  language: string;
  description: string;
  stargazers_count: number;
  forks: number;
}
