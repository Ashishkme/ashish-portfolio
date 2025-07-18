import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-16 text-sm text-gray-600 dark:text-gray-400">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/Ashishkme"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/ashish-kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 dark:hover:text-blue-400"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Back to Top Link */}
      <a
        href="#hero"
        className="flex justify-center items-center space-x-1 text-blue-600 hover:underline dark:text-blue-400"
      >
        <ArrowUp className="w-4 h-4" />
        <span>Back to Top</span>
      </a>

      {/* Copyright */}
      <p className="mt-2">
        © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
      </p>
    </footer>
  );
}
