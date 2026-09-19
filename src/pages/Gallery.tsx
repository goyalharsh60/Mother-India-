import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Eye, X } from "lucide-react";

import campusAerial from "@/assets/gallery/campus-aerial.jpg";
import annualDay from "@/assets/gallery/annual-day.jpg";
import sportsBasketball from "@/assets/gallery/sports-basketball.jpg";
import scienceLab from "@/assets/gallery/science-lab.jpg";
import library from "@/assets/gallery/library.jpg";
import smartClassroom from "@/assets/gallery/smart-classroom.jpg";
import musicConcert from "@/assets/gallery/music-concert.jpg";
import artClass from "@/assets/gallery/art-class.jpg";
import yogaSession from "@/assets/gallery/yoga-session.jpg";
import scienceExhibition from "@/assets/gallery/science-exhibition.jpg";
import independenceDay from "@/assets/gallery/independence-day.jpg";
import computerLab from "@/assets/gallery/computer-lab.jpg";
import diwaliCelebration from "@/assets/gallery/diwali-celebration.jpg";
import sportsDay from "@/assets/gallery/sports-day.jpg";
import schoolGarden from "@/assets/gallery/school-garden.jpg";
import morningAssembly from "@/assets/gallery/morning-assembly.jpg";

const galleryItems = [
  { id: 1, src: campusAerial, category: "Campus", title: "Campus Aerial View" },
  { id: 2, src: annualDay, category: "Events", title: "Annual Day Celebration" },
  { id: 3, src: sportsBasketball, category: "Sports", title: "Basketball Tournament" },
  { id: 4, src: smartClassroom, category: "Classroom", title: "Smart Classroom" },
  { id: 5, src: scienceLab, category: "Classroom", title: "Science Laboratory" },
  { id: 6, src: library, category: "Campus", title: "School Library" },
  { id: 7, src: musicConcert, category: "Events", title: "Annual Music Concert" },
  { id: 8, src: artClass, category: "Classroom", title: "Art & Craft Class" },
  { id: 9, src: yogaSession, category: "Sports", title: "Yoga & Wellness Session" },
  { id: 10, src: scienceExhibition, category: "Events", title: "Science Innovation Fair" },
  { id: 11, src: independenceDay, category: "Events", title: "Independence Day" },
  { id: 12, src: computerLab, category: "Classroom", title: "Computer Laboratory" },
  { id: 13, src: diwaliCelebration, category: "Events", title: "Diwali Celebration" },
  { id: 14, src: sportsDay, category: "Sports", title: "Sports Day Track Race" },
  { id: 15, src: schoolGarden, category: "Campus", title: "School Garden & Courtyard" },
  { id: 16, src: morningAssembly, category: "Campus", title: "Morning Assembly" },
];

const categories = ["All", "Campus", "Events", "Sports", "Classroom"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <Layout>
      <section className="bg-navy py-16 sm:py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground animate-fade-in-up">Gallery</h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg mt-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            A visual journey through our school life.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-primary-foreground border-gold"
                    : "border-border hover:bg-gold hover:text-primary-foreground hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item)}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="absolute bottom-3 left-3 text-xs bg-background/90 px-2 py-1 rounded-full font-medium">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-gray">
        <div className="container text-center">
          <SectionHeader label="Virtual Experience" title="Take a Virtual Walk" description="Explore our campus from the comfort of your home." />
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/arZKRfDBsn8?si=fxckk1_QbL_b7MCu"
              title="Mother India Convent School Virtual Campus Tour"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-navy/90 flex items-center justify-center p-3 sm:p-4 animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary-foreground hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-full sm:max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center text-primary-foreground mt-4 font-display text-lg">{lightboxImg.title}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
