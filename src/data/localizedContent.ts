import { SupportedLanguage } from './translations';

export interface LocalizedVidhiStep {
  stepNumber: string;
  title: string;
  sanskritTitle: string;
  timingWindow: string;
  summary: string;
  detailedInstructions: string[];
  sacredMantra?: {
    devanagari: string;
    transliteration: string;
    meaning: string;
  };
  culturalNote: string;
}

export interface LocalizedSamagriText {
  name: string;
  purpose: string;
}

export interface LocalizedSargiCard {
  badge: string;
  title: string;
  desc: string;
}

export interface LocalizedChhalniMoment {
  tabLabel: string;
  phase: string;
  title: string;
  desc: string;
}

export interface LocalizedWishItem {
  id: string;
  categoryKey: 'wife' | 'husband' | 'mother' | 'poetic' | 'traditional';
  category: string;
  headerLine: string;
  greetingLine: string;
  title: string;
  message: string;
  closing: string;
  signatureLine: string;
  footerLine: string;
}

export interface LocalizedFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FullLanguageContent {
  // Cities & Countdown
  cityNames: Record<string, { city: string; region: string }>;
  moonriseTargetPrefix: string;
  localTimeLabel: string;
  regionLabel: string;
  panchangEveningMuhurat: string;
  panchangPradoshWindow: string;
  panchangMoonriseSuffix: string;
  panchangChhalniArghya: string;
  panchangVratDuration: string;
  panchangSunriseToMoonrise: string;
  panchangTithiWindow: string;
  panchangBegins: string;
  panchangEnds: string;

  // Puja Vidhi
  stepPrefix: string;
  stageOfSix: string;
  ritualProcedureHeading: string;
  sacredMantraHeading: string;
  copyMantraBtn: string;
  copiedLabel: string;
  meaningLabel: string;
  kathaBoxTitle: string;
  readFullKathaBtn: string;
  hideFullKathaBtn: string;
  kathaStoryLead: string;
  kathaStoryPara1: string;
  kathaStoryPara2: string;
  kathaPrayer: string;
  culturalNoteLabel: string;
  prevStageBtn: string;
  nextStageBtn: string;
  vidhiSteps: LocalizedVidhiStep[];

  // Samagri Checklist
  checkAllBtn: string;
  copyShoppingListBtn: string;
  resetBtn: string;
  readinessProgressLabel: string;
  itemsReadySuffix: string;
  filterAll: string;
  filterPending: string;
  filterCompleted: string;
  categoryLabels: {
    'Sacred Vessels & Altar': string;
    'Puja Offerings': string;
    'Solah Shringar': string;
    'Night Moonrise Ritual': string;
  };
  essentialBadge: string;
  optionalBadge: string;
  addCustomPlaceholder: string;
  addItemBtn: string;
  noItemsMatchText: string;
  showAllSamagriBtn: string;
  samagriItems: Record<string, LocalizedSamagriText>;

  // Sargi Section
  sargiCards: [LocalizedSargiCard, LocalizedSargiCard, LocalizedSargiCard];

  // Chhalni Rituals Section
  stageWord: string;
  chhalniControlsHeading: string;
  removeChhalniBtn: string;
  placeChhalniBtn: string;
  activeInSimulatorBadge: string;
  chhalniMoments: [
    LocalizedChhalniMoment,
    LocalizedChhalniMoment,
    LocalizedChhalniMoment,
    LocalizedChhalniMoment,
  ];

  // Greeting Card Studio & Wishes
  studioSubheading: string;
  cardFormatLabel: string;
  horizontalBtn: string;
  verticalBtn: string;
  cardPaletteLabel: string;
  themeNames: {
    'crimson-zari': string;
    'ivory-pichwai': string;
    'moonlit-sandstone': string;
  };
  rowLabels: [string, string, string, string, string, string, string];
  curatedWishesHeading: string;
  curatedWishesSubheading: string;
  wishFilterTabs: {
    all: string;
    wife: string;
    husband: string;
    mother: string;
    poetic: string;
    traditional: string;
  };
  editAllRowsBtn: string;
  doneEditingBtn: string;
  saveRowsBtn: string;
  copyWishBtn: string;
  openInStudioBtn: string;
  wishesList: LocalizedWishItem[];

  // FAQ
  faqsList: LocalizedFaqItem[];

  // Footer
  footerBlessing: string;
  footerCulturalNote: string;
  footerSectionsHeading: string;
  footerControlsHeading: string;
  returnToTopBtn: string;
  footerCopyright: string;
  footerVerifiedDates: string;
}

export const FULL_LANGUAGE_CONTENT: Record<SupportedLanguage, FullLanguageContent> = {
  // ===========================================================================
  // 1. ENGLISH (en)
  // ===========================================================================
  en: {
    cityNames: {
      delhi: { city: 'New Delhi', region: 'NCR · Northern India' },
      mumbai: { city: 'Mumbai', region: 'Maharashtra · Western India' },
      jaipur: { city: 'Jaipur', region: 'Rajasthan · Royal Heritage' },
      kolkata: { city: 'Kolkata', region: 'West Bengal · Eastern India' },
      ahmedabad: { city: 'Ahmedabad', region: 'Gujarat · Western India' },
      bengaluru: { city: 'Bengaluru', region: 'Karnataka · Southern India' },
      chandigarh: { city: 'Chandigarh', region: 'Punjab & Haryana' },
      lucknow: { city: 'Lucknow', region: 'Uttar Pradesh · Awadh' },
    },
    moonriseTargetPrefix: 'Chandrodaya (Moonrise) —',
    localTimeLabel: 'Local Time',
    regionLabel: 'Region',
    panchangEveningMuhurat: 'Evening Muhurat',
    panchangPradoshWindow: 'Pradosh Katha & Aarti Window',
    panchangMoonriseSuffix: 'Moonrise',
    panchangChhalniArghya: 'Chhalni Darshan & Arghya',
    panchangVratDuration: 'Vrat Duration',
    panchangSunriseToMoonrise: 'Sunrise Sankalp to Moonrise',
    panchangTithiWindow: 'Chaturthi Tithi',
    panchangBegins: 'Begins',
    panchangEnds: 'Ends',

    stepPrefix: 'Step',
    stageOfSix: '/ 06',
    ritualProcedureHeading: 'Ritual Procedure & Observance',
    sacredMantraHeading: 'Traditional Mantra & Sankalp Verse',
    copyMantraBtn: 'Copy Mantra',
    copiedLabel: 'Copied!',
    meaningLabel: 'Meaning:',
    kathaBoxTitle: 'Traditional Karwa Chauth Vrat Katha (Queen Veeravati)',
    readFullKathaBtn: 'Read Full Vrat Katha',
    hideFullKathaBtn: 'Hide Vrat Katha',
    kathaStoryLead: 'The Sacred Legend of Queen Veeravati:',
    kathaStoryPara1:
      'In ancient Indraprastha, a devoted princess named Veeravati was the only sister among seven loving brothers. After her marriage, she observed her first Karwa Chauth Vrat at her parents’ home. Seeing their sister grow faint from thirst by evening, her brothers created an artificial glow behind a peepal tree and told her the moon had risen.',
    kathaStoryPara2:
      'Believing her brothers, Veeravati broke her fast prematurely and soon learned her husband had fallen gravely ill. Guided by Goddess Parvati (Chauth Mata), she observed the Karak Chaturthi Vrat with unwavering truth, patience, and complete ritual devotion. Touched by her steadfast faith, Chauth Mata blessed her husband with restored health and long life.',
    kathaPrayer:
      '“O Chauth Mata! Just as you protected Queen Veeravati’s marriage and family, may you bless every household with happiness, good health, and eternal love.”',
    culturalNoteLabel: 'Tradition & Health Note:',
    prevStageBtn: '← Previous Stage',
    nextStageBtn: 'Next Stage →',
    vidhiSteps: [
      {
        stepNumber: '01',
        title: 'Pre-Dawn Sargi & Vrat Sankalp',
        sanskritTitle: 'Pre-Dawn Sargi & Vrat Sankalp Vow',
        timingWindow: 'Brahma Muhurta · 04:30 – 06:00 AM',
        summary:
          'Awaken before sunrise, take a purifying bath, wear auspicious attire, partake in the Sargi platter blessed by elders, and take the formal vow (Sankalp) before sunrise.',
        detailedInstructions: [
          'Rise during Brahma Muhurta (approximately 90 minutes before sunrise) and cleanse your mind and body.',
          'Receive and partake in the traditional Sargi platter—customarily prepared or blessed by the mother-in-law—containing slow-digesting pheni, dry fruits, fresh fruits, and coconut water.',
          'Before the first ray of sunrise (Suryodaya), sit facing East or North before your home altar with water, akshat (unbroken rice), and a flower in your right palm to take the Vrat Sankalp.',
        ],
        sacredMantra: {
          devanagari: 'Mama sukha-saubhagya putra-pautradi susthira shri-praptaye karaka-chaturthi vratam-aham karishye.',
          transliteration: 'Mama sukha-saubhagya putra-pautradi susthira shri-praptaye karaka-chaturthi vratam-aham karishye.',
          meaning: 'With devotion for harmony, well-being, and enduring auspiciousness in my household, I undertake this sacred Karak Chaturthi Vrat.',
        },
        culturalNote:
          'Once sunrise occurs, the traditional Nirjala Vrat begins. Those with medical conditions or pregnancy are encouraged in Hindu dharma to adapt the fast with water, fruit, or milk.',
      },
      {
        stepNumber: '02',
        title: 'Altar Setup & Gaura-Shiva Sthapana',
        sanskritTitle: 'Sacred Puja Altar & Karwa Establishment',
        timingWindow: 'Afternoon · 04:00 – 05:15 PM',
        summary:
          'Prepare a clean wooden chowki draped in crimson or maroon cloth, place an image of Goddess Parvati (Gaura Mata) and the Shiva Parivar, and prepare the sacred Karwa vessel.',
        detailedInstructions: [
          'Cleanse the northeastern (Ishan Kon) or eastern corner of the prayer room and sprinkle sacred Gangajal.',
          'Spread a clean crimson silk or cotton cloth over a low wooden chowki and draw an auspicious Swastika using roli and rice flour.',
          'Place portraits or clay idols of Goddess Parvati (Chauth Mata), Lord Shiva, Lord Kartikeya, and Lord Ganesha.',
          'Tie sacred red Mauli thread around the neck of the terracotta or brass Karwa pot, draw Swastika symbols with roli, fill it with clean water, and place its lid topped with wheat grains and sugar.',
        ],
        culturalNote:
          'The terracotta Karwa symbolizes Mother Earth, fertility, and the vessel of abundance holding the waters of life.',
      },
      {
        stepNumber: '03',
        title: 'Solah Shringar & Baya Platter',
        sanskritTitle: 'Bridal Adornment & Baya Platter Preparation',
        timingWindow: 'Twilight · 05:00 – 05:35 PM',
        summary:
          'Adorn yourself in bridal crimson, maroon, or gold traditional attire with auspicious ornaments, and arrange the Baya platter of sweets, mathri, and shringar for your mother-in-law.',
        detailedInstructions: [
          'Wear traditional festive attire—often wedding silk, Banarasi saree, or lehenga—along with symbols of marital auspiciousness such as Mehendi, Bindi, Sindoor, Mangalsutra, and glass bangles.',
          'Prepare the Baya (Bayana) thali containing salted and sweet mathri, dry fruits, seasonal fruits, and a token of respect for the mother-in-law.',
          'Keep your personal Puja Thali ready with roli, chawal, sindoor, an earthen diya fuelled with pure cow ghee, incense, marigold flowers, and sweets.',
        ],
        culturalNote:
          'Solah Shringar celebrates feminine grace, vitality, and the sacred energy of Goddess Parvati.',
      },
      {
        stepNumber: '04',
        title: 'Pradosh Puja & Vrat Katha',
        sanskritTitle: 'Evening Pradosh Puja & Vrat Katha Recitation',
        timingWindow: 'Evening Muhurat · 05:38 – 06:56 PM IST',
        summary:
          'Invoke Lord Ganesha and Goddess Parvati during the evening Pradosh Muhurat, hold 13 grains of wheat in your palm, listen to the Karwa Chauth Vrat Katha, and perform Aarti.',
        detailedInstructions: [
          'Begin by invoking Lord Ganesha (Vighnaharta) with turmeric, durva grass, and sweets so the ritual proceeds peacefully.',
          'Offer roli, akshat, sindoor, mehendi, flowers, and naivedya to Chauth Mata (Goddess Parvati) and Lord Shiva.',
          'Hold 13 grains of wheat or unbroken rice in your right hand while listening attentively to the traditional Karwa Chauth Vrat Katha.',
          'Tie a few of the blessed wheat grains in the corner of your saree pallu or dupatta and drop the remaining grains into the water-filled Karwa.',
        ],
        sacredMantra: {
          devanagari: 'Om Shivayai Namah · Om Namah Shivaya · Om Shanmukhaya Namah · Om Somaya Namah.',
          transliteration: 'Om Shivayai Namah · Om Namah Shivaya · Om Shanmukhaya Namah · Om Somaya Namah.',
          meaning: 'Salutations to Goddess Parvati, Lord Shiva, Lord Kartikeya, and Chandra Dev (the Moon God).',
        },
        culturalNote:
          'After the Katha and Aarti, present the Baya platter to your mother-in-law and seek her heartfelt blessings.',
      },
      {
        stepNumber: '05',
        title: 'Chandrodaya & Chhalni Ritual',
        sanskritTitle: 'Moonrise Sighting, Chhalni Sieve Ritual & Arghya',
        timingWindow: 'Upon Moonrise · ~08:17 PM IST',
        summary:
          'When the moon rises in the night sky, place a lit diya inside the ornate Chhalni sieve, behold Chandra Dev through the mesh, offer sacred water (Arghya), and view your spouse through the same sieve.',
        detailedInstructions: [
          'Step onto a balcony, terrace, or courtyard with a clear view of the eastern sky carrying your Puja Thali, water-filled Karwa, and Chhalni.',
          'Place a lit earthen diya inside the Chhalni and gaze at the rising Moon through the fine sieve mesh.',
          'Offer Arghya by slowly pouring water from the Karwa towards the Moon while reciting prayers to Chandra Dev.',
          'Immediately turn the illuminated Chhalni towards your spouse and behold their face through the sieve, then apply a tilak of roli and akshat on their forehead.',
        ],
        sacredMantra: {
          devanagari: 'Dehi saubhagyam-arogyam dehi me paramam sukham, rupam dehi jayam dehi yasho dehi dvisho jahi.',
          transliteration: 'Dehi saubhagyam-arogyam dehi me paramam sukham, rupam dehi jayam dehi yasho dehi dvisho jahi.',
          meaning: 'Grant us auspiciousness, good health, and deep peace; bless our household with grace, harmony, and noble character.',
        },
        culturalNote:
          'Viewing the moon through the hundreds of tiny apertures of the Chhalni symbolizes filtering away negative thoughts and multiplying blessings.',
      },
      {
        stepNumber: '06',
        title: 'Vrat Parana & Family Feast',
        sanskritTitle: 'Breaking the Fast (Parana) & Sattvic Feast',
        timingWindow: 'After Arghya · ~08:30 PM IST',
        summary:
          'Conclude the sacred fast by taking the first sip of water and a morsel of sweet offered by your spouse, touch the feet of elders for blessings, and share a warm Sattvic meal together.',
        detailedInstructions: [
          'Your spouse offers you a sip of water from a brass or silver tumbler and a small bite of homemade sweet.',
          'Take a few minutes to hydrate gently before eating a full meal so your digestive system settles comfortably.',
          'Enjoy a freshly prepared Sattvic festive dinner with family.',
        ],
        culturalNote:
          'Many couples today observe the fast together in mutual partnership, breaking their fast simultaneously after the Chhalni ritual.',
      },
    ],

    checkAllBtn: 'Check All',
    copyShoppingListBtn: 'Copy List',
    resetBtn: 'Reset',
    readinessProgressLabel: 'Puja Thali Readiness Progress',
    itemsReadySuffix: 'items ready',
    filterAll: 'All',
    filterPending: 'Pending',
    filterCompleted: 'Completed',
    categoryLabels: {
      'Sacred Vessels & Altar': 'Sacred Vessels & Altar',
      'Puja Offerings': 'Puja Offerings',
      'Solah Shringar': 'Solah Shringar',
      'Night Moonrise Ritual': 'Moonrise Ritual',
    },
    essentialBadge: 'Essential',
    optionalBadge: 'Traditional Optional',
    addCustomPlaceholder: 'Add custom family puja item (e.g., Silver Coin, Gangajal, Haldi)...',
    addItemBtn: 'Add Item',
    noItemsMatchText: 'No items match this filter.',
    showAllSamagriBtn: 'Show All Samagri Items',
    samagriItems: {
      'karwa-pot': {
        name: 'Terracotta or Brass Karwa Pot with Lid',
        purpose: 'Filled with water to offer sacred Arghya to Chandra Dev at moonrise.',
      },
      chhalni: {
        name: 'Ornate Brass or Steel Chhalni (Sieve)',
        purpose: 'Used with a lit diya inside to view the rising Moon and subsequently your spouse.',
      },
      'puja-thali': {
        name: 'Decorated Brass Puja Thali',
        purpose: 'Holds the diya, roli, akshat, sindoor, sweets, and flowers during Katha and Aarti.',
      },
      'gaura-idol': {
        name: 'Portrait or Clay Idol of Chauth Mata & Shiva Parivar',
        purpose: 'Central deities worshipped during the evening Pradosh Puja Muhurat.',
      },
      'diya-ghee': {
        name: 'Earthen/Brass Diyas, Cotton Wicks & Pure Cow Ghee',
        purpose: 'Used for evening Aarti and placed inside the Chhalni during Chand Darshan.',
      },
      'katha-book': {
        name: 'Karwa Chauth Vrat Katha Book',
        purpose: 'Read aloud or listened to during the evening Puja Muhurat.',
      },
      'roli-akshat': {
        name: 'Roli (Kumkum) & Unbroken Rice Grains (Akshat)',
        purpose: 'Applied as auspicious tilak to deities, the Karwa vessel, and your spouse.',
      },
      'wheat-grains': {
        name: '13 Whole Wheat Grains (Gehun ke Daane)',
        purpose: 'Held in the right palm while listening to the Vrat Katha and placed on the Karwa lid.',
      },
      'mauli-thread': {
        name: 'Sacred Red Kalava / Mauli Thread',
        purpose: 'Tied around the neck of the Karwa pot and worn on the wrist for blessings.',
      },
      'seekh-reed': {
        name: 'Sacred Grass Stem (Kans / Seekh)',
        purpose: 'Traditionally placed behind the Karwa pot symbolizing protective strength.',
      },
      'marigold-flowers': {
        name: 'Fresh Marigold & Crimson Rose Blossoms',
        purpose: 'Offered to the altar deities and used to decorate the Puja Chowki.',
      },
      'sweets-mathri': {
        name: 'Homemade Sweets (Peda/Barfi) & Baya Mathri',
        purpose: 'Offered as Naivedya Bhog, included in the Baya platter, and used for Parana.',
      },
      'sindoor-bindi': {
        name: 'Sindoor, Red Bindi & Alta / Mahawar',
        purpose: 'Offered to Goddess Parvati as Suhag Pitari and worn by the fasting devotee.',
      },
      'mehendi-bangles': {
        name: 'Henna (Mehendi) & Crimson/Gold Glass Bangles',
        purpose: 'Applied the evening prior and worn as traditional symbols of festive joy.',
      },
      'red-chunri': {
        name: 'Auspicious Red/Maroon Chunri with Zari Border',
        purpose: 'Draped over the head during Katha recitation and Chand Darshan.',
      },
      'water-tumbler': {
        name: 'Silver or Brass Glass of Clean Drinking Water',
        purpose: 'Used by your spouse to offer the first sip of water when breaking the fast.',
      },
    },

    sargiCards: [
      {
        badge: '01 · Sustained Energy',
        title: 'Saffron Pheni & Dry Fruits',
        desc: 'Roasted vermicelli (Pheni) cooked in warm saffron-cardamom milk along with soaked almonds, walnuts, pistachios, and figs provides steady, slow-release energy throughout the day.',
      },
      {
        badge: '02 · Natural Hydration',
        title: 'Coconut Water & Fresh Fruits',
        desc: 'Pomegranate, banana, apple slices, and tender coconut water replenish electrolytes before sunrise. Avoid overly salty, fried, or caffeinated foods during Sargi to prevent thirst.',
      },
      {
        badge: '03 · Family Blessings',
        title: 'Shringar & Evening Baya',
        desc: 'The Sargi thali includes auspicious red bangles, sindoor, and blessings from the mother-in-law. In the evening, the daughter-in-law offers the Baya platter of mathri, sweets, and gifts.',
      },
    ],

    stageWord: 'Stage',
    chhalniControlsHeading: 'Interactive Chhalni Controls',
    removeChhalniBtn: 'Remove Chhalni',
    placeChhalniBtn: 'View Through Chhalni',
    activeInSimulatorBadge: '● Active',
    chhalniMoments: [
      {
        tabLabel: '01 · Diya',
        phase: 'Moment 01 · Lighting the Chhalni Diya',
        title: 'Uniting Inner Light with Lunar Calmness',
        desc: 'When the Moon rises above the horizon, light a pure ghee earthen diya on your Puja Thali, place it carefully inside the brass Chhalni, and drape the auspicious maroon chunri.',
      },
      {
        tabLabel: '02 · Moon',
        phase: 'Moment 02 · Chhalni Chand Darshan',
        title: 'Filtering Discord & Multiplying Blessings',
        desc: 'Raise the Chhalni to eye level and behold Chandra Dev through the fine mesh. Its hundreds of tiny apertures symbolize filtering away negativity and multiplying peaceful blessings.',
      },
      {
        tabLabel: '03 · Arghya',
        phase: 'Moment 03 · Offering Sacred Arghya',
        title: 'Pouring Water from the Terracotta Karwa',
        desc: 'Lower the Chhalni onto the thali and gently pour water (Arghya) from the clay Karwa pot toward the Moon while praying for household peace, good health, and harmony.',
      },
      {
        tabLabel: '04 · Parana',
        phase: 'Moment 04 · Spouse Darshan & Parana',
        title: 'First Sip of Water & Sweet Morsel',
        desc: 'Lift the Chhalni once more with the lit diya inside to behold your spouse’s face. Apply tilak on their forehead and break your fast with water and sweet offered by their hand.',
      },
    ],

    studioSubheading:
      'Edit all 7 lines in the input boxes on the right (or tap any line on the card), then Download, Copy, or Share below.',
    cardFormatLabel: 'Card Format:',
    horizontalBtn: 'Horizontal',
    verticalBtn: 'Vertical',
    cardPaletteLabel: 'Card Color Theme:',
    themeNames: {
      'crimson-zari': 'Crimson & Zari Gold',
      'ivory-pichwai': 'Sacred Ivory & Gold',
      'moonlit-sandstone': 'Moonlit Palace Maroon',
    },
    rowLabels: [
      'Line 1 · Top Header Text',
      'Line 2 · Salutation & Name',
      'Line 3 · Card Title / Headline',
      'Line 4 · Main Blessing Message',
      'Line 5 · Closing Blessing Line',
      'Line 6 · Sender / Signature',
      'Line 7 · Bottom Footer Line',
    ],
    curatedWishesHeading: 'Curated Karwa Chauth Wishes (Edit Any Card Line)',
    curatedWishesSubheading:
      'Edit the Category, Title, Message, and Closing line of any card below or load it directly into the Card Studio.',
    wishFilterTabs: {
      all: 'All',
      wife: 'For Wife',
      husband: 'For Husband',
      mother: 'For Mother-in-Law',
      poetic: 'Poetic & Traditional',
      traditional: 'Festive Blessings',
    },
    editAllRowsBtn: 'Edit All Lines',
    doneEditingBtn: 'Done Editing',
    saveRowsBtn: 'Save Changes',
    copyWishBtn: 'Copy Wish',
    openInStudioBtn: 'Open in Card Studio',
    wishesList: [
      {
        id: 'wish-1',
        categoryKey: 'wife',
        category: 'For Wife',
        headerLine: 'Sacred Festival of Love & Togetherness',
        greetingLine: 'My Beloved Wife,',
        title: 'The Light & Soul of Our Home',
        message:
          'As the full moon illuminates your chhalni tonight, I am deeply grateful for every smile, every quiet prayer, and the warmth you bring into our home.',
        closing: 'Happy Karwa Chauth, my love.',
        signatureLine: 'With Eternal Devotion — Your Loving Husband',
        footerLine: 'Shubh Karwa Chauth · Kartik Chaturthi',
      },
      {
        id: 'wish-2',
        categoryKey: 'wife',
        category: 'For Wife',
        headerLine: 'Sacred Bond of Mutual Devotion',
        greetingLine: 'Dearest Wife, My Forever Companion,',
        title: 'Walking Beside You in Love & Grace',
        message:
          'Today I fast alongside you to honor the strength, patience, and love you share with me every day. May Goddess Parvati and Lord Shiva bless our journey together.',
        closing: 'Wishing you a blessed and joyful Karwa Chauth.',
        signatureLine: 'Forever by Your Side — Your Husband',
        footerLine: 'Blessed Karwa Chauth · Eternal Companionship',
      },
      {
        id: 'wish-3',
        categoryKey: 'husband',
        category: 'For Husband',
        headerLine: 'Sacred Vrat of Eternal Companionship',
        greetingLine: 'My Dearest Husband,',
        title: 'My Forever Strength & Soulmate',
        message:
          'From the quiet pre-dawn lamp of Sargi till the first glimpse of the moon tonight, every prayer in my heart is for your good health, peace, and our lifelong bond.',
        closing: 'Happy Karwa Chauth, my love.',
        signatureLine: 'With All My Love — Your Devoted Wife',
        footerLine: 'Shubh Karwa Chauth · Chandrodaya Blessings',
      },
      {
        id: 'wish-4',
        categoryKey: 'husband',
        category: 'For Husband',
        headerLine: 'Moonlit Prayers for Your Long Life',
        greetingLine: 'My Loving Husband, My Pride,',
        title: 'Every Prayer of My Heart Is Yours',
        message:
          'Beholding the rising moon and then your smiling face through the chhalni fills my soul with gratitude. May Chauth Mata bless you with endless joy, success, and longevity.',
        closing: 'Forever grateful for your love — Happy Karwa Chauth!',
        signatureLine: 'Forever Yours — Your Loving Wife',
        footerLine: 'Sacred Karwa Chauth · Lifelong Togetherness',
      },
      {
        id: 'wish-5',
        categoryKey: 'mother',
        category: 'For Mother-in-Law',
        headerLine: 'Sacred Sargi & Elder Blessings',
        greetingLine: 'Respected & Loving Maa,',
        title: 'Heartfelt Gratitude for Your Sargi & Blessings',
        message:
          'Dearest Maa, thank you for the love wrapped in every detail of the Sargi thali and for guiding our home with such warmth. Seeking your blessings today and always.',
        closing: 'Charan Sparsh & Happy Karwa Chauth, Maa.',
        signatureLine: 'With Respect & Affection — Your Daughter-in-Law',
        footerLine: 'Shubh Karwa Chauth · Family Blessings',
      },
      {
        id: 'wish-6',
        categoryKey: 'mother',
        category: 'For Mother-in-Law',
        headerLine: 'Honoring Our Family Tradition & Grace',
        greetingLine: 'Dearest Mother-in-Law,',
        title: 'Your Blessings Are Our Greatest Strength',
        message:
          'Your wisdom, affection, and traditions light up every festival in our home. May Chauth Mata bless you with wonderful health, peace, and happiness always.',
        closing: 'Warmest Pranam & Shubh Karwa Chauth, Maa.',
        signatureLine: 'With Heartfelt Gratitude — Your Bahu & Family',
        footerLine: 'Auspicious Karwa Chauth · Reverence & Love',
      },
      {
        id: 'wish-7',
        categoryKey: 'poetic',
        category: 'Poetic & Traditional',
        headerLine: 'Sacred Moonrise & Earthen Diya Glow',
        greetingLine: 'Sacred Night of the Autumn Moon,',
        title: 'Radiant Diyas & Timeless Devotion',
        message:
          'May the sacred flame of the Karwa Chauth diya dispel every shadow, may Chandra Dev bring serenity to your heart, and may Chauth Mata bless your home with harmony.',
        closing: 'Shubh Karwa Chauth & Moonlit Serenity.',
        signatureLine: 'With Poetic Warmth & Sacred Prayers',
        footerLine: 'Kartik Krishna Chaturthi · Sacred Moonrise',
      },
      {
        id: 'wish-8',
        categoryKey: 'poetic',
        category: 'Poetic & Traditional',
        headerLine: 'Silver Moonlight & Crimson Sindoor',
        greetingLine: 'Silver Moonlight & Golden Flame,',
        title: 'A Celebration of Faith & Eternal Love',
        message:
          'Like the golden flame steady inside the chhalni and the silver nectar of the autumn moon, may love, trust, and grace illuminate every season of life.',
        closing: 'Wishing a radiant and poetic Karwa Chauth.',
        signatureLine: 'Sent with Timeless Festive Reverence',
        footerLine: 'Shubh Karwa Chauth · Light & Harmony',
      },
      {
        id: 'wish-9',
        categoryKey: 'traditional',
        category: 'Festive Blessings',
        headerLine: 'Auspicious Karwa Chauth Greetings',
        greetingLine: 'Warmest Karwa Chauth Wishes,',
        title: 'Peace, Joy & Endless Togetherness',
        message:
          'May the full moon of Kartik Chaturthi fill your life with peace, happiness, and sweetness. May the glow of the diya and your bond of love shine forever.',
        closing: 'Warmest wishes on Karwa Chauth!',
        signatureLine: 'With Best Wishes & Festive Joy',
        footerLine: 'Happy Karwa Chauth · Joy & Prosperity',
      },
      {
        id: 'wish-10',
        categoryKey: 'traditional',
        category: 'Festive Blessings',
        headerLine: 'Blessings of Lord Shiva & Goddess Parvati',
        greetingLine: 'Auspicious Karak Chaturthi Greetings,',
        title: 'Good Health, Harmony & Sacred Blessings',
        message:
          'May Goddess Parvati and Lord Shiva shower your household with good health, prosperity, and unwavering togetherness on this sacred festival of Karwa Chauth.',
        closing: 'Shubh Karwa Chauth & Heartfelt Blessings!',
        signatureLine: 'With Auspicious Blessings & Warm Regards',
        footerLine: 'Shubh Karwa Chauth · Sacred Blessings',
      },
    ],

    faqsList: [
      {
        id: 'faq-date',
        question: 'When is Karwa Chauth observed in 2026 and 2027 according to the Indian Panchang?',
        answer:
          'Karwa Chauth (Karak Chaturthi) is observed on the Krishna Paksha Chaturthi of the Hindu lunar month of Kartik. According to verified Drik Panchang calculations for India (New Delhi IST), Karwa Chauth 2026 falls on Thursday, October 29, 2026 (Puja Muhurat: 05:38 PM – 06:56 PM IST; Moonrise: ~08:17 PM IST). In 2027, Karwa Chauth falls on Monday, October 18, 2027 (Puja Muhurat: 05:46 PM – 07:02 PM IST; Moonrise: ~08:24 PM IST).',
      },
      {
        id: 'faq-cloudy-moon',
        question: 'What is the traditional practice if the Moon is hidden behind heavy clouds or fog?',
        answer:
          'If dense cloud cover or weather prevents visible Moon sighting well past the verified astronomical Chandrodaya (moonrise) time for your city, traditional family elders and pandits advise facing the direction of the risen moon, visualizing Chandra Dev, or viewing the silver crowning crescent moon on an idol/portrait of Lord Shiva (Chandra-Mouli) before offering Arghya and concluding the fast.',
      },
      {
        id: 'faq-health',
        question: 'Can the Nirjala (waterless) fast be adapted for pregnancy, nursing, or medical conditions?',
        answer:
          'Yes. Hindu scriptures and Dharmashastras consistently emphasize that protecting health (Shariram Adyam Khalu Dharma Sadhanam) takes precedence over physical austerity. Expectant or nursing mothers, elders, and individuals taking medication should consult their physician and observe a Phalahar Vrat with regular hydration, coconut water, milk, fruits, and nuts.',
      },
      {
        id: 'faq-sargi-meaning',
        question: 'What if a devotee lives away from her mother-in-law and cannot receive Sargi in person?',
        answer:
          'When living in a different city or country, devotees traditionally receive the blessings of their mother-in-law over a call the evening before and prepare the pre-dawn Sargi platter at home using her symbolic gift or family recipe. The spiritual essence of Sargi lies in familial affection, gratitude, and pre-dawn nourishment.',
      },
      {
        id: 'faq-chhalni',
        question: 'Why do devotees view the Moon and their spouse through a Chhalni (sieve) with a lit diya?',
        answer:
          'In folk and Puranic tradition, the fine mesh of the Chhalni softens the direct glare of the Moon while dividing its silver beam into hundreds of radiant points—symbolizing the filtering out of ego and discord. Placing a lit diya inside represents the inner flame of devotion, uniting lunar calmness with household harmony.',
      },
      {
        id: 'faq-couples-fasting',
        question: 'Can husbands or partners also keep the Karwa Chauth fast together?',
        answer:
          'Absolutely. Across contemporary Indian households, many husbands and partners voluntarily observe the Karwa Chauth fast alongside their wives as an expression of mutual love, empathy, and shared companionship, breaking their fast together after the evening Moonrise Arghya.',
      },
    ],

    footerBlessing:
      'May the silver radiance of the Kartik Chaturthi moon and the sacred warmth of the earthen diya fill your household with mutual devotion, serenity, and lifelong companionship.',
    footerCulturalNote:
      'Cultural Respect Note: All rituals and Panchang timings are presented for cultural and devotional reference. Regional and family traditions vary across India; always prioritize personal health.',
    footerSectionsHeading: 'Sacred Sections',
    footerControlsHeading: 'Interactive Controls',
    returnToTopBtn: '↑ Return to Top of Page',
    footerCopyright: 'Shubh Karwa Chauth · Crafted with reverence for Indian festive heritage',
    footerVerifiedDates: 'Verified Panchang Dates: Oct 29, 2026 · Oct 18, 2027 · Oct 7, 2028',
  },

  // ===========================================================================
  // 2. BENGALI (bn - বাংলা)
  // ===========================================================================
  bn: {
    cityNames: {
      delhi: { city: 'নয়াদিল্লি', region: 'উত্তর ভারত (NCR)' },
      mumbai: { city: 'মুম্বাই', region: 'মহারাষ্ট্র · পশ্চিম ভারত' },
      jaipur: { city: 'জয়পুর', region: 'রাজস্থান' },
      kolkata: { city: 'কলকাতা', region: 'পশ্চিমবঙ্গ · পূর্ব ভারত' },
      ahmedabad: { city: 'আহমেদাবাদ', region: 'গুজরাট · পশ্চিম ভারত' },
      bengaluru: { city: 'বেঙ্গালুরু', region: 'কর্ণাটক · দক্ষিণ ভারত' },
      chandigarh: { city: 'চণ্ডীগড়', region: 'পাঞ্জাব ও হরিয়ানা' },
      lucknow: { city: 'লখনউ', region: 'উত্তর প্রদেশ · অবধ' },
    },
    moonriseTargetPrefix: 'চন্দ্রোদয়ের সময় —',
    localTimeLabel: 'স্থানীয় সময়',
    regionLabel: 'অঞ্চল',
    panchangEveningMuhurat: 'সন্ধ্যার পূজা মুহূর্ত',
    panchangPradoshWindow: 'প্রদোষ ব্রতকথা ও আরতির সময়',
    panchangMoonriseSuffix: 'চন্দ্রোদয়',
    panchangChhalniArghya: 'চালুনি দর্শন ও চন্দ্রার্ঘ্য',
    panchangVratDuration: 'ব্রত উপবাসের সময়কাল',
    panchangSunriseToMoonrise: 'সূর্যোদয় সংকল্প থেকে চন্দ্রোদয় পর্যন্ত',
    panchangTithiWindow: 'চতুর্থী তিথি সময়কাল',
    panchangBegins: 'শুরু',
    panchangEnds: 'শেষ',

    stepPrefix: 'ধাপ',
    stageOfSix: '/ ০৬',
    ritualProcedureHeading: 'পূজা পদ্ধতি ও আচরণবিধি',
    sacredMantraHeading: 'পবিত্র মন্ত্র ও সংকল্প শ্লোক',
    copyMantraBtn: 'মন্ত্র কপি করুন',
    copiedLabel: 'কপি হয়েছে!',
    meaningLabel: 'অর্থ:',
    kathaBoxTitle: 'ঐতিহ্যবাহী করওয়া চৌথ ব্রতকথা (রানী বীরাবতীর কথা)',
    readFullKathaBtn: 'সম্পূর্ণ ব্রতকথা পড়ুন',
    hideFullKathaBtn: 'ব্রতকথা লুকান',
    kathaStoryLead: 'রানী বীরাবতীর পবিত্র ব্রতকথা:',
    kathaStoryPara1:
      'প্রাচীনকালে ইন্দ্রপ্রস্থে সাত ভাইয়ের একমাত্র আদরের বোন ছিলেন রাজকুমারী বীরাবতী। বিবাহের পর পিতার গৃহে তিনি প্রথম করওয়া চৌথের নির্জলা ব্রত পালন করেন। সন্ধ্যায় তৃষ্ণায় কাতর বোনকে দেখে ভাইয়েরা অশ্বত্থ গাছের আড়ালে প্রদীপ ও আয়না দিয়ে কৃত্রিম চাঁদের আলো তৈরি করে বোনকে ব্রত ভাঙতে বলেন।',
    kathaStoryPara2:
      'ভাইদের কথায় বিশ্বাস করে বীরাবতী সময়ের আগেই আহার গ্রহণ করেন এবং পরক্ষণেই তাঁর স্বামী গুরুতর অসুস্থ হয়ে পড়েন। এরপর দেবী পার্বতী (চৌথ মাতা)-র আশীর্বাদে ও নির্দেশনায় বীরাবতী পূর্ণ শ্রদ্ধা, সত্য ও নিষ্ঠার সাথে পুনরায় করক চতুর্থী ব্রত পালন করেন এবং তাঁর অটুট ভক্তিতে স্বামীর সুস্বাস্থ্য ও দীর্ঘায়ু ফিরে আসে।',
    kathaPrayer:
      '“হে চৌথ মাতা! যেমন আপনি রানী বীরাবতীর সংসার ও সৌভাগ্য রক্ষা করেছিলেন, তেমনই সকলের পরিবারে সুখ, সুস্বাস্থ্য ও অটুট ভালোবাসা বজায় রাখুন।”',
    culturalNoteLabel: 'ঐতিহ্য ও স্বাস্থ্য নির্দেশিকা:',
    prevStageBtn: '← আগের ধাপ',
    nextStageBtn: 'পরের ধাপ →',
    vidhiSteps: [
      {
        stepNumber: '০১',
        title: 'ভোরের সারগি গ্রহণ ও ব্রত সংকল্প',
        sanskritTitle: 'প্রাতঃকাল সারগি ও ব্রত সংকল্প',
        timingWindow: 'ব্রাহ্ম মুহূর্ত · ভোর ০৪:৩০ – ০৬:০০',
        summary:
          'সূর্যোদয়ের পূর্বে ঘুম থেকে উঠে স্নান সেরে শুভ্র বা মঙ্গল পোশাক পরিধান করুন, গুরুজনদের আশীর্বাদসহ সারগি গ্রহণ করুন এবং সূর্যোদয়ের আগে ব্রতের সংকল্প নিন।',
        detailedInstructions: [
          'ব্রাহ্ম মুহূর্তে (সূর্যোদয়ের প্রায় দেড় ঘণ্টা আগে) ঘুম থেকে উঠে স্নান সেরে মন ও শরীর পবিত্র করুন।',
          'শাশুড়ি মা বা গুরুজনদের আশীর্বাদস্বরূপ প্রদত্ত সারগি থালি (ফেনি/সেমাই, ড্রাই ফ্রুটস, তাজা ফল ও ডাবের জল) গ্রহণ করুন।',
          'সূর্যোদয়ের পূর্বে পূর্ব বা উত্তর দিকে মুখ করে ডান হাতে জল, অক্ষত (আতপ চাল) ও ফুল নিয়ে করওয়া চৌথ ব্রতের সংকল্প পাঠ করুন।',
        ],
        sacredMantra: {
          devanagari: 'মম সুখসৌভাগ্য পুত্রপৌত্রাদি সুস্থির শ্রীপ্রাপ্তয়ে করকচতুর্থী ব্রতমহং করিষ্যে।',
          transliteration: 'মম সুখসৌভাগ্য পুত্রপৌত্রাদি সুস্থির শ্রীপ্রাপ্তয়ে করকচতুর্থী ব্রতমহং করিষ্যে।',
          meaning: 'আমার পরিবারের সুখ, সৌভাগ্য, সুস্বাস্থ্য ও চিরস্থায়ী মঙ্গলের কামনায় আমি এই পবিত্র করক চতুর্থী ব্রত পালন করছি।',
        },
        culturalNote:
          'সূর্যোদয়ের পর নির্জলা ব্রত শুরু হয়। তবে গর্ভাবস্থা বা শারীরিক অসুস্থতায় ফল, দুধ ও জল গ্রহণ করে ব্রত পালন করা শাস্ত্রসম্মত।',
      },
      {
        stepNumber: '০২',
        title: 'পূজার বেদী প্রস্তুতি ও গৌরী-শিব স্থাপন',
        sanskritTitle: 'পূজা চৌকি ও করক স্থাপন',
        timingWindow: 'বিকেল · ০৪:০০ – ০৫:১৫',
        summary:
          'কাঠের জলচৌকিতে লাল বা মেরুন বস্ত্র বিছিয়ে দেবী পার্বতী (চৌথ মাতা) ও শিব পরিবারের ছবি বা মূর্তি স্থাপন করুন এবং মাটির বা পিতলের কারওয়া কলস প্রস্তুত করুন।',
        detailedInstructions: [
          'পূজা ঘরের ঈশান কোণ বা পূর্ব দিক পরিষ্কার করে গঙ্গাজল ছিটিয়ে পবিত্র করুন।',
          'জলচৌকিতে লাল কাপড় বিছিয়ে সিঁদুর বা চালের গুঁড়ো দিয়ে আলপনা ও স্বস্তিক চিহ্ন আঁকুন।',
          'দেবী পার্বতী, মহাদেব, কার্তিক ও গণেশের প্রতিমা বা চিত্র স্থাপন করুন।',
          'মাটির বা পিতলের কারওয়া কলসের গলায় লাল মৌলি সুতো বেঁধে স্বস্তিক আঁকুন, ভেতরে পরিষ্কার জল ভরুন এবং ঢাকনার ওপর গম ও চিনি রাখুন।',
        ],
        culturalNote:
          'মাটির কারওয়া কলস ধরিত্রী মাতা, সমৃদ্ধি এবং জীবনদায়ী পবিত্র জলের প্রতীক।',
      },
      {
        stepNumber: '০৩',
        title: 'ষোলো শৃঙ্গার ও বায়না প্রস্তুতি',
        sanskritTitle: 'ষোলো শৃঙ্গার ও বায়না থালি সাজানো',
        timingWindow: 'গোধূলির প্রাক্কালে · বিকেল ০৫:০০ – ০৫:৩৫',
        summary:
          'লাল, মেরুন বা সোনালি বেনারসি শাড়ি ও অলংকারে ষোলো শৃঙ্গার সম্পন্ন করুন এবং শাশুড়ি মায়ের জন্য মিষ্টি, মঠরি ও উপহারের বায়না থালি সাজিয়ে নিন।',
        detailedInstructions: [
          'উৎসবের ঐতিহ্যবাহী পোশাক (বেনারসি শাড়ি বা লেহেঙ্গা) এবং মেহেন্দি, টিপ, সিঁদুর, মঙ্গলসূত্র ও চুড়ি পরিধান করুন।',
          'শাশুড়ি মায়ের সম্মানে মিষ্টি, নোনতা মঠরি, ড্রাই ফ্রুটস ও শৃঙ্গার সামগ্রী দিয়ে বায়না থালি প্রস্তুত করুন।',
          'নিজের পূজার থালিতে রোলি, অক্ষত, সিঁদুর, খাঁটি ঘিয়ের মাটির প্রদীপ, ধূপ, গাঁদা ফুল ও মিষ্টি সাজিয়ে রাখুন।',
        ],
        culturalNote:
          'ষোলো শৃঙ্গার নারীশক্তি, সৌন্দর্য এবং দেবী পার্বতীর মঙ্গলময় শক্তির প্রতীক।',
      },
      {
        stepNumber: '০৪',
        title: 'প্রদোষ পূজা মুহূর্ত ও ব্রতকথা শ্রবণ',
        sanskritTitle: 'সান্ধ্য পূজা ও ব্রতকথা শ্রবণ',
        timingWindow: 'সন্ধ্যা মুহূর্ত · ০৫:৩৮ – ০৬:৫৬',
        summary:
          'সন্ধ্যার প্রদোষ মুহূর্তে গণেশ ও চৌথ মাতার পূজা করুন, ডান হাতে ১৩টি গমের দানা নিয়ে ব্রতকথা শুনুন এবং আরতি সম্পন্ন করুন।',
        detailedInstructions: [
          'প্রথমে বিঘ্নহর্তা গণেশকে হলুদ, দূর্বা ও মিষ্টি অর্পণ করে পূজা শুরু করুন।',
          'চৌথ মাতা (দেবী পার্বতী) ও মহাদেবকে রোলি, অক্ষত, সিঁদুর, মেহেন্দি, ফুল ও নৈবেদ্য অর্পণ করুন।',
          'ডান হাতে ১৩টি গম বা আতপ চালের দানা নিয়ে মনোযোগ সহকারে করওয়া চৌথের ব্রতকথা শুনুন বা পাঠ করুন।',
          'কথা শেষে কয়েকটি গমের দানা আঁচলে বেঁধে রাখুন এবং বাকি দানা জলের কারওয়া কলসে রেখে দিন।',
        ],
        sacredMantra: {
          devanagari: 'ওঁ শিবায়ৈ নমঃ · ওঁ নমঃ শিবায় · ওঁ ষাণ্মুখায় নমঃ · ওঁ সোমায় নমঃ।',
          transliteration: 'ওঁ শিবায়ৈ নমঃ · ওঁ নমঃ শিবায় · ওঁ ষাণ্মুখায় নমঃ · ওঁ সোমায় নমঃ।',
          meaning: 'দেবী পার্বতী, ভগবান শিব, কার্তিকেয় এবং চন্দ্র দেবকে জানাই সশ্রদ্ধ প্রণাম।',
        },
        culturalNote:
          'ব্রতকথা ও আরতির পর শাশুড়ি মায়ের হাতে বায়না থালি তুলে দিয়ে তাঁর চরণ স্পর্শ করে আশীর্বাদ নিন।',
      },
      {
        stepNumber: '০৫',
        title: 'চন্দ্রোদয় দর্শন, চালুনি বিধি ও চন্দ্রার্ঘ্য',
        sanskritTitle: 'চন্দ্রোদয় দর্শন, চালুনি বিধি ও অর্ঘ্য',
        timingWindow: 'চন্দ্রোদয়ের পর · রাত ~০৮:১৭',
        summary:
          'আকাশে চাঁদ উঠলে চালুনির ভেতর প্রজ্জ্বলিত ঘিয়ের প্রদীপ রেখে চাঁদ দেখুন, কারওয়া থেকে জল ঢেলে চন্দ্রার্ঘ্য দিন এবং একই চালুনির ভেতর দিয়ে জীবনসঙ্গীর মুখ দর্শন করুন।',
        detailedInstructions: [
          'পূজার থালি, জলের কারওয়া কলস ও চালুনি নিয়ে ছাদে বা বারান্দায় যান।',
          'চালুনির ভেতর জ্বলন্ত মাটির প্রদীপ রেখে সূক্ষ্ম জালের মধ্য দিয়ে পূর্ণিমার মতো উজ্জ্বল চতুর্থীর চাঁদ দর্শন করুন।',
          'কারওয়া কলস থেকে ধীরে ধীরে জল ঢেলে চন্দ্র দেবকে অর্ঘ্য অর্পণ করুন এবং পরিবারের শান্তির জন্য প্রার্থনা করুন।',
          'এরপর প্রদীপসহ চালুনির ভেতর দিয়ে স্বামীর মুখ দর্শন করুন এবং তাঁর কপালে রোলি-অক্ষতের তিলক পরিয়ে দিন।',
        ],
        sacredMantra: {
          devanagari: 'দেহি সৌভাগ্যমারোগ্যং দেহি মে পরমং সুখম্। রূপং দেহি জয়ং দেহি যশো দেহি দ্বিষো জহি॥',
          transliteration: 'দেহি সৌভাগ্যমারোগ্যং দেহি মে পরমং সুখম্। রূপং দেহি জয়ং দেহি যশো দেহি দ্বিষো জহি॥',
          meaning: 'আমাদের সৌভাগ্য, সুস্বাস্থ্য ও পরম শান্তি দান করুন; আমাদের গৃহকে সম্প্রীতি ও কল্যাণে পূর্ণ করুন।',
        },
        culturalNote:
          'চালুনির শত শত ছিদ্রের মধ্য দিয়ে চাঁদ দেখা সকল নেতিবাচকতা দূর করে আশীর্বাদকে শতগুণে বৃদ্ধি করার প্রতীক।',
      },
      {
        stepNumber: '০৬',
        title: 'ব্রত পারণ ও পারিবারিক সাত্ত্বিক আহার',
        sanskritTitle: 'ব্রত পারণ ও সাত্ত্বিক ভোজন',
        timingWindow: 'চন্দ্রার্ঘ্যের অব্যবহিত পরে',
        summary:
          'জীবনসঙ্গীর হাত থেকে প্রথম এক চুমুক জল ও মিষ্টি গ্রহণ করে ব্রত ভঙ্গ (পারণ) করুন, গুরুজনদের আশীর্বাদ নিন এবং পরিবারের সকলের সাথে সাত্ত্বিক আহার গ্রহণ করুন।',
        detailedInstructions: [
          'স্বামী পিতল বা রুপোর গ্লাসে জল এবং মিষ্টি খাইয়ে ব্রত পারণ করান।',
          'সারাদিন উপবাসের পর প্রথমে অল্প জল ও মিষ্টি খেয়ে কিছুক্ষণ বিশ্রাম নিন।',
          'এরপর পরিবারের সকলের সাথে আনন্দসহকারে সাত্ত্বিক নৈশভোজ গ্রহণ করুন।',
        ],
        culturalNote:
          'বর্তমানে বহু দম্পতি পরস্পরের প্রতি ভালোবাসা ও শ্রদ্ধায় একসাথে এই ব্রত পালন করেন এবং একসাথেই ব্রত ভঙ্গ করেন।',
      },
    ],

    checkAllBtn: 'সব টিক দিন',
    copyShoppingListBtn: 'তালিকা কপি করুন',
    resetBtn: 'রিসেট',
    readinessProgressLabel: 'পূজার থালি প্রস্তুতির অগ্রগতি',
    itemsReadySuffix: 'টি সামগ্রী প্রস্তুত',
    filterAll: 'সব',
    filterPending: 'বাকি আছে',
    filterCompleted: 'সম্পন্ন',
    categoryLabels: {
      'Sacred Vessels & Altar': 'পবিত্র পাত্র ও বেদী',
      'Puja Offerings': 'পূজা নৈবেদ্য',
      'Solah Shringar': 'ষোলো শৃঙ্গার',
      'Night Moonrise Ritual': 'রাতের চন্দ্রোদয় বিধি',
    },
    essentialBadge: 'অত্যাবশ্যক',
    optionalBadge: 'ঐতিহ্যবাহী ঐচ্ছিক',
    addCustomPlaceholder: 'পরিবারের নিজস্ব পূজা সামগ্রী যোগ করুন (যেমন: রুপোর মুদ্রা, গঙ্গাজল, হলুদ)...',
    addItemBtn: 'যুক্ত করুন',
    noItemsMatchText: 'এই বিভাগে কোনো সামগ্রী পাওয়া যায়নি।',
    showAllSamagriBtn: 'সব সামগ্রী দেখুন',
    samagriItems: {
      'karwa-pot': {
        name: 'ঢাকনাসহ মাটির বা পিতলের কারওয়া কলস',
        purpose: 'চন্দ্রোদয়ের সময় চন্দ্র দেবকে পবিত্র জল (অর্ঘ্য) অর্পণের জন্য ব্যবহৃত হয়।',
      },
      chhalni: {
        name: 'কারুকার্যময় পিতল বা স্টিলের চালুনি',
        purpose: 'ভেতরে প্রজ্জ্বলিত প্রদীপ রেখে চাঁদ এবং স্বামীর মুখ দর্শনের জন্য ব্যবহৃত হয়।',
      },
      'puja-thali': {
        name: 'সাজানো পিতলের পূজার থালি',
        purpose: 'প্রদীপ, রোলি, অক্ষত, সিঁদুর, মিষ্টি ও ফুল সাজিয়ে আরতি করার জন্য।',
      },
      'gaura-idol': {
        name: 'চৌথ মাতা (দেবী পার্বতী) ও শিব পরিবারের ছবি বা প্রতিমা',
        purpose: 'সন্ধ্যার প্রদোষ পূজা মুহূর্তে আরাধনার প্রধান দেব-দেবী।',
      },
      'diya-ghee': {
        name: 'মাটির/পিতলের প্রদীপ, তুলোর সলতে ও খাঁটি গাওয়া ঘি',
        purpose: 'সন্ধ্যার আরতি এবং চালুনির ভেতর রেখে চন্দ্র দর্শনের জন্য।',
      },
      'katha-book': {
        name: 'করওয়া চৌথ ব্রতকথা পুস্তক',
        purpose: 'সন্ধ্যার পূজার সময় পাঠ বা শ্রবণ করার জন্য।',
      },
      'roli-akshat': {
        name: 'রোলি (কুমকুম) ও অক্ষত (আতপ চাল)',
        purpose: 'দেব-দেবী, কারওয়া কলস এবং স্বামীর কপালে মঙ্গল তিলক পরানোর জন্য।',
      },
      'wheat-grains': {
        name: '১৩টি আস্ত গমের দানা',
        purpose: 'ব্রতকথা শোনার সময় ডান হাতে ধরে রাখার এবং কারওয়ার ঢাকনায় রাখার জন্য।',
      },
      'mauli-thread': {
        name: 'পবিত্র লাল মৌলি / কালাভা সুতো',
        purpose: 'কারওয়া কলসের গলায় এবং হাতে রক্ষা সূত্র হিসেবে বাঁধার জন্য।',
      },
      'seekh-reed': {
        name: 'কাশ বা খড়ের পবিত্র কাঠি',
        purpose: 'ঐতিহ্যবাহী রীতি অনুযায়ী কারওয়া কলসের সাথে রাখার জন্য।',
      },
      'marigold-flowers': {
        name: 'তাজা গাঁদা ও লাল গোলাপ ফুল',
        purpose: 'পূজার বেদী সাজানো এবং দেব-দেবীকে অর্পণের জন্য।',
      },
      'sweets-mathri': {
        name: 'ঘরের তৈরি মিষ্টি (পেঁড়া/বরফি) ও বায়নার মঠরি',
        purpose: 'নৈবেদ্য ভোগ, শাশুড়ি মায়ের বায়না এবং ব্রত পারণের জন্য।',
      },
      'sindoor-bindi': {
        name: 'সিঁদুর, লাল টিপ ও আলতা',
        purpose: 'দেবী পার্বতীকে অর্পণ এবং ব্রতকারিণীর ষোলো শৃঙ্গারের জন্য।',
      },
      'mehendi-bangles': {
        name: 'মেহেন্দি ও লাল-সোনালি কাঁচের চুড়ি',
        purpose: 'উৎসবের আনন্দ ও সৌভাগ্যের প্রতীক হিসেবে পরিধানের জন্য।',
      },
      'red-chunri': {
        name: 'জরি পাড়ের লাল বা মেরুন ওড়না (চুনরি)',
        purpose: 'ব্রতকথা শ্রবণ এবং চাঁদ দেখার সময় মাথায় দেওয়ার জন্য।',
      },
      'water-tumbler': {
        name: 'রুপো বা পিতলের গ্লাসে পরিষ্কার পানীয় জল',
        purpose: 'চন্দ্রার্ঘ্যের পর স্বামীর হাত থেকে প্রথম জল পান করে ব্রত ভঙ্গের জন্য।',
      },
    },

    sargiCards: [
      {
        badge: '০১ · সারাদিনের শক্তি',
        title: 'জাফরানি ফেনি ও ড্রাই ফ্রুটস',
        desc: 'গরম জাফরান-এলাচ দুধে তৈরি ভাজা সেমাই (ফেনি) এবং ভেজানো কাঠবাদাম, আখরোট, পেস্তা ও ডুমুর সারাদিন শরীরে ধীরে ধীরে শক্তি জোগায় এবং ক্লান্তি দূর করে।',
      },
      {
        badge: '০২ · জলের ভারসাম্য ও সতেজতা',
        title: 'ডাবের জল ও তাজা ফলমূল',
        desc: 'বেদানা, কলা, আপেল এবং ডাবের জল সূর্যোদয়ের আগে শরীরে প্রাকৃতিক ইলেকট্রোলাইট ও পটাশিয়াম বজায় রাখে। সারগিতে অতিরিক্ত লবণাক্ত, তেলেভাজা বা চা-কফি এড়িয়ে চলুন।',
      },
      {
        badge: '০৩ · পারিবারিক স্নেহ ও সম্মান',
        title: 'শৃঙ্গার ও সন্ধ্যার বায়না',
        desc: 'সারগি থালিতে শাশুড়ি মায়ের দেওয়া লাল চুড়ি, সিঁদুর ও আশীর্বাদী বস্ত্র থাকে। সন্ধ্যায় পুত্রবধূ মিষ্টি, মঠরি ও উপহারের ‘বায়না’ থালি দিয়ে গুরুজনদের সম্মান জানান।',
      },
    ],

    stageWord: 'পর্যায়',
    chhalniControlsHeading: 'ইন্টারঅ্যাক্টিভ চালুনি নিয়ন্ত্রণ',
    removeChhalniBtn: 'চালুনি সরিয়ে দেখুন',
    placeChhalniBtn: 'চালুনির ভেতর দিয়ে দেখুন',
    activeInSimulatorBadge: 'সিমুলেটরে সক্রিয়',
    chhalniMoments: [
      {
        tabLabel: '০১ · প্রদীপ',
        phase: 'মুহূর্ত ০১ · চালুনির প্রদীপ প্রজ্জ্বলন',
        title: 'ভক্তির আলোর সাথে চন্দ্রের স্নিগ্ধতার মিলন',
        desc: 'আকাশে চাঁদ উঠলে পূজার থালিতে খাঁটি ঘিয়ের মাটির প্রদীপ জ্বালিয়ে পিতলের চালুনির ভেতরে সাবধানে রাখুন এবং মাথায় মঙ্গল লাল চুনরি দিন।',
      },
      {
        tabLabel: '০২ · চাঁদ দেখা',
        phase: 'মুহূর্ত ০২ · চালুনি দিয়ে চন্দ্র দর্শন',
        title: 'নেতিবাচকতা দূর করে আশীর্বাদ বৃদ্ধি',
        desc: 'চালুনিটি চোখের সামনে তুলে তার সূক্ষ্ম জালের মধ্য দিয়ে চন্দ্র দেবকে দর্শন করুন। চালুনির শত শত ছিদ্র চাঁদের স্নিগ্ধ আলোকে শতগুণে শুভ্র করে তোলে।',
      },
      {
        tabLabel: '০৩ · চন্দ্রার্ঘ্য',
        phase: 'মুহূর্ত ০৩ · পবিত্র জল অর্ঘ্য অর্পণ',
        title: 'মাটির কারওয়া কলস থেকে চন্দ্রার্ঘ্য',
        desc: 'চালুনিটি থালিতে রেখে মাটির কারওয়া কলসের নল দিয়ে ধীরে ধীরে চাঁদের দিকে জল ঢেলে অর্ঘ্য দিন এবং পরিবারের সুখ ও শান্তির জন্য প্রার্থনা করুন।',
      },
      {
        tabLabel: '০৪ · পারণ',
        phase: 'মুহূর্ত ০৪ · জীবনসঙ্গী দর্শন ও ব্রত পারণ',
        title: 'প্রথম জলের চুমুক ও মিষ্টিমুখ',
        desc: 'প্রজ্জ্বলিত প্রদীপসহ চালুনিটি আবার তুলে স্বামীর মুখ দর্শন করুন। তাঁর কপালে তিলক পরিয়ে আরতি করুন এবং তাঁর হাত থেকে জল ও মিষ্টি খেয়ে ব্রত ভঙ্গ করুন।',
      },
    ],

    studioSubheading:
      'ডানদিকের ৭টি বক্সে কার্ডের প্রতিটি লাইন নিজের মতো পরিবর্তন করুন, তারপর একদম নিচে ডাউনলোড, কপি বা শেয়ার করুন।',
    cardFormatLabel: 'কার্ডের আকার:',
    horizontalBtn: 'আড়াআড়ি',
    verticalBtn: 'লম্বালম্বি',
    cardPaletteLabel: 'কার্ডের রঙের থিম:',
    themeNames: {
      'crimson-zari': 'রাজকীয় মেরুন ও জরি গোল্ড',
      'ivory-pichwai': 'পবিত্র আইভরি ও পিছুওয়াই গোল্ড',
      'moonlit-sandstone': 'চন্দ্রালোকিত স্যান্ডস্টোন ও অ্যাম্বার',
    },
    rowLabels: [
      'লাইন ১ · উপরের হেডার টেক্সট',
      'লাইন ২ · সম্বোধন ও প্রিয়জনের নাম',
      'লাইন ৩ · কার্ডের শিরোনাম',
      'লাইন ৪ · মূল শুভেচ্ছা বার্তা',
      'লাইন ৫ · সমাপনী শুভেচ্ছা লাইন',
      'লাইন ৬ · প্রেরকের নাম / স্বাক্ষর',
      'লাইন ৭ · নিচের তিথি বা ফুটার টেক্সট',
    ],
    curatedWishesHeading: 'বাছাইকৃত করওয়া চৌথের শুভেচ্ছা (যেকোনো কার্ডের সব লাইন এডিট করুন)',
    curatedWishesSubheading:
      'নিচের যেকোনো কার্ডের ক্যাটাগরি, শিরোনাম, বার্তা ও সমাপনী লাইন সরাসরি পরিবর্তন করতে পারেন অথবা কার্ড স্টুডিওতে লোড করতে পারেন।',
    wishFilterTabs: {
      all: 'সব',
      wife: 'স্ত্রীর জন্য',
      husband: 'স্বামীর জন্য',
      mother: 'শাশুড়ি মায়ের জন্য',
      poetic: 'কাব্যিক ও ঐতিহ্যবাহী',
      traditional: 'মঙ্গল আশীর্বাদ',
    },
    editAllRowsBtn: 'সব লাইন এডিট করুন',
    doneEditingBtn: 'এডিট সম্পন্ন',
    saveRowsBtn: 'সেভ করুন',
    copyWishBtn: 'শুভেচ্ছা কপি করুন',
    openInStudioBtn: 'কার্ড স্টুডিওতে খুলুন',
    wishesList: [
      {
        id: 'wish-1',
        categoryKey: 'wife',
        category: 'স্ত্রীর জন্য',
        headerLine: 'ভালোবাসা ও অটুট বন্ধনের পবিত্র উৎসব',
        greetingLine: 'প্রিয়তমা স্ত্রী ও অর্ধাঙ্গিনী,',
        title: 'আমাদের ঘরের আলো ও প্রাণের স্পন্দন',
        message:
          'আজকের এই পবিত্র রাতে প্রদীপের আলো ও চাঁদের স্নিগ্ধ কিরণ যখন তোমার চালুনির সোনালি জালে ঝলমল করছে, আমাদের সংসারকে ভালোবাসা ও মমতায় ভরিয়ে রাখার জন্য তোমাকে জানাই অন্তরের কৃতজ্ঞতা।',
        closing: 'শুভ করওয়া চৌথ, আমার ভালোবাসা।',
        signatureLine: 'চিরন্তন ভালোবাসায় — তোমার স্বামী',
        footerLine: 'শুভ করওয়া চৌথ · কার্তিক চতুর্থী',
      },
      {
        id: 'wish-2',
        categoryKey: 'wife',
        category: 'স্ত্রীর জন্য',
        headerLine: 'সহমর্মিতা ও পবিত্র প্রেমের বন্ধন',
        greetingLine: 'প্রিয়তমা জীবনসঙ্গিনী,',
        title: 'ভালোবাসা ও বিশ্বাসে চিরদিনের পথচলা',
        message:
          'আজ আমিও তোমার সাথে এই ব্রত পালন করছি—তোমার ধৈর্য, শক্তি ও ভালোবাসার প্রতি সম্মান জানাতে। দেবী পার্বতী ও মহাদেব আমাদের পথচলা চিরকল্যাণময় করুন।',
        closing: 'করওয়া চৌথের অফুরন্ত ভালোবাসা ও শুভেচ্ছা।',
        signatureLine: 'চিরদিন তোমার পাশে — তোমার জীবনসঙ্গী',
        footerLine: 'মঙ্গলময় করওয়া চৌথ · চিরন্তন সাথ',
      },
      {
        id: 'wish-3',
        categoryKey: 'husband',
        category: 'স্বামীর জন্য',
        headerLine: 'আজন্ম ভালোবাসা ও মঙ্গল কামনার ব্রত',
        greetingLine: 'প্রিয়তম স্বামী ও প্রাণের মানুষ,',
        title: 'আমার শক্তির আশ্রয় ও চিরদিনের সাথী',
        message:
          'ভোরের সারগির প্রদীপ থেকে শুরু করে রাতের প্রথম চাঁদের আলো পর্যন্ত আমার হৃদয়ের প্রতিটি প্রার্থনা তোমার সুস্বাস্থ্য, মানসিক শান্তি এবং আমাদের আজীবন বন্ধনের জন্য।',
        closing: 'শুভ করওয়া চৌথ, আমার প্রিয়তম।',
        signatureLine: 'অফুরন্ত ভালোবাসায় — তোমার স্ত্রী',
        footerLine: 'শুভ করওয়া চৌথ · চন্দ্রোদয়ের আশীর্বাদ',
      },
      {
        id: 'wish-4',
        categoryKey: 'husband',
        category: 'স্বামীর জন্য',
        headerLine: 'তোমার দীর্ঘায়ু ও সুস্বাস্থ্যের প্রার্থনা',
        greetingLine: 'প্রিয়তম জীবনসঙ্গী, আমার গর্ব,',
        title: 'হৃদয়ের প্রতিটি প্রার্থনা কেবল তোমারই জন্য',
        message:
          'চালুনির জালের মধ্য দিয়ে পূর্ণ চাঁদ ও তোমার হাসিমুখ দেখার মুহূর্তটি আমার জীবনের শ্রেষ্ঠ আশীর্বাদ। চৌথ মাতা তোমাকে সর্বদা সুস্থ, সুখী ও সাফল্যমণ্ডিত রাখুন।',
        closing: 'প্রতিটি জন্মে তোমারই সাথ চাই — শুভ করওয়া চৌথ!',
        signatureLine: 'চিরকাল তোমারই — তোমার অর্ধাঙ্গিনী',
        footerLine: 'পবিত্র করওয়া চৌথ · অটুট বন্ধন',
      },
      {
        id: 'wish-5',
        categoryKey: 'mother',
        category: 'শাশুড়ি মায়ের জন্য',
        headerLine: 'পবিত্র সারগি ও গুরুজনদের আশীর্বাদ',
        greetingLine: 'পূজনীয়া ও স্নেহময়ী মা,',
        title: 'সারগির আশীর্বাদ ও অকৃত্রিম মাতৃস্নেহ',
        message:
          'প্রিয় মা, সারগির থালির প্রতিটি আয়োজনে আপনার যে স্নেহ ও আশীর্বাদ জড়িয়ে আছে তার জন্য আন্তরিক প্রণাম। আমাদের পরিবারের ওপর আপনার আশীর্বাদ চিরকাল এভাবেই থাকুক।',
        closing: 'চরণ স্পর্শ ও শুভ করওয়া চৌথ, মা।',
        signatureLine: 'শ্রদ্ধা ও ভালোবাসায় — আপনার স্নেহের বৌমা',
        footerLine: 'শুভ করওয়া চৌথ · পারিবারিক আশীর্বাদ',
      },
      {
        id: 'wish-6',
        categoryKey: 'mother',
        category: 'শাশুড়ি মায়ের জন্য',
        headerLine: 'পারিবারিক ঐতিহ্য ও মাতৃসম্মান',
        greetingLine: 'পরম শ্রদ্ধেয়া শাশুড়ি মা,',
        title: 'আপনার আশীর্বাদই আমাদের পরম শক্তি',
        message:
          'আপনার মমতা, শিক্ষা ও আদর্শ আমাদের ঘরকে প্রতিদিন আলোকিত করে রাখে। চৌথ মাতার কাছে আপনার সুস্বাস্থ্য, দীর্ঘায়ু ও পরম শান্তির প্রার্থনা করি।',
        closing: 'সশ্রদ্ধ প্রণাম ও শুভ করওয়া চৌথ, মা।',
        signatureLine: 'বিনম্র শ্রদ্ধায় — আপনার বৌমা ও পরিবার',
        footerLine: 'মঙ্গলময় করওয়া চৌথ · শ্রদ্ধা ও স্নেহ',
      },
      {
        id: 'wish-7',
        categoryKey: 'poetic',
        category: 'কাব্যিক ও ঐতিহ্যবাহী',
        headerLine: 'পবিত্র চন্দ্রোদয় ও মাটির প্রদীপের আলো',
        greetingLine: 'শরতের স্নিগ্ধ পূর্ণিমা ও মঙ্গল প্রদীপ,',
        title: 'ভক্তি, প্রেম ও পবিত্র আলোর মিলন',
        message:
          'করওয়া চৌথের প্রদীপের পবিত্র শিখা সকল অন্ধকার দূর করুক, চন্দ্র দেবের শীতলতা মনে প্রশান্তি আনুক এবং চৌথ মাতা আপনার গৃহকে সুখ ও সমৃদ্ধিতে পূর্ণ করুন।',
        closing: 'শুভ করওয়া চৌথ ও স্নিগ্ধ চন্দ্রালোকের শুভেচ্ছা।',
        signatureLine: 'কাব্যিক শুভেচ্ছা ও মঙ্গল প্রার্থনায়',
        footerLine: 'কার্তিক কৃষ্ণ চতুর্থী · পবিত্র চন্দ্রোদয়',
      },
      {
        id: 'wish-8',
        categoryKey: 'poetic',
        category: 'কাব্যিক ও ঐতিহ্যবাহী',
        headerLine: 'রুপালি চাঁদের আলো ও সিঁদুরের রাঙা ছোঁয়া',
        greetingLine: 'রুপালি চাঁদের আলো ও সিঁদুরের ছোঁয়া,',
        title: 'বিশ্বাস ও চিরন্তন ভালোবাসার উৎসব',
        message:
          'চালুনির ভেতর স্থির জ্বলন্ত প্রদীপ আর শরতের চাঁদের অমৃত কিরণের মতো আপনাদের জীবনে বিশ্বাস, প্রেম ও মাধুর্য চিরদিন অমলিন থাকুক।',
        closing: 'জ্যোতির্ময় ও আনন্দময় করওয়া চৌথের শুভেচ্ছা।',
        signatureLine: 'ঐতিহ্যবাহী উৎসবের আন্তরিক শুভেচ্ছাসহ',
        footerLine: 'শুভ করওয়া চৌথ · আলো ও সম্প্রীতি',
      },
      {
        id: 'wish-9',
        categoryKey: 'traditional',
        category: 'মঙ্গল আশীর্বাদ',
        headerLine: 'মঙ্গলময় করওয়া চৌথের পুণ্য শুভেচ্ছা',
        greetingLine: 'পবিত্র করওয়া চৌথের আন্তরিক শুভেচ্ছা,',
        title: 'সুখ, শান্তি ও অটুট পারিবারিক বন্ধন',
        message:
          'চতুর্থীর চাঁদ আপনার জীবনে সুখ, শান্তি ও মাধুর্যের আলো ছড়িয়ে দিক। মেহেন্দির রঙ, প্রদীপের শিখা এবং আপনাদের ভালোবাসার বন্ধন চিরকাল অটুট থাকুক।',
        closing: 'করওয়া চৌথের আন্তরিক শুভেচ্ছা!',
        signatureLine: 'শুভকামনা ও উৎসবের আনন্দসহ',
        footerLine: 'শুভ করওয়া চৌথ · সুখ ও সমৃদ্ধি',
      },
      {
        id: 'wish-10',
        categoryKey: 'traditional',
        category: 'মঙ্গল আশীর্বাদ',
        headerLine: 'দেবী পার্বতী ও মহাদেবের পুণ্য আশীর্বাদ',
        greetingLine: 'শুভ করক চতুর্থীর মঙ্গল অভিনন্দন,',
        title: 'সুস্বাস্থ্য, সমৃদ্ধি ও চিরকল্যাণ কামনা',
        message:
          'করওয়া চৌথের এই পুণ্য তিথিতে দেবী পার্বতী ও ভগবান শিব আপনার পরিবারকে সুস্বাস্থ্য, ঐশ্বর্য এবং অটুট সম্প্রীতির আশীর্বাদে পূর্ণ করুন।',
        closing: 'সপরিবারে শুভ করওয়া চৌথের প্রীতি ও শুভেচ্ছা!',
        signatureLine: 'মঙ্গল আশীর্বাদ ও আন্তরিক শ্রদ্ধাসহ',
        footerLine: 'শুভ করওয়া চৌথ · পবিত্র আশীর্বাদ',
      },
    ],

    faqsList: [
      {
        id: 'faq-date',
        question: 'ভারতীয় পঞ্জিকা অনুযায়ী ২০২৬ ও ২০২৭ সালে করওয়া চৌথ কবে পালিত হবে?',
        answer:
          'কার্তিক মাসের কৃষ্ণপক্ষের চতুর্থী তিথিতে করওয়া চৌথ পালিত হয়। দৃক পঞ্জিকা অনুযায়ী ২০২৬ সালে করওয়া চৌথ পালিত হবে বৃহস্পতিবার, ২৯ অক্টোবর ২০২৬ (পূজা মুহূর্ত: সন্ধ্যা ০৫:৩৮ – ০৬:৫৬ IST; দিল্লি চন্দ্রোদয়: রাত ~০৮:১৭ IST)। ২০২৭ সালে এটি পালিত হবে সোমবার, ১৮ অক্টোবর ২০২৭।',
      },
      {
        id: 'faq-cloudy-moon',
        question: 'ভারী মেঘ বা কুয়াশার কারণে আকাশে চাঁদ দেখা না গেলে কীভাবে ব্রত সম্পূর্ণ করা হয়?',
        answer:
          'যদি আপনার শহরের নির্ধারিত চন্দ্রোদয়ের সময় পার হয়ে যাওয়ার পরও মেঘের কারণে চাঁদ দেখা না যায়, তবে পঞ্জিকার চন্দ্রোদয় সময় অনুসারে পূর্ব-উত্তর দিকে মুখ করে চন্দ্র দেবকে স্মরণ করে বা ভগবান শিবের মস্তকের চন্দ্র (চন্দ্রমৌলি) দর্শন করে অর্ঘ্য প্রদান ও ব্রত পারণ করার বিধান রয়েছে।',
      },
      {
        id: 'faq-health',
        question: 'গর্ভাবস্থা বা শারীরিক অসুস্থতায় কি নির্জলা উপবাসের নিয়ম শিথিল করা যায়?',
        answer:
          'হ্যাঁ। হিন্দু শাস্ত্রে বলা হয়েছে “শরীরম্ আদ্যম্ খলু ধর্ম সাধনম্”—অর্থাৎ শরীর সুস্থ রাখাই প্রথম ধর্ম। গর্ভবতী মা, প্রসূতি এবং যাঁরা নিয়মিত ওষুধ খান তাঁরা চিকিৎসকের পরামর্শ নিয়ে ডাবের জল, দুধ, ফল ও বাদাম খেয়ে ‘ফলাহার ব্রত’ পালন করতে পারেন।',
      },
      {
        id: 'faq-sargi-meaning',
        question: 'শাশুড়ি মায়ের থেকে দূরে অন্য শহরে থাকলে সারগি বিধি কীভাবে পালন করা হয়?',
        answer:
          'অন্য শহরে বা বিদেশে থাকলে ব্রতের আগের সন্ধ্যায় ফোনে শাশুড়ি মা ও গুরুজনদের আশীর্বাদ নিয়ে ভোরবেলা নিজের ঘরেই ফেনি, ফল ও মিষ্টি দিয়ে সারগি থালি প্রস্তুত করে গ্রহণ করা হয়। সারগির মূল ভাব হলো পারিবারিক স্নেহ ও কৃতজ্ঞতা।',
      },
      {
        id: 'faq-chhalni',
        question: 'চালুনির ভেতর জ্বলন্ত প্রদীপ রেখে চাঁদ ও স্বামীর মুখ দেখার তাৎপর্য কী?',
        answer:
          'চালুনির সূক্ষ্ম জাল চাঁদের তীব্র আলোকে কোমল করে শত শত বিন্দুতে বিভক্ত করে—যা মনের অহংকার ও মনোমালিন্য দূর করে আশীর্বাদকে শতগুণে বৃদ্ধির প্রতীক। আর প্রদীপের শিখা হলো ভক্তি ও ভালোবাসার আলো।',
      },
      {
        id: 'faq-couples-fasting',
        question: 'স্বামীরাও কি স্ত্রীর সাথে করওয়া চৌথের ব্রত পালন করতে পারেন?',
        answer:
          'নিশ্চয়ই। বর্তমানে বহু স্বামী স্ত্রীর প্রতি ভালোবাসা, সহমর্মিতা ও সম অংশীদারিত্বের প্রতীক হিসেবে একসাথে উপবাস করেন এবং রাতে চন্দ্রার্ঘ্যের পর একসাথে ব্রত ভঙ্গ করেন।',
      },
    ],

    footerBlessing:
      'কার্তিক চতুর্থীর চাঁদের রুপোলি কিরণ এবং মাটির প্রদীপের পবিত্র উষ্ণতা আপনার গৃহকে পারস্পরিক শ্রদ্ধা, শান্তি ও আজীবন ভালোবাসায় ভরিয়ে তুলুক।',
    footerCulturalNote:
      'সাংস্কৃতিক সম্মাননা বার্তা: এখানে প্রদত্ত সকল পূজা বিধি ও পঞ্জিকার সময় ঐতিহ্যবাহী তথ্যের উদ্দেশ্যে উপস্থাপিত। সর্বদা নিজের সুস্বাস্থ্যকে অগ্রাধিকার দিন।',
    footerSectionsHeading: 'প্রধান বিভাগসমূহ',
    footerControlsHeading: 'ইন্টারঅ্যাক্টিভ নিয়ন্ত্রণ',
    returnToTopBtn: '↑ পেজের একদম উপরে যান',
    footerCopyright: 'শুভ করওয়া চৌথ · ভারতীয় উৎসব ও ঐতিহ্যের প্রতি শ্রদ্ধায় নির্মিত',
    footerVerifiedDates: 'প্রমাণিত পঞ্জিকা তারিখ: ২৯ অক্টোবর ২০২৬ · ১৮ অক্টোবর ২০২৭ · ৭ অক্টোবর ২০২৮',
  },

  // ===========================================================================
  // 3. HINDI (hi - हिन्दी)
  // ===========================================================================
  hi: {
    cityNames: {
      delhi: { city: 'नई दिल्ली', region: 'दिल्ली NCR · उत्तर भारत' },
      mumbai: { city: 'मुंबई', region: 'महाराष्ट्र · पश्चिम भारत' },
      jaipur: { city: 'जयपुर', region: 'राजस्थान · राजपूताना' },
      kolkata: { city: 'कोलकाता', region: 'पश्चिम बंगाल · पूर्व भारत' },
      ahmedabad: { city: 'अहमदाबाद', region: 'गुजरात · पश्चिम भारत' },
      bengaluru: { city: 'बेंगलुरु', region: 'कर्नाटक · दक्षिण भारत' },
      chandigarh: { city: 'चंडीगढ़', region: 'पंजाब एवं हरियाणा' },
      lucknow: { city: 'लखनऊ', region: 'उत्तर प्रदेश · अवध' },
    },
    moonriseTargetPrefix: 'चन्द्रोदय समय —',
    localTimeLabel: 'स्थानीय समय',
    regionLabel: 'क्षेत्र',
    panchangEveningMuhurat: 'सायंकालीन पूजा मुहूर्त',
    panchangPradoshWindow: 'प्रदोष व्रत कथा एवं आरती समय',
    panchangMoonriseSuffix: 'चन्द्रोदय',
    panchangChhalniArghya: 'छलनी दर्शन एवं चन्द्र अर्घ्य',
    panchangVratDuration: 'व्रत उपवास अवधि',
    panchangSunriseToMoonrise: 'सूर्योदय संकल्प से चन्द्रोदय तक',
    panchangTithiWindow: 'चतुर्थी तिथि समय',
    panchangBegins: 'प्रारम्भ',
    panchangEnds: 'समाप्त',

    stepPrefix: 'चरण',
    stageOfSix: '/ ०६',
    ritualProcedureHeading: 'पूजा विधि एवं नियम',
    sacredMantraHeading: 'पावन मंत्र एवं संकल्प श्लोक',
    copyMantraBtn: 'मंत्र कॉपी करें',
    copiedLabel: 'कॉपी हो गया!',
    meaningLabel: 'अर्थ:',
    kathaBoxTitle: 'पारंपरिक करवा चौथ व्रत कथा (रानी वीरावती की कथा)',
    readFullKathaBtn: 'संपूर्ण व्रत कथा पढ़ें',
    hideFullKathaBtn: 'व्रत कथा छुपाएँ',
    kathaStoryLead: 'रानी वीरावती की पावन व्रत कथा:',
    kathaStoryPara1:
      'प्राचीन काल में इन्द्रप्रस्थ नगरी में सात भाइयों की इकलौती लाड़ली बहन राजकुमारी वीरावती थीं। विवाह के पश्चात् उन्होंने मायके में अपना पहला करवा चौथ व्रत रखा। सायंकाल प्यास से व्याकुल बहन को देखकर भाइयों ने पीपल के वृक्ष की ओट में छलनी और दीपक से कृत्रिम चाँद का प्रकाश दिखाया और व्रत खोलने को कहा।',
    kathaStoryPara2:
      'भाइयों की बात मानकर वीरावती ने चंद्रोदय से पूर्व ही भोजन कर लिया, जिसके तुरंत बाद उनके पति गंभीर रूप से अस्वस्थ हो गए। तत्पश्चात माँ पार्वती (चौथ माता) के मार्गदर्शन में वीरावती ने पूर्ण सत्य, धैर्य और विधि-विधान से करक चतुर्थी व्रत किया, जिससे प्रसन्न होकर चौथ माता ने उनके पति को पुनः उत्तम स्वास्थ्य और दीर्घायु प्रदान की।',
    kathaPrayer:
      '“हे चौथ माता! जैसे आपने रानी वीरावती का सुहाग और परिवार सुरक्षित रखा, वैसे ही सबके घर-परिवार में सुख, स्वास्थ्य और प्रेम बनाए रखना।”',
    culturalNoteLabel: 'परंपरा एवं स्वास्थ्य ध्यान:',
    prevStageBtn: '← पिछला चरण',
    nextStageBtn: 'अगला चरण →',
    vidhiSteps: [
      {
        stepNumber: '०१',
        title: 'प्रातःकाल सरगी एवं पावन व्रत संकल्प',
        sanskritTitle: 'प्रातःकाल सरगी एवं व्रत संकल्प',
        timingWindow: 'ब्रह्म मुहूर्त · प्रातः ०४:३० – ०६:००',
        summary:
          'सूर्योदय से पूर्व उठकर स्नान करें, शुभ वस्त्र धारण करें, बड़ों के आशीर्वाद से सरगी ग्रहण करें और सूर्योदय से पहले व्रत का संकल्प लें।',
        detailedInstructions: [
          'ब्रह्म मुहूर्त में उठकर स्नान आदि से निवृत्त होकर मन और तन को पवित्र करें।',
          'सासू माँ द्वारा दी गई पारंपरिक सरगी (फेनी, सूखे मेवे, ताजे फल और नारियल पानी) ग्रहण करें।',
          'सूर्योदय से पूर्व मंदिर के समक्ष पूर्व या उत्तर दिशा की ओर मुख करके दाहिने हाथ में जल, अक्षत और पुष्प लेकर व्रत संकल्प लें।',
        ],
        sacredMantra: {
          devanagari: 'मम सुखसौभाग्य पुत्रपौत्रादि सुस्थिर श्रीप्राप्तये करकचतुर्थी व्रतमहं करिष्ये।',
          transliteration: 'मम सुखसौभाग्य पुत्रपौत्रादि सुस्थिर श्रीप्राप्तये करकचतुर्थी व्रतमहं करिष्ये।',
          meaning: 'अपने परिवार के सुख, सौभाग्य, उत्तम स्वास्थ्य और स्थायी समृद्धि की कामना से मैं यह करक चतुर्थी व्रत करती हूँ।',
        },
        culturalNote:
          'सूर्योदय के साथ निर्जला व्रत प्रारम्भ होता है। गर्भावस्था या स्वास्थ्य संबंधी आवश्यकता होने पर जल व फल ग्रहण कर व्रत करना धर्मसम्मत है।',
      },
      {
        stepNumber: '०२',
        title: 'पूजा चौकी एवं करक (करवा) स्थापना',
        sanskritTitle: 'पूजा चौकी एवं करक स्थापना',
        timingWindow: 'अपराह्न · ०४:०० – ०५:१५',
        summary:
          'लकड़ी की चौकी पर लाल वस्त्र बिछाकर चौथ माता (माँ पार्वती) व शिव परिवार की स्थापना करें और मिट्टी या पीतल का करवा तैयार करें।',
        detailedInstructions: [
          'पूजा स्थल के ईशान कोण को गंगाजल से शुद्ध करें।',
          'चौकी पर लाल वस्त्र बिछाकर रोली और अक्षत से अष्टदल कमल या स्वस्तिक बनाएँ।',
          'माँ पार्वती, भगवान शिव, स्वामी कार्तिकेय और श्री गणेश की प्रतिमा या चित्रपट स्थापित करें।',
          'करवे के कंठ पर मौली बाँधें, रोली से स्वस्तिक बनाएँ, उसमें स्वच्छ जल भरें और ढक्कन के ऊपर गेहूँ व शक्कर रखें।',
        ],
        culturalNote:
          'मिट्टी का करवा वसुंधरा, समृद्धि और जीवनदायी जल का पावन प्रतीक है।',
      },
      {
        stepNumber: '०३',
        title: 'सोलह श्रृंगार एवं बायना तैयारी',
        sanskritTitle: 'सोलह श्रृंगार एवं बायना तैयारी',
        timingWindow: 'संध्या पूर्व · ०५:०० – ०५:३५',
        summary:
          'लाल, मैरून या सुनहरी पारंपरिक साड़ी/लहंगे में सोलह श्रृंगार करें और सासू माँ के लिए मिठाई, मठरी व श्रृंगार का बायना थाल सजाएँ।',
        detailedInstructions: [
          'मंगलमय पारंपरिक परिधान के साथ मेहंदी, सिन्दूर, बिन्दी, मंगलसूत्र और चूड़ियाँ धारण करें।',
          'सासू माँ के सम्मान हेतु मठरी, मिठाई, सूखे मेवे और वस्त्र/श्रृंगार सामग्री से बायना की थाली तैयार करें।',
          'अपनी पूजा थाली में रोली, अक्षत, सिन्दूर, शुद्ध घी का दीपक, धूप, गेंदे के फूल और मिठाई सजाएँ।',
        ],
        culturalNote:
          'सोलह श्रृंगार नारी गरिमा, सौभाग्य और माँ पार्वती की मंगलकारी शक्ति का प्रतीक है।',
      },
      {
        stepNumber: '०४',
        title: 'प्रदोष पूजा मुहूर्त एवं व्रत कथा श्रवण',
        sanskritTitle: 'सायंकालीन पूजा एवं व्रत कथा श्रवण',
        timingWindow: 'सायंकालीन मुहूर्त · ०५:३८ – ०६:५६ IST',
        summary:
          'प्रदोष मुहूर्त में श्री गणेश और चौथ माता का पूजन करें, दाहिने हाथ में गेहूँ के १३ दाने लेकर व्रत कथा सुनें और आरती करें।',
        detailedInstructions: [
          'सर्वप्रथम विघ्नहर्ता श्री गणेश को हल्दी, दूर्वा और मोदक अर्पित करें।',
          'चौथ माता और शिव परिवार को रोली, अक्षत, सिन्दूर, मेहंदी, पुष्प और नैवेद्य अर्पित करें।',
          'दाहिने हाथ में गेहूँ के १३ दाने लेकर श्रद्धापूर्वक करवा चौथ व्रत कथा सुनें।',
          'कथा के बाद कुछ दाने पल्लू में बाँध लें और शेष दाने जल से भरे करवे में डाल दें।',
        ],
        sacredMantra: {
          devanagari: 'ॐ शिवायै नमः। ॐ नमः शिवाय। ॐ षण्मुखाय नमः। ॐ सोमाय नमः।',
          transliteration: 'ॐ शिवायै नमः · ॐ नमः शिवाय · ॐ षण्मुखाय नमः · ॐ सोमाय नमः।',
          meaning: 'माँ पार्वती, भगवान शिव, स्वामी कार्तिकेय और चन्द्र देव को कोटि-कोटि नमन।',
        },
        culturalNote:
          'कथा और आरती के पश्चात् सासू माँ को बायना भेंट कर उनका आशीर्वाद प्राप्त करें।',
      },
      {
        stepNumber: '०५',
        title: 'चन्द्रोदय दर्शन, छलनी विधि एवं अर्घ्य',
        sanskritTitle: 'चन्द्रोदय दर्शन, छलनी विधि एवं अर्घ्य',
        timingWindow: 'चन्द्रोदय समय · रात्रि ~०८:१७ IST',
        summary:
          'चाँद निकलने पर छलनी में जलता हुआ दीपक रखकर चन्द्र देव के दर्शन करें, करवे से जल अर्घ्य दें और फिर छलनी से अपने जीवनसाथी का चेहरा देखें।',
        detailedInstructions: [
          'पूजा थाली, जल से भरा करवा और छलनी लेकर छत या आँगन में जाएँ।',
          'छलनी में घी का दीपक रखकर चन्द्र देव के पावन दर्शन करें।',
          'करवे से धीरे-धीरे जल की धारा छोड़ते हुए चन्द्र देव को अर्घ्य अर्पित करें।',
          'इसके तुरंत बाद दीपक युक्त छलनी से अपने पति का मुख देखें और उनके मस्तक पर रोली-अक्षत का तिलक लगाएँ।',
        ],
        sacredMantra: {
          devanagari: 'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥',
          transliteration: 'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥',
          meaning: 'हमें सौभाग्य, उत्तम आरोग्य और परम सुख प्रदान करें तथा हमारे घर-परिवार में शांति और प्रेम बनाए रखें।',
        },
        culturalNote:
          'छलनी के सैकड़ों छिद्रों से चाँद देखना मन के दोषों को छानकर आशीर्वाद को सौ गुना करने का प्रतीक है।',
      },
      {
        stepNumber: '०६',
        title: 'व्रत पारण एवं सात्विक पारिवारिक भोजन',
        sanskritTitle: 'व्रत पारण एवं सात्विक भोजन',
        timingWindow: 'चन्द्र अर्घ्य के तुरंत पश्चात्',
        summary:
          'जीवनसाथी के हाथों जल का पहला घूँट और मिठाई ग्रहण कर व्रत खोलें (पारण करें), बड़ों का आशीर्वाद लें और परिवार के साथ सात्विक भोजन करें।',
        detailedInstructions: [
          'पति के हाथों चाँदी या पीतल के गिलास से जल और मिठाई ग्रहण कर व्रत का पारण करें।',
          'दिन भर के उपवास के बाद कुछ देर रुककर धीरे-धीरे जल व हल्का आहार लें।',
          'परिवार के साथ प्रेमपूर्वक सात्विक रात्रिभोज का आनंद लें।',
        ],
        culturalNote:
          'आजकल अनेक पति भी अपनी पत्नी के साथ प्रेम और सहभागिता में यह व्रत रखते हैं और साथ मिलकर पारण करते हैं।',
      },
    ],

    checkAllBtn: 'सभी चुनें',
    copyShoppingListBtn: 'सूची कॉपी करें',
    resetBtn: 'रीसेट',
    readinessProgressLabel: 'पूजा थाली तैयारी प्रगति',
    itemsReadySuffix: 'सामग्री तैयार',
    filterAll: 'सभी',
    filterPending: 'बाकी',
    filterCompleted: 'पूर्ण',
    categoryLabels: {
      'Sacred Vessels & Altar': 'पावन पात्र एवं चौकी',
      'Puja Offerings': 'पूजा सामग्री व भोग',
      'Solah Shringar': 'सोलह श्रृंगार',
      'Night Moonrise Ritual': 'रात्रि चन्द्रोदय पूजा',
    },
    essentialBadge: 'अनिवार्य',
    optionalBadge: 'पारंपरिक वैकल्पिक',
    addCustomPlaceholder: 'अपनी पारिवारिक पूजा सामग्री जोड़ें (जैसे: चाँदी का सिक्का, गंगाजल, हल्दी)...',
    addItemBtn: 'जोड़ें',
    noItemsMatchText: 'इस श्रेणी में कोई सामग्री नहीं मिली।',
    showAllSamagriBtn: 'सभी सामग्री देखें',
    samagriItems: {
      'karwa-pot': {
        name: 'मिट्टी या पीतल का करवा (ढक्कन सहित)',
        purpose: 'चन्द्रोदय के समय चन्द्र देव को पवित्र जल अर्घ्य देने के लिए।',
      },
      chhalni: {
        name: 'सजी हुई पूजा की छलनी',
        purpose: 'दीपक रखकर उगते हुए चाँद और जीवनसाथी के दर्शन करने के लिए।',
      },
      'puja-thali': {
        name: 'सजी हुई पीतल की पूजा थाली',
        purpose: 'दीपक, रोली, अक्षत, सिन्दूर, मिठाई और पुष्प रखने के लिए।',
      },
      'gaura-idol': {
        name: 'चौथ माता एवं शिव परिवार का चित्र या प्रतिमा',
        purpose: 'सायंकालीन पूजा मुहूर्त में मुख्य आराधना के लिए।',
      },
      'diya-ghee': {
        name: 'मिट्टी/पीतल के दीपक, रुई की बाती और शुद्ध गाय का घी',
        purpose: 'आरती और छलनी में रखकर चन्द्र दर्शन करने के लिए।',
      },
      'katha-book': {
        name: 'करवा चौथ व्रत कथा पुस्तक',
        purpose: 'सायंकालीन पूजा मुहूर्त में कथा पढ़ने व सुनने के लिए।',
      },
      'roli-akshat': {
        name: 'रोली (कुमकुम) और अक्षत (साबुत चावल)',
        purpose: 'देवी-देवताओं, करवे और पति के मस्तक पर तिलक लगाने के लिए।',
      },
      'wheat-grains': {
        name: 'गेहूँ के १३ साबुत दाने',
        purpose: 'व्रत कथा सुनते समय दाहिने हाथ में रखने और करवे के ढक्कन पर रखने के लिए।',
      },
      'mauli-thread': {
        name: 'पवित्र लाल कलावा / मौली रक्षा सूत्र',
        purpose: 'करवे के कंठ पर और कलाई पर बाँधने के लिए।',
      },
      'seekh-reed': {
        name: 'सींक (कांस की तीली)',
        purpose: 'पारंपरिक रूप से करवे के साथ रखने के लिए।',
      },
      'marigold-flowers': {
        name: 'गेंदे और लाल गुलाब के ताजे फूल',
        purpose: 'चौकी सजाने और देवी-देवताओं को अर्पित करने के लिए।',
      },
      'sweets-mathri': {
        name: 'घर की बनी मिठाई (पेड़ा/बर्फी) एवं बायना की मठरी',
        purpose: 'भोग लगाने, सासू माँ को बायना देने और व्रत पारण के लिए।',
      },
      'sindoor-bindi': {
        name: 'सिन्दूर, लाल बिन्दी और महावर (आलता)',
        purpose: 'माँ पार्वती को सुहाग पिटारी अर्पित करने और श्रृंगार के लिए।',
      },
      'mehendi-bangles': {
        name: 'मेहंदी और लाल-सुनहरी काँच की चूड़ियाँ',
        purpose: 'पर्व के उल्लास और अखंड सौभाग्य के प्रतीक रूप में।',
      },
      'red-chunri': {
        name: 'लाल या मैरून गोटा-पट्टी चुनरी',
        purpose: 'कथा सुनते समय और चन्द्र दर्शन के समय सिर पर ओढ़ने के लिए।',
      },
      'water-tumbler': {
        name: 'चाँदी या पीतल के गिलास में स्वच्छ जल',
        purpose: 'चन्द्र अर्घ्य के बाद पति के हाथों जल पीकर व्रत खोलने के लिए।',
      },
    },

    sargiCards: [
      {
        badge: '०१ · दिन भर की ऊर्जा',
        title: 'केसर फेनी और सूखे मेवे',
        desc: 'गर्म केसर-इलायची दूध में बनी फेनी (सेवइयाँ) और भीगे हुए बादाम, अखरोट, पिस्ता व अंजीर शरीर को दिन भर धीरे-धीरे ऊर्जा प्रदान करते हैं और थकान नहीं होने देते।',
      },
      {
        badge: '०२ · जल संतुलन एवं ताजगी',
        title: 'नारियल पानी और ताजे फल',
        desc: 'अनार, केला, सेब और नारियल पानी सूर्योदय से पूर्व शरीर में प्राकृतिक इलेक्ट्रोलाइट्स बनाए रखते हैं। सरगी में अधिक नमक, तले हुए पकवान या चाय-कॉफी से बचें।',
      },
      {
        badge: '०३ · पारिवारिक स्नेह व सम्मान',
        title: 'श्रृंगार और सायंकालीन बायना',
        desc: 'सरगी थाली में सासू माँ के आशीर्वाद स्वरूप लाल चूड़ियाँ, सिन्दूर और चुनरी होती है। शाम को बहू मिठाई, मठरी और उपहार का ‘बायना’ देकर बड़ों का सम्मान करती है।',
      },
    ],

    stageWord: 'चरण',
    chhalniControlsHeading: 'छलनी दर्शन नियंत्रण',
    removeChhalniBtn: 'छलनी हटाकर देखें',
    placeChhalniBtn: 'छलनी के भीतर से देखें',
    activeInSimulatorBadge: 'सिम्युलेटर में सक्रिय',
    chhalniMoments: [
      {
        tabLabel: '०१ · दीपक',
        phase: 'चरण ०१ · छलनी में दीपक प्रज्वलन',
        title: 'भक्ति की ज्योति और चन्द्रमा की शीतलता का संगम',
        desc: 'चन्द्रोदय होने पर पूजा थाली में शुद्ध घी का दीपक जलाएँ और उसे पीतल की छलनी के भीतर रखें तथा सिर पर लाल मंगल चुनरी ओढ़ें।',
      },
      {
        tabLabel: '०२ · चन्द्र दर्शन',
        phase: 'चरण ०२ · छलनी से चन्द्र दर्शन',
        title: 'नकारात्मकता दूर कर आशीर्वाद को सौ गुना करना',
        desc: 'छलनी को आँखों के सामने उठाकर उसकी जाली से चन्द्र देव के दर्शन करें। यह मन के विकारों को छानकर चाँद की शीतल किरणों को सौ गुना करने का प्रतीक है।',
      },
      {
        tabLabel: '०३ · चन्द्र अर्घ्य',
        phase: 'चरण ०३ · पावन जल अर्घ्य अर्पण',
        title: 'मिट्टी के करवे से चन्द्र अर्घ्य',
        desc: 'छलनी को थाली में रखकर मिट्टी के करवे की टोंटी से चन्द्रमा की ओर धीरे-धीरे जल अर्पित करें और घर-परिवार की सुख-शांति के लिए प्रार्थना करें।',
      },
      {
        tabLabel: '०४ · व्रत पारण',
        phase: 'चरण ०४ · जीवनसाथी दर्शन एवं पारण',
        title: 'जल का पहला घूँट और मिठाई',
        desc: 'दीपक सहित छलनी को पुनः उठाकर अपने पति का मुस्कुराता चेहरा देखें, उनके माथे पर तिलक लगाएँ और उनके हाथों से जल व मिठाई ग्रहण कर व्रत खोलें।',
      },
    ],

    studioSubheading:
      'दाईं ओर दिए गए ७ बॉक्स में कार्ड की प्रत्येक पंक्ति को बदलें, फिर सबसे नीचे दिए गए बटन से डाउनलोड, कॉपी या शेयर करें।',
    cardFormatLabel: 'कार्ड का आकार:',
    horizontalBtn: 'आड़ा',
    verticalBtn: 'खड़ा',
    cardPaletteLabel: 'कार्ड का रंग थीम:',
    themeNames: {
      'crimson-zari': 'शाही मैरून एवं ज़री गोल्ड',
      'ivory-pichwai': 'पावन आइवरी एवं पिछवाई गोल्ड',
      'moonlit-sandstone': 'चाँदनी सैंडस्टोन एवं अंबर',
    },
    rowLabels: [
      'पंक्ति १ · ऊपरी शीर्षक',
      'पंक्ति २ · संबोधन एवं प्रियजन का नाम',
      'पंक्ति ३ · कार्ड का मुख्य शीर्षक',
      'पंक्ति ४ · मुख्य शुभकामना संदेश',
      'पंक्ति ५ · समापन आशीर्वाद पंक्ति',
      'पंक्ति ६ · भेजने वाले का नाम / हस्ताक्षर',
      'पंक्ति ७ · नीचे की तिथि / पर्व पंक्ति',
    ],
    curatedWishesHeading: 'चुनिंदा करवा चौथ शुभकामनाएँ (किसी भी कार्ड की सभी पंक्तियाँ बदलें)',
    curatedWishesSubheading:
      'आप नीचे किसी भी कार्ड की श्रेणी, शीर्षक, संदेश और समापन पंक्ति को सीधे बदल सकते हैं या कार्ड स्टूडियो में खोल सकते हैं।',
    wishFilterTabs: {
      all: 'सभी',
      wife: 'पत्नी के लिए',
      husband: 'पति के लिए',
      mother: 'सासू माँ के लिए',
      poetic: 'काव्यात्मक एवं पारंपरिक',
      traditional: 'मंगल शुभकामनाएँ',
    },
    editAllRowsBtn: 'सभी पंक्तियाँ बदलें',
    doneEditingBtn: 'संपादन पूर्ण',
    saveRowsBtn: 'सेव करें',
    copyWishBtn: 'संदेश कॉपी करें',
    openInStudioBtn: 'कार्ड स्टूडियो में खोलें',
    wishesList: [
      {
        id: 'wish-1',
        categoryKey: 'wife',
        category: 'पत्नी के लिए',
        headerLine: 'प्रेम, समर्पण और अखंड सौभाग्य का महापर्व',
        greetingLine: 'मेरी प्रियतमा एवं अर्धांगिनी के नाम,',
        title: 'चौथ के चाँद की पावन चाँदनी में',
        message:
          'जैसे ही आज रात चौथ का चाँद आपकी छलनी और दीपक की लौ से जगमगाए, मैं आपकी हर मुस्कान, हर प्रार्थना और हमारे घर को प्रेम से संवारने के लिए हृदय से आभारी हूँ।',
        closing: 'करवा चौथ की हार्दिक शुभकामनाएँ, प्रिये!',
        signatureLine: 'अनंत प्रेम सहित — तुम्हारा पति',
        footerLine: 'शुभ करवा चौथ · कार्तिक कृष्ण चतुर्थी',
      },
      {
        id: 'wish-2',
        categoryKey: 'wife',
        category: 'पत्नी के लिए',
        headerLine: 'आपसी प्रेम और विश्वास का पावन बंधन',
        greetingLine: 'मेरी प्यारी जीवनसंगिनी को,',
        title: 'समर्पण और साथ का पावन बंधन',
        message:
          'आज मैं भी आपके साथ यह व्रत रख रहा हूँ—आपके धैर्य, प्रेम और समर्पण के सम्मान में। माँ पार्वती और भगवान शिव हमारे जीवन को सदा सुखमय रखें।',
        closing: 'मंगलमय करवा चौथ की अनंत शुभकामनाएँ!',
        signatureLine: 'सदा तुम्हारे साथ — तुम्हारा जीवनसाथी',
        footerLine: 'मंगलमय करवा चौथ · अटूट साथ',
      },
      {
        id: 'wish-3',
        categoryKey: 'husband',
        category: 'पति के लिए',
        headerLine: 'अखंड सौभाग्य और अटूट प्रेम का पावन व्रत',
        greetingLine: 'मेरे प्राणप्रिय पतिदेव के नाम,',
        title: 'भोर की सरगी से चन्द्रोदय तक',
        message:
          'प्रातःकाल सरगी के दीपक से लेकर रात के पहले चन्द्र दर्शन तक, मेरे हृदय की हर प्रार्थना आपके उत्तम स्वास्थ्य, शांति और हमारे अटूट साथ के लिए है।',
        closing: 'मेरे प्रिय पतिदेव को शुभ करवा चौथ!',
        signatureLine: 'संपूर्ण समर्पण व प्रेम सहित — आपकी पत्नी',
        footerLine: 'शुभ करवा चौथ · चन्द्रोदय आशीर्वाद',
      },
      {
        id: 'wish-4',
        categoryKey: 'husband',
        category: 'पति के लिए',
        headerLine: 'आपकी दीर्घायु और खुशहाली की मंगल कामना',
        greetingLine: 'मेरे जीवन के आधार, प्रिय पति को,',
        title: 'छलनी के झरोखे से चाँद और आपका दर्शन',
        message:
          'छलनी में जलते दीपक की रोशनी में चाँद और फिर आपका मुस्कुराता चेहरा देखना मेरे जीवन का सबसे पावन पल है। चौथ माता आपको सदा स्वस्थ, सफल और प्रसन्न रखें।',
        closing: 'हर जन्म में आपका ही साथ मिले — शुभ करवा चौथ!',
        signatureLine: 'सदा आपकी — आपकी अर्धांगिनी',
        footerLine: 'पावन करवा चौथ · जन्म-जन्मांतर का साथ',
      },
      {
        id: 'wish-5',
        categoryKey: 'mother',
        category: 'सासू माँ के लिए',
        headerLine: 'पावन सरगी और बड़ों का स्नेहिल आशीर्वाद',
        greetingLine: 'पूजनीय सासू माँ के श्रीचरणों में प्रणाम,',
        title: 'सरगी के आशीर्वाद हेतु आभार',
        message:
          'पूज्य माँ जी, सरगी की थाली में पिरोए आपके स्नेह और आशीर्वाद के लिए कोटि-कोटि प्रणाम। आपका स्नेहिल आशीर्वाद हमारे परिवार पर सदा बना रहे।',
        closing: 'चरण स्पर्श एवं शुभ करवा चौथ, माँ जी।',
        signatureLine: 'सादर आभार व स्नेह सहित — आपकी बहू',
        footerLine: 'शुभ करवा चौथ · पारिवारिक आशीर्वाद',
      },
      {
        id: 'wish-6',
        categoryKey: 'mother',
        category: 'सासू माँ के लिए',
        headerLine: 'पारिवारिक संस्कार और मातृत्व का सम्मान',
        greetingLine: 'आदरणीय एवं स्नेहमयी माँ जी को,',
        title: 'आपका आशीर्वाद ही हमारी सबसे बड़ी शक्ति है',
        message:
          'आपके संस्कार, वात्सल्य और मार्गदर्शन से हमारा घर हर पर्व पर खिल उठता है। चौथ माता से आपके उत्तम स्वास्थ्य, सुख और दीर्घायु की प्रार्थना करती हूँ।',
        closing: 'सादर चरण वंदन एवं शुभ करवा चौथ, माँ जी।',
        signatureLine: 'विनम्र श्रद्धा सहित — आपकी बहू एवं परिवार',
        footerLine: 'मंगलमय करवा चौथ · श्रद्धा एवं स्नेह',
      },
      {
        id: 'wish-7',
        categoryKey: 'poetic',
        category: 'काव्यात्मक एवं पारंपरिक',
        headerLine: 'पावन चन्द्रोदय और माटी के दीपक की ज्योति',
        greetingLine: 'कार्तिक चौथ की इस चाँदनी रात में,',
        title: 'मिट्टी के दीपक की पावन ज्योति',
        message:
          'करवा चौथ के दीपक की पावन ज्योति हर अंधकार को दूर करे, चन्द्र देव की शीतलता आपके मन को शांति दे और चौथ माता आपके घर में सुख-समृद्धि भर दें।',
        closing: 'सपरिवार शुभ करवा चौथ एवं शांत चाँदनी!',
        signatureLine: 'काव्यात्मक स्नेह एवं मंगल प्रार्थना सहित',
        footerLine: 'कार्तिक कृष्ण चतुर्थी · पावन चन्द्रोदय',
      },
      {
        id: 'wish-8',
        categoryKey: 'poetic',
        category: 'काव्यात्मक एवं पारंपरिक',
        headerLine: 'चाँद की चाँदनी और सिन्दूर की आभा',
        greetingLine: 'आस्था और विश्वास के इस पावन संगम पर,',
        title: 'जहाँ श्रद्धा मिलती है शरद के चाँद से',
        message:
          'छलनी के भीतर अडिग जलती लौ और शरद के चाँद की शीतल किरणों की तरह आपके जीवन में प्रेम, विश्वास और मधुरता का प्रकाश सदा जगमगाता रहे।',
        closing: 'ज्योतिर्मय और मंगलमय करवा चौथ की शुभकामनाएँ!',
        signatureLine: 'पारंपरिक आदर एवं स्नेह सहित',
        footerLine: 'शुभ करवा चौथ · उजास एवं समरसता',
      },
      {
        id: 'wish-9',
        categoryKey: 'traditional',
        category: 'मंगल शुभकामनाएँ',
        headerLine: 'करवा चौथ महापर्व की मंगल शुभकामनाएँ',
        greetingLine: 'आपको एवं आपके पूरे परिवार को सादर नमस्कार,',
        title: 'चाँद की रोशनी और अटूट स्नेह',
        message:
          'चौथ का चाँद आपके जीवन में सुख, शांति और मधुरता का उजाला बिखेरे। मेंहदी की खुशबू, दिए की लौ और आपके स्नेह का यह पवित्र बंधन सदा मुस्कुराता रहे।',
        closing: 'करवा चौथ की हार्दिक शुभकामनाएँ!',
        signatureLine: 'हार्दिक शुभकामनाओं एवं स्नेह सहित',
        footerLine: 'शुभ करवा चौथ · सुख एवं समृद्धि',
      },
      {
        id: 'wish-10',
        categoryKey: 'traditional',
        category: 'मंगल शुभकामनाएँ',
        headerLine: 'माँ पार्वती एवं भगवान शिव का पावन आशीर्वाद',
        greetingLine: 'पावन करक चतुर्थी पर मंगल अभिवादन,',
        title: 'सुख, आरोग्य और पारिवारिक सौहार्द',
        message:
          'करवा चौथ के इस शुभ अवसर पर माँ पार्वती और भगवान शिव आपके घर-परिवार को उत्तम स्वास्थ्य, सुख-समृद्धि और अटूट स्नेह का आशीर्वाद प्रदान करें।',
        closing: 'सपरिवार करवा चौथ की मंगलमय शुभकामनाएँ!',
        signatureLine: 'मंगल कामनाओं एवं सादर अभिवादन सहित',
        footerLine: 'शुभ करवा चौथ · मंगल आशीर्वाद',
      },
    ],

    faqsList: [
      {
        id: 'faq-date',
        question: 'भारतीय पंचांग के अनुसार २०२६ और २०२७ में करवा चौथ कब मनाया जाएगा?',
        answer:
          'कार्तिक मास के कृष्ण पक्ष की चतुर्थी तिथि को करवा चौथ मनाया जाता है। प्रमाणित पंचांग गणना के अनुसार २०२६ में करवा चौथ गुरुवार, २९ अक्टूबर २०२६ को है (पूजा मुहूर्त: सायं ०५:३८ – ०६:५६ IST; दिल्ली चन्द्रोदय: रात्रि ~०८:१७ IST)। २०२७ में यह सोमवार, १८ अक्टूबर २०२७ को मनाया जाएगा।',
      },
      {
        id: 'faq-cloudy-moon',
        question: 'यदि घने बादलों या कोहरे के कारण चाँद दिखाई न दे तो व्रत कैसे पूर्ण करें?',
        answer:
          'यदि आपके शहर के चन्द्रोदय समय के काफी बाद भी बादलों के कारण चाँद न दिखे, तो पंचांग के चन्द्रोदय समय के अनुसार चाँद की दिशा में मुख करके चन्द्र देव का ध्यान करें या भगवान शिव के मस्तक पर विराजमान चन्द्रमा के दर्शन करके अर्घ्य दें और व्रत का पारण करें।',
      },
      {
        id: 'faq-health',
        question: 'क्या गर्भावस्था या स्वास्थ्य समस्या में निर्जला व्रत में बदलाव किया जा सकता है?',
        answer:
          'हाँ। हिन्दू धर्मशास्त्रों में कहा गया है “शरीरमाद्यं खलु धर्मसाधनम्”—अर्थात् स्वास्थ्य की रक्षा सर्वोपरि है। गर्भवती महिलाएँ, माताएँ और दवा लेने वाले व्यक्ति चिकित्सक की सलाह से नारियल पानी, दूध, फल और मेवे लेकर फलाहार व्रत रख सकते हैं।',
      },
      {
        id: 'faq-sargi-meaning',
        question: 'यदि बहू सासू माँ से दूर दूसरे शहर में रहती हो तो सरगी की रस्म कैसे निभाएँ?',
        answer:
          'दूसरे शहर या देश में रहने पर व्रत से एक शाम पहले फोन पर सासू माँ का आशीर्वाद लें और सुबह ब्रह्म मुहूर्त में उनके स्नेह स्वरूप घर पर ही सरगी की थाली तैयार कर ग्रहण करें।',
      },
      {
        id: 'faq-chhalni',
        question: 'छलनी में दीपक रखकर चाँद और जीवनसाथी को देखने का क्या महत्व है?',
        answer:
          'छलनी की बारीक जाली चन्द्रमा की किरणों को सैकड़ों पावन बिंदुओं में विभाजित करती है, जो मन के दोषों को छानकर आशीर्वाद को सौ गुना करने का प्रतीक है। भीतर रखा दीपक भक्ति और प्रेम की अखंड ज्योति दर्शाता है।',
      },
      {
        id: 'faq-couples-fasting',
        question: 'क्या पति भी अपनी पत्नी के साथ करवा चौथ का व्रत रख सकते हैं?',
        answer:
          'बिल्कुल। आज अनेक पति अपनी पत्नी के प्रति प्रेम, सम्मान और सहभागिता प्रकट करने के लिए साथ में व्रत रखते हैं और रात्रि में चन्द्र अर्घ्य के बाद एक साथ व्रत खोलते हैं।',
      },
    ],

    footerBlessing:
      'कार्तिक चतुर्थी के चाँद की शीतल चाँदनी और मिट्टी के दीपक की पावन आभा आपके घर-परिवार को प्रेम, शांति और अटूट साथ से आलोकित करे।',
    footerCulturalNote:
      'सांस्कृतिक सम्मान टिप्पणी: यहाँ दी गई पूजा विधि और पंचांग समय पारंपरिक संदर्भ हेतु हैं। सदैव अपने स्वास्थ्य को प्राथमिकता दें।',
    footerSectionsHeading: 'प्रमुख विभाग',
    footerControlsHeading: 'इंटरैक्टिव नियंत्रण',
    returnToTopBtn: '↑ पेज के सबसे ऊपर जाएँ',
    footerCopyright: 'शुभ करवा चौथ · भारतीय पर्व परंपरा के प्रति श्रद्धा सहित निर्मित',
    footerVerifiedDates: 'प्रमाणित पंचांग तिथियाँ: २९ अक्टूबर २०२६ · १८ अक्टूबर २०२७ · ७ अक्टूबर २०२८',
  },

  // ===========================================================================
  // 4. PUNJABI (pa - ਪੰਜਾਬੀ)
  // ===========================================================================
  pa: {
    cityNames: {
      delhi: { city: 'ਨਵੀਂ ਦਿੱਲੀ', region: 'ਦਿੱਲੀ NCR · ਉੱਤਰੀ ਭਾਰਤ' },
      mumbai: { city: 'ਮੁੰਬਈ', region: 'ਮਹਾਰਾਸ਼ਟਰ · ਪੱਛਮੀ ਭਾਰਤ' },
      jaipur: { city: 'ਜੈਪੁਰ', region: 'ਰਾਜਸਥਾਨ' },
      kolkata: { city: 'ਕੋਲਕਾਤਾ', region: 'ਪੱਛਮੀ ਬੰਗਾਲ · ਪੂਰਬੀ ਭਾਰਤ' },
      ahmedabad: { city: 'ਅਹਿਮਦਾਬਾਦ', region: 'ਗੁਜਰਾਤ · ਪੱਛਮੀ ਭਾਰਤ' },
      bengaluru: { city: 'ਬੈਂਗਲੁਰੂ', region: 'ਕਰਨਾਟਕ · ਦੱਖਣੀ ਭਾਰਤ' },
      chandigarh: { city: 'ਚੰਡੀਗੜ੍ਹ', region: 'ਪੰਜਾਬ ਅਤੇ ਹਰਿਆਣਾ' },
      lucknow: { city: 'ਲਖਨਊ', region: 'ਉੱਤਰ ਪ੍ਰਦੇਸ਼' },
    },
    moonriseTargetPrefix: 'ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਮਾਂ —',
    localTimeLabel: 'ਸਥਾਨਕ ਸਮਾਂ',
    regionLabel: 'ਖੇਤਰ',
    panchangEveningMuhurat: 'ਸ਼ਾਮ ਦਾ ਪੂਜਾ ਮੁਹੂਰਤ',
    panchangPradoshWindow: 'ਪ੍ਰਦੋਸ਼ ਵਰਤ ਕਥਾ ਅਤੇ ਆਰਤੀ ਸਮਾਂ',
    panchangMoonriseSuffix: 'ਚੰਦਰਮਾ ਉਦੈ',
    panchangChhalniArghya: 'ਛਾਨਣੀ ਦਰਸ਼ਨ ਅਤੇ ਅਰਘ',
    panchangVratDuration: 'ਵਰਤ ਦੀ ਮਿਆਦ',
    panchangSunriseToMoonrise: 'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਚੰਨ ਚੜ੍ਹਨ ਤੱਕ',
    panchangTithiWindow: 'ਚਤੁਰਥੀ ਤਿਥੀ ਸਮਾਂ',
    panchangBegins: 'ਸ਼ੁਰੂ',
    panchangEnds: 'ਸਮਾਪਤ',

    stepPrefix: 'ਪੜਾਅ',
    stageOfSix: '/ 06',
    ritualProcedureHeading: 'ਪੂਜਾ ਵਿਧੀ ਅਤੇ ਨਿਯਮ',
    sacredMantraHeading: 'ਪਵਿੱਤਰ ਮੰਤਰ ਅਤੇ ਸੰਕਲਪ ਸਲੋਕ',
    copyMantraBtn: 'ਮੰਤਰ ਕਾਪੀ ਕਰੋ',
    copiedLabel: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
    meaningLabel: 'ਅਰਥ:',
    kathaBoxTitle: 'ਰਵਾਇਤੀ ਕਰਵਾ ਚੌਥ ਵਰਤ ਕਥਾ (ਰਾਣੀ ਵੀਰਾਵਤੀ ਦੀ ਕਥਾ)',
    readFullKathaBtn: 'ਪੂਰੀ ਵਰਤ ਕਥਾ ਪੜ੍ਹੋ',
    hideFullKathaBtn: 'ਵਰਤ ਕਥਾ ਛੁਪਾਓ',
    kathaStoryLead: 'ਰਾਣੀ ਵੀਰਾਵਤੀ ਦੀ ਪਵਿੱਤਰ ਕਥਾ:',
    kathaStoryPara1:
      'ਪੁਰਾਣੇ ਸਮੇਂ ਵਿੱਚ ਸੱਤ ਭਰਾਵਾਂ ਦੀ ਇਕਲੌਤੀ ਭੈਣ ਵੀਰਾਵਤੀ ਨੇ ਆਪਣੇ ਪੇਕੇ ਘਰ ਪਹਿਲਾ ਕਰਵਾ ਚੌਥ ਦਾ ਵਰਤ ਰੱਖਿਆ। ਸ਼ਾਮ ਨੂੰ ਪਿਆਸ ਨਾਲ ਵਿਆਕੁਲ ਭੈਣ ਨੂੰ ਵੇਖ ਕੇ ਭਰਾਵਾਂ ਨੇ ਪਿੱਪਲ ਦੇ ਪਿੱਛੇ ਦੀਵੇ ਨਾਲ ਨਕਲੀ ਚੰਨ ਵਿਖਾ ਕੇ ਵਰਤ ਖੁਲ੍ਹਵਾ ਦਿੱਤਾ।',
    kathaStoryPara2:
      'ਇਸ ਤੋਂ ਬਾਅਦ ਉਸਦੇ ਪਤੀ ਬੀਮਾਰ ਹੋ ਗਏ। ਮਾਂ ਪਾਰਵਤੀ (ਚੌਥ ਮਾਤਾ) ਦੀ ਕਿਰਪਾ ਅਤੇ ਸੱਚੀ ਸ਼ਰਧਾ ਨਾਲ ਵੀਰਾਵਤੀ ਨੇ ਪੂਰੇ ਨਿਯਮਾਂ ਨਾਲ ਮੁੜ ਵਰਤ ਰੱਖਿਆ, ਜਿਸ ਨਾਲ ਉਸਦੇ ਪਤੀ ਨੂੰ ਤੰਦਰੁਸਤੀ ਅਤੇ ਲੰਬੀ ਉਮਰ ਮਿਲੀ।',
    kathaPrayer:
      '“ਹੇ ਚੌਥ ਮਾਤਾ! ਜਿਵੇਂ ਤੁਸੀਂ ਰਾਣੀ ਵੀਰਾਵਤੀ ਦਾ ਸੁਹਾਗ ਅਤੇ ਪਰਿਵਾਰ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ, ਉਵੇਂ ਹੀ ਸਭ ਦੇ ਘਰਾਂ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਅਤੇ ਪਿਆਰ ਬਣਾਈ ਰੱਖਣਾ।”',
    culturalNoteLabel: 'ਪਰੰਪਰਾ ਅਤੇ ਸਿਹਤ ਧਿਆਨ:',
    prevStageBtn: '← ਪਿਛਲਾ ਪੜਾਅ',
    nextStageBtn: 'ਅਗਲਾ ਪੜਾਅ →',
    vidhiSteps: [
      {
        stepNumber: '01',
        title: 'ਸਵੇਰ ਦੀ ਸਰਗੀ ਅਤੇ ਵਰਤ ਸੰਕਲਪ',
        sanskritTitle: 'ਅੰਮ੍ਰਿਤ ਵੇਲੇ ਸਰਗੀ ਅਤੇ ਵਰਤ ਸੰਕਲਪ',
        timingWindow: 'ਬ੍ਰਹਮ ਮੁਹੂਰਤ · ਸਵੇਰੇ 04:30 – 06:00',
        summary: 'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਉੱਠ ਕੇ ਇਸ਼ਨਾਨ ਕਰੋ, ਸੱਸ ਮਾਂ ਦੀਆਂ ਅਸੀਸਾਂ ਨਾਲ ਸਰਗੀ ਛਕੋ ਅਤੇ ਵਰਤ ਦਾ ਸੰਕਲਪ ਲਓ।',
        detailedInstructions: [
          'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਉੱਠ ਕੇ ਇਸ਼ਨਾਨ ਕਰੋ ਅਤੇ ਸ਼ੁੱਧ ਕੱਪੜੇ ਪਹਿਨੋ।',
          'ਸੱਸ ਮਾਂ ਵੱਲੋਂ ਦਿੱਤੀ ਸਰਗੀ (ਫੇਨੀ, ਸੁੱਕੇ ਮੇਵੇ, ਤਾਜ਼ੇ ਫਲ ਅਤੇ ਨਾਰੀਅਲ ਪਾਣੀ) ਛਕੋ।',
          'ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਵਿੱਚ ਜਲ ਅਤੇ ਫੁੱਲ ਲੈ ਕੇ ਵਰਤ ਦਾ ਸੰਕਲਪ ਕਰੋ।',
        ],
        sacredMantra: {
          devanagari: 'ਮਮ ਸੁਖਸੌਭਾਗਯ ਪੁਤਰਪੌਤ੍ਰਾਦਿ ਸੁਸਥਿਰ ਸ਼੍ਰੀਪ੍ਰਾਪਤਯੇ ਕਰਕਚਤੁਰਥੀ ਵ੍ਰਤਮਹੰ ਕਰਿਸ਼ਯੇ।',
          transliteration: 'ਮਮ ਸੁਖਸੌਭਾਗਯ ਪੁਤਰਪੌਤ੍ਰਾਦਿ ਸੁਸਥਿਰ ਸ਼੍ਰੀਪ੍ਰਾਪਤਯੇ ਕਰਕਚਤੁਰਥੀ ਵ੍ਰਤਮਹੰ ਕਰਿਸ਼ਯੇ।',
          meaning: 'ਆਪਣੇ ਪਰਿਵਾਰ ਦੀ ਖੁਸ਼ਹਾਲੀ, ਚੰਗੀ ਸਿਹਤ ਅਤੇ ਲੰਬੀ ਉਮਰ ਲਈ ਮੈਂ ਇਹ ਪਵਿੱਤਰ ਕਰਵਾ ਚੌਥ ਵਰਤ ਰੱਖਦੀ ਹਾਂ।',
        },
        culturalNote: 'ਗਰਭਵਤੀ ਮਾਵਾਂ ਅਤੇ ਸਿਹਤ ਦੀ ਲੋੜ ਵਾਲੇ ਵਿਅਕਤੀ ਫਲ ਅਤੇ ਪਾਣੀ ਲੈ ਕੇ ਵਰਤ ਰੱਖ ਸਕਦੇ ਹਨ।',
      },
      {
        stepNumber: '02',
        title: 'ਪੂਜਾ ਚੌਕੀ ਅਤੇ ਕਰਵਾ ਸਥਾਪਨਾ',
        sanskritTitle: 'ਪੂਜਾ ਚੌਕੀ ਅਤੇ ਕਰਕ ਸਥਾਪਨਾ',
        timingWindow: 'ਦੁਪਹਿਰ ਬਾਅਦ · 04:00 – 05:15',
        summary: 'ਚੌਕੀ ਤੇ ਲਾਲ ਕੱਪੜਾ ਵਿਛਾ ਕੇ ਮਾਂ ਪਾਰਵਤੀ ਤੇ ਸ਼ਿਵ ਪਰਿਵਾਰ ਦੀ ਤਸਵੀਰ ਰੱਖੋ ਅਤੇ ਮਿੱਟੀ ਦਾ ਕਰਵਾ ਤਿਆਰ ਕਰੋ।',
        detailedInstructions: [
          'ਪੂਜਾ ਵਾਲੀ ਥਾਂ ਨੂੰ ਗੰਗਾਜਲ ਨਾਲ ਪਵਿੱਤਰ ਕਰੋ।',
          'ਚੌਕੀ ਤੇ ਲਾਲ ਕੱਪੜਾ ਵਿਛਾ ਕੇ ਚੌਥ ਮਾਤਾ ਅਤੇ ਸ਼ਿਵ ਪਰਿਵਾਰ ਦੀ ਸਥਾਪਨਾ ਕਰੋ।',
          'ਕਰਵੇ ਤੇ ਮੌਲੀ ਬੰਨ੍ਹੋ, ਸਵਾਸਤਿਕ ਬਣਾਓ, ਪਾਣੀ ਭਰੋ ਅਤੇ ਢੱਕਣ ਉੱਤੇ ਕਣਕ ਤੇ ਖੰਡ ਰੱਖੋ।',
        ],
        culturalNote: 'ਮਿੱਟੀ ਦਾ ਕਰਵਾ ਖੁਸ਼ਹਾਲੀ ਅਤੇ ਜੀਵਨ ਦੇ ਪਵਿੱਤਰ ਜਲ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      },
      {
        stepNumber: '03',
        title: 'ਸੋਲ੍ਹਾਂ ਸ਼ਿੰਗਾਰ ਅਤੇ ਬਿਆਨਾ ਤਿਆਰੀ',
        sanskritTitle: 'ਸ਼ਗਨਾਂ ਦਾ ਸ਼ਿੰਗਾਰ ਅਤੇ ਬਿਆਨਾ ਥਾਲ',
        timingWindow: 'ਸ਼ਾਮ ਤੋਂ ਪਹਿਲਾਂ · 05:00 – 05:35',
        summary: 'ਰਵਾਇਤੀ ਲਾਲ ਜਾਂ ਮੈਰੂਨ ਪਹਿਰਾਵੇ ਵਿੱਚ ਸੋਲ੍ਹਾਂ ਸ਼ਿੰਗਾਰ ਕਰੋ ਅਤੇ ਸੱਸ ਮਾਂ ਲਈ ਮੱਠੀਆਂ ਤੇ ਮਿਠਾਈ ਦਾ ਬਿਆਨਾ ਤਿਆਰ ਕਰੋ।',
        detailedInstructions: [
          'ਸ਼ਗਨਾਂ ਦਾ ਜੋੜਾ, ਮਹਿੰਦੀ, ਚੂੜਾ, ਬਿੰਦੀ ਅਤੇ ਸਿੰਦੂਰ ਲਗਾਓ।',
          'ਸੱਸ ਮਾਂ ਲਈ ਮੱਠੀਆਂ, ਮਿਠਾਈ, ਸੁੱਕੇ ਮੇਵੇ ਅਤੇ ਸ਼ਿੰਗਾਰ ਦਾ ਬਿਆਨਾ ਥਾਲ ਸਜਾਓ।',
          'ਆਪਣੀ ਪੂਜਾ ਥਾਲੀ ਵਿੱਚ ਘਿਓ ਦਾ ਦੀਵਾ, ਰੋਲੀ, ਚੌਲ ਅਤੇ ਫੁੱਲ ਰੱਖੋ।',
        ],
        culturalNote: 'ਸੋਲ੍ਹਾਂ ਸ਼ਿੰਗਾਰ ਖੁਸ਼ੀਆਂ ਅਤੇ ਮਾਂ ਪਾਰਵਤੀ ਦੀਆਂ ਅਸੀਸਾਂ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      },
      {
        stepNumber: '04',
        title: 'ਸ਼ਾਮ ਦੀ ਪੂਜਾ ਅਤੇ ਵਰਤ ਕਥਾ',
        sanskritTitle: 'ਸ਼ਾਮ ਦੀ ਪੂਜਾ ਅਤੇ ਵਰਤ ਕਥਾ ਸਰਵਣ',
        timingWindow: 'ਸ਼ਾਮ ਦਾ ਮੁਹੂਰਤ · 05:38 – 06:56',
        summary: 'ਸ਼ਾਮ ਦੇ ਮੁਹੂਰਤ ਵਿੱਚ ਗਣੇਸ਼ ਜੀ ਅਤੇ ਚੌਥ ਮਾਤਾ ਦੀ ਪੂਜਾ ਕਰੋ, ਹੱਥ ਵਿੱਚ 13 ਕਣਕ ਦੇ ਦਾਣੇ ਲੈ ਕੇ ਕਥਾ ਸੁਣੋ ਅਤੇ ਥਾਲੀ ਵਟਾਓ।',
        detailedInstructions: [
          'ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਸ੍ਰੀ ਗਣੇਸ਼ ਜੀ ਦੀ ਪੂਜਾ ਕਰੋ।',
          'ਚੌਥ ਮਾਤਾ ਨੂੰ ਰੋਲੀ, ਚੌਲ, ਸਿੰਦੂਰ, ਫੁੱਲ ਅਤੇ ਮਿਠਾਈ ਭੇਟ ਕਰੋ।',
          'ਸੱਜੇ ਹੱਥ ਵਿੱਚ ਕਣਕ ਦੇ 13 ਦਾਣੇ ਲੈ ਕੇ ਕਰਵਾ ਚੌਥ ਦੀ ਕਥਾ ਸੁਣੋ ਅਤੇ “ਵੀਰੋ ਕੁੜੀਏ ਕਰਵੜਾ” ਗੀਤ ਗਾਉਂਦੇ ਹੋਏ ਥਾਲੀ ਘੁਮਾਓ।',
        ],
        sacredMantra: {
          devanagari: 'ਓਮ ਸ਼ਿਵਾਯੈ ਨਮਃ · ਓਮ ਨਮਃ ਸ਼ਿਵਾਯ · ਓਮ ਸ਼ਣਮੁਖਾਯ ਨਮਃ · ਓਮ ਸੋਮਾਯ ਨਮਃ।',
          transliteration: 'ਓਮ ਸ਼ਿਵਾਯੈ ਨਮਃ · ਓਮ ਨਮਃ ਸ਼ਿਵਾਯ · ਓਮ ਸ਼ਣਮੁਖਾਯ ਨਮਃ · ਓਮ ਸੋਮਾਯ ਨਮਃ।',
          meaning: 'ਮਾਂ ਪਾਰਵਤੀ, ਭਗਵਾਨ ਸ਼ਿਵ, ਸਵਾਮੀ ਕਾਰਤੀਕੇਯ ਅਤੇ ਚੰਦਰ ਦੇਵ ਨੂੰ ਪ੍ਰਣਾਮ।',
        },
        culturalNote: 'ਕਥਾ ਤੋਂ ਬਾਅਦ ਸੱਸ ਮਾਂ ਨੂੰ ਬਿਆਨਾ ਦੇ ਕੇ ਪੈਰੀਂ ਹੱਥ ਲਗਾਓ।',
      },
      {
        stepNumber: '05',
        title: 'ਚੰਨ ਵੇਖਣ ਅਤੇ ਛਾਨਣੀ ਦੀ ਰਸਮ',
        sanskritTitle: 'ਚੰਦਰਮਾ ਦਰਸ਼ਨ, ਛਾਨਣੀ ਵਿਧੀ ਅਤੇ ਅਰਘ',
        timingWindow: 'ਚੰਨ ਚੜ੍ਹਨ ਵੇਲੇ · ਰਾਤ ~08:17',
        summary: 'ਚੰਨ ਚੜ੍ਹਨ ਤੇ ਛਾਨਣੀ ਵਿੱਚ ਦੀਵਾ ਰੱਖ ਕੇ ਚੰਨ ਵੇਖੋ, ਕਰਵੇ ਨਾਲ ਜਲ ਦਾ ਅਰਘ ਦਿਓ ਅਤੇ ਛਾਨਣੀ ਰਾਹੀਂ ਪਤੀ ਦਾ ਚਿਹਰਾ ਵੇਖੋ।',
        detailedInstructions: [
          'ਪੂਜਾ ਥਾਲੀ, ਪਾਣੀ ਵਾਲਾ ਕਰਵਾ ਅਤੇ ਛਾਨਣੀ ਲੈ ਕੇ ਛੱਤ ਜਾਂ ਵਿਹੜੇ ਵਿੱਚ ਜਾਓ।',
          'ਛਾਨਣੀ ਵਿੱਚ ਜਗਦਾ ਦੀਵਾ ਰੱਖ ਕੇ ਚੰਨ ਦੇ ਦਰਸ਼ਨ ਕਰੋ।',
          'ਕਰਵੇ ਵਿੱਚੋਂ ਪਾਣੀ ਪਾ ਕੇ ਚੰਦਰ ਦੇਵ ਨੂੰ ਅਰਘ ਦਿਓ।',
          'ਫਿਰ ਛਾਨਣੀ ਵਿੱਚੋਂ ਆਪਣੇ ਜੀਵਨ ਸਾਥੀ ਦਾ ਚਿਹਰਾ ਵੇਖੋ ਅਤੇ ਮੱਥੇ ਤੇ ਤਿਲਕ ਲਗਾਓ।',
        ],
        sacredMantra: {
          devanagari: 'ਦੇਹਿ ਸੌਭਾਗਯਮਾਰੋਗਯੰ ਦੇਹਿ ਮੇ ਪਰਮੰ ਸੁਖਮ। ਰੂਪੰ ਦੇਹਿ ਜਯੰ ਦੇਹਿ ਯਸ਼ੋ ਦੇਹਿ ਦ੍ਵਿਸ਼ੋ ਜਹਿ॥',
          transliteration: 'ਦੇਹਿ ਸੌਭਾਗਯਮਾਰੋਗਯੰ ਦੇਹਿ ਮੇ ਪਰਮੰ ਸੁਖਮ। ਰੂਪੰ ਦੇਹਿ ਜਯੰ ਦੇਹਿ ਯਸ਼ੋ ਦੇਹਿ ਦ੍ਵਿਸ਼ੋ ਜਹਿ॥',
          meaning: 'ਸਾਨੂੰ ਚੰਗੀ ਸਿਹਤ, ਖੁਸ਼ਹਾਲੀ ਅਤੇ ਪਰਮ ਸੁੱਖ ਬਖਸ਼ੋ।',
        },
        culturalNote: 'ਛਾਨਣੀ ਰਾਹੀਂ ਚੰਨ ਵੇਖਣਾ ਦੁੱਖਾਂ ਨੂੰ ਦੂਰ ਕਰਕੇ ਖੁਸ਼ੀਆਂ ਵਧਾਉਣ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      },
      {
        stepNumber: '06',
        title: 'ਵਰਤ ਖੋਲ੍ਹਣਾ (ਪਾਰਣ) ਅਤੇ ਪਰਿਵਾਰਕ ਭੋਜਨ',
        sanskritTitle: 'ਵਰਤ ਪਾਰਣ ਅਤੇ ਸਾਤਵਿਕ ਭੋਜਨ',
        timingWindow: 'ਚੰਨ ਨੂੰ ਅਰਘ ਦੇਣ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ',
        summary: 'ਪਤੀ ਦੇ ਹੱਥੋਂ ਪਾਣੀ ਦਾ ਘੁੱਟ ਅਤੇ ਮਿੱਠਾ ਖਾ ਕੇ ਵਰਤ ਖੋਲ੍ਹੋ, ਵੱਡਿਆਂ ਦਾ ਆਸ਼ੀਰਵਾਦ ਲਓ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ ਭੋਜਨ ਛਕੋ।',
        detailedInstructions: [
          'ਪਤੀ ਦੇ ਹੱਥੋਂ ਪਾਣੀ ਅਤੇ ਮਿਠਾਈ ਲੈ ਕੇ ਵਰਤ ਖੋਲ੍ਹੋ।',
          'ਵੱਡਿਆਂ ਦੇ ਪੈਰੀਂ ਹੱਥ ਲਗਾ ਕੇ ਅਸੀਸਾਂ ਲਓ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ ਖਾਣਾ ਖਾਓ।',
        ],
        culturalNote: 'ਅੱਜਕੱਲ੍ਹ ਕਈ ਪਤੀ-ਪਤਨੀ ਇਕੱਠੇ ਵਰਤ ਰੱਖਦੇ ਹਨ ਅਤੇ ਇਕੱਠੇ ਹੀ ਵਰਤ ਖੋਲ੍ਹਦੇ ਹਨ।',
      },
    ],

    checkAllBtn: 'ਸਭ ਚੁਣੋ',
    copyShoppingListBtn: 'ਸੂਚੀ ਕਾਪੀ ਕਰੋ',
    resetBtn: 'ਰੀਸੈੱਟ',
    readinessProgressLabel: 'ਪੂਜਾ ਥਾਲੀ ਦੀ ਤਿਆਰੀ',
    itemsReadySuffix: 'ਸਮੱਗਰੀ ਤਿਆਰ',
    filterAll: 'ਸਭ',
    filterPending: 'ਬਾਕੀ',
    filterCompleted: 'ਪੂਰਾ',
    categoryLabels: {
      'Sacred Vessels & Altar': 'ਪਵਿੱਤਰ ਬਰਤਨ ਅਤੇ ਚੌਕੀ',
      'Puja Offerings': 'ਪੂਜਾ ਸਮੱਗਰੀ ਤੇ ਭੋਗ',
      'Solah Shringar': 'ਸੋਲ੍ਹਾਂ ਸ਼ਿੰਗਾਰ',
      'Night Moonrise Ritual': 'ਰਾਤ ਦੀ ਚੰਦਰਮਾ ਪੂਜਾ',
    },
    essentialBadge: 'ਜ਼ਰੂਰੀ',
    optionalBadge: 'ਰਵਾਇਤੀ ਵਿਕਲਪਿਕ',
    addCustomPlaceholder: 'ਆਪਣੀ ਪਰਿਵਾਰਕ ਪੂਜਾ ਸਮੱਗਰੀ ਸ਼ਾਮਲ ਕਰੋ...',
    addItemBtn: 'ਸ਼ਾਮਲ ਕਰੋ',
    noItemsMatchText: 'ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੋਈ ਸਮੱਗਰੀ ਨਹੀਂ ਮਿਲੀ।',
    showAllSamagriBtn: 'ਸਾਰੀ ਸਮੱਗਰੀ ਵੇਖੋ',
    samagriItems: {
      'karwa-pot': { name: 'ਮਿੱਟੀ ਜਾਂ ਪਿੱਤਲ ਦਾ ਕਰਵਾ (ਢੱਕਣ ਸਮੇਤ)', purpose: 'ਚੰਨ ਨੂੰ ਜਲ ਦਾ ਅਰਘ ਦੇਣ ਲਈ।' },
      chhalni: { name: 'ਸਜੀ ਹੋਈ ਪੂਜਾ ਵਾਲੀ ਛਾਨਣੀ', purpose: 'ਦੀਵਾ ਰੱਖ ਕੇ ਚੰਨ ਅਤੇ ਪਤੀ ਦਾ ਚਿਹਰਾ ਵੇਖਣ ਲਈ।' },
      'puja-thali': { name: 'ਸਜੀ ਹੋਈ ਪਿੱਤਲ ਦੀ ਪੂਜਾ ਥਾਲੀ', purpose: 'ਦੀਵਾ, ਰੋਲੀ, ਚੌਲ, ਸਿੰਦੂਰ ਅਤੇ ਮਿਠਾਈ ਰੱਖਣ ਲਈ।' },
      'gaura-idol': { name: 'ਚੌਥ ਮਾਤਾ ਅਤੇ ਸ਼ਿਵ ਪਰਿਵਾਰ ਦੀ ਤਸਵੀਰ', purpose: 'ਸ਼ਾਮ ਦੀ ਪੂਜਾ ਵਿੱਚ ਅਰਾਧਨਾ ਲਈ।' },
      'diya-ghee': { name: 'ਮਿੱਟੀ ਦੇ ਦੀਵੇ, ਰੂੰ ਦੀਆਂ ਬੱਤੀਆਂ ਅਤੇ ਸ਼ੁੱਧ ਘਿਓ', purpose: 'ਆਰਤੀ ਅਤੇ ਛਾਨਣੀ ਵਿੱਚ ਰੱਖਣ ਲਈ।' },
      'katha-book': { name: 'ਕਰਵਾ ਚੌਥ ਵਰਤ ਕਥਾ ਕਿਤਾਬ', purpose: 'ਸ਼ਾਮ ਦੀ ਪੂਜਾ ਵੇਲੇ ਕਥਾ ਪੜ੍ਹਨ ਅਤੇ ਸੁਣਨ ਲਈ।' },
      'roli-akshat': { name: 'ਰੋਲੀ (ਕੁਮਕੁਮ) ਅਤੇ ਸਾਬਤ ਚੌਲ (ਅਕਸ਼ਤ)', purpose: 'ਤਿਲਕ ਲਗਾਉਣ ਲਈ।' },
      'wheat-grains': { name: 'ਕਣਕ ਦੇ 13 ਦਾਣੇ', purpose: 'ਕਥਾ ਸੁਣਦੇ ਸਮੇਂ ਹੱਥ ਵਿੱਚ ਰੱਖਣ ਲਈ।' },
      'mauli-thread': { name: 'ਪਵਿੱਤਰ ਲਾਲ ਮੌਲੀ / ਖੰਮਣੀ', purpose: 'ਕਰਵੇ ਦੇ ਗਲ ਅਤੇ ਗੁੱਟ ਤੇ ਬੰਨ੍ਹਣ ਲਈ।' },
      'seekh-reed': { name: 'ਸੀਖ (ਕਾਂਸ ਦੀ ਤੀਲੀ)', purpose: 'ਰਵਾਇਤੀ ਤੌਰ ਤੇ ਕਰਵੇ ਨਾਲ ਰੱਖਣ ਲਈ।' },
      'marigold-flowers': { name: 'ਗੇਂਦੇ ਅਤੇ ਗੁਲਾਬ ਦੇ ਤਾਜ਼ੇ ਫੁੱਲ', purpose: 'ਪੂਜਾ ਚੌਕੀ ਸਜਾਉਣ ਲਈ।' },
      'sweets-mathri': { name: 'ਮਿਠਾਈ (ਪੇੜਾ/ਬਰਫੀ) ਅਤੇ ਬਿਆਨੇ ਦੀਆਂ ਮੱਠੀਆਂ', purpose: 'ਭੋਗ, ਬਿਆਨਾ ਅਤੇ ਵਰਤ ਖੋਲ੍ਹਣ ਲਈ।' },
      'sindoor-bindi': { name: 'ਸਿੰਦੂਰ, ਬਿੰਦੀ ਅਤੇ ਆਲਤਾ', purpose: 'ਮਾਂ ਪਾਰਵਤੀ ਨੂੰ ਭੇਟ ਕਰਨ ਅਤੇ ਸ਼ਿੰਗਾਰ ਲਈ।' },
      'mehendi-bangles': { name: 'ਮਹਿੰਦੀ ਅਤੇ ਲਾਲ-ਸੁਨਹਿਰੀ ਚੂੜੀਆਂ', purpose: 'ਤਿਉਹਾਰ ਦੀ ਖੁਸ਼ੀ ਅਤੇ ਸੁਹਾਗ ਦੇ ਪ੍ਰਤੀਕ ਵਜੋਂ।' },
      'red-chunri': { name: 'ਲਾਲ ਜਾਂ ਮੈਰੂਨ ਗੋਟਾ-ਪੱਟੀ ਚੁੰਨੀ', purpose: 'ਕਥਾ ਅਤੇ ਚੰਨ ਵੇਖਣ ਸਮੇਂ ਸਿਰ ਤੇ ਲੈਣ ਲਈ।' },
      'water-tumbler': { name: 'ਚਾਂਦੀ ਜਾਂ ਪਿੱਤਲ ਦੇ ਗਿਲਾਸ ਵਿੱਚ ਸਾਫ਼ ਪਾਣੀ', purpose: 'ਪਤੀ ਦੇ ਹੱਥੋਂ ਪਾਣੀ ਪੀ ਕੇ ਵਰਤ ਖੋਲ੍ਹਣ ਲਈ।' },
    },

    sargiCards: [
      {
        badge: '01 · ਦਿਨ ਭਰ ਦੀ ਊਰਜਾ',
        title: 'ਕੇਸਰ ਫੇਨੀ ਅਤੇ ਸੁੱਕੇ ਮੇਵੇ',
        desc: 'ਗਰਮ ਦੁੱਧ ਵਿੱਚ ਬਣੀ ਫੇਨੀ (ਸੇਵੀਆਂ) ਅਤੇ ਭਿੱਜੇ ਹੋਏ ਬਦਾਮ, ਅਖਰੋਟ ਤੇ ਪਿਸਤਾ ਸਾਰਾ ਦਿਨ ਸਰੀਰ ਵਿੱਚ ਤਾਕਤ ਬਣਾਈ ਰੱਖਦੇ ਹਨ।',
      },
      {
        badge: '02 · ਪਾਣੀ ਦੀ ਪੂਰਤੀ',
        title: 'ਨਾਰੀਅਲ ਪਾਣੀ ਅਤੇ ਤਾਜ਼ੇ ਫਲ',
        desc: 'ਅਨਾਰ, ਕੇਲਾ, ਸੇਬ ਅਤੇ ਨਾਰੀਅਲ ਪਾਣੀ ਸੂਰਜ ਚੜ੍ਹਨ ਤੋਂ ਪਹਿਲਾਂ ਸਰੀਰ ਨੂੰ ਤਰੋਤਾਜ਼ਾ ਰੱਖਦੇ ਹਨ। ਸਰਗੀ ਵਿੱਚ ਜ਼ਿਆਦਾ ਨਮਕ ਜਾਂ ਤਲੀਆਂ ਚੀਜ਼ਾਂ ਤੋਂ ਬਚੋ।',
      },
      {
        badge: '03 · ਪਰਿਵਾਰਕ ਪਿਆਰ',
        title: 'ਸ਼ਿੰਗਾਰ ਅਤੇ ਸ਼ਾਮ ਦਾ ਬਿਆਨਾ',
        desc: 'ਸਰਗੀ ਵਿੱਚ ਸੱਸ ਮਾਂ ਦੀਆਂ ਅਸੀਸਾਂ ਅਤੇ ਸ਼ਿੰਗਾਰ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਸ਼ਾਮ ਨੂੰ ਨੂੰਹ ਮੱਠੀਆਂ ਤੇ ਮਿਠਾਈ ਦਾ ਬਿਆਨਾ ਦੇ ਕੇ ਵੱਡਿਆਂ ਦਾ ਸਤਿਕਾਰ ਕਰਦੀ ਹੈ।',
      },
    ],

    stageWord: 'ਪੜਾਅ',
    chhalniControlsHeading: 'ਛਾਨਣੀ ਦਰਸ਼ਨ ਕੰਟਰੋਲ',
    removeChhalniBtn: 'ਛਾਨਣੀ ਹਟਾ ਕੇ ਵੇਖੋ',
    placeChhalniBtn: 'ਛਾਨਣੀ ਵਿੱਚੋਂ ਵੇਖੋ',
    activeInSimulatorBadge: 'ਸਿਮੂਲੇਟਰ ਵਿੱਚ ਸਰਗਰਮ',
    chhalniMoments: [
      {
        tabLabel: '01 · ਦੀਵਾ',
        phase: 'ਪੜਾਅ 01 · ਛਾਨਣੀ ਵਿੱਚ ਦੀਵਾ ਜਗਾਉਣਾ',
        title: 'ਸ਼ਰਧਾ ਦੀ ਲੋਅ ਅਤੇ ਚੰਨ ਦੀ ਠੰਢਕ',
        desc: 'ਚੰਨ ਚੜ੍ਹਨ ਤੇ ਪੂਜਾ ਥਾਲੀ ਵਿੱਚ ਸ਼ੁੱਧ ਘਿਓ ਦਾ ਦੀਵਾ ਜਗਾ ਕੇ ਛਾਨਣੀ ਵਿੱਚ ਰੱਖੋ ਅਤੇ ਸਿਰ ਤੇ ਲਾਲ ਚੁੰਨੀ ਲਓ।',
      },
      {
        tabLabel: '02 · ਚੰਨ ਦਰਸ਼ਨ',
        phase: 'ਪੜਾਅ 02 · ਛਾਨਣੀ ਰਾਹੀਂ ਚੰਨ ਵੇਖਣਾ',
        title: 'ਅਸੀਸਾਂ ਨੂੰ ਸੌ ਗੁਣਾ ਵਧਾਉਣਾ',
        desc: 'ਛਾਨਣੀ ਨੂੰ ਅੱਖਾਂ ਸਾਹਮਣੇ ਚੁੱਕ ਕੇ ਚੰਦਰ ਦੇਵ ਦੇ ਦਰਸ਼ਨ ਕਰੋ ਅਤੇ ਪਰਿਵਾਰ ਦੀ ਸੁੱਖ-ਸ਼ਾਂਤੀ ਮੰਗੋ।',
      },
      {
        tabLabel: '03 · ਅਰਘ',
        phase: 'ਪੜਾਅ 03 · ਪਵਿੱਤਰ ਜਲ ਦਾ ਅਰਘ',
        title: 'ਮਿੱਟੀ ਦੇ ਕਰਵੇ ਤੋਂ ਚੰਨ ਨੂੰ ਅਰਘ',
        desc: 'ਮਿੱਟੀ ਦੇ ਕਰਵੇ ਵਿੱਚੋਂ ਹੌਲੀ-ਹੌਲੀ ਪਾਣੀ ਪਾ ਕੇ ਚੰਨ ਨੂੰ ਅਰਘ ਭੇਟ ਕਰੋ।',
      },
      {
        tabLabel: '04 · ਪਾਰਣ',
        phase: 'ਪੜਾਅ 04 · ਜੀਵਨ ਸਾਥੀ ਦਰਸ਼ਨ ਅਤੇ ਪਾਰਣ',
        title: 'ਪਾਣੀ ਦਾ ਪਹਿਲਾ ਘੁੱਟ ਅਤੇ ਮਿੱਠਾ',
        desc: 'ਦੀਵੇ ਵਾਲੀ ਛਾਨਣੀ ਵਿੱਚੋਂ ਆਪਣੇ ਪਤੀ ਦਾ ਚਿਹਰਾ ਵੇਖੋ, ਤਿਲਕ ਲਗਾਓ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਹੱਥੋਂ ਪਾਣੀ ਤੇ ਮਿਠਾਈ ਲੈ ਕੇ ਵਰਤ ਖੋਲ੍ਹੋ।',
      },
    ],

    studioSubheading: 'ਸੱਜੇ ਪਾਸੇ ਦਿੱਤੇ 7 ਬਕਸਿਆਂ ਵਿੱਚ ਕਾਰਡ ਦੀ ਹਰ ਲਾਈਨ ਬਦਲੋ ਅਤੇ ਹੇਠਾਂ ਦਿੱਤੇ ਬਟਨਾਂ ਨਾਲ ਡਾਊਨਲੋਡ ਜਾਂ ਸ਼ੇਅਰ ਕਰੋ।',
    cardFormatLabel: 'ਕਾਰਡ ਦਾ ਆਕਾਰ:',
    horizontalBtn: 'ਲੇਟਵਾਂ',
    verticalBtn: 'ਖੜ੍ਹਵਾਂ',
    cardPaletteLabel: 'ਕਾਰਡ ਦਾ ਰੰਗ ਥੀਮ:',
    themeNames: {
      'crimson-zari': 'ਸ਼ਾਹੀ ਮੈਰੂਨ ਅਤੇ ਜ਼ਰੀ ਗੋਲਡ',
      'ivory-pichwai': 'ਪਵਿੱਤਰ ਆਈਵਰੀ ਅਤੇ ਪਿਛਵਾਈ ਗੋਲਡ',
      'moonlit-sandstone': 'ਚਾਨਣੀ ਸੈਂਡਸਟੋਨ ਅਤੇ ਅੰਬਰ',
    },
    rowLabels: [
      'ਲਾਈਨ 1 · ਉੱਪਰਲਾ ਸਿਰਲੇਖ',
      'ਲਾਈਨ 2 · ਸੰਬੋਧਨ ਅਤੇ ਪਿਆਰੇ ਦਾ ਨਾਮ',
      'ਲਾਈਨ 3 · ਕਾਰਡ ਦਾ ਮੁੱਖ ਸਿਰਲੇਖ',
      'ਲਾਈਨ 4 · ਮੁੱਖ ਵਧਾਈ ਸੰਦੇਸ਼',
      'ਲਾਈਨ 5 · ਸਮਾਪਤੀ ਅਸੀਸ ਲਾਈਨ',
      'ਲਾਈਨ 6 · ਭੇਜਣ ਵਾਲੇ ਦਾ ਨਾਮ',
      'ਲਾਈਨ 7 · ਹੇਠਲੀ ਤਾਰੀਖ / ਤਿਉਹਾਰ ਲਾਈਨ',
    ],
    curatedWishesHeading: 'ਚੋਣਵੀਆਂ ਕਰਵਾ ਚੌਥ ਵਧਾਈਆਂ (ਕਿਸੇ ਵੀ ਕਾਰਡ ਦੀ ਹਰ ਲਾਈਨ ਬਦਲੋ)',
    curatedWishesSubheading: 'ਤੁਸੀਂ ਹੇਠਾਂ ਕਿਸੇ ਵੀ ਕਾਰਡ ਦੀ ਹਰ ਲਾਈਨ ਬਦਲ ਸਕਦੇ ਹੋ ਜਾਂ ਕਾਰਡ ਸਟੂਡੀਓ ਵਿੱਚ ਖੋਲ੍ਹ ਸਕਦੇ ਹੋ।',
    wishFilterTabs: {
      all: 'ਸਭ',
      wife: 'ਪਤਨੀ ਲਈ',
      husband: 'ਪਤੀ ਲਈ',
      mother: 'ਸੱਸ ਮਾਂ ਲਈ',
      poetic: 'ਕਾਵਿਕ ਅਤੇ ਰਵਾਇਤੀ',
      traditional: 'ਸ਼ੁਭ ਅਸੀਸਾਂ',
    },
    editAllRowsBtn: 'ਸਾਰੀਆਂ ਲਾਈਨਾਂ ਬਦਲੋ',
    doneEditingBtn: 'ਸੰਪਾਦਨ ਪੂਰਾ',
    saveRowsBtn: 'ਸੇਵ ਕਰੋ',
    copyWishBtn: 'ਵਧਾਈ ਕਾਪੀ ਕਰੋ',
    openInStudioBtn: 'ਕਾਰਡ ਸਟੂਡੀਓ ਵਿੱਚ ਖੋਲ੍ਹੋ',
    wishesList: [
      {
        id: 'wish-1',
        categoryKey: 'wife',
        category: 'ਪਤਨੀ ਲਈ',
        headerLine: 'ਪਿਆਰ, ਸਮਰਪਣ ਅਤੇ ਅਟੁੱਟ ਸਾਥ ਦਾ ਪਵਿੱਤਰ ਤਿਉਹਾਰ',
        greetingLine: 'ਮੇਰੀ ਪਿਆਰੀ ਪਤਨੀ ਅਤੇ ਜੀਵਨ ਸਾਥਣ,',
        title: 'ਸਾਡੇ ਘਰ ਦੀ ਰੌਣਕ ਅਤੇ ਮੇਰੇ ਦਿਲ ਦੀ ਧੜਕਣ',
        message: 'ਅੱਜ ਰਾਤ ਜਦੋਂ ਚੌਥ ਦਾ ਚੰਨ ਤੁਹਾਡੀ ਛਾਨਣੀ ਅਤੇ ਦੀਵੇ ਦੀ ਲੋਅ ਨਾਲ ਚਮਕਦਾ ਹੈ, ਮੈਂ ਸਾਡੇ ਘਰ ਨੂੰ ਪਿਆਰ ਨਾਲ ਭਰਨ ਲਈ ਤੁਹਾਡਾ ਦਿਲੋਂ ਧੰਨਵਾਦ ਕਰਦਾ ਹਾਂ।',
        closing: 'ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ, ਮੇਰੇ ਪਿਆਰ!',
        signatureLine: 'ਅਥਾਹ ਪਿਆਰ ਸਹਿਤ — ਤੁਹਾਡਾ ਪਤੀ',
        footerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਕੱਤਕ ਚਤੁਰਥੀ',
      },
      {
        id: 'wish-2',
        categoryKey: 'wife',
        category: 'ਪਤਨੀ ਲਈ',
        headerLine: 'ਆਪਸੀ ਪਿਆਰ ਅਤੇ ਵਿਸ਼ਵਾਸ ਦਾ ਪਵਿੱਤਰ ਬੰਧਨ',
        greetingLine: 'ਮੇਰੀ ਪਿਆਰੀ ਹਮਸਫ਼ਰ,',
        title: 'ਪਿਆਰ, ਵਿਸ਼ਵਾਸ ਅਤੇ ਸਮਰਪਣ ਦਾ ਅਟੁੱਟ ਸਾਥ',
        message: 'ਅੱਜ ਮੈਂ ਵੀ ਤੁਹਾਡੇ ਨਾਲ ਇਹ ਵਰਤ ਰੱਖ ਰਿਹਾ ਹਾਂ ਤਾਂ ਜੋ ਤੁਹਾਡੇ ਪਿਆਰ ਅਤੇ ਸਮਰਪਣ ਦਾ ਸਤਿਕਾਰ ਕਰ ਸਕਾਂ। ਮਾਂ ਪਾਰਵਤੀ ਤੇ ਭਗਵਾਨ ਸ਼ਿਵ ਸਾਡੀ ਜੋੜੀ ਸਲਾਮਤ ਰੱਖਣ।',
        closing: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਦਿਲੋਂ ਮੁਬਾਰਕਾਂ!',
        signatureLine: 'ਹਮੇਸ਼ਾ ਤੁਹਾਡੇ ਨਾਲ — ਤੁਹਾਡਾ ਜੀਵਨ ਸਾਥੀ',
        footerLine: 'ਮੰਗਲਮਈ ਕਰਵਾ ਚੌਥ · ਅਟੁੱਟ ਸਾਥ',
      },
      {
        id: 'wish-3',
        categoryKey: 'husband',
        category: 'ਪਤੀ ਲਈ',
        headerLine: 'ਅਟੁੱਟ ਪਿਆਰ ਅਤੇ ਲੰਮੀ ਉਮਰ ਦੀ ਅਰਦਾਸ ਦਾ ਵਰਤ',
        greetingLine: 'ਮੇਰੇ ਪਿਆਰੇ ਪਤੀ ਦੇਵ,',
        title: 'ਮੇਰੀ ਤਾਕਤ ਅਤੇ ਜਨਮ-ਜਨਮ ਦੇ ਹਮਸਫ਼ਰ',
        message: 'ਸਵੇਰ ਦੀ ਸਰਗੀ ਦੇ ਦੀਵੇ ਤੋਂ ਲੈ ਕੇ ਰਾਤ ਦੇ ਚੰਨ ਤੱਕ, ਮੇਰੇ ਦਿਲ ਦੀ ਹਰ ਅਰਦਾਸ ਤੁਹਾਡੀ ਚੰਗੀ ਸਿਹਤ, ਖੁਸ਼ੀ ਅਤੇ ਸਾਡੇ ਅਟੁੱਟ ਸਾਥ ਲਈ ਹੈ।',
        closing: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ, ਮੇਰੇ ਪਿਆਰੇ ਜੀਵਨ ਸਾਥੀ!',
        signatureLine: 'ਪੂਰੇ ਦਿਲੋਂ ਪਿਆਰ ਸਹਿਤ — ਤੁਹਾਡੀ ਪਤਨੀ',
        footerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਚੰਨ ਚੜ੍ਹਨ ਦੀਆਂ ਅਸੀਸਾਂ',
      },
      {
        id: 'wish-4',
        categoryKey: 'husband',
        category: 'ਪਤੀ ਲਈ',
        headerLine: 'ਤੁਹਾਡੀ ਸਿਹਤ ਅਤੇ ਖੁਸ਼ਹਾਲੀ ਲਈ ਅਰਦਾਸ',
        greetingLine: 'ਮੇਰੇ ਪਿਆਰੇ ਜੀਵਨ ਸਾਥੀ, ਮੇਰਾ ਮਾਣ,',
        title: 'ਮੇਰੇ ਦਿਲ ਦੀ ਹਰ ਅਰਦਾਸ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਲਈ',
        message: 'ਛਾਨਣੀ ਵਿੱਚ ਜਗਦੇ ਦੀਵੇ ਦੀ ਲੋਅ ਵਿੱਚ ਚੰਨ ਅਤੇ ਫਿਰ ਤੁਹਾਡਾ ਮੁਸਕਰਾਉਂਦਾ ਚਿਹਰਾ ਵੇਖਣਾ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਦਾ ਸਭ ਤੋਂ ਖੂਬਸੂਰਤ ਪਲ ਹੈ। ਚੌਥ ਮਾਤਾ ਤੁਹਾਨੂੰ ਹਮੇਸ਼ਾ ਚੜ੍ਹਦੀ ਕਲਾ ਵਿੱਚ ਰੱਖਣ।',
        closing: 'ਹਰ ਜਨਮ ਵਿੱਚ ਤੁਹਾਡਾ ਹੀ ਸਾਥ ਮਿਲੇ — ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ!',
        signatureLine: 'ਹਮੇਸ਼ਾ ਤੁਹਾਡੀ — ਤੁਹਾਡੀ ਜੀਵਨ ਸਾਥਣ',
        footerLine: 'ਪਵਿੱਤਰ ਕਰਵਾ ਚੌਥ · ਜਨਮਾਂ ਦਾ ਸਾਥ',
      },
      {
        id: 'wish-5',
        categoryKey: 'mother',
        category: 'ਸੱਸ ਮਾਂ ਲਈ',
        headerLine: 'ਪਵਿੱਤਰ ਸਰਗੀ ਅਤੇ ਵੱਡਿਆਂ ਦੀਆਂ ਅਸੀਸਾਂ',
        greetingLine: 'ਸਤਿਕਾਰਯੋਗ ਅਤੇ ਪਿਆਰੇ ਸੱਸ ਮਾਂ ਜੀ,',
        title: 'ਸਰਗੀ ਦੀਆਂ ਅਸੀਸਾਂ ਅਤੇ ਮਾਂ ਵਰਗੇ ਪਿਆਰ ਲਈ ਧੰਨਵਾਦ',
        message: 'ਪਿਆਰੇ ਮਾਂ ਜੀ, ਸਰਗੀ ਦੀ ਥਾਲੀ ਵਿੱਚ ਪਰੋਏ ਤੁਹਾਡੇ ਪਿਆਰ ਅਤੇ ਅਸੀਸਾਂ ਲਈ ਕੋਟਿ-ਕੋਟਿ ਪ੍ਰਣਾਮ। ਤੁਹਾਡਾ ਆਸ਼ੀਰਵਾਦ ਸਾਡੇ ਪਰਿਵਾਰ ਤੇ ਹਮੇਸ਼ਾ ਬਣਿਆ ਰਹੇ।',
        closing: 'ਪੈਰੀਂ ਹੱਥ ਤੇ ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ, ਮਾਂ ਜੀ।',
        signatureLine: 'ਸਤਿਕਾਰ ਅਤੇ ਪਿਆਰ ਸਹਿਤ — ਤੁਹਾਡੀ ਨੂੰਹ',
        footerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਪਰਿਵਾਰਕ ਅਸੀਸਾਂ',
      },
      {
        id: 'wish-6',
        categoryKey: 'mother',
        category: 'ਸੱਸ ਮਾਂ ਲਈ',
        headerLine: 'ਪਰਿਵਾਰਕ ਸੰਸਕਾਰ ਅਤੇ ਮਾਂ ਦਾ ਸਤਿਕਾਰ',
        greetingLine: 'ਆਦਰਯੋਗ ਅਤੇ ਮਮਤਾਮਈ ਮਾਂ ਜੀ,',
        title: 'ਤੁਹਾਡੀਆਂ ਅਸੀਸਾਂ ਹੀ ਸਾਡੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤਾਕਤ ਹਨ',
        message: 'ਤੁਹਾਡਾ ਪਿਆਰ, ਸੰਸਕਾਰ ਅਤੇ ਅਸੀਸਾਂ ਸਾਡੇ ਘਰ ਦੇ ਹਰ ਤਿਉਹਾਰ ਨੂੰ ਰੌਸ਼ਨ ਕਰਦੀਆਂ ਹਨ। ਚੌਥ ਮਾਤਾ ਅੱਗੇ ਤੁਹਾਡੀ ਚੰਗੀ ਸਿਹਤ ਅਤੇ ਲੰਮੀ ਉਮਰ ਦੀ ਅਰਦਾਸ ਕਰਦੀ ਹਾਂ।',
        closing: 'ਨਿੱਘਾ ਪ੍ਰਣਾਮ ਅਤੇ ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ, ਮਾਂ ਜੀ।',
        signatureLine: 'ਦਿਲੋਂ ਸ਼ੁਕਰਾਨੇ ਸਹਿਤ — ਤੁਹਾਡੀ ਨੂੰਹ ਅਤੇ ਪਰਿਵਾਰ',
        footerLine: 'ਮੰਗਲਮਈ ਕਰਵਾ ਚੌਥ · ਸਤਿਕਾਰ ਤੇ ਪਿਆਰ',
      },
      {
        id: 'wish-7',
        categoryKey: 'poetic',
        category: 'ਕਾਵਿਕ ਅਤੇ ਰਵਾਇਤੀ',
        headerLine: 'ਪਵਿੱਤਰ ਚੰਨ ਤੇ ਮਿੱਟੀ ਦੇ ਦੀਵੇ ਦੀ ਲੋਅ',
        greetingLine: 'ਕੱਤਕ ਦੀ ਚਾਨਣੀ ਰਾਤ ਅਤੇ ਮੰਗਲ ਦੀਵਾ,',
        title: 'ਸ਼ਰਧਾ, ਪਿਆਰ ਅਤੇ ਪਵਿੱਤਰ ਰੌਸ਼ਨੀ ਦਾ ਸੰਗਮ',
        message: 'ਕਰਵਾ ਚੌਥ ਦੇ ਦੀਵੇ ਦੀ ਲੋਅ ਹਰ ਹਨੇਰੇ ਨੂੰ ਦੂਰ ਕਰੇ, ਚੰਦਰ ਦੇਵ ਦੀ ਠੰਢਕ ਮਨ ਨੂੰ ਸ਼ਾਂਤੀ ਦੇਵੇ ਅਤੇ ਚੌਥ ਮਾਤਾ ਤੁਹਾਡੇ ਘਰ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਭਰ ਦੇਣ।',
        closing: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ ਅਤੇ ਚਾਨਣੀ ਰਾਤ ਦੀਆਂ ਮੁਬਾਰਕਾਂ!',
        signatureLine: 'ਕਾਵਿਕ ਨਿੱਘ ਅਤੇ ਪਵਿੱਤਰ ਅਰਦਾਸਾਂ ਸਹਿਤ',
        footerLine: 'ਕੱਤਕ ਕ੍ਰਿਸ਼ਨ ਚਤੁਰਥੀ · ਪਵਿੱਤਰ ਚੰਨ',
      },
      {
        id: 'wish-8',
        categoryKey: 'poetic',
        category: 'ਕਾਵਿਕ ਅਤੇ ਰਵਾਇਤੀ',
        headerLine: 'ਚਾਂਦੀ ਵਰਗੀ ਚਾਨਣੀ ਅਤੇ ਸਿੰਦੂਰ ਦੀ ਲਾਲੀ',
        greetingLine: 'ਚਾਂਦੀ ਵਰਗੀ ਚਾਨਣੀ ਅਤੇ ਸੁਨਹਿਰੀ ਲਾਟ,',
        title: 'ਵਿਸ਼ਵਾਸ ਅਤੇ ਅਮਰ ਪਿਆਰ ਦਾ ਪਵਿੱਤਰ ਤਿਉਹਾਰ',
        message: 'ਛਾਨਣੀ ਵਿੱਚ ਜਗਦੀ ਦੀਵੇ ਦੀ ਲਾਟ ਅਤੇ ਪਤਝੜ ਦੇ ਚੰਨ ਦੀ ਮਿੱਠੀ ਚਾਨਣੀ ਵਾਂਗ ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਪਿਆਰ ਤੇ ਵਿਸ਼ਵਾਸ ਹਮੇਸ਼ਾ ਚਮਕਦਾ ਰਹੇ।',
        closing: 'ਖੁਸ਼ੀਆਂ ਭਰੇ ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਵਧਾਈਆਂ!',
        signatureLine: 'ਰਵਾਇਤੀ ਸਤਿਕਾਰ ਅਤੇ ਸ਼ੁਭਕਾਮਨਾਵਾਂ ਸਹਿਤ',
        footerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਰੌਸ਼ਨੀ ਅਤੇ ਸਦਭਾਵਨਾ',
      },
      {
        id: 'wish-9',
        categoryKey: 'traditional',
        category: 'ਸ਼ੁਭ ਅਸੀਸਾਂ',
        headerLine: 'ਕਰਵਾ ਚੌਥ ਦੇ ਪਵਿੱਤਰ ਤਿਉਹਾਰ ਦੀਆਂ ਵਧਾਈਆਂ',
        greetingLine: 'ਪਵਿੱਤਰ ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਨਿੱਘੀਆਂ ਵਧਾਈਆਂ,',
        title: 'ਖੁਸ਼ੀ, ਸ਼ਾਂਤੀ ਅਤੇ ਅਟੁੱਟ ਪਰਿਵਾਰਕ ਪਿਆਰ',
        message: 'ਚੌਥ ਦਾ ਚੰਨ ਤੁਹਾਡੀ ਜ਼ਿੰਦਗੀ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਅਤੇ ਮਿਠਾਸ ਭਰ ਦੇਵੇ। ਮਹਿੰਦੀ ਦੀ ਖੁਸ਼ਬੂ ਅਤੇ ਪਿਆਰ ਦਾ ਇਹ ਰਿਸ਼ਤਾ ਹਮੇਸ਼ਾ ਮਹਿਕਦਾ ਰਹੇ।',
        closing: 'ਕਰਵਾ ਚੌਥ ਦੀਆਂ ਹਾਰਦਿਕ ਵਧਾਈਆਂ!',
        signatureLine: 'ਸ਼ੁਭਕਾਮਨਾਵਾਂ ਅਤੇ ਤਿਉਹਾਰ ਦੀ ਖੁਸ਼ੀ ਸਹਿਤ',
        footerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਖੁਸ਼ੀ ਅਤੇ ਖੁਸ਼ਹਾਲੀ',
      },
      {
        id: 'wish-10',
        categoryKey: 'traditional',
        category: 'ਸ਼ੁਭ ਅਸੀਸਾਂ',
        headerLine: 'ਮਾਂ ਪਾਰਵਤੀ ਅਤੇ ਭਗਵਾਨ ਸ਼ਿਵ ਦੀਆਂ ਅਸੀਸਾਂ',
        greetingLine: 'ਪਵਿੱਤਰ ਕਰਕ ਚਤੁਰਥੀ ਦੀਆਂ ਸ਼ੁਭਕਾਮਨਾਵਾਂ,',
        title: 'ਚੰਗੀ ਸਿਹਤ, ਖੁਸ਼ਹਾਲੀ ਅਤੇ ਪਵਿੱਤਰ ਅਸੀਸਾਂ',
        message: 'ਕਰਵਾ ਚੌਥ ਦੇ ਇਸ ਸ਼ੁਭ ਦਿਹਾੜੇ ਤੇ ਮਾਂ ਪਾਰਵਤੀ ਅਤੇ ਭਗਵਾਨ ਸ਼ਿਵ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਚੰਗੀ ਸਿਹਤ, ਤਰੱਕੀ ਅਤੇ ਅਟੁੱਟ ਪਿਆਰ ਬਖਸ਼ਣ।',
        closing: 'ਸਾਰੇ ਪਰਿਵਾਰ ਸਮੇਤ ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ!',
        signatureLine: 'ਸ਼ੁਭ ਅਸੀਸਾਂ ਅਤੇ ਨਿੱਘੇ ਸਤਿਕਾਰ ਸਹਿਤ',
        footerLine: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਪਵਿੱਤਰ ਅਸੀਸਾਂ',
      },
    ],

    faqsList: [
      {
        id: 'faq-date',
        question: 'ਭਾਰਤੀ ਪੰਚਾਂਗ ਅਨੁਸਾਰ 2026 ਅਤੇ 2027 ਵਿੱਚ ਕਰਵਾ ਚੌਥ ਕਦੋਂ ਹੈ?',
        answer: '2026 ਵਿੱਚ ਕਰਵਾ ਚੌਥ ਵੀਰਵਾਰ, 29 ਅਕਤੂਬਰ 2026 ਨੂੰ ਹੈ (ਪੂਜਾ ਮੁਹੂਰਤ: ਸ਼ਾਮ 05:38 – 06:56 IST; ਦਿੱਲੀ ਚੰਨ ਚੜ੍ਹਨ ਦਾ ਸਮਾਂ: ਰਾਤ ~08:17 IST)। 2027 ਵਿੱਚ ਇਹ ਸੋਮਵਾਰ, 18 ਅਕਤੂਬਰ 2027 ਨੂੰ ਹੋਵੇਗਾ।',
      },
      {
        id: 'faq-cloudy-moon',
        question: 'ਜੇਕਰ ਬੱਦਲਾਂ ਜਾਂ ਧੁੰਦ ਕਾਰਨ ਚੰਨ ਵਿਖਾਈ ਨਾ ਦੇਵੇ ਤਾਂ ਵਰਤ ਕਿਵੇਂ ਖੋਲ੍ਹਿਆ ਜਾਵੇ?',
        answer: 'ਜੇਕਰ ਤੁਹਾਡੇ ਸ਼ਹਿਰ ਵਿੱਚ ਚੰਨ ਚੜ੍ਹਨ ਦੇ ਸਮੇਂ ਤੋਂ ਬਾਅਦ ਵੀ ਬੱਦਲਾਂ ਕਾਰਨ ਚੰਨ ਨਾ ਦਿੱਸੇ, ਤਾਂ ਚੰਨ ਦੀ ਦਿਸ਼ਾ ਵੱਲ ਮੂੰਹ ਕਰਕੇ ਚੰਦਰ ਦੇਵ ਦਾ ਧਿਆਨ ਧਰ ਕੇ ਜਾਂ ਸ਼ਿਵ ਜੀ ਦੇ ਮੱਥੇ ਦੇ ਚੰਦਰਮਾ ਦੇ ਦਰਸ਼ਨ ਕਰਕੇ ਅਰਘ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।',
      },
      {
        id: 'faq-health',
        question: 'ਕੀ ਗਰਭ ਅਵਸਥਾ ਜਾਂ ਸਿਹਤ ਦੀ ਲੋੜ ਵੇਲੇ ਵਰਤ ਵਿੱਚ ਪਾਣੀ ਅਤੇ ਫਲ ਲਏ ਜਾ ਸਕਦੇ ਹਨ?',
        answer: 'ਹਾਂ, ਧਰਮ ਸ਼ਾਸਤਰਾਂ ਅਨੁਸਾਰ ਸਿਹਤ ਦੀ ਰੱਖਿਆ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਹੈ। ਗਰਭਵਤੀ ਮਾਵਾਂ ਅਤੇ ਦਵਾਈ ਲੈਣ ਵਾਲੇ ਵਿਅਕਤੀ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਨਾਲ ਨਾਰੀਅਲ ਪਾਣੀ, ਦੁੱਧ ਅਤੇ ਫਲ ਲੈ ਕੇ ਵਰਤ ਰੱਖ ਸਕਦੇ ਹਨ।',
      },
      {
        id: 'faq-sargi-meaning',
        question: 'ਜੇਕਰ ਨੂੰਹ ਸੱਸ ਮਾਂ ਤੋਂ ਦੂਰ ਦੂਜੇ ਸ਼ਹਿਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹੋਵੇ ਤਾਂ ਸਰਗੀ ਕਿਵੇਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?',
        answer: 'ਦੂਜੇ ਸ਼ਹਿਰ ਵਿੱਚ ਰਹਿਣ ਤੇ ਇੱਕ ਸ਼ਾਮ ਪਹਿਲਾਂ ਫੋਨ ਤੇ ਸੱਸ ਮਾਂ ਦਾ ਆਸ਼ੀਰਵਾਦ ਲੈ ਕੇ ਸਵੇਰੇ ਘਰ ਵਿੱਚ ਹੀ ਸਰਗੀ ਤਿਆਰ ਕਰਕੇ ਛਕੀ ਜਾਂਦੀ ਹੈ।',
      },
      {
        id: 'faq-chhalni',
        question: 'ਛਾਨਣੀ ਵਿੱਚ ਦੀਵਾ ਰੱਖ ਕੇ ਚੰਨ ਅਤੇ ਪਤੀ ਨੂੰ ਵੇਖਣ ਦਾ ਕੀ ਮਹੱਤਵ ਹੈ?',
        answer: 'ਛਾਨਣੀ ਦੀ ਜਾਲੀ ਚੰਨ ਦੀ ਰੌਸ਼ਨੀ ਨੂੰ ਸੈਂਕੜੇ ਬਿੰਦੂਆਂ ਵਿੱਚ ਵੰਡਦੀ ਹੈ ਜੋ ਨਕਾਰਾਤਮਕਤਾ ਨੂੰ ਦੂਰ ਕਰਕੇ ਅਸੀਸਾਂ ਨੂੰ ਸੌ ਗੁਣਾ ਵਧਾਉਣ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।',
      },
      {
        id: 'faq-couples-fasting',
        question: 'ਕੀ ਪਤੀ ਵੀ ਆਪਣੀ ਪਤਨੀ ਦੇ ਨਾਲ ਕਰਵਾ ਚੌਥ ਦਾ ਵਰਤ ਰੱਖ ਸਕਦੇ ਹਨ?',
        answer: 'ਬਿਲਕੁਲ, ਅੱਜਕੱਲ੍ਹ ਬਹੁਤ ਸਾਰੇ ਪਤੀ ਆਪਣੀ ਪਤਨੀ ਨਾਲ ਪਿਆਰ ਅਤੇ ਸਾਥ ਨਿਭਾਉਣ ਲਈ ਇਕੱਠੇ ਵਰਤ ਰੱਖਦੇ ਹਨ।',
      },
    ],

    footerBlessing: 'ਕੱਤਕ ਚਤੁਰਥੀ ਦੇ ਚੰਨ ਦੀ ਚਾਨਣੀ ਅਤੇ ਮਿੱਟੀ ਦੇ ਦੀਵੇ ਦੀ ਪਵਿੱਤਰ ਲੋਅ ਤੁਹਾਡੇ ਘਰ ਨੂੰ ਪਿਆਰ, ਸ਼ਾਂਤੀ ਅਤੇ ਖੁਸ਼ੀਆਂ ਨਾਲ ਭਰ ਦੇਵੇ।',
    footerCulturalNote: 'ਸੱਭਿਆਚਾਰਕ ਨੋਟ: ਇੱਥੇ ਦਿੱਤੀ ਗਈ ਪੂਜਾ ਵਿਧੀ ਅਤੇ ਪੰਚਾਂਗ ਸਮਾਂ ਰਵਾਇਤੀ ਜਾਣਕਾਰੀ ਲਈ ਹਨ। ਹਮੇਸ਼ਾ ਆਪਣੀ ਸਿਹਤ ਨੂੰ ਪਹਿਲ ਦਿਓ।',
    footerSectionsHeading: 'ਮੁੱਖ ਭਾਗ',
    footerControlsHeading: 'ਇੰਟਰਐਕਟਿਵ ਕੰਟਰੋਲ',
    returnToTopBtn: '↑ ਪੇਜ ਦੇ ਸਭ ਤੋਂ ਉੱਪਰ ਜਾਓ',
    footerCopyright: 'ਸ਼ੁਭ ਕਰਵਾ ਚੌਥ · ਭਾਰਤੀ ਤਿਉਹਾਰਾਂ ਦੀ ਪਰੰਪਰਾ ਦੇ ਸਤਿਕਾਰ ਵਜੋਂ ਨਿਰਮਿਤ',
    footerVerifiedDates: 'ਪ੍ਰਮਾਣਿਤ ਪੰਚਾਂਗ ਤਾਰੀਖਾਂ: 29 ਅਕਤੂਬਰ 2026 · 18 ਅਕਤੂਬਰ 2027 · 7 ਅਕਤੂਬਰ 2028',
  },

  // ===========================================================================
  // 5. GUJARATI (gu - ગુજરાતી)
  // ===========================================================================
  gu: {
    cityNames: {
      delhi: { city: 'નવી દિલ્હી', region: 'દિલ્હી NCR · ઉત્તર ભારત' },
      mumbai: { city: 'મુંબઈ', region: 'મહારાષ્ટ્ર · પશ્ચિમ ભારત' },
      jaipur: { city: 'જયપુર', region: 'રાજસ્થાન' },
      kolkata: { city: 'કોલકાતા', region: 'પશ્ચિમ બંગાળ · પૂર્વ ભારત' },
      ahmedabad: { city: 'અમદાવાદ', region: 'ગુજરાત · પશ્ચિમ ભારત' },
      bengaluru: { city: 'બેંગલુરુ', region: 'કર્ણાટક · દક્ષિણ ભારત' },
      chandigarh: { city: 'ચંદીગઢ', region: 'પંજાબ અને હરિયાણા' },
      lucknow: { city: 'લખનૌ', region: 'ઉત્તર પ્રદેશ' },
    },
    moonriseTargetPrefix: 'ચંદ્રોદય સમય —',
    localTimeLabel: 'સ્થાનિક સમય',
    regionLabel: 'પ્રદેશ',
    panchangEveningMuhurat: 'સાંજનું પૂજા મુહૂર્ત',
    panchangPradoshWindow: 'પ્રદોષ વ્રત કથા અને આરતી સમય',
    panchangMoonriseSuffix: 'ચંદ્રોદય',
    panchangChhalniArghya: 'ચારણી દર્શન અને ચંદ્ર અર્ઘ્ય',
    panchangVratDuration: 'વ્રત ઉપવાસ સમયગાળો',
    panchangSunriseToMoonrise: 'સૂર્યોદય સંકલ્પથી ચંદ્રોદય સુધી',
    panchangTithiWindow: 'ચતુર્થી તિથિ સમય',
    panchangBegins: 'શરૂઆત',
    panchangEnds: 'સમાપ્ત',

    stepPrefix: 'ચરણ',
    stageOfSix: '/ 06',
    ritualProcedureHeading: 'પૂજા વિધિ અને નિયમો',
    sacredMantraHeading: 'પવિત્ર મંત્ર અને સંકલ્પ શ્લોક',
    copyMantraBtn: 'મંત્ર કોપી કરો',
    copiedLabel: 'કોપી થઈ ગયું!',
    meaningLabel: 'અર્થ:',
    kathaBoxTitle: 'પરંપરાગત કરવા ચોથ વ્રત કથા (રાણી વીરાવતીની કથા)',
    readFullKathaBtn: 'સંપૂર્ણ વ્રત કથા વાંચો',
    hideFullKathaBtn: 'વ્રત કથા છુપાવો',
    kathaStoryLead: 'રાણી વીરાવતીની પવિત્ર વ્રત કથા:',
    kathaStoryPara1:
      'પ્રાચીન કાળમાં સાત ભાઈઓની લાડકી બહેન વીરાવતીએ પિયરમાં પોતાનું પહેલું કરવા ચોથનું વ્રત રાખ્યું. સાંજે તરસથી વ્યાકુળ બહેનને જોઈને ભાઈઓએ પીપળાના ઝાડ પાછળ દીવાથી કૃત્રિમ ચંદ્રનો પ્રકાશ બતાવી વ્રત ખોલાવ્યું.',
    kathaStoryPara2:
      'ત્યારબાદ તેમના પતિ ગંભીર રીતે બીમાર પડ્યા. મા પાર્વતી (ચોથ માતા)ના આશીર્વાદ અને માર્ગદર્શનથી વીરાવતીએ પૂર્ણ શ્રદ્ધા અને નિયમથી ફરી વ્રત કર્યું, જેનાથી તેમના પતિને ઉત્તમ સ્વાસ્થ્ય અને દીર્ઘાયુ પ્રાપ્ત થયા.',
    kathaPrayer:
      '“હે ચોથ માતા! જેમ તમે રાણી વીરાવતીનું સૌભાગ્ય અને પરિવાર સુરક્ષિત રાખ્યું, તેમ સૌના ઘર-પરિવારમાં સુખ, સ્વાસ્થ્ય અને પ્રેમ જાળવી રાખજો.”',
    culturalNoteLabel: 'પરંપરા અને સ્વાસ્થ્ય નોંધ:',
    prevStageBtn: '← પાછલું ચરણ',
    nextStageBtn: 'આગળનું ચરણ →',
    vidhiSteps: [
      {
        stepNumber: '01',
        title: 'વહેલી સવારની સરગી અને વ્રત સંકલ્પ',
        sanskritTitle: 'પ્રાતઃકાળ સરગી અને વ્રત સંકલ્પ',
        timingWindow: 'બ્રહ્મ મુહૂર્ત · સવારે 04:30 – 06:00',
        summary: 'સૂર્યોદય પહેલાં ઊઠીને સ્નાન કરો, વડીલોના આશીર્વાદથી સરગી ગ્રહણ કરો અને સૂર્યોદય પહેલાં વ્રતનો સંકલ્પ લો.',
        detailedInstructions: [
          'બ્રહ્મ મુહૂર્તમાં ઊઠીને સ્નાન કરી શુભ વસ્ત્રો ધારણ કરો.',
          'સાસુમા દ્વારા આપવામાં આવેલી સરગી (ફેની, સૂકા મેવા, તાજા ફળો અને નાળિયેર પાણી) ગ્રહણ કરો.',
          'સૂર્યોદય પહેલાં જમણા હાથમાં જળ, ચોખા અને પુષ્પ લઈને વ્રતનો સંકલ્પ લો.',
        ],
        sacredMantra: {
          devanagari: 'મમ સુખસૌભાગ્ય પુત્રપૌત્રાદિ સુસ્થિર શ્રીપ્રાપ્તયે કરકચતુર્થી વ્રતમહં કરિષ્યે।',
          transliteration: 'મમ સુખસૌભાગ્ય પુત્રપૌત્રાદિ સુસ્થિર શ્રીપ્રાપ્તયે કરકચતુર્થી વ્રતમહં કરિષ્યે।',
          meaning: 'મારા પરિવારના સુખ, સૌભાગ્ય, ઉત્તમ સ્વાસ્થ્ય અને સમૃદ્ધિ માટે હું આ પવિત્ર કરક ચતુર્થી વ્રત કરું છું.',
        },
        culturalNote: 'ગર્ભાવસ્થા કે સ્વાસ્થ્યની જરૂરિયાત હોય ત્યારે જળ અને ફળ લઈને વ્રત કરવું ધર્મસંમત છે.',
      },
      {
        stepNumber: '02',
        title: 'પૂજા બાજોઠ અને કરવા સ્થાપના',
        sanskritTitle: 'પૂજા બાજોઠ અને કરક સ્થાપના',
        timingWindow: 'બપોર પછી · 04:00 – 05:15',
        summary: 'બાજોઠ પર લાલ વસ્ત્ર પાથરી મા પાર્વતી અને શિવ પરિવારની સ્થાપના કરો અને માટી કે પિત્તળનો કરવો તૈયાર કરો.',
        detailedInstructions: [
          'પૂજા સ્થાનને ગંગાજળથી પવિત્ર કરો.',
          'બાજોઠ પર લાલ વસ્ત્ર પાથરી ચોથ માતા અને શિવ પરિવારની છબી સ્થાપિત કરો.',
          'કરવા પર નાડાછડી બાંધો, કંકુથી સ્વસ્તિક બનાવો, તેમાં સ્વચ્છ જળ ભરો અને ઢાંકણ પર ઘઉં અને સાકર મૂકો.',
        ],
        culturalNote: 'માટીનો કરવો ધરતી માતા, સમૃદ્ધિ અને જીવનદાયી જળનું પ્રતીક છે.',
      },
      {
        stepNumber: '03',
        title: 'સોળ શણગાર અને બાયણાની તૈયારી',
        sanskritTitle: 'સોળ શણગાર અને બાયણાની તૈયારી',
        timingWindow: 'સાંજ પહેલાં · 05:00 – 05:35',
        summary: 'પરંપરાગત લાલ કે મરૂન સાડી/ચણિયાચોળીમાં સોળ શણગાર સજો અને સાસુમા માટે મીઠાઈ અને મઠરીનું બાયણું તૈયાર કરો.',
        detailedInstructions: [
          'મંગળ વસ્ત્રો સાથે મહેંદી, સિંદૂર, ચાંદલો, મંગળસૂત્ર અને બંગડીઓ ધારણ કરો.',
          'સાસુમાના સન્માન માટે મઠરી, મીઠાઈ, સૂકા મેવા અને શણગારથી બાયણાની થાળી તૈયાર કરો.',
          'પૂજા થાળીમાં કંકુ, ચોખા, સિંદૂર, શુદ્ધ ઘીનો દીવો, અગરબત્તી, ફૂલ અને મીઠાઈ ગોઠવો.',
        ],
        culturalNote: 'સોળ શણગાર નારી ગરિમા, સૌભાગ્ય અને મા પાર્વતીની શક્તિનું પ્રતીક છે.',
      },
      {
        stepNumber: '04',
        title: 'સાંજનું પૂજા મુહૂર્ત અને વ્રત કથા શ્રવણ',
        sanskritTitle: 'સાયંકાળ પૂજા અને વ્રત કથા શ્રવણ',
        timingWindow: 'સાંજનું મુહૂર્ત · 05:38 – 06:56',
        summary: 'પ્રદોષ મુહૂર્તમાં શ્રી ગણેશ અને ચોથ માતાનું પૂજન કરો, જમણા હાથમાં ઘઉંના 13 દાણા લઈને વ્રત કથા સાંભળો અને આરતી કરો.',
        detailedInstructions: [
          'સૌપ્રથમ શ્રી ગણેશજીનું પૂજન કરો.',
          'ચોથ માતા અને શિવ પરિવારને કંકુ, ચોખા, સિંદૂર, ફૂલ અને નૈવેદ્ય અર્પણ કરો.',
          'જમણા હાથમાં ઘઉંના 13 દાણા લઈને શ્રદ્ધાપૂર્વક કરવા ચોથની વ્રત કથા સાંભળો.',
        ],
        sacredMantra: {
          devanagari: 'ૐ શિવાયૈ નમઃ · ૐ નમઃ શિવાય · ૐ ષણ્મુખાય નમઃ · ૐ સોમાય નમઃ।',
          transliteration: 'ૐ શિવાયૈ નમઃ · ૐ નમઃ શિવાય · ૐ ષણ્મુખાય નમઃ · ૐ સોમાય નમઃ।',
          meaning: 'મા પાર્વતી, ભગવાન શિવ, સ્વામી કાર્તિકેય અને ચંદ્ર દેવને કોટિ-કોટિ વંદન.',
        },
        culturalNote: 'કથા અને આરતી પછી સાસુમાને બાયણું અર્પણ કરી તેમના આશીર્વાદ લો.',
      },
      {
        stepNumber: '05',
        title: 'ચંદ્રોદય દર્શન, ચારણી વિધિ અને અર્ઘ્ય',
        sanskritTitle: 'ચંદ્રોદય દર્શન, ચારણી વિધિ અને અર્ઘ્ય',
        timingWindow: 'ચંદ્રોદય સમયે · રાત્રે ~08:17',
        summary: 'ચંદ્ર ઉદય થતાં ચારણીમાં પ્રગટાવેલો દીવો મૂકી ચંદ્ર દેવના દર્શન કરો, કરવાથી જળ અર્ઘ્ય આપો અને ચારણીમાંથી પતિનું મુખ જુઓ.',
        detailedInstructions: [
          'પૂજા થાળી, જળ ભરેલો કરવો અને ચારણી લઈને અગાસી કે આંગણામાં જાઓ.',
          'ચારણીમાં ઘીનો દીવો મૂકીને ચંદ્ર દેવના દર્શન કરો.',
          'કરવામાંથી ધીમે-ધીમે જળ અર્પણ કરી ચંદ્ર દેવને અર્ઘ્ય આપો.',
          'ત્યારબાદ દીવા સહિત ચારણીમાંથી પતિનું મુખ જુઓ અને તેમના કપાળે તિલક કરો.',
        ],
        sacredMantra: {
          devanagari: 'દેહિ સૌભાગ્યમારોગ્યં દેહિ મે પરમં સુખમ્। રૂપં દેહિ જયં દેહિ યશો દેહિ દ્વિષો જહિ॥',
          transliteration: 'દેહિ સૌભાગ્યમારોગ્યં દેહિ મે પરમં સુખમ્। રૂપં દેહિ જયં દેહિ યશો દેહિ દ્વિષો જહિ॥',
          meaning: 'અમને સૌભાગ્ય, ઉત્તમ આરોગ્ય અને પરમ સુખ પ્રદાન કરો.',
        },
        culturalNote: 'ચારણીમાંથી ચંદ્ર દર્શન નકારાત્મકતા દૂર કરી આશીર્વાદને સો ગણા વધારવાનું પ્રતીક છે.',
      },
      {
        stepNumber: '06',
        title: 'વ્રત પારણા અને સાત્વિક ભોજન',
        sanskritTitle: 'વ્રત પારણા અને સાત્વિક ભોજન',
        timingWindow: 'ચંદ્ર અર્ઘ્ય પછી તરત જ',
        summary: 'પતિના હાથે જળનો પહેલો ઘૂંટડો અને મીઠાઈ લઈને વ્રત ખોલો (પારણા કરો), વડીલોના આશીર્વાદ લો અને પરિવાર સાથે સાત્વિક ભોજન કરો.',
        detailedInstructions: [
          'પતિના હાથે પાણી અને મીઠાઈ લઈને વ્રતના પારણા કરો.',
          'વડીલોના આશીર્વાદ લઈ પરિવાર સાથે પ્રેમપૂર્વક સાત્વિક ભોજનનો આનંદ લો.',
        ],
        culturalNote: 'આજે ઘણા પતિઓ પણ પત્ની સાથે પ્રેમ અને સહભાગિતાથી આ વ્રત રાખે છે.',
      },
    ],

    checkAllBtn: 'બધા પસંદ કરો',
    copyShoppingListBtn: 'યાદી કોપી કરો',
    resetBtn: 'રીસેટ',
    readinessProgressLabel: 'પૂજા થાળી તૈયારી પ્રગતિ',
    itemsReadySuffix: 'સામગ્રી તૈયાર',
    filterAll: 'બધા',
    filterPending: 'બાકી',
    filterCompleted: 'પૂર્ણ',
    categoryLabels: {
      'Sacred Vessels & Altar': 'પવિત્ર પાત્રો અને બાજોઠ',
      'Puja Offerings': 'પૂજા સામગ્રી અને ભોગ',
      'Solah Shringar': 'સોળ શણગાર',
      'Night Moonrise Ritual': 'રાત્રિ ચંદ્રોદય પૂજા',
    },
    essentialBadge: 'અનિવાર્ય',
    optionalBadge: 'પરંપરાગત વૈકલ્પિક',
    addCustomPlaceholder: 'તમારી કૌટુંબિક પૂજા સામગ્રી ઉમેરો...',
    addItemBtn: 'ઉમેરો',
    noItemsMatchText: 'આ વિભાગમાં કોઈ સામગ્રી મળી નથી.',
    showAllSamagriBtn: 'બધી સામગ્રી જુઓ',
    samagriItems: {
      'karwa-pot': { name: 'માટી કે પિત્તળનો કરવો (ઢાંકણ સાથે)', purpose: 'ચંદ્રોદય સમયે ચંદ્ર દેવને જળ અર્ઘ્ય આપવા માટે.' },
      chhalni: { name: 'પૂજાની ચારણી', purpose: 'દીવો મૂકીને ચંદ્ર અને પતિના દર્શન કરવા માટે.' },
      'puja-thali': { name: 'શણગારેલી પિત્તળની પૂજા થાળી', purpose: 'દીવો, કંકુ, ચોખા, સિંદૂર અને મીઠાઈ મૂકવા માટે.' },
      'gaura-idol': { name: 'ચોથ માતા અને શિવ પરિવારની છબી', purpose: 'સાંજની પૂજામાં આરાધના માટે.' },
      'diya-ghee': { name: 'માટીના દીવા, રૂની વાટ અને શુદ્ધ ઘી', purpose: 'આરતી અને ચારણીમાં મૂકી ચંદ્ર દર્શન માટે.' },
      'katha-book': { name: 'કરવા ચોથ વ્રત કથા પુસ્તક', purpose: 'સાંજની પૂજામાં કથા વાંચવા અને સાંભળવા માટે.' },
      'roli-akshat': { name: 'કંકુ (રોલી) અને અક્ષત (આખા ચોખા)', purpose: 'તિલક કરવા માટે.' },
      'wheat-grains': { name: 'ઘઉંના 13 આખા દાણા', purpose: 'કથા સાંભળતી વખતે હાથમાં રાખવા માટે.' },
      'mauli-thread': { name: 'પવિત્ર લાલ નાડાછડી / મૌલી', purpose: 'કરવા પર અને કાંડા પર બાંધવા માટે.' },
      'seekh-reed': { name: 'સીંક (ડાભની સળી)', purpose: 'પરંપરાગત રીતે કરવા સાથે રાખવા માટે.' },
      'marigold-flowers': { name: 'ગલગોટા અને ગુલાબના તાજા ફૂલો', purpose: 'બાજોઠ શણગારવા અને પૂજન માટે.' },
      'sweets-mathri': { name: 'મીઠાઈ (પેંડા/બરફી) અને બાયણાની મઠરી', purpose: 'ભોગ, બાયણું અને પારણા માટે.' },
      'sindoor-bindi': { name: 'સિંદૂર, લાલ ચાંદલો અને અળતો', purpose: 'મા પાર્વતીને અર્પણ કરવા અને શણગાર માટે.' },
      'mehendi-bangles': { name: 'મહેંદી અને લાલ-સોનેરી બંગડીઓ', purpose: 'સૌભાગ્ય અને પર્વના આનંદના પ્રતીક રૂપે.' },
      'red-chunri': { name: 'લાલ કે મરૂન જરી બોર્ડર ચુંદડી', purpose: 'કથા અને ચંદ્ર દર્શન સમયે માથે ઓઢવા માટે.' },
      'water-tumbler': { name: 'ચાંદી કે પિત્તળના પ્યાલામાં સ્વચ્છ જળ', purpose: 'પતિના હાથે પાણી પીને વ્રત ખોલવા માટે.' },
    },

    sargiCards: [
      {
        badge: '01 · દિવસભરની ઊર્જા',
        title: 'કેસર ફેની અને સૂકા મેવા',
        desc: 'ગરમ કેસર-એલચી દૂધમાં બનાવેલી ફેની (સેવૈયા) અને પલાળેલા બદામ, અખરોટ અને પિસ્તા દિવસભર શરીરમાં શક્તિ જાળવી રાખે છે.',
      },
      {
        badge: '02 · જળ સંતુલન અને તાજગી',
        title: 'નાળિયેર પાણી અને તાજા ફળો',
        desc: 'દાડમ, કેળા, સફરજન અને નાળિયેર પાણી સૂર્યોદય પહેલાં શરીરમાં કુદરતી ઇલેક્ટ્રોલાઇટ્સ જાળવી રાખે છે.',
      },
      {
        badge: '03 · કૌટુંબિક સ્નેહ અને સન્માન',
        title: 'શણગાર અને સાંજનું બાયણું',
        desc: 'સરગીની થાળીમાં સાસુમાના આશીર્વાદ અને શણગાર હોય છે, અને સાંજે પુત્રવધૂ મીઠાઈ અને મઠરીનું બાયણું આપી વડીલોનું સન્માન કરે છે.',
      },
    ],

    stageWord: 'ચરણ',
    chhalniControlsHeading: 'ચારણી દર્શન નિયંત્રણ',
    removeChhalniBtn: 'ચારણી હટાવીને જુઓ',
    placeChhalniBtn: 'ચારણીમાંથી જુઓ',
    activeInSimulatorBadge: 'સિમ્યુલેટરમાં સક્રિય',
    chhalniMoments: [
      {
        tabLabel: '01 · દીવો',
        phase: 'ચરણ 01 · ચારણીમાં દીવો પ્રગટાવવો',
        title: 'ભક્તિની જ્યોત અને ચંદ્રની શીતળતાનો સંગમ',
        desc: 'ચંદ્રોદય થતાં પૂજા થાળીમાં શુદ્ધ ઘીનો દીવો પ્રગટાવી ચારણીમાં મૂકો અને માથે લાલ ચુંદડી ઓઢો.',
      },
      {
        tabLabel: '02 · ચંદ્ર દર્શન',
        phase: 'ચરણ 02 · ચારણીથી ચંદ્ર દર્શન',
        title: 'આશીર્વાદને સો ગણા વધારવા',
        desc: 'ચારણીને આંખો સામે ઊંચી કરી તેની જાળીમાંથી ચંદ્ર દેવના દર્શન કરો.',
      },
      {
        tabLabel: '03 · ચંદ્ર અર્ઘ્ય',
        phase: 'ચરણ 03 · પવિત્ર જળ અર્ઘ્ય',
        title: 'માટીના કરવાથી ચંદ્ર અર્ઘ્ય',
        desc: 'માટીના કરવામાંથી ધીમે-ધીમે ચંદ્ર તરફ જળ અર્પણ કરી પરિવારની સુખ-શાંતિ માટે પ્રાર્થના કરો.',
      },
      {
        tabLabel: '04 · પારણા',
        phase: 'ચરણ 04 · જીવનસાથી દર્શન અને પારણા',
        title: 'જળનો પહેલો ઘૂંટડો અને મીઠાઈ',
        desc: 'દીવા સહિત ચારણીમાંથી પતિનું મુખ જુઓ, તિલક કરો અને તેમના હાથે પાણી અને મીઠાઈ લઈને વ્રત ખોલો.',
      },
    ],

    studioSubheading: 'જમણી બાજુના 7 બોક્સમાં કાર્ડની દરેક લાઇન બદલો અને સૌથી નીચે આપેલા બટનથી ડાઉનલોડ કે શેર કરો.',
    cardFormatLabel: 'કાર્ડનો આકાર:',
    horizontalBtn: 'આડું',
    verticalBtn: 'ઊભું',
    cardPaletteLabel: 'કાર્ડનો રંગ થીમ:',
    themeNames: {
      'crimson-zari': 'શાહી મરૂન અને ઝરી ગોલ્ડ',
      'ivory-pichwai': 'પવિત્ર આઇવરી અને પિછવાઈ ગોલ્ડ',
      'moonlit-sandstone': 'ચાંદની સેન્ડસ્ટોન અને અંબર',
    },
    rowLabels: [
      'લાઇન 1 · ઉપરનું શીર્ષક',
      'લાઇન 2 · સંબોધન અને પ્રિયજનનું નામ',
      'લાઇન 3 · કાર્ડનું મુખ્ય શીર્ષક',
      'લાઇન 4 · મુખ્ય શુભેચ્છા સંદેશ',
      'લાઇન 5 · સમાપન આશીર્વાદ લાઇન',
      'લાઇન 6 · મોકલનારનું નામ',
      'લાઇન 7 · નીચેની તારીખ / પર્વ લાઇન',
    ],
    curatedWishesHeading: 'પસંદગીની કરવા ચોથ શુભેચ્છાઓ (કોઈપણ કાર્ડની બધી લાઇન બદલો)',
    curatedWishesSubheading: 'તમે નીચેના કોઈપણ કાર્ડની દરેક લાઇન સીધી બદલી શકો છો અથવા કાર્ડ સ્ટુડિયોમાં ખોલી શકો છો.',
    wishFilterTabs: {
      all: 'બધા',
      wife: 'પત્ની માટે',
      husband: 'પતિ માટે',
      mother: 'સાસુમા માટે',
      poetic: 'કાવ્યાત્મક અને પરંપરાગત',
      traditional: 'મંગલ શુભેચ્છાઓ',
    },
    editAllRowsBtn: 'બધી લાઇન બદલો',
    doneEditingBtn: 'સંપાદન પૂર્ણ',
    saveRowsBtn: 'સેવ કરો',
    copyWishBtn: 'સંદેશ કોપી કરો',
    openInStudioBtn: 'કાર્ડ સ્ટુડિયોમાં ખોલો',
    wishesList: [
      {
        id: 'wish-1',
        categoryKey: 'wife',
        category: 'પત્ની માટે',
        headerLine: 'પ્રેમ, સમર્પણ અને અખંડ સૌભાગ્યનું પર્વ',
        greetingLine: 'મારી વહાલી પત્ની અને અર્ધાંગિની,',
        title: 'આપણા ઘરનો ઉજાસ અને મારા જીવનનો આધાર',
        message: 'આજની આ પવિત્ર રાત્રે દીવાનો પ્રકાશ અને ચંદ્રની શીતળતા આપણા જીવનમાં પ્રેમ, શાંતિ અને અખંડ આનંદ ભરી દે. આપણા ઘરને પ્રેમથી સજાવવા બદલ આભાર.',
        closing: 'કરવા ચોથની હાર્દિક શુભેચ્છાઓ, પ્રિયે!',
        signatureLine: 'અખંડ પ્રેમ સહિત — તારો પતિ',
        footerLine: 'શુભ કરવા ચોથ · કાર્તિક ચતુર્થી',
      },
      {
        id: 'wish-2',
        categoryKey: 'wife',
        category: 'પત્ની માટે',
        headerLine: 'પરસ્પર પ્રેમ અને વિશ્વાસનું પવિત્ર બંધન',
        greetingLine: 'મારી પ્રિય જીવનસંગિની,',
        title: 'પ્રેમ, વિશ્વાસ અને સમર્પણનો અતૂટ સાથ',
        message: 'આજે હું પણ તારી સાથે આ વ્રત રાખી રહ્યો છું—તારા પ્રેમ, ધૈર્ય અને સમર્પણના સન્માનમાં. મા પાર્વતી અને ભગવાન શિવ આપણી જોડી સદા સુખી રાખે.',
        closing: 'શુભ કરવા ચોથ, મારા પ્રેમ!',
        signatureLine: 'સદા તારી સાથે — તારો જીવનસાથી',
        footerLine: 'મંગલમય કરવા ચોથ · અતૂટ સાથ',
      },
      {
        id: 'wish-3',
        categoryKey: 'husband',
        category: 'પતિ માટે',
        headerLine: 'અખંડ સૌભાગ્ય અને અતૂટ પ્રેમનું પવિત્ર વ્રત',
        greetingLine: 'મારા પ્રાણપ્રિય પતિદેવ,',
        title: 'મારી શક્તિ અને જન્મોજન્મના જીવનસાથી',
        message: 'વહેલી સવારની સરગીના દીવાથી લઈને રાત્રિના ચંદ્ર દર્શન સુધી મારા હૃદયની દરેક પ્રાર્થના તમારા ઉત્તમ સ્વાસ્થ્ય અને આપણા અતૂટ સાથ માટે છે.',
        closing: 'શુભ કરવા ચોથ, મારા પ્રિયતમ!',
        signatureLine: 'સંપૂર્ણ સમર્પણ અને પ્રેમ સહિત — તમારી પત્ની',
        footerLine: 'શુભ કરવા ચોથ · ચંદ્રોદય આશીર્વાદ',
      },
      {
        id: 'wish-4',
        categoryKey: 'husband',
        category: 'પતિ માટે',
        headerLine: 'તમારા દીર્ઘાયુ અને સુખ-શાંતિની પ્રાર્થના',
        greetingLine: 'મારા પ્રિય જીવનસાથી, મારું ગૌરવ,',
        title: 'મારા હૃદયની દરેક પ્રાર્થના ફક્ત તમારા માટે',
        message: 'ચારણીમાં પ્રગટેલા દીવાના પ્રકાશમાં ચંદ્ર અને પછી તમારું હસતું મુખ જોવું એ મારા જીવનની સૌથી ધન્ય પળ છે. ચોથ માતા તમને સદા સ્વસ્થ અને સુખી રાખે.',
        closing: 'દરેક જન્મમાં તમારો જ સાથ મળે — શુભ કરવા ચોથ!',
        signatureLine: 'સદા તમારી — તમારી અર્ધાંગિની',
        footerLine: 'પવિત્ર કરવા ચોથ · જન્મોજન્મનો સાથ',
      },
      {
        id: 'wish-5',
        categoryKey: 'mother',
        category: 'સાસુમા માટે',
        headerLine: 'પવિત્ર સરગી અને વડીલોના આશીર્વાદ',
        greetingLine: 'પૂજ્ય અને પ્રેમાળ સાસુમા,',
        title: 'સરગીના આશીર્વાદ અને માતૃસ્નેહ બદલ આભાર',
        message: 'પૂજ્ય બા/મા, સરગીની થાળીમાં વણાયેલા તમારા સ્નેહ અને આશીર્વાદ બદલ કોટિ-કોટિ વંદન. તમારા આશીર્વાદ આપણા પરિવાર પર સદા રહે.',
        closing: 'ચરણ સ્પર્શ અને શુભ કરવા ચોથ, મા.',
        signatureLine: 'આદર અને સ્નેહ સહિત — તમારી પુત્રવધૂ',
        footerLine: 'શુભ કરવા ચોથ · કૌટુંબિક આશીર્વાદ',
      },
      {
        id: 'wish-6',
        categoryKey: 'mother',
        category: 'સાસુમા માટે',
        headerLine: 'કૌટુંબિક સંસ્કાર અને માતૃત્વનું સન્માન',
        greetingLine: 'આદરણીય અને મમતામયી મા,',
        title: 'તમારા આશીર્વાદ જ અમારી સૌથી મોટી શક્તિ છે',
        message: 'તમારા સંસ્કાર, વાત્સલ્ય અને માર્ગદર્શનથી આપણું ઘર દરેક તહેવારે ખીલી ઊઠે છે. ચોથ માતા પાસે તમારા ઉત્તમ સ્વાસ્થ્ય અને દીર્ઘાયુની પ્રાર્થના કરું છું.',
        closing: 'સાદર પ્રણામ અને શુભ કરવા ચોથ, મા.',
        signatureLine: 'હૃદયપૂર્વક આભાર સહિત — તમારી વહુ અને પરિવાર',
        footerLine: 'મંગલમય કરવા ચોથ · આદર અને સ્નેહ',
      },
      {
        id: 'wish-7',
        categoryKey: 'poetic',
        category: 'કાવ્યાત્મક અને પરંપરાગત',
        headerLine: 'પવિત્ર ચંદ્રોદય અને માટીના દીવાની જ્યોત',
        greetingLine: 'શરદની શીતળ ચાંદની અને મંગલ દીવો,',
        title: 'શ્રદ્ધા, પ્રેમ અને પવિત્ર પ્રકાશનો સંગમ',
        message: 'કરવા ચોથના દીવાની પવિત્ર જ્યોત દરેક અંધકાર દૂર કરે, ચંદ્ર દેવની શીતળતા મનને શાંતિ આપે અને ચોથ માતા તમારા ઘરમાં સુખ-સમૃદ્ધિ ભરી દે.',
        closing: 'સપરિવાર શુભ કરવા ચોથ અને શાંત ચાંદની!',
        signatureLine: 'કાવ્યાત્મક સ્નેહ અને મંગલ પ્રાર્થના સહિત',
        footerLine: 'કાર્તિક કૃષ્ણ ચતુર્થી · પવિત્ર ચંદ્રોદય',
      },
      {
        id: 'wish-8',
        categoryKey: 'poetic',
        category: 'કાવ્યાત્મક અને પરંપરાગત',
        headerLine: 'રૂપેરી ચાંદની અને સિંદૂરની શોભા',
        greetingLine: 'રૂપેરી ચાંદની અને સોનેરી જ્યોત,',
        title: 'આસ્થા અને અમર પ્રેમનું પવિત્ર પર્વ',
        message: 'ચારણીની અંદર અડગ પ્રકાશતી જ્યોત અને શરદના ચંદ્રના અમૃત કિરણોની જેમ તમારા જીવનમાં પ્રેમ, વિશ્વાસ અને મધુરતા સદા ઝળહળતી રહે.',
        closing: 'તેજોમય અને મંગલમય કરવા ચોથની શુભેચ્છાઓ!',
        signatureLine: 'પરંપરાગત આદર અને સ્નેહ સહિત',
        footerLine: 'શુભ કરવા ચોથ · પ્રકાશ અને સંવાદિતા',
      },
      {
        id: 'wish-9',
        categoryKey: 'traditional',
        category: 'મંગલ શુભેચ્છાઓ',
        headerLine: 'કરવા ચોથ પર્વની મંગલ શુભેચ્છાઓ',
        greetingLine: 'પવિત્ર કરવા ચોથની હાર્દિક શુભેચ્છાઓ,',
        title: 'સુખ, શાંતિ અને અતૂટ કૌટુંબિક સ્નેહ',
        message: 'ચોથનો ચંદ્ર તમારા જીવનમાં સુખ, શાંતિ અને મધુરતાનો પ્રકાશ પાથરે. મહેંદીની સુગંધ અને પ્રેમનું આ પવિત્ર બંધન સદા ખીલતું રહે.',
        closing: 'કરવા ચોથની હાર્દિક શુભેચ્છાઓ!',
        signatureLine: 'હાર્દિક શુભેચ્છાઓ અને ઉત્સવના આનંદ સહિત',
        footerLine: 'શુભ કરવા ચોથ · સુખ અને સમૃદ્ધિ',
      },
      {
        id: 'wish-10',
        categoryKey: 'traditional',
        category: 'મંગલ શુભેચ્છાઓ',
        headerLine: 'મા પાર્વતી અને ભગવાન શિવના પવિત્ર આશીર્વાદ',
        greetingLine: 'પવિત્ર કરક ચતુર્થીનું મંગલ અભિવાદન,',
        title: 'ઉત્તમ સ્વાસ્થ્ય, સમૃદ્ધિ અને પવિત્ર આશીર્વાદ',
        message: 'કરવા ચોથના આ શુભ અવસરે મા પાર્વતી અને ભગવાન શિવ તમારા પરિવારને ઉત્તમ સ્વાસ્થ્ય, સમૃદ્ધિ અને અતૂટ સ્નેહના આશીર્વાદ પ્રદાન કરે.',
        closing: 'સપરિવાર કરવા ચોથની મંગલમય શુભેચ્છાઓ!',
        signatureLine: 'મંગલ કામનાઓ અને સાદર અભિવાદન સહિત',
        footerLine: 'શુભ કરવા ચોથ · મંગલ આશીર્વાદ',
      },
    ],

    faqsList: [
      {
        id: 'faq-date',
        question: 'ભારતીય પંચાંગ મુજબ 2026 અને 2027 માં કરવા ચોથ ક્યારે છે?',
        answer: '2026 માં કરવા ચોથ ગુરુવાર, 29 ઓક્ટોબર 2026 ના રોજ છે (પૂજા મુહૂર્ત: સાંજે 05:38 – 06:56 IST; દિલ્હી ચંદ્રોદય: રાત્રે ~08:17 IST). 2027 માં તે સોમવાર, 18 ઓક્ટોબર 2027 ના રોજ ઉજવાશે.',
      },
      {
        id: 'faq-cloudy-moon',
        question: 'જો વાદળો કે ધુમ્મસને કારણે ચંદ્ર ન દેખાય તો વ્રત કેવી રીતે પૂર્ણ કરવું?',
        answer: 'જો તમારા શહેરના ચંદ્રોદય સમય પછી પણ વાદળોને કારણે ચંદ્ર ન દેખાય, તો ચંદ્રની દિશામાં મુખ રાખી ચંદ્ર દેવનું ધ્યાન ધરી અથવા ભગવાન શિવના મસ્તક પરના ચંદ્રના દર્શન કરી અર્ઘ્ય આપવામાં આવે છે.',
      },
      {
        id: 'faq-health',
        question: 'શું ગર્ભાવસ્થા કે સ્વાસ્થ્યની સ્થિતિમાં નિર્જળા વ્રતમાં ફેરફાર કરી શકાય?',
        answer: 'હા, હિન્દુ ધર્મશાસ્ત્રો મુજબ સ્વાસ્થ્યની રક્ષા સર્વોપરી છે. ગર્ભવતી મહિલાઓ અને દવા લેતા વ્યક્તિઓ ડોક્ટરની સલાહ મુજબ નાળિયેર પાણી, દૂધ અને ફળ લઈને ફળાહાર વ્રત રાખી શકે છે.',
      },
      {
        id: 'faq-sargi-meaning',
        question: 'જો પુત્રવધૂ સાસુમાથી દૂર બીજા શહેરમાં રહેતી હોય તો સરગીની વિધિ કેવી રીતે કરવી?',
        answer: 'બીજા શહેરમાં રહેતા હોવ ત્યારે વ્રતની আগের સાંજે ફોન પર સાસુમાના આશીર્વાદ લઈ સવારે ઘરે જ સરગી તૈયાર કરીને ગ્રહણ કરવામાં આવે છે.',
      },
      {
        id: 'faq-chhalni',
        question: 'ચારણીમાં દીવો મૂકીને ચંદ્ર અને પતિને જોવાનું શું મહત્વ છે?',
        answer: 'ચારણીની બારીક જાળી ચંદ્રના કિરણોને સેંકડો બિંદુઓમાં વિભાજિત કરે છે, જે મનના દોષો દૂર કરી આશીર્વાદને સો ગણા વધારવાનું પ્રતીક છે.',
      },
      {
        id: 'faq-couples-fasting',
        question: 'શું પતિ પણ પોતાની પત્ની સાથે કરવા ચોથનું વ્રત રાખી શકે છે?',
        answer: 'ચોક્કસ, આજે ઘણા પતિઓ પત્ની પ્રત્યે પ્રેમ અને સહભાગિતા વ્યક્ત કરવા સાથે મળીને વ્રત રાખે છે.',
      },
    ],

    footerBlessing: 'કાર્તિક ચતુર્થીના ચંદ્રની શીતળ ચાંદની અને માટીના દીવાની પવિત્ર જ્યોત તમારા ઘર-પરિવારને પ્રેમ, શાંતિ અને અતૂટ સાથથી ભરી દે.',
    footerCulturalNote: 'સાંસ્કૃતિક નોંધ: અહીં આપેલી પૂજા વિધિ અને પંચાંગ સમય પરંપરાગત સંદર્ભ માટે છે. હંમેશા તમારા સ્વાસ્થ્યને પ્રાથમિકતા આપો.',
    footerSectionsHeading: 'મુખ્ય વિભાગો',
    footerControlsHeading: 'ઇન્ટરેક્ટિવ નિયંત્રણો',
    returnToTopBtn: '↑ પેજની સૌથી ઉપર જાઓ',
    footerCopyright: 'શુભ કરવા ચોથ · ભારતીય ઉત્સવ પરંપરા પ્રત્યે આદર સાથે નિર્મિત',
    footerVerifiedDates: 'પ્રમાણિત પંચાંગ તારીખો: 29 ઓક્ટોબર 2026 · 18 ઓક્ટોબર 2027 · 7 ઓક્ટોબર 2028',
  },

  // ===========================================================================
  // 6. MARATHI (mr - मराठी)
  // ===========================================================================
  mr: {
    cityNames: {
      delhi: { city: 'नवी दिल्ली', region: 'दिल्ली NCR · उत्तर भारत' },
      mumbai: { city: 'मुंबई', region: 'महाराष्ट्र · पश्चिम भारत' },
      jaipur: { city: 'जयपूर', region: 'राजस्थान' },
      kolkata: { city: 'कोलकाता', region: 'पश्चिम बंगाल · पूर्व भारत' },
      ahmedabad: { city: 'अहमदाबाद', region: 'गुजरात · पश्चिम भारत' },
      bengaluru: { city: 'बेंगळुरू', region: 'कर्नाटक · दक्षिण भारत' },
      chandigarh: { city: 'चंदीगड', region: 'पंजाब आणि हरियाणा' },
      lucknow: { city: 'लखनौ', region: 'उत्तर प्रदेश' },
    },
    moonriseTargetPrefix: 'चंद्रोदय वेळ —',
    localTimeLabel: 'स्थानिक वेळ',
    regionLabel: 'प्रदेश',
    panchangEveningMuhurat: 'सायंकाळचा पूजा मुहूर्त',
    panchangPradoshWindow: 'प्रदोष व्रत कथा आणि आरती वेळ',
    panchangMoonriseSuffix: 'चंद्रोदय',
    panchangChhalniArghya: 'चाळणी दर्शन आणि चंद्र अर्घ्य',
    panchangVratDuration: 'व्रत उपवास कालावधी',
    panchangSunriseToMoonrise: 'सूर्योदय संकल्पापासून चंद्रोदयापर्यंत',
    panchangTithiWindow: 'चतुर्थी तिथी वेळ',
    panchangBegins: 'सुरुवात',
    panchangEnds: 'समाप्त',

    stepPrefix: 'टप्पा',
    stageOfSix: '/ ०६',
    ritualProcedureHeading: 'पूजा विधी आणि नियम',
    sacredMantraHeading: 'पावन मंत्र आणि संकल्प श्लोक',
    copyMantraBtn: 'मंत्र कॉपी करा',
    copiedLabel: 'कॉपी झाले!',
    meaningLabel: 'अर्थ:',
    kathaBoxTitle: 'पारंपरिक करवा चौथ व्रत कथा (राणी वीरावतीची कथा)',
    readFullKathaBtn: 'संपूर्ण व्रत कथा वाचा',
    hideFullKathaBtn: 'व्रत कथा लपवा',
    kathaStoryLead: 'राणी वीरावतीची पावन व्रत कथा:',
    kathaStoryPara1:
      'प्राचीन काळी सात भावांची एकुलती एक लाडकी बहीण राजकुमारी वीरावती हिने माहेरी आपले पहिले करवा चौथ व्रत केले. सायंकाळी तहानेने व्याकूळ झालेल्या बहिणीला पाहून भावांनी पिंपळाच्या झाडामागे दिव्याने कृत्रिम चंद्राचा प्रकाश दाखवून तिचा उपवास सोडवला.',
    kathaStoryPara2:
      'त्यानंतर तिचे पती गंभीर आजारी पडले. देवी पार्वतीच्या (चौथ माता) आशीर्वादाने आणि मार्गदर्शनाने वीरावतीने पूर्ण श्रद्धा व नियमाने पुन्हा हे व्रत केले, ज्यामुळे तिच्या पतीला उत्तम आरोग्य आणि दीर्घायुष्य लाभले.',
    kathaPrayer:
      '“हे चौथ माता! जसे आपण राणी वीरावतीचे सौभाग्य आणि कुटुंब सुरक्षित ठेवले, तसेच सर्वांच्या घरात सुख, आरोग्य आणि प्रेम कायम ठेवा.”',
    culturalNoteLabel: 'परंपरा आणि आरोग्य टीप:',
    prevStageBtn: '← मागील टप्पा',
    nextStageBtn: 'पुढील टप्पा →',
    vidhiSteps: [
      {
        stepNumber: '०१',
        title: 'पहाटेची सरगी आणि पावन व्रत संकल्प',
        sanskritTitle: 'पहाटेची सरगी आणि व्रत संकल्प',
        timingWindow: 'ब्रह्म मुहूर्त · पहाटे ०४:३० – ०६:००',
        summary: 'सूर्योदयापूर्वी उठून स्नान करा, मोठ्यांच्या आशीर्वादाने सरगी ग्रहण करा आणि सूर्योदयापूर्वी व्रताचा संकल्प करा.',
        detailedInstructions: [
          'ब्रह्म मुहूर्तावर उठून स्नान करून मंगल वस्त्रे परिधान करा.',
          'सासूबाईंनी दिलेली पारंपरिक सरगी (फेणी/शेवया, सुका मेवा, ताजी फळे आणि नारळ पाणी) ग्रहण करा.',
          'सूर्योदयापूर्वी उजव्या हातात जल, अक्षता आणि फूल घेऊन व्रताचा संकल्प करा.',
        ],
        sacredMantra: {
          devanagari: 'मम सुखसौभाग्य पुत्रपौत्रादि सुस्थिर श्रीप्राप्तये करकचतुर्थी व्रतमहं करिष्ये।',
          transliteration: 'मम सुखसौभाग्य पुत्रपौत्रादि सुस्थिर श्रीप्राप्तये करकचतुर्थी व्रतमहं करिष्ये।',
          meaning: 'माझ्या कुटुंबाच्या सुख, सौभाग्य, उत्तम आरोग्य आणि समृद्धीसाठी मी हे पावन करक चतुर्थी व्रत करत आहे.',
        },
        culturalNote: 'गरोदरपण किंवा आरोग्याची गरज असल्यास पाणी व फळे घेऊन व्रत करणे धर्मसंमत आहे.',
      },
      {
        stepNumber: '०२',
        title: 'पूजा चौरंग आणि करवा स्थापना',
        sanskritTitle: 'पूजा चौरंग आणि करक स्थापना',
        timingWindow: 'दुपारी · ०४:०० – ०५:१५',
        summary: 'चौरंगावर लाल वस्त्र अंथरून देवी पार्वती व शिव परिवाराची स्थापना करा आणि मातीचा किंवा पितळेचा करवा तयार करा.',
        detailedInstructions: [
          'पूजेची जागा गंगाजलाने पवित्र करा.',
          'चौरंगावर लाल वस्त्र अंथरून चौथ माता आणि शिव परिवाराची प्रतिमा स्थापित करा.',
          'करव्याच्या गळ्याभोवती कलावा बांधा, कुंकवाने स्वस्तिक काढा, त्यात स्वच्छ पाणी भरा आणि झाकणावर गहू व साखर ठेवा.',
        ],
        culturalNote: 'मातीचा करवा वसुंधरा, समृद्धी आणि जीवनदायी जलाचे प्रतीक आहे.',
      },
      {
        stepNumber: '०३',
        title: 'सोळा श्रृंगार आणि बायणा तयारी',
        sanskritTitle: 'सोळा श्रृंगार आणि बायणा तयारी',
        timingWindow: 'सायंकाळपूर्वी · ०५:०० – ०५:३५',
        summary: 'पारंपरिक लाल किंवा मरून साडीत सोळा श्रृंगार करा आणि सासूबाईंसाठी मिठाई व मठरीचा बायणा तयार करा.',
        detailedInstructions: [
          'सणाच्या पारंपरिक पोशाखासह मेहंदी, कुंकू, टिकली, मंगळसूत्र आणि बांगड्या परिधान करा.',
          'सासूबाईंच्या सन्मानासाठी मठरी, मिठाई, सुका मेवा आणि श्रृंगार साहित्याचा बायणा तयार करा.',
          'पूजेच्या ताटात कुंकू, अक्षता, शुद्ध तुपाचा दिवा, धूप, झेंडूची फुले आणि मिठाई सजवा.',
        ],
        culturalNote: 'सोळा श्रृंगार स्त्रीची गरिमा, सौभाग्य आणि देवी पार्वतीच्या शक्तीचे प्रतीक आहे.',
      },
      {
        stepNumber: '०४',
        title: 'प्रदोष पूजा मुहूर्त आणि व्रत कथा श्रवण',
        sanskritTitle: 'सायंकाळची पूजा आणि व्रत कथा श्रवण',
        timingWindow: 'सायंकाळचा मुहूर्त · ०५:३८ – ०६:५६',
        summary: 'प्रदोष मुहूर्तावर श्री गणेश आणि चौथ मातेचे पूजन करा, उजव्या हातात गव्हाचे १३ दाणे घेऊन व्रत कथा ऐका आणि आरती करा.',
        detailedInstructions: [
          'सर्वप्रथम विघ्नहर्ता श्री गणेशाचे पूजन करा.',
          'चौथ माता आणि शिव परिवाराला कुंकू, अक्षता, फुले आणि नैवेद्य अर्पण करा.',
          'उजव्या हातात गव्हाचे १३ दाणे घेऊन श्रद्धापूर्वक करवा चौथ व्रत कथा ऐका.',
        ],
        sacredMantra: {
          devanagari: 'ॐ शिवायै नमः। ॐ नमः शिवाय। ॐ षण्मुखाय नमः। ॐ सोमाय नमः।',
          transliteration: 'ॐ शिवायै नमः · ॐ नमः शिवाय · ॐ षण्मुखाय नमः · ॐ सोमाय नमः।',
          meaning: 'देवी पार्वती, भगवान शिव, स्वामी कार्तिकेय आणि चंद्र देवाला साष्टांग नमस्कार.',
        },
        culturalNote: 'कथा आणि आरतीनंतर सासूबाईंना बायणा देऊन त्यांचे आशीर्वाद घ्या.',
      },
      {
        stepNumber: '०५',
        title: 'चंद्रोदय दर्शन, चाळणी विधी आणि अर्घ्य',
        sanskritTitle: 'चंद्रोदय दर्शन, चाळणी विधी आणि अर्घ्य',
        timingWindow: 'चंद्रोदय वेळी · रात्री ~०८:१७',
        summary: 'चंद्र उगवल्यावर चाळणीत प्रज्वलित दिवा ठेवून चंद्र देवाचे दर्शन घ्या, करव्यातून जल अर्घ्य द्या आणि चाळणीतून पतीचा चेहरा पहा.',
        detailedInstructions: [
          'पूजेचे ताट, पाण्याने भरलेला करवा आणि चाळणी घेऊन गच्चीवर किंवा अंगणात जा.',
          'चाळणीत तुपाचा दिवा ठेवून चंद्र देवाचे दर्शन घ्या.',
          'करव्यातून हळूहळू पाणी अर्पण करून चंद्र देवाला अर्घ्य द्या.',
          'त्यानंतर दिव्यासह चाळणीतून आपल्या पतीचा चेहरा पहा आणि त्यांच्या कपाळावर टिळा लावा.',
        ],
        sacredMantra: {
          devanagari: 'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥',
          transliteration: 'देहि सौभाग्यमारोग्यं देहि मे परमं सुखम्। रूपं देहि जयं देहि यशो देहि द्विषो जहि॥',
          meaning: 'आम्हाला सौभाग्य, उत्तम आरोग्य आणि परम सुख प्रदान करा.',
        },
        culturalNote: 'चाळणीतून चंद्र पाहणे नकारात्मकता दूर करून आशीर्वाद शंभर पटीने वाढवण्याचे प्रतीक आहे.',
      },
      {
        stepNumber: '०६',
        title: 'व्रत पारण आणि सात्विक कौटुंबिक भोजन',
        sanskritTitle: 'व्रत पारण आणि सात्विक भोजन',
        timingWindow: 'चंद्र अर्घ्यानंतर लगेचच',
        summary: 'पतीच्या हातून पाण्याचा पहिला घोट आणि मिठाई घेऊन उपवास सोडा (पारण करा), मोठ्यांचे आशीर्वाद घ्या आणि कुटुंबासह सात्विक भोजन करा.',
        detailedInstructions: [
          'पतीच्या हातून पाणी आणि मिठाई घेऊन व्रताचे पारण करा.',
          'मोठ्यांचे आशीर्वाद घेऊन कुटुंबासह आनंदाने सात्विक भोजनाचा आस्वाद घ्या.',
        ],
        culturalNote: 'आजकाल अनेक पती देखील आपल्या पत्नीसोबत प्रेमाने आणि सहभागाने हे व्रत करतात.',
      },
    ],

    checkAllBtn: 'सर्व निवडा',
    copyShoppingListBtn: 'यादी कॉपी करा',
    resetBtn: 'रीसेट',
    readinessProgressLabel: 'पूजा थाळी तयारी प्रगती',
    itemsReadySuffix: 'साहित्य तयार',
    filterAll: 'सर्व',
    filterPending: 'बाकी',
    filterCompleted: 'पूर्ण',
    categoryLabels: {
      'Sacred Vessels & Altar': 'पावन पात्रे आणि चौरंग',
      'Puja Offerings': 'पूजा साहित्य व नैवेद्य',
      'Solah Shringar': 'सोळा श्रृंगार',
      'Night Moonrise Ritual': 'रात्रीची चंद्रोदय पूजा',
    },
    essentialBadge: 'आवश्यक',
    optionalBadge: 'पारंपरिक ऐच्छिक',
    addCustomPlaceholder: 'तुमचे कौटुंबिक पूजा साहित्य जोडा...',
    addItemBtn: 'जोडा',
    noItemsMatchText: 'या विभागात कोणतेही साहित्य आढळले नाही.',
    showAllSamagriBtn: 'सर्व साहित्य पहा',
    samagriItems: {
      'karwa-pot': { name: 'मातीचा किंवा पितळेचा करवा (झाकणासह)', purpose: 'चंद्रोदयाच्या वेळी चंद्र देवाला जल अर्घ्य देण्यासाठी.' },
      chhalni: { name: 'पूजेची चाळणी', purpose: 'दिवा ठेवून चंद्र आणि पतीचे दर्शन घेण्यासाठी.' },
      'puja-thali': { name: 'सजवलेले पितळेचे पूजेचे ताट', purpose: 'दिवा, कुंकू, अक्षता, सिंदूर आणि मिठाई ठेवण्यासाठी.' },
      'gaura-idol': { name: 'चौथ माता आणि शिव परिवाराची प्रतिमा', purpose: 'सायंकाळच्या पूजेत आराधनेसाठी.' },
      'diya-ghee': { name: 'मातीचे दिवे, कापसाच्या वाती आणि शुद्ध तूप', purpose: 'आरती आणि चाळणीत ठेवून चंद्र दर्शनासाठी.' },
      'katha-book': { name: 'करवा चौथ व्रत कथा पुस्तक', purpose: 'सायंकाळच्या पूजेत कथा वाचण्यासाठी व ऐकण्यासाठी.' },
      'roli-akshat': { name: 'कुंकू (रोली) आणि अक्षता', purpose: 'टिळा लावण्यासाठी.' },
      'wheat-grains': { name: 'गव्हाचे १३ अखंड दाणे', purpose: 'कथा ऐकताना हातात ठेवण्यासाठी.' },
      'mauli-thread': { name: 'पवित्र लाल कलावा / मौली धागा', purpose: 'करव्याभोवती आणि मनगटावर बांधण्यासाठी.' },
      'seekh-reed': { name: 'सींक (दर्भाची काडी)', purpose: 'पारंपरिक पद्धतीने करव्यासोबत ठेवण्यासाठी.' },
      'marigold-flowers': { name: 'झेंडू आणि गुलाबाची ताजी फुले', purpose: 'चौरंग सजवण्यासाठी आणि पूजनासाठी.' },
      'sweets-mathri': { name: 'मिठाई (पेढा/बर्फी) आणि बायण्याची मठरी', purpose: 'नैवेद्य, बायणा आणि पारणासाठी.' },
      'sindoor-bindi': { name: 'सिंदूर, लाल टिकली आणि आळता', purpose: 'देवी पार्वतीला अर्पण करण्यासाठी आणि श्रृंगारासाठी.' },
      'mehendi-bangles': { name: 'मेहंदी आणि लाल-सोनेरी बांगड्या', purpose: 'सौभाग्य आणि सणाच्या आनंदाचे प्रतीक म्हणून.' },
      'red-chunri': { name: 'लाल किंवा मरून जरी काठाची ओढणी (चुनरी)', purpose: 'कथा आणि चंद्र दर्शनाच्या वेळी डोक्यावर घेण्यासाठी.' },
      'water-tumbler': { name: 'चांदीच्या किंवा पितळेच्या पेल्यात स्वच्छ पाणी', purpose: 'पतीच्या हातून पाणी पिऊन उपवास सोडण्यासाठी.' },
    },

    sargiCards: [
      {
        badge: '०१ · दिवसभराची ऊर्जा',
        title: 'केशर फेणी आणि सुका मेवा',
        desc: 'गरम केशर-वेलची दुधात बनवलेली फेणी (शेवया) आणि भिजवलेले बदाम, अक्रोड व पिस्ता दिवसभर शरीरात ऊर्जा टिकवून ठेवतात.',
      },
      {
        badge: '०२ · पाण्याचे संतुलन आणि ताजेपणा',
        title: 'नारळ पाणी आणि ताजी फळे',
        desc: 'डाळिंब, केळी, सफरचंद आणि नारळ पाणी सूर्योदयापूर्वी शरीरात नैसर्गिक इलेक्ट्रोलाइट्स टिकवून ठेवतात.',
      },
      {
        badge: '०३ · कौटुंबिक जिव्हाळा आणि सन्मान',
        title: 'श्रृंगार आणि सायंकाळचा बायणा',
        desc: 'सरगीच्या ताटात सासूबाईंचे आशीर्वाद आणि श्रृंगार असतो, आणि सायंकाळी सून मिठाई व मठरीचा बायणा देऊन मोठ्यांचा सन्मान करते.',
      },
    ],

    stageWord: 'टप्पा',
    chhalniControlsHeading: 'चाळणी दर्शन नियंत्रण',
    removeChhalniBtn: 'चाळणी बाजूला करून पहा',
    placeChhalniBtn: 'चाळणीतून पहा',
    activeInSimulatorBadge: 'सिम्युलेटरमध्ये सक्रिय',
    chhalniMoments: [
      {
        tabLabel: '०१ · दिवा',
        phase: 'टप्पा ०१ · चाळणीत दिवा प्रज्वलित करणे',
        title: 'भक्तीची ज्योत आणि चंद्राच्या शीतलतेचा संगम',
        desc: 'चंद्रोदय झाल्यावर पूजेच्या ताटात शुद्ध तुपाचा दिवा लावून चाळणीत ठेवा आणि डोक्यावर लाल चुनरी घ्या.',
      },
      {
        tabLabel: '०२ · चंद्र दर्शन',
        phase: 'टप्पा ०२ · चाळणीतून चंद्र दर्शन',
        title: 'आशीर्वाद शंभर पटीने वाढवणे',
        desc: 'चाळणी डोळ्यांसमोर धरून तिच्या जाळीतून चंद्र देवाचे दर्शन घ्या.',
      },
      {
        tabLabel: '०३ · चंद्र अर्घ्य',
        phase: 'टप्पा ०३ · पावन जल अर्घ्य',
        title: 'मातीच्या करव्यातून चंद्र अर्घ्य',
        desc: 'मातीच्या करव्यातून हळूहळू चंद्राकडे पाणी अर्पण करून कुटुंबाच्या सुख-शांतीसाठी प्रार्थना करा.',
      },
      {
        tabLabel: '०४ · पारण',
        phase: 'टप्पा ०४ · जोडीदाराचे दर्शन आणि पारण',
        title: 'पाण्याचा पहिला घोट आणि मिठाई',
        desc: 'दिव्यासह चाळणीतून पतीचा चेहरा पहा, टिळा लावा आणि त्यांच्या हातून पाणी व मिठाई घेऊन उपवास सोडा.',
      },
    ],

    studioSubheading: 'उजव्या बाजूच्या ७ बॉक्समध्ये कार्डची प्रत्येक ओळ बदला आणि सर्वात खाली दिलेल्या बटनांनी डाउनलोड किंवा शेअर करा.',
    cardFormatLabel: 'कार्डचा आकार:',
    horizontalBtn: 'आडवे',
    verticalBtn: 'उभे',
    cardPaletteLabel: 'कार्डची रंगसंगती:',
    themeNames: {
      'crimson-zari': 'शाही मरून आणि जरी गोल्ड',
      'ivory-pichwai': 'पावन आयव्हरी आणि पिछवाई गोल्ड',
      'moonlit-sandstone': 'चांदणी सँडस्टोन आणि अंबर',
    },
    rowLabels: [
      'ओळ १ · वरील शीर्षक',
      'ओळ २ · संबोधन आणि प्रिय व्यक्तीचे नाव',
      'ओळ ३ · कार्डचे मुख्य शीर्षक',
      'ओळ ४ · मुख्य शुभेच्छा संदेश',
      'ओळ ५ · समारोप आशीर्वाद ओळ',
      'ओळ ६ · पाठवणाऱ्याचे नाव',
      'ओळ ७ · खालील तारीख / सण ओळ',
    ],
    curatedWishesHeading: 'निवडक करवा चौथ शुभेच्छा (कोणत्याही कार्डच्या सर्व ओळी बदला)',
    curatedWishesSubheading: 'तुम्ही खालील कोणत्याही कार्डची प्रत्येक ओळ थेट बदलू शकता किंवा कार्ड स्टुडिओमध्ये उघडू शकता.',
    wishFilterTabs: {
      all: 'सर्व',
      wife: 'पत्नीसाठी',
      husband: 'पतीसाठी',
      mother: 'सासूबाईंसाठी',
      poetic: 'काव्यात्मक आणि पारंपरिक',
      traditional: 'मंगल शुभेच्छा',
    },
    editAllRowsBtn: 'सर्व ओळी बदला',
    doneEditingBtn: 'संपादन पूर्ण',
    saveRowsBtn: 'सेव्ह करा',
    copyWishBtn: 'संदेश कॉपी करा',
    openInStudioBtn: 'कार्ड स्टुडिओमध्ये उघडा',
    wishesList: [
      {
        id: 'wish-1',
        categoryKey: 'wife',
        category: 'पत्नीसाठी',
        headerLine: 'प्रेम, समर्पण आणि अखंड सौभाग्याचा सण',
        greetingLine: 'माझी लाडकी पत्नी आणि अर्धांगिनी,',
        title: 'आपल्या घराचा प्रकाश आणि माझ्या आयुष्याचा आधार',
        message: 'आजच्या या पावन रात्री दिव्याचा प्रकाश आणि चंद्राची शीतलता आपल्या आयुष्यात प्रेम, शांती आणि अखंड आनंद घेऊन येवो. आपले घर प्रेमाने सजवल्याबद्दल मनःपूर्वक आभार.',
        closing: 'करवा चौथच्या हार्दिक शुभेच्छा, प्रिये!',
        signatureLine: 'अखंड प्रेमासह — तुझा पती',
        footerLine: 'शुभ करवा चौथ · कार्तिक चतुर्थी',
      },
      {
        id: 'wish-2',
        categoryKey: 'wife',
        category: 'पत्नीसाठी',
        headerLine: 'परस्पर प्रेम आणि विश्वासाचे पावन बंधन',
        greetingLine: 'माझी प्रिय जीवनसंगिनी,',
        title: 'प्रेम, विश्वास आणि समर्पणाची अखंड सोबत',
        message: 'आज मी सुद्धा तुझ्यासोबत हे व्रत करत आहे—तुझ्या प्रेमाचा, संयमाचा आणि समर्पणाचा सन्मान करण्यासाठी. देवी पार्वती आणि भगवान शिव आपली जोडी सदैव सुखी ठेवो.',
        closing: 'मंगलमय करवा चौथच्या मनापासून शुभेच्छा!',
        signatureLine: 'सदैव तुझ्या सोबत — तुझा जोडीदार',
        footerLine: 'मंगलमय करवा चौथ · अखंड सोबत',
      },
      {
        id: 'wish-3',
        categoryKey: 'husband',
        category: 'पतीसाठी',
        headerLine: 'अखंड सौभाग्य आणि अटूट प्रेमाचे पावन व्रत',
        greetingLine: 'माझे प्राणप्रिय पतीदेव,',
        title: 'माझा आधार आणि जन्मोजन्मीचे सोबती',
        message: 'पहाटेच्या सरगीच्या दिव्यापासून ते रात्रीच्या चंद्र दर्शनापर्यंत माझ्या मनातील प्रत्येक प्रार्थना तुमच्या उत्तम आरोग्यासाठी आणि आपल्या अखंड सोबतीसाठी आहे.',
        closing: 'शुभ करवा चौथ, माझे प्रिय जोडीदार!',
        signatureLine: 'पूर्ण समर्पण आणि प्रेमासह — तुमची पत्नी',
        footerLine: 'शुभ करवा चौथ · चंद्रोदय आशीर्वाद',
      },
      {
        id: 'wish-4',
        categoryKey: 'husband',
        category: 'पतीसाठी',
        headerLine: 'तुमच्या दीर्घायुष्यासाठी आणि आरोग्यासाठी प्रार्थना',
        greetingLine: 'माझे प्रिय जोडीदार, माझा अभिमान,',
        title: 'माझ्या हृदयातील प्रत्येक प्रार्थना फक्त तुमच्यासाठी',
        message: 'चाळणीत जळणाऱ्या दिव्याच्या प्रकाशात चंद्र आणि त्यानंतर तुमचा हसरा चेहरा पाहणे हा माझ्या आयुष्यातील सर्वात सुंदर क्षण आहे. चौथ माता तुम्हाला सदैव आनंदी आणि यशस्वी ठेवो.',
        closing: 'प्रत्येक जन्मी तुमचीच साथ लाभो — शुभ करवा चौथ!',
        signatureLine: 'सदैव तुमचीच — तुमची अर्धांगिनी',
        footerLine: 'पावन करवा चौथ · जन्मोजन्मीची साथ',
      },
      {
        id: 'wish-5',
        categoryKey: 'mother',
        category: 'सासूबाईंसाठी',
        headerLine: 'पावन सरगी आणि मोठ्यांचे आशीर्वाद',
        greetingLine: 'पूज्य आणि प्रेमळ सासूबाई,',
        title: 'सरगीच्या आशीर्वादाबद्दल आणि मायेबद्दल कृतज्ञता',
        message: 'पूज्य आई, सरगीच्या ताटात गुंफलेल्या तुमच्या प्रेमाबद्दल आणि आशीर्वादाबद्दल कोटी-कोटी प्रणाम. तुमचा आशीर्वाद आपल्या कुटुंबावर सदैव राहो.',
        closing: 'चरण स्पर्श आणि शुभ करवा चौथ, आई.',
        signatureLine: 'आदर आणि प्रेमासह — तुमची सून',
        footerLine: 'शुभ करवा चौथ · कौटुंबिक आशीर्वाद',
      },
      {
        id: 'wish-6',
        categoryKey: 'mother',
        category: 'सासूबाईंसाठी',
        headerLine: 'कौटुंबिक संस्कार आणि मातृत्वाचा सन्मान',
        greetingLine: 'आदरणीय आणि ममतामयी आई,',
        title: 'तुमचे आशीर्वाद हीच आमची सर्वात मोठी ताकद आहे',
        message: 'तुमचे संस्कार, माया आणि मार्गदर्शनामुळे आपले घर प्रत्येक सणाला उजळून निघते. चौथ मातेकडे तुमच्या उत्तम आरोग्यासाठी आणि दीर्घायुष्यासाठी प्रार्थना करते.',
        closing: 'सादर नमस्कार आणि शुभ करवा चौथ, आई.',
        signatureLine: 'मनःपूर्वक कृतज्ञतेसह — तुमची सून आणि परिवार',
        footerLine: 'मंगलमय करवा चौथ · आदर आणि जिव्हाळा',
      },
      {
        id: 'wish-7',
        categoryKey: 'poetic',
        category: 'काव्यात्मक आणि पारंपरिक',
        headerLine: 'पावन चंद्रोदय आणि मातीच्या दिव्याची ज्योत',
        greetingLine: 'शरद ऋतूतील चांदणे आणि मंगल दिवा,',
        title: 'श्रद्धा, प्रेम आणि पावन प्रकाशाचा संगम',
        message: 'करवा चौथच्या दिव्याची पावन ज्योत सर्व अंधार दूर करो, चंद्र देवाची शीतलता मनाला शांती देवो आणि चौथ माता तुमच्या घरात सुख-समृद्धी भरो.',
        closing: 'सपरिवार शुभ करवा चौथ आणि शांत चांदणे!',
        signatureLine: 'काव्यात्मक जिव्हाळा आणि मंगल प्रार्थनेसह',
        footerLine: 'कार्तिक कृष्ण चतुर्थी · पावन चंद्रोदय',
      },
      {
        id: 'wish-8',
        categoryKey: 'poetic',
        category: 'काव्यात्मक आणि पारंपरिक',
        headerLine: 'चंद्राचे चांदणे आणि कुंकवाची शोभा',
        greetingLine: 'चंदेरी चांदणे आणि सोनेरी ज्योत,',
        title: 'श्रद्धा आणि अमर प्रेमाचा पावन उत्सव',
        message: 'चाळणीत स्थिर तेवणाऱ्या दिव्याप्रमाणे आणि शरद ऋतूतील चंद्राच्या शीतल किरणांप्रमाणे तुमच्या आयुष्यात प्रेम, विश्वास आणि गोडवा सदैव उजळत राहो.',
        closing: 'तेजोमय आणि मंगलमय करवा चौथच्या शुभेच्छा!',
        signatureLine: 'पारंपरिक आदर आणि स्नेहासह',
        footerLine: 'शुभ करवा चौथ · प्रकाश आणि सुसंवाद',
      },
      {
        id: 'wish-9',
        categoryKey: 'traditional',
        category: 'मंगल शुभेच्छा',
        headerLine: 'करवा चौथ सणाच्या मंगल शुभेच्छा',
        greetingLine: 'पावन करवा चौथच्या हार्दिक शुभेच्छा,',
        title: 'सुख, शांती आणि अखंड कौटुंबिक जिव्हाळा',
        message: 'चतुर्थीचा चंद्र तुमच्या आयुष्यात सुख, शांती आणि गोडवा पसरवो. मेहंदीचा सुगंध आणि प्रेमाचे हे पावन नाते सदैव फुलत राहो.',
        closing: 'करवा चौथच्या हार्दिक शुभेच्छा!',
        signatureLine: 'हार्दिक शुभेच्छा आणि सणाच्या आनंदासह',
        footerLine: 'शुभ करवा चौथ · सुख आणि समृद्धी',
      },
      {
        id: 'wish-10',
        categoryKey: 'traditional',
        category: 'मंगल शुभेच्छा',
        headerLine: 'देवी पार्वती आणि भगवान शिवाचे पावन आशीर्वाद',
        greetingLine: 'पावन करक चतुर्थी निमित्त मंगल अभिवादन,',
        title: 'उत्तम आरोग्य, समृद्धी आणि पावन आशीर्वाद',
        message: 'करवा चौथच्या या शुभ प्रसंगी देवी पार्वती आणि भगवान शिव तुमच्या कुटुंबाला उत्तम आरोग्य, समृद्धी आणि अखंड प्रेमाचा आशीर्वाद देवो.',
        closing: 'सपरिवार करवा चौथच्या मंगलमय शुभेच्छा!',
        signatureLine: 'मंगल कामना आणि सादर अभिवादनासह',
        footerLine: 'शुभ करवा चौथ · मंगल आशीर्वाद',
      },
    ],

    faqsList: [
      {
        id: 'faq-date',
        question: 'भारतीय पंचांगानुसार २०२६ आणि २०२७ मध्ये करवा चौथ कधी आहे?',
        answer: '२०२६ मध्ये करवा चौथ गुरुवार, २९ ऑक्टोबर २०२६ रोजी आहे (पूजा मुहूर्त: सायं ०५:३८ – ०६:५६ IST; दिल्ली चंद्रोदय: रात्री ~०८:१७ IST). २०२७ मध्ये हा सण सोमवार, १८ ऑक्टोबर २०२७ रोजी साजरा केला जाईल.',
      },
      {
        id: 'faq-cloudy-moon',
        question: 'जर ढग किंवा धुक्यामुळे चंद्र दिसला नाही तर उपवास कसा सोडावा?',
        answer: 'जर तुमच्या शहराच्या चंद्रोदय वेळेनंतरही ढगांमुळे चंद्र दिसला नाही, तर चंद्राच्या दिशेला तोंड करून चंद्र देवाचे ध्यान करून किंवा भगवान शिवाच्या मस्तकावरील चंद्राचे दर्शन घेऊन अर्घ्य दिले जाते.',
      },
      {
        id: 'faq-health',
        question: 'गरोदरपण किंवा आरोग्याच्या कारणास्तव निर्जला उपवासात बदल करता येतो का?',
        answer: 'होय, हिंदू धर्मशास्त्रानुसार आरोग्याचे रक्षण सर्वात महत्त्वाचे आहे. गरोदर महिला आणि औषधे घेणाऱ्या व्यक्ती डॉक्टरांच्या सल्ल्याने नारळ पाणी, दूध आणि फळे घेऊन फलाहार व्रत करू शकतात.',
      },
      {
        id: 'faq-sargi-meaning',
        question: 'जर सून सासूबाईंपासून दूर दुसऱ्या शहरात राहत असेल तर सरगीची प्रथा कशी पाळावी?',
        answer: 'दुसऱ्या शहरात राहत असल्यास व्रताच्या आदल्या संध्याकाळी फोनवर सासूबाईंचे आशीर्वाद घेऊन पहाटे घरीच सरगी तयार करून ग्रहण केली जाते.',
      },
      {
        id: 'faq-chhalni',
        question: 'चाळणीत दिवा ठेवून चंद्र आणि पतीला पाहण्याचे काय महत्त्व आहे?',
        answer: 'चाळणीची बारीक जाळी चंद्राच्या किरणांना शेकडो बिंदूंमध्ये विभागते, जे मनातील दोष दूर करून आशीर्वाद शंभर पटीने वाढवण्याचे प्रतीक आहे.',
      },
      {
        id: 'faq-couples-fasting',
        question: 'पती सुद्धा आपल्या पत्नीसोबत करवा चौथचा उपवास करू शकतात का?',
        answer: 'नक्कीच, आजकाल अनेक पती आपल्या पत्नीप्रती प्रेम आणि सहभाग व्यक्त करण्यासाठी एकत्र उपवास करतात.',
      },
    ],

    footerBlessing: 'कार्तिक चतुर्थीच्या चंद्राचे शीतल चांदणे आणि मातीच्या दिव्याची पावन ज्योत तुमच्या घरादाराला प्रेम, शांती आणि अखंड सोबतीने उजळून टाको.',
    footerCulturalNote: 'सांस्कृतिक टीप: येथे दिलेली पूजा विधी आणि पंचांग वेळ पारंपरिक संदर्भासाठी आहे. नेहमी आपल्या आरोग्याला प्राधान्य द्या.',
    footerSectionsHeading: 'मुख्य विभाग',
    footerControlsHeading: 'इंटरॅक्टिव्ह नियंत्रणे',
    returnToTopBtn: '↑ पानाच्या सर्वात वर जा',
    footerCopyright: 'शुभ करवा चौथ · भारतीय सण परंपरेप्रती आदराने निर्मित',
    footerVerifiedDates: 'प्रमाणित पंचांग तारखा: २९ ऑक्टोबर २०२६ · १८ ऑक्टोबर २०२७ · ७ ऑक्टोबर २०२८',
  },
};
