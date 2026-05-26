const PROJECTS = {
  games: [
    {
      id: "crossworld-chronicles",
      title: "Crossworld Chronicles",
      thumbnail: "assets/screenshots/CrossworldChronicles.jpg",
      thumbnailContain: true,
      video: "assets/Video/CrossworldChronicleTrailer_c.mp4",
      screenshots: [
        "assets/screenshots/CrossworldChronicles2.jpg",
        "assets/screenshots/crossworldChronicles3.jpg",
        "assets/screenshots/CrossworldChronicles4.jpg",
        "assets/screenshots/CrossworldChronicles5.jpg",
        "assets/screenshots/CrossworldChronicles1.jpg",
        "assets/screenshots/CrossworldChronicles6.jpg"
      ],
      summary: "A cooperative multiplayer VR game built as a client project with Coal Car Studio Ltd., featuring two distinct player roles and real-time netcode.",
      genre: "Co-op VR",
      platform: ["PC VR"],
      roles: ["Lead Developer"],
      skills: ["#Unity", "#C#", "#VR", "#Multiplayer", "#Netcode", "#ScriptableObjects", "#BackendDev"],
      links: {},
      detail: {
        overview: "Crossworld Chronicles is a cooperative multiplayer VR game made as a client project with Coal Car Studio Ltd. Built in Unity as a vertical slice with real-time netcode, it has two player roles: the Strategist places turrets from an overhead view, and the Explorer fights through the level in first-person VR. A shared mana pool keeps both players genuinely dependent on each other.",
        contribution: [
          "Dual control systems for both Strategist and Explorer roles",
          "Full weapons and combat system",
          "Turret placement and enemy AI logic",
          "Shared mana mechanic and health/pickup systems",
          "Scriptable Object architecture for scalable data",
          "Backend work on client's tech stack",
          "Managed client feedback, expectations and delivery throughout"
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
          "Enemy AI patrol and detection via NavMesh and Finite State Machines",
          "Player controls and third-person camera rig",
          "Photo analysis system evaluating shot composition and subject detection"
        ],
        learnings: "Unity, C#, NavMesh AI, Finite State Machines, Raycast-based detection systems, third-person camera rigs."
      }
    },
    {
      id: "runekinetic",
      title: "Runekinetic",
      thumbnail: "assets/screenshots/Runekinetic0.gif",
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
          "Enemy AI with per-type combat abilities that adapt to player behaviour",
          "Full VFX pipeline from particle systems to shader-driven effects"
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
          "Gameplay systems and physics-based movement",
          "Procedural tentacle animation",
          "Original sound design and music",
          "All visual art assets"
        ],
        learnings: "Unity, C#, Procedural Animation, Physics Simulation, Audio Design, 2D Art, Custom Shaders."
      }
    },
    {
      id: "atka-and-iku",
      title: "Atka and Iku",
      thumbnail: "assets/screenshots/Atka and Iku.png",
      screenshots: [
        "assets/screenshots/AtkIKu1.jpg",
        "assets/screenshots/AtkIKu2.jpg",
        "assets/screenshots/AtkIKu3.jpg",
        "assets/screenshots/AtkIKu4.jpg",
        "assets/screenshots/AtkIKu5.jpg",
        "assets/screenshots/AtkIKu6.jpg",
        "assets/screenshots/AtkIKu7.jpg"
      ],
      summary: "A 2D precise platformer following two spirits through a frozen mythological world.",
      genre: "Platformer",
      platform: ["PC"],
      roles: ["Lead Game Designer", "Level Designer", "Programmer"],
      skills: ["#Unity", "#C#", "#LevelDesign", "#PrecisionPlatformer", "#Narrative"],
      links: {},
      detail: {
        overview: "A 2D precise platformer set in a mythological arctic world. Two spirits, tight movement mechanics, and an emotional story running through it all. With special jumping mechanics, players get a brand new experience compared to a general platformer.",
        contribution: [
          "Animation system design and development",
          "Led game design across the project",
          "Custom character controller built for a precise, responsive feel",
          "All levels designed with increasing complexity"
        ],
        learnings: "Built a character controller that handles precise movement and player feedback without feeling floaty. Designed levels that ramp in complexity while guiding players through the story without a single line of dialogue."
      }
    },
    {
      id: "daylight-souls",
      title: "Daylight Souls",
      thumbnail: "assets/screenshots/DaylightSouls1.jpg",
      screenshots: [
        "assets/screenshots/Diebydaylight.png",
        "assets/screenshots/DaylightSouls2.jpg",
        "assets/screenshots/DaylightSouls3.jpg",
        "assets/screenshots/DaylightSouls4.jpg",
        "assets/screenshots/DaylightSouls5.jpg",
        "assets/screenshots/DaylightSouls6.jpg"
      ],
      summary: "A 2D roguelite Souls-like where players decide the attacking pattern of the boss.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Systems Designer", "Programmer", "UI/UX Designer"],
      skills: ["#Unity", "#C#", "#SoulsLike", "#Roguelite", "#UIDesign", "#BossDesign"],
      links: {},
      detail: {
        overview: "Daylight Souls follows the formula of a hardcore Souls-like game, but instead of just learning a boss's attacking pattern, players can actually choose each individual move the boss will perform. With more control over the boss's behavior, players have more room to build strategies and counter enemies on their own terms.",
        contribution: [
          "Combat system design and development",
          "Random attacking pattern system",
          "UI system"
        ],
        learnings: "Designed a combat system where the player controls the boss's attack sequence, giving each run a different strategic feel. Built a roguelike system on top of that to keep runs varied and replayable."
      }
    }
  ],
  levelDesign: [
    {
      id: "lost-in-the-woods",
      title: "Lost in the Woods",
      thumbnail: "assets/screenshots/LostInWoods0.png",
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
          "Full map layout designed from scratch",
          "Iterated on chokepoints and spawn balance through playtests"
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
