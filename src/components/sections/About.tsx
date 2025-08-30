import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our team</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-hero bg-gradient-card overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center">
                <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto text-lg">
                  Aditya is the Founder of Aiwin Solutions and brings over 25 years of experience in research and analytics. He previously served as the Global Head of Research & Survey Analytics at Boston Consulting Group (BCG) and led BCG's Advanced Capabilities Center in India. Earlier in his career, Aditya established the Market Research function at Evalueserve, scaling it into a 300+ member team and serving leading global research firms and corporates as clients.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;