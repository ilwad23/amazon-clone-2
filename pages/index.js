import Head from "next/head";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="nav">
        <div className="navTop">
          <div className="navTop__logo">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              alt="logo"
              className="cursor-pointer"
            />
          </div>

          <div className="navTop__searchBar">
            <input type="text" className="navTop__input" />
            <SearchIcon className="navTop__searchIcon" />
          </div>
          <div className="navTop__links">
            <div className="navTop__link">
              <p>hello, user</p>
              <h3>Account & List</h3>
            </div>
            <div className="navTop__link">
              <p>Returns</p>
              <h3>& Order</h3>
            </div>
            <div className="navTop__basket">
              <div className="navTop__iconWrapper">
                <p className="navTop__num">0</p>{" "}
                <ShoppingCartIcon className="navTop__icon" />
              </div>
              <div className="navTop__link">
                <h3>Basket</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="navBottom">
          <div className="menu">
            <MenuIcon />
            <p>All</p>
          </div>
          <p>Prime Video</p>
          <p>Prime Video</p>
          <p>Prime Video</p>
          <p>Prime Video</p>
          <p>Prime Video</p>
          <p>Prime Video</p>
          <p>Prime Video</p>
          <p>Prime Video</p>
        </div>
      </nav>
      <main></main>
    </div>
  );
}
