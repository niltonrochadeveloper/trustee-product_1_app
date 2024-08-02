import { Inter } from "next/font/google";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Protect() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.replace("/");
    if (session) router.replace("/auth/products");
  }, [session, status, router]);

  if (status === "loading") {
    return <p>carregando...</p>;
  }

  if (!session) {
    return <p>carregando...</p>;
  }

  return <h1>Carregando...</h1>;
}
