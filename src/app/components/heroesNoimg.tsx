"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { getTranslation } from "../utils/getTranslation";

type HeroesProps = {
  title?: string;
  description?: string;
};

export default function Heroes({ title, description }: HeroesProps) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = getTranslation(locale);

  const heroTitle = title;
  const heroDescription = description;

  return (
    <section className="bg-gray-50 text-[#252525] py-16 pt-32">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 mt-8 space-y-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-3/4 px-4"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-lg text-[#252525] text-center text-justify-center">
            {heroDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
