/** Github Repo Interface */
export interface OctoRepo {
  owner: { name: string, url: string };

  name: string; 
  url: string;
  created?: string;
  updated?: string;

  desc: string;
  tags: string[];
  
  /** Dictionary of languages used in the repository */
  languages: { [key: string]: number };

  /** License used by this repository */
  license?: {
    name: string;
    spdx_id: string;
    url: string;
  };

  stargazers_count: number;
}

/**
 * Extract only the useful information from the Github API response.
 * @param response The Github API response.
 * @returns Only the useful information from the response.
 */
export function fromResponse(response: any[]): OctoRepo[] {
  const repos: OctoRepo[] = [];

  for (let i = 0; i < response.length; i++) {
    const repo = response[i];

    repos.push({
      owner: { name: repo.owner.login, url: repo.owner.html_url },

      name: repo.name, 
      url: repo.html_url,
      created: repo.created_at,
      updated: repo.pushed_at,

      desc: repo.description,
      tags: repo.topics,

      languages: repo.languages,
      license: repo.license,

      stargazers_count: repo.stargazers_count
    });
  }

  return repos;
}

/** Update the languages attribute of a repo stored in the store. */
export function updateRepoLanguages(index: number, languages: { [key: string]: number }) {
  const repos = JSON.parse(localStorage.getItem("repos")!);

  repos[index].languages = languages;

  localStorage.setItem("repos", JSON.stringify(repos));

  dispatchEvent(new StorageEvent('storage', { key: 'repos', storageArea: localStorage, newValue: JSON.stringify(repos) }));
}

/** Add a callback to whenever the repos store gets updated. */
export function onReposUpdated(callback: (newValue: any) => void) {
  addEventListener('storage', e => {
    if (e.storageArea === localStorage && e.key === 'repos') {
      callback(JSON.parse(e.newValue!));
    }
  });
}