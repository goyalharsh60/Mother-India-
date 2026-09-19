import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BookOpen, Users, FlaskConical, Globe, Music, Palette, Calculator, Languages, ChevronDown, ChevronUp, Download } from "lucide-react";
import scienceLab from "@/assets/gallery/science-lab.jpg";
import smartClassroom from "@/assets/gallery/smart-classroom.jpg";

const grades = [
  {
    level: "Pre-Primary", range: "Nursery - KG",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Art & Craft", "Music & Dance"],
    syllabus: [
      "English: Alphabet recognition, phonics, simple words, picture reading, rhymes & storytelling",
      "Hindi: वर्णमाला, मात्राएँ, सरल शब्द, चित्र वर्णन, कविताएँ",
      "Mathematics: Numbers 1–100, counting, shapes, basic addition & subtraction, patterns",
      "EVS: My body, my family, animals, plants, festivals, seasons, hygiene",
      "Art & Craft: Drawing, coloring, paper folding, clay modeling, finger painting",
      "Music & Dance: Action songs, rhymes, basic rhythm, folk dance, group performances",
    ],
  },
  {
    level: "Primary", range: "Class I - V",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Computer Science", "General Knowledge"],
    syllabus: [
      "English: Grammar, comprehension, creative writing, handwriting, poetry & prose",
      "Hindi: व्याकरण, अपठित गद्यांश, निबंध लेखन, पत्र लेखन, कहानी",
      "Mathematics: Number system, fractions, geometry, measurement, data handling, mental math",
      "EVS: Living world, water, food, shelter, transport, environment awareness, maps",
      "Computer Science: MS Paint, MS Word basics, internet safety, typing skills, Scratch coding",
      "General Knowledge: Current affairs, famous personalities, sports, science facts, India & world",
    ],
  },
  {
    level: "Middle School", range: "Class VI - VIII",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Sanskrit", "Computer"],
    syllabus: [
      "English: Literature (prose & poetry), grammar, creative & descriptive writing, speech skills",
      "Hindi: गद्य-पद्य, व्याकरण, रचनात्मक लेखन, अनुवाद, भाषा कौशल",
      "Mathematics: Algebra, geometry, ratio & proportion, integers, mensuration, statistics",
      "Science: Physics (motion, light), Chemistry (elements, mixtures), Biology (cells, organisms)",
      "Social Science: History (medieval India), Geography (resources), Civics (democracy, governance)",
      "Sanskrit: श्लोक, व्याकरण, अनुवाद, संस्कृत साहित्य परिचय",
      "Computer: MS Office advanced, HTML basics, Scratch programming, cyber safety, digital literacy",
    ],
  },
  {
    level: "Secondary", range: "Class IX - X",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "IT"],
    syllabus: [
      "English: Beehive & Moments (NCERT), grammar, letter/essay writing, literature analysis",
      "Hindi: क्षितिज, कृतिका, व्याकरण, निबंध, पत्र लेखन, अपठित बोध",
      "Mathematics: Real numbers, polynomials, coordinate geometry, trigonometry, probability, statistics",
      "Science: Chemical reactions, electricity, magnetism, life processes, heredity, ecology",
      "Social Science: India & contemporary world, democratic politics, economics, geography of India",
      "IT: Networking basics, web development (HTML/CSS), database concepts, Python programming",
    ],
  },
  {
    level: "Sr. Secondary", range: "Class XI - XII",
    subjects: ["Science Stream", "Commerce Stream", "Humanities Stream"],
    syllabus: [
      "Science: Physics, Chemistry, Mathematics/Biology, English, Computer Science/Physical Education",
      "Commerce: Accountancy, Business Studies, Economics, English, Mathematics/Informatics Practices",
      "Humanities: History, Political Science, Geography/Psychology, English, Economics/Sociology",
      "All streams include practical exams, internal assessments, and project work as per CBSE guidelines",
    ],
  },
];

const subjectIcons: Record<string, React.ElementType> = {
  Mathematics: Calculator,
  Science: FlaskConical,
  English: BookOpen,
  Hindi: Languages,
  "Social Science": Globe,
  Music: Music,
  "Art & Craft": Palette,
};
const Academics = () => {
  const [expandedGrade, setExpandedGrade] = useState<string | null>(null);

  return (
    <Layout>
      <section className="relative bg-navy py-16 sm:py-20 overflow-hidden">
        <img src={smartClassroom} alt="Smart Classroom" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative container text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground animate-fade-in-up">Academics</h1>
          <p className="text-primary-foreground/70 text-base sm:text-lg mt-4 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            A comprehensive CBSE curriculum designed to nurture intellectual curiosity.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeader label="Programs" title="Curriculum Overview" />
          <div className="space-y-8 max-w-4xl mx-auto">
            {grades.map((grade) => (
              <div key={grade.level} className="bg-background border border-border rounded-2xl p-6 sm:p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy">{grade.level}</h3>
                    <p className="text-gold font-medium">{grade.range}</p>
                  </div>
                  <Button
                    variant="navy-outline"
                    size="sm"
                    onClick={() => setExpandedGrade(expandedGrade === grade.level ? null : grade.level)}
                  >
                    {expandedGrade === grade.level ? (
                      <><ChevronUp className="w-4 h-4 mr-1" /> Hide Syllabus</>
                    ) : (
                      <><ChevronDown className="w-4 h-4 mr-1" /> View Syllabus</>
                    )}
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {grade.subjects.map((sub) => {
                    const Icon = subjectIcons[sub] || BookOpen;
                    return (
                      <span key={sub} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warm-gray text-sm font-medium text-navy">
                        <Icon className="w-3.5 h-3.5 text-gold" /> {sub}
                      </span>
                    );
                  })}
                </div>
                {expandedGrade === grade.level && (
                  <div className="mt-6 pt-6 border-t border-border animate-fade-in">
                    <h4 className="font-display text-lg font-semibold text-navy mb-3">Detailed Syllabus</h4>
                    <ul className="space-y-2">
                      {grade.syllabus.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-gold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-gray">
        <div className="container text-center">
          <SectionHeader label="Faculty" title="Our Dedicated Teachers" description="A team of 60+ qualified educators committed to every student's growth." />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "60+ Faculty", desc: "Experienced educators" },
              { icon: BookOpen, label: "CBSE Aligned", desc: "Updated curriculum" },
              { icon: FlaskConical, label: "5 Labs", desc: "Hands-on learning" },
              { icon: Globe, label: "Smart Classes", desc: "Digital education" },
            ].map((item) => (
              <div key={item.label} className="bg-background rounded-xl p-6 text-center card-hover">
                <item.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-display font-semibold text-navy">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20">
        <div className="container">
          <SectionHeader label="Our Approach" title="Teaching Methodology" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-center">
            <div>
              <img src={scienceLab} alt="Hands-on Learning" className="rounded-2xl shadow-lg w-full" loading="lazy" width={800} height={600} />
            </div>
            <div className="space-y-5">
              {[
                { title: "Activity-Based Learning", desc: "Concepts are taught through experiments, projects, and real-world applications rather than rote memorization." },
                { title: "Differentiated Instruction", desc: "Teachers adapt lessons to meet individual student needs, ensuring no child is left behind." },
                { title: "Technology Integration", desc: "Smart boards, educational apps, and digital resources enhance the classroom experience." },
                { title: "Continuous Assessment", desc: "Regular formative assessments, quizzes, and feedback loops track student progress beyond just exams." },
              ].map((m) => (
                <div key={m.title} className="bg-background border border-border rounded-xl p-5 card-hover">
                  <h4 className="font-display font-semibold text-navy mb-1">{m.title}</h4>
                  <p className="text-sm text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
