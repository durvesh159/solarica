// import React from 'react';
// import { FaHome, FaChartLine, FaUsers, FaProjectDiagram, FaLayerGroup, FaBullhorn, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const menuItems = [
//     { name: 'Home', icon: <FaHome />, link: '/' },
//     { name: 'Sales Master', icon: <FaChartLine />, link: '/sales' },
//     { name: 'Accounts Master', icon: <FaFileAlt />, link: '/accounts' },
//     { name: 'Operation Master', icon: <FaProjectDiagram />, link: '/operations' },
//     { name: 'Employee Management', icon: <FaUsers />, link: '/employees' },
//     { name: 'Solarica Group Hierarchy', icon: <FaLayerGroup />, link: '/hierarchy' },
//     { name: 'Marketing Tools', icon: <FaBullhorn />, link: '/marketing' },
//     { name: 'Reports', icon: <FaFileAlt />, link: '/reports' },
//     { name: 'Logout', icon: <FaSignOutAlt />, link: '/logout' },
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-white shadow-lg p-5 flex flex-col">
//       <div className="flex items-center mb-10">
//         <img src="/logo.png" alt="Solarica Logo" className="w-12 h-12 mr-3"/>
//         <span className="font-bold text-2xl text-gray-800">Solarica</span>
//       </div>
//       <nav className="flex flex-col gap-3">
//         {menuItems.map((item, index) => (
//           <Link 
//             key={index} 
//             to={item.link} 
//             className="flex items-center gap-3 text-gray-700 hover:bg-teal-100 p-3 rounded-md transition duration-200"
//           >
//             {item.icon} <span className="font-medium">{item.name}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



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
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, link: "/" },
    { name: "Sales Master", icon: <FaChartLine />, link: "/sales" },
    { name: "Accounts Master", icon: <FaFileAlt />, link: "/accounts" },
    { name: "Operation Master", icon: <FaProjectDiagram />, link: "/operations" },
    { name: "Employee Management", icon: <FaUsers />, link: "/employees" },
    { name: "Solarica Hierarchy", icon: <FaLayerGroup />, link: "/hierarchy" },
    { name: "Marketing Tools", icon: <FaBullhorn />, link: "/marketing" },
    { name: "Reports", icon: <FaFileAlt />, link: "/reports" },
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
        <span className="text-2xl font-bold tracking-wide">Solarica</span>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center gap-4 p-3 font-medium rounded-md hover:bg-white hover:text-teal-800 transition"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
