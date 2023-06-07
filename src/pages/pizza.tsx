import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import ExistingCustomer from "../components/menu/ExistingCustomers/ExistingCustomer";
import Pizza from "~/components/menu/Pizza/Pizza";

const OldCustomer: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Till Software Restaurant Istanbul</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Pizza />
    </>
  );
};

export default OldCustomer;
