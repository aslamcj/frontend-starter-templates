import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Next.js + shadcn/ui</h1>
      <p className="mb-8 text-muted-foreground">
        Accessible components with Next.js 15
      </p>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            Beautiful, accessible components for Next.js
          </p>
          <div className="flex gap-2">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
