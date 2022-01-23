import Head from "next/head";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="nav w-screen">
        <div className="navTop flex items-center bg-amazonBlue p-1 flex-grow py-2">
          <div className="navTop__logo flex-grow sm:flew-grow-0">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              alt="logo"
              className="cursor-pointer"
            />
          </div>
          {/* <div className="navTop__searchBar bg-yellow-400">
            <input type="text" className="" />
              <SearchIcon className="icon" />
          </div> */}
        </div>
        <div className="navBottom"></div>
      </nav>
      <main></main>
    </div>
  );
}
