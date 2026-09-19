import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Mother India Senior Secondary School, Patran" },
  { icon: Phone, label: "Phone", value: "+91 123 456 7890", href: "tel:+911234567890" },
  { icon: Mail, label: "Email", value: "info@motherindiapatran.edu", href: "mailto:info@motherindiapatran.edu" },
  { icon: Clock, label: "Office Hours", value: "Mon - Sat: 8:00 AM - 3:00 PM" },
];

const Contact = () => {
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div ref={ref}>
        <section className="bg-navy py-16 sm:py-20">
          <div className="container text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/70 text-base sm:text-lg mt-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              We'd love to hear from you. Reach out to us for any enquiry.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Info */}
              <div className="lg:col-span-2 scroll-reveal">
                <SectionHeader label="Contact Info" title="Reach Us" centered={false} />
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="font-medium text-navy hover:text-gold transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-navy">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-xl overflow-hidden h-40 sm:h-48">
                  <iframe
                    src="https://www.google.com/maps?q=29.9611735,76.0736607&t=k&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mother India Senior Secondary School Location"
                  />
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 scroll-reveal">
                {submitted ? (
                  <div className="bg-background border border-border rounded-2xl p-12 text-center animate-fade-in">
                    <CheckCircle className="w-16 h-16 text-gold mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-navy mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      Your enquiry has been submitted. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
                    <h3 className="font-display text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="text-sm font-medium text-navy mb-1.5 block">Parent Name</label>
                        <input required type="text" className="w-full border-b-2 border-border bg-transparent py-2.5 px-1 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy mb-1.5 block">Student Name</label>
                        <input required type="text" className="w-full border-b-2 border-border bg-transparent py-2.5 px-1 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy mb-1.5 block">Email</label>
                        <input required type="email" className="w-full border-b-2 border-border bg-transparent py-2.5 px-1 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-navy mb-1.5 block">Phone</label>
                        <input required type="tel" className="w-full border-b-2 border-border bg-transparent py-2.5 px-1 focus:outline-none focus:border-gold transition-colors" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="text-sm font-medium text-navy mb-1.5 block">Subject</label>
                      <select className="w-full border-b-2 border-border bg-transparent py-2.5 px-1 focus:outline-none focus:border-gold transition-colors">
                        <option>Admission Enquiry</option>
                        <option>Transport Query</option>
                        <option>Fee Query</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="text-sm font-medium text-navy mb-1.5 block">Message</label>
                      <textarea required rows={4} className="w-full border-b-2 border-border bg-transparent py-2.5 px-1 focus:outline-none focus:border-gold transition-colors resize-none" />
                    </div>
                    <Button variant="crimson" size="lg" type="submit" className="w-full sm:w-auto">
                      <Send className="w-4 h-4 mr-2" /> Send Enquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
