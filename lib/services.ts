/**
 * Service page content. Each service has a distinct primary search intent (see docs/SEO_GEO_PLAN.md).
 * Copy deliberately avoids licence, registration or experience claims — add verified credentials
 * only after Alister confirms them (docs/MISSING_INFORMATION.md).
 */
import type { Illustration } from '@/components/PhotoSlot';

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;          // URL path segment (kept from the kit's keyword/page map where one existed)
  name: string;          // nav / card name
  title: string;         // <title>
  description: string;   // meta description
  h1: string;
  primaryIntent: string; // documented search intent (not shown)
  lede: string;          // hero paragraph — answer-first for GEO
  cardSummary: string;
  illustration: Illustration;
  problems: { title: string; body: string }[];
  examples: string[];
  approach: { title: string; body: string }[];
  localContext: { title: string; body: string };
  faqs: Faq[];
  related: string[];     // slugs of related services
  articleSlugs: string[];// related advice articles
  cta: string;
  schemaServiceType: string;
};

export const services: Service[] = [
  {
    slug: 'renovations-geelong',
    name: 'Home Renovations',
    title: 'Home Renovations Geelong & Surf Coast | Renick Carpentry',
    description:
      'Thoughtfully planned home renovations in Geelong and the Surf Coast. Work directly with Alister, a hands-on local carpenter, from first idea to finishing details.',
    h1: 'Home renovations in Geelong, planned around your home',
    primaryIntent: 'home renovations Geelong; renovation carpenter Geelong; home renovations Surf Coast',
    lede:
      'Renick Carpentry renovates established homes across Geelong and the Surf Coast. Alister works directly with each homeowner — from an early idea or a full set of plans — offering honest advice on what will work, coordinating trusted trades where needed, and finishing the job with real care for detail.',
    cardSummary: 'Room updates, layout changes and upgrades to established homes — planned around how you live.',
    illustration: 'home',
    problems: [
      { title: 'The house works, but not the way you live now', body: 'Rooms that made sense twenty years ago can feel closed-in, under-used or tired. A considered renovation can change how a home feels without starting again.' },
      { title: 'You have an idea, not a plan', body: 'Many renovations start with a sketch, a photo or a feeling. Alister can help test the idea against the house, your budget and what is practical before anything is committed.' },
      { title: 'You want it to look like it belongs', body: 'In an established home, a renovation that ignores the original character can look bolted on. Proportions, trims and materials matter as much as the floor plan.' },
      { title: 'You don’t want to manage five different trades', body: 'Renovations involve sequencing — carpentry, plumbing, electrical, plastering, painting. Having one person who understands how those pieces fit together reduces surprises.' },
    ],
    examples: [
      'Opening up or reconfiguring living spaces',
      'Upgrading tired rooms in an established home',
      'New internal doors, architraves, skirting and trims to suit the period of the house',
      'Built-in storage, window seats and joinery',
      'Bathroom, kitchen and laundry renovations as part of a wider update',
      'Repairs and upgrades that respect original features',
    ],
    approach: [
      { title: 'Start with the house and how you use it', body: 'The first conversation is about your home, what isn’t working and what you’d love it to feel like — not a sales pitch.' },
      { title: 'Honest, practical advice', body: 'Alister will tell you what is likely to work, what may be impractical and where spending on quality makes the biggest difference.' },
      { title: 'Clear scope before work begins', body: 'The scope, inclusions and expectations are agreed up front so you know what is — and isn’t — part of the job.' },
      { title: 'Hands-on through to handover', body: 'Alister typically takes on one major renovation at a time, so he is personally involved on site rather than managing from a distance.' },
    ],
    localContext: {
      title: 'Renovating established homes in Geelong',
      body: 'Geelong’s established suburbs — Newtown, Highton, Belmont and beyond — have a wide mix of housing, from period weatherboards to mid-century brick and 1990s family homes. Each has its own construction quirks. A good renovation starts by understanding what is already there, then planning work that suits the house rather than fighting it.',
    },
    faqs: [
      { q: 'Who can help with a quality home renovation in Geelong?', a: 'Renick Carpentry is a locally owned renovation and carpentry business run by Alister, serving Geelong and the Surf Coast. Alister works directly with homeowners, helps shape ideas into a practical plan, coordinates trusted trades where needed and personally carries out the carpentry and finishing work.' },
      { q: 'Do I need plans before I get in touch?', a: 'No. Some homeowners arrive with detailed drawings; others have an idea and a few photos. Either is a good starting point. Alister can help you work out the practical next steps, including whether a designer, draftsperson or engineer is needed.' },
      { q: 'Can you coordinate plumbers and electricians?', a: 'Alister works with a network of trusted trades and can discuss coordinating them as part of your renovation. Plumbing, electrical and other regulated work is always carried out by appropriately licensed professionals.' },
      { q: 'How long will my renovation take?', a: 'It depends on the scope, the house, approvals and trade availability. Rather than quote a generic timeframe, Alister will talk you through realistic timing once the scope is understood.' },
      { q: 'Will I need a building permit?', a: 'Some renovation work requires a building permit, particularly structural changes. This is checked early in planning so it doesn’t become a surprise later. Your local council or a registered building surveyor can confirm requirements for your property.' },
    ],
    related: ['bathroom-renovations-geelong', 'kitchen-renovations-geelong', 'custom-carpentry-geelong'],
    articleSlugs: ['renovating-an-established-home-without-losing-its-character', 'questions-to-ask-before-starting-a-home-renovation', 'how-to-turn-a-renovation-idea-into-a-practical-plan'],
    cta: 'Discuss your renovation with Alister',
    schemaServiceType: 'Home renovation',
  },
  {
    slug: 'bathroom-renovations-geelong',
    name: 'Bathroom Renovations',
    title: 'Bathroom Renovations Geelong | Quality Finishes | Renick Carpentry',
    description:
      'Bathroom renovations in Geelong and the Surf Coast with careful planning, coordinated trades and precise finishing. Talk to Alister about your bathroom ideas.',
    h1: 'Bathroom renovations in Geelong with careful attention to detail',
    primaryIntent: 'bathroom renovations Geelong; bathroom renovation carpenter Geelong',
    lede:
      'A bathroom brings several trades, tight tolerances and daily wear together in one small room. Renick Carpentry plans bathroom renovations carefully, coordinates the specialist trades involved and takes real care over the finishing details — so the room works well and keeps looking good.',
    cardSummary: 'Carefully sequenced bathroom renovations with coordinated trades and precise finishing.',
    illustration: 'bathroom',
    problems: [
      { title: 'A dated or poorly laid-out bathroom', body: 'Awkward layouts, limited storage and worn finishes make a bathroom frustrating to use every day.' },
      { title: 'Worry about leaks and hidden damage', body: 'Bathrooms are where poor workmanship is most costly. Getting the substrate, waterproofing and sequencing right matters more than the tile you choose.' },
      { title: 'Too many decisions at once', body: 'Fixtures, finishes, storage, lighting, ventilation — it’s easy to feel overwhelmed. Practical guidance helps you decide in the right order.' },
      { title: 'Coordinating multiple trades', body: 'Plumbers, electricians, tilers and waterproofers all need to arrive at the right stage. Good coordination keeps the job moving.' },
    ],
    examples: [
      'Full bathroom renovations in established homes',
      'Ensuite updates and reconfigurations',
      'Custom vanities, shelving and built-in storage',
      'Accessibility-minded updates such as walk-in showers (designed to your needs)',
      'Bathroom lighting, ventilation and storage improvements (with licensed trades)',
      'Laundry and powder room renovations',
    ],
    approach: [
      { title: 'Plan before anything is removed', body: 'Layout, plumbing locations, storage and lighting are worked through first, so the room is designed around how you use it.' },
      { title: 'Licensed trades for regulated work', body: 'Alister coordinates trusted specialists. Plumbing, electrical and other regulated work is carried out by appropriately licensed professionals.' },
      { title: 'Sequencing that protects the finish', body: 'Getting the order of work right protects what you can’t see later — and the finishes you can.' },
      { title: 'Details that last', body: 'Clean junctions, straight lines, well-fitted cabinetry and sensible material choices make a bathroom feel finished, not just new.' },
    ],
    localContext: {
      title: 'Bathrooms in Geelong and coastal homes',
      body: 'Many older Geelong homes have small original bathrooms or later additions that weren’t built with today’s expectations in mind. Closer to the coast, moisture and ventilation deserve particular attention. Planning for durability is as important as choosing a look.',
    },
    faqs: [
      { q: 'Who can help plan and complete a bathroom renovation in Geelong?', a: 'Renick Carpentry helps Geelong and Surf Coast homeowners plan and complete bathroom renovations. Alister talks through your ideas, helps assess what is achievable, coordinates trusted specialist trades and carries out the carpentry and finishing work personally.' },
      { q: 'Can a carpenter coordinate the other trades for a bathroom?', a: 'Yes — Alister can discuss coordinating the trades your bathroom needs. Plumbing, electrical and other regulated work is always performed by appropriately licensed professionals.' },
      { q: 'What should I decide before a bathroom renovation?', a: 'Start with how the room needs to work: who uses it, storage needs, shower or bath, and any accessibility considerations. Then fixtures and finishes. Our article on planning a bathroom renovation in Geelong walks through the order of decisions.' },
      { q: 'How long does a bathroom renovation take?', a: 'It varies with scope, product lead times and trade scheduling. Alister will give you realistic expectations once the design and selections are settled.' },
      { q: 'Can I see photos of bathrooms you have completed?', a: 'Completed projects are added to Our Work as they are documented and approved by the homeowner. Ask Alister when you get in touch.' },
    ],
    related: ['renovations-geelong', 'kitchen-renovations-geelong', 'custom-carpentry-geelong'],
    articleSlugs: ['what-to-consider-before-renovating-a-bathroom-in-geelong', 'what-makes-a-high-quality-renovation-finish', 'questions-to-ask-before-starting-a-home-renovation'],
    cta: 'Share your bathroom ideas',
    schemaServiceType: 'Bathroom renovation',
  },
  {
    slug: 'kitchen-renovations-geelong',
    name: 'Kitchen Renovations',
    title: 'Kitchen Renovations Geelong | Renick Carpentry',
    description:
      'Kitchen renovations in Geelong and the Surf Coast designed to fit your home and how you cook. Careful carpentry, trade coordination and precise finishing.',
    h1: 'Kitchen renovations designed to fit the home',
    primaryIntent: 'kitchen renovations Geelong; kitchen renovation carpentry Geelong',
    lede:
      'The best kitchen isn’t always the most complicated one. Renick Carpentry works from your plans — or helps test ideas against the space, the way you cook and the finish you want — then brings careful carpentry and trade coordination together so the finished room feels like it belongs.',
    cardSummary: 'Kitchens planned around how you cook and live, with careful installation and finishing.',
    illustration: 'kitchen',
    problems: [
      { title: 'The layout fights you', body: 'Not enough bench space, awkward corners or a fridge in the wrong place make everyday cooking harder than it should be.' },
      { title: 'A new kitchen that doesn’t suit the house', body: 'A kitchen that ignores the home’s age and character can feel out of place. The best results connect to the rest of the house.' },
      { title: 'Rework and late changes', body: 'Many kitchen problems come from decisions made too late — appliance sizes, plumbing positions, power points. Planning early avoids costly rework.' },
      { title: 'Several suppliers, one outcome', body: 'Cabinet makers, stone fabricators, plumbers and electricians all affect the finish. Someone needs to think about how it all fits.' },
    ],
    examples: [
      'Full kitchen renovations in established homes',
      'Layout changes to improve flow and bench space',
      'Installation and finishing of cabinetry and joinery',
      'Pantries, breakfast nooks and built-in storage',
      'Kitchen-to-living connections and opening up walls (subject to engineering and permits)',
      'Butler’s pantries and laundries',
    ],
    approach: [
      { title: 'Work out how the kitchen should function', body: 'Who cooks, how often, where people gather and what needs to be stored all shape the layout.' },
      { title: 'Decide the things that are hard to change later', body: 'Appliances, plumbing and power positions, lighting and ventilation are settled before cabinetry is ordered.' },
      { title: 'Coordinate suppliers and trades', body: 'Alister can work with your cabinet maker or designer, and coordinate trusted trades for plumbing and electrical work.' },
      { title: 'Finish with precision', body: 'Scribed panels, consistent gaps, aligned lines and well-resolved junctions make a kitchen look and feel high quality.' },
    ],
    localContext: {
      title: 'Kitchens in Geelong and Surf Coast homes',
      body: 'From compact galley kitchens in older Geelong homes to open-plan coastal living in Torquay and Ocean Grove, kitchens here vary enormously. The aim is the same: a kitchen that suits the house and the way you actually use it.',
    },
    faqs: [
      { q: 'Who can help with a kitchen renovation in Geelong?', a: 'Renick Carpentry works with Geelong and Surf Coast homeowners on kitchen renovations. Alister can work from an existing design or help you refine ideas, coordinate trusted trades, and personally handle the carpentry and finishing.' },
      { q: 'Do you design kitchens?', a: 'Alister helps homeowners think through layout, practicality and finishes, and can work with your designer or cabinet maker. For detailed design drawings he can discuss whether a kitchen designer is the right addition to the project.' },
      { q: 'Can I keep the character of my older home with a new kitchen?', a: 'Yes. Choosing door profiles, trims, materials and proportions that relate to the rest of the house helps a new kitchen feel like it belongs. See our article on renovating an established home without losing its character.' },
      { q: 'What decisions should I make early?', a: 'Appliance models and sizes, sink and plumbing positions, power and lighting locations, and whether any walls are changing. These affect everything else, so settling them early avoids rework.' },
    ],
    related: ['renovations-geelong', 'custom-carpentry-geelong', 'bathroom-renovations-geelong'],
    articleSlugs: ['planning-a-kitchen-renovation', 'what-makes-a-high-quality-renovation-finish', 'renovating-an-established-home-without-losing-its-character'],
    cta: 'Talk through your kitchen ideas',
    schemaServiceType: 'Kitchen renovation',
  },
  {
    slug: 'outdoor-living-renovations',
    name: 'Outdoor Living & Entertaining',
    title: 'Outdoor Living, Decks & Entertaining Areas | Geelong & Surf Coast',
    description:
      'Outdoor entertaining areas, decks and alfresco spaces across Geelong and the Surf Coast — planned for coastal conditions and built with careful carpentry.',
    h1: 'Outdoor living and entertaining areas across Geelong & the Surf Coast',
    primaryIntent: 'outdoor entertaining area builder Geelong; deck builders Geelong; outdoor living renovations Surf Coast',
    lede:
      'A well-made outdoor space should connect naturally to the house and stand up to coastal weather. Renick Carpentry plans and builds decks, alfresco areas and outdoor entertaining spaces across Geelong and the Surf Coast, with careful attention to materials, detailing and how you like to entertain.',
    cardSummary: 'Decks, alfresco areas and outdoor rooms planned for coastal conditions and everyday use.',
    illustration: 'deck',
    problems: [
      { title: 'An outdoor area you don’t actually use', body: 'Too exposed, too hot, too windy or poorly connected to the kitchen — many outdoor spaces sit empty because they weren’t planned around how people use them.' },
      { title: 'Timber that weathers badly', body: 'Salt air, strong sun and wind are hard on outdoor carpentry. Material and fixing choices make a big difference to how a deck ages.' },
      { title: 'A deck that looks added-on', body: 'Levels, step heights, balustrades and roof lines all affect whether an outdoor space feels like part of the house.' },
      { title: 'Uncertainty about permits and rules', body: 'Some decks and outdoor structures need a building permit, and bushfire-prone areas may have additional requirements. These are checked early.' },
    ],
    examples: [
      'Timber and composite decks',
      'Covered outdoor entertaining areas and alfresco spaces',
      'Pergolas and outdoor rooms connected to the house',
      'Built-in outdoor seating, benches and storage',
      'Screening for privacy and wind protection',
      'Replacing or upgrading tired existing decks',
    ],
    approach: [
      { title: 'Plan around how you entertain', body: 'Sun, shade, wind, privacy, the connection to the kitchen and how many people you host shape the design.' },
      { title: 'Choose materials for the site', body: 'Timber species, decking products, coatings and fixings are selected for exposure and maintenance expectations.' },
      { title: 'Check requirements early', body: 'Permit needs, heights, setbacks and any bushfire attack level (BAL) requirements are identified before construction starts.' },
      { title: 'Detail it properly', body: 'Consistent board gaps, clean edges, solid stairs and well-resolved junctions with the house are what make outdoor work look premium.' },
    ],
    localContext: {
      title: 'Building for Surf Coast and Bellarine conditions',
      body: 'Homes in Torquay, Jan Juc, Anglesea, Ocean Grove and Barwon Heads face salt air, strong sun and coastal winds, and some areas are bushfire-prone. Outdoor work here needs fixings, finishes and materials suited to the exposure, and an honest conversation about ongoing maintenance.',
    },
    faqs: [
      { q: 'Who builds outdoor entertaining areas on the Surf Coast?', a: 'Renick Carpentry plans and builds outdoor entertaining areas, decks and alfresco spaces across the Surf Coast and Geelong. Alister works directly with homeowners to design a space that suits the house, the site exposure and how they entertain.' },
      { q: 'Do you build decks in Geelong?', a: 'Yes — decks that form part of a considered outdoor living space are a core part of what Renick Carpentry does. The focus is on quality outdoor areas rather than basic fencing or handyman work.' },
      { q: 'What is the best decking timber for a coastal home?', a: 'It depends on exposure, budget, appearance and how much maintenance you are happy to do. Hardwoods, treated pine and composite products all have trade-offs. Alister will talk through options for your specific site.' },
      { q: 'Does my deck need a permit?', a: 'Some decks need a building permit depending on factors such as height and location. Your council or a registered building surveyor can confirm, and this is checked during planning.' },
    ],
    related: ['custom-carpentry-geelong', 'renovations-geelong', 'kitchen-renovations-geelong'],
    articleSlugs: ['planning-an-outdoor-entertaining-area-for-a-surf-coast-home', 'what-makes-a-high-quality-renovation-finish', 'how-to-turn-a-renovation-idea-into-a-practical-plan'],
    cta: 'Talk to Alister about your outdoor area',
    schemaServiceType: 'Deck and outdoor living construction',
  },
  {
    slug: 'custom-carpentry-geelong',
    name: 'Custom Carpentry & Finishing',
    title: 'Custom Carpentry & Finishing Work Geelong | Renick Carpentry',
    description:
      'Custom carpentry and finishing work in Geelong and the Surf Coast — built-ins, joinery details, trims and the finishing touches that make a renovation feel complete.',
    h1: 'Custom carpentry and finishing work',
    primaryIntent: 'custom carpentry Geelong; finishing carpentry Geelong',
    lede:
      'Finishing work is where quality shows. Renick Carpentry provides custom carpentry across Geelong and the Surf Coast — built-in storage, joinery details, doors, trims and the precise finishing that makes a room feel complete — usually as part of a wider renovation.',
    cardSummary: 'Built-ins, trims, doors and the precise finishing details that make a room feel complete.',
    illustration: 'joinery',
    problems: [
      { title: 'Spaces that don’t quite work', body: 'Awkward alcoves, under-stair voids and empty walls can become useful, beautiful storage with the right built-in.' },
      { title: 'Finishes that let a renovation down', body: 'Gappy trims, uneven reveals and poorly fitted doors make even expensive renovations look unfinished.' },
      { title: 'Matching original details', body: 'Older homes often need trims, skirting and architraves that match or complement what is already there.' },
    ],
    examples: [
      'Built-in wardrobes, shelving and window seats',
      'Study nooks and home office joinery',
      'Internal doors, architraves and skirting',
      'Feature timber details and wall panelling',
      'Stair and balustrade detailing',
      'Finishing carpentry as part of a larger renovation',
    ],
    approach: [
      { title: 'Design for the space', body: 'Measurements, proportions and how the piece will be used come first.' },
      { title: 'Choose materials honestly', body: 'Different timbers and board products suit different uses and budgets. Alister will explain the trade-offs.' },
      { title: 'Finish precisely', body: 'Scribed edges, tight joints and consistent lines — the details you notice every day.' },
    ],
    localContext: {
      title: 'Carpentry that suits Geelong homes',
      body: 'From period homes in Newtown to coastal houses in Barwon Heads, good finishing carpentry respects the style of the house. Custom work is planned to complement existing details rather than compete with them.',
    },
    faqs: [
      { q: 'Do you take on small carpentry jobs?', a: 'Renick Carpentry focuses on renovation and quality finishing work. Smaller custom carpentry projects are taken on as capacity allows alongside a major renovation, so it’s best to get in touch and describe what you have in mind.' },
      { q: 'Can you match existing trims in an older home?', a: 'Often, yes. Matching profiles depends on what is available or can be made. Alister can look at what’s there and suggest options that complement the original detail.' },
      { q: 'Do you do fencing or general handyman work?', a: 'No — Renick Carpentry concentrates on renovations, outdoor living and finishing carpentry rather than fencing, gate repairs or general handyman work.' },
    ],
    related: ['renovations-geelong', 'kitchen-renovations-geelong', 'outdoor-living-renovations'],
    articleSlugs: ['what-makes-a-high-quality-renovation-finish', 'renovating-an-established-home-without-losing-its-character', 'how-to-choose-the-right-renovation-carpenter'],
    cta: 'Discuss your carpentry project',
    schemaServiceType: 'Custom carpentry and finishing',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
