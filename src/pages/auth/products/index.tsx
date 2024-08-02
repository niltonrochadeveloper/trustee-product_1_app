import Image from "next/image";
import { signIn } from "next-auth/react";
import { Products } from "@/components";

export default function Home() {
  return <Products />;
}
