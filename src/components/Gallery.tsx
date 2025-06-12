
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      alt: "Students in classroom",
      category: "Academics"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      alt: "Computer lab",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      alt: "Science laboratory",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      alt: "Library study area",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      alt: "Students presenting",
      category: "Events"
    },
    {
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=600&h=400&fit=crop",
      alt: "Art class",
      category: "Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      alt: "Group study",
      category: "Academics"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      alt: "Technology integration",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      alt: "School campus",
      category: "Campus"
    },
    {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      alt: "School building",
      category: "Campus"
    },
    {
      src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&h=400&fit=crop",
      alt: "School architecture",
      category: "Campus"
    },
    {
      src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      alt: "School entrance",
      category: "Campus"
    }
  ];

  const categories = ["All", "Academics", "Facilities", "Events", "Activities", "Campus"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">School Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a visual tour of our vibrant school life, state-of-the-art facilities, 
            and memorable moments that define the G D Goenka experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs text-white/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X size={32} />
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Experience Our School?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a visit to see our facilities firsthand and meet our dedicated faculty.
          </p>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 inline-block"
          >
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
