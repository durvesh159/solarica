// //MainAdminDashboard.jsx
// import React, { useState } from "react";
// import CompanyDashboardLayout from "../components/CompanyDashboardLayout";

// const companies = [
//   "Solarica India Pvt Ltd",
//   "Solarica Systems Pvt Ltd",
//   "Solarica Fabtech Pvt Ltd",
//   "Solarica Industries Pvt Ltd",
//   "Solarica Greenwheels Pvt Ltd",
// ];

// // Static Aggregated Data (Seems like final data collected from all 5 companies)
// const combinedSalesData = [
//   { month: "Jan", sales: 20000 }, // Total across 5
//   { month: "Feb", sales: 15000 },
//   { month: "Mar", sales: 25000 },
//   { month: "Apr", sales: 22000 },
// ];

// const combinedEmployeeData = [
//   { name: "Active", value: 1800 },
//   { name: "Inactive", value: 400 },
//   { name: "On Leave", value: 200 },
//   { name: "Contract", value: 300 },
// ];

// const combinedFinancialData = [
//   { quarter: "Q1", revenue: 50000, expense: 35000 },
//   { quarter: "Q2", revenue: 62000, expense: 43000 },
//   { quarter: "Q3", revenue: 48000, expense: 30000 },
//   { quarter: "Q4", revenue: 75000, expense: 52000 },
// ];

// // Individual Dummy Data (Still Static 😁)
// const dummySalesData = [
//   { month: "Jan", sales: 4000 },
//   { month: "Feb", sales: 3000 },
//   { month: "Mar", sales: 5000 },
//   { month: "Apr", sales: 4000 },
// ];

// const dummyEmployeeData = [
//   { name: "Active", value: 400 },
//   { name: "Inactive", value: 100 },
//   { name: "On Leave", value: 50 },
//   { name: "Contract", value: 50 },
// ];

// const dummyFinancialData = [
//   { quarter: "Q1", revenue: 10000, expense: 7000 },
//   { quarter: "Q2", revenue: 12000, expense: 9000 },
//   { quarter: "Q3", revenue: 9000, expense: 5000 },
//   { quarter: "Q4", revenue: 15000, expense: 11000 },
// ];

// const MainAdminDashboard = () => {
//   const [selectedCompany, setSelectedCompany] = useState(null);

//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8">
//         Welcome to Solarica Group of Companies
//       </h1>

//       {/* Company Filter Pills */}
//       <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
//         <div
//           onClick={() => setSelectedCompany(null)}
//           className={`px-6 py-2 text-center rounded-full cursor-pointer transition-all border 
//             ${
//               selectedCompany === null
//                 ? "bg-teal-600 text-white shadow-lg scale-105"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }
//           `}
//         >
//           Solarica Group Dashboard
//         </div>

//         {companies.map((company, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedCompany(idx)}
//             className={`px-6 py-2 text-center rounded-full cursor-pointer transition-all border
//               ${
//                 selectedCompany === idx
//                   ? "bg-teal-600 text-white shadow-lg scale-105"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }
//             `}
//           >
//             {company}
//           </div>
//         ))}
//       </div>

//       {/* Default View → Group Dashboard */}
//       {selectedCompany === null ? (
//         <CompanyDashboardLayout
//           companyName="Solarica Group of Companies Dashboard"
//           salesData={combinedSalesData}
//           employeeData={combinedEmployeeData}
//           financialData={combinedFinancialData}
//         />
//       ) : (
//         <CompanyDashboardLayout
//           companyName={companies[selectedCompany]}
//           salesData={dummySalesData}
//           employeeData={dummyEmployeeData}
//           financialData={dummyFinancialData}
//         />
//       )}
//     </div>
//   );
// };

// export default MainAdminDashboard;

// MainAdminDashboard.jsx
import React, { useState } from "react";
import CompanyDashboardLayout from "../components/CompanyDashboardLayout";

const companies = [
  "Solarica India Pvt Ltd",
  "Solarica Systems Pvt Ltd",
  "Solarica Fabtech Pvt Ltd",
  "Solarica Industries Pvt Ltd",
  "Solarica Greenwheels Pvt Ltd",
];

// Aggregated Static Data
const combinedSalesData = [
  { month: "Jan", sales: 20000 },
  { month: "Feb", sales: 15000 },
  { month: "Mar", sales: 25000 },
  { month: "Apr", sales: 22000 },
];

const combinedEmployeeData = [
  { name: "Active", value: 1800 },
  { name: "Inactive", value: 400 },
  { name: "On Leave", value: 200 },
  { name: "Contract", value: 300 },
];

const combinedFinancialData = [
  { quarter: "Q1", revenue: 50000, expense: 35000 },
  { quarter: "Q2", revenue: 62000, expense: 43000 },
  { quarter: "Q3", revenue: 48000, expense: 30000 },
  { quarter: "Q4", revenue: 75000, expense: 52000 },
];

const dummySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4000 },
];

const dummyEmployeeData = [
  { name: "Active", value: 400 },
  { name: "Inactive", value: 100 },
  { name: "On Leave", value: 50 },
  { name: "Contract", value: 50 },
];

const dummyFinancialData = [
  { quarter: "Q1", revenue: 10000, expense: 7000 },
  { quarter: "Q2", revenue: 12000, expense: 9000 },
  { quarter: "Q3", revenue: 9000, expense: 5000 },
  { quarter: "Q4", revenue: 15000, expense: 11000 },
];

const MainAdminDashboard = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Solarica Group of Companies
      </h1>

      {/* Pills Section */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <div
          onClick={() => setSelectedCompany(null)}
          className={`px-6 py-2 text-center rounded-full cursor-pointer transition border
            ${
              selectedCompany === null
                ? "bg-teal-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }
          `}
        >
          Solarica Group Dashboard
        </div>

        {companies.map((company, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCompany(idx)}
            className={`px-6 py-2 text-center rounded-full cursor-pointer transition border
              ${
                selectedCompany === idx
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {company}
          </div>
        ))}
      </div>

      {/* Dashboard Data Render */}
      {selectedCompany === null ? (
        <CompanyDashboardLayout
          companyName="Solarica Group of Companies Dashboard"
          salesData={combinedSalesData}
          employeeData={combinedEmployeeData}
          financialData={combinedFinancialData}
        />
      ) : (
        <CompanyDashboardLayout
          companyName={companies[selectedCompany]}
          salesData={dummySalesData}
          employeeData={dummyEmployeeData}
          financialData={dummyFinancialData}
        />
      )}
    </div>
  );
};

export default MainAdminDashboard;
