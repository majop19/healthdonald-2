/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";
import { AddCart } from "../cart/add-cart";
import { useAdminStore } from "@/lib/store/use-admin-store";
import { Button, buttonVariants } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Trash } from "lucide-react";
import Link from "next/link";

export const Item = ({ item, className }) => {
  const adminMode = useAdminStore((s) => s.adminMode);

  return (
    <div
      className={cn(
        "relative rounded-md border p-3 shadow-inner h-fit group",
        className
      )}
    >
      {adminMode ? (
        <div className="absolute left-2 top-2 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
          <Link
            className={buttonVariants({ size: "sm", variant: "outline" })}
            href={`/items/${item.id}`}
          >
            <Edit size={12} />
          </Link>
          <Button size="sm" variant="outline">
            <Trash size={12} />
          </Button>
        </div>
      ) : null}
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      <img
        src={item.image}
        className="aspect-square w-full rounded-md object-contain"
      />
      <p>{item.name}</p>
      <div className="flex">
        <AddCart item={item} />
      </div>
    </div>
  );
};
