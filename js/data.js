const PROJECTS = {
  games: [
    {
      id: "crossworld-chronicles",
      title: "Crossworld Chronicles",
      thumbnail: "assets/screenshots/CrossworldChronicleLogo.png",
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
      skills: ["#Unity", "#C#", "#VR", "#Multiplayer", "#Netcode", "#ScriptableObjects", "#BackendDev", "#AzureDevOps"],
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
          "Used Azure DevOps for code quality checks and aligned the team with a consistent coding structure",
          "Mentored developers on technical problems throughout the project",
          "Managed client feedback, expectations and delivery throughout"
        ],
        challenge: "Keeping two completely different play experiences in sync over the network. The Strategist plays from an overhead view while the Explorer is in first-person VR, and both share one mana pool, so every turret placement, spell, and pickup had to resolve consistently for both players in real time without desync or VR-breaking latency.",
        solution: "I built the networking on Netcode for GameObjects with server-authoritative state for shared resources like the mana pool, so neither client could drift out of sync. Scriptable Object architecture kept gameplay data decoupled from networked logic, which made it fast to iterate on turrets and weapons without touching netcode. Regular playtests with both roles active caught edge cases early."
      }
    },
    {
      id: "what-a-fridge",
      title: "What The Fridge?!",
      thumbnail: "assets/screenshots/WhataFridgeLogo.png",
      thumbnailContain: true,
      video: "assets/Video/WhatTheFridgeTrailer.mp4",
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
        challenge: "Making the photo system actually judge a photo. The game needed to evaluate whether a screenshot the player took counted as a scandalous moment, which meant analyzing shot composition and detecting which subjects were in frame at the moment of capture.",
        solution: "I built a raycast-based analysis system that checks subject visibility, framing, and occlusion at the instant the photo is taken, then scores the shot. Combining that with FSM-driven NPC behavior meant the moments worth photographing emerged naturally from the AI rather than being scripted."
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
        challenge: "Making combos feel kinetic rather than just functional. Chaining rune spells had to look and feel impactful, but early versions read as visually flat, and enemies that ignored player behavior made every fight play out the same way.",
        solution: "I built the VFX pipeline end to end, from particle systems to shader-driven effects in ShaderGraph and VFX Graph, tuning timing and feedback until combos landed with weight. On the AI side, behaviour trees gave each enemy type combat abilities that adapt to how the player fights, so combos have to be chosen, not memorized."
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
        challenge: "Making a physics-driven squid feel alive. Hand-animating tentacles would never react believably to movement and collisions, and as a solo project every discipline (art, sound, animation, code) was on me.",
        solution: "I wrote a procedural tentacle animation system driven by the physics simulation itself, so the tentacles trail, squash, and react naturally to whatever the player does. Building all the art, sound, and music myself kept the whole game tonally consistent from a single vision."
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
        challenge: "Precision platformers live or die on game feel. The special jumping mechanics had to feel responsive and exact, without the floatiness that default physics gives you, and the levels had to teach those mechanics and tell an emotional story without a single line of dialogue.",
        solution: "I built a custom character controller from scratch, tuning acceleration, jump arcs, and input buffering until movement felt precise and readable. Levels were designed to ramp in complexity, introducing each mechanic in a safe space before testing it, using layout and visual language alone to guide players through the story."
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
        challenge: "Letting players choose the boss's attacks without killing the challenge. If players control the boss's moveset, the obvious risk is that they just pick whatever is easiest to dodge and the Souls-like tension disappears.",
        solution: "I designed the combat system so that choosing attack patterns is a strategic trade-off rather than a difficulty dial, and layered a randomized roguelite structure on top so no two runs resolve the same way. The result keeps the mastery loop of a Souls-like while giving players real agency over the fight."
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
        challenge: "Making one map serve every play style. A deathmatch map with a central fort naturally favors defenders and long sightlines, which risks stale gameplay where snipers dominate and close-range players have no route in.",
        solution: "I designed asymmetric sightlines and vertical routes so aggressive, sneaky, and defensive players all have viable options, then iterated on chokepoints and spawn balance through repeated playtests. Watching how small layout tweaks completely changed the feel of a fight shaped how I approach space design now."
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
