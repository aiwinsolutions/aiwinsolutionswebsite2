import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Ready to transform your research?</span>
          </h2>
          <div className="max-w-lg mx-auto">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-muted-foreground">
                    info@aiwinsolutions.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;