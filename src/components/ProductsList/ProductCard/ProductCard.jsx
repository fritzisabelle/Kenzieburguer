import { Buttons } from "../../../Styles/buttons/Buttons";
import { ProductCardDiv } from "../../../Styles/ProductListContainer/ProductCard/ProductCardDiv";
import { ProductDetailsContainer } from "../../../Styles/ProductListContainer/ProductCard/ProoductDetailsContainer";
import { ProductInfoContainer } from "../../../Styles/ProductListContainer/ProductCard/ProductInfoContainer";
import { useState } from "react";
import { ProductCardFigure } from "../../../Styles/ProductListContainer/ProductCard/ProductCardFig";

export const ProductCard = ({ product, addProductToCart }) => {
  return (
    <ProductCardDiv>
      <ProductCardFigure>
        <img src={product.img} alt={product.name} />
      </ProductCardFigure>
      <ProductDetailsContainer>
        <ProductInfoContainer>
          <h3>{product.name}</h3>
          <small>{product.category}</small>
          <p>R${product.price.toFixed(2)}</p>
        </ProductInfoContainer>
        <Buttons
          ButtonStyle="Md"
          Color="Green"
          onClick={() => addProductToCart(product)}
        >
          Adicionar
        </Buttons>
      </ProductDetailsContainer>
    </ProductCardDiv>
  );
};
