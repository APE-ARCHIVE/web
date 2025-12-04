import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <BookOpen className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            APE ARCHIVE &copy; {new Date().getFullYear()}
          </p>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">About</Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">Terms of Service</Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
