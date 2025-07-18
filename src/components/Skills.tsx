import React from "react";

const skills = {
  Languages: ["Python", "TypeScript", "SQL (Postgres)"],
  "Frameworks & Libraries": [
    "React.js",
    "Bootstrap",
    "Flutter",
    "Django",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
  ],
  Tools: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman", "Excel", "Power BI"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
