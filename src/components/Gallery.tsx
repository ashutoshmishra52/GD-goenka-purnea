
import React, { useState } from 'react';
import { X, ZoomIn, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://gdgoenkapurnea.com/photogallery/3911.jpg",
      alt: "G D Goenka School Campus",
      category: "Campus"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/1833.jpg",
      alt: "G D Goenka School Activities",
      category: "Activities"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/9691.jpg",
      alt: "G D Goenka School Events",
      category: "Events"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/7359.jpg",
      alt: "G D Goenka School Academics",
      category: "Academics"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/3523.jpg",
      alt: "G D Goenka School Facilities",
      category: "Facilities"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/6592.jpg",
      alt: "G D Goenka School Campus Life",
      category: "Campus"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/6292.jpg",
      alt: "G D Goenka School Students",
      category: "Activities"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/8949.jpg",
      alt: "G D Goenka School Events",
      category: "Events"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/7386.jpg",
      alt: "G D Goenka School Infrastructure",
      category: "Campus"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/7694.jpg",
      alt: "G D Goenka School Learning",
      category: "Academics"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/757.jpg",
      alt: "G D Goenka School Activities",
      category: "Activities"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/7605.jpg",
      alt: "G D Goenka School Facilities",
      category: "Facilities"
    },
    {
      src: "https://gdgoenkapurnea.com/photogallery/8470.jpg",
      alt: "G D Goenka School Events",
      category: "Events"
    }
  ];

  const categories = ["All", "Academics", "Facilities", "Events", "Activities", "Campus"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Filter size={16} />
            <span>Photo Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            School Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Take a visual tour of our vibrant school life, state-of-the-art facilities, 
            and memorable moments that define the G D Goenka experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>

                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold text-sm mb-1">{image.alt}</p>
                  <p className="text-xs text-white/80">Click to view full size</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative max-w-7xl max-h-full animate-in zoom-in-95 duration-300">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
              >
                <X size={24} />
              </button>
              
              {/* Image counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                Image {filteredImages.findIndex(img => img.src === selectedImage) + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Experience Our School?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Schedule a visit to see our facilities firsthand and meet our dedicated faculty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Schedule a Visit</span>
            </a>
            <a
              href="#admission"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Apply Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
