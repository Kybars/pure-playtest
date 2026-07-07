const SKILL_ARRAY = [
  60, 58, 56, 54, 50, 48, 46, 44,
  43, 42, 41, 40, 39, 38, 37, 36,
  35, 34, 33, 32, 31, 30, 29, 28,
  27, 26, 25, 24, 23, 22, 21, 20
];

const GAME = {
  title: "PuRe Playtest",
  professionalSkillChoices: 7,
  ancestries: [
    { id: "human", name: "Human", available: true, description: "Adaptable, ambitious, and shaped by a great variety of cultures.", benefit: "Available in this playtest" },
    { id: "dwarf", name: "Dwarf", available: false, description: "Stout folk of deep halls, enduring craft, and long memory.", benefit: "Coming later" },
    { id: "elf", name: "Elf", available: false, description: "Ancient, keen-sensed people bound to beauty and old sorrows.", benefit: "Coming later" },
    { id: "halfling", name: "Halfling", available: false, description: "Small, steadfast folk with strong communities and quiet courage.", benefit: "Coming later" },
    { id: "orc", name: "Orc", available: false, description: "Fierce survivors whose strength is forged through hardship.", benefit: "Coming later" }
  ],
  standardSkills: [
    { id: "athletics", name: "Athletics" },
    { id: "brawn", name: "Brawn" },
    { id: "conceal", name: "Conceal" },
    { id: "stealth", name: "Stealth" },
    { id: "swim", name: "Swim" },
    { id: "boating", name: "Boating" },
    { id: "drive", name: "Drive" },
    { id: "ride", name: "Ride" },
    { id: "first-aid", name: "First Aid" },
    { id: "deception", name: "Deception" },
    { id: "influence", name: "Influence" },
    { id: "insight", name: "Insight" },
    { id: "intimidation", name: "Intimidation" },
    { id: "performance", name: "Performance" },
    { id: "investigation", name: "Investigation" },
    { id: "perception", name: "Perception" }
  ],
  fixedSkills: [
    { id: "customs", name: "Customs", value: 60 },
    { id: "language-common", name: "Language (Common Tongue)", value: 60 }
  ],
  combatSkills: [
    { id: "brawling", name: "Brawling" },
    { id: "melee-combat", name: "Melee Combat" },
    { id: "ranged-combat", name: "Ranged Combat" },
    { id: "physical-defense", name: "Physical Defense" },
    { id: "endurance", name: "Endurance" },
    { id: "willpower", name: "Willpower" },
    { id: "dodge", name: "Dodge" }
  ],
  professionalSkills: [
    { id: "engineering", name: "Engineering" },
    { id: "instruction", name: "Instruction" },
    { id: "language-any", name: "Language (any)", repeatable: true, specializations: ["Dwarven", "Orc", "Elven", "Goblin", "Imperial", "Old Kingdom"] },
    { id: "literacy", name: "Literacy" },
    { id: "lore-any", name: "Lore (any)", repeatable: true, specializations: ["History", "Geography", "Nobility", "Monsters", "Magic", "Heraldry"] },
    { id: "mechanisms", name: "Mechanisms" },
    { id: "oratory", name: "Oratory" },
    { id: "research", name: "Research" },
    { id: "theology-any", name: "Theology (any)", repeatable: true, specializations: ["Local Cults", "Old Gods", "Temple Doctrine", "Heresies", "Spirits", "Funerary Rites"] },
    { id: "courtesy", name: "Courtesy" },
    { id: "appraisal", name: "Appraisal" },
    { id: "alchemy", name: "Alchemy" },
    { id: "art-any", name: "Art (any)", repeatable: true, specializations: ["Painting", "Sculpture", "Calligraphy", "Music", "Poetry", "Dance"] },
    { id: "bureaucracy", name: "Bureaucracy" },
    { id: "commerce", name: "Commerce" },
    { id: "craft-any", name: "Craft (any)", repeatable: true, specializations: ["Blacksmith", "Carpenter", "Mason", "Tailor", "Cook", "Jeweller"] },
    { id: "profession-any", name: "Profession (any)", repeatable: true, specializations: ["Miner", "Sailor", "Merchant", "Scribe", "Farmer", "Servant"] },
    { id: "surgery", name: "Surgery" },
    { id: "animal-handling", name: "Animal Handling" },
    { id: "animal-training-any", name: "Animal Training (any)", repeatable: true, specializations: ["Dogs", "Horses", "Birds", "Livestock", "Exotic Beasts", "War Animals"] },
    { id: "navigation", name: "Navigation" },
    { id: "seamanship", name: "Seamanship" },
    { id: "survival", name: "Survival" },
    { id: "track", name: "Track" },
    { id: "acrobatics", name: "Acrobatics" },
    { id: "gambling", name: "Gambling" },
    { id: "forgery", name: "Forgery" },
    { id: "lockpicking", name: "Lockpicking" },
    { id: "impersonation", name: "Impersonation" },
    { id: "sleight", name: "Sleight" },
    { id: "streetwise", name: "Streetwise" },
    { id: "combat-magic", name: "Combat Magic", hidden: true }
  ],
  perkTemplates: {
    stealth: [
      { id: "urban-stealther", name: "Urban Stealther", description: "Moving at full speed in urban environments has no negative impact on your Stealth modifier." },
      { id: "soft-step", name: "Soft Step", description: "When you move slowly, minor clutter and loose ground do not worsen your Stealth modifier." },
      { id: "vanishing-angle", name: "Vanishing Angle", description: "You gain a small edge when using doorways, corners, or crowds to break line of sight." }
    ],
    "melee-combat": [
      { id: "close-quarters", name: "Close Quarters", description: "Crowded or cramped spaces no longer impose minor penalties on your Melee Combat checks." },
      { id: "steady-guard", name: "Steady Guard", description: "When defending a fixed position, you gain a small edge on Melee Combat resistance." },
      { id: "weapon-familiarity", name: "Weapon Familiarity", description: "Choose one weapon group; routine use of that group ignores minor handling penalties." }
    ],
    "ranged-combat": [
      { id: "measured-shot", name: "Measured Shot", description: "If you spend a moment aiming, light cover has less impact on your Ranged Combat modifier." },
      { id: "quick-nock", name: "Quick Nock", description: "Drawing or loading simple ranged weapons under pressure is less likely to penalise you." },
      { id: "range-finder", name: "Range Finder", description: "You can judge practical range bands at a glance in ordinary visibility." }
    ],
    endurance: [
      { id: "deep-reserves", name: "Deep Reserves", description: "Harsh travel and long watches impose one step less fatigue pressure on Endurance checks." },
      { id: "hard-to-drop", name: "Hard to Drop", description: "When injury would slow you, you gain a small edge on Endurance tests to keep moving." },
      { id: "weathered", name: "Weathered", description: "Ordinary cold, heat, or rain has less impact on your Endurance modifier." }
    ],
    willpower: [
      { id: "clear-breath", name: "Clear Breath", description: "A short pause lets you reduce minor fear, stress, or panic penalties on Willpower checks." },
      { id: "stubborn-core", name: "Stubborn Core", description: "Coercion from social pressure has less impact on your Willpower modifier." },
      { id: "steady-mind", name: "Steady Mind", description: "Distracting noise or chaos does not worsen ordinary concentration-based Willpower checks." }
    ],
    dodge: [
      { id: "slip-through", name: "Slip Through", description: "Moving through a tight crowd or cluttered room has less impact on your Dodge modifier." },
      { id: "fast-recovery", name: "Fast Recovery", description: "After diving, stumbling, or dropping prone, you regain your footing with less penalty." },
      { id: "read-the-shift", name: "Read the Shift", description: "You gain a small edge when evading a danger you have already seen once this scene." }
    ]
  }
};

const STEPS = [
  { id: "identity", label: "Identity" },
  { id: "ancestry", label: "Ancestry" },
  { id: "specialisation", label: "Specialisation" },
  { id: "skills", label: "Skill Order" },
  { id: "perks", label: "Perks" },
  { id: "review", label: "Review" }
];

const STORAGE_KEY = "ember-and-ink-character";

const freshCharacter = () => ({
  playerName: "",
  name: "",
  gender: "",
  age: "",
  weight: "",
  height: "",
  concept: "",
  appearance: "",
  manners: "",
  ancestry: "",
  professionalSkills: [],
  professionalSpecializations: {},
  skillOrder: [],
  skillOrderTouched: false,
  perks: {},
  notes: ""
});

let character = loadCharacter();
let currentStep = 0;

const el = id => document.getElementById(id);
const findById = (list, id) => list.find(item => item.id === id);
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[c]));

function loadCharacter() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return freshCharacter();
    const migrated = { ...freshCharacter(), ...saved };
    migrated.gender = saved.gender || saved.sex || "";
    migrated.professionalSpecializations = typeof saved.professionalSpecializations === "object" && saved.professionalSpecializations ? saved.professionalSpecializations : {};
    migrated.professionalSkills = Array.isArray(saved.professionalSkills)
      ? saved.professionalSkills
      : Array.isArray(saved.selectedProfessionalSkills)
        ? saved.selectedProfessionalSkills
        : [];
    migrated.professionalSkills = normalizeProfessionalSelection(migrated.professionalSkills, migrated.professionalSpecializations);
    migrated.skillOrderTouched = saved.skillOrderTouched === true;
    migrated.skillOrder = Array.isArray(saved.skillOrder) && migrated.skillOrderTouched ? saved.skillOrder : [];
    migrated.skillOrder = normalizeSkillOrder(migrated.skillOrder, migrated.professionalSkills, migrated.professionalSpecializations);
    migrated.perks = typeof saved.perks === "object" && saved.perks ? saved.perks : {};
    return migrated;
  } catch {
    return freshCharacter();
  }
}

function saveCharacter() {
  character.professionalSkills = normalizeProfessionalSelection(character.professionalSkills, character.professionalSpecializations);
  character.skillOrder = normalizeSkillOrder(character.skillOrder, character.professionalSkills, character.professionalSpecializations);
  pruneLockedPerks();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
  const status = el("saveStatus");
  if (status) {
    status.textContent = "Saved just now";
    setTimeout(() => status.textContent = "Saved locally", 1200);
  }
  updateProgress();
  renderPreview();
}

function selectableProfessionalSkills() {
  return GAME.professionalSkills.filter(skill => !skill.hidden);
}

function professionalBaseId(key) {
  return String(key).split("::")[0];
}

function professionalSpecializationKey(baseId, specialization) {
  return `${baseId}::${slugify(specialization)}`;
}

function slugify(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "custom";
}

function displayProfessionalName(skill, specialization = "") {
  if (!skill.repeatable) return skill.name;
  const baseName = skill.name.replace(/\s*\(any\)\s*$/i, "");
  return specialization ? `${baseName} (${specialization})` : skill.name;
}

function normalizeProfessionalSelection(selection = [], specializations = character.professionalSpecializations || {}) {
  const selectable = selectableProfessionalSkills();
  const normalized = [];
  for (const rawKey of selection) {
    const baseId = professionalBaseId(rawKey);
    const base = findById(selectable, baseId);
    if (!base) continue;
    let key = rawKey;
    if (base.repeatable) {
      let specialization = specializations[key] || specializations[baseId] || base.specializations?.[0] || "Custom";
      key = key.includes("::") ? key : professionalSpecializationKey(baseId, specialization);
      specializations[key] = specialization;
    } else {
      key = baseId;
    }
    if (!normalized.includes(key)) normalized.push(key);
    if (normalized.length >= GAME.professionalSkillChoices) break;
  }
  Object.keys(specializations).forEach(key => {
    if (!normalized.includes(key)) delete specializations[key];
  });
  return normalized;
}

function professionalSkillFromKey(key, specializations = character.professionalSpecializations) {
  const baseId = professionalBaseId(key);
  const base = findById(selectableProfessionalSkills(), baseId);
  if (!base) return null;
  const specialization = base.repeatable ? specializations?.[key] || "" : "";
  return {
    ...base,
    id: key,
    baseId,
    baseName: base.name,
    specialization,
    name: displayProfessionalName(base, specialization)
  };
}

function chosenProfessionalSkills() {
  return character.professionalSkills
    .map(key => professionalSkillFromKey(key, character.professionalSpecializations))
    .filter(Boolean);
}

function allSelectedSkills(professionalIds = character.professionalSkills, specializations = character.professionalSpecializations) {
  const selectedProfessionals = professionalIds
    .map(id => professionalSkillFromKey(id, specializations))
    .filter(Boolean);
  return [...GAME.combatSkills, ...GAME.standardSkills, ...selectedProfessionals]
    .sort((a, b) => a.name.localeCompare(b.name));
}

function allSkillDefinitions() {
  return [...GAME.fixedSkills, ...GAME.combatSkills, ...GAME.standardSkills, ...GAME.professionalSkills, ...chosenProfessionalSkills()];
}

function normalizeSkillOrder(order = character.skillOrder, professionalIds = character.professionalSkills, specializations = character.professionalSpecializations) {
  const available = allSelectedSkills(professionalIds, specializations).map(skill => skill.id);
  const seen = new Set();
  const cleaned = order.filter(id => {
    if (!available.includes(id) || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  return [...cleaned, ...available.filter(id => !seen.has(id))];
}

function skillName(id) {
  return findById(allSkillDefinitions(), id)?.name || id;
}

function skillRank(id) {
  return normalizeSkillOrder().indexOf(id);
}

function skillValue(id) {
  const fixed = findById(GAME.fixedSkills, id);
  if (fixed) return fixed.value;
  const rank = skillRank(id);
  return rank < 0 ? 20 : SKILL_ARRAY[rank] ?? 20;
}

function completionChecks() {
  return [
    !!character.name.trim() && !!character.gender && !!character.concept.trim(),
    !!character.ancestry,
    character.professionalSkills.length === GAME.professionalSkillChoices,
    skillOrderComplete(),
    perksComplete(),
    skillOrderComplete()
  ];
}

function skillOrderComplete() {
  const order = normalizeSkillOrder();
  return character.professionalSkills.length === GAME.professionalSkillChoices
    && order.length === allSelectedSkills().length;
}

function canAccessStep(index) {
  return index >= 0 && index < STEPS.length;
}

function updateProgress() {
  const checks = completionChecks();
  const complete = checks.filter(Boolean).length;
  const percent = Math.round((complete / checks.length) * 100);
  el("progressPercent").textContent = `${percent}%`;
  el("progressBar").style.width = `${percent}%`;
  el("progressHint").textContent = checks[0]
    ? checks[1]
      ? checks[2]
        ? checks[3]
          ? checks[4]
            ? "Ready for finishing touches."
            : "Choose perks for skills at 50 or higher."
          : "Put your skills in priority order."
        : `Choose ${GAME.professionalSkillChoices} professional skills.`
      : "Choose an ancestry."
    : "Start with any identity details you know.";
}

function render() {
  renderStepNav();
  const renderers = [renderIdentity, renderAncestry, renderProfessionalChoice, renderSkills, renderPerks, renderReview];
  el("stepContent").innerHTML = renderers[currentStep]();
  el("stepCounter").textContent = `Step ${currentStep + 1} of ${STEPS.length}`;
  el("backButton").disabled = currentStep === 0;
  el("nextButton").textContent = currentStep === STEPS.length - 1 ? "Print / PDF" : "Continue";
  bindStepEvents();
  updateProgress();
  renderPreview();
}

function renderStepNav() {
  el("stepNav").innerHTML = STEPS.map((step, index) => {
    const active = index === currentStep;
    const complete = completionChecks()[index];
    return `<button class="step-link ${active ? "active" : ""} ${complete ? "complete" : ""}" data-step="${index}">
      <span class="number">${index + 1}</span><strong>${step.label}</strong>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-step]").forEach(button => {
    button.addEventListener("click", () => {
      const target = Number(button.dataset.step);
      if (canAccessStep(target)) {
        currentStep = target;
        render();
      }
    });
  });
}

function heading(kicker, title, copy) {
  return `<div class="step-heading"><span class="step-kicker">${kicker}</span><h1>${title}</h1><p>${copy}</p></div>`;
}

function renderIdentity() {
  return heading("Who are they?", "Start with a person, not a stat block.", "Give the table enough texture to picture your character before the numbers settle into place.") + `
    <div class="field-row">
      <div class="field"><label>Player name</label><input data-field="playerName" value="${escapeHtml(character.playerName)}" placeholder="Player at the table"></div>
      <div class="field"><label>Character name</label><input data-field="name" value="${escapeHtml(character.name)}" placeholder="Maera of the Low Road"></div>
    </div>
    <div class="identity-details-grid">
      <div class="field"><label>Gender</label>
        <div class="segmented-choice compact">
          ${["Male", "Female"].map(option => `<button type="button" class="${character.gender === option ? "selected" : ""}" data-gender-choice="${option}">${option}</button>`).join("")}
        </div>
      </div>
      <div class="field"><label>Age</label><input data-field="age" value="${escapeHtml(character.age)}" placeholder="28"></div>
      <div class="field"><label>Weight</label><input data-field="weight" value="${escapeHtml(character.weight)}" placeholder="75 kg"></div>
      <div class="field"><label>Height</label><input data-field="height" value="${escapeHtml(character.height)}" placeholder="178 cm"></div>
    </div>
    <div class="field"><label>Concept</label>
      <textarea class="concept-field" data-field="concept" placeholder="Disgraced cartographer, oathbound duelist, runaway surgeon...">${escapeHtml(character.concept)}</textarea>
    </div>
    <div class="field-row">
      <div class="field"><label>Appearance</label>
        <textarea data-field="appearance" placeholder="Clothes, scars, build, colours...">${escapeHtml(character.appearance)}</textarea>
      </div>
      <div class="field"><label>Manners</label>
        <textarea data-field="manners" placeholder="Voice, posture, habits, tells...">${escapeHtml(character.manners)}</textarea>
      </div>
    </div>`;
}

function renderAncestry() {
  return heading("Blood and belonging", "Choose ancestry.", "Only humans are available in this playtest, but the sheet is ready for more ancestries later.") + `
    <div class="choice-grid">${GAME.ancestries.map(ancestry => `
      <button class="choice-card ${character.ancestry === ancestry.id ? "selected" : ""} ${!ancestry.available ? "unavailable" : ""}" data-ancestry="${ancestry.id}" ${!ancestry.available ? "disabled" : ""}>
        <div><h3>${ancestry.name}</h3><p>${ancestry.description}</p></div>
        <small>${ancestry.benefit}</small>
      </button>`).join("")}</div>`;
}

function renderProfessionalChoice() {
  if (!character.ancestry) {
    return heading("Ancestry required", "Choose ancestry first.", "Professional skill choices unlock after ancestry is complete.")
      + `<div class="locked-panel"><strong>Professional choices are locked</strong><p>Return to Ancestry and choose Human to continue.</p></div>`;
  }
  const remaining = GAME.professionalSkillChoices - character.professionalSkills.length;
  return heading("Specialisation", `Choose ${GAME.professionalSkillChoices} professional skills.`, "These are the specialised skills your character brings into play. Pick exactly seven; the rest of the skill list is fixed.") + `
    <div class="budget-strip ${remaining < 0 ? "over" : ""}">
      <span>Specialisations selected</span>
      <strong>${character.professionalSkills.length} / ${GAME.professionalSkillChoices}</strong>
    </div>
    <div class="choice-grid professional-choice-grid">${selectableProfessionalSkills().map(skill => {
      if (skill.repeatable) return renderRepeatableProfessionalChoice(skill);
      const selected = character.professionalSkills.includes(skill.id);
      const locked = !selected && character.professionalSkills.length >= GAME.professionalSkillChoices;
      return `<button class="choice-card ${selected ? "selected" : ""}" data-professional-skill="${skill.id}" ${locked ? "disabled" : ""}>
        <div><h3>${skill.name}</h3><p>${selected ? "Included in your final skill priority list." : "Available professional skill."}</p></div>
        <small>${selected ? "Selected" : locked ? "Limit reached" : "Choose"}</small>
      </button>`;
    }).join("")}</div>`;
}

function renderRepeatableProfessionalChoice(skill) {
  const selected = chosenProfessionalSkills().filter(item => item.baseId === skill.id);
  const limitReached = character.professionalSkills.length >= GAME.professionalSkillChoices;
  return `<article class="choice-card repeatable-skill-card ${selected.length ? "selected" : ""}">
    <div><h3>${skill.name}</h3><p>Can be chosen multiple times. Each choice needs its own specialisation.</p></div>
    ${selected.length ? `<div class="selected-specialisations">${selected.map(item => `
      <span>${item.specialization}<button type="button" data-remove-professional="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">×</button></span>`).join("")}</div>` : ""}
    <div class="specialisation-options">${(skill.specializations || []).map(option => {
      const key = professionalSpecializationKey(skill.id, option);
      const picked = character.professionalSkills.includes(key);
      return `<button type="button" class="${picked ? "selected" : ""}" data-repeat-professional="${skill.id}" data-repeat-specialization="${escapeHtml(option)}" ${picked || limitReached ? "disabled" : ""}>${option}</button>`;
    }).join("")}</div>
    <div class="custom-specialisation-row">
      <input data-custom-repeat-input="${skill.id}" placeholder="Custom ${skill.name.replace(/\s*\(any\)\s*$/i, "").toLowerCase()}">
      <button type="button" class="button ghost" data-add-custom-repeat="${skill.id}" ${limitReached ? "disabled" : ""}>Add custom</button>
    </div>
  </article>`;
}

function renderSkills() {
  if (character.professionalSkills.length !== GAME.professionalSkillChoices) {
    return heading("Professional skills required", "Choose your seven professional skills first.", "Once those are set, you will rank the complete orderable skill list from strongest to weakest.");
  }
  const order = normalizeSkillOrder();
  const topValue = SKILL_ARRAY[0];
  const bottomValue = SKILL_ARRAY[Math.min(order.length, SKILL_ARRAY.length) - 1] ?? 20;
  return heading("Skill priority", "Put the full skill list in order.", `Rank all ${order.length} skills. The top skill is ${topValue}; the values step down through the array, and any extra skills beyond the array stay at 20.`) + `
    <div class="array-preview">
      ${SKILL_ARRAY.map((value, index) => `<span><i>${index + 1}</i>${value}</span>`).join("")}
    </div>
    <div class="budget-strip">
      <span>Current range</span>
      <strong>${topValue} to ${bottomValue}</strong>
    </div>
    <section class="priority-order-panel">
      <div class="path-heading"><span>Drag to reorder, or use the arrows</span><small>${chosenProfessionalSkills().length} professional skills included</small></div>
      <div class="priority-skill-list">${order.map((skillId, index) => renderPrioritySkill(skillId, index, order.length)).join("")}</div>
    </section>`;
}

function renderPrioritySkill(skillId, index, total) {
  const skill = findById(allSelectedSkills(), skillId);
  if (!skill) return "";
  const isProfessional = character.professionalSkills.includes(skillId);
  const isCombat = GAME.combatSkills.some(item => item.id === skillId);
  const rowClass = isProfessional ? "priority-professional-skill-row" : isCombat ? "priority-combat-skill-row" : "priority-skill-row";
  return `<div class="${rowClass}" draggable="true" data-priority-skill="${skillId}">
    <span class="priority-handle" aria-hidden="true">⋮⋮</span>
    <div class="priority-skill-main">
      <strong>${index + 1}. ${skill.name}</strong>
      <small>${isProfessional ? "Professional" : isCombat ? "Combat" : "Standard"} skill</small>
    </div>
    <span class="priority-share">${SKILL_ARRAY[index] ?? 20}</span>
    <div class="priority-buttons">
      <button type="button" data-move-skill="${skillId}" data-move-direction="-1" ${index === 0 ? "disabled" : ""}>↑</button>
      <button type="button" data-move-skill="${skillId}" data-move-direction="1" ${index === total - 1 ? "disabled" : ""}>↓</button>
    </div>
  </div>`;
}

function unlockedPerkSkills() {
  return [...GAME.fixedSkills, ...allSelectedSkills()].filter(skill => skillValue(skill.id) >= 50);
}

function perksComplete() {
  const unlocked = unlockedPerkSkills();
  return unlocked.length > 0 && unlocked.every(skill => selectedPerkForSkill(skill.id));
}

function pruneLockedPerks() {
  const unlockedIds = new Set(unlockedPerkSkills().map(skill => skill.id));
  character.perks = Object.fromEntries(Object.entries(character.perks || {}).filter(([skillId]) => unlockedIds.has(skillId)));
}

function perkOptionsForSkill(skill) {
  const templates = GAME.perkTemplates[skill.id] || [];
  if (templates.length) return templates;
  return [
    { id: `${skill.id}-focused-practice`, name: `${skill.name} Focus`, description: `Choose one narrow use of ${skill.name}; minor situational penalties apply one step less often.` },
    { id: `${skill.id}-reliable-hand`, name: `Reliable ${skill.name}`, description: `When the task is routine but pressured, you gain a small edge on ${skill.name} checks.` },
    { id: `${skill.id}-situational-edge`, name: `${skill.name} Edge`, description: `Name a specific environment or circumstance where your ${skill.name} modifier improves slightly.` }
  ];
}

function selectedPerkForSkill(skillId) {
  const perk = character.perks?.[skillId];
  if (!perk) return null;
  if (perk.type === "custom") {
    return perk.name?.trim() || perk.description?.trim() ? perk : null;
  }
  return perk.id ? perk : null;
}

function resolvedPerkForSkill(skill) {
  const perk = selectedPerkForSkill(skill.id);
  if (!perk) return null;
  if (perk.type === "custom") {
    return {
      name: perk.name?.trim() || `Custom ${skill.name} Perk`,
      description: perk.description?.trim() || "Custom perk effect to be defined."
    };
  }
  return perkOptionsForSkill(skill).find(option => option.id === perk.id) || null;
}

function renderPerks() {
  const unlocked = unlockedPerkSkills();
  return heading("Perks", "Choose one perk for every skill at 50+.", "Perks are small skill-specific tricks. Placeholder perks are available for now, and every unlocked skill can also take a custom perk.") + `
    <div class="budget-strip">
      <span>Perk slots unlocked</span>
      <strong>${unlocked.length}</strong>
    </div>
    ${unlocked.length ? `<div class="perk-list">${unlocked.map(renderPerkSlot).join("")}</div>` : `<div class="locked-panel"><strong>No perks unlocked yet</strong><p>Move a skill to 50 or higher in the Skill Order tab to unlock its perk slot.</p></div>`}`;
}

function renderPerkSlot(skill) {
  const selected = character.perks?.[skill.id] || {};
  const options = perkOptionsForSkill(skill);
  return `<article class="perk-card ${selectedPerkForSkill(skill.id) ? "selected" : ""}">
    <div class="perk-card-heading">
      <div><span class="preview-label">${skillValue(skill.id)} skill</span><h3>${skill.name}</h3></div>
      <small>1 perk unlocked</small>
    </div>
    <div class="perk-options">${options.map(option => `
      <label class="perk-option ${selected.id === option.id ? "selected" : ""}">
        <input type="radio" name="perk-${skill.id}" data-perk-choice="${skill.id}" value="${option.id}" ${selected.id === option.id ? "checked" : ""}>
        <span><strong>${option.name}</strong><em>${option.description}</em></span>
      </label>`).join("")}</div>
    <div class="custom-perk ${selected.type === "custom" ? "selected" : ""}">
      <label class="perk-option">
        <input type="radio" name="perk-${skill.id}" data-perk-custom="${skill.id}" ${selected.type === "custom" ? "checked" : ""}>
        <span><strong>Custom perk</strong><em>Write your own minor boost for ${skill.name}.</em></span>
      </label>
      <div class="custom-perk-fields">
        <input data-custom-perk-field="${skill.id}" data-custom-perk-key="name" value="${escapeHtml(selected.type === "custom" ? selected.name || "" : "")}" placeholder="Perk name">
        <textarea data-custom-perk-field="${skill.id}" data-custom-perk-key="description" placeholder="What does this perk do?">${escapeHtml(selected.type === "custom" ? selected.description || "" : "")}</textarea>
      </div>
    </div>
  </article>`;
}

function renderReview() {
  const ancestry = findById(GAME.ancestries, character.ancestry);
  const perks = unlockedPerkSkills().map(skill => ({ skill, perk: resolvedPerkForSkill(skill) })).filter(item => item.perk);
  const physicalDetails = [
    character.age ? `Age ${escapeHtml(character.age)}` : "",
    character.height ? `Height ${escapeHtml(character.height)}` : "",
    character.weight ? `Weight ${escapeHtml(character.weight)}` : ""
  ].filter(Boolean).join(" · ");
  return heading("The road awaits", "Review your character.", "Everything below will become your print-ready character sheet. Use your browser’s PDF option when exporting.") + `
    <div class="review-sheet">
      <h2>${escapeHtml(character.name) || "Unnamed Wanderer"}</h2>
      <p class="review-meta">${escapeHtml(character.gender)}${character.gender && character.concept ? " · " : ""}${escapeHtml(character.concept) || "No concept yet"}</p>
      <div class="review-columns">
        <div>
          <section class="review-block"><h3>Player</h3><p>${escapeHtml(character.playerName) || "Not listed."}</p></section>
          <section class="review-block"><h3>Ancestry</h3><p><strong>${ancestry?.name || "Not chosen"}</strong><br>${ancestry?.description || ""}</p></section>
          <section class="review-block"><h3>Details</h3><p>${physicalDetails || "Age, height, and weight not listed."}</p></section>
          <section class="review-block"><h3>Appearance</h3><p>${escapeHtml(character.appearance) || "Not yet described."}</p></section>
          <section class="review-block"><h3>Manners</h3><p>${escapeHtml(character.manners) || "Not yet described."}</p></section>
          <section class="review-block"><h3>Professional skills</h3>${chosenProfessionalSkills().length ? `<ul>${chosenProfessionalSkills().map(skill => `<li>${skill.name}</li>`).join("")}</ul>` : "<p>None chosen.</p>"}</section>
        </div>
        <div>
          <section class="review-block"><h3>Perks</h3>${perks.length ? `<ul>${perks.map(({ skill, perk }) => `<li><strong>${perk.name}</strong> <em>(${skill.name})</em>. ${perk.description}</li>`).join("")}</ul>` : "<p>No perks chosen.</p>"}</section>
          <section class="review-block"><h3>Adventurer's notes</h3><textarea data-field="notes" placeholder="Allies, ambitions, burdens...">${escapeHtml(character.notes)}</textarea></section>
        </div>
      </div>
      <section class="review-skills">
        <div class="review-skills-heading">
          <div><span class="preview-label">Priority array</span><h3>Skills</h3></div>
          <p><strong>${normalizeSkillOrder().length}</strong> ranked skills</p>
        </div>
        ${renderReviewSkillGroup("Core skills", GAME.fixedSkills)}
        ${renderReviewSkillGroup("Combat skills", GAME.combatSkills)}
        ${renderReviewSkillGroup("Standard skills", GAME.standardSkills)}
        ${renderReviewSkillGroup("Professional skills", chosenProfessionalSkills())}
      </section>
    </div>`;
}

function renderReviewSkillGroup(title, skills) {
  return `<div class="review-skill-group">
    <h4>${title}</h4>
    <div class="review-skill-list">${skills.length
      ? skills.map(skill => `<span class="${skillValue(skill.id) > 20 ? "trained" : ""}"><i>${skill.name}</i><strong>${skillValue(skill.id)}</strong></span>`).join("")
      : `<em>None chosen.</em>`}
    </div>
  </div>`;
}

function bindStepEvents() {
  document.querySelectorAll("[data-field]").forEach(input => input.addEventListener("input", event => {
    character[event.target.dataset.field] = event.target.value;
    saveCharacter();
  }));
  document.querySelectorAll("[data-gender-choice]").forEach(button => button.addEventListener("click", () => {
    character.gender = button.dataset.genderChoice;
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-ancestry]").forEach(button => button.addEventListener("click", () => {
    const ancestry = findById(GAME.ancestries, button.dataset.ancestry);
    if (ancestry?.available) {
      character.ancestry = ancestry.id;
      saveCharacter();
      render();
    }
  }));
  document.querySelectorAll("[data-professional-skill]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.professionalSkill;
    if (character.professionalSkills.includes(id)) {
      character.professionalSkills = character.professionalSkills.filter(skillId => skillId !== id);
    } else if (character.professionalSkills.length < GAME.professionalSkillChoices) {
      character.professionalSkills.push(id);
    }
    character.skillOrder = normalizeSkillOrder(character.skillOrder, character.professionalSkills, character.professionalSpecializations);
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-repeat-professional]").forEach(button => button.addEventListener("click", () => {
    addRepeatableProfessional(button.dataset.repeatProfessional, button.dataset.repeatSpecialization);
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-add-custom-repeat]").forEach(button => button.addEventListener("click", () => {
    const baseId = button.dataset.addCustomRepeat;
    const input = document.querySelector(`[data-custom-repeat-input="${baseId}"]`);
    const specialization = input?.value?.trim();
    if (!specialization) {
      showToast("Name the specialisation first.");
      return;
    }
    addRepeatableProfessional(baseId, specialization);
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-remove-professional]").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.removeProfessional;
    character.professionalSkills = character.professionalSkills.filter(skillId => skillId !== key);
    delete character.professionalSpecializations[key];
    character.skillOrder = normalizeSkillOrder(character.skillOrder, character.professionalSkills, character.professionalSpecializations);
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
      reorderSkill(draggedId, targetId);
      saveCharacter();
      render();
    });
  });
  document.querySelectorAll("[data-move-skill]").forEach(button => button.addEventListener("click", () => {
    moveSkill(button.dataset.moveSkill, Number(button.dataset.moveDirection));
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-perk-choice]").forEach(input => input.addEventListener("change", () => {
    const skillId = input.dataset.perkChoice;
    character.perks[skillId] = { type: "template", id: input.value };
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-perk-custom]").forEach(input => input.addEventListener("change", () => {
    const skillId = input.dataset.perkCustom;
    const current = character.perks[skillId]?.type === "custom" ? character.perks[skillId] : {};
    character.perks[skillId] = { type: "custom", name: current.name || "", description: current.description || "" };
    saveCharacter();
    render();
  }));
  document.querySelectorAll("[data-custom-perk-field]").forEach(input => input.addEventListener("input", () => {
    const skillId = input.dataset.customPerkField;
    const key = input.dataset.customPerkKey;
    const current = character.perks[skillId]?.type === "custom" ? character.perks[skillId] : {};
    character.perks[skillId] = { type: "custom", name: current.name || "", description: current.description || "", [key]: input.value };
    saveCharacter();
  }));
}

function addRepeatableProfessional(baseId, specialization) {
  if (character.professionalSkills.length >= GAME.professionalSkillChoices) return;
  const base = findById(selectableProfessionalSkills(), baseId);
  if (!base?.repeatable) return;
  const label = String(specialization || "").trim();
  if (!label) return;
  let key = professionalSpecializationKey(baseId, label);
  let suffix = 2;
  while (character.professionalSkills.includes(key) && character.professionalSpecializations[key] !== label) {
    key = `${professionalSpecializationKey(baseId, label)}-${suffix++}`;
  }
  if (character.professionalSkills.includes(key)) return;
  character.professionalSpecializations[key] = label;
  character.professionalSkills.push(key);
  character.skillOrder = normalizeSkillOrder(character.skillOrder, character.professionalSkills, character.professionalSpecializations);
}

function reorderSkill(draggedId, targetId) {
  const order = normalizeSkillOrder();
  const fromIndex = order.indexOf(draggedId);
  const toIndex = order.indexOf(targetId);
  if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;
  const [moved] = order.splice(fromIndex, 1);
  order.splice(toIndex, 0, moved);
  character.skillOrder = order;
  character.skillOrderTouched = true;
}

function moveSkill(skillId, direction) {
  const order = normalizeSkillOrder();
  const index = order.indexOf(skillId);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= order.length) return;
  [order[index], order[nextIndex]] = [order[nextIndex], order[index]];
  character.skillOrder = order;
  character.skillOrderTouched = true;
}

function renderPreview() {
  const ancestry = findById(GAME.ancestries, character.ancestry);
  const perks = unlockedPerkSkills().map(skill => resolvedPerkForSkill(skill)).filter(Boolean);
  const bestSkills = [...GAME.fixedSkills, ...normalizeSkillOrder().map(id => findById(allSelectedSkills(), id)).filter(Boolean)]
    .sort((a, b) => skillValue(b.id) - skillValue(a.id))
    .slice(0, 5)
  el("characterPreview").innerHTML = `
    <span class="preview-label">Character folio</span>
    <div class="preview-name">${escapeHtml(character.name) || "Unnamed Wanderer"}</div>
    <div class="preview-subtitle">${escapeHtml(character.concept) || "Your story begins here"}</div>
    <div class="preview-divider"></div>
    <section class="preview-section"><h4>Player</h4><p class="${character.playerName ? "" : "empty-note"}">${escapeHtml(character.playerName) || "Not yet listed"}</p></section>
    <section class="preview-section"><h4>Details</h4><p>${[character.gender, character.age, character.height, character.weight].filter(Boolean).map(escapeHtml).join(" · ") || `<span class="empty-note">No details yet</span>`}</p></section>
    <section class="preview-section"><h4>Ancestry</h4><p class="${ancestry ? "" : "empty-note"}">${ancestry?.name || "Not yet chosen"}</p></section>
    <section class="preview-section"><h4>Professional skills · ${character.professionalSkills.length}/${GAME.professionalSkillChoices}</h4>${chosenProfessionalSkills().length ? `<ul>${chosenProfessionalSkills().map(skill => `<li>${skill.name}</li>`).join("")}</ul>` : `<p class="empty-note">No professional skills chosen</p>`}</section>
    <section class="preview-section"><h4>Best skills</h4>${bestSkills.length ? `<ul>${bestSkills.map(skill => `<li>${skill.name} ${skillValue(skill.id)}</li>`).join("")}</ul>` : `<p class="empty-note">No priority assigned</p>`}</section>
    <section class="preview-section"><h4>Perks</h4>${perks.length ? `<ul>${perks.map(perk => `<li>${perk.name}</li>`).join("")}</ul>` : `<p class="empty-note">No perks chosen</p>`}</section>`;
}

function showToast(message) {
  el("toast").textContent = message;
  el("toast").classList.add("show");
  setTimeout(() => el("toast").classList.remove("show"), 2200);
}

el("backButton").addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    render();
  }
});

el("nextButton").addEventListener("click", () => {
  if (currentStep < STEPS.length - 1) {
    currentStep++;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.print();
  }
});

el("exportButton").addEventListener("click", () => {
  currentStep = STEPS.length - 1;
  render();
  setTimeout(() => window.print(), 100);
});

el("resetButton").addEventListener("click", () => {
  if (confirm("Start a new character? Your current draft will be cleared.")) {
    character = freshCharacter();
    currentStep = 0;
    saveCharacter();
    render();
    showToast("A fresh page awaits.");
  }
});

render();
