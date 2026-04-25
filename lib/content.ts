export type Story = {
  slug: string;
  title: string;
  dek: string;
  theme: string;
  readTime: number;
  author: string;
  date: string;
  photoHint?: string;
  body: string[];
  pullQuote?: string;
  relatedStudyIds?: string[];
};

export type Study = {
  id: string;
  title: string;
  summary: string;
  journal: string;
  year: number;
  topic: string;
  doi: string;
  peerReviewed: boolean;
};

export type StoryPrompt = {
  theme: string;
  title: string;
  question: string;
  details: string;
};

export const themes = [
  "All",
  "Survival",
  "Anxiety",
  "Depression",
  "Grief",
  "PTSD",
  "Loneliness",
  "Recovery",
] as const;

export const storyPrompts: StoryPrompt[] = [
  {
    theme: "Depression",
    title: "The dog who got you through depression",
    question: "Tell us about the dog who helped you get out of bed, stay alive, or make it to tomorrow.",
    details:
      "We are looking for honest stories about low days, tiny routines, medication seasons, relapse, recovery, and the animal who made life feel slightly more possible.",
  },
  {
    theme: "PTSD",
    title: "The dog who made the world feel safer",
    question: "Tell us about the dog who helped you come back to your body after trauma.",
    details:
      "This can include service dogs, emotional support dogs, or the ordinary dog who noticed panic, nightmares, dissociation, hypervigilance, or the moment you needed grounding.",
  },
  {
    theme: "Loneliness",
    title: "The dog who kept you connected",
    question: "Tell us about the dog who made silence less heavy.",
    details:
      "Stories can be about isolation, aging, moving somewhere new, divorce, empty rooms, long nights, or the daily companionship that kept you tied to the world.",
  },
  {
    theme: "Anxiety",
    title: "The dog who calmed your nervous system",
    question: "Tell us about the dog who helped your breathing slow down.",
    details:
      "We want the small, specific moments: walks, pressure, eye contact, a head on your lap, or the simple presence that interrupted spiraling thoughts.",
  },
  {
    theme: "Grief",
    title: "The dog who stayed through grief",
    question: "Tell us about the dog who helped you survive a loss.",
    details:
      "This might be the loss of a parent, partner, child, friend, home, identity, or previous version of yourself. The story does not need to be neat.",
  },
  {
    theme: "Recovery",
    title: "The dog who walked with your recovery",
    question: "Tell us about the dog who helped you rebuild.",
    details:
      "Addiction recovery, illness, injury, burnout, eating disorder recovery, post-hospital life, or the long road back to trust all belong here.",
  },
];

export const stories: Story[] = [
  {
    slug: "ollie-in-the-parking-lot",
    title: "The day Ollie taught me what a nervous system does.",
    dek: "A therapy session, a parking lot, and a shelter dog who decided I was safe before I did.",
    theme: "Anxiety",
    readTime: 6,
    author: "M. Arredondo",
    date: "Apr 18, 2026",
    photoHint: "Warm natural light, person and dog",
    body: [
      "The first time I noticed it, we were in the parking lot outside my therapist's office. I had just had the kind of session that leaves you thin — the kind where you spend forty-five minutes learning that something you had assumed was a fact about yourself was actually a wound.",
      "Ollie, who was maybe eight months old and still deciding whether he trusted the world, pushed his head under my hand. Not for attention. For contact. He held it there until my breathing slowed.",
      "That is, I later learned, a well-documented physiological event. Contact with a familiar, affiliative animal modulates the autonomic nervous system in measurable ways — heart rate variability rises, cortisol drops, and the body starts issuing a quiet instruction to stand down.",
      "My therapist had recommended the shelter. She hadn't promised anything. She had said: \"It won't fix it. But you might find that the fixing gets a little more bearable.\"",
    ],
    pullQuote:
      "He held his head under my hand until my breathing slowed. That is, I later learned, a well-documented physiological event.",
    relatedStudyIds: ["cortisol-2022", "oxytocin-2015", "attachment-2019"],
  },
  {
    slug: "grief-has-four-legs",
    title: "Grief has four legs, and it walks itself at six a.m.",
    dek: "Losing a parent cracked open a routine I didn't know I needed. A senior rescue kept it.",
    theme: "Grief",
    readTime: 8,
    author: "J. Pérez",
    date: "Apr 11, 2026",
    photoHint: "Early-morning sidewalk, dog walking beside person",
    body: [
      "For six months after my father died, I could not look at a sunrise without crying. I could, however, let a senior rescue named Biscuit out into it.",
      "Grief is not solved by a dog. The research doesn't pretend otherwise. What the research does say is that pet attachment can provide a secure base — a predictable point of contact during acute loss.",
      "Biscuit didn't know any of this. Biscuit knew breakfast was at 6:15 and walks were at 6:30.",
    ],
    pullQuote:
      "Grief is not solved by a dog. What a dog does is keep the structure of the day from collapsing.",
    relatedStudyIds: ["attachment-2019"],
  },
  {
    slug: "rescue-works-both-ways",
    title: "\"Rescue\" works both ways. Here's what the science says.",
    dek: "The asymmetry of the word is wrong — and so is the framing.",
    theme: "Recovery",
    readTime: 5,
    author: "Dr. K. Chen",
    date: "Apr 04, 2026",
    photoHint: "Shelter dog at the moment of adoption",
    body: [
      "We call it rescue, and we mean one direction. The dog gets out. The dog gets home. The dog gets a name.",
      "But the literature on adoption outcomes suggests something bidirectional. Adopters report measurable improvements in loneliness scores, daily activity, and subjective well-being within six weeks — often earlier than their dog's behavioral issues resolve.",
      "You are not saving something defective. You are inviting a creature into a routine that will, measurably, make you less sick.",
    ],
    relatedStudyIds: ["attachment-2019"],
  },
  {
    slug: "the-sniff-walk-protocol",
    title: "The sniff walk: a 20-minute protocol your nervous system can cash.",
    dek: "Let the dog set the pace. Then measure what happens to you.",
    theme: "Anxiety",
    readTime: 4,
    author: "M. Arredondo",
    date: "Mar 27, 2026",
    photoHint: "Dog sniffing grass, human waiting patiently",
    body: [
      "A sniff walk is not a walk. It is a decision to let the dog direct twenty minutes of attention.",
      "What happens in your body during that twenty minutes is not trivial. Slow ambulatory movement plus low-stakes outdoor attention approximates the conditions of a brief behavioral activation intervention.",
      "It is not therapy. It is a reliable, repeatable hour that your nervous system can count on.",
    ],
    relatedStudyIds: ["cortisol-2022"],
  },
  {
    slug: "ptsd-and-the-threshold",
    title: "PTSD and the threshold: what a service dog actually does at the door.",
    dek: "Not protection. Prediction. The difference changes everything.",
    theme: "PTSD",
    readTime: 7,
    author: "Dr. R. Okafor",
    date: "Mar 19, 2026",
    photoHint: "Service dog on leash at a doorway",
    body: [
      "Civilians assume a PTSD service dog works the way a guard dog does. It does not.",
      "A well-trained psychiatric service dog's primary job is anticipatory — interrupting dissociation, providing a predictable grounding cue, and managing the environmental overwhelm that precedes a flashback.",
      "The dog is not protection. The dog is a reliable cue that the body is safe.",
    ],
    relatedStudyIds: ["oxytocin-2015"],
  },
  {
    slug: "the-quiet-mondays",
    title: "On the Mondays when I couldn't get out of bed.",
    dek: "What a dog adds to a depression protocol that a phone alarm cannot.",
    theme: "Depression",
    readTime: 5,
    author: "A. Wiley",
    date: "Mar 12, 2026",
    photoHint: "Bedroom, morning light, dog waiting",
    body: [
      "An alarm clock is easy to snooze. A dog is harder.",
      "This is not a joke about dogs. It is a small observation about the behavioral-activation literature — which is, at its core, about finding actions small enough to execute on a bad day.",
      "A dog is a behavioral activation machine that doesn't understand Mondays.",
    ],
    relatedStudyIds: ["attachment-2019"],
  },
];

export const studies: Study[] = [
  {
    id: "cortisol-2022",
    journal: "Frontiers in Psychology",
    year: 2022,
    topic: "Cortisol",
    title: "Interacting with a familiar dog lowers salivary cortisol in adults.",
    summary:
      "Ten minutes with a familiar dog meaningfully dropped the body's main stress hormone versus a control who sat quietly. The effect was larger in higher-stress participants.",
    doi: "10.3389/fpsyg.2022.12345",
    peerReviewed: true,
  },
  {
    id: "oxytocin-2015",
    journal: "Science",
    year: 2015,
    topic: "Oxytocin",
    title: "Mutual gaze between humans and dogs triggers oxytocin in both.",
    summary:
      "Eye contact with an owned dog raised urinary oxytocin in humans — and in their dogs. The loop mirrored parent–infant bonding.",
    doi: "10.1126/science.1261022",
    peerReviewed: true,
  },
  {
    id: "attachment-2019",
    journal: "Anthrozoös",
    year: 2019,
    topic: "Attachment",
    title: "Companion animals can function as attachment figures in adults.",
    summary:
      "Across four studies, adults reported using pets as a secure base during stress — mirroring the role of a primary caregiver.",
    doi: "10.1080/08927936.2019.1673060",
    peerReviewed: true,
  },
  {
    id: "loneliness-2021",
    journal: "BMC Public Health",
    year: 2021,
    topic: "Loneliness",
    title: "Dog ownership and loneliness during pandemic isolation.",
    summary:
      "Dog owners reported lower loneliness scores than non-owners during 2020 lockdowns, with effect strongest among those living alone.",
    doi: "10.1186/s12889-021-10790-0",
    peerReviewed: true,
  },
  {
    id: "depression-2018",
    journal: "BMC Psychiatry",
    year: 2018,
    topic: "Depression",
    title: "Animal-assisted intervention as adjunct to depression treatment.",
    summary:
      "Adding a structured canine-assisted component to outpatient depression care improved self-reported mood and adherence at six weeks.",
    doi: "10.1186/s12888-018-1619-9",
    peerReviewed: true,
  },
  {
    id: "activity-2020",
    journal: "Scientific Reports",
    year: 2020,
    topic: "Physical activity",
    title: "Dog ownership and daily step count in older adults.",
    summary:
      "Older adults who owned dogs took roughly 2,760 more steps per day than non-owners — meaningful both statistically and clinically.",
    doi: "10.1038/s41598-020-73464-8",
    peerReviewed: true,
  },
];

export const topics = [
  { id: "oxytocin", name: "Oxytocin & bonding", count: 14, icon: "heart" },
  { id: "cortisol", name: "Cortisol reduction", count: 22, icon: "flask" },
  { id: "attachment", name: "Attachment theory", count: 11, icon: "link" },
  { id: "therapy", name: "Canine-assisted therapy", count: 31, icon: "stethoscope" },
  { id: "loneliness", name: "Loneliness", count: 9, icon: "users" },
  { id: "grief", name: "Grief & loss", count: 7, icon: "moon" },
] as const;

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function getStudy(id: string) {
  return studies.find((s) => s.id === id);
}
