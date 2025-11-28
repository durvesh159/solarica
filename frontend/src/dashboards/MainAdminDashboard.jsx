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
      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Welcome to Solarica Group of Companies
      </h1>

      {/* Show All Companies initially */}
      {!selectedCompany && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {companies.map((company, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCompany(idx)}
              className="bg-teal-100 text-teal-700 rounded-full px-4 py-3 cursor-pointer text-center shadow-md hover:shadow-xl hover:bg-teal-200 transition-all font-semibold"
            >
              {company}
            </div>
          ))}
        </div>
      )}

      {/* Show selected company dashboard */}
      {selectedCompany !== null && (
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
