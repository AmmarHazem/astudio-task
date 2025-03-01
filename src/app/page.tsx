import { Button } from "@/components/ui/button";
import { UsersIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
          <p className="text-muted-foreground text-lg">Users & Products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <Link href="/users" className="w-full">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-24 text-lg flex flex-col gap-2 hover:scale-105 transition-transform"
            >
              <UsersIcon className="h-6 w-6" />
              Users
            </Button>
          </Link>

          <Link href="/products" className="w-full">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-24 text-lg flex flex-col gap-2 hover:scale-105 transition-transform"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              Products
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
