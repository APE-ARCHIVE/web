import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Book, GraduationCap, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const latestPdfs = pdfs.slice(0, 4);

  return (

    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] font-headline">
                Lanka StudyShare
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Access and share study materials online during emergencies and
                anytime you need.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/browse">
                    Browse PDFs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/upload">Upload Resources</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  width="600"
                  height="400"
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="popular-subjects"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Popular Subjects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a wide range of subjects shared by students across Sri
                Lanka.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-12">
            {subjects.map((subject) => (
              <Link href="/browse" key={subject.name}>
                <div className="group flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="rounded-full bg-secondary p-4 group-hover:bg-primary/20">
                    <GraduationCap className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <p className="font-semibold">{subject.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="latest-uploads"
        className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Latest Uploaded PDFs
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out the newest resources added to our collection.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-12">
            {latestPdfs.map((pdf) => (
              <PdfCard key={pdf.id} pdf={pdf} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/browse">
                View All PDFs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="our-contributors"
        className="w-full py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Our Top Contributors
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated individuals who power our community by
                sharing knowledge.
              </p>
            </div>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto pt-12"
          >
            <CarouselContent>
              {contributors.map((contributor) => {
                const avatar = PlaceHolderImages.find(
                  (img) => img.id === contributor.avatarId
                );
                return (
                  <CarouselItem
                    key={contributor.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                          <Avatar className="w-24 h-24 mb-4">
                            <AvatarImage
                              src={avatar?.imageUrl}
                              alt={contributor.name}
                            />
                            <AvatarFallback>
                              {contributor.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <h3 className="text-xl font-semibold">
                            {contributor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {contributor.contribution}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Trusted by Sri Lankan Students
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is built to support the educational needs of
              students with reliable and accessible resources.
            </p>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Book className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm text-muted-foreground">
                  PDFs Shared
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
