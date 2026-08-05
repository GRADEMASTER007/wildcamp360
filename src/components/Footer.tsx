import { Link } from "react-router-dom";
import { Mountain, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Community Guidelines", to: "/community-guidelines" },
  { label: "Copyright Policy", to: "/copyright-policy" },
  { label: "Facebook Data Deletion", to: "/facebook-data-deletion" },
];

const exploreLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Destinations", href: "/#destinations" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold text-foreground">WildCamp</span>
            </div>
            <p className="text-sm text-muted-foreground mb-5">
              Premium camping and RV adventures across the country. Your gateway to nature.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h2 className="font-semibold mb-4">Explore</h2>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h2 className="font-semibold mb-4">Legal</h2>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-4">Contact</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (555) 123-CAMP
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                info@wildcamp.com
              </li>
              <li className="text-sm text-muted-foreground">
                123 Adventure Drive
                <br />
                Mountain View, CO 80424
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WildCamp Adventures. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Made for the outdoors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
