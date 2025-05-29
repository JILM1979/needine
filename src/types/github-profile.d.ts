// src/types/github-profile.d.ts

export interface GitHubProfile {
  login: string;
  id: number;
  name: string;
  email: string;
  avatar_url: string;
  [key: string]: any;
}
