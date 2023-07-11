import { type NextPage } from "next";
import Head from "next/head";


import CustomerForm from "../components/CustomerForm/CustomerForm";

const NewCustomer: NextPage = () => {


  return (
    <>
      <Head>
        <title>Restaurant Istanbul Till</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomerForm />
    </>
  );
};

export default NewCustomer;
