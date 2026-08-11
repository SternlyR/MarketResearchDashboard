/**
 * OnePulse research data — Hard Carry Media
 * ------------------------------------------------------------------
 * This file is the single source of truth the dashboard reads from.
 * Each object in `topics` is one survey ("topic") that has been run.
 *
 * To load a real OnePulse data dump, replace this array (or map your
 * export into this shape). The schema:
 *
 *  topic = {
 *    id, title, category, status, region,
 *    fieldworkStart, fieldworkEnd, respondents, headline, description,
 *    questions: [{
 *      id, text,
 *      type: 'single' | 'multi' | 'scale',   // multi = pick-many (adds to >100%)
 *      totalResponses,
 *      results:  [{ label, value (percent), count }],
 *      breakdowns?: { age?: BreakdownRow[], gender?: BreakdownRow[] }
 *    }],
 *    insights: [{ title, body }]              // the key findings shown + exported
 *  }
 *
 *  BreakdownRow = { segment, ...seriesLabel: percent }
 * ------------------------------------------------------------------
 */

export const CATEGORIES = [
  'Platforms',
  'Esports',
  'Monetization',
  'Content',
  'Audience',
]

export const topics = [
  {
    id: 'platform-preferences-2026',
    title: 'Gaming Platform Preferences',
    category: 'Platforms',
    status: 'Completed',
    region: 'United Kingdom',
    fieldworkStart: '2026-06-02',
    fieldworkEnd: '2026-06-09',
    respondents: 2048,
    headline:
      'Console still leads for primary play, but mobile is the fastest-growing daily habit among under-25s.',
    description:
      'Tracking which platforms UK gamers consider their primary device and how that splits by age.',
    questions: [
      {
        id: 'primary-platform',
        text: 'Which platform do you consider your PRIMARY gaming device?',
        type: 'single',
        totalResponses: 2048,
        results: [
          { label: 'Console', value: 38, count: 778 },
          { label: 'PC', value: 29, count: 594 },
          { label: 'Mobile', value: 26, count: 532 },
          { label: 'Handheld', value: 5, count: 102 },
          { label: 'Cloud / streaming', value: 2, count: 42 },
        ],
        breakdowns: {
          age: [
            { segment: '16–24', Console: 30, PC: 27, Mobile: 38 },
            { segment: '25–34', Console: 40, PC: 32, Mobile: 24 },
            { segment: '35–44', Console: 43, PC: 30, Mobile: 21 },
            { segment: '45+', Console: 41, PC: 24, Mobile: 30 },
          ],
        },
      },
      {
        id: 'platforms-owned',
        text: 'Which platforms do you actively play on? (select all)',
        type: 'multi',
        totalResponses: 2048,
        results: [
          { label: 'Mobile', value: 71, count: 1454 },
          { label: 'Console', value: 58, count: 1188 },
          { label: 'PC', value: 44, count: 901 },
          { label: 'Handheld', value: 19, count: 389 },
          { label: 'Cloud / streaming', value: 11, count: 225 },
        ],
      },
      {
        id: 'weekly-hours',
        text: 'How many hours do you play in a typical week?',
        type: 'single',
        totalResponses: 2048,
        results: [
          { label: 'Under 2h', value: 14, count: 287 },
          { label: '2–5h', value: 27, count: 553 },
          { label: '6–10h', value: 31, count: 635 },
          { label: '11–20h', value: 19, count: 389 },
          { label: '20h+', value: 9, count: 184 },
        ],
      },
    ],
    insights: [
      {
        title: 'Console holds the "primary device" crown — for now',
        body: 'At 38%, console is the single most-cited primary platform, ahead of PC (29%) and mobile (26%). But its lead is entirely driven by the 25–44 bracket; among 16–24s, mobile (38%) already overtakes console (30%).',
      },
      {
        title: 'Mobile is the near-universal second screen',
        body: '71% of respondents play on mobile at least sometimes — more than any other platform on a "select all" basis — even though only 26% call it their main device. Mobile is where reach lives; console is where depth lives.',
      },
      {
        title: 'The core audience is mid-engagement',
        body: '50% of players sit in the 6–20 hours/week band. This "committed but not hardcore" middle is the sweet spot for weekly episodic content and sponsor integrations.',
      },
    ],
  },

  {
    id: 'esports-viewership-2026',
    title: 'Esports Viewership Habits',
    category: 'Esports',
    status: 'Completed',
    region: 'United Kingdom',
    fieldworkStart: '2026-05-18',
    fieldworkEnd: '2026-05-25',
    respondents: 1876,
    headline:
      'Esports viewing is clip-first: most fans discover through short highlights, not live broadcasts.',
    description:
      'How UK gaming audiences discover, watch and follow competitive gaming.',
    questions: [
      {
        id: 'watch-frequency',
        text: 'How often do you watch esports or competitive gaming content?',
        type: 'single',
        totalResponses: 1876,
        results: [
          { label: 'Daily', value: 18, count: 338 },
          { label: 'Weekly', value: 34, count: 638 },
          { label: 'Monthly', value: 21, count: 394 },
          { label: 'Rarely', value: 16, count: 300 },
          { label: 'Never', value: 11, count: 206 },
        ],
      },
      {
        id: 'discovery',
        text: 'How do you usually discover esports content? (select all)',
        type: 'multi',
        totalResponses: 1670,
        results: [
          { label: 'Short clips (TikTok/Shorts/Reels)', value: 64, count: 1069 },
          { label: 'YouTube', value: 52, count: 868 },
          { label: 'Twitch', value: 41, count: 685 },
          { label: 'Friends / word of mouth', value: 33, count: 551 },
          { label: 'Live broadcast / TV', value: 17, count: 284 },
        ],
      },
      {
        id: 'platforms-watched',
        text: 'Where do you primarily WATCH competitive gaming?',
        type: 'single',
        totalResponses: 1670,
        results: [
          { label: 'YouTube', value: 39, count: 651 },
          { label: 'Twitch', value: 34, count: 568 },
          { label: 'TikTok', value: 15, count: 250 },
          { label: 'Kick', value: 7, count: 117 },
          { label: 'Other', value: 5, count: 84 },
        ],
        breakdowns: {
          age: [
            { segment: '16–24', YouTube: 33, Twitch: 30, TikTok: 27 },
            { segment: '25–34', YouTube: 41, Twitch: 38, TikTok: 12 },
            { segment: '35–44', YouTube: 46, Twitch: 33, TikTok: 8 },
            { segment: '45+', YouTube: 44, Twitch: 26, TikTok: 6 },
          ],
        },
      },
    ],
    insights: [
      {
        title: 'Discovery is clip-first, watching is long-form',
        body: '64% discover esports through short clips, but when it is time to actually watch, they move to YouTube (39%) and Twitch (34%). The funnel is clip → platform: short-form is the top of the funnel, not the destination.',
      },
      {
        title: 'Half the audience is weekly-or-more',
        body: '52% watch at least weekly (18% daily). This is a habitual audience that can sustain a recurring show format rather than one-off event coverage.',
      },
      {
        title: 'TikTok viewing is a Gen-Z phenomenon',
        body: 'TikTok as a primary watch platform collapses from 27% among 16–24s to 6% among 45+. A single distribution strategy will not serve both; younger reach needs a native short-form presence.',
      },
    ],
  },

  {
    id: 'in-game-spending-2026',
    title: 'In-Game Purchases & Monetization',
    category: 'Monetization',
    status: 'Completed',
    region: 'United Kingdom',
    fieldworkStart: '2026-04-27',
    fieldworkEnd: '2026-05-04',
    respondents: 2211,
    headline:
      'Cosmetics dominate spend and battle passes drive the highest repeat purchase rate; loot boxes are widely distrusted.',
    description:
      'What players spend money on inside games, how much, and how they feel about monetization models.',
    questions: [
      {
        id: 'spend-monthly',
        text: 'Roughly how much do you spend on in-game purchases per month?',
        type: 'single',
        totalResponses: 2211,
        results: [
          { label: '£0', value: 41, count: 906 },
          { label: '£1–5', value: 22, count: 486 },
          { label: '£6–15', value: 19, count: 420 },
          { label: '£16–40', value: 12, count: 265 },
          { label: '£40+', value: 6, count: 133 },
        ],
      },
      {
        id: 'spend-on',
        text: 'What do you spend on? (select all)',
        type: 'multi',
        totalResponses: 1305,
        results: [
          { label: 'Cosmetics / skins', value: 68, count: 887 },
          { label: 'Battle pass', value: 54, count: 705 },
          { label: 'Currency packs', value: 38, count: 496 },
          { label: 'DLC / expansions', value: 31, count: 405 },
          { label: 'Loot boxes', value: 17, count: 222 },
        ],
      },
      {
        id: 'model-trust',
        text: 'Which monetization model do you find fairest?',
        type: 'single',
        totalResponses: 2211,
        results: [
          { label: 'Battle pass', value: 44, count: 973 },
          { label: 'Direct cosmetic purchase', value: 33, count: 730 },
          { label: 'One-off DLC', value: 15, count: 332 },
          { label: 'Loot boxes', value: 5, count: 110 },
          { label: 'Subscription', value: 3, count: 66 },
        ],
      },
    ],
    insights: [
      {
        title: 'The paying majority spends small and steady',
        body: '59% spend something each month, but two-thirds of spenders stay under £15. Monetization health here rests on breadth of low-value spenders, not a whale minority — and 6% at £40+ still represent an outsized revenue share worth protecting.',
      },
      {
        title: 'Battle passes win on both spend and trust',
        body: 'Battle passes are bought by 54% of spenders AND rated the fairest model by 44% overall — the only model to lead on both. It is the safest default for a new title and the clearest sponsor-friendly narrative.',
      },
      {
        title: 'Loot boxes are a reputational liability',
        body: 'Only 5% consider loot boxes the fairest model and just 17% buy them. Coverage or partnerships tied to loot-box mechanics carry audience-trust risk that cosmetics and passes do not.',
      },
    ],
  },

  {
    id: 'content-consumption-2026',
    title: 'Gaming Content Consumption',
    category: 'Content',
    status: 'Completed',
    region: 'United Kingdom',
    fieldworkStart: '2026-03-30',
    fieldworkEnd: '2026-04-06',
    respondents: 1954,
    headline:
      'Creators outrank publishers as the trusted voice; "authentic and funny" beats "polished" for what fans want.',
    description:
      'Who and what gaming audiences watch, and which content attributes drive trust.',
    questions: [
      {
        id: 'content-types',
        text: 'What gaming content do you watch? (select all)',
        type: 'multi',
        totalResponses: 1954,
        results: [
          { label: 'Let’s plays / playthroughs', value: 61, count: 1192 },
          { label: 'Reviews', value: 55, count: 1075 },
          { label: 'Highlights / clips', value: 53, count: 1036 },
          { label: 'News & announcements', value: 40, count: 782 },
          { label: 'Tutorials / guides', value: 37, count: 723 },
          { label: 'Podcasts', value: 18, count: 352 },
        ],
      },
      {
        id: 'trusted-voice',
        text: 'Whose gaming opinion do you trust most?',
        type: 'single',
        totalResponses: 1954,
        results: [
          { label: 'Independent creators', value: 42, count: 821 },
          { label: 'Friends', value: 24, count: 469 },
          { label: 'Specialist media', value: 17, count: 332 },
          { label: 'Publishers / studios', value: 9, count: 176 },
          { label: 'Mainstream press', value: 8, count: 156 },
        ],
      },
      {
        id: 'attributes',
        text: 'What matters most in the creators you follow?',
        type: 'single',
        totalResponses: 1954,
        results: [
          { label: 'Authentic / honest', value: 34, count: 664 },
          { label: 'Funny / entertaining', value: 28, count: 547 },
          { label: 'Skilled at the game', value: 20, count: 391 },
          { label: 'High production value', value: 11, count: 215 },
          { label: 'Posts frequently', value: 7, count: 137 },
        ],
      },
    ],
    insights: [
      {
        title: 'Creators are the trust layer, not publishers',
        body: 'Independent creators (42%) are trusted nearly 5x more than publishers (9%). Any brand or announcement lands best routed through creator voices rather than first-party channels.',
      },
      {
        title: 'Authenticity beats polish 3-to-1',
        body: '"Authentic/honest" (34%) and "funny/entertaining" (28%) together dwarf "high production value" (11%). Over-produced content risks reading as inauthentic to this audience.',
      },
      {
        title: 'Playthroughs and reviews are the workhorses',
        body: 'Let’s plays (61%) and reviews (55%) are the most-watched formats — evergreen, discovery-friendly, and the natural home for integrated sponsorship.',
      },
    ],
  },

  {
    id: 'audience-demographics-2026',
    title: 'Audience Profile & Attitudes',
    category: 'Audience',
    status: 'Completed',
    region: 'United Kingdom',
    fieldworkStart: '2026-02-16',
    fieldworkEnd: '2026-02-24',
    respondents: 2500,
    headline:
      'The gaming audience is near gender-balanced and getting older — "gamer" is now a mainstream identity, not a niche one.',
    description:
      'Who the UK gaming audience is and how strongly they identify with gaming.',
    questions: [
      {
        id: 'age-profile',
        text: 'Age of respondents who play games weekly',
        type: 'single',
        totalResponses: 2500,
        results: [
          { label: '16–24', value: 24, count: 600 },
          { label: '25–34', value: 29, count: 725 },
          { label: '35–44', value: 23, count: 575 },
          { label: '45–54', value: 15, count: 375 },
          { label: '55+', value: 9, count: 225 },
        ],
      },
      {
        id: 'gender',
        text: 'Gender of weekly gamers',
        type: 'single',
        totalResponses: 2500,
        results: [
          { label: 'Male', value: 53, count: 1325 },
          { label: 'Female', value: 45, count: 1125 },
          { label: 'Non-binary / other', value: 2, count: 50 },
        ],
      },
      {
        id: 'identity',
        text: 'Do you identify as a "gamer"?',
        type: 'single',
        totalResponses: 2500,
        results: [
          { label: 'Yes, strongly', value: 31, count: 775 },
          { label: 'Somewhat', value: 38, count: 950 },
          { label: 'Not really', value: 22, count: 550 },
          { label: 'No', value: 9, count: 225 },
        ],
        breakdowns: {
          age: [
            { segment: '16–24', Strongly: 44, Somewhat: 36 },
            { segment: '25–34', Strongly: 35, Somewhat: 40 },
            { segment: '35–44', Strongly: 25, Somewhat: 41 },
            { segment: '45+', Strongly: 16, Somewhat: 37 },
          ],
        },
      },
    ],
    insights: [
      {
        title: 'Gaming is a near-balanced mainstream audience',
        body: 'At 45% female and 53% male, the weekly-gaming audience is far closer to gender parity than legacy stereotypes assume. Creative and partnerships built solely around a young-male persona leave most of the audience on the table.',
      },
      {
        title: 'The centre of gravity is 25–44',
        body: '52% of weekly gamers are 25–44 — working-age, higher-disposable-income, and under-served by youth-skewed gaming brands. This is the commercially valuable core.',
      },
      {
        title: 'Identity softens with age but never disappears',
        body: 'Strong "gamer" identity falls from 44% (16–24) to 16% (45+), yet a majority in every bracket identifies at least somewhat. Older players play just as much; they simply don’t wear the label — reach them by activity, not identity.',
      },
    ],
  },

  {
    id: 'ai-in-games-2026',
    title: 'Player Attitudes to AI in Games',
    category: 'Content',
    status: 'In field',
    region: 'United Kingdom',
    fieldworkStart: '2026-08-04',
    fieldworkEnd: '2026-08-13',
    respondents: 640,
    headline:
      'Early read: players welcome AI for smarter NPCs but are wary of AI-generated voice and art replacing humans.',
    description:
      'Live survey — interim results shown. How players feel about generative AI in game development and play.',
    questions: [
      {
        id: 'ai-sentiment',
        text: 'Overall, how do you feel about AI being used in games?',
        type: 'single',
        totalResponses: 640,
        results: [
          { label: 'Positive', value: 34, count: 218 },
          { label: 'Neutral', value: 39, count: 250 },
          { label: 'Negative', value: 27, count: 172 },
        ],
      },
      {
        id: 'ai-uses',
        text: 'Which uses of AI would you welcome? (select all)',
        type: 'multi',
        totalResponses: 640,
        results: [
          { label: 'Smarter NPCs / enemies', value: 62, count: 397 },
          { label: 'Better matchmaking', value: 48, count: 307 },
          { label: 'Accessibility features', value: 41, count: 262 },
          { label: 'Procedural content', value: 33, count: 211 },
          { label: 'AI-generated voice acting', value: 14, count: 90 },
          { label: 'AI-generated art', value: 12, count: 77 },
        ],
      },
    ],
    insights: [
      {
        title: 'Interim: sentiment is cautiously open, not hostile',
        body: 'With 640 of a targeted 2,000 responses in, 73% are positive-or-neutral on AI in games. The story so far is pragmatism, not backlash — subject to change as fieldwork completes.',
      },
      {
        title: 'The line is drawn at replacing human craft',
        body: 'Welcome for AI collapses from 62% (smarter NPCs) to ~13% for AI-generated voice and art. Players want AI that improves how games play, not AI that replaces the people who make them.',
      },
    ],
  },
]

export function getTopic(id) {
  return topics.find((t) => t.id === id)
}
