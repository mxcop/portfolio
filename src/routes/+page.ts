import { error, type Load } from "@sveltejs/kit";
import { browser } from '$app/environment';
import { fromResponse, updateRepoLanguages } from "../data/repos";

const pat_token = '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';

export const load: Load = async ({ fetch }) => {
  if (browser) {

    const stored_repos = localStorage.getItem("repos");

    // Return the stored repos if they exist.
    if (stored_repos) {
      return {
        owner: 'Qmtk',
        repo: 'Toolkit',
        repos: JSON.parse(stored_repos)
      }
    }

    console.log('Fetching repos ...', stored_repos);

    // If there are no repos stored then fetch them from Github.
    let fetched_repos: any = await (await fetch("https://api.github.com/users/mxcop/repos?type=all", {
      headers : {
        "Authorization": pat_token
      },
    })).json();

    // Check if the fetch was succesful.
    if (fetched_repos.message) throw error(429, 'Too many requests : ' + fetched_repos.message);

    fetched_repos = (fetched_repos as any[]).sort((a, b) => b.stargazers_count - a.stargazers_count);

    // Get more language information for each of the repos.
    for (let i = 0; i < fetched_repos.length; i++) {
      // Setup the verbose languages dictionary. (For speed)
      fetched_repos[i].languages = {};
      if (fetched_repos[i].language != null) fetched_repos[i].languages[`${fetched_repos[i].language}`] = 100;

      const j = i;

      // Fetch the detailed languages in the background.
      fetch(fetched_repos[i].languages_url, {
        headers : {
          "Authorization": pat_token
        },
      }).then((response: Response) => {
        // Convert the response to JSON.
        response.json().then((response: any) => {
          // Check if the fetch was succesful.
          if (response.message) throw error(429, 'Too many requests : ' + response.message);

          updateRepoLanguages(j, response);
        });
      });
    }

    // Only save the important information.
    const octoRepos = fromResponse(fetched_repos);
    localStorage.setItem("repos", JSON.stringify(octoRepos));

    console.log('Stored repos !');

    return {
      owner: 'Qmtk',
      repo: 'Toolkit',
      repos: octoRepos
    }
  }

  return { repos: [] }
};