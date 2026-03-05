const loader = document.getElementById("loader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const heroBg = document.querySelector(".hero-bg");
const bellSound = document.getElementById("bellSound");

/* ── Event Data ── */
const eventData = {
  "Dragon Speak": {
    type: "Technical",
    title: "Dragon Speak",
    subtitle: "Paper Presentation",
    image: "images/dragon-speak.jpg",
    team: "Individual / Max 3 per team",
    desc: "Dragon Speak is a premier technical paper presentation platform designed to ignite innovation, analytical thinking, and technical excellence. This event provides a competitive stage for participants to present research-driven ideas, emerging technologies, and transformative solutions with clarity, confidence, and professional impact.\n\nUnleash your knowledge | Command the stage | Speak like a Dragon.",
    rules: [
      "Individual or Team Participation (Max 3)",
      "Topic must be technical and related to current trends or emerging technologies",
      "Using IEEE format for the PPT will be an added benefit (Max 12 Slides)",
      "All team members must actively participate and present in English",
      "Content must be original; plagiarism will result in disqualification",
      "Presentation Time: 7–10 min (including Q&A)",
      "Judges' decision will be final"
    ],
    evaluation: [
      "Technical Content & Depth",
      "Innovation & Originality",
      "Presentation Clarity & Structure",
      "Overall Visual Content & Slide Design",
      "Coordination & Communication Skills",
      "Ability to Handle Questions"
    ]
  },
  "Shadow Debug": {
    type: "Technical",
    title: "Shadow Debug",
    subtitle: "Debugging Competition",
    image: "images/shadow-debug.jpg",
    team: "3 members per team",
    desc: "A technical debugging competition open to all departments. Designed for beginner to intermediate participants to test logical thinking, debugging skills, speed, and teamwork.\n\nLanguages: C, C++, Java, Python\n\nRound 1 – Debugging Challenge: Teams compete in groups of three. Same questions for each group. First team to finish correctly advances.\nRound 2 – Logic Modification: Correct a given program with minimal changes. No major structural edits allowed. Fastest correct team advances.\nRound 3 – Code Relay: One common question. Write the program on paper. Each member gets 1.5 minutes (total 4 minutes). All members must participate.",
    rules: [
      "Teams of 3 members",
      "Languages allowed: C, C++, Java, Python",
      "Round 1: Same questions per group, first to finish advances",
      "Round 2: Minimal changes only, no structural edits",
      "Round 3: Code relay on paper, each member 1.5 min (4 min total)",
      "All members must participate",
      "Judges' decision is final"
    ],
    evaluation: [
      "Accuracy",
      "Logic & Analytical Thinking",
      "Speed",
      "Code Quality",
      "Teamwork",
      "Time Management (Tie-breaker: Accuracy → Time)"
    ]
  },
  "Rabbit Coders": {
    type: "Technical",
    title: "Rabbit Coders",
    subtitle: "Code Relay",
    image: "images/rabbit-coders.jpg",
    team: "3 members per team",
    desc: "Get ready for the ultimate coding showdown!\nCode Relay is a three-stage technical battle that tests your knowledge, logic, debugging skills, and coding speed. From cracking quizzes to solving code puzzles and finally building a working program, this event is designed to challenge your brain at every level. Think fast, debug smart, and code like a pro!",
    rules: [
      "The event will be conducted in a time-bound format",
      "Teams must follow the instructions given for each task carefully",
      "Any programming language can be used for the coding task",
      "Use of unfair means, internet access (if restricted), or malpractice will lead to disqualification",
      "Decisions made by the coordinators and judges will be final",
      "Submission after the allotted time will not be considered",
      "The top 3 teams will receive certificates and awards"
    ],
    evaluation: [
      "Accuracy of answers",
      "Logical and analytical thinking",
      "Code correctness and execution",
      "Time management and completion speed"
    ]
  },
  "Design Levitation": {
    type: "Technical",
    title: "Design Levitation",
    subtitle: "UI/UX Challenge",
    image: "images/design-levitation.jpg",
    team: "2–3 members per team",
    desc: "Design Levitation is a creative UI/UX design challenge that tests participants' ability to transform ideas into intuitive and visually appealing digital experiences.\nTeams will be given a real-world problem statement and must design a user-friendly mobile or web interface using design tools.\n\nThe event focuses on: Creativity, Usability & User Flow, Visual Consistency, and Problem-Solving Skills.\n\nParticipants must present their design approach and clearly explain the user journey within the given time.",
    rules: [
      "Participants must bring their own laptops",
      "Internet access will be provided if required",
      "Only design tools such as Figma, Adobe XD, or Canva are allowed",
      "A problem statement will be provided at the start of the event",
      "Participants must design UI/UX screens only (no backend or full website implementation)",
      "Plagiarism, copied designs, or pre-made templates are strictly prohibited",
      "Teams must complete the design within the given time limit",
      "Each team must present and explain their design in the final round",
      "Judges' decision will be final"
    ],
    evaluation: [
      "Creativity & Innovation",
      "User Experience (UX)",
      "User Interface (UI)",
      "Problem Understanding",
      "Presentation & Explanation"
    ]
  },
  "Mind Balance": {
    type: "Technical",
    title: "Mind Balance",
    subtitle: "Tech Quiz",
    image: "images/mind-balance.jpg",
    team: "3 members per team",
    desc: "Are you ready to test your knowledge, logic, and presence of mind?\nMind Balance (Tech Quiz) is an intense multi-round technical competition designed to challenge your programming fundamentals, analytical thinking, and quick decision-making skills.\nFrom a written screening round to visual identification, rapid fire questioning, buzzer battles, and a surprise final challenge, this event pushes participants to stay focused, think fast, and answer smart under pressure.\n\nIt's not just about knowing the answer — it's about maintaining your mind balance in every round.",
    rules: [
      "The event will be conducted in a strict time-bound format",
      "Teams must follow the instructions of each round carefully",
      "Use of mobile phones, unfair means, or malpractice will lead to disqualification",
      "Teams must maintain discipline throughout the event",
      "In case of a tie, tie-breaker questions will be conducted",
      "Decisions made by the coordinators and judges will be final",
      "Top 3 teams will receive certificates and awards"
    ],
    evaluation: [
      "Accuracy of answers",
      "Technical knowledge and understanding",
      "Logical and analytical thinking",
      "Speed, confidence, and presence of mind",
      "Performance in the final challenge"
    ]
  },
  "Ox Warrior Round": {
    type: "Technical",
    title: "Ox Warrior Round",
    subtitle: "Technical Interview",
    image: "images/ox-warrior-round.jpg",
    team: "Individual Event",
    desc: "Ox Warrior Round is a technical interview–based competition inspired by strength, strategy, and intelligence. Participants will go through multiple levels including logical reasoning, core technical questioning, group discussion, and a final interview round.\n\nRound 1 – Logic Round: 3 aptitude questions + 1 coding output question (10 minutes)\nRound 2 – Technical Core Round: Choose one domain (DSA / DBMS / OS / CN / OOPS), 2 technical questions (3–4 min per participant)\nRound 3 – Group Discussion: 4–6 participants, 2 min prep + 8 min discussion\nFinal Round – Interview: Short technical + scenario-based interview",
    rules: [
      "Individual participation only",
      "Strict time limits will be followed",
      "No use of mobile phones",
      "Decision of judges will be final",
      "Maintain professionality"
    ],
    evaluation: [
      "Logical Ability",
      "Technical Knowledge",
      "Communication Skills",
      "Leadership & GD Performance",
      "Interview Confidence"
    ]
  },
  "Morph Meme": {
    type: "Non-Technical",
    title: "Morph Meme",
    subtitle: "The Ultimate Meme Challenge",
    image: "images/morph-meme.jpg",
    team: "Max 3 members per team",
    desc: "Unleash your creativity and humor in this exciting meme creation competition!\nMorph Meme is a fun and engaging event where participants must create original and relatable memes based on the theme given on the spot. This event tests your creativity, sense of humor, trend awareness, and design skills.\n\nIf you can turn simple ideas into viral-level comedy, this is your stage! Make the audience laugh, impress the judges, and prove that you are the true Meme Master!",
    rules: [
      "Participants should bring their own laptop",
      "Each team can submit only one meme per round",
      "Meme must be created during the event time only",
      "Plagiarism or watermark from other pages will lead to disqualification",
      "Meme should be relevant to the given theme or situation",
      "Use of basic editing tools (Canva, Photoshop, mobile apps) is allowed",
      "Participants must explain their meme in 1 minute (optional but encouraged)",
      "Time limit: 30 minutes",
      "Judges' decision will be final and binding"
    ],
    evaluation: [
      "Creativity – 30%",
      "Humor & Impact – 25%",
      "Relevance to Theme – 20%",
      "Design & Presentation – 15%",
      "Originality – 10%"
    ]
  },
  "Eternal Strikers": {
    type: "Non-Technical",
    title: "Eternal Strikers",
    subtitle: "Box Cricket",
    image: "images/eternal-strikers.jpg",
    team: "5 members per team",
    desc: "Step into the arena where speed meets strategy and every ball counts!\nThe Box Cricket Showdown 2026 brings together passion, power-hitting, and pure adrenaline in a high-energy, fast-paced cricket clash. With short overs, quick reflexes, and electrifying moments, this isn't just cricket — it's a thrilling experience packed into every minute.",
    rules: [
      "Bats should be brought by the respective teams",
      "3-over match",
      "Underarm bowling is only permitted",
      "Lofted shots are restricted",
      "Scores are decided by the respective coordinators",
      "Every match is a knockout round",
      "Top 2 teams will be rewarded with cash prizes",
      "Umpire's decision is final"
    ],
    evaluation: [
      "The team that survives the knockout stage will be crowned champions"
    ]
  },
  "Rat Pulse": {
    type: "Non-Technical",
    title: "Rat Pulse",
    subtitle: "Connection",
    image: "images/rat-pulse.jpg",
    team: "3 members per team",
    desc: "A fun non-technical team event testing observation, creativity & teamwork.\n\nRound 1: Identify the song connection from 4 images (5 sets, buzzer round). Top scoring teams qualify for Round 2.\nRound 2: One member acts a movie name (no speaking), others guess (3 chances).\n\nFocuses on quick thinking & team coordination.",
    rules: [
      "3 members per team (mandatory)",
      "Buzzer press required before answering in Round 1",
      "Only one answer per buzzer press",
      "No speaking or hinting movie name in Round 2",
      "Judges' decision is final",
      "Fair play must be maintained"
    ],
    evaluation: [
      "Points for each correct answer in Round 1",
      "Highest scorers move to Round 2",
      "Round 2 based on correct guesses",
      "Best overall team wins"
    ]
  },
  "Heat Beats": {
    type: "Non-Technical",
    title: "Heat Beats",
    subtitle: "Musical Challenge",
    image: "images/heat-beats.jpg",
    team: "4 members per team",
    desc: "Heat Beats is an exciting musical event that tests participants' listening skills and knowledge of songs. Teams must identify songs using clues like background music, images, and missing lyrics. The event progresses through multiple rounds and ends with an intense final face-off.\n\nRound 1: BGM Identification — identify the song from background music.\nRound 2: Picture Clue Round — guess the song from 3–4 images.\nRound 3: Missing Lyrics Round — identify missing lines from partial lyrics.\nRound 4: Final Face-off — top teams compete one-on-one with cast member clues.",
    rules: [
      "Each team must consist of 4 members",
      "Teams must answer within the given time limit",
      "Seeking help from other teams will lead to disqualification",
      "The decision of the coordinators and judges will be final"
    ],
    evaluation: [
      "Accuracy of answers",
      "Quick thinking and response time",
      "Team coordination",
      "After each round, teams with lower scores are eliminated; top two compete in the final"
    ]
  },
  "Battle Realm": {
    type: "Non-Technical",
    title: "Battle Realm",
    subtitle: "Gaming Night",
    image: "images/battle-realm.jpg",
    team: "4 members per team (mandatory)",
    desc: "A unique multi-genre gaming tournament testing reflexes, strategy, and mental grit.\n\nStage 1 (Girls): Strategic board/card battle (Uno or Ludo) to find the top female squad.\nStage 1 (Boys): High-octane survival battle (Free Fire) to crown the top male squad.\nGrand Finale: The winning Girls' team and Boys' team face off in a tactical Chess showdown.",
    rules: [
      "Stage 1 (Girls): All 4 members must participate. Points based on finishing order. No cross-table helping",
      "Stage 1 (Boys): 4v4 Custom Room match. No emulators or third-party hacks. Devices must be brought by participants",
      "Grand Finale (Chess): 4 individual boards. Team winning majority of boards (2 out of 3) wins",
      "Any form of toxic behavior or teaming up with other teams leads to instant disqualification",
      "Organizers' and Referees' decision is final and binding"
    ],
    evaluation: [
      "Girls' Bracket: Ranking based on total tokens (Ludo) or least penalty points (Uno)",
      "Boys' Bracket: Placement Points + Total Kills",
      "Grand Finale: Number of individual chess matches won",
      "Overall Winner: The team that conquers the Chess board becomes champions"
    ]
  },
  "Astral Prompts": {
    type: "Non-Technical",
    title: "Astral Prompts",
    subtitle: "The Ultimate AI Prompt Showdown",
    image: "images/astral-prompts.jpg",
    team: "2 members per team",
    desc: "Astral AI — The Ultimate Prompt Showdown\n\nTotal Rounds: 3 (Each round is an elimination round)\nAI tools allowed: ChatGPT, AI Image Generators, and similar AI platforms.\nMaximum 5 AI attempts allowed per round.",
    rules: [
      "Participants must bring their own laptops",
      "Internet will be provided (if applicable)",
      "Use of unfair means will lead to immediate disqualification",
      "Teams must strictly follow time limits",
      "Judges' decision will be final and binding",
      "Participants must maintain discipline and professional conduct"
    ],
    evaluation: [
      "Prompt Clarity, Creativity, Output Quality, Efficiency",
      "Branding, Prompt Intelligence, Presentation",
      "Innovation, Real-World Impact, Prompt Strategy, Team Coordination"
    ]
  }
};

/* ── Detail View Elements ── */
const detail = document.getElementById("eventDetail");
const detailBack = document.getElementById("detailBack");
const detailPosterLabel = document.getElementById("detailPosterLabel");
const detailTag = document.getElementById("detailTag");
const detailTitle = document.getElementById("detailTitle");
const detailMeta = document.getElementById("detailMeta");
const detailDesc = document.getElementById("detailDesc");
const detailRules = document.getElementById("detailRules");
const detailEval = document.getElementById("detailEval");

function openDetail(eventName) {
  const d = eventData[eventName];
  if (!d) return;

  detailPosterLabel.textContent = d.title;
  detailTag.textContent = d.type;
  detailTitle.textContent = d.title;
  detailDesc.textContent = d.desc;

  /* Detail poster image */
  const detailPoster = document.querySelector(".detail-poster");
  const existingImg = detailPoster.querySelector(".detail-poster-img");
  if (existingImg) existingImg.remove();
  if (d.image) {
    const img = document.createElement("img");
    img.src = d.image;
    img.alt = d.title;
    img.className = "detail-poster-img";
    detailPoster.insertBefore(img, detailPosterLabel);
  }

  /* Meta cards */
  detailMeta.innerHTML = "";
  const metas = [
    { label: "Event Type", value: d.subtitle },
    { label: "Team Size", value: d.team },
    { label: "Date", value: "March 13, 2026" },
    { label: "Venue", value: "Kings Engineering College" }
  ];
  metas.forEach((m) => {
    const card = document.createElement("div");
    card.className = "meta-card";
    card.innerHTML = `<div class="meta-label">${m.label}</div><div class="meta-value">${m.value}</div>`;
    detailMeta.appendChild(card);
  });

  /* Rules */
  detailRules.innerHTML = "";
  d.rules.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r;
    detailRules.appendChild(li);
  });

  /* Evaluation */
  detailEval.innerHTML = "";
  d.evaluation.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = e;
    detailEval.appendChild(li);
  });

  detail.classList.add("open");
  detail.setAttribute("aria-hidden", "false");
  detail.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  detail.classList.remove("open");
  detail.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

detailBack.addEventListener("click", closeDetail);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDetail();
});

/* ── Countdown ── */
const targetDate = new Date("2026-03-13T09:00:00+05:30").getTime();
const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMins = document.getElementById("cdMins");
const cdSecs = document.getElementById("cdSecs");

function updateCountdown() {
  const now = Date.now();
  const diff = Math.max(0, targetDate - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  cdDays.textContent = String(d).padStart(2, "0");
  cdHours.textContent = String(h).padStart(2, "0");
  cdMins.textContent = String(m).padStart(2, "0");
  cdSecs.textContent = String(s).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ── Loader ── */
window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hidden"), 700);
});

/* ── Mobile Nav ── */
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ── Filter Tabs ── */
const filterTabs = document.querySelectorAll(".filter-tab");
const eventGroups = document.querySelectorAll(".event-group");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    eventGroups.forEach((group) => {
      if (filter === "all" || group.dataset.group === filter) {
        group.classList.remove("hidden-group");
      } else {
        group.classList.add("hidden-group");
      }
    });
  });
});

/* ── Event Explore → Detail View ── */
document.querySelectorAll(".event-explore").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".event-card");
    openDetail(card.dataset.event);
  });
});

/* ── Parallax ── */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  heroBg.style.transform = `translateY(${scrollY * 0.15}px)`;
});

/* ── Scroll Reveal ── */
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealElements.forEach((el) => observer.observe(el));

/* ── GSAP Animations ── */
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".insignia", {
    y: 18,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out"
  });

  gsap.utils.toArray(".event-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 88%"
      },
      y: 24,
      opacity: 0,
      duration: 0.5,
      delay: index % 4 * 0.06,
      ease: "power1.out"
    });
  });
}

/* ── Dojo Bell Sound ── */
document.querySelectorAll(".bell-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (!bellSound) return;
    bellSound.currentTime = 0;
    bellSound.play().catch(() => {});
  });
});
