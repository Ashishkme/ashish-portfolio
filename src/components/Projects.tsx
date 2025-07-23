const projects = [
  {
    title: "Diabetes Prediction using Machine Learning",
    description:
      "Built a machine learning model to predict diabetes likelihood based on health metrics using Python, Scikit-learn, Pandas, and NumPy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/Ashishkme",
  },
  {
    title: "Blood Bank Module – Hospital Management System",
    description:
      "Developed a blood bank page to manage donors, inventory, and requests. Integrated into a hospital management system frontend.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    video: "https://drive.google.com/your-video-link",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-blue-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase text-blue-800 tracking-wider">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {proj.github ? (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  {proj.title}
                </a>
              ) : (
                proj.title
              )}
            </h3>

            {/* Description */}
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              {proj.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-blue-200 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
              )}
              {proj.video && (
                <a
                  href={proj.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-blue-600 text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-50 transition"
                >
                  Watch Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
