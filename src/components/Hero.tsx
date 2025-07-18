export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[60vh] px-4" id="hero">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">Hi, I'm Ashish Kumar</h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6">
        Data Analyst & Frontend Developer passionate about AI, machine learning, and building smart, responsive UIs with React and TypeScript.
      </p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
      >
        Let's Connect
      </a>
      <a
        href="/Ashish_s_Resume.pdf"
        download
        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
