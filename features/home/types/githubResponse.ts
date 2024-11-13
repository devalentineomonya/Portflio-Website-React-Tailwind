export interface UserProfile {
  name: string;
  blog: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubRepo {
  id: number;
  nameWithOwner: string;
  url: string;
  languages: {
    nodes: {
      name: string;
    }[];
  };
  description: string;
  stargazers: {
    totalCount: number;
  };
  forkCount: number;
}
