"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  details: {
    images: string[];
    title: string;
    description: string;
  };
}

interface ZenoraCardProps {
  card: CardData;
}

export default function ZenoraCard({ card }: ZenoraCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-center px-2 sm:px-4">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-row items-center p-3 sm:p-4 bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow w-full max-w-3xl"
          onClick={openModal}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-24 sm:w-40 h-32 sm:h-60 rounded-lg object-cover flex-shrink-0"
          />
          <div className="ml-3 sm:ml-4 flex flex-col justify-center w-full">
            <h2 className="text-sm sm:text-lg font-bold text-gray-800">
              {card.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 text-justify">
              {card.description}
            </p>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
          <Dialog.Panel className="bg-white p-4 sm:p-6 rounded-lg max-w-3xl w-full mx-2">
            <div className="flex flex-col md:flex-row gap-2 sm:gap-4">
              {/* Foto-foto di atas (mobile) atau kiri (desktop) */}
              <div className="grid grid-cols-4 sm:grid-cols-2 gap-1 sm:gap-2 w-full md:w-1/2">
                {card.details.images.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Detail ${index + 1}`}
                    className="w-full aspect-[3/4] object-cover rounded-md sm:rounded-lg"
                  />
                ))}
              </div>

              {/* Deskripsi di bawah (mobile) atau kanan (desktop) */}
              <div className="w-full md:w-1/2">
                <Dialog.Title className="text-base sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                  {card.details.title}
                </Dialog.Title>
                <Dialog.Description className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 text-justify">
                  {card.details.description}
                </Dialog.Description>
                <button
                  onClick={closeModal}
                  className="mt-2 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </>
  );
}
