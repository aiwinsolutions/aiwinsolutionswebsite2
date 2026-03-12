// ========== Cohort Options ==========
const COHORTS = [
  'Associate Director',
  'Partner & Associate Director',
  'Partner & Director',
  'Project Leader',
  'Principal',
  'Partner',
  'Managing Director and Partner',
  'Senior Advisor'
];

// ========== Segment Questions (Q5–Q10) ==========
// Each option at index 0 = choice 1 (Airport Athlete)
//                 index 1 = choice 2 (Innovation Fanatic)
//                 index 2 = choice 3 (Brand Loyalist)
const SEGMENT_QUESTIONS = [
  {
    id: 'q5',
    text: 'How often are you traveling for work?',
    options: [
      'Too much \u2013 airports feel like a second home to me',
      'Depends \u2013 I\u2019m plugged into digital tools more than planes!',
      'Occasionally \u2013 mostly stable geography with local travel'
    ]
  },
  {
    id: 'q6',
    text: 'How would you describe your current client portfolio?',
    options: [
      'Many clients across different markets and industries',
      'A mix \u2013 but I\u2019m usually leading innovation-heavy work across different clients',
      'A few long-term clients that I know inside out'
    ]
  },
  {
    id: 'q7',
    text: 'What gives you the most energy at work?',
    options: [
      'New markets, new engagements, new topics!',
      'Testing new tools and changing how things are done',
      'Long transformations, working with same client over the years'
    ]
  },
  {
    id: 'q8',
    text: 'Your typical calendar',
    options: [
      'Back-to-back meetings across multiple time zones',
      'Block of focus time with internal BCG / Clients to build new things',
      'Deep working sessions with same leadership team'
    ]
  },
  {
    id: 'q9',
    text: 'When a new tool / AI solution launches, you\u2026',
    options: [
      '\u2026try it right away to see if it will make life easier',
      '\u2026were already part of the beta group!',
      '\u2026wait until somebody proves it and talks about it'
    ]
  },
  {
    id: 'q10',
    text: 'Your wardrobe philosophy\u2026',
    options: [
      'Versatile, travel-ready pieces \u2013 the fit needs to work for me, not the reverse!',
      'Modern cuts, new brands, I like to experiment with fashion!',
      'Signature look, timeless fits from the same few brands'
    ]
  }
];

// ========== Segments ==========
// Choice 1 majority → Airport Athlete
// Choice 2 majority → Innovation Fanatic
// Choice 3 majority → Brand Loyalist
const SEGMENTS = {
  'Airport Athlete': {
    icon: '&#128273;',
    description: 'You live in motion. Multiple clients, markets, time-zones, topics \u2013 and you wouldn\u2019t have it any other way. You know the best lounges in New York, Frankfurt, Dubai, Singapore\u2026and which gate has the shortest security line. You know how to land in a new city at dawn and walk into a client room by 8AM ready to go. Your fashion wardrobe? Versatile, flight-proof and pieces that survive red-eyes.',
    merchandise: 'A RECYCLED TRAVEL BAG SET!'
  },
  'Innovation Fanatic': {
    icon: '&#128273;',
    description: 'If it can be automated\u2026you already did it or are working on it. If there\u2019s a new AI tool you beta tried it weeks ago. Curious, experimental and \u201cthis is how we\u2019ve always done it\u201d is not part of your vocabulary. Your fashion wardrobe? You mix heritage with innovation, sneakers with suits and always half-step ahead on new trends.',
    merchandise: 'A HIGH-FUNCTIONING POWER BANK!'
  },
  'Brand Loyalist': {
    icon: '&#128273;',
    description: 'You don\u2019t juggle multiple clients \u2013 you build a few that last a decades. You likely know the CEO\u2019s bday, their transformation roadmap and know the organization inside out. Your fashion wardrobe? Timeless, similar fits and silhouettes, a couple of Brands.',
    merchandise: 'A PLANTER SET!'
  }
};
