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
        description="Explore the beauty of Lumajang with us. Join our expedition and discover the hidden gems of this beautiful region in East Java Indonesia."
      />
      <ZenoraHeroes
        title={`Tumpak Sewu - Bromo - Lava Tour Semeru\n3 Days 2 Night from Surabaya Airport`}
        description={`Tumpak Sewu, Bromo, and Lava Tour Semeru is the 3 best tourism destination in Lumajang. Lumajang is located on the slopes of Mount Semeru, which is known as the most highest Mountain in Java Island with a height of 3676 meters above sea level. To start the tour to Lumajang 3 best tourism destination, you can be pick up in the Surabaya Airport with a duration of 3 days 2 nights Tour.\nIf you have enough time you will visit other interesting tourism destination around the slopes of Mount Semeru such a natural baths, culture, and culinary.`}
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
