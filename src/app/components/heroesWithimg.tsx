"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslation } from "../utils/getTranslation";
import { useState, useEffect } from "react";

type HeroesProps = {
  title?: string;
  subtitle?: string;
  description?: string;
};

export default function Heroes({ title, subtitle, description }: HeroesProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = getTranslation(locale);

  const images = [
    "/images/bromo_1.png",
    "/images/lavatour_1.png",
    "/images/tumpaksewu_1.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-black py-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex flex-col md:flex-row items-stretch justify-between px-4 md:px-6"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1B5E20] bg-opacity-50 text-white rounded-lg p-6 md:p-10 flex flex-col justify-center w-full md:w-2/3"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>{" "}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            {subtitle}
          </h2>{" "}
          <p className="text-base md:text-lg">{description}</p>{" "}
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-1/3 overflow-hidden rounded-lg flex items-center aspect-[4/5]"
        >
          <div className="w-full h-full">
            <img
              src={images[currentImageIndex]}
              alt={`Carousel Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
