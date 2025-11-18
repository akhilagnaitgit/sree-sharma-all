// const services = [
//   {
//     id: 1,
//     slug: 'anna-prasannam',
//     title: 'Vaastu Consultation',
//     short: 'Residential & commercial Vaastu remedies and consultation.',
//     long: 'Full Vaastu shastra analysis for home and office — layout, directions, and remedies including pooja/homa suggestions.',
//     category: 'Vaastu',
//     price: 'From ₹1500',
//     image: '/assets/vaastu.jpg'
//   },
//   {
//     id: 2,
//     slug: 'homa-puja',
//     title: 'Homa / Havan',
//     short: 'Traditional Homas for prosperity & health.',
//     long: 'Custom homa (havan) ceremonies for special occasions — performed by learned priests with required materials.',
//     category: 'Homas',
//     price: 'From ₹3000',
//     image: '/assets/homa.jpg'
//   },
//   {
//     id: 3,
//     slug: 'muhurta-selection',
//     title: 'Muhurta Selection',
//     short: 'Auspicious timing for weddings, housewarming & more.',
//     long: 'Accurate muhurta (timing) selection considering planetary positions and family kundali.',
//     category: 'Muhurta',
//     price: 'From ₹500',
//     image: '/assets/muhurta.jpg'
//   },
//   {
//     id: 4,
//     slug: 'marriage-matching',
//     title: 'Marriage Matching',
//     short: 'Kundali matching & compatibility analysis.',
//     long: 'Detailed kundali match-making with dosha checks, remedies, and report generation.',
//     category: 'Marriage',
//     price: 'From ₹800',
//     image: '/assets/matching.jpg'
//   }
// ];

// export default services;



const muhurtaData = [
  {
    slug: "anna-prasannam",
    type: "Anna Prasannam",
    image: "/assets/muhurta1.jpg",
    price: "₹2500",
    participants: "Child & Family",
    duration: "1 to 2 Hours",
    description: "Anna Prasannam is the auspicious ceremony when a baby eats solid food for the first time.",
    whyPerform: "To bless the child with good health, strength, prosperity and a prosperous life.",
    benefits: [
      "Ensures healthy growth",
      "Brings divine blessings",
      "Strengthens family bond"
    ],
    programDetails: [
      "Ganapati Puja",
      "Feeding Ceremony",
      "Blessings & Prayers",
      "Distribution of Prasadam"
    ],
    prasadam: "Sweet Pongal / Laddu, Fruits",
    otherInfo: "Best performed in temple or home with priest.",
    counts: {
      performed: 1200,
      yearsService: 10,
      satisfaction: "98%",
      blessings: 1
    }
  },

  {
    slug: "aksharabhyasam",
    type: "Aksharabhyasam",
    image: "/assets/muhurta2.jpg",
    price: "₹3000",
    participants: "Child & Family",
    duration: "2 Hours",
    description: "Aksharabhyasam is the first writing ceremony to bless the child with knowledge & education.",
    whyPerform: "To seek Saraswati Devi blessings before child starts education.",
    benefits: [
      "Boosts intelligence",
      "Academic success",
      "Wisdom & discipline"
    ],
    programDetails: [
      "Ganapati Puja",
      "Saraswati Puja",
      "Akshar Writing Ceremony",
      "Blessing Rituals"
    ],
    prasadam: "Chakkara Pongal, Fruits",
    otherInfo: "Conducted on auspicious days.",
    counts: {
      performed: 900,
      yearsService: 12,
      satisfaction: "99%",
      blessings: 1
    }
  },

  {
    slug: "vahana-puja",
    type: "Vahana Puja",
    image: "/assets/muhurta3.jpg",
    price: "₹2000",
    participants: "Vehicle Owner & Family",
    duration: "45 Minutes",
    description: "Vahana Puja seeks divine protection from accidents and obstacles.",
    whyPerform: "To bless the new vehicle & ensure safe journey.",
    benefits: [
      "Protection from accidents",
      "Safe travel",
      "Peace & prosperity"
    ],
    programDetails: [
      "Ganapati Puja",
      "Vehicle Blessing",
      "Coconut Breaking",
      "Aarathi"
    ],
    prasadam: "Coconut, Fruits",
    otherInfo: "Performed at home or showroom.",
    counts: {
      performed: 1800,
      yearsService: 15,
      satisfaction: "97%",
      blessings: 1
    }
  }
];

export default muhurtaData;
