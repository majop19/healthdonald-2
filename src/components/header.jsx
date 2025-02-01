"use client";
import { ShoppingBasket, User } from "lucide-react";
import { useUserStore } from "@/lib/store/use-user-store";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useCartStore } from "@/lib/store/use-cart-store";
export const Header = () => {
  return (
    <header className="flex items-center gap-2 border-b px-4 py-2 shadow-sm">
      <Link href="/" className="inline-flex items-center gap-2">
        <Image
          src="/healthdonals.png"
          alt="Healthdonals"
          width={32}
          height={32}
        />
        <p className="text-sm font-bold">Healthdonals</p>
      </Link>
      <div className="ml-auto"></div>
      <UserNameHeader />
      <CartButtonHeader
        size="sm"
        variant="outline"
        className="inline-flex items-center gap-2"
      />
    </header>
  );
};

const UserNameHeader = () => {
  const userName = useUserStore((s) => s.userName);
  const logout = useUserStore((s) => s.logout);
  if (!userName) {
    return null;
  }
  return (
    <button onClick={() => logout()} className="flex items-center gap-2">
      <User size={12} />
      <p className="text-sm">{userName}</p>
    </button>
  );
};

const CartButtonHeader = (props) => {
  const items = useCartStore((s) => s.items);

  const quantity = Object.values(items).reduce((acc, item) => {
    return acc + item.quantity || 0;
  }, 0);

  return (
    <Button {...props}>
      {quantity}
      <ShoppingBasket size={12} />
    </Button>
  );
};
