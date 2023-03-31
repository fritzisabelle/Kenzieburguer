import { ProductCard } from "./ProductCard/ProductCard";
import { ProductListContainer } from "../../Styles/ProductListContainer/ProductListContainer";

export const ProductList = ({ productList, addProductToCart, searchList }) => {
  return (
    <ProductListContainer>
      {(searchList.length == 0 &&
        productList.map((product) => (
          <ProductCard
            key={product.id}
            addProductToCart={addProductToCart}
            product={product}
          />
        ))) ||
        searchList.map((product) => (
          <ProductCard
            key={product.id}
            addProductToCart={addProductToCart}
            product={product}
          />
        ))}
    </ProductListContainer>
  );
};
