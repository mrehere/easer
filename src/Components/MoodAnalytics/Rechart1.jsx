// src/PieChart.js
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#ff6f61", "#a5d6a7", "#3949ab", "#e3f2fd"];

const Rechart1 = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth * 0.5; // Adjust width as necessary
      const height = Math.max(window.innerHeight * 0.4, 400); // Minimum height of 400
      setDimensions({ width, height });
    };

    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize); // Update dimensions on resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Increase the outer radius for a larger pie chart
  const innerRadius = (dimensions.height / 2) * 0.3; // 30% of half height
  const outerRadius = (dimensions.height / 2) * 0.7; // Increased to 70% of half height

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Rechart1;
