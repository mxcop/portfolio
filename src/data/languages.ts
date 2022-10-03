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

import svelte from "$svg/langs/svelte.svg?raw";
import js from "$svg/langs/js.svg?raw";
import typescript from "$svg/langs/typescript.svg?raw";
import rust from "$svg/langs/rust.svg?raw";
import css from "$svg/langs/css.svg?raw";
import sass from "$svg/langs/sass.svg?raw";
import html from "$svg/langs/html.svg?raw";
import csharp from "$svg/langs/csharp.svg?raw";
import cpp from "$svg/langs/cpp.svg?raw";
import tauri from "$svg/langs/tauri.svg?raw";
import vue from "$svg/langs/vue.svg?raw";
import bat from "$svg/langs/bat.svg?raw";
import unity from "$svg/langs/unity.svg?raw";
import glsl from "$svg/langs/glsl.svg?raw";

/** Language icon urls with color. */
export const svgs: any = {
  Svelte: svelte,
  JavaScript: js,
  TypeScript: typescript,
  Rust: rust,
  CSS: css,
  SCSS: sass,
  HTML: html,
  "C#": csharp,
  "C++": cpp,
  Tauri: tauri,
  Vue: vue,
  Batchfile: bat,
  HLSL: unity,
  GLSL: glsl,
  Unity: unity,
};