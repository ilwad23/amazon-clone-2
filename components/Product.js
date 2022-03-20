/* eslint-disable @next/next/no-img-element */ import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
function Product({
  title,
  description,
  price,
  category,
  rating,
  img,
}) {
  return (
    <div className={`product`}>
      <p className="product__category">Men’s Collection</p>
      <img
        // src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        src={img}
        alt="product"
        height="200"
        width="200"
        loading="lazy"
        className="mx-auto pt-2"
      />
      <div className="product__info">
        <h2 className="product__title">
          {/* Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops */}
          {title}
        </h2>
        <div className="product__ratings flex ">
          <StarIcon className="product__starIcon text-amazonYellow w-6 h-6" />
          <StarIcon className="product__starIcon text-amazonYellow w-6 h-6" />
          <StarIcon className="product__starIcon text-amazonYellow w-6 h-6" />
        </div>
        <p className="product__description line-clamp-2">{description}</p>
        <p className="product__price">£{price}</p>
        <div className="product__prime">
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
