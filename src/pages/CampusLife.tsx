import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { FlaskConical, BookOpen, Dumbbell, Shield, Home, Users } from "lucide-react";

import scienceLab from "@/assets/gallery/science-lab.jpg";
import library from "@/assets/gallery/library.jpg";
import sportsBasketball from "@/assets/gallery/sports-basketball.jpg";
import campusAerial from "@/assets/gallery/campus-aerial.jpg";
import smartClassroom from "@/assets/gallery/smart-classroom.jpg";
import artClass from "@/assets/gallery/art-class.jpg";

const facilities = [
  { icon: FlaskConical, title: "Science Labs", desc: "Fully equipped Physics, Chemistry, and Biology laboratories.", img: scienceLab },
  { icon: BookOpen, title: "Library", desc: "Over 10,000 books across genres with a dedicated reading room.", img: library },
  { icon: Dumbbell, title: "Sports Complex", desc: "Basketball court, cricket ground, athletics track, and indoor games.", img: sportsBasketball },
  { icon: Shield, title: "Safety & Security", desc: "CCTV surveillance, trained security, and child safety protocols.", img: campusAerial },
  { icon: Home, title: "Smart Classrooms", desc: "Interactive boards and projectors in every classroom.", img: smartClassroom },
  { icon: Users, title: "Activity Rooms", desc: "Dedicated spaces for art, music, dance, and yoga.", img: artClass },
];

const houses = [
  { name: "Ganga House", color: "bg-blue-500" },
  { name: "Yamuna House", color: "bg-green-500" },
  { name: "Kaveri House", color: "bg-yellow-500" },
  { name: "Narmada House", color: "bg-red-500" },
];

const CampusLife = () => {
  return (
    <Layout>
      <section className="bg-navy py-16 sm:py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground animate-fade-in-up">Campus Life</h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg mt-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            A vibrant environment designed for learning, growth, and fun.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeader label="Infrastructure" title="World-Class Facilities" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {facilities.map((f) => (
              <div key={f.title} className="bg-background border border-border rounded-2xl overflow-hidden card-hover gold-border-top">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                </div>
                <div className="p-5 sm:p-6">
                  <f.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-gray">
        <div className="container">
          <SectionHeader label="House System" title="Houses & Clubs" description="Fostering teamwork and healthy competition." />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {houses.map((h) => (
              <div key={h.name} className="text-center bg-background rounded-2xl p-4 sm:p-6 card-hover">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${h.color} mx-auto mb-3 opacity-80`} />
                <h4 className="font-display font-semibold text-navy">{h.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampusLife;
