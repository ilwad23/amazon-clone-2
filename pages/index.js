import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Nav />
        {/* <main>
          <div className="banner">
            <img
              src="https://links.papareact.com/gi1"
              alt="logo"
              className="cursor-pointer"
            />
          </div>
        </main> */}
      </body>
    </div>
  );
}
