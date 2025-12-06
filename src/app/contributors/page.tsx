'use client';

import { Github } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const contributors = [
    { name: 'Oshan Avishka', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Dilini Silva', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Banuka', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Kavindi Samaraweera', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Kavindu Jayasundara', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Lahiru', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Nipun Theekshana', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Sasuni Wijerathne', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Shehan', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Vidura', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Dhanika', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Isuru Rathnayaka', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Pulindu Dinal Godage', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Ruvinda Shaluka', githubProfile: 'https://github.com/APE-ARCHIVE' },
    { name: 'Saumya Sithumini', githubProfile: 'https://github.com/APE-ARCHIVE' },
];

// Split contributors into rows for the river effect
const row1 = contributors.slice(0, 5);
const row2 = contributors.slice(5, 10);
const row3 = contributors.slice(10, 15);

export default function ContributorsPage() {
    return (
        <div className="min-h-screen">
            {/* Header Section */}
             <div className="py-8 md:py-16 px-4">
                <div className="space-y-4 md:space-y-6 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Meet Our Amazing
                        <br />
                        <span className="text-primary">Contributors</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
                        Passionate developers and students building the future of education in Sri Lanka
                    </p>
                    <Link href="https://github.com/APE-ARCHIVE" target="_blank">
                        <Button size="lg" className="gap-2 mt-2">
                            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm sm:text-base">View GitHub</span>
                        </Button>
                    </Link>
                </div>
            </div>



            {/* River Flowing Bubbles Section */}
            <div className="relative container max-w-4xl w-full overflow-hidden py-8">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Row 1 - flows right to left */}
                <div className="flex mb-8 animate-marquee-slow">
                    <div className="flex gap-8 pr-8">
                        {[...row1, ...row1, ...row1, ...row1].map((contributor, index) => (
                            <BubbleCard key={`r1-${index}`} contributor={contributor} size="large" index={index} />
                        ))}
                    </div>
                </div>

                {/* Row 2 - flows right to left (faster) */}
                <div className="flex mb-8 animate-marquee-fast">
                    <div className="flex gap-6 pr-6">
                        {[...row2, ...row2, ...row2, ...row2].map((contributor, index) => (
                            <BubbleCard key={`r2-${index}`} contributor={contributor} size="medium" index={index} />
                        ))}
                    </div>
                </div>

                {/* Row 3 - flows right to left (medium speed) */}
                <div className="flex animate-marquee-medium">
                    <div className="flex gap-10 pr-10">
                        {[...row3, ...row3, ...row3, ...row3].map((contributor, index) => (
                            <BubbleCard key={`r3-${index}`} contributor={contributor} size="large" index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function BubbleCard({ contributor, size, index = 0 }: { contributor: { name: string; githubProfile: string }; size: 'small' | 'medium' | 'large'; index?: number }) {
    const sizeClasses = {
        small: 'w-16 h-16 text-lg',
        medium: 'w-20 h-20 text-xl',
        large: 'w-24 h-24 text-2xl',
    };

    // Different animation delays for natural look
    const delays = ['0s', '0.5s', '1s', '1.5s', '2s'];
    const delay = delays[index % delays.length];

    return (
        <Link
            href={contributor.githubProfile}
            target="_blank"
            className="group flex flex-col items-center gap-2 flex-shrink-0"
        >
            <div
                className={`
                    ${sizeClasses[size]}
                    rounded-full 
                    bg-gradient-to-br from-card via-card to-primary/20
                    border-2 border-border/50
                    shadow-lg shadow-primary/10
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:scale-110 
                    group-hover:border-primary
                    group-hover:shadow-xl
                    group-hover:shadow-primary/30
                    animate-bubble
                `}
                style={{ animationDelay: delay }}
            >
                <span className="font-bold text-primary">
                    {contributor.name.charAt(0)}
                </span>
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {contributor.name}
            </span>
        </Link>
    );
}

