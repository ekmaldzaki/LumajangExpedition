"use client";

import { motion } from "framer-motion";

interface LogoCenterProps {
  src: string;
  alt: string;
  title: string;
}

export default function LogoCenter({ src, alt, title }: LogoCenterProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-50 mt-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex justify-center items-center"
      >
        <img
          src={src}
          alt={alt}
          className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 md:mt-0 md:ml-4 text-xl md:text-2xl font-bold text-[#252525] text-center md:text-left"
      >
        {title}
      </motion.h1>
    </div>
  );
}
