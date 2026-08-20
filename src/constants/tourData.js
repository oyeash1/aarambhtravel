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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-3-12h.008v.008H13.5V6zm0 6h.008v.008H13.5V12zm0 6h.008v.008H13.5V18M2.25 5.25h19.5A2.25 2.25 0 0124 7.5v9a2.25 2.25 0 01-2.25 2.25H2.25A2.25 2.25 0 010 16.5v-9A2.25 2.25 0 012.25 5.25z" />
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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8v4a1 1 0 001 1h0M8 8v2M10 8v2M9 13v3M15 8v8" />
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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l3-4h9l3 4m-15 0v5A1.5 1.5 0 004.5 18.5h15a1.5 1.5 0 001.5-1.5v-5M7.5 15.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm10.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
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
