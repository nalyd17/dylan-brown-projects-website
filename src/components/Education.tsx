import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Education
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border-2 border-gray-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/ClemsonLogo.png"
              alt="Clemson University Logo"
              className="hidden md:block w-32 h-32 object-contain"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Clemson University
              </h3>
              <p className="text-gray-600 mb-2">2015 - 2018</p>
              <p className="text-gray-700">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-gray-600">Minor in Financial Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}