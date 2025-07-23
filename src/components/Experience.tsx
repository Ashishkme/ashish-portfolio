const experiences = [
  {
    company: "ASUUN WELLNESS PVT. LTD.",
    location: "Jhandewalan, New Delhi",
    period: "Mar 2025 – Apr 2025",
    role: "Data Analyst & Frontend Developer",
    details: [
      "Led an AI-driven project, analyzing large datasets to extract insights.",
      "Implemented ML techniques for data processing and decision-making.",
      "Worked on frontend using TypeScript (.tsx), optimizing UI components.",
    ],
  },
  {
    company: "ADEQUATE INFOSOFT PVT. LTD.",
    location: "Noida Sector-62",
    period: "Aug 2023 – Apr 2024",
    role: "Frontend Development Intern",
    details: [
      "Developed frontend for a logistics app using Flutter.",
      "Built user-friendly interfaces with real-time tracking.",
      "Focused on optimized UI/UX and performance improvement.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-blue-800">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <p className="text-gray-700 font-medium mb-1">
                {exp.company} — {exp.location}
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
