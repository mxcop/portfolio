export interface Language {
  name: string;
  val: number;
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

/** Language icon urls with color. */
export const svgs: any = {
  Svelte: 'svelte',
  JavaScript: 'js',
  TypeScript: 'typescript',
  Rust: 'rust',
  CSS: 'css',
  SCSS: 'sass',
  HTML: 'html',
  "C#": 'csharp',
  "C++": 'cpp',
  Tauri: 'tauri',
  Vue: 'vue',
  Batchfile: 'bat',
  HLSL: 'unity',
  GLSL: 'glsl',
  Unity: 'unity',
};