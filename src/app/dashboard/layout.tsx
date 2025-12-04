import { DashboardNav } from '@/components/dashboard/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto grid min-h-[calc(100vh-8rem)] grid-cols-1 md:grid-cols-[240px_1fr] gap-8 py-8">
      <aside className="hidden md:block">
        <DashboardNav />
      </aside>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <DashboardNav />
          </SheetContent>
        </Sheet>
      </div>
      <main>{children}</main>
    </div>
  );
}
