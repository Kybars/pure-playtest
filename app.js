const SKILL_ARRAY = [
  60, 58, 56, 54, 50, 48, 46, 44,
  43, 42, 41, 40, 39, 38, 37, 36,
  35, 34, 33, 32, 31, 30, 29, 28,
  27, 26, 25, 24, 23, 22, 21, 20
];

const GAME = {
  title: "PuRe Playtest",
  featureBudget: 5,
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
    { id: "deceive", name: "Deceive" },
    { id: "drive", name: "Drive" },
    { id: "first-aid", name: "First Aid" },
    { id: "influence", name: "Influence" },
    { id: "insight", name: "Insight" },
    { id: "intimidate", name: "Intimidate" },
    { id: "language", name: "Language" },
    { id: "local-knowledge", name: "Local Knowledge" },
    { id: "navigate", name: "Navigate" },
    { id: "perception", name: "Perception" },
    { id: "ride", name: "Ride" },
    { id: "sing", name: "Sing" },
    { id: "sleight", name: "Sleight of Hand" },
    { id: "stealth", name: "Stealth" },
    { id: "survival", name: "Survival" },
    { id: "swim", name: "Swim" },
    { id: "customs", name: "Customs" }
  ],
  combatSkills: [
    { id: "endurance", name: "Endurance" },
    { id: "evade", name: "Evade" },
    { id: "willpower", name: "Willpower" },
    { id: "melee", name: "Melee" },
    { id: "ranged", name: "Ranged" }
  ],
  professionalSkills: [
    { id: "alchemy", name: "Alchemy" },
    { id: "animal-training", name: "Animal Training" },
    { id: "artifice", name: "Artifice" },
    { id: "bureaucracy", name: "Bureaucracy" },
    { id: "commerce", name: "Commerce" },
    { id: "command", name: "Command" },
    { id: "craft", name: "Craft" },
    { id: "engineering", name: "Engineering" },
    { id: "entertain", name: "Entertain" },
    { id: "farming", name: "Farming" },
    { id: "healing", name: "Healing" },
    { id: "heraldry", name: "Heraldry" },
    { id: "hunting", name: "Hunting" },
    { id: "law", name: "Law" },
    { id: "leadership", name: "Leadership" },
    { id: "lore", name: "Lore" },
    { id: "medicine", name: "Medicine" },
    { id: "navigation-sea", name: "Seamanship" },
    { id: "oratory", name: "Oratory" },
    { id: "performance", name: "Performance" },
    { id: "religion", name: "Religion" },
    { id: "scholarship", name: "Scholarship" },
    { id: "scouting", name: "Scouting" },
    { id: "tradecraft", name: "Tradecraft" },
    { id: "warfare", name: "Warfare" },
    { id: "combat-magic", name: "Combat Magic", hidden: true }
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
  { id: "specialisation", label: "Specialisation" },
  { id: "skills", label: "Skill Order" },
  { id: "features", label: "Features" },
  { id: "review", label: "Review" }
];

const STORAGE_KEY = "ember-and-ink-character";

const freshCharacter = () => ({
  name: "",
  gender: "",
  concept: "",
  appearance: "",
  ancestry: "",
  professionalSkills: [],
  skillOrder: [],
  skillOrderTouched: false,
  features: [],
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
    migrated.professionalSkills = Array.isArray(saved.professionalSkills)
      ? saved.professionalSkills
      : Array.isArray(saved.selectedProfessionalSkills)
        ? saved.selectedProfessionalSkills
        : [];
    migrated.professionalSkills = migrated.professionalSkills
      .filter(id => selectableProfessionalSkills().some(skill => skill.id === id))
      .slice(0, GAME.professionalSkillChoices);
    migrated.skillOrderTouched = saved.skillOrderTouched === true;
    migrated.skillOrder = Array.isArray(saved.skillOrder) && migrated.skillOrderTouched ? saved.skillOrder : [];
    migrated.skillOrder = normalizeSkillOrder(migrated.skillOrder, migrated.professionalSkills);
    return migrated;
  } catch {
    return freshCharacter();
  }
}

function saveCharacter() {
  character.professionalSkills = character.professionalSkills
    .filter(id => selectableProfessionalSkills().some(skill => skill.id === id))
    .slice(0, GAME.professionalSkillChoices);
  character.skillOrder = normalizeSkillOrder(character.skillOrder, character.professionalSkills);
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

function chosenProfessionalSkills() {
  return character.professionalSkills
    .map(id => findById(selectableProfessionalSkills(), id))
    .filter(Boolean);
}

function allSelectedSkills(professionalIds = character.professionalSkills) {
  const selectedProfessionals = professionalIds
    .map(id => findById(selectableProfessionalSkills(), id))
    .filter(Boolean);
  return [...GAME.combatSkills, ...GAME.standardSkills, ...selectedProfessionals]
    .sort((a, b) => a.name.localeCompare(b.name));
}

function allSkillDefinitions() {
  return [...GAME.combatSkills, ...GAME.standardSkills, ...GAME.professionalSkills];
}

function normalizeSkillOrder(order = character.skillOrder, professionalIds = character.professionalSkills) {
  const available = allSelectedSkills(professionalIds).map(skill => skill.id);
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
  const rank = skillRank(id);
  return rank < 0 ? 20 : SKILL_ARRAY[rank] ?? 20;
}

function spentFeaturePoints() {
  return character.features.reduce((sum, id) => sum + (findById(GAME.features, id)?.cost || 0), 0);
}

function completionChecks() {
  return [
    !!character.name.trim() && !!character.gender && !!character.concept.trim(),
    !!character.ancestry,
    character.professionalSkills.length === GAME.professionalSkillChoices,
    skillOrderComplete(),
    spentFeaturePoints() <= GAME.featureBudget,
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
          ? "Ready for finishing touches."
          : "Put your skills in priority order."
        : `Choose ${GAME.professionalSkillChoices} professional skills.`
      : "Choose an ancestry."
    : "Start with any identity details you know.";
}

function render() {
  renderStepNav();
  const renderers = [renderIdentity, renderAncestry, renderProfessionalChoice, renderSkills, renderFeatures, renderReview];
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
      <div class="field"><label>Character name</label><input data-field="name" value="${escapeHtml(character.name)}" placeholder="Maera of the Low Road"></div>
      <div class="field"><label>Concept</label><input data-field="concept" value="${escapeHtml(character.concept)}" placeholder="Disgraced cartographer, oathbound duelist..."></div>
    </div>
    <div class="field"><label>Gender</label>
      <div class="segmented-choice">
        ${["Male", "Female"].map(option => `<button type="button" class="${character.gender === option ? "selected" : ""}" data-gender-choice="${option}">${option}</button>`).join("")}
      </div>
    </div>
    <div class="field"><label>Appearance & manner</label>
      <textarea data-field="appearance" placeholder="Clothes, scars, presence, voice...">${escapeHtml(character.appearance)}</textarea>
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
      const selected = character.professionalSkills.includes(skill.id);
      const locked = !selected && character.professionalSkills.length >= GAME.professionalSkillChoices;
      return `<button class="choice-card ${selected ? "selected" : ""}" data-professional-skill="${skill.id}" ${locked ? "disabled" : ""}>
        <div><h3>${skill.name}</h3><p>${selected ? "Included in your final skill priority list." : "Available professional skill."}</p></div>
        <small>${selected ? "Selected" : locked ? "Limit reached" : "Choose"}</small>
      </button>`;
    }).join("")}</div>`;
}

function renderSkills() {
  if (character.professionalSkills.length !== GAME.professionalSkillChoices) {
    return heading("Professional skills required", "Choose your seven professional skills first.", "Once those are set, you will rank the complete 32-skill list from strongest to weakest.");
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
  const features = character.features.map(id => findById(GAME.features, id)).filter(Boolean);
  return heading("The road awaits", "Review your character.", "Everything below will become your print-ready character sheet. Use your browser’s PDF option when exporting.") + `
    <div class="review-sheet">
      <h2>${escapeHtml(character.name) || "Unnamed Wanderer"}</h2>
      <p class="review-meta">${escapeHtml(character.gender)}${character.gender && character.concept ? " · " : ""}${escapeHtml(character.concept) || "No concept yet"}</p>
      <div class="review-columns">
        <div>
          <section class="review-block"><h3>Ancestry</h3><p><strong>${ancestry?.name || "Not chosen"}</strong><br>${ancestry?.description || ""}</p></section>
          <section class="review-block"><h3>Appearance & manner</h3><p>${escapeHtml(character.appearance) || "Not yet described."}</p></section>
          <section class="review-block"><h3>Professional skills</h3>${chosenProfessionalSkills().length ? `<ul>${chosenProfessionalSkills().map(skill => `<li>${skill.name}</li>`).join("")}</ul>` : "<p>None chosen.</p>"}</section>
        </div>
        <div>
          <section class="review-block"><h3>Features</h3>${features.length ? `<ul>${features.map(f => `<li><strong>${f.name}.</strong> ${f.description}</li>`).join("")}</ul>` : "<p>None chosen.</p>"}</section>
          <section class="review-block"><h3>Adventurer's notes</h3><textarea data-field="notes" placeholder="Allies, ambitions, burdens...">${escapeHtml(character.notes)}</textarea></section>
        </div>
      </div>
      <section class="review-skills">
        <div class="review-skills-heading">
          <div><span class="preview-label">Priority array</span><h3>Skills</h3></div>
          <p><strong>${normalizeSkillOrder().length}</strong> ranked skills</p>
        </div>
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
    character.skillOrder = normalizeSkillOrder(character.skillOrder, character.professionalSkills);
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
  document.querySelectorAll("[data-feature]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.feature;
    if (character.features.includes(id)) character.features = character.features.filter(feature => feature !== id);
    else character.features.push(id);
    saveCharacter();
    render();
  }));
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
  const features = character.features.map(id => findById(GAME.features, id)).filter(Boolean);
  const bestSkills = normalizeSkillOrder().slice(0, 5)
    .map(id => findById(allSelectedSkills(), id))
    .filter(Boolean);
  el("characterPreview").innerHTML = `
    <span class="preview-label">Character folio</span>
    <div class="preview-name">${escapeHtml(character.name) || "Unnamed Wanderer"}</div>
    <div class="preview-subtitle">${escapeHtml(character.concept) || "Your story begins here"}</div>
    <div class="preview-divider"></div>
    <section class="preview-section"><h4>Ancestry</h4><p class="${ancestry ? "" : "empty-note"}">${ancestry?.name || "Not yet chosen"}</p></section>
    <section class="preview-section"><h4>Professional skills · ${character.professionalSkills.length}/${GAME.professionalSkillChoices}</h4>${chosenProfessionalSkills().length ? `<ul>${chosenProfessionalSkills().map(skill => `<li>${skill.name}</li>`).join("")}</ul>` : `<p class="empty-note">No professional skills chosen</p>`}</section>
    <section class="preview-section"><h4>Best skills</h4>${bestSkills.length ? `<ul>${bestSkills.map((skill, index) => `<li>${skill.name} ${SKILL_ARRAY[index] ?? 20}</li>`).join("")}</ul>` : `<p class="empty-note">No priority assigned</p>`}</section>
    <section class="preview-section"><h4>Features</h4>${features.length ? `<ul>${features.map(f => `<li>${f.name}</li>`).join("")}</ul>` : `<p class="empty-note">No features chosen</p>`}</section>`;
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
