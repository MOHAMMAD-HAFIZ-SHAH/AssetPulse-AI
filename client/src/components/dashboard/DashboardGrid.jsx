import KPI from "./KPI";
import WelcomeCard from "./WelcomeCard";
import AssetChart from "./AssetChart";
import BookingChart from "./BookingChart";
import RecentActivity from "./RecentActivity";
import NotificationPanel from "./NotificationPanel";
import QuickActions from "./QuickActions";

export default function DashboardGrid() {
    return (
        <div className="space-y-6">
            <WelcomeCard />

            <KPI />

            <div className="grid gap-6 xl:grid-cols-2">
                <AssetChart />

                <BookingChart />
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
                <RecentActivity />

                <NotificationPanel />

                <QuickActions />
            </div>
        </div>
    );
}