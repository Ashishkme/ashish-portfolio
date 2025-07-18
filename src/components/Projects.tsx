import React from "react";

const projects = [
  {
    title: "Diabetes Prediction using Machine Learning",
    description:
      "Built a machine learning model to predict diabetes likelihood based on health metrics using Python, Scikit-learn, Pandas, and NumPy.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/Ashishkme", // replace with actual repo if needed
  },
  {
    title: "Blood Bank Module – Hospital Management System",
    description:
      "Developed a blood bank page to manage donors, inventory, and requests. Integrated into a hospital management system frontend.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    video: "https://drive.google.com/your-video-link", // replace with your video/screenshot link
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-700 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            {proj.github && (
              <a
                href={proj.github}
                target="_blank"
                className="text-blue-600 underline text-sm"
              >
                View on GitHub
              </a>
            )}
            {proj.video && (
              <a
                href={proj.video}
                target="_blank"
                className="text-blue-600 underline text-sm ml-4"
              >
                Watch Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
