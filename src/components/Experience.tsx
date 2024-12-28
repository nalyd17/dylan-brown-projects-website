import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Cofounder (Part-time)",
    company: "CyberForge Systems",
    period: "June 2024 – Present",
    responsibilities: [
      "Cofounded and led the development of a startup focused on continuous compliance solutions for businesses in regulated industries, with an initial emphasis on CMMC 2.0 compliance.",
      "Designed and built the first product module to automate compliance processes, integrating real-time monitoring and reporting to streamline adherence to CMMC 2.0 Level 1 standards.",
      "Managed all aspects of the business lifecycle, including product roadmap creation, stakeholder research, and go-to-market strategy, demonstrating entrepreneurial leadership and problem-solving.",
      "Collaborated with industry professionals to understand compliance pain points, driving product development and refining features to meet evolving regulatory requirements."
    ]
  },
  {
    title: "Software Development Manager",
    company: "Amazon",
    period: "June 2022 – May 2024",
    responsibilities: [
      "Directed production planning and execution technology for 25+ services, leading multi-million dollar projects that supported operations across 500+ Whole Foods and 40+ Amazon Fresh stores, ensuring seamless execution and alignment with business goals.",
      "Led and developed a team of 9 software engineers, overseeing day-to-day operations, performance evaluations, and career development. Successfully promoted 4 engineers, including one to Sr. Engineer, fostering a high-performing and growth-oriented team culture.",
      "Owned strategic communication with Amazon and Whole Foods leadership, delivering project timelines, defining success metrics, and gathering critical business feedback to ensure alignment and drive continuous improvement.",
      "Established cost optimization standards across Whole Foods' AWS accounts, reduced operational inefficiencies through templatized reports, status updates, and office hours for SDMs."
    ]
  },
  {
    title: "Software Development Engineer",
    company: "Amazon",
    period: "May 2018 – June 2022",
    responsibilities: [
      "Served as Lead Engineer and Manager for the development of a self-service kiosk for Whole Foods Market and Amazon Fresh stores, improving MTO counter throughput by 15%. Oversaw a team of 5 engineers using agile processes (sprint planning, roadmap ownership, and leadership updates). Delivered a React-Typescript application with Android hosting and backend microservices, streamlining customer orders and reducing labor costs.",
      "Led development of an internal telemetry tool for Amazon transportation operators to monitor semi-truck data (e.g., speed, diagnostics, battery levels) through a web-based application. Designed dashboards for anomaly detection, time-series visualization, and device search functionality, improving operator efficiency by 10% and reducing unnecessary maintenance costs of installed devices.",
      "Delivered a global solution enabling Amazon delivery drivers to anonymously contact customers via AWS Pinpoint for calls/texts, reducing failed delivery attempts. Integrated a profanity filter and new iOS workflow, resulting in $1.2M monthly savings in the US, with successful rollout to multiple countries in North America and Europe."
    ]
  }
];

export default function Experience() {
  return (
    <section id="workexperience" className="py-16 px-4 bg-ceramic-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-accent-600 font-semibold">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                <Calendar size={20} />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="pl-2">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}