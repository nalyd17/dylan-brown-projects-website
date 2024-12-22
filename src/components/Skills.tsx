import React from 'react';
import { Code2, Users, Layout, Smartphone, Cloud, GitBranch } from 'lucide-react';

const skills = [
  {
    icon: Users,
    title: "Leadership & Management",
    description: "Team leadership, agile methodologies, project planning, performance evaluation, stakeholder communication"
  },
  {
    icon: Code2,
    title: "Backend Development",
    description: "Java, microservices architecture, GraphQL, REST APIs, system design"
  },
  {
    icon: Layout,
    title: "Frontend Development",
    description: "React, TypeScript, JavaScript, micro-frontends"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Swift, Objective-C, Kotlin, React Native, app release lifecycle"
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "AWS (DynamoDB, Lambda, ECS, API Gateway, Redshift, AppSync)"
  },
  {
    icon: GitBranch,
    title: "Technical Leadership",
    description: "Mentoring, architecture reviews, removing roadblocks, team growth initiatives"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-800">{skill.title}</h3>
              </div>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}