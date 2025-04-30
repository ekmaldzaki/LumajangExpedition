"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslation } from "../utils/getTranslation";

type HeroesProps = {
  title?: string;
  description?: string;
  images?: { src: string; alt: string }[];
};

export default function Heroes({ title, description, images }: HeroesProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = getTranslation(locale);

  const heroTitle = title;
  const heroDescription = description;
  const heroImages = images || [];

  return (
    <section className="bg-gray-50 text-[#252525] py-16 pt-32">
      <div className="container mx-auto text-center px-6 space-y-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-4xl font-bold mb-8"
        >
          {heroTitle?.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </motion.h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-24 space-y-4 md:space-y-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-40 h-50 md:w-56 md:h-72 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-[#252525] text-center px-4 text-justify"
        >
          {heroDescription?.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
