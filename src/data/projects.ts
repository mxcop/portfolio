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

  /** Rogue planets for the Ludum Dare gamejam */
  "ld49": {
    name: "Rogue Planets",
    banner: "src/assets/img/banners/rogue-planets-banner.png",
    urls: {
      itch: "https://roboolet.itch.io/rogue-planets",
    },
    desc: "Our game for the 49th Ludum Dare gamejam",

    achievement: {
      logo: "src/assets/img/ludum-dare-logo.png",
      url: "https://ldjam.com/events/ludum-dare/49/rogue-planets",
      text: "39"
    }
  },

  /** 6502 Emulator I build using C# */
  "6502-Emulator": {
    banner: "src/assets/img/banners/mos6502-banner.png",
    desc: "Self-made MOS 6502 processor emulator"
  },

  /** 2D Ascii art puzzle platformer game */
  prompt_: {
    desc: "A 2D puzzle platformer with an ascii art style",
    urls: {
      main: "https://maxcoppen.itch.io/prompt",
      itch: "https://maxcoppen.itch.io/prompt",
    },

    languages: { Unity: 2, "C#": 1 },
    created: "2020",
    updated: "2021-11-26T07:32:24Z"
  },

  /** C Sharp Neural Network library I made */
  CSNN: {
    enchanted: true,
    desc: "Custom Neural Network library for C#"
  }

}

export default projects;