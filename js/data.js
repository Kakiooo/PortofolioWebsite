const PROJECTS = {
  games: [
    {
      id: "what-a-fridge",
      title: "What A Fridge",
      thumbnail: "assets/thumbnails/what-a-fridge.jpg",
      summary: "A strategy game where you play as a raccoon trying to manage a completely chaotic fridge ecosystem.",
      genre: "Strategy",
      platform: ["PC"],
      roles: ["Lead Programmer", "Game Designer"],
      skills: ["#Unity", "#C#", "#GameDesign", "#AI", "#SystemsDesign"],
      links: {},
      detail: {
        overview: "A top-down strategy game where you're a raccoon stuck inside a fridge, managing a chaotic little ecosystem. Resources go rogue, food entities have their own agendas, and things spiral fast.",
        contribution: "Handled the core game loop programming, built the AI system for the food entities, and put together the inventory management.",
        learnings: "Got really comfortable with finite state machines for enemy AI. Also learned a lot about how fast things can break down on a game jam timeline and how to iterate quickly under pressure."
      }
    },
    {
      id: "runekinetic",
      title: "Runekinetic",
      thumbnail: "assets/thumbnails/runekinetic.jpg",
      summary: "A fast-paced action game where rune-casting and kinetic combat combine into something pretty satisfying.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Gameplay Programmer", "VFX Artist"],
      skills: ["#Unity", "#C#", "#VFX", "#ShaderGraph", "#CombatDesign"],
      links: {},
      detail: {
        overview: "An action game built around chaining rune spells together for big kinetic combos. You're pitted against hordes of enemies and your job is to find the combo that feels the most satisfying to pull off.",
        contribution: "Built the spell chaining system from scratch, set up the particle VFX pipeline, and spent a lot of time iterating on combat feel through playtesting.",
        learnings: "Learned a lot about shader programming and how much work goes into making combat feel punchy and satisfying. Feedback loops matter way more than I expected."
      }
    },
    {
      id: "squishy-squid",
      title: "Squishy Squid",
      thumbnail: "assets/thumbnails/squishy-squid.jpg",
      summary: "Control a hungry squid navigating underwater hazards to satisfy its endless appetite.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Solo Developer"],
      skills: ["#Unity", "#C#", "#ProceduralAnimation", "#GameJam", "#Physics"],
      links: {},
      detail: {
        overview: "A physics-driven game where you pilot a squishy squid through ocean environments, eating everything in your path. Built in 48 hours for a game jam.",
        contribution: "Made the whole thing solo, including procedural tentacle animation and a movement system that actually feels like controlling a squid.",
        learnings: "Procedural animation was the main challenge here. Also a good reminder of how much you can get done when you're forced to cut scope and focus."
      }
    },
    {
      id: "atka-and-iku",
      title: "Atka and Iku",
      thumbnail: "assets/thumbnails/atka-iku.jpg",
      summary: "A 3D precision platformer following two spirits through a frozen mythological world.",
      genre: "Platformer",
      platform: ["PC"],
      roles: ["Lead Game Designer", "Level Designer", "Programmer"],
      skills: ["#Unity", "#C#", "#LevelDesign", "#PrecisionPlatformer", "#3D", "#Narrative"],
      links: { browser: "#" },
      detail: {
        overview: "A 3D precision platformer set in a mythological arctic world. Two spirits, tight movement mechanics, and an emotional story running through it all.",
        contribution: "Led game design, built the character controller from scratch to get that precise responsive feel, and designed all the levels with increasing complexity.",
        learnings: "Learned a ton about what makes a platformer feel good to control. Spent a lot of time on player feedback and movement responsiveness. Also got to explore how level design can tell a story without dialogue."
      }
    },
    {
      id: "daylight-souls",
      title: "Daylight Souls",
      thumbnail: "assets/thumbnails/daylight-souls.jpg",
      summary: "A 2D roguelite Souls-like where death is the only teacher in a bright sunlit world.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Systems Designer", "Programmer", "UI/UX Designer"],
      skills: ["#Unity", "#C#", "#SoulsLike", "#Roguelite", "#UIDesign", "#ProceduralGen"],
      links: { browser: "#" },
      detail: {
        overview: "Inverts the classic Souls formula into a bright colorful world that is still just as punishing. Runs are procedurally generated so each attempt plays out differently.",
        contribution: "Designed the combat system, built the procedural level generation, and put together a minimal UI inspired by FromSoftware games.",
        learnings: "Dug deep into what makes Souls games actually work from a design perspective. The brutality has to feel fair or players just quit. Also got into procedural 2D dungeon generation as a system."
      }
    }
  ],
  levelDesign: [
    {
      id: "lost-in-the-woods",
      title: "Lost in the Woods",
      thumbnail: "assets/thumbnails/lost-in-woods.jpg",
      summary: "A Garry's Mod deathmatch map built around asymmetric sightlines and vertical combat.",
      genre: "Level Design",
      platform: ["PC"],
      roles: ["Level Designer"],
      skills: ["#GarrysMod", "#Hammer", "#LevelDesign", "#FPS", "#SpaceDesign"],
      links: {},
      detail: {
        overview: "A multiplayer deathmatch map for Garry's Mod set in a dense woodland clearing with a central fort. Built to encourage diverse combat scenarios across different play styles.",
        contribution: "Designed the layout from scratch, ran multiple playtests, and kept refining the chokepoints and spawn balance based on what I saw.",
        learnings: "Learned the fundamentals of FPS map flow, how sightlines shape player behavior, and how much a small layout tweak can change the feel of a fight."
      }
    }
  ],
  applications: []
};

const SKILLS = [
  { name: "Unity", category: "engine" },
  { name: "Unreal Engine", category: "engine" },
  { name: "C#", category: "language" },
  { name: "C++", category: "language" },
  { name: "VR / XR Dev", category: "platform" },
  { name: "Level Design", category: "design" },
  { name: "Game Design", category: "design" },
  { name: "Shader Graph", category: "art" },
  { name: "VFX", category: "art" },
  { name: "Procedural Gen", category: "programming" },
  { name: "UI / UX", category: "design" },
  { name: "Physics Sim", category: "programming" },
];
