import { Button } from "@/components/ui/button";
import { UsersIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150px] h-[20px] z-10 bg-[#fdc936]" />
            <h1 className="text-4xl font-bold tracking-tight relative z-10">Welcome</h1>
          </div>
          <p className="text-muted-foreground text-lg">Users & Products</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          <Link href="/users" className="w-full">
            <Button variant="outline" size="lg" className="w-full h-24 text-lg flex flex-col gap-2">
              <UsersIcon className="h-6 w-6" />
              Users
            </Button>
          </Link>
          <Link href="/products" className="w-full">
            <Button variant="outline" size="lg" className="w-full h-24 text-lg flex flex-col gap-2">
              <ShoppingCartIcon className="h-6 w-6" />
              Products
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
