export interface ProjectData {
  /** The path to the banner for this project. (Optional) */
  banner?: string;

  /** Extra languages that will be added to this project. (Optional) */
  languages?: { [key: string]: number };

  /** A url to the projects steam store page. (Optional) */
  steam_url?: string;
}

const projects: { [key: string]: ProjectData | any } = {

  /** Emberry Chat Project */
  emberry: {
    enchanted: true,
    banner: "src/assets/img/emberry-banner.png",
    languages: { Tauri: 1 }
  },

  /** Youtile Youtube Viewer Project */
  youtile: {
    banner: "src/assets/img/youtile-banner.png",
    languages: { Tauri: 1 }
  },

  /** Miniturn PvP Turn-based Game */
  miniturn: {
    banner: "src/assets/img/miniturn-banner.png",
    steam_url: "https://store.steampowered.com/app/1069220/Miniturn",
    url: "https://store.steampowered.com/app/1069220/Miniturn",
    desc: "Turn-based strategy game with a twist",

    languages: { Unity: 2, "C#": 1 },
    created: "2020-03-03T07:32:24Z",
    updated: "2021-11-22T07:32:24Z"
  },

  "6502-Emulator": {
    banner: "src/assets/img/mos6502-banner.png",
    desc: "Self-made MOS 6502 processor emulator"
  },

  Prompt_: {
    desc: "A 2D puzzle platformer with an ascii art style",
    languages: { Unity: 2, "C#": 1 }
  },

  CSNN: {
    enchanted: true,
    desc: "Custom Neural Network library for C#"
  }

}

export default projects;