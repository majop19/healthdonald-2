import { getItems } from "@/lib/items/get-items";
import useSWR from "swr";
import { Item } from "./item";
import { useCategoryStore } from "@/lib/store/use-categories-store";
export const ItemsList = () => {
  const currentCategoryId = useCategoryStore((c) => c.currentCategoryId);

  const { data } = useSWR(`/categories/${currentCategoryId}`, async () => {
    return getItems(currentCategoryId);
  });

  return (
    <div className="grid max-h-full grid-cols-2 gap-4 overflow-x-auto pb-16">
      {data?.map((d) => (
        <Item item={d} key={d.id} />
      ))}
    </div>
  );
};
