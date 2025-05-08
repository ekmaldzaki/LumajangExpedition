"use client";

import { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === card.details.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? card.details.images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      {/* Card Section */}
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-col items-center p-2 sm:p-3 bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg transition-shadow w-full max-w-[200px] sm:max-w-[250px]"
          onClick={openModal}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto aspect-[4/5] rounded-md object-cover"
          />
          <div className="mt-3 flex flex-col justify-center w-full text-center">
            <h2 className="text-xs sm:text-sm font-bold text-gray-800">
              {card.title}
            </h2>
          </div>
        </motion.div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
        >
          <Dialog.Panel className="bg-white p-4 sm:p-6 rounded-lg max-w-3xl w-full mx-2">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Carousel Section */}
              <div className="relative w-full md:w-1/2">
                <img
                  src={card.details.images[currentIndex]}
                  alt={`Detail ${currentIndex + 1}`}
                  className="w-full aspect-[4/5] object-cover rounded-md sm:rounded-lg max-h-[300px] md:max-h-[400px]"
                />
                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:scale-125 transition-transform duration-200"
                >
                  &#10094;
                </button>
                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:scale-125 transition-transform duration-200"
                >
                  &#10095;
                </button>
                {/* Indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {card.details.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentIndex ? "bg-white" : "bg-gray-400"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Description Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <Dialog.Title className="text-base sm:text-2xl font-bold text-gray-800 mb-2">
                    {card.details.title}
                  </Dialog.Title>
                  <Dialog.Description className="text-xs sm:text-sm text-gray-600 mb-4 text-justify">
                    {card.details.description}
                  </Dialog.Description>
                </div>
                <button
                  onClick={closeModal}
                  className="mt-4 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-red-500 text-white rounded-md hover:bg-red-600 self-center md:self-start"
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
