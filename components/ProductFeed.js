import React from "react";
import Product from "../components/Product";

function ProductFeed({ products }) {
  return (
    <div className="products ">
      {products.slice(0, 4).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          img={product.image}
        />
      ))}
      <img
        src="https://links.papareact.com/dyz"
        loading="lazy"
        alt="banner"
        className="product__ad col-span-full"
      />
      {products.slice(4, 6).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          img={product.image}
        />
      ))}
      {/* <div className="col-span-2"> */}
      {products.slice(6, 7).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          img={product.image}
          colSpan={2}
        />
      ))}
      {/* </div> */}
      {products.slice(7, 13).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          img={product.image}
        />
      ))}
      {/* <div className="col-span-2"> */}
      {products.slice(13, 14).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          img={product.image}
          colSpan={2}
        />
      ))}
      {/* </div> */}
      {products.slice(14, products.length).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating}
          img={product.image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
