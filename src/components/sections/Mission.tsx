import React from 'react';
import { Target, TrendingUp, Users, Handshake } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Our mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We empower research and consulting firms with high-quality customer data <br />
              delivered with agility, exceptional service and seamless experience
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Talent</h3>
            <p className="text-muted-foreground leading-relaxed">
              200+ researchers, analysts and project managers; expertise in advanced methodologies such as Conjoint, MaxDiff, etc.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI/GenAI enabled programming, authentication and data validation with advanced multi-country capabilities
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Partnerships</h3>
            <p className="text-muted-foreground leading-relaxed">
              Access to 15M+ decision-makers through global panel partnerships with multi-modal survey capabilities
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-hero rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Quality</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rigorous programming, robust respondent verification, and dependable survey data delivery
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;