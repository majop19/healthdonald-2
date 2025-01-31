"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/store/use-user-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function LoginPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const userStore = useUserStore();
  const router = useRouter();

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 py-4">
      <div className="absolute left-2 top-2 rotate-12">
        <Image
          src="/categories/burger.png"
          alt="Burger"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute right-2 top-2 -rotate-6">
        <Image
          src="/categories/dessert.png"
          alt="dessert"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute bottom-2 right-2 rotate-6">
        <Image src="/categories/fries.png" alt="fries" width={50} height={50} />
      </div>
      <div className="absolute bottom-2 left-2 -rotate-12">
        <Image
          src="/categories/nuggets.png"
          alt="nuggets"
          width={50}
          height={50}
        />
      </div>
      <h1 className="text-2xl font-bold">Welcome to Healthdonals !</h1>
      <p>Login first to access our application.</p>
      {isClient ? (
        <form
          className="flex items-center gap-2"
          action={(formData) => {
            const userName = formData.get("userName");
            userStore.login(userName);
            router.push("/");
          }}
        >
          <Input name="userName" type="text" placeholder="Username" />
          <Button type="submit">Login</Button>
        </form>
      ) : null}
    </div>
  );
}
