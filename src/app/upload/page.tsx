import { UploadForm } from "@/components/upload/upload-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function UploadPage() {
    return (
        <div className="container mx-auto max-w-3xl px-4 py-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline">Upload a Resource</CardTitle>
                    <CardDescription>
                        Share your study materials with the community. Please fill out the details below to upload your PDF.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UploadForm />
                </CardContent>
            </Card>
        </div>
    );
}
