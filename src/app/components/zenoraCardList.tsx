"use client";

import ZenoraCard from "./zenoraCard";
import en from "../locales/en.json";
import id from "../locales/id.json";
import { usePathname } from "next/navigation";

export default function ZenoraCardList() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/id") ? "id" : "en";
  const data = locale === "id" ? id.cards : en.cards;

  return (
    <div className="flex flex-col items-center gap-6">
      {data.map((card) => (
        <div key={card.id} className="w-full max-w-2xl">
          <ZenoraCard card={card} />
        </div>
      ))}
    </div>
  );
}
