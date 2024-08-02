"use client";

import {
  SessionProvider as NASessionProvider,
  SessionProviderProps,
} from "next-auth/react";

const SessionProvider = (props: SessionProviderProps) => {
  return <NASessionProvider {...props}>{props.children}</NASessionProvider>;
};

export default SessionProvider;
