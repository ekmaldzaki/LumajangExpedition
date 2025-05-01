"use client";

import React, { useState } from "react";
import ItineraryCard from "./itineraryCard";
import en from "../locales/en.json";
import id from "../locales/id.json";
import { usePathname } from "next/navigation";

export default function ItineraryCardList() {
  const [locale, setLocale] = useState<string>("en");
  const pathname = usePathname();

  // Check current path to determine locale
  React.useEffect(() => {
    if (pathname.startsWith("/id")) {
      setLocale("id");
    } else {
      setLocale("en");
    }
  }, [pathname]);

  // Load data based on locale
  const data = locale === "id" ? id.itinerary : en.itinerary;

  return (
    <div className="space-y-4 py-16 px-4">
      {/* Title centered */}
      <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
        Itinerary Tumpak Sewu - Bromo - Lava Tour Semeru <br /> 3 Days 2 Nights
        from Surabaya Airport
      </h1>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="w-full max-w-sm">
            <ItineraryCard item={item} />
          </div>
        ))}
      </div>

      {/* Button Contact Us */}
      <div className="mt-6 text-center">
        <a
          href="https://wa.me/6282143068760"
          className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
        >
          {locale === "id"
            ? "Hubungi Kami - Zenora Tour and Travel"
            : "Contact Us - Zenora Tour and Travel"}
        </a>
      </div>
    </div>
  );
}
