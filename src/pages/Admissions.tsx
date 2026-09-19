import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FileText, UserCheck, PenTool, Users, CheckCircle, Download, ChevronDown, ChevronUp } from "lucide-react";

const steps = [
  { icon: FileText, title: "Online Registration", desc: "Fill the application form with required details" },
  { icon: UserCheck, title: "Document Verification", desc: "Submit academic records and identity proof" },
  { icon: PenTool, title: "Entrance Assessment", desc: "Age-appropriate written evaluation" },
  { icon: Users, title: "Personal Interview", desc: "Interactive session with student and parents" },
  { icon: CheckCircle, title: "Enrollment", desc: "Fee payment and admission confirmation" },
];

const faqs = [
  { q: "What is the age criterion for admission to Nursery?", a: "A child should be 3+ years old as of March 31 of the admission year." },
  { q: "What documents are required for admission?", a: "Birth certificate, address proof, passport-size photos, transfer certificate (if applicable), and Aadhaar card of the child." },
  { q: "Is there a sibling quota?", a: "Yes, siblings of current students receive priority during the admission process." },
  { q: "What is the medium of instruction?", a: "English is the primary medium of instruction, with Hindi as a compulsory second language." },
  { q: "Does the school provide transportation?", a: "Yes, we offer bus services covering major routes in the city. Route details are available at the office." },
  { q: "Are there any scholarship programs?", a: "Merit-based scholarships are available for students excelling in academics and sports. Details are provided during the admission interview." },
];

const Admissions = () => {
  const ref = useScrollReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <div ref={ref}>
        <section className="bg-navy py-16 sm:py-20">
          <div className="container text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground animate-fade-in-up">Admissions 2025-26</h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg mt-4 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Begin your child's journey towards excellence. Applications are now open.
            </p>
            <Button variant="gold" size="lg" className="mt-8 animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.3s" }}>
              Apply Now
            </Button>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container">
            <SectionHeader label="How to Apply" title="Admission Process" />
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/20 hidden md:block" />
              {steps.map((step, i) => (
                <div key={step.title} className="scroll-reveal flex gap-4 sm:gap-6 mb-10 relative">
                  <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-gold" />
                  </div>
                  <div className="pt-1 sm:pt-3">
                    <span className="text-gold font-label text-xs tracking-wider">STEP {i + 1}</span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-navy mt-1">{step.title}</h3>
                    <p className="text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16 bg-warm-gray">
          <div className="container text-center">
            <SectionHeader label="Fees" title="Fee Structure" description="Transparent and competitive fee structure for all grades." />
          <div className="max-w-4xl mx-auto mt-8 overflow-x-auto">
            <div className="bg-background rounded-2xl shadow-lg overflow-hidden min-w-[720px]">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-navy text-primary-foreground">
                    <th className="px-4 sm:px-6 py-4 font-display font-semibold">Grade</th>
                    <th className="px-4 sm:px-6 py-4 font-display font-semibold">Admission Fee</th>
                    <th className="px-4 sm:px-6 py-4 font-display font-semibold">Annual Tuition</th>
                    <th className="px-4 sm:px-6 py-4 font-display font-semibold hidden md:table-cell">Monthly Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { grade: "Nursery - KG", admission: "₹15,000", annual: "₹36,000", monthly: "₹3,000" },
                    { grade: "Class I - V", admission: "₹18,000", annual: "₹42,000", monthly: "₹3,500" },
                    { grade: "Class VI - VIII", admission: "₹20,000", annual: "₹48,000", monthly: "₹4,000" },
                    { grade: "Class IX - X", admission: "₹22,000", annual: "₹54,000", monthly: "₹4,500" },
                    { grade: "Class XI - XII", admission: "₹25,000", annual: "₹60,000", monthly: "₹5,000" },
                  ].map((row, i) => (
                    <tr key={row.grade} className={i % 2 === 0 ? "bg-cream" : "bg-background"}>
                      <td className="px-4 sm:px-6 py-4 font-medium text-navy">{row.grade}</td>
                      <td className="px-4 sm:px-6 py-4 text-muted-foreground">{row.admission}</td>
                      <td className="px-4 sm:px-6 py-4 text-muted-foreground">{row.annual}</td>
                      <td className="px-4 sm:px-6 py-4 text-muted-foreground hidden md:table-cell">{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">* Transport, uniform, and book fees are additional. Sibling discount of 10% applicable on tuition fees.</p>
          </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container">
            <SectionHeader label="FAQs" title="Frequently Asked Questions" />
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="scroll-reveal bg-cream border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-navy pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-crimson shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-crimson shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-muted-foreground animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Admissions;
