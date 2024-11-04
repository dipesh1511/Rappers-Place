// // src/components/Navbar.jsx
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const [searchQuery, setSearchQuery] = useState("");

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Handle search logic here (e.g., navigating to a search results page)
//     console.log("Search query:", searchQuery);
//   };

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <h1 className="text-2xl font-bold text-blue-500">Rap Battle</h1>
//         </div>
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex items-center space-x-8">
//           {["/", "/upload", "/rapbattles", "/dashboard", "/about"].map(
//             (path, index) => (
//               <li key={index}>
//                 <Link
//                   to={path}
//                   className={`text-gray-800 font-semibold transition duration-300 pb-1 ${
//                     location.pathname === path
//                       ? "text-blue-500 border-b-2 border-blue-500"
//                       : "hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500"
//                   }`}
//                 >
//                   {path === "/" ? "Home" : path.replace("/", "")}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>
//         {/* Search Bar */}
//         <form onSubmit={handleSearch} className="hidden md:flex items-center">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search..."
//             className="border rounded-l-lg p-2"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white p-2 rounded-r-lg"
//           >
//             Search
//           </button>
//         </form>
//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-blue-500">
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="md:hidden bg-white shadow-md absolute w-full">
//           {["/", "/upload", "/rapbattles", "/dashboard", "/about"].map(
//             (path, index) => (
//               <li key={index} className="border-b">
//                 <Link
//                   to={path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`block p-4 text-gray-800 font-semibold ${
//                     location.pathname === path ? "text-blue-500" : ""
//                   }`}
//                 >
//                   {path === "/" ? "Home" : path.replace("/", "")}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here (e.g., navigating to a search results page)
    console.log("what i am searching for:", searchQuery);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-500">Rap Battle</h1>
        </div>
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="border rounded-l-lg p-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-lg"
          >
            Search
          </button>
        </form>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {["/", "/Upload", "/Rapbattles", "/Dashboard", "/About"].map(
            (path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`text-gray-800 font-semibold transition duration-300 pb-1 ${
                    location.pathname === path
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500"
                  }`}
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md absolute w-full">
          {["/", "/upload", "/rapbattles", "/dashboard", "/about"].map(
            (path, index) => (
              <li key={index} className="border-b">
                <Link
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block p-4 text-gray-800 font-semibold ${
                    location.pathname === path ? "text-blue-500" : ""
                  }`}
                >
                  {path === "/" ? "Home" : path.replace("/", "")}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
