import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import schoolCrest from "@/assets/school-crest.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={schoolCrest} alt="Mother India Convent School Crest" className="h-9 w-9 object-contain shrink-0" />
              <h3 className="font-display text-lg font-bold">Mother India Convent School</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Nurturing young minds with a blend of academic excellence and moral values since establishment.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="w-8 h-0.5 bg-gold mb-4" />
            {["About Us", "Academics", "Admissions", "Events", "Gallery", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(/\s/g, "-")}`}
                className="block py-1.5 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="w-8 h-0.5 bg-gold mb-4" />
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>Mother India Senior Secondary School, Patran</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <span>+91 123 456 7890</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                <span>info@motherindiapatran.edu</span>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 shrink-0 text-gold" />
                <span>Mon - Sat: 8:00 AM - 3:00 PM</span>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Location</h4>
            <div className="w-8 h-0.5 bg-gold mb-4" />
            <div className="rounded-lg overflow-hidden h-32 sm:h-40">
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
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Mother India Convent School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
