import type { OctoRepo } from "../data/repos";

/** Portfolio Project Interface */
export interface Project {
  /** Whether this project is on github */
  github?: boolean;
  owner?: { name: string, url?: string };

  name?: string;
  created?: string;
  updated?: string;

  banner?: string;

  desc?: string;
  tags?: string[];
  
  /** Dictionary of languages used in the repository */
  languages?: { [key: string]: number };

  /** License used by this repository */
  license?: {
    name: string;
    spdx_id: string;
    url: string;
  };

  /** Something this project has achieved */
  achievement?: {
    logo: string;
    url?: string;
    text?: string;
  };

  urls?: ProjectUrls,

  /** Number of github stars */
  stargazers_count?: number;

  enchanted?: boolean;
}

export interface ProjectUrls {
  /** Url will replace the "repo" url if it doesn't exist */
  main?: string;

  /** Url to the github repo of this project */
  repo?: string;

  /** Url to the steam store page of this project */
  steam?: string;

  /** Url to the itch.io page of this project */
  itch?: string;

  /** Url to a download page for this project */
  download?: string;
}

/**
 * Convert a github repo to a project by combining them.
 */
export function repoToProject(data: Project, repo: OctoRepo | undefined, name: string): Project {
  const project: Project = { enchanted: false, github: repo != undefined, name, owner: { name: "mxcop", url: "https://github.com/mxcop" }, ...(data as any) };
  
  if (repo) {
    project.languages = { ...repo.languages, ...project.languages }
    project.owner = { ...project.owner, ...repo.owner };
    project.urls = { ...project.urls, ...repo.urls };
    return { ...repo, ...project };
  }

  return project;
}