import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Compass, Eye } from "lucide-react";
import vicePrincipalImg from "@/assets/vice-principal.jpg";
import schoolCrest from "@/assets/school-crest.png";
import heroCampus from "@/assets/hero-campus.jpg";
import principalImg from "@/assets/principal.jpeg";
import principalImg2 from "@/assets/principal.jpg";

const timeline = [
  { year: "1998", title: "Foundation", desc: "Mother India Convent School was established with a vision to provide quality education rooted in values." },
  { year: "2003", title: "First Board Results", desc: "Our first batch achieved 100% pass rate in CBSE Board examinations." },
  { year: "2008", title: "Campus Expansion", desc: "New science laboratories, computer lab, and sports complex inaugurated." },
  { year: "2013", title: "Silver Jubilee Milestone", desc: "Celebrated 15 years of excellence with a grand alumni reunion." },
  { year: "2018", title: "Digital Campus", desc: "Smart classrooms and digital learning infrastructure deployed across all grades." },
  { year: "2024", title: "Center of Excellence", desc: "Recognized as a Center of Excellence for innovative teaching methodologies." },
];

const leaders = [
  { name: "Mr. XYZ", role: "Principal", img: principalImg, bio: "With over 26 years in education, our principal leads Mother India Convent School with compassion and a commitment to holistic development." },
  { name: "Mr. Rajesh Kumar", role: "Vice Principal", img: vicePrincipalImg, bio: "An M.Ed. holder specializing in curriculum design, Mr. Kumar oversees academic planning and teacher development." },
  { name: "Dr. Anita Sharma", role: "Chairman", img: principalImg2, bio: "A philanthropist and educationist, Dr. Sharma founded Mother India Convent School with the dream of accessible quality education for all." },
];

const About = () => {
  const ref = useScrollReveal();

  return (
    <Layout>
      <div ref={ref}>
        {/* Hero */}
        <section className="relative h-[42vh] sm:h-[50vh] flex items-center">
          <img src={heroCampus} alt="Campus" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative container">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground animate-fade-in-up">
              Our Story
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg mt-4 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              A legacy of academic excellence and character building since 1998.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section id="history" className="py-20">
          <div className="container">
            <SectionHeader label="Our Journey" title="Milestones That Define Us" />
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 md:-translate-x-1/2" />
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`scroll-reveal relative flex flex-col md:items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="font-display text-4xl font-bold text-gold/40">{item.year}</span>
                    <h3 className="font-display text-xl font-semibold text-navy mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-background z-10" />
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="vision" className="py-20 bg-warm-gray">
          <div className="container">
            <SectionHeader label="Our Purpose" title="Vision & Mission" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="scroll-reveal bg-background rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a nurturing environment where every child discovers their unique potential,
                  develops critical thinking skills, and grows into a responsible global citizen
                  equipped with strong moral values.
                </p>
              </div>
              <div className="scroll-reveal bg-background rounded-2xl p-8 shadow-lg card-hover">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-3">Our Mission</h3>
                <ul className="text-muted-foreground space-y-2">
                  {[
                    "Foster academic excellence through innovative pedagogy",
                    "Develop leadership qualities and social responsibility",
                    "Encourage creativity, sports, and cultural expression",
                    "Build a safe, inclusive, and supportive learning community",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Compass className="w-4 h-4 text-gold mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-20">
          <div className="container">
            <SectionHeader label="Leadership" title="Meet Our Leaders" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {leaders.map((leader, i) => (
                <div
                  key={leader.name}
                  className={`scroll-reveal group bg-background rounded-2xl overflow-hidden shadow-lg card-hover ${i === 0 ? "md:row-span-1" : ""}`}
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-warm-gray">
                    {leader.img ? (
                      <img
                        src={leader.img}
                        alt={leader.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-warm-gray to-stone-200 text-navy/60 font-medium text-sm tracking-[0.2em] uppercase">
                        Principal
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-primary-foreground text-sm">{leader.bio}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-navy">{leader.name}</h3>
                    <p className="text-gold text-sm font-medium">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
