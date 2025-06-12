
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admission', href: '#admission' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const importantLinks = [
    { name: 'Admission Process', href: '#admission' },
    { name: 'Fee Structure', href: '#contact' },
    { name: 'Academic Calendar', href: '#academics' },
    { name: 'School Policies', href: '#about' },
    { name: 'Transport', href: '#contact' },
    { name: 'Careers', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Youtube, name: 'YouTube', href: '#' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/8c41b5d9-b356-4edc-813c-9ed31f01c8b3.png" 
                alt="G D Goenka Public School" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">G D GOENKA</h3>
                <p className="text-sm opacity-90">PUBLIC SCHOOL</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Nurturing tomorrow's leaders through excellence in education, 
              character building, and holistic development since 1999.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>Bhatta Bazar, Purnea</p>
                  <p>Bihar - 854301, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>+91-6454-225041</p>
                  <p>+91-6454-225042</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>info@gdgoenkapurnea.com</p>
                  <p>admission@gdgoenkapurnea.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90">
              <p>&copy; 2024 G D Goenka Public School, Purnea. All rights reserved.</p>
              <p className="text-xs mt-1">CBSE Affiliation No: 330881 | School Code: 10485</p>
            </div>
            <div className="flex items-center space-x-1 text-sm opacity-90">
              <span>Copyright reserved by</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>Kushi Singh</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
