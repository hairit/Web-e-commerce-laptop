import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header.js";
import Keyboard from "./Pages/Products/ProductsKeyboard/Keyboard";
import slide from "./Scrip/slide";
import { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Body from "./Pages/Body.js";
import Lienhe from "./Pages/Lienhe";
import Tintuc from "./Pages/Tintuc";
import Showroom from "./Pages/Showroom";
import Footer from "./Pages/Footer";
import DetailProductsLaptop from "./Pages/Products/ProductsLaptop/DetailProductsLaptop";
import DetailProductsKeyboard from "./Pages/Products/ProductsKeyboard/DetailProductsKeyboard";
import DetailProductsScreen from "./Pages/Products/ProductsScreen/DetailProductsScreen";
import Screen from "./Pages/Products/ProductsScreen/Screen";
import GioHang from "./Pages/GioHang";
import RoutesCartItems from "./Pages/Routes/RoutesCartItems";
import axios from "axios";
import { useCookies } from "react-cookie";
function App() {
  const [user, setUser] = useState(null);
  const [userCookie, setUserCookie] = useCookies(["user"]);
  useEffect(() => {
    if (userCookie.id !== null) {
      axios
        .get(`https://localhost:44343/data/user/${userCookie.id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log("Đăng nhập fail"));
    }
  }, []);
  const login = (user) => {
    setUserCookie("id", user.id);
    setUser(user);
  };
  console.log(user);
  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <Route path="/" exact component={() => <Body />}></Route>
        {/* <Route path="/sanpham" exact component={() => <Laptops />}></Route> */}

        <Route path="/keyboard" exact component={() => <Keyboard />}></Route>
        <Route path="/screen" exact component={() => <Screen />}></Route>
        <Route
          path="/laptop/:id"
          component={(match) => <DetailProductsLaptop match={match} />}
        ></Route>
        <Route
          path="/keyboard/:id"
          component={(match) => <DetailProductsKeyboard match={match} />}
        ></Route>
        <Route
          path="/screen/:id"
          component={(match) => <DetailProductsScreen match={match} />}
        ></Route>
        {/* <Route path="/card" component={() => <GioHang />}></Route> */}
        {/* <Route path="/login" exact component={() => <Login2 />}></Route> */}

        <RoutesCartItems />
        <Route
          path="/login"
          exact
          component={() => <Login login={login} />}
        ></Route>

        <Route path="/login/register" exact component={() => <Register />}>
          {" "}
        </Route>

        <Route path="/login/register" exact component={() => <Register />}>
          {" "}
        </Route>

        <Route path="/lienhe" component={() => <Lienhe />}></Route>
        <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
        <Route path="/showroom" component={() => <Showroom />}></Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
