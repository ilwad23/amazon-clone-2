/* eslint-disable @next/next/no-img-element */ import React from "react";
import Image from "next/image";
import Link from "next/Link";
import { StarIcon } from "@heroicons/react/solid";
function Product({
  title,
  description,
  price,
  category,
  rating,
  img,
  colSpan = "1",
}) {
  const Rating = Math.floor(rating);
  const Prime = Math.random() > 0.5 ? true : false;
  return (
    <div className={`product l:col-span-${colSpan}`}>
      <p className="product__category">{category}</p>
      <Link href="https://www.instagram.com/bladerunnerrealworld/">

      <img
        src={img}
        alt="product"
        height="200"
        width="200"
        loading="lazy"
        className="mx-auto pt-2"
        />
        </Link>
      <div className="product__info">
        <h2 className="product__title">{title}</h2>
        <div className="product__ratings flex ">
          {Array(Rating)
            .fill()
            .map((_, i) => (
              <StarIcon
                key={i}
                className="product__starIcon text-amazonYellow w-6 h-6"
              />
            ))}
        </div>
        <p className="product__description line-clamp-2">{description}</p>
        <p className="product__price py-2">£{price}</p>

        <div className={`product__prime product__prime--${Prime && "toggle"}`}>
          <Image
            src="https://links.papareact.com/fdw"
            width={63}
            height={40}
            objectFit="fit"
            alt="logo"
          />
          <p>FREE Next-day Delivery</p>
        </div>
        <div className="product__btn py-2">Add to basket</div>
      </div>
    </div>
  );
}

export default Product;
