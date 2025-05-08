"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ItineraryItem {
  title: string;
  description: string;
}

interface ItineraryCardProps {
  item: ItineraryItem;
}

export default function ItineraryCard({ item }: ItineraryCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Title section */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 bg-gray-100 hover:bg-gray-200 font-semibold text-[#252525] text-left flex items-center justify-between"
      >
        <span>{item.title}</span>
        <span className={`text-green-500 text-xl`}>{isOpen ? "-" : "+"}</span>
      </button>

      {/* Accordion content opens below */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-2 text-sm text-[#252525] bg-white"
          >
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
