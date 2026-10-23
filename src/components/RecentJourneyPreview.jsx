"use client";

import Image from "next/image";

export default function RecentJourneyPreview() {
  // TOGGLE: Set to true to fetch images from Cloudinary instead of local public paths
  const USE_CLOUDINARY = false;
  const CLOUDINARY_CLOUD_NAME = "arambhtravel"; // Replace with your Cloudinary cloud name
  const CLOUDINARY_FOLDER = "our-journeys"; // Replace with your Cloudinary folder name

  const getImgSrc = (localPath) => {
    if (USE_CLOUDINARY) {
      // Extract filename e.g. "/assets/ram_janmabhoomi.png" -> "ram_janmabhoomi"
      const filename = localPath.split('/').pop().split('.')[0];
      return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${CLOUDINARY_FOLDER}/${filename}`;
    }
    return localPath;
  };

  const previewImages = [
    { path: "/assets/grpphoto.jpeg", alt: "Ram Mandir Darshan", span: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
    { path: "/assets/trip4.jpeg", alt: "Kashi Vishwanath Mandir", span: "aspect-square" },
    { path: "/assets/trip3.jpeg", alt: "Triveni Sangam", span: "aspect-square" },
    { path: "/assets/trip7.jpeg", alt: "Saryu River Boat Ride", span: "aspect-square" },
    { path: "/assets/trip6.jpeg", alt: "Ganga Aarti Light Show", span: "aspect-square" }
  ];

  return (
    <section className="py-20 bg-[#FCF9F5] relative overflow-hidden border-b border-[#EADBCE]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#E11D48] font-bold text-xs uppercase tracking-widest bg-[#E11D48]/10 px-3.5 py-1.5 rounded-full border border-[#E11D48]/20">
            Latest Completed Tour
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#9B1124] tracking-tight">
            70+ Travelers. One Unforgettable Journey.
          </h2>
          <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-medium">
            Our recent Ayodhya journey brought together 70+ travelers from Mumbai. Here's a glimpse of the memories we created together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {previewImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#EADBCE] group transition-all duration-500 hover:-translate-y-1 bg-white ${img.span}`}
            >
              <Image
                src={getImgSrc(img.path)}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-10">
          <a
            href="/our-journeys"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Explore Our Journey</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
