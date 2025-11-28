// import React, { useState } from "react";
// import CompanyDashboardLayout from "../components/CompanyDashboardLayout";

// const companies = [
//   "Solarica India Pvt Ltd",
//   "Solarica Systems Pvt Ltd",
//   "Solarica Fabtech Pvt Ltd",
//   "Solarica Industries Pvt Ltd",
//   "Solarica Greenwheels Pvt Ltd",
// ];

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
//   const [selectedCompany, setSelectedCompany] = useState(0); // Default load 1st company

//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold text-gray-900 mb-8">
//         Welcome to Solarica Group of Companies
//       </h1>

//       <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
//         {companies.map((company, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedCompany(idx)}
//             className={`px-6 py-2 text-center rounded-full cursor-pointer transition-all border 
//               ${
//                 selectedCompany === idx
//                   ? "bg-teal-600 text-white shadow-lg scale-100"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }
//             `}
//           >
//             {company}
//           </div>
//         ))}
//       </div>

//       <CompanyDashboardLayout
//         companyName={companies[selectedCompany]}
//         salesData={dummySalesData}
//         employeeData={dummyEmployeeData}
//         financialData={dummyFinancialData}
//       />
//     </div>
//   );
// };

// export default MainAdminDashboard;


import React, { useState } from "react";
import CompanyDashboardLayout from "../components/CompanyDashboardLayout";

const companies = [
  "Solarica India Pvt Ltd",
  "Solarica Systems Pvt Ltd",
  "Solarica Fabtech Pvt Ltd",
  "Solarica Industries Pvt Ltd",
  "Solarica Greenwheels Pvt Ltd",
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

      {/* Company Filter Pills */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {companies.map((company, idx) => (
          <div
            key={idx}
            onClick={() =>
              setSelectedCompany(idx === selectedCompany ? null : idx)
            }
            className={`px-6 py-2 text-center rounded-full cursor-pointer transition-all border
              ${
                selectedCompany === idx
                  ? "bg-teal-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {company}
          </div>
        ))}
      </div>

      {/* Render all companies if none selected */}
      {selectedCompany === null ? (
        <div className="grid grid-cols-1 gap-10">
          {companies.map((company, idx) => (
            <CompanyDashboardLayout
              key={idx}
              companyName={company}
              salesData={dummySalesData}
              employeeData={dummyEmployeeData}
              financialData={dummyFinancialData}
            />
          ))}
        </div>
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
