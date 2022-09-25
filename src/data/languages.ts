/** Get a url to the icon for a language. */
export function langIconUrl(lang: string): string {
  return icons[lang] ?? "mdi:adjust";
}

/** Whether to hide or show a language. */
export function hide(langs: any, lang: string): boolean {

  // Don't show CSS if SCSS is already shown.
  if (langs["SCSS"] && lang == "CSS") return true;

  // Don't show JavaScript if TypeScript is already shown.
  if (langs["TypeScript"] && lang == "JavaScript") return true;

  // Don't show HTML if Tauri is already shown.
  if (langs["Tauri"] && lang == "HTML") return true;

  return false;
}

const icons: any = {
  Svelte: "cib:svelte",
  JavaScript: "cib:javascript",
  TypeScript: "cib:typescript",
  Rust: "cib:rust",
  CSS: "cib:css3",
  SCSS: "cib:sass-alt",
  HTML: "cib:html5",
  "C#": "mdi:language-csharp",
  Unity: "bi:unity",
  Tauri: "simple-icons:tauri"
};