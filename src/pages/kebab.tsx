import { type NextPage } from "next";
import Head from "next/head";


import { api } from "~/utils/api";
import Kebab from "~/components/menu/Kebab/Kebab";



const OldCustomer: NextPage = () => {


  return (
    <>
      <Head>
      <title>Restaurant Istanbul Till</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Kebab />

    </>
  );
};

export default OldCustomer;