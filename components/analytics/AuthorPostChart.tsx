"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { authorPostData } from "@/data/analytics";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const AuthorPostChart = () => {
  return (
    <>
      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Highest Posts by Author</CardTitle>
          <CardDescription>
            Top 3 Authors with their highest posts
          </CardDescription>
          <CardContent className="flex justify-center">
            <Doughnut options={{ responsive: true }} data={authorPostData} />
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default AuthorPostChart;
