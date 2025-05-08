"use client";

import Navbar from "../components/navbar";
import HeroesWithimg from "../components/heroesWithimg";
import ZenoraHeroes from "../components/zenoraHeroes";
import ZenoraCardList from "../components/zenoraCardList";
import ItineraryCardList from "../components/itineraryCardList";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroesWithimg
        title="Lumajang"
        subtitle="Expedition Tour!"
        description="Jelajahi keindahan Lumajang bersama kami. Bergabunglah dalam ekspedisi kami dan temukan permata tersembunyi di daerah yang indah ini di Jawa Timur Indonesia."
      />
      <ZenoraHeroes
        title="Tumpak Sewu - Bromo - Lava Tour Semeru 3 Days 2 Night from Surabaya Airport"
        description="Tumpak Sewu, Bromo, dan Lava Tour Semeru adalah 3 destinasi wisata terbaik di Lumajang. Lumajang terletak di lereng Gunung Semeru, yang dikenal sebagai gunung tertinggi di Pulau Jawa dengan ketinggian 3676 meter di atas permukaan laut. Untuk memulai tur ke 3 destinasi wisata terbaik di Lumajang, Anda dapat dijemput di Bandara Surabaya dengan durasi tur 3 hari 2 malam. Jika Anda memiliki waktu yang cukup, Anda juga akan mengunjungi destinasi wisata menarik lainnya di sekitar lereng Gunung Semeru seperti pemandian alami, budaya, dan kuliner."
        images={[
          { src: "/images/tumpaksewu_5.png", alt: "Tumpak Sewu Image" },
          { src: "/images/bromo_5.png", alt: "Bromo Image" },
          { src: "/images/lavatour_1.png", alt: "Lava Tour Image" },
        ]}
      />
      <ZenoraCardList />
      <ItineraryCardList />
      <Footer />
    </div>
  );
}
