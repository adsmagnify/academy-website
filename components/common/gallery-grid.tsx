"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryItem {
  category: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface GalleryGridProps {
  items: GalleryItem[];
  categories: string[];
}

const GalleryGrid = ({ items, categories }: GalleryGridProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleItems = activeCategory === "All"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "bg-adsmagnify-dark-yellow hover:bg-adsmagnify-dark-yellow text-adsmagnify-blue" : ""}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleItems.map((item, index) => (
          <Card key={`${item.title}-${index}`} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-adsmagnify-dark-yellow text-adsmagnify-blue px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  {item.icon}
                  {item.category}
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-navy-900 mb-2 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default GalleryGrid;


