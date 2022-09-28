export interface Language {
  name: string;
  val: number;
}

/** Get a url to the icon for a language. */
export function langIconUrl(lang: string, colorful: boolean = false): string {
  if (!iconsColor[lang]) console.warn("Missing icon for language : " + lang);

  if (!colorful) {
    return icons[lang] ?? "mdi:adjust";
  }
  return iconsColor[lang] ?? "go";
}

/** Whether to hide or show a language. */
export function hide(langs: any, lang: string): boolean {

  // Don't show CSS if SCSS is already shown.
  if (langs["SCSS"] && lang == "CSS") return true;

  // Don't show JavaScript if TypeScript is already shown.
  if (langs["TypeScript"] && lang == "JavaScript") return true;

  // Don't show HTML if Tauri is already shown.
  if (langs["Tauri"] && lang == "HTML") return true;

  // Don't show ShaderLab because it's dumb.
  return lang == "ShaderLab";
}

/** Language icon urls. */
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

/** Language icon urls with color. */
const iconsColor: any = {
  Svelte: "svelte",
  JavaScript: "js",
  TypeScript: "typescript",
  Rust: "rust",
  CSS: "css",
  SCSS: "sass",
  HTML: "html",
  "C#": "csharp",
  "C++": "cpp",
  Tauri: "tauri",
  Vue: "vue",
  Batchfile: "bat",
  HLSL: "unity",
  GLSL: "glsl",
  Unity: "unity",
};