import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-blue-100 text-center py-10 px-4 text-sm text-gray-700">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Ashishkme"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-800 transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/ashish-kumar-32941914b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-800 transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>

      {/* Back to Top */}
      <a
        href="#hero"
        className="inline-flex items-center gap-1 text-blue-700 font-medium hover:text-blue-900 transition"
      >
        <ArrowUp className="w-4 h-4" />
        Back to Top
      </a>

      {/* Copyright */}
      <p className="mt-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
      </p>
    </footer>
  );
}
