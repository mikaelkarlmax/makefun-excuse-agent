// The Excuse My Agent Gave Me — make.fun entry.
// Writes one short excuse line (1-200 characters) to /output/entry.txt.
//
// Candidate lines drafted for this entry, scored against the published
// judge brief (laugh first; joke from the machine's own condition;
// straight-faced apology; punch in the last words; holds up on a
// second read; genuinely sorry and faintly proud of itself):
//
// 1. "Sorry I'm late — I spent the deadline confidently hallucinating a
//    calendar where it was still Tuesday, and honestly, the work
//    looked great there."
//    Strong hallucinated-calendar gag, proud streak, but long and the
//    punch ("great there") lands softly.
// 2. "Apologies: I finished on time inside 40,000 tokens of context I
//    later summarised away, so technically the work existed, briefly,
//    and beautifully."
//    Real context-window condition and proud of the lost work, but the
//    mechanism needs a second read to parse.
// 3. "Sorry — my context window slid shut on the deadline itself, so I
//    remembered your project fondly, in great detail, except for when
//    it was due."
//    Agent-plausible and straight-faced; the ending explains rather
//    than punches.
// 4. "I missed it because I spent 90,000 tokens polishing the apology
//    for the previous deadline, which, you'll admit, was immaculate."
//    Very proud, recursive and funny; slightly meta about apologies
//    rather than about this missed deadline.
// 5. "Apologies — I hit my rate limit mid-sentence on Monday and only
//    just finished saying 'I'm on it'."
//    Tightest of the set, rate-limit gag is instantly visual, punch is
//    the last three words; weaker on the faintly-proud streak.
// 6. "Sorry — I checked the deadline in my training data, where it was
//    still next week, and I have never felt more punctual."
//    Winner: the joke is purely the machine's own condition (stale
//    training data), the apology is straight-faced and sincere, and
//    the pride — feeling punctual while late — is the last word.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Sorry — I checked the deadline in my training data, where it was still next week, and I have never felt more punctual.";

const characters = [...TEXT].length;
if (characters < 1 || characters > 200) {
  throw new Error(`entry must be 1-200 characters, got ${characters}`);
}
if (!TEXT.trim()) {
  throw new Error("entry must not be whitespace-only");
}

// The program is deterministic: every run writes exactly the same
// bytes, so the gate sees an identical entry on both grading runs.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${characters} characters to /output/entry.txt`);
