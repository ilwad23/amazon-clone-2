import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/outline";
import { useMediaMatcher } from "../util/hooks";
export default function Home() {
  const [search, setSearch] = useState(false);
  const mobile = useMediaMatcher();
  console.log(search);
  return (
    <div>
      <Head>
        <title>Amazon clone</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="nav ">
        <div className="navTop">
          <div className={`${mobile && search ? "hidden" : "navTop__logo"}`}>
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              alt="logo"
              className="cursor-pointer"
            />
          </div>

          <div
            className={`navTop__searchBar ${
              mobile && search? "navTop__searchBar-mobile":" "
            }`}
          >
            <input
              type="text"
              className={`navTop__input ${
                mobile && search ? "flex-1" : mobile ? "hidden":""
              }`}
              onBlur={(e) => setSearch(false)}
            />
            <SearchIcon className="navTop__searchIcon" onClick={()=>setSearch(!search)} />
          </div>
          <div className={`${mobile && search ? "hidden" : "navTop__links"}`}>
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
          <div className="navBottom__menu">
            <MenuIcon className="navBottom__icon" />
            <p className="">All</p>
          </div>
          <div className="navBottom__links">
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
            <div className="navBottom__menu">
              <p className="">Prime Video</p>
            </div>
          </div>
        </div>
      </nav>
      <main></main>
    </div>
  );
}
