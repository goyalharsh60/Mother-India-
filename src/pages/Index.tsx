import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Camera, Trophy, Calendar, Phone, ArrowRight, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroCampus from "@/assets/hero-campus.jpg";
import principalImg from "@/assets/principal.jpeg";
const stats = [
  { value: 26, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "Board Results" },
  { value: 15, suffix: ":1", label: "Student-Teacher Ratio" },
  { value: 50, suffix: "+", label: "Co-curricular Activities" },
];

const quickLinks = [
  { icon: GraduationCap, label: "Admissions", desc: "Join our family", path: "/admissions" },
  { icon: BookOpen, label: "Academics", desc: "Explore curriculum", path: "/academics" },
  { icon: Camera, label: "Campus Tour", desc: "Virtual walkthrough", path: "/gallery" },
  { icon: Trophy, label: "Achievements", desc: "Our proud moments", path: "/about#achievements" },
  { icon: Calendar, label: "Events", desc: "What's happening", path: "/events" },
  { icon: Phone, label: "Contact Us", desc: "Get in touch", path: "/contact" },
];

const events = [
  { date: "15 May", title: "Annual Day Celebration 2025" },
  { date: "22 May", title: "Inter-School Science Exhibition" },
  { date: "01 Jun", title: "Summer Camp Registrations Open" },
  { date: "10 Jun", title: "Parent-Teacher Meeting" },
  { date: "15 Jul", title: "Independence Day Preparations" },
  { date: "20 Aug", title: "Sports Day 2025" },
];

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">
          <img
            src={heroCampus}
            alt="Mother India Convent School Campus"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/30" />
          <div className="relative container py-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-8 h-px bg-gold" />
              <span className="font-label text-xs tracking-[0.25em] text-gold uppercase">Est. 1998</span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.15s" }}
            >
              Nurturing Tomorrow's
              <br />
              <span className="text-gold">Leaders Today</span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-xl sm:max-w-2xl mx-auto mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Where academic excellence meets character building — shaping responsible citizens for a brighter future.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}
            >
              <Button variant="gold" size="lg" className="text-base px-8" asChild>
                <Link to="/gallery">Explore Campus</Link>
              </Button>
              <Button variant="crimson" size="lg" className="text-base px-8 animate-pulse-gentle" asChild>
                <Link to="/admissions">Admission 2025-26</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="relative -mt-16 z-10 container">
          <div className="bg-background rounded-2xl shadow-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-muted-foreground text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-warm-gray">
          <div className="container">
            <SectionHeader label="At a Glance" title="Quick Access" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 scroll-reveal">
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="group bg-background rounded-xl p-6 gold-border-top card-hover text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="py-20">
          <div className="container">
            <div className="scroll-reveal grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 items-center">
              <div className="md:col-span-3">
                <span className="section-label">From The Principal's Desk</span>
                <h2 className="section-title mt-2">A Message of Inspiration</h2>
                <div className="section-divider mt-4" />
                <div className="mt-8 relative">
                  <Quote className="w-10 h-10 text-gold/30 absolute -top-2 -left-1 md:-left-2" />
                  <blockquote className="font-accent text-lg sm:text-xl md:text-2xl italic text-navy leading-relaxed pl-6 md:pl-8">
                    Education is not merely about grades and examinations. It is about nurturing
                    the whole child — their intellect, creativity, empathy, and character. At Mother India Convent School,
                    every student is encouraged to dream big and work towards
                    those dreams with integrity and dedication.
                  </blockquote>
                </div>
                <div className="mt-6 pl-0 md:pl-8">
                  <p className="text-sm text-muted-foreground">Principal, Mother India Convent School</p>
                </div>
                <Link
                  to="/about#leadership"
                  className="inline-flex items-center gap-2 mt-6 pl-0 md:pl-8 text-gold font-medium hover:gap-3 transition-all"
                >
                  Read Full Message <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="md:col-span-2">
                <div className="relative mt-4 md:mt-0">
                  <img
                    src={principalImg}
                    alt="Principal portrait"
                    className="relative rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Marquee */}
        <section className="py-12 bg-navy overflow-hidden">
          <div className="container mb-6">
            <span className="font-label text-xs tracking-[0.2em] text-gold uppercase">Upcoming Events</span>
          </div>
          <div className="relative">
            <div className="flex marquee">
              {[...events, ...events].map((event, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-2 sm:mx-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-4 sm:p-5 w-64 sm:w-72 flex items-center gap-3 sm:gap-4 hover:bg-primary-foreground/10 transition-colors cursor-pointer"
                >
                  <div className="bg-gold text-navy font-bold text-center rounded-lg p-2 sm:p-3 min-w-[52px] sm:min-w-[60px]">
                    <span className="text-sm block leading-tight">{event.date}</span>
                  </div>
                  <div>
                    <p className="text-primary-foreground font-medium text-sm sm:text-sm">{event.title}</p>
                    <span className="text-primary-foreground/50 text-xs flex items-center gap-1 mt-1">
                      View Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
              <GraduationCap
                key={i}
                className="absolute w-8 h-8"
                style={{
                  left: `${(i * 17) % 100}%`,
                  top: `${(i * 31) % 100}%`,
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>
          <div className="container relative text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-3">Stay Updated</h2>
            <p className="text-primary-foreground/60 mb-8">
              Subscribe to our newsletter for the latest news and events
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto sm:items-stretch"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 px-5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold transition-colors"
              />
              <Button variant="gold" size="lg" className="w-full sm:w-auto h-12">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
