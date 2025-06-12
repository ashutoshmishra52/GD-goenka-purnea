
import React from 'react';
import { Target, Eye, Award, BookOpen, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do"
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Fostering empathy and care for others in our community"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing creativity and forward-thinking approaches"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Promoting lifelong learning and intellectual curiosity"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our School</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            G D Goenka Public School, Purnea has been a beacon of educational excellence for over two decades, 
            shaping young minds and preparing them for a bright future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://www.google.com/imgres?q=gd%20goenka%20purnea%20map&imgurl=https%3A%2F%2Ffiles.yappe.in%2Fplace%2Ffull%2Fg-d-goenka-public-school-purnea-best-cbse-school-in-purnea-3336707.webp&imgrefurl=https%3A%2F%2Fyappe.in%2Fbihar%2Fpurnia%2Fg-d-goenka-public-school-purnea-best-cbse-school-in-purnea%2F285894&docid=IEu_QVpkcBS0eM&tbnid=DbYJbw9iHMIWeM&vet=12ahUKEwidmuH7t-uNAxWpklYBHWulKs0QM3oECEMQAA..i&w=1080&h=628&hcb=2&ved=2ahUKEwidmuH7t-uNAxWpklYBHWulKs0QM3oECEMQAA"
              alt="School Building"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-muted-foreground mb-6">
              Established with a vision to provide world-class education in the heart of Purnea, 
              G D Goenka Public School has grown from strength to strength. We believe in nurturing 
              not just academic excellence but also character, creativity, and critical thinking.
            </p>
            <p className="text-muted-foreground mb-6">
              Our commitment to holistic education has made us one of the most trusted educational 
              institutions in Bihar, with thousands of successful alumni making their mark across 
              various fields worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <Award className="h-12 w-12 text-primary" />
              <div>
                <div className="font-semibold">ISO Certified Institution</div>
                <div className="text-sm text-muted-foreground">Quality education standards</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card p-8 rounded-2xl shadow-lg border">
            <Eye className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a globally recognized institution that develops confident, creative, and 
              compassionate leaders who will make a positive difference in the world.
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-lg border">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide holistic education that nurtures intellectual, emotional, physical, 
              and spiritual growth, preparing students for life's challenges and opportunities.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow duration-200">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
