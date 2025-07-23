import profileImg from "../assets/portfolio-image.jpg";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-blue-300 to-blue-100 px-6 py-24 flex justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Profile Card */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-md w-72 text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow">
            <img
              src={profileImg}
              alt="Ashish"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-black">Ashish Kumar</h3>
          <p className="text-sm text-gray-800">Frontend Developer</p>

          <div className="mt-4 flex justify-center gap-4 text-blue-900">
            <a
              href="https://github.com/Ashishkme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/ashish-kumar-32941914b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="mailto:aashishkme@gmail.com">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* About Text */}
        <div className="text-left max-w-2xl text-black">
          <h2 className="text-3xl font-bold uppercase mb-4">About Me</h2>
          <p className="leading-relaxed text-lg text-gray-800">
            I'm a Frontend Developer and Data Analyst specializing in clean,
            accessible, and high-performance web experiences. With experience in
            React, TypeScript, and AI-driven projects, I love building modern UIs
            and turning complex data into intuitive interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
