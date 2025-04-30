"use client";

import { useState } from "react";
import { useLocale } from "../hooks/useLocale";

export default function Navbar() {
  const { locale, switchLocale } = useLocale();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    switchLocale();
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className="bg-[#2E7D32] text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Center Text */}
        <div className="text-center flex-1">
          <h1 className="text-xl font-bold md:text-lg md:text-left md:pl-4">
            Lumajang Expedition Tour
          </h1>
        </div>

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="text-white bg-transparent hover:bg-gray-700 rounded-full p-2"
          >
            <img
              src={
                locale === "id" ? "/images/flag_id.png" : "/images/flag_en.png"
              }
              alt="Language Flag"
              className="w-7 h-5 rounded-md object-cover"
            />
          </button>

          {/* Dropdown untuk memilih bahasa */}
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-32">
              <button
                onClick={() => handleLanguageChange("id")}
                className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left"
              >
                <img
                  src="/images/flag_id.png"
                  alt="Indonesian Flag"
                  className="w-7 h-5 rounded-md object-cover"
                />
                <span>Bahasa Indonesia</span>
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className="flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left"
              >
                <img
                  src="/images/flag_en.png"
                  alt="English Flag"
                  className="w-7 h-5 rounded-md object-cover"
                />
                <span>English</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
