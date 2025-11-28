// //Sidebar.jsx
// import React from "react";
// import {
//   FaHome,
//   FaChartLine,
//   FaUsers,
//   FaProjectDiagram,
//   FaLayerGroup,
//   FaBullhorn,
//   FaFileAlt,
//   FaSignOutAlt,
//   FaCog,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const menuItems = [
//     { name: "Dashboard", icon: <FaHome />, link: "/" },
//     { name: "Sales Master", icon: <FaChartLine />, link: "/sales" },
//     { name: "Accounts Master", icon: <FaFileAlt />, link: "/accounts" },
//     { name: "Operation Master", icon: <FaProjectDiagram />, link: "/operations" },
//     { name: "Employee Management", icon: <FaUsers />, link: "/employees" },
//     { name: "Solarica Hierarchy", icon: <FaLayerGroup />, link: "/hierarchy" },
//     { name: "Marketing Tools", icon: <FaBullhorn />, link: "/marketing" },
//     { name: "Reports", icon: <FaFileAlt />, link: "/reports" },
//     { name: "Settings", icon: <FaCog />, link: "/settings" },
//     { name: "Logout", icon: <FaSignOutAlt />, link: "/logout" },
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-teal-700 text-white flex flex-col py-8 px-4 shadow-xl">
//       <div className="flex items-center mb-12">
//         <img
//           src="/solarics_logo.webp"
//           alt="Solarica Logo"
//           className="w-14 h-14 mr-3 bg-white rounded-full p-2 border-2 border-gray-800"
//         />
//         <span className="text-2xl font-bold tracking-wide">Solarica Group</span>
//       </div>

//       <nav className="flex flex-col gap-2">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index}
//             to={item.link}
//             className="flex items-center gap-4 p-3 font-medium rounded-md hover:bg-white hover:text-teal-800 transition"
//           >
//             {item.icon}
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


// Sidebar.jsx
import React from "react";
import {
  FaHome,
  FaChartLine,
  FaUsers,
  FaProjectDiagram,
  FaLayerGroup,
  FaBullhorn,
  FaFileAlt,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, link: "/" },
    { name: "Sales Master", icon: <FaChartLine />, link: "/sales" },
    { name: "Accounts Master", icon: <FaFileAlt />, link: "/accounts" },
    { name: "Operation Master", icon: <FaProjectDiagram />, link: "/operations" },
    { name: "Employee Management", icon: <FaUsers />, link: "/employees" },
    { name: "Solarica Hierarchy", icon: <FaLayerGroup />, link: "/hierarchy" },
    { name: "Marketing Tools", icon: <FaBullhorn />, link: "/marketing" },
    { name: "Reports", icon: <FaFileAlt />, link: "/reports" },
    { name: "Settings", icon: <FaCog />, link: "/settings" },
    { name: "Logout", icon: <FaSignOutAlt />, link: "/logout" },
  ];

  return (
    <div className="w-64 min-h-screen bg-teal-700 text-white flex flex-col py-8 px-4 shadow-xl">
      <div className="flex items-center mb-12">
        <img
          src="/solarics_logo.webp"
          alt="Solarica Logo"
          className="w-14 h-14 mr-3 bg-white rounded-full p-2 border-2 border-gray-800"
        />
        <span className="text-2xl font-bold tracking-wide">Solarica Group</span>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.link;

          return (
            <Link
              key={index}
              to={item.link}
              className={`flex items-center gap-4 p-3 font-medium rounded-md transition
                ${
                  isActive
                    ? "bg-white text-teal-800 shadow-md"
                    : "hover:bg-white hover:text-teal-800"
                }
              `}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
