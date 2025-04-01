
export interface MinecraftServer {
  id: string;
  name: string;
  address: string;
  port: number;
  description: string;
  category: ServerCategory;
  tags: string[];
  version: string;
  playerCount?: {
    online: number;
    max: number;
  };
  discord?: string;
  website?: string;
  logo?: string;
  features: string[];
}

export type ServerCategory = 
  | 'Survival'
  | 'Creative'
  | 'Minigames'
  | 'Skyblock'
  | 'Factions'
  | 'Prison'
  | 'Roleplay'
  | 'Hardcore'
  | 'Economy'
  | 'PvP'
  | 'Adventure'
  | 'Other';

export const serverCategories: ServerCategory[] = [
  'Survival',
  'Creative',
  'Minigames',
  'Skyblock',
  'Factions',
  'Prison',
  'Roleplay',
  'Hardcore',
  'Economy',
  'PvP',
  'Adventure',
  'Other'
];

export const servers: MinecraftServer[] = [
  {
    id: "nethergames",
    name: "NetherGames",
    address: "play.nethergames.org",
    port: 19132,
    description: "NetherGames is one of the biggest Minecraft Bedrock Edition servers featuring minigames like Bedwars, Skywars, & more!",
    category: "Minigames",
    tags: ["Bedwars", "Skywars", "Factions", "Popular"],
    version: "Latest",
    playerCount: {
      online: 3500,
      max: 10000
    },
    discord: "https://discord.gg/nethergames",
    website: "https://nethergames.org",
    features: ["Custom Minigames", "Weekly Events", "Custom Items", "Economy"],
    logo: "/placeholder.svg"
  },
  {
    id: "hive",
    name: "The Hive",
    address: "geo.hivebedrock.network",
    port: 19132,
    description: "The Hive is a Minecraft Bedrock server featuring unique minigames and experiences.",
    category: "Minigames",
    tags: ["Skywars", "Battle Royale", "Hide and Seek", "Popular"],
    version: "Latest",
    playerCount: {
      online: 5000,
      max: 15000
    },
    discord: "https://discord.gg/hive",
    website: "https://hivemc.com",
    features: ["Monthly Updates", "Custom Cosmetics", "Seasonal Events", "Treasure Chests"],
    logo: "/placeholder.svg"
  },
  {
    id: "lifeboat",
    name: "Lifeboat Network",
    address: "play.lbsg.net",
    port: 19132,
    description: "Lifeboat is a Minecraft PE server network featuring survival games and more!",
    category: "Survival",
    tags: ["Survival Games", "Skyblock", "Creative"],
    version: "Latest",
    playerCount: {
      online: 2000,
      max: 8000
    },
    discord: "https://discord.gg/lifeboat",
    website: "https://lbsg.net",
    features: ["Seasonal Events", "Custom Shops", "Daily Rewards", "Friend System"],
    logo: "/placeholder.svg"
  },
  {
    id: "cubecraft",
    name: "CubeCraft Games",
    address: "play.cubecraft.net",
    port: 19132,
    description: "CubeCraft Games is one of the largest Minecraft Bedrock and Java servers with a variety of games.",
    category: "Minigames",
    tags: ["Skyblock", "Eggwars", "Tower Defense", "Popular"],
    version: "Latest",
    playerCount: {
      online: 4500,
      max: 12000
    },
    discord: "https://discord.gg/cubecraft",
    website: "https://cubecraft.net",
    features: ["Cross-Platform", "Custom Games", "Weekly Updates", "Seasonal Events"],
    logo: "/placeholder.svg"
  },
  {
    id: "mineplex",
    name: "Mineplex",
    address: "pe.mineplex.com",
    port: 19132,
    description: "Mineplex is a premium Minecraft server with custom minigames and events.",
    category: "Minigames",
    tags: ["Cake Wars", "Survival Games", "Block Hunt"],
    version: "Latest",
    playerCount: {
      online: 1500,
      max: 7000
    },
    discord: "https://discord.gg/mineplex",
    website: "https://mineplex.com",
    features: ["Custom Maps", "Cross-Platform", "Ranks", "Daily Rewards"],
    logo: "/placeholder.svg"
  },
  {
    id: "galaxite",
    name: "Galaxite",
    address: "play.galaxite.net",
    port: 19132,
    description: "A Minecraft Bedrock SMP and Duels server with custom enchants and more.",
    category: "Survival",
    tags: ["SMP", "Survival", "PvP", "Economy"],
    version: "Latest",
    discord: "https://discord.gg/galaxite",
    website: "https://galaxite.net",
    features: ["Custom Enchantments", "Land Claims", "Player Shops", "Jobs"],
    logo: "/placeholder.svg"
  },
  {
    id: "fallentech",
    name: "FallenTech",
    address: "play.fallentech.io",
    port: 19132,
    description: "FallenTech is a technology-focused Minecraft Bedrock survival server.",
    category: "Survival",
    tags: ["Technology", "Economy", "Custom Items"],
    version: "Latest",
    discord: "https://discord.gg/fallentech",
    features: ["Custom Machines", "Player Economy", "Mob Arenas", "Weekly Events"],
    logo: "/placeholder.svg"
  },
  {
    id: "pixelparadise",
    name: "Pixel Paradise",
    address: "play.pixelparadise.gg",
    port: 19132,
    description: "A Roleplay and Creative server for Minecraft Bedrock Edition.",
    category: "Roleplay",
    tags: ["Roleplay", "Creative", "Plots", "Community"],
    version: "Latest",
    playerCount: {
      online: 800,
      max: 3000
    },
    discord: "https://discord.gg/pixelparadise",
    website: "https://pixelparadise.gg",
    features: ["Roleplay Tools", "NPC System", "Custom Furniture", "Build Contests"],
    logo: "/placeholder.svg"
  },
  {
    id: "hyperlands",
    name: "Hyperlands",
    address: "play.hyperlandsmc.net",
    port: 19132,
    description: "Hyperlands is a competitive Minecraft Bedrock Edition server focusing on PvP minigames.",
    category: "PvP",
    tags: ["Bedwars", "Skywars", "Practice", "Competitive"],
    version: "Latest",
    discord: "https://discord.gg/hyperlands",
    website: "https://hyperlandsmc.net",
    features: ["Leaderboards", "Custom Kits", "Tournaments", "Anti-Cheat"],
    logo: "/placeholder.svg"
  },
  {
    id: "cosmicpe",
    name: "CosmicPE",
    address: "cosmicpe.me",
    port: 19132,
    description: "CosmicPE is a Minecraft Bedrock factions server with custom enchants.",
    category: "Factions",
    tags: ["Factions", "PvP", "Raiding", "Economy"],
    version: "Latest",
    playerCount: {
      online: 900,
      max: 5000
    },
    discord: "https://discord.gg/cosmicpe",
    website: "https://cosmicpe.me",
    features: ["Custom Enchants", "Crate System", "Boss Battles", "Faction Wars"],
    logo: "/placeholder.svg"
  },
  {
    id: "ecpe",
    name: "EcoPE",
    address: "play.ecope.me",
    port: 19132,
    description: "An economy-focused SMP server for Minecraft Bedrock Edition.",
    category: "Economy",
    tags: ["Economy", "Jobs", "Shops", "Land Claims"],
    version: "Latest",
    discord: "https://discord.gg/ecope",
    features: ["Advanced Economy", "Player Shops", "Town System", "Quests"],
    logo: "/placeholder.svg"
  },
  {
    id: "verzide",
    name: "Verzide",
    address: "play.verzide.com",
    port: 19132,
    description: "Verzide is a Minecraft Bedrock prison server with unique features.",
    category: "Prison",
    tags: ["Prison", "PvP", "Mines", "Economy"],
    version: "Latest",
    discord: "https://discord.gg/verzide",
    website: "https://verzide.com",
    features: ["Auto Mines", "Custom Pickaxes", "Gang System", "Prison Ranks"],
    logo: "/placeholder.svg"
  }
];
