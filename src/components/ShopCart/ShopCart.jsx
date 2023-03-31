import { useEffect, useState } from "react";
import { Buttons } from "../../Styles/buttons/Buttons";
import { ShopCartContainer } from "./ShopCartStyles/ShopCartContainer";
import { ProductItemCart } from "./ProductItemCart";

export const ShopCart = ({
  shopCartList,
  removeProductFromCart,
  clearCart,
}) => {
  const [total, setTotal] = useState(0);

  function totalCart() {
    const newTotal = shopCartList.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
    setTotal(newTotal);
  }

  useEffect(() => {
    totalCart();
    localStorage.setItem("@cartList", JSON.stringify(shopCartList));
  }, [shopCartList]);

  return (
    <ShopCartContainer>
      <h4>Carrinho de Compras</h4>
      <div>
        {(shopCartList.length === 0 && (
          <>
            <p>Sua sacola está vazia</p>
            <small>Adicione Itens</small>
          </>
        )) || (
          <>
            {shopCartList.map((product) => {
              return (
                <ProductItemCart
                  key={product.uuid}
                  removeProductFromCart={removeProductFromCart}
                  product={product}
                />
              );
            })}
            <div className="divisor"></div>
            <div className="containerTotal">
              <p className="body600">Total:</p>
              <p>R${total.toFixed(2)}</p>
            </div>
            <Buttons
              onClick={() => clearCart()}
              className="fillContainer"
              ButtonStyle="Lg"
              Color="Grey"
            >
              Remover todos
            </Buttons>
          </>
        )}
      </div>
    </ShopCartContainer>
  );
};
