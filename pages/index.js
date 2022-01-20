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
        <div className="nav__top flex w-screen">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            alt="logo"
          />
          
          <div className="nav__input ">
            <input type="text" className='flex-1'/>
            <div className="nav__searchIcon bg-orange-400">
              <SearchIcon className='icon'/>
            </div>
          </div>
        </div>
        <div className="nav__bottom"></div>
      </nav>
      <main></main>
    </div>
  );
}
