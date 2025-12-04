import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Eye, Languages } from 'lucide-react';
import type { Pdf } from '@/lib/data';
import { cn } from '@/lib/utils';

export function PdfCard({ pdf, className }: { pdf: Pdf; className?: string }) {
  return (
    <Card className={cn("flex flex-col overflow-hidden transition-shadow hover:shadow-lg", className)}>
      <CardHeader className="flex-row gap-4 items-start pb-4">
        <div className="bg-secondary p-3 rounded-md">
            <FileText className="h-6 w-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg leading-tight mb-1">
            <Link href={`/pdfs/${pdf.id}`} className="hover:underline">
              {pdf.title}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {pdf.subject} &middot; {pdf.level}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow text-sm text-muted-foreground">
        <p className="line-clamp-2">{pdf.description}</p>
        <div className="flex items-center text-xs mt-2">
            <Languages className="w-4 h-4 mr-1.5"/>
            <span>{pdf.language}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-1">
          {pdf.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="w-full flex gap-2">
          <Button asChild size="sm" className="w-full">
            <Link href={`/pdfs/${pdf.id}`}>
              <Eye className="mr-2 h-4 w-4" /> View
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href="#">
              <Download className="mr-2 h-4 w-4" /> Download
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
