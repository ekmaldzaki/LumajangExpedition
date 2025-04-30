"use client";

import HeroesNoimg from "../components/heroesNoimg";
import LogoCenter from "../components/logoCenter";
import ZenoraHeroes from "../components/zenoraHeroes";
import ZenoraCardList from "../components/zenoraCardList";
import ItineraryCardList from "../components/itineraryCardList";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroesNoimg
        title="Welcome to Lumajang Expedition Tour!"
        description="Jelajahi keindahan Lumajang bersama kami. Bergabunglah dalam ekspedisi kami dan temukan permata tersembunyi di daerah yang indah ini di Jawa Timur Indonesia."
      />
      <LogoCenter
        src="/images/logo_1.jpg"
        alt="Zenora Logo"
        title="Zenora Tour and Travel"
      />
      <ZenoraHeroes
        title="Tumpak Sewu - Bromo - Lava Tour Semeru 3 Days 2 Night from Surabaya Airport"
        description="Tumpak Sewu, Bromo, and Lava Tour Semeru is the 3 best tourism destination in Lumajang. Lumajang is located on the slopes of Mount Semeru, which is known as the most highest Mountain in Java Island with a height of 3676 meters above sea level. To start the tour to Lumajang 3 best tourism destination, you can be pick up in the Surabaya Airport with a duration of 3 days 2 nights Tour. If you have enough time you will visit other interesting tourism destination around the slopes of Mount Semeru such a natural baths, culture, and culinary."
        images={[
          { src: "/images/tumpaksewu_1.png", alt: "Tumpak Sewu Image" },
          { src: "/images/bromo_1.png", alt: "Bromo Image" },
          { src: "/images/lavatour_1.png", alt: "Lava Tour Image" },
        ]}
      />
      <ZenoraCardList />
      <ItineraryCardList />
      <Footer />
    </div>
  );
}
