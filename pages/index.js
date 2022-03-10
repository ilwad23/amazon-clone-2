import Head from "next/head";
import Nav from "../Component/Nav";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main></main>
    </div>
  );
}
