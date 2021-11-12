import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import GioHang from "../GioHang";
export default function RoutesCartItems() {
  const [CartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44343/data/Product/type=laptop", null)
      .then((res) => setCartItems(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Switch>
      <Route
        path="/giohang"
        component={() => <GioHang CartItems={CartItems} />}
      ></Route>
    </Switch>
  );
}
