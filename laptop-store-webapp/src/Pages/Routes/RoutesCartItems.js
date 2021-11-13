import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import GioHang from "../GioHang";
import Laptops from "../Products/ProductsLaptop/Laptops";

export default function RoutesCartItems() {
  const [CartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44343/data/Product/type=laptop", null)
      .then((res) => setCartItems(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleaddCart = (product) => {
    const ProductExist = CartItems.find((item) => item.id === product.id);
    console.log("ahihi123", product.id);
    console.log(
      "akakak",
      CartItems.find((item) => item.id)
    );
    if (ProductExist) {
      setCartItems(
        CartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...CartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <Switch>
      <Route
        path="/laptop"
        exact
        component={() => <Laptops handleaddCart={handleaddCart} />}
      ></Route>
      <Route
        path="/giohang"
        component={() => (
          <GioHang CartItems={CartItems} handleaddCart={handleaddCart} />
        )}
      ></Route>
    </Switch>
  );
}
