import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header.js";
import Laptops from "./Pages/Products/Laptops";
import Keyboard from "./Pages/Products/Keyboard";
import Login from "./Pages/Login";
import Body from "./Pages/Body.js";
import Lienhe from "./Pages/Lienhe";
import Tintuc from "./Pages/Tintuc";
import Showroom from "./Pages/Showroom";
import Footer from "./Pages/Footer";
import DetailProductsLaptop from "./Pages/Products/DetailProductsLaptop";
import DetailProductsKeyboard from "./Pages/Products/DetailProductsKeyboard";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={() => <Body />}></Route>
        <Route path="/sanpham" exact component={() => <Laptops />}></Route>
        <Route path="/laptop" exact component={() => <Laptops />}></Route>
        <Route path="/keyboard" exact component={() => <Keyboard />}></Route>
        <Route
          path="/laptop/:id"
          component={(match) => <DetailProductsLaptop match={match} />}
        ></Route>
        <Route
          path="/keyboard/:id"
          component={(match) => <DetailProductsKeyboard match={match} />}
        ></Route>
        <Route path="/login" component={() => <Login />}></Route>
        <Route path="/lienhe" component={() => <Lienhe />}></Route>
        <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
        <Route path="/showroom" component={() => <Showroom />}></Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
