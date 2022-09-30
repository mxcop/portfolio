import { asset_path } from "../data/path";

/** Load an icon from the assets */
export const loadIcon = async (path: string): Promise<string> => {
  try {
    const result = await importIcon(path);
    return await result.text();
  } catch (err) {
    const result = await importIcon("coffee");
    return await result.text();
  }
}

function importIcon(icon: string): Promise<Response> {
  return fetch(`${asset_path}/svg/${icon}.svg?raw`);
}