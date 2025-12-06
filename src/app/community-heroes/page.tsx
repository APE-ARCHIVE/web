'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, ArrowLeft, Sparkles } from 'lucide-react';
import teachers from '@/constants/teachers.json';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CommunityHeroesPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="container max-w-6xl py-4 md:py-8 relative">
                    <div className="space-y-8">
                        {/* Back Button */}
                        <Link href="/#our-contributors">
                            <Button variant="ghost" className="gap-2 hover:bg-primary/10">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Button>
                        </Link>

                        {/* Header */}
                        <div className="space-y-6 text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                                Community Heroes
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                Meet the incredible educators and contributors who dedicate their time and expertise to help students succeed.
                                These heroes make quality education accessible to everyone.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary">{teachers.length}</div>
                                <div className="text-sm text-muted-foreground">Active Heroes</div>
                            </div>
                            <div className="w-px bg-border" />
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-primary">
                                    {new Set(teachers.map(t => t.subject)).size}
                                </div>
                                <div className="text-sm text-muted-foreground">Subjects Covered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Heroes Grid */}
            <div className="container max-w-6xl pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {teachers.map((teacher, index) => (
                        <Card
                            key={index}
                            className="group border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
                        >
                            <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                                {/* Avatar with Animated Ring */}
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/60 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-20 animate-spin-slow" style={{ animationDuration: '8s' }} />
                                    <Avatar className="w-28 h-28 relative ring-4 ring-primary/20 ring-offset-4 ring-offset-background group-hover:ring-primary/40 transition-all duration-300">
                                        <AvatarImage
                                            src={teacher.image}
                                            alt={teacher.name}
                                            className="object-cover"
                                        />
                                        <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
                                            {teacher.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    {/* Animated Status Dot */}
                                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50">
                                        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                                        {teacher.name}
                                    </h3>
                                    <Badge variant="secondary" className="text-sm px-3 py-1">
                                        {teacher.subject}
                                    </Badge>
                                    <div className="flex items-center justify-center gap-2 pt-2">
                                        <Badge variant="outline" className="text-xs border-primary/30">
                                            <Award className="w-3 h-3 mr-1 text-primary" />
                                            {t('home.topContributorBadge')}
                                        </Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
