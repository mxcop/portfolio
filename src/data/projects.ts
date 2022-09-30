import type { Project } from "./project";

const projects: { [key: string]: Project } = {

  /** Emberry Chat Project */
  emberry: {
    enchanted: true,
    banner: "src/assets/img/banners/emberry-banner.png",
    languages: { Tauri: 1 }
  },

  /** Youtile Youtube Viewer Project */
  youtile: {
    banner: "src/assets/img/banners/youtile-banner.png",
    urls: {
      download: "https://github.com/youtile/youtile/releases/latest",
    },
    languages: { Tauri: 1 }
  },

  /** Rogue planets for the Ludum Dare gamejam */
  "ld49": {
    enchanted: true,
    name: "Rogue Planets",
    banner: "src/assets/img/banners/rogue-planets-banner.png",
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
    banner: "src/assets/img/banners/vge-banner.png",
    desc: "An unfinished Ray Marcher build using C++ and OpenGL"
  },

  /** Miniturn PvP Turn-based Game */
  miniturn: {
    banner: "src/assets/img/banners/miniturn-banner.png",
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
    banner: "src/assets/img/banners/mos6502-banner.png",
    desc: "A basic MOS 6502 processor emulator"
  },

  /** 2D Ascii art puzzle platformer game */
  prompt_: {
    banner: "src/assets/img/banners/prompt-banner.png",
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
    banner: "src/assets/img/banners/codex-banner.png",
    desc: "My attempt to create a flexible & lightweight code editor",

    languages: { Rust: 5, Svelte: 4, TypeScript: 3, SCSS: 2, Tauri: 1 },
    created: "2021-09-28"
  },

  /** C Sharp Neural Network library I made */
  CSNN: {
    banner: "src/assets/img/banners/csnn-banner.png",
    desc: "Small incomplete Neural Network library for C#"
  },

  /** A co-op minigame my friends and I made */
  barnstorm: {
    banner: "src/assets/img/banners/barnstorm-banner.jpg",
    desc: "A Frantic Co-op farming game my friends and I made",

    languages: { Unity: 2, "C#": 1 },
    created: "2020-03-03T07:32:24Z",
    updated: "2021-11-22T07:32:24Z"
  },

  /** A game I worked on together with a team of developers */
  "Slash 'n Catch": {
    banner: "src/assets/img/banners/snc-banner.png",
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