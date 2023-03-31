import { ItemCartContainer } from "./ShopCartStyles/ItemShopCart";

export const ProductItemCart = ({ product, removeProductFromCart }) => {
  return (
    <ItemCartContainer>
      <img src={product.img} alt={product.name} />
      <div>
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
        <button onClick={() => removeProductFromCart(product.id)}>
          Remover
        </button>
      </div>
    </ItemCartContainer>
  );
};
