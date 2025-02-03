/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";
import { AddCart } from "../cart/add-cart";

export const Item = ({ item, className }) => {
  return (
    <div
      className={cn(
        "relative rounded-md border p-3 shadow-inner h-fit",
        className
      )}
    >
      <p className="absolute right-2 top-2 font-mono">
        {formatPrice(item.price)}
      </p>
      <img
        src={item.image}
        className="aspect-square w-full rounded-md object-contain"
      />
      <p>{item.name}</p>
      <div className="flex items-end justify-end">
        <AddCart item={item} />
      </div>
    </div>
  );
};
