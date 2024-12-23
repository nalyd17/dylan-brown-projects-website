import React from 'react';
import { MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="pt-24 pb-16 bg-ceramic-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
          <div className="max-w-none flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <img
                src="/DylanHeadshot.png"
                alt="Dylan Brown Headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Dylan Brown
              </h2>
              <h3 className="text-xl text-accent-600 mb-2">
                Software Development Manager
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-6">
                <MapPin size={20} />
                <span>Austin, TX</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Results-driven software manager with over 6 years of experience
                leading high-performing engineering teams and delivering
                large-scale, full-stack software solutions across diverse
                industries. Leveraging a strong technical foundation in software
                development and a C.S. degree, I combine hands-on coding expertise
                with proven leadership capabilities. Known for driving team
                excellence through effective communication, strategic planning,
                and robust evaluation frameworks, I excel in aligning engineering
                initiatives with business goals to deliver measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}