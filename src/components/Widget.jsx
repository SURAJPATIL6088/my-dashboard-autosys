// src/components/DashboardWidgets.jsx
import React from "react";

const NumberWidget = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-3xl font-semibold">{value}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

const PercentageWidget = ({ percentage, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-2xl font-semibold">{percentage}%</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

const ComparisonWidget = ({ currentValue, previousValue, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-xl font-semibold">{currentValue}</p>
    <p className="text-gray-500">vs.</p>
    <p className="text-xl font-semibold">{previousValue}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

const CustomizableWidget = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-xl font-semibold">{value}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

const DashboardWidgets = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <NumberWidget value={123} label="Total Users" />
      <PercentageWidget percentage={75} label="Conversion Rate" />
      <ComparisonWidget
        currentValue={1000}
        previousValue={800}
        label="Sales This Month"
      />
      <CustomizableWidget value={42} label="Custom Widget" />
    </div>
  );
};

export default DashboardWidgets;
