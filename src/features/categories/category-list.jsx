import { CATEGORIES } from "@/lib/categories.data";
import { useCategoryStore } from "@/lib/store/use-categories-store";
import { cn } from "@/lib/utils";
import Image from "next/image";
export const CategoryList = () => {
  const { currentCategoryId, setCurrentCategoryId } = useCategoryStore();

  return (
    <div className="flex flex-col gap-2">
      {CATEGORIES.map((c) => (
        <button
          onClick={() => {
            setCurrentCategoryId(c.id);
          }}
          className={cn(
            "relative rounded-md border p-2 flex flex-col items-center",
            {
              "bg-accent/50": currentCategoryId === c.id,
            }
          )}
          id={c.id}
          key={c.id}
        >
          <Image src={c.logo} width={32} height={32} alt={c.title} />
          <p className="text-xs">{c.title}</p>
        </button>
      ))}
    </div>
  );
};
