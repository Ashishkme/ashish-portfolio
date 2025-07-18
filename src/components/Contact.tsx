import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-4 text-gray-600">
          I'm currently open to opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6 text-blue-600 text-xl">
          <a href="mailto:aashishkme@gmail.com" className="hover:underline flex items-center gap-1">
            <Mail size={20} /> Email
          </a>
          <a href="https://linkedin.com/in/ashish-kumar-32941914b/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/Ashishkme" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
            <Github size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
