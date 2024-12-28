interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
}

export default function ProjectCard({ title, description, url }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-2 border-gray-200"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}