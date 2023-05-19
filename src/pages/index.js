import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/HomeComponents/Header";
import HomePage from "@/HomeComponents/Home";
import AccessBoard from "@/HomeComponents/HeaderComponents/AccessBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>404 Owl Blog</title>
        <meta name="description" content="404 Owl-Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <main>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <AccessBoard />
        <HomePage isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
    </>
  );
}
