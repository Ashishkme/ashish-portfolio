import React from "react";

const Navbar = () => {
  const navItems = ["about", "experience", "projects", "skills"];

  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Ashish Kumar</div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-700 hover:text-blue-600 capitalize transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
