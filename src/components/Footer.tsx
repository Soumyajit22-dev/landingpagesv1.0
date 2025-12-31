import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Platform", "Integrations", "Pricing", "Changelog", "Docs"],
    Company: ["About Us", "Careers", "Blog", "Contact", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Trust FAQ"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground">
                Varticas
              </span>
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
