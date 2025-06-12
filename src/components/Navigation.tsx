
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admission', href: '#admission' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91-6454-225041</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@gdgoenkapurnea.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Purnea, Bihar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <img 
                src="/lovable-uploads/8c41b5d9-b356-4edc-813c-9ed31f01c8b3.png" 
                alt="G D Goenka Public School" 
                className="h-10 md:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-xs md:text-sm text-muted-foreground">PURNEA</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm xl:text-base"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-border">
              <div className="pt-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone size={14} />
                  <span>+91-6454-225041</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail size={14} />
                  <span>info@gdgoenkapurnea.com</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
