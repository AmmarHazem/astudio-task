import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <Link href="/users">
        <Button className="w-[100px]">Users</Button>
      </Link>
      <Link href="/products">
        <Button className="w-[100px]">Products</Button>
      </Link>
    </div>
  );
}
