export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold tracking-wide text-lg uppercase text-blue-900">
        Ashish Kumar
      </h1>
      <nav className="hidden md:flex space-x-6 text-sm uppercase font-medium text-gray-700">
        <a
          href="#about"
          className="hover:text-blue-600 transition duration-200 border-b-2 border-transparent hover:border-blue-600"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:text-blue-600 transition duration-200 border-b-2 border-transparent hover:border-blue-600"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:text-blue-600 transition duration-200 border-b-2 border-transparent hover:border-blue-600"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
