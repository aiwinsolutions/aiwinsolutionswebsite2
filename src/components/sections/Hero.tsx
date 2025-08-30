import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight, Users, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                augmented intelligence
              </span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">accelerated impact</span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Accelerate your journey to insights and outcomes <br />
              by augmenting your team with our talent, technology, and partnerships
            </p>
          </div>


          {/* Stats */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">200+</div>
                <div className="text-muted-foreground">Expert Researchers</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">2.5M+</div>
                <div className="text-muted-foreground">Global Surveys</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gradient-card shadow-card">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">15M+</div>
                <div className="text-muted-foreground">Decision Makers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;