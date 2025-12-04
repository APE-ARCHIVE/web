'use client';

import * as React from 'react';
import { useLanguage } from '@/lib/i18n-context';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'si', label: 'SI' },
        { code: 'ta', label: 'TA' },
    ];

    return (
        <div className="flex items-center rounded-md border bg-background p-1 h-8">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as 'en' | 'si' | 'ta')}
                    className={cn(
                        'flex-1 px-2 py-0.5 text-xs font-medium rounded-sm transition-all',
                        language === lang.code
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    )}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
}
