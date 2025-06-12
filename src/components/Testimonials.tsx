
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Class X Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      content: "G D Goenka has been exceptional in nurturing my daughter's academic and personal growth. The teachers are dedicated and the infrastructure is world-class.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Class VIII Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The holistic approach to education at this school is remarkable. My son has developed confidence, leadership skills, and academic excellence.",
      rating: 5
    },
    {
      name: "Anita Singh",
      role: "Alumni Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Both my children graduated from G D Goenka and are now successful professionals. The foundation they received here was invaluable.",
      rating: 5
    },
    {
      name: "Dr. Amit Jha",
      role: "Parent of Class XII Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The school's focus on both academics and character building is commendable. My daughter is well-prepared for her future endeavors.",
      rating: 5
    }
  ];

  const achievements = [
    { number: "98%", label: "Board Results", description: "Average pass percentage in CBSE exams" },
    { number: "15+", label: "Awards", description: "National and state level recognitions" },
    { number: "500+", label: "Alumni", description: "Successful graduates worldwide" },
    { number: "25+", label: "Years", description: "Of educational excellence" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Achievements Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our commitment to excellence is reflected in our students' outstanding achievements 
            and the recognition we've received over the years.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl border hover:shadow-lg transition-shadow duration-200">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold mb-1">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">What Parents Say</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our parent community about their experience with G D Goenka Public School.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary opacity-50" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Join Our School Community</h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Give your child the best education and become part of our success story.
            </p>
            <a
              href="#admission"
              className="bg-yellow-400 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 inline-block"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
