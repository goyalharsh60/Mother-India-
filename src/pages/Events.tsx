import Layout from "@/components/Layout";
import { Trophy, Calendar, Star, Sparkles, Mic } from "lucide-react";

import annualDay from "@/assets/gallery/annual-day.jpg";
import sportsDay from "@/assets/gallery/sports-day.jpg";
import scienceExhibition from "@/assets/gallery/science-exhibition.jpg";
import diwaliCelebration from "@/assets/gallery/diwali-celebration.jpg";
import morningAssembly from "@/assets/gallery/morning-assembly.jpg";
import independenceDay from "@/assets/gallery/independence-day.jpg";

const categories = ["All", "Annual Day", "Sports", "Exhibitions", "Cultural", "Guest Lectures"];

const events = [
  { title: "Annual Day Celebration 2024", date: "15 Dec 2024", category: "Annual Day", desc: "A grand celebration of talent, achievement, and school spirit.", img: annualDay },
  { title: "Inter-School Sports Meet", date: "20 Nov 2024", category: "Sports", desc: "Students competed in athletics, basketball, and cricket.", img: sportsDay },
  { title: "Science Innovation Fair", date: "10 Oct 2024", category: "Exhibitions", desc: "Over 50 student projects showcased across robotics and environment.", img: scienceExhibition },
  { title: "Diwali Cultural Program", date: "01 Nov 2024", category: "Cultural", desc: "Vibrant performances celebrating India's festival of lights.", img: diwaliCelebration },
  { title: "Career Guidance Workshop", date: "15 Sep 2024", category: "Guest Lectures", desc: "Industry experts guided senior students on career paths.", img: morningAssembly },
  { title: "Independence Day", date: "15 Aug 2024", category: "Cultural", desc: "Flag hoisting ceremony followed by patriotic performances.", img: independenceDay },
];

const categoryIcons: Record<string, React.ElementType> = {
  "Annual Day": Star,
  Sports: Trophy,
  Exhibitions: Sparkles,
  Cultural: Calendar,
  "Guest Lectures": Mic,
};

const Events = () => {
  return (
    <Layout>
      <section className="bg-navy py-16 sm:py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground animate-fade-in-up">Events & Celebrations</h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg mt-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Moments that make school life memorable.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 sm:px-5 py-2 rounded-full text-sm font-medium border border-border hover:bg-gold hover:text-primary-foreground hover:border-gold transition-all first:bg-gold first:text-primary-foreground first:border-gold"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map((event) => {
              const Icon = categoryIcons[event.category] || Calendar;
              return (
                <div key={event.title} className="bg-background border border-border rounded-2xl overflow-hidden card-hover group">
                  <div className="h-40 sm:h-48 overflow-hidden">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">{event.date}</span>
                      <span className="text-xs font-medium text-navy bg-muted px-2 py-1 rounded-full">{event.category}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
