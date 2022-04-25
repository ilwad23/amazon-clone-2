import React from "react";
import Product from "../components/Product";

function ProductFeed({ products }) {
  return (
    <div className="products grid gap-8 grid-cols-1 t:grid-cols-2 l:grid-cols-4">
      {products.slice(0, 4).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating.rate}
          img={product.image}
        />
      ))}
      <img
        src="https://links.papareact.com/dyz"
        loading="lazy"
        alt="banner"
        className="product__ad col-span-full"
      />
      {products.slice(4, 5).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating.rate}
          img={product.image}
          colSpan={2}
        />
      ))}
      {products.slice(5, 7).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating.rate}
          img={product.image}
        />
      ))}
      {products.slice(7, 13).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating.rate}
          img={product.image}
        />
      ))}
      {products.slice(13, 14).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating.rate}
          img={product.image}
          colSpan={2}
        />
      ))}
      {products.slice(14, products.length).map((product, i) => (
        <Product
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          category={product.category}
          rating={product.rating.rate}
          img={product.image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
