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
  svn_url: string;
  language: string;
  description: string;
  stargazers_count: number;
  forks: number;
}
