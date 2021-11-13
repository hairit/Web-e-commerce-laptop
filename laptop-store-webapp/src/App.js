import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header.js";
import Keyboard from "./Pages/Products/ProductsKeyboard/Keyboard";
import slide from "./Scrip/slide";

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
<<<<<<< HEAD
import Login2 from "./Pages/Login/Login2";
=======
import RoutesCartItems from "./Pages/Routes/RoutesCartItems";
>>>>>>> 5dc032929b99f485e4eda2c4cf31ea476669c29b
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
<<<<<<< HEAD
        <Route path="/giohang" component={() => <GioHang />}></Route>
        <Route path="/login" exact component={() => <Login2 />}></Route>
=======
        <RoutesCartItems />
        <Route path="/login" exact component={() => <Login />}></Route>
<<<<<<< HEAD
        <Route path="/login/register" exact component={() => <Register />}>
          {" "}
        </Route>
=======
        <Route path="/login/register" exact component={()=> <Register />}> </Route>
>>>>>>> 5dc032929b99f485e4eda2c4cf31ea476669c29b
>>>>>>> 8519aebe5d6a368b63bf908d7424d905611663cb
        <Route path="/lienhe" component={() => <Lienhe />}></Route>
        <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
        <Route path="/showroom" component={() => <Showroom />}></Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
