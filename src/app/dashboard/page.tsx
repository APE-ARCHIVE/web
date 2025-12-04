import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Download, Heart } from "lucide-react"

export default function DashboardPage() {
    const stats = [
        { title: "Total Uploads", value: "12", icon: Upload, color: "text-blue-500" },
        { title: "Total Downloads", value: "1,234", icon: Download, color: "text-green-500" },
        { title: "Total Likes", value: "567", icon: Heart, color: "text-red-500" },
    ]

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Dashboard</h1>
                <p className="text-muted-foreground">Here&apos;s an overview of your activity.</p>
            </header>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">from your shared documents</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Recent activity will be shown here.</p>
                </CardContent>
            </Card>
        </div>
    )
}
