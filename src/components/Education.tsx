import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Education</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-start gap-4">
            <GraduationCap size={32} className="text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Clemson University</h3>
              <p className="text-gray-600 mb-2">2015 - 2018</p>
              <p className="text-gray-700">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600">Minor in Financial Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}