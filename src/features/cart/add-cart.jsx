import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/use-cart-store";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

export const AddCart = ({ item }) => {
  const items = useCartStore((s) => s.items);
  const addItemCart = useCartStore((s) => s.addItemCart);
  const removeItemCart = useCartStore((s) => s.removeItemCart);

  if (!items[item.id]) {
    return <Button onClick={() => addItemCart(item)}>Add</Button>;
  }

  return (
    <div className="flex items-center gap-3">
      <Button onClick={() => removeItemCart(item)} variant="outline" size="sm">
        <Minus size={12} />
      </Button>
      <p>{items[item.id].quantity}</p>
      <Button onClick={() => addItemCart(item)} variant="outline" size="sm">
        <Plus size={12} />
      </Button>
    </div>
  );
};
