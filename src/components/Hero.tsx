
import React from 'react';
import { ArrowRight, Star, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs md:text-sm">Rated Excellence in Education</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Nurturing
              <span className="text-yellow-400 block">Tomorrow's Leaders</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-primary-foreground/90 leading-relaxed">
              At G D Goenka Public School, Purnea, we provide world-class education that empowers students to excel academically, socially, and personally.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12">
              <a 
                href="#admission" 
                className="bg-yellow-400 text-primary px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#about" 
                className="border-2 border-primary-foreground text-primary-foreground px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-200 text-center text-sm md:text-base"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold">1500+</div>
                <div className="text-xs md:text-sm text-primary-foreground/80">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold">100+</div>
                <div className="text-xs md:text-sm text-primary-foreground/80">Teachers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
                </div>
                <div className="text-xl md:text-2xl font-bold">25+</div>
                <div className="text-xs md:text-sm text-primary-foreground/80">Years</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-background/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-primary-foreground/20">
              {/* YouTube Video */}
              <div className="relative w-full h-48 md:h-64 lg:h-80 mb-4 md:mb-6 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/fqWUyYZXCRk?autoplay=1&mute=1&loop=1&playlist=fqWUyYZXCRk&controls=0&showinfo=0&rel=0&modestbranding=1"
                  title="G D Goenka Public School Video"
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Excellence in Education</h3>
              <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
                Our state-of-the-art facilities and dedicated faculty create an environment where every student can thrive and reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
