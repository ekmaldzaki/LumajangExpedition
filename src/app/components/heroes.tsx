"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslation } from "../utils/getTranslation";

type HeroesProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function Heroes({ title, description, imageUrl }: HeroesProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = getTranslation(locale);

  const heroTitle = title;
  const heroDescription = description;
  const heroImage = imageUrl;

  return (
    <section className="bg-gray-50 text-[#252525] py-16 pt-32">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 mt-8 space-y-10 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-lg text-[#252525] text-justify">
            {heroDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="max-w-full md:max-w-md rounded-3xl shadow-lg mx-4 my-4"
          />
        </motion.div>
      </div>
    </section>
  );
}
