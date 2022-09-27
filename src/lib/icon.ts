import FallbackIcon from '$svg/coffee.svg?raw';

/** Load an icon from the assets */
export const loadIcon = async (path: string): Promise<string> => {
  try {
    const result = await importIcon(path);
    return await result.text();
  } catch (err) {
    return FallbackIcon;
  }
}

function importIcon(icon: string): Promise<Response> {
  return fetch(`src/assets/svg/${icon}.svg?raw`);
}