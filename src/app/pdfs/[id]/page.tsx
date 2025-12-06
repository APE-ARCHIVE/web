'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Share, Calendar, Book, GraduationCap, Languages, Tag, Star, FileText, ArrowLeft, Loader2, AlertCircle, ExternalLink, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { apiClient } from '@/lib/api';

// Types
interface DocumentTag {
  id: string;
  name: string;
  group: string;
}

interface Resource {
  id: string;
  title: string;
  description: string;
  driveFileId: string;
  mimeType: string;
  views: number;
  downloads: number;
  tags: DocumentTag[];
  createdAt?: string;
}

export default function PdfDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [resource, setResource] = useState<Resource | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch resource details
  useEffect(() => {
    async function fetchResource() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await apiClient.get(`/api/v1/resources/${id}`);
        console.log('Resource API response:', response.data);

        if (response.data?.success && response.data?.data) {
          setResource(response.data.data);
        } else {
          setError('Resource not found');
        }
      } catch (err: any) {
        console.error('Failed to fetch resource:', err);
        if (err?.response?.status === 404) {
          setError('Resource not found');
        } else {
          setError(err?.response?.data?.message || 'Failed to load resource');
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchResource();
  }, [id]);

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading resource...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !resource) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
          <h2 className="text-xl font-semibold">{error || 'Resource not found'}</h2>
          <p className="text-muted-foreground">The resource you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Extract tag info
  const subject = resource.tags.find(t => t.group === 'Subject')?.name;
  const grade = resource.tags.find(t => t.group === 'Grade')?.name;
  const medium = resource.tags.find(t => t.group === 'Medium')?.name;
  const resourceType = resource.tags.find(t => t.group === 'ResourceType')?.name;

  const metadata = [
    subject && { icon: Book, label: 'Subject', value: subject },
    grade && { icon: GraduationCap, label: 'Grade', value: grade },
    medium && { icon: Languages, label: 'Medium', value: medium },
    resourceType && { icon: FileText, label: 'Type', value: resourceType },
    { icon: Eye, label: 'Views', value: resource.views.toLocaleString() },
    { icon: Download, label: 'Downloads', value: resource.downloads.toLocaleString() },
    resource.createdAt && { icon: Calendar, label: 'Uploaded', value: new Date(resource.createdAt).toLocaleDateString() },
  ].filter(Boolean) as { icon: any; label: string; value: string }[];

  // Google Drive URLs
  const viewUrl = resource.driveFileId ? `https://drive.google.com/file/d/${resource.driveFileId}/view` : null;
  const downloadUrl = resource.driveFileId ? `https://drive.google.com/uc?export=download&id=${resource.driveFileId}` : null;
  const embedUrl = resource.driveFileId ? `https://drive.google.com/file/d/${resource.driveFileId}/preview` : null;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid lg:grid-cols-3 gap-12">
        <main className="lg:col-span-2 space-y-8">
          {/* Title & Description */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline">{resource.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {resource.description || 'No description available'}
            </p>
          </div>

          {/* Metadata Card */}
          <Card>
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
                {metadata.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">{item.value}</p>
                      <p className="text-muted-foreground">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <Separator className="my-6" />
              <div className="flex items-center gap-3 flex-wrap">
                <Tag className="w-5 h-5 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <Badge key={tag.id} variant="secondary">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PDF Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {embedUrl ? (
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full rounded-b-lg"
                    allow="autoplay"
                    title={resource.title}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Preview not available</p>
                </div>
              )}
            </CardContent>
          </Card>
        </main>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Actions */}
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {downloadUrl && (
                <Button size="lg" className="w-full" asChild>
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </a>
                </Button>
              )}
              {viewUrl && (
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <a href={viewUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Open in Google Drive
                  </a>
                </Button>
              )}
              <Button size="lg" variant="outline" className="w-full">
                <Share className="mr-2 h-5 w-5" />
                Share
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Star className="mr-2 h-5 w-5" />
                Add to Favorites
              </Button>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">File Type</span>
                <span className="font-medium">{resource.mimeType || 'PDF'}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Views</span>
                <span className="font-medium">{resource.views}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Downloads</span>
                <span className="font-medium">{resource.downloads}</span>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
