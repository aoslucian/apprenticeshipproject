import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React, { createContext, useState } from "react";
import { MyAppProvider } from "./MyAppContext";

import { api } from "~/utils/api";
import "~/styles/globals.css";





const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {


  return (
    <SessionProvider session={session}>
      <MyAppProvider>
        <Component {...pageProps} />
      </MyAppProvider>
    </SessionProvider>
    
  );
};

export default api.withTRPC(MyApp);
