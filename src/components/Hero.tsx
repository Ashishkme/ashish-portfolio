export default function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-800">
          Hi, I'm Ashish 👋
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
          I build clean, accessible UIs with <span className="font-semibold">React</span> & <span className="font-semibold">TypeScript</span>. Passionate about crafting delightful interfaces and exploring AI & data visualization.
        </p>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="/Ashish_Kumar_Resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-blue-700 transition"
          >
            📄 Download Resume
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition"
          >
            💬 Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
