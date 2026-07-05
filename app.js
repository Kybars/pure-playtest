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
  standardSkills: [
    { id: "athletics", name: "Athletics" }, { id: "brawn", name: "Brawn" },
    { id: "conceal", name: "Conceal" }, { id: "deceive", name: "Deceive" },
    { id: "drive", name: "Drive" }, { id: "endurance", name: "Endurance" },
    { id: "evade", name: "Evade" }, { id: "first-aid", name: "First Aid" },
    { id: "influence", name: "Influence" }, { id: "insight", name: "Insight" },
    { id: "intimidate", name: "Intimidate" }, { id: "language", name: "Language" },
    { id: "local-knowledge", name: "Local Knowledge" }, { id: "melee", name: "Melee" },
    { id: "navigate", name: "Navigate" }, { id: "perception", name: "Perception" },
    { id: "ranged", name: "Ranged" }, { id: "ride", name: "Ride" },
    { id: "sing", name: "Sing" }, { id: "sleight", name: "Sleight of Hand" },
    { id: "stealth", name: "Stealth" }, { id: "survival", name: "Survival" },
    { id: "swim", name: "Swim" }, { id: "willpower", name: "Willpower" },
    { id: "customs", name: "Customs" }
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
    { id: "warfare", name: "Warfare" }
  ],
  professionalUnlocks: {
    "born-peasant": ["farming", "animal-training"], "born-villager": ["craft", "healing"],
    "born-city": ["commerce", "tradecraft"], "born-highlands": ["scouting", "animal-training"],
    "born-forest": ["hunting", "scouting"], "born-nomad": ["animal-training", "commerce"],
    "born-noble": ["heraldry", "oratory"], "born-sea": ["navigation-sea", "commerce"],
    "apprentice": ["craft", "artifice"], "herder": ["animal-training", "farming"],
    "scribe": ["scholarship", "bureaucracy"], "page": ["heraldry", "leadership"],
    "peddler": ["commerce", "navigation-sea"], "hunter": ["hunting", "scouting"],
    "journeyman": ["craft", "engineering"], "guard": ["law", "warfare"],
    "courtier": ["oratory", "bureaucracy"], "scholar": ["lore", "scholarship"],
    "veteran": ["command", "warfare"], "guildmaster": ["leadership", "commerce"]
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
    { id: "apprentice", name: "Apprentice", description: "You learned a patient trade beneath a demanding master.", benefit: "Practised hands", requires: ["craft", "urban"], grants: ["craft", "trade"] },
    { id: "herder", name: "Herder", description: "You guarded stubborn animals across lonely country.", benefit: "Animal-wise", requires: ["folk", "wild"], grants: ["folk", "wild"] },
    { id: "scribe", name: "Scribe", description: "You copied records, letters, and ideas that were not meant for you.", benefit: "Letters and lore", requires: ["learned", "urban"], grants: ["learned", "court"] },
    { id: "page", name: "Household Page", description: "You served at table and learned how power behaves when it feels unwatched.", benefit: "Read the room", requires: ["court"], grants: ["court", "martial"] },
    { id: "peddler", name: "Road Peddler", description: "You carried useful things and better stories between settlements.", benefit: "A contact everywhere", requires: ["trade", "folk"], grants: ["trade", "road"] },
    { id: "hunter", name: "Hunter", description: "You learned patience, clean tracks, and the terrible intimacy of hunger.", benefit: "Keen pursuit", requires: ["wild"], grants: ["wild", "martial"] },
    { id: "journeyman", name: "Journeyman", description: "Your craft took you onto the road in search of mastery.", benefit: "Guild standing", requires: ["craft"], grants: ["craft", "road"] },
    { id: "guard", name: "Watch Guard", description: "You kept uneasy peace with a stout coat and a sharper eye.", benefit: "Hold the line", requires: ["urban", "martial"], grants: ["martial", "urban"] },
    { id: "courtier", name: "Courtier", description: "You made a profession of favors, appearances, and carefully chosen words.", benefit: "Silver tongue", requires: ["court"], grants: ["court", "trade"] },
    { id: "scholar", name: "Itinerant Scholar", description: "You pursued answers through archives, ruins, and dangerous conversations.", benefit: "Ancient lore", requires: ["learned", "road"], grants: ["learned", "road"] },
    { id: "veteran", name: "Company Veteran", description: "You survived a campaign and carry its habits into quieter places.", benefit: "Battle-hardened", requires: ["martial", "road"], grants: ["martial", "command"] },
    { id: "guildmaster", name: "Guildmaster", description: "You became responsible for a craft, its people, and its compromises.", benefit: "Call in a favor", requires: ["craft", "trade"], grants: ["trade", "command"] }
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
  skills: Object.fromEntries([...GAME.standardSkills, ...GAME.professionalSkills].map(skill => [skill.id, 20])),
  features: [], notes: ""
});

let character = loadCharacter();
let currentStep = 0;
let activeLifepathSlot = Math.min(character.lifepaths.length, 4);

const el = id => document.getElementById(id);
const findById = (list, id) => list.find(item => item.id === id);
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[c]));

function loadCharacter() {
  try {
    const saved = JSON.parse(localStorage.getItem("ember-and-ink-character"));
    if (!saved) return freshCharacter();
    let migratedPaths = Array.isArray(saved.lifepaths) ? saved.lifepaths.slice(0, 5) : [];
    if (migratedPaths[0] && !GAME.bornLifepaths.some(path => path.id === migratedPaths[0])) migratedPaths = [];
    const firstInvalidLaterPath = migratedPaths.slice(1).findIndex(id => !GAME.lifepaths.some(path => path.id === id));
    if (firstInvalidLaterPath >= 0) migratedPaths = migratedPaths.slice(0, firstInvalidLaterPath + 1);
    return {
      ...freshCharacter(), ...saved, lifepaths: migratedPaths,
      skills: { ...freshCharacter().skills, ...saved.skills }
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

function availableSkills() {
  const unlocked = unlockedProfessionalSkillIds();
  return [...GAME.standardSkills, ...GAME.professionalSkills.filter(skill => unlocked.includes(skill.id))];
}

function costToRaiseSkill(value) {
  let cost = 0;
  for (let current = 20; current < value; current++) cost += Math.max(1, Math.floor(current / 10));
  return cost;
}

function spentSkillPoints() {
  return availableSkills().reduce((sum, skill) => sum + costToRaiseSkill(character.skills[skill.id] || 20), 0);
}

function skillPointBudget() {
  return character.lifepaths.length * GAME.skillPointsPerLifepath;
}

function remainingSkillPoints() {
  return skillPointBudget() - spentSkillPoints();
}

function normalizeLockedSkills() {
  const unlocked = unlockedProfessionalSkillIds();
  GAME.professionalSkills.forEach(skill => {
    if (!unlocked.includes(skill.id)) character.skills[skill.id] = 20;
  });
}

function completion() {
  const checks = [
    !!character.name.trim() && !!character.sex && !!character.concept.trim(), !!character.ancestry, character.lifepaths.length === 5,
    character.lifepaths.length === 5 && remainingSkillPoints() === 0,
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
    character.lifepaths.length === 5,
    character.lifepaths.length === 5 && remainingSkillPoints() === 0,
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
  return heading("A life before adventure", "Trace the road behind you.", "Choose where you were born, then follow four connected chapters. Each path opens new roads through the experiences it grants.") + `
    <div class="lifepath-timeline">${Array.from({ length: 5 }, (_, index) => {
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
      </button>`).join("")}</div>`;
}

function professionalSkillNames(lifepathId) {
  return (GAME.professionalUnlocks[lifepathId] || [])
    .map(id => findById(GAME.professionalSkills, id)?.name).filter(Boolean).join(" + ");
}

function getLifepath(id, slot) {
  return findById(slot === 0 ? GAME.bornLifepaths : GAME.lifepaths, id);
}

function availableLifepaths(slot) {
  const history = character.lifepaths.slice(0, slot)
    .flatMap((id, index) => getLifepath(id, index)?.grants || []);
  return GAME.lifepaths.filter(path => path.requires.some(tag => history.includes(tag)));
}

function renderSkills() {
  const remaining = remainingSkillPoints();
  const unlocked = unlockedProfessionalSkillIds();
  const professional = GAME.professionalSkills.filter(skill => unlocked.includes(skill.id));
  return heading("Training & experience", "Invest your skill points.", `Every skill begins at 20. Each chosen lifepath grants ${GAME.skillPointsPerLifepath} points. The cost of an increase is the current tens band: 20→21 costs 2, while 40→41 costs 4.`) + `
    <div class="budget-strip ${remaining < 0 ? "over" : ""}">
      <span>${character.lifepaths.length} lifepaths × ${GAME.skillPointsPerLifepath} points</span>
      <strong>${remaining} remaining</strong>
    </div>
    ${renderSkillGroup("Standard skills", GAME.standardSkills)}
    ${renderSkillGroup(`Professional skills · ${professional.length} unlocked`, professional, professional.length ? "" : "Choose lifepaths to unlock professional skills.")}`;
}

function renderSkillGroup(title, skills, emptyMessage = "") {
  return `<section class="skill-section"><div class="path-heading"><span>${title}</span></div>
    ${skills.length ? `<div class="skill-grid">${skills.map(skill => renderSkillRow(skill)).join("")}</div>` : `<p class="skill-empty">${emptyMessage}</p>`}
  </section>`;
}

function renderSkillRow(skill) {
  const value = character.skills[skill.id] || 20;
  const nextCost = Math.max(1, Math.floor(value / 10));
  return `<div class="skill-row">
    <div><strong>${skill.name}</strong><small>Next point: ${nextCost}</small></div>
    <div class="skill-controls" data-skill="${skill.id}">
      <button data-skill-delta="-5" ${value <= 20 ? "disabled" : ""}>−5</button>
      <button data-skill-delta="-1" ${value <= 20 ? "disabled" : ""}>−</button>
      <b>${value}</b>
      <button data-skill-delta="1" ${nextCost > remainingSkillPoints() || value >= 99 ? "disabled" : ""}>+</button>
      <button data-skill-delta="5" ${nextCost > remainingSkillPoints() || value >= 99 ? "disabled" : ""}>+5</button>
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
          <p><strong>${spentSkillPoints()}</strong> / ${skillPointBudget()} points spent</p>
        </div>
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
          const value = character.skills[skill.id] || 20;
          return `<span class="${value > 20 ? "trained" : ""}"><i>${skill.name}</i><strong>${value}</strong></span>`;
        }).join("")
      : `<em>None unlocked.</em>`}
    </div>
  </div>`;
}

function bindStepEvents() {
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
    if (activeLifepathSlot < 4) activeLifepathSlot++;
    saveCharacter(); render();
  }));
  document.querySelectorAll("[data-skill]").forEach(counter => counter.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    const id = counter.dataset.skill;
    const delta = Number(button.dataset.skillDelta);
    let value = character.skills[id] || 20;
    if (delta < 0) value = Math.max(20, value + delta);
    else {
      for (let i = 0; i < delta && value < 99; i++) {
        const cost = Math.max(1, Math.floor(value / 10));
        if (cost > remainingSkillPoints()) break;
        value++;
      }
    }
    character.skills[id] = value; saveCharacter(); render();
  })));
  document.querySelectorAll("[data-feature]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.feature;
    if (character.features.includes(id)) character.features = character.features.filter(feature => feature !== id);
    else character.features.push(id);
    saveCharacter(); render();
  }));
}

function renderPreview() {
  const ancestry = findById(GAME.ancestries, character.ancestry);
  const lifepaths = character.lifepaths.map((id, index) => getLifepath(id, index)).filter(Boolean);
  const born = lifepaths[0];
  const features = character.features.map(id => findById(GAME.features, id)).filter(Boolean);
  const bestSkills = availableSkills().filter(skill => (character.skills[skill.id] || 20) > 20)
    .sort((a, b) => character.skills[b.id] - character.skills[a.id]).slice(0, 5);
  el("characterPreview").innerHTML = `
    <span class="preview-label">Character folio</span>
    <div class="preview-name">${escapeHtml(character.name) || "Unnamed Wanderer"}</div>
    <div class="preview-subtitle">${escapeHtml(character.concept) || "Your story begins here"}</div>
    <div class="preview-divider"></div>
    <section class="preview-section"><h4>Ancestry</h4><p class="${ancestry ? "" : "empty-note"}">${ancestry?.name || "Not yet chosen"}</p></section>
    <section class="preview-section"><h4>Origin · Born lifepath</h4><p class="${born ? "" : "empty-note"}">${born?.name || "Not yet chosen"}</p></section>
    <section class="preview-section"><h4>Lifepaths · ${lifepaths.length}/5</h4>${lifepaths.length ? `<ol>${lifepaths.map(path => `<li>${path.name}</li>`).join("")}</ol>` : `<p class="empty-note">No paths chosen</p>`}</section>
    <section class="preview-section"><h4>Best skills</h4>${bestSkills.length ? `<ul>${bestSkills.map(skill => `<li>${skill.name} ${character.skills[skill.id]}</li>`).join("")}</ul>` : `<p class="empty-note">No training assigned</p>`}</section>
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
    character = freshCharacter(); currentStep = 0; activeLifepathSlot = 0; saveCharacter(); render(); showToast("A fresh page awaits.");
  }
});

render();
