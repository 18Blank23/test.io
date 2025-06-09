import { AnalyticsChart } from "@/components/analytics/AnalyticsChart";
import CommentsChart from "@/components/analytics/CommentsChart";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { PostTable } from "@/components/posts/PostTable";
import {
  SquarePen,
  Users,
  FolderOpenDot,
  MessageSquareMore,
} from "lucide-react";
import AuthorPostChart from "@/components/analytics/AuthorPostChart";
import CategoriesChart from "@/components/analytics/CategoriesChart";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between mb-10 md:flex-row gap-5">
        <DashboardCard
          title="Feedbacks"
          count={98}
          icon={<SquarePen size={72} />}
        />
        <DashboardCard title="Patients" count={100} icon={<Users size={72} />} />
        <DashboardCard
          title="Visits"
          count={123}
          icon={<FolderOpenDot size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={298}
          icon={<MessageSquareMore size={72} />}
        />
      </div>
      <AnalyticsChart />
      <CommentsChart />
      <div className="grid md:grid-cols-2 gap-4">
        <AuthorPostChart />
        <CategoriesChart />
      </div>
      <PostTable title="Latest Feedbacks" limit={5} />
    </>
  );
}
