import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DasboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

export const DashboardCard = ({ title, count, icon }: DasboardCardProps) => {
  return (
    <Card className="p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl font-bold text-center mb-4 text-black">
          {title}
        </h3>
        <div className="flex gap-4 justify-center text-slate-700 items-center">
          {icon}
          <h3 className="font-semibold text-4xl text-slate-600">{count}</h3>
        </div>
      </CardContent>
    </Card>
  );
};
