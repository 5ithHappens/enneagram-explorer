/* ============================================================================
 * Enneagram Explorer — content data
 * ----------------------------------------------------------------------------
 * This file holds the copy shown in the app: the nine type descriptions
 * (TYPES) and the group/triad systems (GROUP_SYSTEMS).
 *
 * Edit this file to update copy. The main app (index.html) reads these two
 * globals at load time, so no build step is required — just save and refresh.
 *
 * Notes on the `wakeUpCall` / `warningSign` fields:
 *   - warningSign  holds the EARLY behavioural signal that the pattern is
 *                  activating. Shown under the label "Warning sign".
 *   - wakeUpCall   holds the DEEPER fear that breaks through once the pattern
 *                  has taken hold. Shown under the label "Wake-up call".
 * (Riso-Hudson use these two terms with the opposite meanings; we've flipped
 *  them so the labels match how English speakers use these phrases in daily
 *  life. Key names match the labels for clarity.)
 * ============================================================================
 */

const TYPES = {
  1: { emoji:'✅', name:'Type 1', centre:'Instinctive (Gut)',
    coreMotivation:"To do what's right, hold the line on standards, and steadily improve whatever feels out of order, starting with themselves.",
    coreFear:"Being wrong, careless, or corrupt: the kind of person whose mistakes cause real damage.",
    coreDesire:"To live with integrity: to be a person whose actions and principles align.",
    childhoodMessage:"You are good.",
    warningSign:"A growing sense that if they don't personally see to it, it won't get done right.",
    wakeUpCall:"A creeping suspicion that the very standards they've been holding so rigidly may themselves be wrong, or may be doing more harm than good.",
    lines:{stress:4, growth:7},
    growthLineExplanation:"Moving toward a healthy Seven, Ones loosen the grip, recover some play, and discover that things can still go well when they're not personally holding the line.",
    stressLineExplanation:"When holding the line and working hard stops producing the order they're reaching for, Ones take on the characteristics of an unhealthy Four, slipping into moodiness and self-consciousness as the tight self-control gives way."
  },
  2: { emoji:'🤝', name:'Type 2', centre:'Feeling (Heart)',
    coreMotivation:"To build and keep closeness by being genuinely useful: the person others come to, think of, and rely on.",
    coreFear:"Being unwanted or unloved: cared for only when they've earned it, and forgotten when they haven't.",
    coreDesire:"To be loved and genuinely wanted, not just appreciated for what they do.",
    childhoodMessage:"You are wanted.",
    warningSign:"Working the room to make sure everyone in it thinks well of them.",
    wakeUpCall:"The quiet realisation that the people they've given most to have been pulling away, not closer.",
    lines:{stress:8, growth:4},
    growthLineExplanation:"As Twos integrate toward Four, they turn some of the attention inward, noticing their own feelings and needs as real, not just as things to manage on other people's behalf.",
    stressLineExplanation:"When the care and helpfulness don't produce the closeness they're hoping for, Twos move toward an unhealthy Eight, becoming blunt and demanding about the appreciation they feel they've earned."
  },
  3: { emoji:'🏆', name:'Type 3', centre:'Feeling (Heart)',
    coreMotivation:"To succeed at what matters and to be seen doing it, becoming the person worth looking up to.",
    coreFear:"Being worthless without their achievements: only as valuable as their last result.",
    coreDesire:"To be genuinely valuable, and to have that value clearly recognised.",
    childhoodMessage:"You are loved for who you are.",
    warningSign:"Slipping from being in the role to performing it, quietly optimising how they come across.",
    wakeUpCall:"A growing sense that the image they've built isn't really them, and that if people saw behind it, there might not be much there.",
    lines:{stress:9, growth:6},
    growthLineExplanation:"Moving toward a healthy Six, Threes stop performing for the people around them and start committing to them, trading image and solo effort for genuine cooperation and loyalty.",
    stressLineExplanation:"When achievement stops producing the recognition they need, Threes take on the characteristics of an unhealthy Nine, disengaging into autopilot and going through the motions rather than feeling what's actually happening."
  },
  4: { emoji:'🎭', name:'Type 4', centre:'Feeling (Heart)',
    coreMotivation:"To find and live out their own truth, being fully and distinctively themselves rather than a version of anyone else.",
    coreFear:"Being no one in particular: having no clear identity, nothing that marks them as meaningfully themselves.",
    coreDesire:"To know who they are and to have that self matter, without having to become something else to get there.",
    childhoodMessage:"You are seen for who you are.",
    warningSign:"Reaching for the feeling rather than letting it pass, using imagination and mood to intensify what's there.",
    wakeUpCall:"The dawning fear that they've been waiting for life to begin, and may be letting the real years slip past them.",
    lines:{stress:2, growth:1},
    growthLineExplanation:"As Fours integrate toward One, they bring structure to their inner world, converting feeling into follow-through and showing up for the work even when the mood isn't there.",
    stressLineExplanation:"When being deeply themselves stops drawing people in, Fours move toward an unhealthy Two, clinging to the people they care about and becoming more demanding of their attention and reassurance."
  },
  5: { emoji:'🔍', name:'Type 5', centre:'Thinking (Head)',
    coreMotivation:"To understand things deeply and to keep enough of their own resources (time, energy, knowledge) to meet the world on their own terms.",
    coreFear:"Being overwhelmed and out of their depth: drained by demands they can't meet, with nothing of their own left.",
    coreDesire:"To be capable in their own domain, with enough understanding and room to engage the world on solid footing.",
    childhoodMessage:"You can have what you need.",
    warningSign:"Retreating into their head to work things out, and staying there long after the moment asked for their presence.",
    wakeUpCall:"The fear that they've been preparing for a life they're never going to step into, and that their place in the world may never arrive.",
    lines:{stress:7, growth:8},
    growthLineExplanation:"Moving toward a healthy Eight, Fives step out of observation into action, engaging the world directly instead of studying it from the side.",
    stressLineExplanation:"When withdrawing and preparing stops making them feel ready, Fives take on the characteristics of an unhealthy Seven, becoming scattered and restless, jumping between ideas or distractions without landing on any of them."
  },
  6: { emoji:'🔒', name:'Type 6', centre:'Thinking (Head)',
    coreMotivation:"To feel secure and prepared: to know who and what can be counted on, and to be that for the people who depend on them.",
    coreFear:"Being on their own with no support or guidance: exposed, without anyone or anything to fall back on.",
    coreDesire:"To feel secure, held by people and structures they can trust, and to trust their own judgement inside that support.",
    childhoodMessage:"You are safe.",
    warningSign:"Looking outside themselves for a sure thing, someone or something that will tell them what to do.",
    wakeUpCall:"The uneasy recognition that their own defensive reactions may be undermining the very security they've been trying to protect.",
    lines:{stress:3, growth:9},
    growthLineExplanation:"As Sixes integrate toward Nine, they find some ground underneath the anxiety, trusting the next step without needing to pre-solve every risk.",
    stressLineExplanation:"When anticipating every risk still doesn't produce the safety they're after, Sixes move toward an unhealthy Three, hustling for approval and becoming more image-conscious and competitive to shore up their standing."
  },
  7: { emoji:'🎉', name:'Type 7', centre:'Thinking (Head)',
    coreMotivation:"To stay engaged with what's interesting, possible, and alive, keeping options open and pain at a useful distance.",
    coreFear:"Being stuck in pain, boredom, or lack: trapped in an experience they can't get out of.",
    coreDesire:"To be content and satisfied, with a life full enough that nothing essential is missing.",
    childhoodMessage:"There will be enough.",
    warningSign:"A quiet pull toward somewhere more interesting than wherever they currently are.",
    wakeUpCall:"The unsettling sense that all the things they've been chasing are bringing more disappointment than satisfaction.",
    lines:{stress:1, growth:5},
    growthLineExplanation:"Moving toward a healthy Five, Sevens slow down enough to let experiences actually land, discovering that depth delivers the satisfaction that breadth has been promising.",
    stressLineExplanation:"When the pursuit of options and possibility stops delivering the satisfaction they're chasing, Sevens take on the characteristics of an unhealthy One, becoming critical and perfectionistic, venting frustration through sharpness and nitpicking."
  },
  8: { emoji:'🦁', name:'Type 8', centre:'Instinctive (Gut)',
    coreMotivation:"To stand on their own ground without being pushed around, strong enough that they and the people under their wing are safe.",
    coreFear:"Being controlled, cornered, or betrayed: at the mercy of someone who can hurt them or the people they protect.",
    coreDesire:"To stand on their own terms, free to act, and able to protect what matters to them.",
    childhoodMessage:"You will not be betrayed.",
    warningSign:"Pushing to force the outcome, treating friction as something to press harder against.",
    wakeUpCall:"The hard recognition that the very force they've been using to keep things under control has been producing the instability they were trying to prevent.",
    lines:{stress:5, growth:2},
    growthLineExplanation:"As Eights integrate toward Two, the strength softens into warmth: protection expressed as care rather than force, with a willingness to let people in.",
    stressLineExplanation:"When pushing and taking charge stops keeping them in control, Eights move toward an unhealthy Five, withdrawing into brooding and strategising, going quiet and watchful rather than confronting things head-on."
  },
  9: { emoji:'🕊️', name:'Type 9', centre:'Instinctive (Gut)',
    coreMotivation:"To keep things steady inside and around them, staying connected to the people and world they belong to without friction pulling them apart.",
    coreFear:"Being cut off from the people and world they belong to, and the drift of going along until they've lost themselves in the effort to avoid it.",
    coreDesire:"To be at peace inside and connected outside, whole rather than pulled in different directions.",
    childhoodMessage:"What you want matters as much as anyone else's.",
    warningSign:"Going along to keep the peace, even when they notice they don't really agree.",
    wakeUpCall:"The uncomfortable realisation that the things they've been avoiding aren't going away, and may be getting worse because they haven't faced them.",
    lines:{stress:6, growth:3},
    growthLineExplanation:"Moving toward a healthy Three, Nines start showing up for themselves, naming what they want and acting on it rather than going along.",
    stressLineExplanation:"When accommodating and keeping the peace stops holding things together, Nines take on the characteristics of an unhealthy Six, becoming more anxious and reactive, cycling through worries and pessimism they normally keep at bay."
  },
};

const GROUP_SYSTEMS = {
  centres: {
    label: 'Centres (Gut/Heart/Head)',
    groups: [
      { id:'gut', name:'Instinctive (Gut)', types:[8,9,1], color:'a',
        summary:'Concerned with boundaries and resistance; anger/rage is often the signal emotion.',
        perType: {
          8: 'When activated, energy moves outward: protect, push back, take charge. (Placeholder — refine wording)',
          9: 'When activated, energy can go numb or diffuse: minimise disturbance, keep things steady. (Placeholder — refine wording)',
          1: 'When activated, energy can tighten inward: hold standards, self-correct, restrain impulses. (Placeholder — refine wording)'
        }
      },
      { id:'heart', name:'Feeling (Heart)', types:[2,3,4], color:'b',
        summary:'Concerned with self-image and value; shame/self-consciousness often sits underneath.',
        perType: {
          2: 'Tracks others to secure closeness; can over-give to earn belonging. (Placeholder — refine wording)',
          3: 'Adapts to what’s rewarded; performance protects against worthlessness. (Placeholder — refine wording)',
          4: 'Seeks meaning and identity; intensity protects against feeling insignificant. (Placeholder — refine wording)'
        }
      },
      { id:'head', name:'Thinking (Head)', types:[5,6,7], color:'c',
        summary:'Concerned with security and guidance; fear/anxiety often drives strategies.',
        perType: {
          5: 'Pulls back to preserve resources and reduce overwhelm. (Placeholder — refine wording)',
          6: 'Scans for risk and support; tries to establish certainty. (Placeholder — refine wording)',
          7: 'Stays future-oriented to avoid pain; keeps options open. (Placeholder — refine wording)'
        }
      },
    ]
  },
  hornevian: {
    label: 'Hornevian (social style)',
    groups: [
      { id:'assertive', name:'Assertive', types:[3,7,8], color:'d',
        summary:'Moves against pressure by expanding the ego: taking charge, pushing forward, insisting.',
        perType: {
          3: 'Pushes toward achievement: “I’ll perform and win the goal.” (Placeholder — refine wording)',
          7: 'Pushes toward options: “I’ll stay free and keep it positive.” (Placeholder — refine wording)',
          8: 'Pushes toward control: “I’ll handle it directly.” (Placeholder — refine wording)'
        }
      },
      { id:'compliant', name:'Compliant / Dutiful', types:[1,2,6], color:'e',
        summary:'Moves toward what feels required: duty, rightness, earning belonging/support.',
        perType: {
          1: 'Earns autonomy by being correct/responsible. (Placeholder — refine wording)',
          2: 'Earns closeness by helping and being needed. (Placeholder — refine wording)',
          6: 'Earns security by doing what’s expected / covering bases. (Placeholder — refine wording)'
        }
      },
      { id:'withdrawn', name:'Withdrawn', types:[4,5,9], color:'f',
        summary:'Moves away to regulate: retreats inward, conserves energy, keeps distance from demands.',
        perType: {
          4: 'Withdraws into feeling/meaning: “I need space to feel and understand.” (Placeholder — refine wording)',
          5: 'Withdraws into thinking: “I need space to think and prepare.” (Placeholder — refine wording)',
          9: 'Withdraws into comfort: “I’ll keep things calm; I don’t want escalation.” (Placeholder — refine wording)'
        }
      }
    ]
  },
  harmonic: {
    label: 'Harmonic (coping with conflict)',
    groups: [
      { id:'positive', name:'Positive outlook', types:[2,7,9], color:'b',
        summary:'Copes by reframing or emphasising the positive; can have difficulty staying with pain and conflict.',
        perType: {
          2: 'Keeps connection by focusing on helping and goodwill. (Placeholder — refine wording)',
          7: 'Keeps mood up by scanning for what could be enjoyable or possible. (Placeholder — refine wording)',
          9: 'Keeps peace by smoothing tension and minimising disturbance. (Placeholder — refine wording)'
        }
      },
      { id:'competency', name:'Competency', types:[1,3,5], color:'a',
        summary:'Copes by getting competent and objective; feelings may be put aside to solve the problem.',
        perType: {
          1: 'Solves by standards: “Let’s do it the right way.” (Placeholder — refine wording)',
          3: 'Solves by efficiency: “Let’s execute and deliver.” (Placeholder — refine wording)',
          5: 'Solves by analysis: “Let me understand the hidden issues.” (Placeholder — refine wording)'
        }
      },
      { id:'reactive', name:'Reactive', types:[4,6,8], color:'c',
        summary:'Copes by responding strongly and needing engagement; wants a real response before moving on.',
        perType: {
          4: 'Needs emotional resonance: “Do you understand what this means and how it feels?” (Draft — review)',
          6: 'Needs reassurance and clarity: “Is this safe, and what’s the plan?” (Draft — review)',
          8: 'Needs truth and traction: “What’s actually happening, and what are we going to do?” (Draft — review)'
        }
      },
    ]
  }
};
