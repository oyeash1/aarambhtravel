import React from "react";

export const BASE_PRICE_SLEEPER = 14800;
export const ORIGINAL_PRICE = 15500;
export const AC_TRAIN_UPGRADE_COST = 3000;
export const AC_ROOM_UPGRADE_COST = 1500;

export const PLACES = [
  {
    id: 1,
    name: "Ram Janmabhoomi",
    desc: "The sacred birthplace of Lord Rama in Ayodhya, featuring the newly built grand temple structure.",
    image: "/assets/ram_janmabhoomi.png",
    featured: true,
  },
  {
    id: 2,
    name: "Kashi Vishwanath Temple",
    desc: "One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the holy river Ganga in Banaras.",
    image: "/assets/hero_kashi.png",
    featured: true,
  },
  {
    id: 3,
    name: "Triveni Sangam",
    desc: "The holy confluence of three sacred rivers—Ganga, Yamuna, and the mythical Saraswati in Prayagraj.",
    image: "/assets/hero_prayagraj.png",
    featured: true,
  },
  {
    id: 4,
    name: "Hanuman Garhi",
    desc: "A historic 10th-century temple dedicated to Lord Hanuman, situated on a hill in Ayodhya.",
    image: "/assets/hanuman_garhi.png",
    featured: true,
  },
  {
    id: 5,
    name: "Ganga Aarti",
    desc: "A magnificent evening ritual of light and chants performed at the ghats of the Ganges in Banaras.",
    image: "/assets/led_show.png",
    featured: true,
  },
  {
    id: 6,
    name: "Saryu Ghat",
    desc: "The serene banks of the Saryu River in Ayodhya, perfect for holy dips and scenic boat rides.",
    image: "/assets/boat_ride.png",
    featured: true,
  },
  {
    id: 7,
    name: "Kanak Bhawan",
    desc: "Also known as Sone-ka-Ghar, a beautiful temple in Ayodhya gifted to Goddess Sita by Kaikeyi.",
    featured: false,
  },
  {
    id: 8,
    name: "Dashrath Mahal",
    desc: "The historic royal palace of King Dashrath, father of Lord Rama in Ayodhya.",
    featured: false,
  },
  {
    id: 9,
    name: "Sita Rasoi",
    desc: "A historic shrine in Ayodhya containing symbolic kitchen utensils used by Goddess Sita.",
    featured: false,
  },
  {
    id: 10,
    name: "Sankat Mochan Temple",
    desc: "A sacred temple dedicated to Lord Hanuman in Banaras, founded by the saint Tulsidas.",
    featured: false,
  },
  {
    id: 11,
    name: "Annapurna Temple",
    desc: "A historic temple in Banaras dedicated to Goddess Annapurna, the deity of food and nourishment.",
    featured: false,
  },
  {
    id: 12,
    name: "Kal Bhairav Temple",
    desc: "The ancient temple of Kal Bhairav in Banaras, considered the guardian deity of the city.",
    featured: false,
  },
  {
    id: 13,
    name: "Vishalakshi Temple",
    desc: "A highly sacred Shakti Peeth temple in Banaras, dedicated to Goddess Vishalakshi.",
    featured: false,
  },
  {
    id: 14,
    name: "Bade Hanuman Mandir",
    desc: "A unique temple in Prayagraj near the fort, featuring a large reclining idol of Lord Hanuman.",
    featured: false,
  },
  {
    id: 15,
    name: "Alopi Shankari Devi Shakti Peeth",
    desc: "A unique temple in Prayagraj where a wooden carriage (Doli) is worshipped instead of a statue.",
    featured: false,
  }
];

export const INCLUSIONS = [
  {
    id: "train",
    title: "Train Tickets",
    subtitle: "Sleeper Class (AC Upgrade)",
    desc: "Round-trip train booking from Mumbai to Banaras & back from Ayodhya included. Upgrade to 3AC/2AC available.",
    image: "/assets/ticket2.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: "rooms",
    title: "Guest Room Stay",
    subtitle: "Comfortable Lodging",
    desc: "Clean, comfortable hotel/guest rooms located centrally at each destination for overnight rest.",
    image: "/assets/guestroom.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "meals",
    title: "Breakfast & Dinner",
    subtitle: "Daily Veg Meals",
    desc: "Hygienic vegetarian breakfast and dinner prepared daily throughout the tour.",
    image: "/assets/meal.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "transport",
    title: "Local Vehicle",
    subtitle: "Sightseeing Transfers",
    desc: "Dedicated local vehicle transfers for comfortable sightseeing across all points in our itinerary.",
    image: "/assets/transport.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: "guide",
    title: "Tour Guide",
    subtitle: "Local Expert Support",
    desc: "Professional guide accompanying the group to assist with temple visits and historical background.",
    image: "/assets/guide.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-3c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-3c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "sighting",
    title: "Side Sightseeing",
    subtitle: "Extended Excursions",
    desc: "Visits to side sights, river ghats, local markets, and extra landmarks included in the tour package.",
    image: "/assets/boatride.jpg",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export const ITINERARY = [
  {
    day: 1,
    title: "Departure from Mumbai",
    desc: "Board the train from Mumbai to Banaras/Varanasi. Settle in for a comfortable journey, anticipating a divine pilgrimage ahead.",
  },
  {
    day: 2,
    title: "Arrival in Banaras (Varanasi)",
    desc: "Arrive in the sacred city of Banaras. Check into your hotel/guest room and take the day to rest and acclimatize before your spiritual exploration.",
  },
  {
    day: 3,
    title: "Banaras Sacred Sightseeing",
    desc: "A full day exploring holy sites: Kashi Vishwanath Temple, Sankat Mochan Temple, Annapurna Temple, Kal Bhairav Temple, and Vishalakshi Temple. In the evening, witness the breathtaking Ganga Aarti at the ghats.",
  },
  {
    day: 4,
    title: "Banaras to Prayagraj Visit",
    desc: "Travel from Banaras to Prayagraj. Visit the holy confluence Triveni Sangam, seek blessings at the Bade Hanuman Mandir, and pay respects at the Alopi Shankari Devi Shakti Peeth Mandir.",
  },
  {
    day: 5,
    title: "Prayagraj to Ayodhya",
    desc: "Proceed to Ayodhya, the divine city of Lord Rama. Visit Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, Sita Rasoi, and experience the serenity of Saryu Ghat.",
  },
  {
    day: 6,
    title: "Ayodhya Ram Janmabhoomi & Departure",
    desc: "Complete your main pilgrimage with a grand darshan at the holy Ram Janmabhoomi. In the afternoon/evening, drop at the railway station to board the return train to Mumbai.",
  },
  {
    day: 7,
    title: "Return Arrival in Mumbai",
    desc: "Arrive back in Mumbai by train, concluding your holy, comfortable, and divine journey with sweet spiritual memories.",
  },
];
