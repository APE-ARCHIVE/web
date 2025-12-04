import { BookOpen, Mail, Facebook, Twitter, Instagram, Github, Heart } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                <BookOpen className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-bold text-lg">APE ARCHIVE</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering Sri Lankan students with accessible educational resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2.5">
              <Link href="/browse" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Browse Library
              </Link>
              <Link href="/upload" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Upload Resources
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Legal</h3>
            <nav className="flex flex-col space-y-2.5">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Guidelines
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Connect</h3>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href="mailto:contact@apearchive.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@apearchive.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} APE ARCHIVE. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
