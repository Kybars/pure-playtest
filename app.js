const GAME = {
  title: "PuRe Playtest",
  featureBudget: 5,
  ancestries: [
    { id: "human", name: "Human", available: true, description: "Adaptable, ambitious, and shaped by a great variety of cultures.", benefit: "Available in this playtest" },
    { id: "dwarf", name: "Dwarf", available: false, description: "Stout folk of deep halls, enduring craft, and long memory.", benefit: "Coming later" },
    { id: "elf", name: "Elf", available: false, description: "Ancient, keen-sensed people bound to beauty and old sorrows.", benefit: "Coming later" },
    { id: "halfling", name: "Halfling", available: false, description: "Small, steadfast folk with strong communities and quiet courage.", benefit: "Coming later" },
    { id: "orc", name: "Orc", available: false, description: "Fierce survivors whose strength is forged through hardship.", benefit: "Coming later" }
  ],
  skillPointsPerLifepath: 300,
  skillPointCapPerStage: 40,
  presetBoostPattern: [7, 7, 6, 6, 5, 5, 4, 4, 3, 3],
  skillProfiles: {
    rural: ["athletics", "brawn", "endurance", "first-aid", "local-knowledge", "ride", "survival", "willpower"],
    urban: ["deceive", "drive", "influence", "insight", "intimidate", "local-knowledge", "perception", "sleight"],
    noble: ["customs", "deceive", "influence", "insight", "language", "perception", "ride", "willpower"],
    wild: ["athletics", "conceal", "endurance", "navigate", "perception", "ranged", "stealth", "survival"],
    road: ["athletics", "drive", "insight", "local-knowledge", "navigate", "perception", "ride", "survival"],
    sea: ["athletics", "brawn", "customs", "endurance", "navigate", "perception", "swim", "willpower"],
    craft: ["brawn", "conceal", "customs", "endurance", "insight", "perception", "sleight", "willpower"],
    learned: ["customs", "first-aid", "influence", "insight", "language", "local-knowledge", "perception", "willpower"],
    military: ["athletics", "brawn", "endurance", "intimidate", "melee", "perception", "ranged", "willpower"],
    healing: ["endurance", "first-aid", "influence", "insight", "language", "local-knowledge", "perception", "willpower"],
    court: ["customs", "deceive", "influence", "insight", "intimidate", "language", "perception", "willpower"],
    trade: ["customs", "deceive", "drive", "influence", "insight", "local-knowledge", "navigate", "perception"]
  },
  lifepathProfiles: {
    "born-peasant": "rural", "born-villager": "rural", "born-city": "urban", "born-highlands": "wild",
    "born-forest": "wild", "born-nomad": "road", "born-noble": "noble", "born-sea": "sea",
    farmhand: "rural", herder: "rural", apprentice: "craft", "workshop-hand": "craft",
    scribe: "learned", page: "court", peddler: "trade", hunter: "wild", guide: "wild",
    deckhand: "sea", soldier: "military", healer: "healing", journeyman: "craft",
    "master-artisan": "craft", guildmaster: "trade", merchant: "trade", "caravan-master": "road",
    scholar: "learned", physician: "healing", courtier: "court", steward: "court",
    sergeant: "military", captain: "military", guard: "military", veteran: "military",
    scout: "wild", ranger: "wild", sailor: "sea", navigator: "sea", shipmaster: "sea", outlaw: "road"
  },
  standardSkills: [
    { id: "athletics", name: "Athletics" }, { id: "brawn", name: "Brawn" },
    { id: "conceal", name: "Conceal" }, { id: "deceive", name: "Deceive" },
    { id: "drive", name: "Drive" }, { id: "first-aid", name: "First Aid" },
    { id: "influence", name: "Influence" }, { id: "insight", name: "Insight" },
    { id: "intimidate", name: "Intimidate" }, { id: "language", name: "Language" },
    { id: "local-knowledge", name: "Local Knowledge" },
    { id: "navigate", name: "Navigate" }, { id: "perception", name: "Perception" },
    { id: "ride", name: "Ride" },
    { id: "sing", name: "Sing" }, { id: "sleight", name: "Sleight of Hand" },
    { id: "stealth", name: "Stealth" }, { id: "survival", name: "Survival" },
    { id: "swim", name: "Swim" }, { id: "customs", name: "Customs" }
  ],
  combatSkills: [
    { id: "endurance", name: "Endurance", available: true },
    { id: "evade", name: "Evade", available: true },
    { id: "willpower", name: "Willpower", available: true },
    { id: "melee", name: "Melee", available: true },
    { id: "ranged", name: "Ranged", available: true }
  ],
  professionalSkills: [
    { id: "alchemy", name: "Alchemy" }, { id: "animal-training", name: "Animal Training" },
    { id: "artifice", name: "Artifice" }, { id: "bureaucracy", name: "Bureaucracy" },
    { id: "commerce", name: "Commerce" }, { id: "command", name: "Command" },
    { id: "craft", name: "Craft" }, { id: "engineering", name: "Engineering" },
    { id: "entertain", name: "Entertain" }, { id: "farming", name: "Farming" },
    { id: "healing", name: "Healing" }, { id: "heraldry", name: "Heraldry" },
    { id: "hunting", name: "Hunting" }, { id: "law", name: "Law" },
    { id: "leadership", name: "Leadership" }, { id: "lore", name: "Lore" },
    { id: "medicine", name: "Medicine" }, { id: "navigation-sea", name: "Seamanship" },
    { id: "oratory", name: "Oratory" }, { id: "performance", name: "Performance" },
    { id: "religion", name: "Religion" }, { id: "scholarship", name: "Scholarship" },
    { id: "scouting", name: "Scouting" }, { id: "tradecraft", name: "Tradecraft" },
    { id: "warfare", name: "Warfare" }, { id: "combat-magic", name: "Combat Magic" }
  ],
  professionalUnlocks: {
    "born-peasant": ["farming", "animal-training"], "born-villager": ["craft", "healing"],
    "born-city": ["commerce", "tradecraft"], "born-highlands": ["scouting", "animal-training"],
    "born-forest": ["hunting", "scouting"], "born-nomad": ["animal-training", "commerce"],
    "born-noble": ["heraldry", "oratory"], "born-sea": ["navigation-sea", "commerce"],
    "farmhand": ["farming", "animal-training"], "herder": ["animal-training", "farming"],
    "apprentice": ["craft", "artifice"], "workshop-hand": ["craft", "engineering"],
    "scribe": ["scholarship", "bureaucracy"], "page": ["heraldry", "leadership"],
    "peddler": ["commerce", "tradecraft"], "hunter": ["hunting", "scouting"],
    "guide": ["scouting", "lore"], "deckhand": ["navigation-sea", "tradecraft"],
    "soldier": ["warfare", "law"], "healer": ["healing", "medicine"],
    "journeyman": ["craft", "engineering"], "master-artisan": ["artifice", "engineering"],
    "guildmaster": ["leadership", "commerce"], "merchant": ["commerce", "tradecraft"],
    "caravan-master": ["leadership", "animal-training"], "scholar": ["lore", "scholarship"],
    "physician": ["medicine", "healing"], "courtier": ["oratory", "bureaucracy"],
    "steward": ["bureaucracy", "leadership"], "sergeant": ["command", "warfare"],
    "captain": ["command", "leadership"], "guard": ["law", "warfare"],
    "veteran": ["command", "warfare"], "scout": ["scouting", "hunting"],
    "ranger": ["scouting", "lore"], "sailor": ["navigation-sea", "tradecraft"],
    "navigator": ["navigation-sea", "scholarship"], "shipmaster": ["command", "navigation-sea"],
    "outlaw": ["tradecraft", "scouting"]
  },
  bornLifepaths: [
    { id: "born-peasant", name: "Peasant", description: "Born to the fields, livestock, and the unrelenting rhythm of the seasons.", benefit: "Salt of the earth", grants: ["folk", "wild"] },
    { id: "born-villager", name: "Villager", description: "Raised in a close community of trades, traditions, and shared obligations.", benefit: "Community ties", grants: ["folk", "craft"] },
    { id: "born-city", name: "Cityborn", description: "Raised amid crowded streets, commerce, rumor, and restless ambition.", benefit: "Streetwise", grants: ["urban", "trade"] },
    { id: "born-highlands", name: "Highlands", description: "Born among steep passes, hard weather, and fiercely independent clans.", benefit: "Mountain hardy", grants: ["wild", "martial"] },
    { id: "born-forest", name: "Forest", description: "Raised beneath an old canopy where trails and seasons speak plainly.", benefit: "Woodland sense", grants: ["wild", "folk"] },
    { id: "born-nomad", name: "Nomad", description: "Born into a people whose home travels with herds, wagons, and seasons.", benefit: "Road wisdom", grants: ["road", "wild"] },
    { id: "born-noble", name: "Noble", description: "Raised under the weight of a storied name and exacting expectations.", benefit: "Courtly bearing", grants: ["court", "learned"] },
    { id: "born-sea", name: "Seaborn", description: "Raised by tides, working decks, and horizons that promised distant shores.", benefit: "Sea legs", grants: ["trade", "road"] }
  ],
  lifepaths: [
    { id: "farmhand", name: "Farmhand", description: "You labored through sowing, harvest, and the care of working animals.", benefit: "Seasoned laborer", starts: ["born-peasant", "born-villager"], anyOf: [{ allPaths: ["herder"] }], grants: ["folk", "wild"] },
    { id: "herder", name: "Herder", description: "You guarded stubborn animals across lonely country.", benefit: "Animal-wise", starts: ["born-peasant", "born-highlands", "born-nomad"], anyOf: [{ allPaths: ["farmhand"] }], grants: ["folk", "wild"] },
    { id: "apprentice", name: "Apprentice", description: "You learned a patient trade beneath a demanding master.", benefit: "Practised hands", starts: ["born-villager", "born-city", "born-noble"], anyOf: [{ allPaths: ["workshop-hand"] }], grants: ["craft"] },
    { id: "workshop-hand", name: "Workshop Hand", description: "You earned your keep through repetition, sweat, and practical craft.", benefit: "Real experience", starts: ["born-peasant", "born-villager", "born-city"], anyOf: [{ anyPaths: ["farmhand", "apprentice", "peddler"] }], grants: ["craft"] },
    { id: "scribe", name: "Scribe", description: "You copied records, letters, and ideas that were not meant for you.", benefit: "Letters and lore", starts: ["born-city", "born-noble"], anyOf: [{ anyPaths: ["page", "apprentice", "healer"] }], grants: ["learned", "court"] },
    { id: "page", name: "Household Page", description: "You served at table and learned how power behaves when it feels unwatched.", benefit: "Read the room", starts: ["born-noble"], anyOf: [{ allPaths: ["scribe"] }], grants: ["court", "martial"] },
    { id: "peddler", name: "Road Peddler", description: "You carried useful things and better stories between settlements.", benefit: "A contact everywhere", starts: ["born-villager", "born-city", "born-nomad", "born-sea"], anyOf: [{ anyPaths: ["farmhand", "herder", "workshop-hand", "deckhand"] }], grants: ["trade", "road"] },
    { id: "hunter", name: "Hunter", description: "You learned patience, clean tracks, and the terrible intimacy of hunger.", benefit: "Keen pursuit", starts: ["born-peasant", "born-highlands", "born-forest", "born-nomad"], anyOf: [{ anyPaths: ["farmhand", "herder", "guide"] }], grants: ["wild", "martial"] },
    { id: "guide", name: "Wilderness Guide", description: "You led others through country that punishes the unprepared.", benefit: "Find the way", starts: ["born-highlands", "born-forest", "born-nomad"], anyOf: [{ anyPaths: ["herder", "hunter", "peddler"] }], grants: ["wild", "road"] },
    { id: "deckhand", name: "Deckhand", description: "You learned ropes, watches, storms, and obedience aboard ship.", benefit: "Weather the deck", starts: ["born-sea", "born-city"], anyOf: [{ allPaths: ["peddler"] }], grants: ["trade", "road"] },
    { id: "soldier", name: "Soldier", description: "You drilled, marched, and stood in a battle line when running looked wiser.", benefit: "Hold formation", starts: ["born-peasant", "born-city", "born-highlands", "born-noble"], anyOf: [{ anyPaths: ["farmhand", "herder", "page"] }], grants: ["martial"] },
    { id: "healer", name: "Healer", description: "You learned to set bones, tend fevers, and offer comfort without promises.", benefit: "Tend the wounded", starts: ["born-villager", "born-forest", "born-noble"], anyOf: [{ anyPaths: ["farmhand", "herder", "hunter"] }], grants: ["learned", "folk"] },

    { id: "journeyman", name: "Journeyman", description: "Your craft took you onto the road in search of mastery.", benefit: "Guild standing", anyOf: [{ allPaths: ["apprentice"] }, { allPaths: ["workshop-hand"], minChapters: 2 }], grants: ["craft", "road"] },
    { id: "master-artisan", name: "Master Artisan", description: "Your work became the standard against which others were judged.", benefit: "Masterwork", anyOf: [{ allPaths: ["journeyman"] }], grants: ["craft", "command"] },
    { id: "guildmaster", name: "Guildmaster", description: "You became responsible for a craft, its people, and its compromises.", benefit: "Call in a favor", anyOf: [{ allPaths: ["journeyman"], minChapters: 2 }], grants: ["trade", "command"] },
    { id: "merchant", name: "Merchant", description: "You turned routes, risks, and relationships into a livelihood.", benefit: "Judge the market", anyOf: [{ anyPaths: ["peddler", "deckhand"] }], grants: ["trade", "court"] },
    { id: "caravan-master", name: "Caravan Master", description: "You kept people, beasts, and valuable cargo moving through danger.", benefit: "Keep them moving", anyOf: [{ allPaths: ["merchant"] }, { allPaths: ["peddler"], minChapters: 2 }], grants: ["trade", "command"] },
    { id: "scholar", name: "Scholar", description: "You pursued answers through archives and dangerous conversations.", benefit: "Ancient lore", anyOf: [{ allPaths: ["scribe"] }], grants: ["learned"] },
    { id: "physician", name: "Physician", description: "Study and long practice taught you to treat what simpler remedies cannot.", benefit: "Clinical eye", anyOf: [{ allPaths: ["healer"], anyPaths: ["scribe", "scholar"] }], grants: ["learned", "command"] },
    { id: "courtier", name: "Courtier", description: "You made a profession of favors, appearances, and carefully chosen words.", benefit: "Silver tongue", anyOf: [{ anyPaths: ["page", "scribe"] }], grants: ["court", "trade"] },
    { id: "steward", name: "Steward", description: "You managed a household's stores, servants, accounts, and secrets.", benefit: "Order the house", anyOf: [{ anyPaths: ["page", "scribe"], minChapters: 2 }], grants: ["court", "command"] },

    { id: "sergeant", name: "Sergeant", description: "Experience put other soldiers under your voice and responsibility.", benefit: "Rally the line", anyOf: [{ allPaths: ["soldier"] }], grants: ["martial", "command"] },
    { id: "captain", name: "Captain", description: "You planned campaigns and carried the consequences of command.", benefit: "Commanding presence", anyOf: [{ allPaths: ["sergeant"] }], grants: ["martial", "command"] },
    { id: "guard", name: "Watch Guard", description: "You kept uneasy peace with a stout coat and a sharper eye.", benefit: "Hold the line", anyOf: [{ allPaths: ["soldier"] }], grants: ["martial", "urban"] },
    { id: "veteran", name: "Company Veteran", description: "You survived long enough for warfare to become a permanent habit.", benefit: "Battle-hardened", anyOf: [{ allPaths: ["soldier"], minChapters: 2 }], grants: ["martial", "road"] },
    { id: "scout", name: "Scout", description: "You learned to move ahead of danger and return with useful truth.", benefit: "Eyes forward", anyOf: [{ anyPaths: ["hunter", "guide", "soldier"] }], grants: ["wild", "martial"] },
    { id: "ranger", name: "Ranger", description: "You became a trusted guardian of roads, borders, and wild places.", benefit: "Warden of the wild", anyOf: [{ allPaths: ["scout"], anyPaths: ["hunter", "guide"] }], grants: ["wild", "command"] },

    { id: "sailor", name: "Sailor", description: "Years at sea made you a trusted hand rather than merely a deck laborer.", benefit: "Able seafarer", anyOf: [{ allPaths: ["deckhand"] }], grants: ["trade", "road"] },
    { id: "navigator", name: "Navigator", description: "You learned to read charts, skies, currents, and uncertain coastlines.", benefit: "Chart a course", anyOf: [{ allPaths: ["sailor"] }], grants: ["learned", "road"] },
    { id: "shipmaster", name: "Shipmaster", description: "A vessel, crew, cargo, and every life aboard became your charge.", benefit: "Master and commander", anyOf: [{ allPaths: ["sailor"], minChapters: 2 }], grants: ["trade", "command"] },
    { id: "outlaw", name: "Outlaw", description: "Whether by sentence or necessity, you learned to live beyond protection.", benefit: "Beyond the law", anyOf: [{ anyPaths: ["peddler", "soldier", "hunter"], minChapters: 2 }], grants: ["road", "wild"] }
  ],
  features: [
    { id: "iron-grip", name: "Iron Grip", cost: 2, description: "Once per scene, hold fast against an overwhelming physical force." },
    { id: "silver-tongue", name: "Silver Tongue", cost: 2, description: "Gain an edge when bargaining with someone who wants something from you." },
    { id: "keen-senses", name: "Keen Senses", cost: 1, description: "Notice small disturbances and concealed details before others do." },
    { id: "old-magic", name: "Whisper of Old Magic", cost: 3, description: "Perform a small, uncanny working tied to your origin." },
    { id: "steadfast", name: "Steadfast", cost: 2, description: "Ignore the first fear or coercion effect in each session." },
    { id: "many-roads", name: "Many Roads", cost: 1, description: "Declare a useful contact in a settlement you have visited." }
  ]
};

const STEPS = [
  { id: "identity", label: "Identity" },
  { id: "ancestry", label: "Ancestry" },
  { id: "lifepath", label: "Lifepath" },
  { id: "skills", label: "Skills" },
  { id: "features", label: "Features" },
  { id: "review", label: "Review" }
];

const freshCharacter = () => ({
  name: "", sex: "", concept: "", appearance: "", ancestry: "", lifepaths: [],
  stageAllocations: [], skillModes: [], skillPriorityOrders: [],
  features: [], notes: "", noise: []
});

let character = loadCharacter();
let currentStep = 0;
let activeLifepathSlot = Math.min(character.lifepaths.length, 3);
let activeSkillStage = 0;
let showLifepathGuide = false;

const el = id => document.getElementById(id);
const findById = (list, id) => list.find(item => item.id === id);
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[c]));

function loadCharacter() {
  try {
    const saved = JSON.parse(localStorage.getItem("ember-and-ink-character"));
    if (!saved) return freshCharacter();
    let migratedPaths = Array.isArray(saved.lifepaths) ? saved.lifepaths.slice(0, 4) : [];
    if (migratedPaths[0] && !GAME.bornLifepaths.some(path => path.id === migratedPaths[0])) migratedPaths = [];
    for (let index = 1; index < migratedPaths.length; index++) {
      const path = GAME.lifepaths.find(candidate => candidate.id === migratedPaths[index]);
      if (!path || !pathIsAvailable(path, migratedPaths.slice(0, index))) {
        migratedPaths = migratedPaths.slice(0, index);
        break;
      }
    }
    return {
      ...freshCharacter(), ...saved, lifepaths: migratedPaths,
      stageAllocations: Array.isArray(saved.stageAllocations) ? saved.stageAllocations.slice(0, migratedPaths.length) : [],
      skillModes: Array.isArray(saved.skillModes) ? saved.skillModes.slice(0, migratedPaths.length) : [],
      skillPriorityOrders: Array.isArray(saved.skillPriorityOrders) ? saved.skillPriorityOrders.slice(0, migratedPaths.length) : []
    };
  } catch { return freshCharacter(); }
}

function saveCharacter() {
  localStorage.setItem("ember-and-ink-character", JSON.stringify(character));
  el("saveStatus").textContent = "Saved just now";
  setTimeout(() => el("saveStatus").textContent = "Saved locally", 1200);
  updateProgress();
  renderPreview();
}

function spentFeaturePoints() {
  return character.features.reduce((sum, id) => sum + (findById(GAME.features, id)?.cost || 0), 0);
}

function unlockedProfessionalSkillIds() {
  return [...new Set(character.lifepaths.flatMap(id => GAME.professionalUnlocks[id] || []))];
}

function activeCombatSkills() {
  return GAME.combatSkills.filter(skill => skill.available);
}

function allSkillDefinitions() {
  return [...GAME.standardSkills, ...GAME.combatSkills, ...GAME.professionalSkills];
}

function availableSkills() {
  const unlocked = unlockedProfessionalSkillIds();
  return [...GAME.standardSkills, ...activeCombatSkills(), ...GAME.professionalSkills.filter(skill => unlocked.includes(skill.id))];
}

function costToRaiseSkill(value, start = 20) {
  let cost = 0;
  for (let current = start; current < value; current++) cost += Math.max(1, Math.floor(current / 10));
  return cost;
}

function lifepathSkillPackage(lifepathId) {
  const professional = GAME.professionalUnlocks[lifepathId] || [];
  const profile = GAME.skillProfiles[GAME.lifepathProfiles[lifepathId]] || [];
  return [...professional, ...profile].slice(0, 10).map((skillId, index) => ({
    skillId,
    boost: GAME.presetBoostPattern[index]
  }));
}

function availableSkillsAtStage(stageIndex) {
  const unlocked = new Set(character.lifepaths.slice(0, stageIndex + 1).flatMap(id => GAME.professionalUnlocks[id] || []));
  return [...GAME.standardSkills, ...activeCombatSkills(), ...GAME.professionalSkills.filter(skill => unlocked.has(skill.id))];
}

function trainingState() {
  const allSkills = allSkillDefinitions();
  const ratings = Object.fromEntries(allSkills.map(skill => [skill.id, 20]));
  const totalPresetBoosts = Object.fromEntries(allSkills.map(skill => [skill.id, 0]));
  const stages = character.lifepaths.map((id, index) => {
    const startRatings = { ...ratings };
    const entries = lifepathSkillPackage(id);
    const presetBoosts = {};
    const presetCosts = {};
    entries.forEach(entry => {
      const start = ratings[entry.skillId];
      presetCosts[entry.skillId] = costToRaiseSkill(start + entry.boost, start);
      ratings[entry.skillId] += entry.boost;
      presetBoosts[entry.skillId] = entry.boost;
      totalPresetBoosts[entry.skillId] += entry.boost;
    });
    const afterPresetRatings = { ...ratings };
    const allowedIds = new Set(availableSkillsAtStage(index).map(skill => skill.id));
    const allocations = character.stageAllocations[index] || {};
    const freeCosts = {};
    Object.entries(allocations).forEach(([skillId, amount]) => {
      const advance = allowedIds.has(skillId) ? Math.max(0, Math.floor(Number(amount) || 0)) : 0;
      if (!advance) return;
      freeCosts[skillId] = costToRaiseSkill(ratings[skillId] + advance, ratings[skillId]);
      ratings[skillId] += advance;
    });
    const skillCosts = {};
    [...new Set([...Object.keys(presetCosts), ...Object.keys(freeCosts)])].forEach(skillId => {
      skillCosts[skillId] = (presetCosts[skillId] || 0) + (freeCosts[skillId] || 0);
    });
    const presetCost = Object.values(presetCosts).reduce((sum, cost) => sum + cost, 0);
    const freeCost = Object.values(freeCosts).reduce((sum, cost) => sum + cost, 0);
    const totalSpent = presetCost + freeCost;
    return {
      id, index, entries, presetBoosts, startRatings, afterPresetRatings, endRatings: { ...ratings },
      presetCosts, freeCosts, skillCosts, presetCost, freeCost, totalSpent,
      remaining: GAME.skillPointsPerLifepath - totalSpent,
      valid: totalSpent <= GAME.skillPointsPerLifepath && Object.values(skillCosts).every(cost => cost <= GAME.skillPointCapPerStage)
    };
  });
  const noise = character.noise;
  Object.entries(noise).forEach(([skillId, amount]) => {
    const advance = Number(amount) || 0;
    if (!advance) return;
    ratings[skillId] += advance;
  });
  return { ratings, totalPresetBoosts, stages };
}

function skillValue(skillId) {
  return trainingState().ratings[skillId];
}

function spentSkillPoints() {
  return trainingState().stages.reduce((sum, stage) => sum + stage.totalSpent, 0);
}

function skillPointBudget() {
  return character.lifepaths.length * GAME.skillPointsPerLifepath;
}

function remainingSkillPoints() {
  return skillPointBudget() - spentSkillPoints();
}

function stageAllocationComplete(stage) {
  if (!stage?.valid || stage.remaining < 0) return false;
  if (stage.remaining === 0) return true;
  return availableSkillsAtStage(stage.index).every(skill => {
    const value = stage.endRatings[skill.id];
    const nextCost = Math.max(1, Math.floor(value / 10));
    return value >= 99 || nextCost > stage.remaining || (stage.skillCosts[skill.id] || 0) + nextCost > GAME.skillPointCapPerStage;
  });
}

function skillAllocationComplete() {
  const stages = trainingState().stages;
  return stages.length === 4 && stages.every(stageAllocationComplete);
}

function normalizeLockedSkills() {
  character.stageAllocations = character.stageAllocations.slice(0, character.lifepaths.length);
  character.skillModes = character.skillModes.slice(0, character.lifepaths.length);
  character.skillPriorityOrders = character.skillPriorityOrders.slice(0, character.lifepaths.length);
  character.stageAllocations = character.stageAllocations.map((allocations = {}, index) => {
    const allowed = new Set(availableSkillsAtStage(index).map(skill => skill.id));
    return Object.fromEntries(Object.entries(allocations).filter(([id]) => allowed.has(id)));
  });
}

function completion() {
  const checks = [
    !!character.name.trim() && !!character.sex && !!character.concept.trim(), !!character.ancestry, character.lifepaths.length === 4,
    character.lifepaths.length === 4 && skillAllocationComplete(),
    character.features.length > 0
  ];
  return Math.round(checks.filter(Boolean).length / checks.length * 100);
}

function renderNav() {
  el("stepNav").innerHTML = STEPS.map((step, index) => `
    <button class="step-link ${index === currentStep ? "active" : ""} ${isStepComplete(index) ? "complete" : ""}" data-step="${index}" ${!canAccessStep(index) ? "disabled" : ""}>
      <span class="number">${isStepComplete(index) ? "✓" : index + 1}</span><strong>${step.label}</strong>
    </button>`).join("");
  document.querySelectorAll("[data-step]").forEach(button => button.addEventListener("click", () => {
    const target = Number(button.dataset.step);
    if (canAccessStep(target)) { currentStep = target; render(); }
  }));
}

function canAccessStep(index) {
  return index < 2 || !!character.ancestry;
}

function isStepComplete(index) {
  return [
    character.name.trim() && character.sex && character.concept.trim(),
    character.ancestry,
    character.lifepaths.length === 4,
    character.lifepaths.length === 4 && skillAllocationComplete(),
    character.features.length > 0 && spentFeaturePoints() <= GAME.featureBudget,
    completion() === 100
  ][index];
}

function updateProgress() {
  const percent = completion();
  el("progressPercent").textContent = `${percent}%`;
  el("progressBar").style.width = `${percent}%`;
  el("progressHint").textContent = percent === 100 ? "Ready for adventure." : ["Start with a name.", "A shape is emerging.", "Halfway to the road.", "Nearly ready."][Math.min(3, Math.floor(percent / 25))];
}

function render() {
  renderNav();
  el("stepCounter").textContent = `Step ${currentStep + 1} of ${STEPS.length}`;
  el("backButton").disabled = currentStep === 0;
  el("nextButton").disabled = currentStep === 1 && !character.ancestry;
  el("nextButton").textContent = currentStep === STEPS.length - 1 ? "Export PDF" : "Continue";
  const renderers = [renderIdentity, renderAncestry, renderLifepath, renderSkills, renderFeatures, renderReview];
  el("stepContent").innerHTML = renderers[currentStep]();
  bindStepEvents();
  updateProgress();
  renderPreview();
}

function heading(kicker, title, lead) {
  return `<span class="step-kicker">${kicker}</span><h1>${title}</h1><p class="lead">${lead}</p>`;
}

function renderIdentity() {
  return heading("Begin at the beginning", "Who steps onto the road?", "Give your character a name and a spark. You can change any of this later.") + `
    <div class="field"><label for="name">Character name</label><input id="name" data-field="name" value="${escapeHtml(character.name)}" placeholder="e.g. Marlow Fen"></div>
    <div class="field-row">
      <div class="field"><label>Sex</label><div class="segmented-choice" role="group" aria-label="Sex">
        <button type="button" class="${character.sex === "Male" ? "selected" : ""}" data-sex-choice="Male">Male</button>
        <button type="button" class="${character.sex === "Female" ? "selected" : ""}" data-sex-choice="Female">Female</button>
      </div></div>
      <div class="field"><label for="concept">Character concept</label><input id="concept" data-field="concept" value="${escapeHtml(character.concept)}" placeholder="e.g. Exiled village oracle"></div>
    </div>
    <div class="field"><label for="appearance">Appearance & manner</label><textarea id="appearance" data-field="appearance" placeholder="A few memorable details...">${escapeHtml(character.appearance)}</textarea></div>`;
}

function renderAncestry() {
  return heading("Blood & belonging", "Choose your ancestry.", "Ancestry establishes the people your character belongs to. Human is the sole playtest option; additional ancestries are scaffolded for later.") + `
    <div class="choice-grid ancestry-grid">${GAME.ancestries.map(ancestry => `
      <button class="choice-card ${character.ancestry === ancestry.id ? "selected" : ""} ${!ancestry.available ? "unavailable" : ""}"
        data-ancestry="${ancestry.id}" ${!ancestry.available ? "disabled" : ""}>
        <h3>${ancestry.name}</h3><p>${ancestry.description}</p>
        <span class="tag">${ancestry.benefit}</span>
      </button>`).join("")}</div>`;
}

function cards(list, field) {
  return `<div class="choice-grid">${list.map(item => `
    <button class="choice-card ${character[field] === item.id ? "selected" : ""}" data-choice="${field}" data-value="${item.id}">
      <h3>${item.name}</h3><p>${item.description}</p><span class="tag">${item.benefit}</span>
    </button>`).join("")}</div>`;
}

function renderLifepath() {
  if (!character.ancestry) {
    return heading("Ancestry required", "Choose your ancestry first.", "Your ancestry determines which lifepaths are available. Return to the previous step and make a selection to continue.") + `
      <div class="locked-panel"><strong>Lifepaths are locked</strong><p>No lifepath options are available until ancestry is complete.</p></div>`;
  }
  const isBorn = activeLifepathSlot === 0;
  const options = isBorn ? GAME.bornLifepaths : availableLifepaths(activeLifepathSlot);
  const selectedId = character.lifepaths[activeLifepathSlot];
  return heading("A life before adventure", "Trace the road behind you.", "Choose where you were born, then follow three connected chapters for four total lifepaths. Each career requires a credible route through your earlier experience.") + `
    <div class="guide-toggle-row">
      <p>Exact roles and accumulated experience unlock later careers.</p>
      <button class="button ghost" data-guide-toggle>${showLifepathGuide ? "Hide lifepath guide" : "Open lifepath guide"}</button>
    </div>
    ${showLifepathGuide ? renderLifepathGuide() : ""}
    <div class="lifepath-timeline">${Array.from({ length: 4 }, (_, index) => {
      const path = getLifepath(character.lifepaths[index], index);
      const locked = index > character.lifepaths.length;
      return `<button class="lifepath-slot ${index === activeLifepathSlot ? "active" : ""} ${path ? "filled" : ""}" data-lifepath-slot="${index}" ${locked ? "disabled" : ""}>
        <span>${index === 0 ? "Born" : `Chapter ${index}`}</span>
        <strong>${path?.name || (locked ? "Locked" : "Choose a path")}</strong>
      </button>`;
    }).join("")}</div>
    <div class="path-heading"><span>${isBorn ? "Choose your beginning" : `Choose chapter ${activeLifepathSlot}`}</span><small>${options.length} paths available</small></div>
    <div class="choice-grid">${options.map(item => `
      <button class="choice-card ${selectedId === item.id ? "selected" : ""}" data-lifepath-choice="${item.id}">
        <h3>${item.name}</h3><p>${item.description}</p><span class="tag">${item.benefit}</span>
        <small class="unlock-note">Unlocks ${professionalSkillNames(item.id)}</small>
        <small class="training-note">Training: ${lifepathTrainingText(item.id)}</small>
        ${!isBorn ? `<small class="prereq-note">Requires: ${prerequisiteText(item)}</small>` : ""}
      </button>`).join("")}</div>`;
}

function professionalSkillNames(lifepathId) {
  return (GAME.professionalUnlocks[lifepathId] || [])
    .map(id => findById(GAME.professionalSkills, id)?.name).filter(Boolean).join(" + ");
}

function lifepathTrainingText(lifepathId) {
  return lifepathSkillPackage(lifepathId)
    .map(entry => `${skillName(entry.skillId)} +${entry.boost}`)
    .join(", ");
}

function getLifepath(id, slot) {
  return findById(slot === 0 ? GAME.bornLifepaths : GAME.lifepaths, id);
}

function availableLifepaths(slot) {
  return availablePathsForHistory(character.lifepaths.slice(0, slot));
}

function availablePathsForHistory(history) {
  return GAME.lifepaths.filter(path => !history.includes(path.id) && pathIsAvailable(path, history));
}

function pathIsAvailable(path, history) {
  if (!history.length) return false;
  if (history.length === 1) return (path.starts || []).includes(history[0]);
  if (!path.anyOf?.length) return false;
  const careerHistory = history.slice(1);
  return path.anyOf.some(rule => {
    const enoughExperience = careerHistory.length >= (rule.minChapters || 0);
    const hasAll = (rule.allPaths || []).every(id => careerHistory.includes(id));
    const hasAny = !(rule.anyPaths || []).length || rule.anyPaths.some(id => careerHistory.includes(id));
    return enoughExperience && hasAll && hasAny;
  });
}

function pathName(id) {
  return findById(GAME.lifepaths, id)?.name || id;
}

function prerequisiteText(path) {
  const routes = [];
  if (path.starts?.length) routes.push(`${path.starts.map(id => findById(GAME.bornLifepaths, id)?.name).filter(Boolean).join(", ")} born`);
  routes.push(...(path.anyOf || []).map(rule => {
    const parts = [];
    if (rule.allPaths?.length) parts.push(rule.allPaths.map(pathName).join(" + "));
    if (rule.anyPaths?.length) parts.push(`one of ${rule.anyPaths.map(pathName).join(", ")}`);
    if (rule.minChapters) parts.push(`${rule.minChapters}+ prior career paths`);
    return parts.join(" and ");
  }));
  return routes.join(" OR ");
}

function reachablePathsFromBorn(bornId) {
  const reached = new Set();
  let routes = [[bornId]];
  for (let chapter = 1; chapter <= 3; chapter++) {
    const nextRoutes = [];
    routes.forEach(history => availablePathsForHistory(history).forEach(path => {
      reached.add(path.id);
      nextRoutes.push([...history, path.id]);
    }));
    routes = nextRoutes;
  }
  return GAME.lifepaths.filter(path => reached.has(path.id));
}

function renderLifepathGuide() {
  return `<section class="lifepath-guide">
    <div class="guide-intro"><span class="step-kicker">Route atlas</span><h2>Lifepath guide</h2><p>Born paths determine your first careers. Every later role checks the paths already in your history.</p></div>
    <div class="born-route-grid">${GAME.bornLifepaths.map(born => {
      const first = availablePathsForHistory([born.id]);
      const reachable = reachablePathsFromBorn(born.id);
      return `<article class="born-route">
        <h3>${born.name}</h3>
        <p><strong>First paths:</strong> ${first.map(path => path.name).join(", ") || "None"}</p>
        <p><strong>Reachable careers:</strong> ${reachable.map(path => path.name).join(", ") || "None"}</p>
      </article>`;
    }).join("")}</div>
    <div class="prerequisite-index">
      <h3>Career prerequisites</h3>
      ${GAME.lifepaths.map(path => `<div><strong>${path.name}</strong><span>${prerequisiteText(path)}</span></div>`).join("")}
    </div>
  </section>`;
}

function getSkillMode(stageIndex) {
  return character.skillModes?.[stageIndex] || "manual";
}

function setSkillMode(stageIndex, mode) {
  character.skillModes[stageIndex] = mode;
  if (mode === "priority") {
    const stage = trainingState().stages[stageIndex];
    priorityBudgetDistribution(stage);
  }
  saveCharacter();
  render();
}

function defaultPriorityOrder(stageIndex) {
  const available = availableSkillsAtStage(stageIndex).map(skill => skill.id);
  const professional = available.filter(skillId => GAME.professionalSkills.some(skill => skill.id === skillId));
  const combat = available.filter(skillId => GAME.combatSkills.some(skill => skill.id === skillId));
  const other = available.filter(skillId => !professional.includes(skillId) && !combat.includes(skillId));
  return [...professional, ...combat, ...other];
}

function getPriorityOrder(stageIndex) {
  const availableSkillsById = new Set(availableSkillsAtStage(stageIndex).map(skill => skill.id));
  const savedOrder = Array.isArray(character.skillPriorityOrders?.[stageIndex]) ? character.skillPriorityOrders[stageIndex] : [];
  const ordered = savedOrder.filter(skillId => availableSkillsById.has(skillId));
  const missing = defaultPriorityOrder(stageIndex).filter(skillId => !ordered.includes(skillId));
  return [...ordered, ...missing];
}

function setPriorityOrder(stageIndex, order) {
  character.skillPriorityOrders[stageIndex] = order;
  saveCharacter();
}

function reorderPrioritySkills(stageIndex, draggedId, targetId) {
  const order = getPriorityOrder(stageIndex);
  const fromIndex = order.indexOf(draggedId);
  const toIndex = order.indexOf(targetId);
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;
  const [moved] = order.splice(fromIndex, 1);
  order.splice(toIndex, 0, moved);
  setPriorityOrder(stageIndex, order);
}

function priorityBudgetDistribution(stage) {  
  // Get the current order
  const order = getPriorityOrder(stage.index);
  let budget = stage.remaining;
  if (!order.length) return order.map(() => 0);

  // Reset
  if (!character.stageAllocations[stage.index]) {
    character.stageAllocations[stage.index] = {};
  }
  order.forEach(skillId => {
    let currentValue = stage.afterPresetRatings[skillId] || 0;
    let currentIncrease = character.stageAllocations[stage.index][skillId] || 0;
    const cost = costToRaiseSkill(currentValue + currentIncrease, currentValue);
    budget += cost;
  });
  character.stageAllocations[stage.index] = {};
  saveCharacter();
  if (budget <= 0) return order.map(() => 0);
  
  // Get the budget distribution
  let prioBudget = budget;
  let prioSize = 10;
  let skillCounter = prioSize;
  order.forEach(skillId => {
    if (skillCounter-- >= 0) {
      let presetCost = (stage.presetCosts[skillId] || 0);
      prioBudget += presetCost;
    }
  });
  let increment = Math.ceil(2*prioBudget/(prioSize*(prioSize+1)));

  // Apply to character allocations
  skillCounter = prioSize;
  order.forEach(skillId => {
    let presetCost = (stage.presetCosts[skillId] || 0);
    let skillBudget = Math.min(skillCounter*increment-presetCost, GAME.skillPointCapPerStage-presetCost, budget);
    skillCounter = Math.max(1, skillCounter-1);
    let increase = 0;
    let currentValue = stage.afterPresetRatings[skillId];
    let maxValue = Math.min(99, (stage.startRatings[skillId] || 20) + GAME.skillPointCapPerStage);
    while (skillBudget > 0 && currentValue + increase < maxValue) {
      const nextCost = costToRaiseSkill(currentValue + increase + 1, currentValue + increase);
      if (nextCost > skillBudget) break;
      budget -= nextCost;
      skillBudget -= nextCost;
      increase++;
    }
    character.stageAllocations[stage.index][skillId] = increase;
  });
}

function addNoise() {
  character.noise = {};
  let training = trainingState();
  const unlockedProfessional = GAME.professionalSkills.filter(skill => unlockedProfessionalSkillIds().includes(skill.id));
  const activeCombat = activeCombatSkills();
  let skills = [...unlockedProfessional, ...GAME.standardSkills, ...activeCombat];
  let lastStage = training.stages[training.stages.length - 1];
  let budget = remainingSkillPoints();
  // Prune 10 random skills
  let skillCounter = 10;
  for (i = 0; i < skillCounter; i++) {
    let skillIndex = Math.floor(Math.random() * skills.length);
    let skillId = skills[skillIndex].id;
    let currentValue = skillValue(skillId);
    budget += costToRaiseSkill(currentValue, currentValue - 1);
    if (currentValue <= 20) continue;
    character.noise[skillId] = -1;
  }
  // Distribute budget to skill until it is gone
  let attempts = 1000;
  while (budget > 0) {
    if (attempts-- === 0) break;
    let skillIndex = Math.floor(Math.random() * skills.length);
    let skillId = skills[skillIndex].id;
    let currentValue = skillValue(skillId);
    if (currentValue >= 99) continue;
    let nextCost = costToRaiseSkill(currentValue + 1, currentValue);
    if (nextCost > budget) continue;
    budget -= nextCost;
    character.noise[skillId] = (character.noise[skillId] || 0) + 1;
  }
}

function renderSkillModeToggle(stage) {
  const mode = getSkillMode(stage.index);
  return `<div class="skill-mode-toggle">
    <div>
      <span>Training style</span>
      <button class="button ghost" data-reset-stage-allocations="${stage.index}">Reset allocations</button>
    </div>
    <div class="segmented-choice" role="group" aria-label="Skill training style">
      <button type="button" class="${mode === "manual" ? "selected" : ""}" data-skill-mode="manual">Manual increments</button>
      <button type="button" class="${mode === "priority" ? "selected" : ""}" data-skill-mode="priority">Priority order</button>
    </div>
  </div>`;
}

function renderPrioritySkillView(stage) {
  const order = getPriorityOrder(stage.index);
  const allocations = order.map(skillId => character.stageAllocations[stage.index]?.[skillId] || 0);  
  const unlockedProfessional = GAME.professionalSkills.filter(skill => unlockedProfessionalSkillIds().includes(skill.id));
  const activeCombat = activeCombatSkills();
  return `<section class="skill-section">
    <div class="path-heading"><span>Priority order</span><small>Drag to set the order of application</small></div>
    <p class="priority-summary">The top skill receives the first full level increase, and any leftover budget carries on to the lower-priority skills in staggered decrements.</p>
    <p class="manual-advice">Switch to manual mode for final touches.</p>
    <div class="priority-skill-list">
      ${order.map((skillId, index) => {
        const skill = findById(allSkillDefinitions(), skillId);
        if (!skill) return "";
        const value = stage.endRatings[skill.id];
        const freeAdvance = character.stageAllocations[stage.index]?.[skill.id] || 0;
        const presetAdvance = stage.presetBoosts[skillId] || 0;
        const stageCost = stage.skillCosts[skill.id] || 0;
        let skillLine = `<div class="`;
        if (unlockedProfessional.includes(skill)) {
          skillLine += `priority-professional-skill-row" draggable="true" data-priority-skill="${skill.id}">`;
        }
        else if (activeCombat.includes(skill)) {
          skillLine += `priority-combat-skill-row" draggable="true" data-priority-skill="${skill.id}">`;
        }
        else {
          skillLine += `priority-skill-row" draggable="true" data-priority-skill="${skill.id}">`;
        }
        skillLine += `<span class="priority-handle" aria-hidden="true">⋮⋮</span>
        <div class="priority-skill-main">
          <strong>${skill.name}</strong><small>${stage.startRatings[skillId]} → ${value} · Preset +${presetAdvance} · Invested +${freeAdvance} · ${stageCost}/${GAME.skillPointCapPerStage} pts</small>
        </div>`;
        if (stage.presetBoosts[skillId]) {
          skillLine += `<span class="priority-share">${stage.startRatings[skillId]}+${stage.presetBoosts[skillId]}+${(allocations[index] || 0)}</span>`;
        }
        else {
          skillLine += `<span class="priority-share">${stage.startRatings[skillId]}+${(allocations[index] || 0)}</span>`;
        }
        skillLine += `</div>`;
        return skillLine;
      }).join("")}
    </div>
  </section>`;
}

function renderSkills() {
  if (!character.lifepaths.length) {
    return heading("Lifepaths required", "Choose your history first.", "Each lifepath creates its own 300-point training stage.");
  }
  const state = trainingState();
  const firstIncomplete = state.stages.findIndex(stage => !stageAllocationComplete(stage));
  const furthestAccessible = firstIncomplete < 0 ? state.stages.length - 1 : firstIncomplete;
  activeSkillStage = Math.min(activeSkillStage, furthestAccessible);
  const stage = state.stages[activeSkillStage];
  const stageSkills = availableSkillsAtStage(activeSkillStage);
  const professional = stageSkills.filter(skill => GAME.professionalSkills.some(item => item.id === skill.id));
  const lifepath = getLifepath(stage.id, stage.index);
  const mode = getSkillMode(activeSkillStage);
  return heading("Training & experience", "Spend each stage in sequence.", `Every lifepath has 300 points. Its ten preset increases are charged first; you may then train any available skill, but no single skill may consume more than ${GAME.skillPointCapPerStage} cost-points during that stage.`) + `
    <div class="skill-stage-tabs">${state.stages.map(item => {
      const path = getLifepath(item.id, item.index);
      const locked = item.index > furthestAccessible;
      return `<button class="${item.index === activeSkillStage ? "active" : ""} ${stageAllocationComplete(item) ? "complete" : ""}" data-skill-stage="${item.index}" ${locked ? "disabled" : ""}>
        <span>${item.index === 0 ? "Born" : `Stage ${item.index + 1}`}</span><strong>${path?.name || item.id}</strong><small>${item.remaining} left</small>
      </button>`;
    }).join("")}</div>
    <div class="budget-strip ${!stage.valid ? "over" : ""}">
      <span>${lifepath?.name || "Stage"} · Preset ${stage.presetCost} + Invested ${stage.freeCost}</span>
      <strong>${stage.remaining} / ${GAME.skillPointsPerLifepath} remaining</strong>
    </div>
    ${renderSkillModeToggle(stage)}
    ${renderPresetTraining(stage)}
    ${mode === "priority" ? renderPrioritySkillView(stage) : `
      ${renderCombatSkillGroup(stage)}
      ${renderSkillGroup("Standard skills", GAME.standardSkills, stage)}
      ${renderProfessionalSkillGroup(`Professional skills · ${professional.length} available`, professional, stage, professional.length ? "" : "This stage has no professional skills unlocked.")}`}`;
}

function renderPresetTraining(stage) {
  const lifepath = getLifepath(stage.id, stage.index);
  return `<section class="preset-training">
    <div class="path-heading"><span>${lifepath?.name || "Lifepath"} preset training</span><small>${stage.presetCost} points applied automatically</small></div>
    <div class="preset-path-grid"><article class="preset-path">
      <div><h3>Stage ${stage.index + 1}</h3><small>Values enter from the previous stage</small></div>
      <p>${stage.entries.map(entry => `${skillName(entry.skillId)} <strong>+${entry.boost}</strong> (${stage.presetCosts[entry.skillId]} pts)`).join(" · ")}</p>
    </article></div>
  </section>`;
}

function skillName(id) {
  return findById(allSkillDefinitions(), id)?.name || id;
}

function renderCombatSkillGroup(stage) {
  return `<section class="skill-section combat-skill-section"><div class="path-heading"><span>Combat skills</span><small>Quick reference</small></div>
    <div class="skill-grid">${activeCombatSkills().map(skill => renderSkillRow(skill, stage)).join("")}</div>
  </section>`;
}

function renderSkillGroup(title, skills, stage, emptyMessage = "") {
  return `<section class="skill-section"><div class="path-heading"><span>${title}</span></div>
    ${skills.length ? `<div class="skill-grid">${skills.map(skill => renderSkillRow(skill, stage)).join("")}</div>` : `<p class="skill-empty">${emptyMessage}</p>`}
  </section>`;
}

function renderProfessionalSkillGroup(title, skills, stage, emptyMessage = "") {
  return `<section class="skill-section professional-skill-section"><div class="path-heading"><span>${title}</span></div>
    ${skills.length ? `<div class="skill-grid">${skills.map(skill => renderSkillRow(skill, stage)).join("")}</div>` : `<p class="skill-empty">${emptyMessage}</p>`}
  </section>`;
}

function renderSkillRow(skill, stage) {
  const value = stage.endRatings[skill.id];
  const freeAdvance = character.stageAllocations[stage.index]?.[skill.id] || 0;
  const presetAdvance = stage.entries.find(entry => entry.skillId === skill.id)?.boost || 0;
  const stageCost = stage.skillCosts[skill.id] || 0;
  const nextCost = Math.max(1, Math.floor(value / 10));
  const canIncrease = value < 99 && nextCost <= stage.remaining && stageCost + nextCost <= GAME.skillPointCapPerStage;
  return `<div class="skill-row">
    <div><strong>${skill.name}</strong><small>${stage.startRatings[skill.id]} → ${value} · Preset +${presetAdvance} · Invested +${freeAdvance} · ${stageCost}/${GAME.skillPointCapPerStage} pts</small></div>
    <div class="skill-controls" data-skill="${skill.id}">
      <button data-skill-delta="-5" ${freeAdvance <= 0 ? "disabled" : ""}>−5</button>
      <button data-skill-delta="-1" ${freeAdvance <= 0 ? "disabled" : ""}>−</button>
      <b>${value}</b>
      <button data-skill-delta="1" ${!canIncrease ? "disabled" : ""}>+</button>
      <button data-skill-delta="5" ${!canIncrease ? "disabled" : ""}>+5</button>
    </div>
  </div>`;
}

function renderFeatures() {
  const remaining = GAME.featureBudget - spentFeaturePoints();
  return heading("Talents & peculiarities", "Choose what sets you apart.", "Features are signature abilities. Mix smaller talents or commit to one potent gift.") + `
    <div class="budget-strip ${remaining < 0 ? "over" : ""}"><span>Feature points remaining</span><strong>${remaining}</strong></div>
    <div class="feature-list">${GAME.features.map(feature => {
      const selected = character.features.includes(feature.id);
      const affordable = selected || feature.cost <= remaining;
      return `<div class="feature-card ${selected ? "selected" : ""}">
        <div><h3>${feature.name}</h3><p>${feature.description}</p></div>
        <button class="button ${selected ? "ghost" : "primary"}" data-feature="${feature.id}" ${!affordable ? "disabled" : ""}>${selected ? "Remove" : `${feature.cost} pt${feature.cost > 1 ? "s" : ""}`}</button>
      </div>`;
    }).join("")}</div>`;
}

function renderReview() {
  const ancestry = findById(GAME.ancestries, character.ancestry);
  const lifepaths = character.lifepaths.map((id, index) => getLifepath(id, index)).filter(Boolean);
  const born = lifepaths[0];
  const features = character.features.map(id => findById(GAME.features, id)).filter(Boolean);
  const unlockedProfessional = GAME.professionalSkills.filter(skill => unlockedProfessionalSkillIds().includes(skill.id));
  return heading("The road awaits", "Review your character.", "Everything below will become your print-ready character sheet. Use your browser’s PDF option when exporting.") + `
    <div class="review-sheet">
      <h2>${escapeHtml(character.name) || "Unnamed Wanderer"}</h2>
      <p class="review-meta">${escapeHtml(character.sex)}${character.sex && character.concept ? " · " : ""}${escapeHtml(character.concept) || "No concept yet"}</p>
      <div class="review-columns">
        <div>
          <section class="review-block"><h3>Ancestry</h3><p><strong>${ancestry?.name || "Not chosen"}</strong><br>${ancestry?.description || ""}</p></section>
          <section class="review-block"><h3>Origin · Born lifepath</h3><p><strong>${born?.name || "Not chosen"}</strong><br>${born?.description || ""}</p></section>
          <section class="review-block"><h3>Lifepaths</h3>${lifepaths.length ? `<ol class="path-list">${lifepaths.map(path => `<li><strong>${path.name}.</strong> ${path.description}</li>`).join("")}</ol>` : "<p>Not chosen.</p>"}</section>
          <section class="review-block"><h3>Appearance & manner</h3><p>${escapeHtml(character.appearance) || "Not yet described."}</p></section>
        </div>
        <div>
          <section class="review-block"><h3>Features</h3>${features.length ? `<ul>${features.map(f => `<li><strong>${f.name}.</strong> ${f.description}</li>`).join("")}</ul>` : "<p>None chosen.</p>"}</section>
          <section class="review-block"><h3>Adventurer's notes</h3><textarea data-field="notes" placeholder="Allies, ambitions, burdens...">${escapeHtml(character.notes)}</textarea></section>
        </div>
      </div>
      <section class="review-skills">
        <div class="review-skills-heading">
          <div><span class="preview-label">Complete skill profile</span><h3>Skills</h3></div>
          <p><strong>${spentSkillPoints()}</strong> / ${skillPointBudget()} training points spent</p>
          <button class="button ghost" data-reset-stage-allocations="0">Reset allocations</button>
          <button class="button ghost" data-add-noise-stage="0">Add noise</button>
        </div>
        <div class="review-stage-costs">${trainingState().stages.map(stage => {
          const path = getLifepath(stage.id, stage.index);
          return `<span><strong>${path?.name || stage.id}</strong> ${stage.presetCost} preset + ${stage.freeCost} invested · ${stage.remaining} left</span>`;
        }).join("")}</div>
        ${renderReviewSkillGroup("Combat skills", GAME.combatSkills)}
        ${renderReviewSkillGroup("Standard skills", GAME.standardSkills)}
        ${renderReviewSkillGroup("Professional skills", unlockedProfessional)}
      </section>
    </div>`;
}

function renderReviewSkillGroup(title, skills) {
  return `<div class="review-skill-group">
    <h4>${title}</h4>
    <div class="review-skill-list">${skills.length
      ? skills.map(skill => {
          const value = skillValue(skill.id);
          return `<span class="${value > 20 ? "trained" : ""}"><i>${skill.name}</i><strong>${value}</strong></span>`;
        }).join("")
      : `<em>None unlocked.</em>`}
    </div>
  </div>`;
}

function bindStepEvents() {
  document.querySelectorAll("[data-guide-toggle]").forEach(button => button.addEventListener("click", () => {
    showLifepathGuide = !showLifepathGuide; render();
  }));
  document.querySelectorAll("[data-field]").forEach(input => input.addEventListener("input", event => {
    character[event.target.dataset.field] = event.target.value; saveCharacter();
  }));
  document.querySelectorAll("[data-choice]").forEach(button => button.addEventListener("click", () => {
    character[button.dataset.choice] = button.dataset.value; saveCharacter(); render();
  }));
  document.querySelectorAll("[data-sex-choice]").forEach(button => button.addEventListener("click", () => {
    character.sex = button.dataset.sexChoice; saveCharacter(); render();
  }));
  document.querySelectorAll("[data-ancestry]").forEach(button => button.addEventListener("click", () => {
    const ancestry = findById(GAME.ancestries, button.dataset.ancestry);
    if (ancestry?.available) { character.ancestry = ancestry.id; saveCharacter(); render(); }
  }));
  document.querySelectorAll("[data-lifepath-slot]").forEach(button => button.addEventListener("click", () => {
    activeLifepathSlot = Number(button.dataset.lifepathSlot); render();
  }));
  document.querySelectorAll("[data-lifepath-choice]").forEach(button => button.addEventListener("click", () => {
    character.lifepaths = character.lifepaths.slice(0, activeLifepathSlot);
    character.lifepaths[activeLifepathSlot] = button.dataset.lifepathChoice;
    normalizeLockedSkills();
    activeSkillStage = Math.min(activeSkillStage, character.lifepaths.length - 1);
    if (activeLifepathSlot < 3) activeLifepathSlot++;
    saveCharacter(); render();
  }));
  document.querySelectorAll("[data-skill-stage]").forEach(button => button.addEventListener("click", () => {
    if (!button.disabled) { 
      setSkillMode(Number(button.dataset.skillStage), "manual");
      activeSkillStage = Number(button.dataset.skillStage);
      saveCharacter(); render();
    }
  }));
  document.querySelectorAll("[data-skill-mode]").forEach(button => button.addEventListener("click", () => {
    setSkillMode(activeSkillStage, button.dataset.skillMode);
    render();
  }));
  document.querySelectorAll("[data-reset-stage-allocations]").forEach(button => button.addEventListener("click", () => {
    const stageIndex = Number(button.dataset.resetStageAllocations);
    cleanStageIndexAndUp(stageIndex);
    setSkillMode(stageIndex, "manual");
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-add-noise-stage]").forEach(button => button.addEventListener("click", () => {
    const stageIndex = character.lifepaths.length;
    cleanStageIndexAndUp(stageIndex);
    addNoise();
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-priority-skill]").forEach(item => {
    item.addEventListener("dragstart", event => {
      event.dataTransfer?.setData("text/plain", item.dataset.prioritySkill);
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
    item.addEventListener("dragover", event => {
      event.preventDefault();
      item.classList.add("drag-over");
    });
    item.addEventListener("dragleave", () => item.classList.remove("drag-over"));
    item.addEventListener("drop", event => {
      event.preventDefault();
      item.classList.remove("drag-over");
      const draggedId = event.dataTransfer?.getData("text/plain");
      const targetId = item.dataset.prioritySkill;
      if (!draggedId || draggedId === targetId) return;
      reorderPrioritySkills(activeSkillStage, draggedId, targetId);
      const stage = trainingState().stages[activeSkillStage];
      priorityBudgetDistribution(stage);
      saveCharacter(); render();
    });
  });
  document.querySelectorAll("[data-skill]").forEach(counter => counter.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    const id = counter.dataset.skill;
    const delta = Number(button.dataset.skillDelta);
    character.stageAllocations[activeSkillStage] ||= {};
    let freeAdvance = character.stageAllocations[activeSkillStage][id] || 0;
    if (delta < 0) freeAdvance = Math.max(0, freeAdvance + delta);
    else {
      const stage = trainingState().stages[activeSkillStage];
      let remaining = stage.remaining;
      let stageCost = stage.skillCosts[id] || 0;
      let value = stage.endRatings[id];
      for (let i = 0; i < delta && value < 99; i++) {
        const cost = Math.max(1, Math.floor(value / 10));
        if (cost > remaining || stageCost + cost > GAME.skillPointCapPerStage) break;
        freeAdvance++;
        value++;
        remaining -= cost;
        stageCost += cost;
      }
    }
    character.stageAllocations[activeSkillStage][id] = freeAdvance;    
    cleanStageIndexAndUp(activeSkillStage+1);
    saveCharacter(); render();
  })));
  document.querySelectorAll("[data-feature]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.feature;
    if (character.features.includes(id)) character.features = character.features.filter(feature => feature !== id);
    else character.features.push(id);
    saveCharacter(); render();
  }));
}

function cleanStageIndexAndUp(stageIndex) {
  if (stageIndex < 0 || stageIndex >= character.lifepaths.length) return;
  if (!character.stageAllocations[stageIndex]) character.stageAllocations[stageIndex] = {};
  for (nextStageIndex = stageIndex; nextStageIndex < character.lifepaths.length; nextStageIndex++) {
    character.stageAllocations[nextStageIndex] = {};
  }
  saveCharacter(); render();
}

function renderPreview() {
  const ancestry = findById(GAME.ancestries, character.ancestry);
  const lifepaths = character.lifepaths.map((id, index) => getLifepath(id, index)).filter(Boolean);
  const born = lifepaths[0];
  const features = character.features.map(id => findById(GAME.features, id)).filter(Boolean);
  const bestSkills = availableSkills().filter(skill => skillValue(skill.id) > 20)
    .sort((a, b) => skillValue(b.id) - skillValue(a.id)).slice(0, 5);
  el("characterPreview").innerHTML = `
    <span class="preview-label">Character folio</span>
    <div class="preview-name">${escapeHtml(character.name) || "Unnamed Wanderer"}</div>
    <div class="preview-subtitle">${escapeHtml(character.concept) || "Your story begins here"}</div>
    <div class="preview-divider"></div>
    <section class="preview-section"><h4>Ancestry</h4><p class="${ancestry ? "" : "empty-note"}">${ancestry?.name || "Not yet chosen"}</p></section>
    <section class="preview-section"><h4>Origin · Born lifepath</h4><p class="${born ? "" : "empty-note"}">${born?.name || "Not yet chosen"}</p></section>
    <section class="preview-section"><h4>Lifepaths · ${lifepaths.length}/4</h4>${lifepaths.length ? `<ol>${lifepaths.map(path => `<li>${path.name}</li>`).join("")}</ol>` : `<p class="empty-note">No paths chosen</p>`}</section>
    <section class="preview-section"><h4>Best skills</h4>${bestSkills.length ? `<ul>${bestSkills.map(skill => `<li>${skill.name} ${skillValue(skill.id)}</li>`).join("")}</ul>` : `<p class="empty-note">No training assigned</p>`}</section>
    <section class="preview-section"><h4>Features</h4>${features.length ? `<ul>${features.map(f => `<li>${f.name}</li>`).join("")}</ul>` : `<p class="empty-note">No features chosen</p>`}</section>`;
}

function showToast(message) {
  el("toast").textContent = message; el("toast").classList.add("show");
  setTimeout(() => el("toast").classList.remove("show"), 2200);
}

el("backButton").addEventListener("click", () => { if (currentStep > 0) { currentStep--; render(); } });
el("nextButton").addEventListener("click", () => {
  if (currentStep === 1 && !character.ancestry) { showToast("Choose an ancestry before continuing."); return; }
  if (currentStep < STEPS.length - 1 && canAccessStep(currentStep + 1)) { currentStep++; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  else window.print();
});
el("exportButton").addEventListener("click", () => {
  currentStep = STEPS.length - 1; render();
  setTimeout(() => window.print(), 100);
});
el("resetButton").addEventListener("click", () => {
  if (confirm("Start a new character? Your current draft will be cleared.")) {
    character = freshCharacter(); currentStep = 0; activeLifepathSlot = 0; activeSkillStage = 0; saveCharacter(); render(); showToast("A fresh page awaits.");
  }
});

render();
