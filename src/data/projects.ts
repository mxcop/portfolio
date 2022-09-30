import type { Project } from "./project";
import { asset_path } from "./path";

const projects: { [key: string]: Project } = {

  /** Emberry Chat Project */
  emberry: {
    enchanted: true,
    banner: asset_path + "/img/banners/emberry-banner.png",
    languages: { Tauri: 1 }
  },

  /** Youtile Youtube Viewer Project */
  youtile: {
    banner: asset_path + "/img/banners/youtile-banner.png",
    urls: {
      download: "https://github.com/youtile/youtile/releases/latest",
    },
    languages: { Tauri: 1 }
  },

  /** Rogue planets for the Ludum Dare gamejam */
  "ld49": {
    enchanted: true,
    name: "Rogue Planets",
    banner: asset_path + "/img/banners/rogue-planets-banner.png",
    urls: {
      itch: "https://roboolet.itch.io/rogue-planets",
    },
    desc: "Our game for the 49th Ludum Dare gamejam",

    achievement: {
      url: "https://ldjam.com/events/ludum-dare/49/rogue-planets",
      text: "39"
    }
  },

  /** A cool ray marcher I build with opengl */
  VoxelGameEngine: {
    banner: asset_path + "/img/banners/vge-banner.png",
    desc: "An unfinished Ray Marcher build using C++ and OpenGL"
  },

  /** Miniturn PvP Turn-based Game */
  miniturn: {
    banner: asset_path + "/img/banners/miniturn-banner.png",
    urls: {
      main: "https://store.steampowered.com/app/1069220/Miniturn",
      steam: "https://store.steampowered.com/app/1069220/Miniturn",
    },
    desc: "Turn-based strategy game with a twist",

    languages: { Unity: 2, "C#": 1 },
    created: "2020-03-03T07:32:24Z",
    updated: "2021-11-22T07:32:24Z"
  },

  /** 6502 Emulator I build using C# */
  "6502-Emulator": {
    banner: asset_path + "/img/banners/mos6502-banner.png",
    desc: "A basic MOS 6502 processor emulator"
  },

  /** 2D Ascii art puzzle platformer game */
  prompt_: {
    banner: asset_path + "/img/banners/prompt-banner.png",
    desc: "A 2D puzzle platformer with an ascii art style",
    urls: {
      main: "https://maxcoppen.itch.io/prompt",
      itch: "https://maxcoppen.itch.io/prompt",
    },

    languages: { Unity: 2, "C#": 1 },
    created: "2020",
    updated: "2021-11-26T07:32:24Z"
  },

  /** My attempt to create a flexible code editor */
  codex: {
    banner: asset_path + "/img/banners/codex-banner.png",
    desc: "My attempt to create a flexible & lightweight code editor",

    languages: { Rust: 5, Svelte: 4, TypeScript: 3, SCSS: 2, Tauri: 1 },
    created: "2021-09-28"
  },

  /** C Sharp Neural Network library I made */
  CSNN: {
    banner: asset_path + "/img/banners/csnn-banner.png",
    desc: "Small incomplete Neural Network library for C#"
  },

  /** A co-op minigame my friends and I made */
  barnstorm: {
    banner: asset_path + "/img/banners/barnstorm-banner.jpg",
    desc: "A Frantic Co-op farming game my friends and I made",

    languages: { Unity: 2, "C#": 1 },
    created: "2020-03-03T07:32:24Z",
    updated: "2021-11-22T07:32:24Z"
  },

  /** A game I worked on together with a team of developers */
  "Slash 'n Catch": {
    banner: asset_path + "/img/banners/snc-banner.png",
    desc: "A project where I gained loads of gamedev experience.",

    languages: { Unity: 2, "C#": 1 },
    created: "2018",
    updated: "2019"
  },

  AsciiEngine: {
    desc: "Simple little Game Engine made with C#.",
  }

}

export default projects;