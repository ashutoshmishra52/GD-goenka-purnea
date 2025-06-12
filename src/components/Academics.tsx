
import React from 'react';
import { BookOpen, Calculator, Microscope, Globe, Palette, Music, Laptop, Trophy } from 'lucide-react';

const Academics = () => {
  const programs = [
    {
      title: "Primary School",
      subtitle: "Classes I - V",
      description: "Foundation years focusing on core subjects and creative development",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Art & Craft", "Physical Education"]
    },
    {
      title: "Middle School", 
      subtitle: "Classes VI - VIII",
      description: "Building strong academic foundation with introduction to specialized subjects",
      subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Computer Science"]
    },
    {
      title: "Secondary School",
      subtitle: "Classes IX - X",
      description: "CBSE curriculum preparing students for board examinations",
      subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Optional Subjects"]
    },
    {
      title: "Senior Secondary",
      subtitle: "Classes XI - XII",
      description: "Specialized streams for career-focused education",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream", "Skill Development"]
    }
  ];

  const facilities = [
    { icon: Microscope, name: "Science Labs", description: "Well-equipped Physics, Chemistry & Biology labs" },
    { icon: Laptop, name: "Computer Lab", description: "Modern computer lab with latest software" },
    { icon: BookOpen, name: "Library", description: "Extensive collection of books and digital resources" },
    { icon: Palette, name: "Art Studio", description: "Creative space for artistic expression" },
    { icon: Music, name: "Music Room", description: "Instruments and space for musical learning" },
    { icon: Trophy, name: "Sports Complex", description: "Indoor and outdoor sports facilities" },
    { icon: Globe, name: "Language Lab", description: "Interactive language learning environment" },
    { icon: Calculator, name: "Math Lab", description: "Hands-on mathematical learning tools" }
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum follows CBSE guidelines while incorporating innovative 
            teaching methodologies to ensure holistic development of every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-card p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-primary font-semibold mb-3">{program.subtitle}</p>
              <p className="text-muted-foreground mb-4">{program.description}</p>
              <div className="flex flex-wrap gap-2">
                {program.subjects.map((subject, idx) => (
                  <span key={idx} className="bg-muted px-3 py-1 rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-12">World-Class Facilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <facility.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">{facility.name}</h4>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary text-primary-foreground p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">CBSE Affiliated School</h3>
            <p className="text-lg mb-6">
              Affiliation No: 330881 | School Code: 10485
            </p>
            <p className="text-primary-foreground/90">
              We follow the Central Board of Secondary Education (CBSE) curriculum, 
              ensuring students receive nationally recognized education that prepares 
              them for higher studies and competitive examinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
