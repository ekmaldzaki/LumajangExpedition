"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "../hooks/useLocale";

export default function Navbar() {
  const { locale, switchLocale } = useLocale();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    if (lang !== locale) {
      switchLocale();
    }
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white py-4 shadow-md top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Center Text */}
        <div className="text-center flex-1">
          <img
            src="/images/logo_1.jpg"
            alt="Logo"
            className="h-10 md:h-12 object-contain ml-0 md:ml-0 rounded-lg"
          />
        </div>

        {/* Language Switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            className="text-white bg-transparent hover:bg-gray-700 rounded-full p-2"
          >
            <img
              src={
                locale === "id" ? "/images/flag_id.png" : "/images/flag_en.png"
              }
              alt="Language Flag"
              className="w-7 h-7 rounded-full object-cover"
            />
          </button>

          {/* Dropdown untuk memilih bahasa */}
          {isLanguageDropdownOpen && (
            <div
              className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg py-2 w-32 z-50" // Tambahkan z-50
            >
              <button
                onClick={() => handleLanguageChange("id")}
                className={`flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left ${
                  locale === "id" ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={locale === "id"}
              >
                <img
                  src="/images/flag_id.png"
                  alt="Indonesian Flag"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span>Bahasa Indonesia</span>
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex items-center space-x-2 px-4 py-1 hover:bg-gray-200 w-full text-left ${
                  locale === "en" ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={locale === "en"}
              >
                <img
                  src="/images/flag_en.png"
                  alt="English Flag"
                  className="w-7 h-7 rounded-full object-cover"
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
