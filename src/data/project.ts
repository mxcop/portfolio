import type { OctoRepo } from "../data/repos";
import type { ProjectData } from "./projects";

/** Portfolio Project Interface */
export interface Project {
  /** Whether this project is on github */
  github: boolean;
  owner: { name: string, url?: string };

  name: string; 
  url?: string;
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

  /** Number of github stars */
  stargazers_count?: number;

  /** Url to the steam store page of this project */
  steam_url?: string;

  enchanted: boolean;
}

/**
 * Convert a github repo to a project by combining them.
 */
export function repoToProject(data: ProjectData, repo: OctoRepo | undefined, name: string): Project {
  const project: Project = { enchanted: false, github: repo != undefined, name, owner: { name: "mxcop", url: "https://github.com/mxcop" }, ...data };
  
  if (repo) {
    project.languages = { ...repo.languages, ...project.languages }
    project.owner = { ...project.owner, ...repo.owner };
    return { ...repo, ...project };
  }

  return project;
}