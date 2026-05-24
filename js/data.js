const PROJECTS = {
  games: [
    {
      id: "crossworld-chronicles",
      title: "Crossworld Chronicles",
      thumbnail: "",
      summary: "A cooperative multiplayer VR game built as a client project with Coal Car Studio Ltd., featuring two distinct player roles and real-time netcode.",
      genre: "Co-op VR",
      platform: ["PC VR"],
      roles: ["Lead Developer"],
      skills: ["#Unity", "#C#", "#VR", "#Multiplayer", "#Netcode", "#ScriptableObjects", "#BackendDev"],
      links: {},
      detail: {
        overview: "Crossworld Chronicles is a cooperative multiplayer VR game built as a sponsored client project with Coal Car Studio Ltd. The team delivered a vertical slice in Unity with real-time multiplayer and two player roles: the Strategist places and manages defensive turrets from an overhead view, while the Explorer fights through the level in first-person VR. Both players share a mana pool that forces real cooperation rather than just co-existing in the same space.",
        contribution: [
          "Built dual control systems for both the Strategist and Explorer roles",
          "Developed a full weapons and combat system",
          "Built turret placement mechanics and enemy AI logic",
          "Designed the shared mana system to drive cooperative play",
          "Implemented health systems and pickup mechanics",
          "Set up a Scriptable Object architecture for clean, scalable data",
          "Handled backend development using the client's own tech stack",
          "First real client engagement: navigated feedback, managed expectations and translated their vision into working features"
        ],
        learnings: "Unity, C#, XR Toolkit, VR development, Netcode for GameObjects, real-time multiplayer, backend integration, Scriptable Objects, client communication."
      }
    },
    {
      id: "what-a-fridge",
      title: "What The Fridge?!",
      thumbnail: "assets/screenshots/WhataFridgeLogo.png",
      thumbnailContain: true,
      summary: "A stealth game where players must capture scandalous celebrity moments without being noticed.",
      genre: "Stealth",
      platform: ["PC"],
      roles: ["Lead Programmer", "Game Designer"],
      skills: ["#Unity", "#C#", "#AI", "#StealthSystem", "#PhotoSystem"],
      links: {},
      screenshots: [
        "assets/screenshots/WhataFridge5.png",
        "assets/screenshots/WhataFridge1.png",
        "assets/screenshots/WhataFridge4.png",
        "assets/screenshots/WhataFridge3.png",
        "assets/screenshots/WhataFridge2.png",
        "assets/screenshots/WhataFridge0.png"
      ],
      detail: {
        overview: "A third-person stealth game where players must blend in among NPCs and photograph scandalous moments between celebrities without getting caught. Timing, positioning, and awareness are everything.",
        contribution: [
          "Built the full enemy AI with patrol behaviour and detection logic using NavMesh and Finite State Machines",
          "Developed player controls and third-person camera rig",
          "Built a photo analysis system that evaluates shot composition and subject detection"
        ],
        learnings: "Unity, C#, NavMesh AI, Finite State Machines, Raycast-based detection systems, third-person camera rigs."
      }
    },
    {
      id: "runekinetic",
      title: "Runekinetic",
      thumbnail: "assets/screenshots/Runekinetic0.gif",
      thumbnailContainDark: true,
      screenshots: [
        "assets/screenshots/Runekinetic2.jpg",
        "assets/screenshots/Runekinetic3.jpg",
        "assets/screenshots/Runekinetic1.jpg"
      ],
      summary: "A fast-paced action game where rune-casting and kinetic combat combine into something pretty satisfying.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Gameplay Programmer", "VFX Artist"],
      skills: ["#Unity", "#C#", "#VFX", "#ShaderGraph", "#CombatDesign"],
      links: {},
      detail: {
        overview: "An action game built around chaining rune spells together for big kinetic combos. You're pitted against hordes of enemies and your job is to find the combo that feels the most satisfying to pull off.",
        contribution: [
          "Developed the enemy AI system, giving each enemy type its own combat abilities that adapt to the player's behaviour",
          "Built and owned the full VFX pipeline, from particle systems to shader-driven effects"
        ],
        learnings: "Unity, C#, Behaviour Trees, ShaderGraph, VFX Graph, Particle Systems, Combat System Design."
      }
    },
    {
      id: "squishy-squid",
      title: "Squishy Squid",
      thumbnail: "assets/screenshots/SquishySquid0.png",
      screenshots: [
        "assets/screenshots/SquishySquid2.png",
        "assets/screenshots/SquishySquid3.png",
        "assets/screenshots/SquishySquid4.png",
        "assets/screenshots/SquishySquid1.png"
      ],
      summary: "A fully solo-developed game. A hungry squid navigating underwater hazards with hand-crafted art, sound, animations and physics.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Solo Developer"],
      skills: ["#Unity", "#C#", "#ProceduralAnimation", "#SoundDesign", "#Physics"],
      links: {},
      detail: {
        overview: "A physics-driven game where you pilot a squishy squid through ocean environments, eating everything in your path. Art, sound effects, animations and game logic were all built from scratch.",
        contribution: [
          "Designed and built all gameplay systems",
          "Wrote procedural tentacle animation and custom physics-based movement",
          "Produced all original sound effects and music",
          "Created all visual art assets"
        ],
        learnings: "Unity, C#, Procedural Animation, Physics Simulation, Audio Design, 2D Art, Custom Shaders."
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
        contribution: [
          "Led game design across the full project",
          "Built the character controller from scratch to get that precise, responsive feel",
          "Designed all levels with progressively increasing complexity"
        ],
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
        contribution: [
          "Designed the combat system",
          "Built the procedural level generation",
          "Put together a minimal UI inspired by FromSoftware games"
        ],
        learnings: "Dug deep into what makes Souls games actually work from a design perspective. The brutality has to feel fair or players just quit. Also got into procedural 2D dungeon generation as a system."
      }
    }
  ],
  levelDesign: [
    {
      id: "lost-in-the-woods",
      title: "Lost in the Woods",
      thumbnail: "assets/screenshots/LostInWoods0.png",
      thumbnailContainDark: true,
      screenshots: [
        "assets/screenshots/LostInWoods1.jpg",
        "assets/screenshots/LostInWoods1.png"
      ],
      summary: "A Garry's Mod deathmatch map built around asymmetric sightlines and vertical combat.",
      genre: "Level Design",
      platform: ["PC"],
      roles: ["Level Designer"],
      skills: ["#GarrysMod", "#Hammer", "#LevelDesign", "#FPS", "#SpaceDesign"],
      links: {},
      detail: {
        overview: "A multiplayer deathmatch map for Garry's Mod set in a dense woodland clearing with a central fort. Built to encourage diverse combat scenarios across different play styles.",
        contribution: [
          "Designed the full map layout from scratch",
          "Ran multiple playtests and iterated on chokepoints and spawn balance based on what I observed"
        ],
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
