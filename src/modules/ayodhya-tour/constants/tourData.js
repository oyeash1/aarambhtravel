import React from "react";

export const BASE_PRICE_SLEEPER = 14499;
export const ORIGINAL_PRICE = 17500;
export const AC_TRAIN_UPGRADE_COST = 3000;
export const AC_ROOM_UPGRADE_COST = 1500;

export const PLACES = [
  {
    id: 1,
    name: "Ram Janmabhoomi",
    desc: "The sacred birthplace of Lord Rama, featuring the newly built grand temple structure.",
    image: "/assets/ram_janmabhoomi.png",
    featured: true,
  },
  {
    id: 2,
    name: "Hanuman Garhi",
    desc: "A historic 10th-century temple dedicated to Lord Hanuman, situated on a hill requiring a climb of 76 steps.",
    image: "/assets/hanuman_garhi.png",
    featured: true,
  },
  {
    id: 3,
    name: "Ram Ki Paidi",
    desc: "A series of majestic ghats along the Saryu River, illuminated beautifully during evenings.",
    image: "/assets/ram_ki_paidi.png",
    featured: true,
  },
  {
    id: 4,
    name: "LED Show",
    desc: "A grand evening light and sound show depicting the epic Ramayana along the Saryu River ghats.",
    image: "/assets/led_show.png",
    featured: true,
  },
  {
    id: 5,
    name: "Saryu River Boat Ride",
    desc: "A peaceful boat ride on the Saryu River, gliding along the historic ghats during sunrise or sunset.",
    image: "/assets/boat_ride.png",
    featured: true,
  },
  {
    id: 6,
    name: "Kanak Bhawan",
    desc: "Also known as Sone-ka-Ghar, a beautiful temple gifted to Goddess Sita by Kaikeyi.",
    featured: false,
  },
  {
    id: 7,
    name: "Dashrath Mahal",
    desc: "The historic royal palace of King Dashrath, father of Lord Rama.",
    featured: false,
  },
  {
    id: 8,
    name: "Surya Kund",
    desc: "A sacred large water tank surrounded by ghats, dedicated to the Sun God.",
    featured: false,
  },
  {
    id: 9,
    name: "Guptar Ghat",
    desc: "The sacred spot where Lord Rama is believed to have taken his Jala Samadhi.",
    featured: false,
  },
  {
    id: 10,
    name: "Mani Parvat",
    desc: "A historic hillock associated with Rama's return to Ayodhya, offering panoramic views.",
    featured: false,
  },
  {
    id: 11,
    name: "Gulab Bari",
    desc: "The tomb of Nawab Shuja-ud-Daula, decorated with rose gardens and water fountains.",
    featured: false,
  },
  {
    id: 12,
    name: "Sita Rasoi",
    desc: "A historic shrine containing symbolic kitchen utensils used by Goddess Sita.",
    featured: false,
  },
  {
    id: 13,
    name: "Shree Swaminarayan Mandir Chhapiya",
    desc: "The birthplace of Swaminarayan, featuring beautiful architecture and spiritual energy.",
    featured: false,
  },
  {
    id: 14,
    name: "Bhadeswar Nath Basti",
    desc: "An ancient Shiva temple popular for pilgrimage, especially during the monsoon season.",
    featured: false,
  },
  {
    id: 15,
    name: "Bharatkund",
    desc: "The pool where Bharat lived in meditation during Rama's 14-year exile.",
    featured: false,
  }
];

export const INCLUSIONS = [
  {
    id: "meals",
    title: "All Meals Included",
    subtitle: "Breakfast, Lunch, Dinner",
    desc: "Delicious and hygienic vegetarian meals prepared freshly throughout the tour.",
    image: "/assets/meal.jpg", // USER: Enter your image path here (e.g., "/assets/meals.jpg")
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "rooms",
    title: "Guest Room Stay",
    subtitle: "AC / Non-AC Available",
    desc: "Clean, comfortable accommodations located centrally in Ayodhya for a relaxing rest.",
    image: "/assets/guestroom.jpg", // USER: Enter your image path here (e.g., "/assets/rooms.jpg")
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "transport",
    title: "Local Transport",
    subtitle: "Sightseeing Included",
    desc: "Local vehicle transport for convenient sightseeing across all tourist spots in the itinerary.",
    image: "/assets/transport.jpg", // USER: Enter your image path here (e.g., "/assets/transport.jpg")
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    id: "train",
    title: "Train Tickets",
    subtitle: "Sleeper Class (AC Upgrade)",
    desc: "Round-trip train booking from Mumbai. Upgrade to 3AC/2AC train compartment available.",
    image: "/assets/ticket2.jpg", // USER: Enter your image path here (e.g., "/assets/train.jpg")
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: "boat",
    title: "Saryu Boat Ride",
    subtitle: "At Ram Ki Paidi",
    desc: "Traditional wooden boat ride included to experience the magical spiritual vibes of Saryu River.",
    image: "/assets/boatride.jpg", // USER: Enter your image path here (e.g., "/assets/boat.jpg")
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "manager",
    title: "Tour Manager",
    subtitle: "24/7 Ground Support",
    desc: "Experienced tour manager accompanying the group to ensure a hassle-free pilgrimage.",
    image: "/assets/guide.jpg", // USER: Enter your image path here (e.g., "/assets/manager.jpg")
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-3c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-3c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export const ITINERARY = [
  {
    day: 1,
    title: "Departure from Mumbai",
    desc: "Board the express train from Mumbai (sleeper class or optional AC coach upgrade). Get to know your fellow travelers and settle in for a spiritual journey.",
  },
  {
    day: 2,
    title: "Arrival in Ayodhya & Hotel Check-in",
    desc: "Arrive in Ayodhya. Check into your guest room (AC or Non-AC as selected). Spend the afternoon resting. In the evening, visit local markets and attend Saryu Aarti.",
  },
  {
    day: 3,
    title: "Ram Janmabhoomi & Kanak Bhawan",
    desc: "Start early for a grand darshan at Ram Janmabhoomi Temple. Later visit Kanak Bhawan, Sita Rasoi, and Dashrath Mahal. Learn about the ancient architectural heritage.",
  },
  {
    day: 4,
    title: "Hanuman Garhi & Surya Kund",
    desc: "Climb the steps to Hanuman Garhi to seek blessings. Visit Surya Kund in the afternoon for quiet contemplation. Experience the gorgeous sunset and light reflections.",
  },
  {
    day: 5,
    title: "Boat Ride, Bharatkund & Guptar Ghat",
    desc: "Take an early morning boat ride on Saryu River. Visit Bharatkund and Guptar Ghat in the afternoon. Return to Ram Ki Paidi in the evening for a breathtaking LED Light and Sound Show.",
  },
  {
    day: 6,
    title: "Shree Swaminarayan Mandir & Basti Visit",
    desc: "Excursion to Shree Swaminarayan Mandir Chhapiya (birthplace of Swaminarayan) and Bhadeswar Nath Shiva Temple in Basti. Excellent sightseeing during the monsoon landscape.",
  },
  {
    day: 7,
    title: "Return Journey to Mumbai",
    desc: "Check out from the guest room with beautiful memories. Board the return train to Mumbai, reflecting on a comfortable and spiritual tour.",
  },
];
