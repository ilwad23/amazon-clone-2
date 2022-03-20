/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Nav from "../components/Nav";

import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
};
