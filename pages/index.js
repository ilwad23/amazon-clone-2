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
        <main>
          <div className="banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://links.papareact.com/gi1"
              loading="lazy"
              alt="banner"
              className="cursor-pointer"
            />
            <div className="banner__shadow"></div>
          </div>
        </main>
      </body>
    </div>
  );
}
