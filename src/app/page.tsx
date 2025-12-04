'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Book, GraduationCap, Users, Search, BookOpen, FileText, Award, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { subjects, pdfs, contributors } from '@/lib/data';
import { PdfCard } from '@/components/shared/pdf-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function Home() {
  const latestPdfs = pdfs.slice(0, 4);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const subjectFilters = ['All', 'A/L', 'O/L', 'University', 'Grade 10'];

  return (
    <main className="flex-1">
      {/* Hero Section - Completely Redesigned */}
      <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-40 bg-gradient-to-br from-orange-50 via-white to-orange-50/30 dark:from-orange-950/20 dark:via-background dark:to-orange-950/10 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Trusted by 10,000+ Sri Lankan Students
            </div>

            {/* Bold Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Your Academic
              <span className="block text-primary mt-2">Success Hub</span>
            </h1>

            {/* Minimal Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Access thousands of educational resources, share knowledge, and excel in your studies.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="search"
                  placeholder="Search for subjects, past papers, notes..."
                  className="pl-12 pr-4 h-14 text-base rounded-xl border-2 focus-visible:ring-primary focus-visible:ring-offset-4 shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Two Strong Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base rounded-xl shadow-lg hover:shadow-xl smooth-hover min-w-[200px]">
                <Link href="/browse">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse Library
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base rounded-xl border-2 hover:bg-primary/5 hover:border-primary smooth-hover min-w-[200px]">
                <Link href="/upload">
                  <FileText className="mr-2 h-5 w-5" />
                  Share Resources
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>5,000+ Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects Section - Redesigned */}
      <section
        id="popular-subjects"
        className="w-full py-16 md:py-24 bg-white dark:bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Book className="w-3 h-3 mr-1" />
                Popular Subjects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Explore by Subject
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Browse through our extensive collection organized by your favorite subjects
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {subjectFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary hover:bg-primary/10 text-foreground hover:text-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* 3×4 Grid with Minimal Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {subjects.slice(0, 12).map((subject, index) => {
                const icons = [GraduationCap, Book, FileText, BookOpen, Award, TrendingUp];
                const Icon = icons[index % icons.length];

                return (
                  <Link href="/browse" key={subject.name}>
                    <Card className="group card-hover border-border/50 hover:border-primary/50 bg-card h-full">
                      <CardContent className="flex flex-col items-center justify-center text-center p-6 space-y-4">
                        <div className="relative">
                          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-5 group-hover:from-primary group-hover:to-primary/80 smooth-hover">
                            <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground smooth-hover" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 smooth-hover" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm md:text-base group-hover:text-primary smooth-hover">
                            {subject.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {subject.count} resources
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* View All Link */}
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-2 hover:border-primary hover:bg-primary/5 smooth-hover">
                <Link href="/browse">
                  View All Subjects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Uploads Section - Redesigned */}
      <section
        id="latest-uploads"
        className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Sparkles className="w-3 h-3 mr-1" />
                Latest Uploads
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Recently Added Resources
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fresh study materials uploaded by our amazing community
              </p>
            </div>

            {/* Clean White Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {latestPdfs.map((pdf) => (
                <PdfCard key={pdf.id} pdf={pdf} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="h-12 px-8 rounded-xl shadow-lg hover:shadow-xl smooth-hover">
                <Link href="/browse">
                  View All Resources
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section - Redesigned */}
      <section
        id="our-contributors"
        className="w-full py-16 md:py-24 bg-white dark:bg-background"
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Users className="w-3 h-3 mr-1" />
                Top Contributors
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Community Heroes
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Meet the amazing individuals who make learning accessible for everyone
              </p>
            </div>

            {/* Circular Profile Cards */}
            <div className="relative">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {contributors.map((contributor) => {
                    const avatar = PlaceHolderImages.find(
                      (img) => img.id === contributor.avatarId
                    );
                    return (
                      <CarouselItem
                        key={contributor.id}
                        className="pl-4 md:basis-1/2 lg:basis-1/3"
                      >
                        <Card className="border-border/50 hover:border-primary/50 card-hover bg-card h-full">
                          <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                            {/* Avatar with Orange Ring */}
                            <div className="relative">
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/60 blur-md opacity-30" />
                              <Avatar className="w-24 h-24 relative ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                                <AvatarImage
                                  src={avatar?.imageUrl}
                                  alt={contributor.name}
                                  className="object-cover"
                                />
                                <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                                  {contributor.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              {/* Orange Accent Dot */}
                              <div className="absolute bottom-1 right-1 w-5 h-5 bg-primary rounded-full border-4 border-background" />
                            </div>

                            <div className="space-y-2">
                              <h3 className="text-xl font-bold">
                                {contributor.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {contributor.contribution}
                              </p>
                              <div className="flex items-center justify-center gap-2 pt-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Award className="w-3 h-3 mr-1 text-primary" />
                                  Top Contributor
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-4 border-2 hover:border-primary hover:text-primary" />
                <CarouselNext className="hidden md:flex -right-4 border-2 hover:border-primary hover:text-primary" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics Section - Redesigned */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Trusted by Students Everywhere
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join thousands of students who are already benefiting from our platform
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Active Users */}
              <div className="group">
                <Card className="border-border/50 hover:border-primary/50 card-hover h-full text-center">
                  <CardContent className="pt-8 pb-8 px-6 space-y-4">
                    <div className="inline-flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl smooth-hover" />
                        <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4">
                          <Users className="w-10 h-10 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">10,000+</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Active Students
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* PDFs Shared */}
              <div className="group">
                <Card className="border-border/50 hover:border-primary/50 card-hover h-full text-center">
                  <CardContent className="pt-8 pb-8 px-6 space-y-4">
                    <div className="inline-flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl smooth-hover" />
                        <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4">
                          <Book className="w-10 h-10 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">5,000+</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Study Resources
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Subjects */}
              <div className="group">
                <Card className="border-border/50 hover:border-primary/50 card-hover h-full text-center">
                  <CardContent className="pt-8 pb-8 px-6 space-y-4">
                    <div className="inline-flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl smooth-hover" />
                        <div className="relative rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4">
                          <GraduationCap className="w-10 h-10 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary mb-1">50+</div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Subjects Covered
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

