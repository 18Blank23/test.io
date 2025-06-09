"use client";

import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { categoriesData } from "@/data/analytics";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const CategoriesChart = () => {
  return (
    <>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Posts Categories</CardTitle>
          <CardDescription>
            Posts that belongs to different categories
          </CardDescription>
          <CardContent className="flex justify-center">
            <Radar options={{ responsive: true }} data={categoriesData} />
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default CategoriesChart;
