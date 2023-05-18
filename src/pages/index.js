import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/HomeComponents/Header";
import HomePage from "@/HomeComponents/Home";
import Login from "@/HomeComponents/HeaderComponents/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>404Owl</title>
        <meta name="description" content="404Owl-Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Login />
        <HomePage />
      </main>
    </>
  );
}
