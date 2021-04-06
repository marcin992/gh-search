import { Language } from './Language';
import { Release } from './Release';
import { User } from './User';

export interface Repository {
  url: string;
  name: string;
  description?: string;
  stargazerCount: number;
  mentionableUsers: { nodes: User[] };
  languages: { nodes: Language[] };
  latestRelease?: Release;
}
