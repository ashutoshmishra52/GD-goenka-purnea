
import React from 'react';
import { ArrowRight, Star, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">Rated Excellence in Education</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Nurturing
              <span className="text-yellow-400 block">Tomorrow's Leaders</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              At G D Goenka Public School, Purnea, we provide world-class education that empowers students to excel academically, socially, and personally.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <a 
                href="#admission" 
                className="bg-yellow-400 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </a>
              <a 
                href="#about" 
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-200 text-center"
              >
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">1500+</div>
                <div className="text-sm text-primary-foreground/80">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-primary-foreground/80">Teachers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm text-primary-foreground/80">Years</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-background/10 backdrop-blur-lg rounded-2xl p-8 border border-primary-foreground/20">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
                alt="Students at G D Goenka Public School"
                className="w-full h-80 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-semibold mb-4">Excellence in Education</h3>
              <p className="text-primary-foreground/90">
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
