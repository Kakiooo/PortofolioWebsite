const PROJECTS = {
  games: [
    {
      id: "kaiju-corp",
      title: "Kaiju Corp",
      thumbnail: "assets/screenshots/KaijuCorpThumb.jpg",
      video: "",
      youtubeId: "vqeblNzdrPg",
      screenshots: [
        { src: "assets/screenshots/KaijuCorp1.jpg", caption: "Unique momentum-driven player movement" },
        { src: "assets/screenshots/KaijuCorp2.jpg", caption: "Jetpack system" },
        { src: "assets/screenshots/KaijuCorp3.jpg", caption: "Weapon system, with multiple weapon options" },
        { src: "assets/screenshots/KaijuCorp4.jpg", caption: "Weapon system" },
        { src: "assets/screenshots/KaijuCorp5.jpg", caption: "Weapon system" },
        { src: "assets/screenshots/KaijuCorp6.jpg", caption: "Weapon system" },
        { src: "assets/screenshots/KaijuCorp7.jpg", caption: "VR Kaiju grab interaction with a PC player" }
      ],
      summary: "A cross-platform multiplayer game built with Photon Fusion, taken from concept to a fully playable build by a four-person team in under three months. I owned the PC player experience.",
      genre: "Cross-platform Multiplayer",
      platform: ["PC", "Cross-platform"],
      roles: ["Developer"],
      skills: ["#Unity", "#C#", "#Photon Fusion", "#Character Controller", "#Weapon System", "#Editor Tooling"],
      links: {},
      detail: {
        overview: "Kaiju Corp is a cross-platform multiplayer game built with Photon Fusion. As one of a four-person team, we took it from concept to a fully playable build in under three months. I focused on the PC player experience: the Three Cs (character, camera and controls), the weapon system, UI implementation, and the networking that keeps PC players in sync. I also built a custom Unity tool to streamline the art implementation pipeline.",
        contribution: [
          "Built a unique, momentum-driven character movement system with networking implemented",
          "PC player systems: the Three Cs of character, camera and controls",
          "Weapon system for PC players",
          "UI implementation for the PC build",
          "Networking for PC players over Photon Fusion",
          "Custom Unity tool to streamline the art implementation pipeline"
        ],
        challenge: "A lot of the visual effects were hard to observe or edit. My teammate and I lost hours previewing particle systems by manually toggling each child object under the VFX group on and off, and Unity's built-in preview cannot stop at a specific frame, which made it painful to check whether a change had actually landed on the exact moment we cared about.",
        solution: "I considered living with it or buying a preview package from the Asset Store, but those only preview VFX without letting you edit them, so I would still have been switching windows constantly, and paying for an asset on a student project was hard to justify. Building a tool would cost development days we did not have, but the manual clicking was costing us more. So I built a custom editor window that previews any frame and holds there, steps backwards, exposes the sub particle systems so you can edit or toggle them in place, and exports as a new prefab that leaves the original untouched. That tool became <a href=\"#project-vfx-workbench\" data-project-id=\"vfx-workbench\" class=\"detail-link\">VFX Workbench</a>. Looking back, cutting features like a customised anchor and background to ship fast was the right call, but if I did it again I would ask my teammate what he needed first, because the first version was designed around my own workflow."
      }
    },
    {
      id: "crossworld-chronicles",
      title: "Crossworld Chronicles",
      thumbnail: "assets/screenshots/CrossworldChronicleLogo.png",
      thumbnailContain: true,
      thumbnailPad: "0.2rem",
      video: "",
      youtubeId: "GJr4T5UpWUM",
      screenshots: [
        "assets/screenshots/CrossworldChronicles2.jpg",
        "assets/screenshots/crossworldChronicles3.jpg",
        "assets/screenshots/CrossworldChronicles4.jpg",
        "assets/screenshots/CrossworldChronicles5.jpg",
        "assets/screenshots/CrossworldChronicles1.jpg",
        "assets/screenshots/CrossworldChronicles6.jpg"
      ],
      summary: "A cooperative multiplayer VR game built as a client project with Coal Car Studio Ltd., featuring two distinct player roles and real-time networked multiplayer.",
      genre: "Multiplayer VR",
      platform: ["PC VR"],
      roles: ["Developer"],
      skills: ["#Unity", "#C#", "#VR", "#Multiplayer", "#Microsoft PlayFab", "#Scalable Structure", "#Azure DevOps"],
      links: {},
      detail: {
        overview: "Crossworld Chronicles is a cooperative multiplayer VR game made as a client project with Coal Car Studio Ltd. at the Centre for Digital Media. Built in Unity as a vertical slice, it has two player roles: the Strategist places turrets from an overhead view, and the Explorer fights through the level in first-person VR. A shared mana pool keeps both players genuinely dependent on each other. The backend runs on Microsoft PlayFab, while the real-time gameplay stays in sync through an RPC layer built on a clean separation of data and logic.",
        contribution: [
          "Dual control systems for both Strategist and Explorer roles",
          "Full weapons and combat system",
          "Turret placement and enemy AI logic",
          "Shared mana mechanic and health/pickup systems",
          "Scriptable Object architecture for a scalable, designer-friendly structure",
          "Backend work on client's tech stack",
          "Used Azure DevOps for code quality checks and aligned the team with a consistent coding structure",
          "Mentored developers on technical problems throughout the project",
          "Managed client feedback, expectations and delivery throughout"
        ],
        challenge: "The hardest part was synchronising state between the two players over the network, specifically getting the RPC layer right. Both players act on shared state in real time, so every action had to be sent and received reliably between clients. Any mistake in what got sent, or when, meant the two players would end up seeing different versions of the game.",
        solution: "I separated data from logic. The RPCs only carry data between players, cleanly sent and received, without directly driving gameplay logic. Each client then runs that logic locally off the synced data, so no one player's actions can corrupt the game state on someone else's end."
      }
    },
    {
      id: "what-a-fridge",
      title: "What The Fridge?!",
      thumbnail: "assets/screenshots/WhataFridgeLogo.png",
      thumbnailContain: true,
      video: "",
      youtubeIds: ["FGzGbdtIlcg", "H8WwWqN-N9Q"],
      summary: "A stealth game where players must capture scandalous celebrity moments without being noticed.",
      genre: "Stealth",
      platform: ["PC"],
      roles: ["Developer", "Game Designer"],
      skills: ["#Unity", "#C#", "#AI", "#Stealth System", "#Photo Recognition System"],
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
          "Photo analysis system evaluating shot composition and subject detection",
"Raycast-based photo scoring: subject visibility, framing and occlusion checks at capture time",
"Stealth loop tying NPC awareness to player positioning and disguise",
"UI and feedback for photo capture, scoring and mission progression"
        ],
        challenge: "Making the photo system actually judge a photo. The game needed to evaluate whether a screenshot the player took counted as a scandalous moment, which meant analyzing shot composition and detecting which subjects were in frame at the moment of capture.",
        solution: "I built a raycast-based analysis system that checks subject visibility, framing, and occlusion at the instant the photo is taken, then scores the shot. Combining that with FSM-driven NPC behavior meant the moments worth photographing emerged naturally from the AI rather than being scripted."
      }
    },
    {
      id: "grapple-runner",
      title: "Grapple Runner",
      thumbnail: "assets/screenshots/GrappleRunner5.jpg",
      video: "",
      youtubeId: "gnHSOCEALLo",
      screenshots: [
        "assets/screenshots/GrappleRunner5.jpg",
        "assets/screenshots/GrappleRunner7.jpg",
        "assets/screenshots/GrappleRunner8.jpg",
        "assets/screenshots/GrappleRunner2.jpg",
        "assets/screenshots/GrappleRunner3.jpg",
        "assets/screenshots/GrappleRunner1.jpg",
        "assets/screenshots/GrappleRunner4.jpg",
        "assets/screenshots/GrappleRunner6.jpg"
      ],
      summary: "A first-person parkour game focused on fluid movement, combining a grappling hook with wall-running into one continuous flow.",
      genre: "Parkour FPS",
      platform: ["PC"],
      roles: ["Developer", "Level Designer"],
      skills: ["#Unreal", "#C++", "#Level Design", "#Momentum System"],
      extraCategories: ["levelDesign"],
      links: {},
      detail: {
        overview: "Grapple Runner is a first-person parkour game built to give players a fluid, continuous sense of movement by combining a grappling hook with wall-running. I handled the level design and the movement programming, polishing the wall-running and grapple mechanics with a momentum system that actively tracks the player's speed and feeds it into each type of movement.",
        contribution: [
          "First-person movement programming: grapple and wall-running",
          "Momentum system that tracks player speed and applies it across movement types",
          "Level design built around the movement mechanics",
"Recalculating momentum on each player state change to keep speed bounded",
"Grapple hook implementation: aiming, attach, swing and release physics",
"First-person camera and input polish tuned around high-speed traversal"
        ],
        challenge: "The hardest mechanic to get right was wall-running. Because momentum kept stacking while the player was on the wall, their speed would climb to an insane level, to the point where the character became almost impossible to control.",
        solution: "I solved it by actively tracking momentum and recalculating it whenever the player's actions or state changed, instead of letting speed accumulate unchecked. Tying the momentum value to those state changes kept movement fast but controllable, which also made the levels far easier to design around."
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
      roles: ["Developer", "VFX Artist"],
      skills: ["#Unity", "#C#", "#VFX", "#Shader Graph", "#Combat Design", "#Shape Validation"],
      links: {},
      detail: {
        overview: "An action game built around chaining rune spells together for big kinetic combos. You're pitted against hordes of enemies and your job is to find the combo that feels the most satisfying to pull off.",
        contribution: [
          "Enemy AI with per-type combat abilities that adapt to player behaviour",
          "Full VFX pipeline from particle systems to shader-driven effects",
"Shape-drawing validation tool: generates pivots along the player's stroke as they draw",
"Tolerance circles per pivot so imperfect hand-drawn shapes still register",
"Recorded-shape library of real player attempts, matched against by closest-fit lookup"
        ],
        challenge: "Spells are cast by drawing shapes, and most spells are a sequence of several shapes rather than just one. The challenge was building a drawing validation system that could measure how accurately a player drew each shape, then match that sequence against a spell recipe to work out which spell they were casting. It had to be precise enough to tell similar shapes apart, but forgiving enough that a hand-drawn shape never has to be perfect.",
        solution: "I built a tool that generates pivot points along the player's stroke as they draw, then compares those pivots against the pivots of each standard shape. To handle the fact that no one draws a shape perfectly, each standard pivot creates a small tolerance circle around itself, and if the player's matching pivot lands inside that circle it counts as correct. On top of that, I recorded a large set of real, imperfectly drawn shapes, each stored with its pivot vector values as list data. When the game validates a drawing, it compares against that library and returns the closest match, so a messy but recognisable shape still resolves to the right spell."
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
      summary: "A fully solo-developed game. A hungry squid navigating underwater hazards, with a hand-drawn character, animation clips and a custom physics system.",
      genre: "Action",
      platform: ["PC"],
      roles: ["Solo Developer"],
      skills: ["#Unity", "#C#", "#Momentum System", "#2D Animation", "#Physics"],
      links: {},
      detail: {
        overview: "A physics-driven game where you pilot a squishy squid through ocean environments, eating everything in your path. The main character, all animation clips, and the game logic were built from scratch.",
        contribution: [
          "Gameplay systems and physics-based movement",
          "Custom momentum and bounce system",
          "Hand-drawn main character and all animation clips",
"Level design across the aquarium environments",
"Newton's-third-law bounce model tuned for consistent feel across surfaces",
"Full solo delivery: design, art, animation and code owned end to end"
        ],
        challenge: "The core of the game is the squid bouncing around the aquarium, and it has to keep its momentum as it bounces instead of bleeding off speed. That made the momentum calculation the most important system in the whole game. Unity's built-in physics wasn't stable enough to give consistent, believable bounces, so I couldn't rely on it for the feel I needed.",
        solution: "I built my own momentum system using Newton's third law as the reference, modelling each bounce the way a ball actually rebounds off a surface in reality. Handling the momentum myself instead of leaning on Unity's physics meant the squid reacts consistently and keeps its speed through every bounce, so the movement stays predictable and feels right."
      }
    },
    {
      id: "atka-and-iku",
      title: "Atka and Iku",
      thumbnail: "assets/screenshots/Atka and Iku.png",
      thumbnailPosition: "center 80%",
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
      roles: ["Lead Game Designer", "Level Designer", "Developer"],
      skills: ["#Unity", "#C#", "#Level Design", "#Coyote Time"],
      links: {},
      detail: {
        overview: "A 2D precise platformer set in a mythological arctic world. Players aim at the right position to trigger a movement boost, and a resource system limits how much fire they can shoot, which pushes them to strategise before acting rather than moving on instinct.",
        contribution: [
          "Animation system design and development",
          "Led game design across the project",
          "Custom character controller built for a precise, responsive feel",
          "All levels designed with increasing complexity"
        ],
        challenge: "The biggest challenge was how jumping felt between platforms. Players naturally want to get as close to the edge as possible before leaping, so they often press jump a fraction of a second after they have already left the platform. But the game constantly runs a ground check to decide whether a jump is allowed, so those slightly late presses were being rejected, and the movement felt unresponsive and punishing.",
        solution: "I added coyote time: a short grace window right after the player leaves a platform during which a jump still counts, even though they are technically no longer on the ground. That small buffer makes those slightly late presses register the way players expect, so the character feels far more responsive and under their control."
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
      skills: ["#Garrys Mod", "#Hammer", "#Level Design", "#FPS", "#Space Design"],
      links: {},
      detail: {
        overview: "A multiplayer deathmatch map for Garry's Mod set in a dense woodland clearing with a central fort. Built to encourage diverse combat scenarios across different play styles.",
        contribution: [
          "Full map layout designed from scratch",
          "Iterated on chokepoints and spawn balance through playtests",
"Asymmetric sightlines to prevent snipers from dominating open ground",
"Vertical routes that give close-range and flanking players real options",
"Spawn placement balanced through repeated playtests to keep fights fresh"
        ],
        challenge: "Making one map serve every play style. A deathmatch map with a central fort naturally favors defenders and long sightlines, which risks stale gameplay where snipers dominate and close-range players have no route in.",
        solution: "I designed asymmetric sightlines and vertical routes so aggressive, sneaky, and defensive players all have viable options, then iterated on chokepoints and spawn balance through repeated playtests. Watching how small layout tweaks completely changed the feel of a fight shaped how I approach space design now."
      }
    }
  ],
  applications: [],
  tools: [
    {
      id: "vfx-workbench",
      title: "VFX Workbench",
      thumbnail: "assets/screenshots/VFXWorkbenchThumb.png",
      video: "assets/Video/VFXWorkbenchDemo.mp4",
      screenshots: [
        "assets/screenshots/VFXWorkbench1.png",
        "assets/screenshots/VFXWorkbench2.png",
        "assets/screenshots/VFXWorkbench4.png",
        "assets/screenshots/VFXWorkbench5.png",
        "assets/screenshots/VFXWorkbench3.png"
      ],
      summary: "A Unity editor tool that smooths out the VFX implementation pipeline, letting artists break down, preview, scrub and edit particle systems without ever placing them in the scene.",
      genre: "Editor Tool",
      platform: ["Unity Editor"],
      roles: ["Technical Artist"],
      skills: ["#Unity", "#C#", "#Unity Editor Scripting", "#VFX"],
      links: {},
      detail: {
        overview: "VFX Workbench is a Unity editor tool built to make implementing VFX less painful. Assign a particle system prefab and the window breaks it down into every sub particle system, each one toggleable on or off directly in the tool. A built-in preview means you never have to drag an effect into the scene just to look at it, and a stage slider with replay lets you inspect any point in the effect's lifetime. Any particle system can be edited in place, and when the tweaks are done you export a new prefab, leaving the original untouched.",
        contribution: [
          "Built the entire tool solo, from the editor window and UI to the preview rendering and prefab export",
          "Came out of my own frustration with Unity requiring effects to be placed in the scene just to observe them",
"Frame-scrubbing preview rendered at any tick of the effect's timeline",
"Sub particle systems exposed for toggling and in-place editing without touching the scene",
"Fresh-prefab export so the original asset is never modified"
        ],
        challenge: "The hardest part was stage viewing. Unity's particle systems are built to play forward in real time, so there is no direct way to hold an effect at an arbitrary point in its lifetime, which is exactly what you need when you are tuning timing and want to study one specific moment.",
        solution: "I made the editor render the preview at a specific tick on the effect's timeline, rather than letting the particle system play through in real time. When a developer wants to see the effect running continuously, the tool steps through successive ticks along the timeline, resetting the system between each one instead of playing straight through to the end. That makes any stage of the effect directly addressable, so you can hold on a single moment or scrub across the whole lifetime."
      }
    }
  ]
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
