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

interface ContributionDay {
  color: string;
  contributionCount: number;
  date: string;
  __typename: "ContributionCalendarDay";
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}
