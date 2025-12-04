import { PdfCard } from '@/components/shared/pdf-card';
import { pdfs } from '@/lib/data';
import { Filters } from '@/components/browse/filters';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function BrowsePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline">Browse Resources</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Find the study materials you need. Filter by subject, level, and more.
        </p>
      </header>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="hidden lg:block">
          <Filters />
        </aside>
        <main>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {pdfs.map((pdf) => (
              <PdfCard key={pdf.id} pdf={pdf} />
            ))}
          </div>
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  );
}
