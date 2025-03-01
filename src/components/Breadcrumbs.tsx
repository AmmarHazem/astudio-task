import { cn } from "@/lib/utils";
import { FC } from "react";
import Link from "next/link";

const Breadcrumbs: FC<BreadcrumbsProps> = ({ routes }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      {routes.map((route, index) => {
        const isLast = index === routes.length - 1;
        return (
          <div key={route.href} className="flex items-center gap-2 relative">
            <Link className={cn("relative z-10", { "font-bold": isLast })} href={route.href}>
              {route.name}
            </Link>
            {isLast && <div className="absolute bottom-[2px] left-0 w-full h-[11px] z-0 bg-[#fdc936]" />}
            {!isLast && <p>/</p>}
          </div>
        );
      })}
    </div>
  );
};

interface BreadcrumbsProps {
  routes: { href: string; name: string }[];
}

export default Breadcrumbs;
