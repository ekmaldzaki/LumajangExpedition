"use client";

import ZenoraCard from "./zenoraCard";
import en from "../locales/en.json";
import id from "../locales/id.json";
import { usePathname } from "next/navigation";

export default function ZenoraCardList() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/id") ? "id" : "en";
  const data = locale === "id" ? id.cards : en.cards;
  const title = locale === "id" ? "Destinasi Wisata" : "Travel Destination";

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Title Section */}
      <h1 className="text-xl sm:text-3xl font-bold text-gray-800">{title}</h1>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((card) => (
          <div key={card.id} className="w-full max-w-[200px] sm:max-w-[250px]">
            <ZenoraCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
