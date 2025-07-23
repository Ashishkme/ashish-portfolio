import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Me</h2>
        <p className="mb-8 text-gray-700 text-lg">
          I'm currently open to opportunities. Let’s connect!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:aashishkme@gmail.com"
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition text-blue-700 font-medium"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://linkedin.com/in/ashish-kumar-32941914b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition text-blue-700 font-medium"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/Ashishkme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition text-blue-700 font-medium"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
