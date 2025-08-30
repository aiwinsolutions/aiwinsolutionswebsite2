import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  BarChart3, 
  Database, 
  Brain,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Survey Programming',
      description: 'Expert programming across all platforms with multi-country and multi-lingual capabilities',
      features: ['Advanced Logic & Piping', 'Multi-language Support', 'API/Webhook Integrations', 'Real-time Dashboard'],
      color: 'bg-gradient-hero'
    },
    {
      icon: Database,
      title: 'Data Collection',
      description: 'Comprehensive data gathering through multiple channels and methodologies',
      features: ['Online Surveys', 'CATI', 'IDIs', 'Respondent recruitment (for FGDs/IDIs)'],
      color: 'bg-gradient-accent'
    },
    {
      icon: Brain,
      title: 'Advanced Analytics',
      description: 'AI-powered analysis, validation and insight generation with statistical expertise',
      features: ['Conjoint', 'MaxDiff', 'Kano', 'TURF', 'Regression'],
      color: 'bg-gradient-hero'
    },
    {
      icon: TrendingUp,
      title: 'Visualization',
      description: 'Compelling data storytelling through interactive dashboards and reports',
      features: ['Real-time Updates', 'Interactive Dashboards', 'Custom Reports', 'Executive Summaries'],
      color: 'bg-gradient-accent'
    }
  ];

  return (
    <section id="services" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From survey programming to advanced analytics, we provide end-to-end research capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-card bg-gradient-card overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-hero rounded-full blur-2xl"></div>
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`w-14 h-14 ${service.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-button`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;