import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "CMMC Self-Assessment Level 1 Application",
    description: "A workflow application designed to assist DoD contractors and subcontractors in their endeavor to be compliant with CMMC Level 1",
    url: "https://cmmc.dylanbrownprojects.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-ceramic-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Projects</h2>
        <div className="max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}