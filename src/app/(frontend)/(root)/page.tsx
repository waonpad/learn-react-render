import { Counter1 } from "@/components/counter-1";
import { Counter2 } from "@/components/counter-2";
import { Counter3 } from "@/components/counter-3";
import { Counter4 } from "@/components/counter-4";
import { Counter5 } from "@/components/counter-5";
import { Counter6 } from "@/components/counter-6";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const VarContainer = dynamic(() => import("@/components/var").then((mod) => mod.VarContainer), {
  ssr: false,
});

export default async function Page() {
  return (
    <div>
      <h1>/</h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Counter1 />
        <Counter2 />
        <Counter3 />
        <Counter4 />
        <Counter5 />
        <Counter6 />
        <VarContainer />
      </div>
    </div>
  );
}
