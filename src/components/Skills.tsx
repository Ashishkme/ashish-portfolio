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
    <section
      id="skills"
      className="bg-gradient-to-br from-blue-100 to-blue-300 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Skills</h2>
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-800 border-b border-blue-100 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
