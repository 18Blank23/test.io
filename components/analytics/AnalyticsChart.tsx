"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { analyticsData } from "@/data/analytics"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
const monthlyData = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2800 },
  { name: "May", uv: 1900 },
  { name: "Jun", uv: 2400 },
  { name: "Jul", uv: 3600 },
  { name: "Aug", uv: 2500 },
  { name: "Sep", uv: 3700 },
  { name: "Oct", uv: 3000 },
  { name: "Nov", uv: 2000 },
  { name: "Dec", uv: 1900 },
];

const weeklyData = [
  { name: "Week 1", uv: 900 },
  { name: "Week 2", uv: 1200 },
  { name: "Week 3", uv: 800 },
  { name: "Week 4", uv: 1500 },
];
import { useState } from "react";
export const AnalyticsChart = () => {
  const [view, setView] = useState("monthly");
  const [day, setDay] = useState("1");  
  const chartData = view === "monthly" ? monthlyData : weeklyData;
  
  return (
    <>
      <Card>
  <CardHeader>  
    <div className="flex justify-between items-start">
      <div>
        <CardTitle>Analytics for this Year</CardTitle>
        <CardDescription>
          Views per {view === "monthly" ? "Month" : view === "weekly" ? "Week" : "Day"} 
          {view === "daily" && ` (Day ${day})`}
        </CardDescription>
      </div>
      <div className="flex gap-2">
        <Select onValueChange={(value) => setView(value)} defaultValue="monthly">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="View Type" />
          </SelectTrigger>  
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
        
        {view === "daily" && (
          <Select onValueChange={(value) => setDay(value)} defaultValue="1">
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Day" />
            </SelectTrigger>  
            <SelectContent>
              {Array.from({length: 30}, (_, i) => i + 1).map(day => (
                <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart width={1100} height={300} data={chartData}>
          <Line type="monotone" dataKey="uv" stroke="#000000" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </CardContent>
</Card>
    </>
  );
};
