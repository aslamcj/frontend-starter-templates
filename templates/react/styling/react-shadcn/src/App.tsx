import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Minus, Plus, RotateCcw } from 'lucide-react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-center text-4xl font-bold">
          React + shadcn/ui
        </h1>
        <p className="mb-8 text-center text-muted-foreground">
          Beautifully designed accessible components
        </p>

        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Counter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-center text-5xl font-bold">{count}</p>
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCount((c) => c - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCount(0)}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button size="icon" onClick={() => setCount((c) => c + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built on Radix UI primitives for full accessibility
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You own the code - customize everything
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
