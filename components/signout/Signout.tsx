"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <Button
      variant="ghost"
      size="default"
      className="rounded-xl flex items-center h-full text-lg text-zinc-800 gap-2 py-3 px-6 duration-150 ease-in-out"
      onClick={() => signOut()}
    >
      <LogOutIcon size={20} />
      Выйти из Системы
    </Button>
  );
};

export default SignOut;
