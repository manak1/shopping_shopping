import { Button } from "@/src/components/ui/button";
import { signIn } from "@/src/libs/auth";
import React from "react";

const page = () => {
  const onSubmit = async () => {
    "use server";
    await signIn("google", {
      redirectTo: "/home",
    });
  };

  return (
    <div className="grid place-items-center min-h-screen px-4">
      <form action={onSubmit}>
        <div className="relative">
          <img src="/cat.svg" alt="" />
          <p className="absolute p-[24px] border top-[-100px] left-[30px] rounded-[30px]">
            Welcome back manaki!!
          </p>
        </div>
        <div className="text-center mt-4">
          <Button>Googleでログインする</Button>
        </div>
      </form>
    </div>
  );
};

export default page;
