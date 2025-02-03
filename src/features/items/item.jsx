/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";
import { AddCart } from "../cart/add-cart";
import { useAdminStore } from "@/lib/store/use-admin-store";
import { Button, buttonVariants } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Link from "next/link";
import { deleteItem } from "@/lib/items/delete-item";
import { toast } from "sonner";
import { mutate } from "swr";
import { AlertDescription } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
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
          <DeleteButton item={item} />
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

const DeleteButton = ({ item }) => {
  const onDelete = async () => {
    await deleteItem(item);
    toast.success("Item was deleted");
    mutate((key) => typeof key === "string" && key.startsWith("/items"));
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline">
          <Trash size={12} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            You will delete the item with id {item.id}
          </AlertDialogTitle>
          <AlertDescription>
            Are you sure ? This action is irreversible.
          </AlertDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
