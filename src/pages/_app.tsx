import { ReduxProvider, SessionProvider } from "@/providers";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store, { persistor } from "core/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </ReduxProvider>
    </SessionProvider>
  );
}
