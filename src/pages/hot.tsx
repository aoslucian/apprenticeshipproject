import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Hot from "~/components/menu/Hot/Hot";







const OldCustomer: NextPage = () => {

  return (
    <>
      <Head>
      <title>Restaurant Istanbul Till</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <Hot />
    
    </>
  );
};

export default OldCustomer;