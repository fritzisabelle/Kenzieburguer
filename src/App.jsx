import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductsList/ProductsList";
import { ShopCart } from "./components/ShopCart/ShopCart";
import { CreateGlobal } from "./Styles/GlobalStyles/CreateGlobal";
import { Reset } from "./Styles/GlobalStyles/Reset";
import { Main } from "./components/main";
import { useState, useEffect } from "react";
import { api } from "./services/api";
import { v4 as uuid4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const cartListLocalStorage = localStorage.getItem("@cartList");
  const [input, setInput] = useState("");
  const [productList, setProduct] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [shopCartList, setShopCartList] = useState(
    cartListLocalStorage ? JSON.parse(cartListLocalStorage) : []
  );

  function submit(event) {
    event.preventDefault();

    const newSearchListList = productList.filter(
      (product) => product.category.toLowerCase() == input.keyword.toLowerCase()
    );

    if (newSearchListList.length > 0) {
      setInput({ keyword: "" });
      setSearchList(newSearchListList);
    } else {
      toast.error("Não existem produtos desta categoria");
    }
  }

  const loadProducts = async () => {
    try {
      const response = await api.get("products");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  function addProductToCart(product) {
    const filter = shopCartList.find(
      (productFromList) => productFromList.id == product.id
    );

    if (!filter) {
      const productWithUUID = { ...product, uuid: uuid4() };
      const newCartList = [...shopCartList, productWithUUID];
      setShopCartList(newCartList);
    } else {
      toast.error("Este produto já foi adicionado ao seu carrinho");
    }
  }

  function removeProductFromCart(productCartId) {
    const newCartList = shopCartList.filter(
      (product) => product.id !== productCartId
    );

    setShopCartList(newCartList);
  }

  function clearCart() {
    setShopCartList([]);
  }

  return (
    <div className="App">
      <CreateGlobal />
      <Reset />
      <ToastContainer />
      <Header
        input={input}
        setInput={setInput}
        submit={submit}
        productList={productList}
      />
      <Main>
        <>
          <ProductList
            addProductToCart={addProductToCart}
            productList={productList}
            searchList={searchList}
          />
          <ShopCart
            shopCartList={shopCartList}
            removeProductFromCart={removeProductFromCart}
            clearCart={clearCart}
          />
        </>
      </Main>
    </div>
  );
}

export default App;
