import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      title: "Research Director",
      company: "Global Insights Corp",
      content: "Aiwin Solutions transformed our research capabilities. Their expertise in advanced analytics and seamless execution helped us deliver insights faster than ever before."
    },
    {
      title: "VP of Market Research",
      company: "Innovation Consulting",
      content: "The team's deep understanding of complex methodologies like Conjoint and MaxDiff, combined with their global panel access, made them an invaluable partner."
    },
    {
      title: "Head of Analytics",
      company: "Strategic Research Partners",
      content: "Their AI-powered data validation and round-the-clock support ensured our multi-country studies were executed flawlessly with exceptional quality."
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Client testimonials</span>
          </h2>
        </div>
        <div className="text-center mb-8">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading research and consulting firms worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card bg-gradient-card overflow-hidden">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-sm text-foreground font-medium">{testimonial.title}</p>
                  <p className="text-sm text-foreground font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;