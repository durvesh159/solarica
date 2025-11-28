import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CompanyDashboardLayout = ({
  companyName,
  salesData,
  employeeData,
  financialData,
}) => {
  const pieColors = ["#06b6d4", "#3b82f6", "#10b981", "#f97316"];

  return (
    <div className="p-6 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-teal-700 tracking-wide">
        {companyName}
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Sales Performance */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Sales Performance
          </h2>
          <LineChart width={450} height={220} data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#06b6d4" strokeWidth={3} />
          </LineChart>
        </div>

        {/* Employee Management */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Employee Management
          </h2>
          <PieChart width={450} height={220}>
            <Pie
              data={employeeData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              paddingAngle={5}
            >
              {employeeData.map((entry, index) => (
                <Cell key={index} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8">
        {/* Financials */}
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-xl transition-all">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Financial Overview
          </h2>
          <BarChart width={450} height={220} data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quarter" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#10b981" />
            <Bar dataKey="expense" fill="#f97316" />
          </BarChart>
        </div>

        {/* Widgets */}
        <div className="grid grid-cols-2 gap-4">
          {["Projects", "Alerts", "Reports", "Upcoming"].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-blue-50 shadow-md border border-teal-200 rounded-xl p-4 flex items-center justify-center text-sm font-semibold text-gray-700 hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboardLayout;
