import{a as e}from"./path-718918e9.js";function o(r){const n=[];for(let t=0;t<r.length;t++){const a=r[t];n.push({owner:{name:a.owner.login,url:a.owner.html_url},name:a.name,urls:{repo:a.html_url},created:a.created_at,updated:a.pushed_at,desc:a.description,tags:a.topics,languages:a.languages,license:a.license,stargazers_count:a.stargazers_count})}return n}function i(r,n){const t=JSON.parse(sessionStorage.getItem("repos"));t[r].languages=n,sessionStorage.setItem("repos",JSON.stringify(t)),dispatchEvent(new StorageEvent("storage",{key:"repos",storageArea:sessionStorage,newValue:JSON.stringify(t)}))}function p(r){addEventListener("storage",n=>{n.storageArea===sessionStorage&&n.key==="repos"&&r(JSON.parse(n.newValue))})}const u={emberry:{enchanted:!0,banner:e+"/img/banners/emberry.webp",languages:{Tauri:1},updated:"On Going"},youtile:{banner:e+"/img/banners/youtile.webp",urls:{download:"https://github.com/youtile/youtile/releases/latest"},languages:{Tauri:1}},ld49:{enchanted:!0,name:"Rogue Planets",banner:e+"/img/banners/rogue-planets.webp",urls:{itch:"https://roboolet.itch.io/rogue-planets"},desc:"Our game for the 49th Ludum Dare gamejam",achievement:{url:"https://ldjam.com/events/ludum-dare/49/rogue-planets",text:"39"},updated:"2021-10-04T07:32:24Z"},"Friends-in-a-galaxy":{banner:e+"/img/banners/friends-in-a-galaxy.webp",urls:{download:"https://github.com/FunkyBuritto/Friends-in-a-galaxy/releases/latest"},desc:"A local co-op game using your phone as a controller",languages:{Unity:1}},wax:{banner:e+"/img/banners/wax.webp",desc:"A HTML parser written in rust"},barnstorm:{banner:e+"/img/banners/barnstorm.webp",urls:{video:"https://youtu.be/sJJFOS8xfTM"},desc:"A Frantic Co-op farming game my friends and I made",languages:{Unity:2,"C#":1},created:"2020-03-03T07:32:24Z",updated:"2021-11-22T07:32:24Z"},miniturn:{banner:e+"/img/banners/miniturn.webp",urls:{main:"https://store.steampowered.com/app/1069220/Miniturn",steam:"https://store.steampowered.com/app/1069220/Miniturn"},desc:"Turn-based strategy game with a twist",languages:{"C#":1,Unity:2},created:"2020-03-03T07:32:24Z",updated:"2021-11-22T07:32:24Z"},"6502-Emulator":{banner:e+"/img/banners/mos6502.webp",desc:"A basic MOS 6502 processor emulator"},prompt_:{banner:e+"/img/banners/prompt.webp",desc:"A 2D puzzle platformer with an ascii art style",urls:{main:"https://maxcoppen.itch.io/prompt",itch:"https://maxcoppen.itch.io/prompt"},languages:{"C#":1,Unity:2},created:"2020",updated:"2021-11-26T07:32:24Z"},codex:{banner:e+"/img/banners/codex.webp",desc:"My attempt to create a flexible & lightweight code editor",languages:{Rust:5,Svelte:4,TypeScript:3,SCSS:2,Tauri:1},created:"2021-09-28"},CSNN:{banner:e+"/img/banners/csnn.webp",desc:"Small incomplete Neural Network library for C#"},VoxelGameEngine:{banner:e+"/img/banners/vge.webp",desc:"An unfinished Ray Marcher build using C++ and OpenGL"},"Slash 'n Catch":{banner:e+"/img/banners/snc.webp",desc:"A project where I gained loads of gamedev experience.",languages:{"C#":1,Unity:2},created:"2018",updated:"2019"},AsciiEngine:{desc:"Simple little Game Engine made with C#."}};export{o as f,p as o,u as p,i as u};
