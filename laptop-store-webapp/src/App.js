import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header.js";
import Laptops from "./Pages/Products/Laptops";
import Login from "./Pages/Login";
import Body from "./Pages/Body.js";
import Lienhe from "./Pages/Lienhe";
import Tintuc from "./Pages/Tintuc";
import Showroom from "./Pages/Showroom";
import Footer from "./Pages/Footer";
import DetailProductsLaptop from "./Pages/Products/DetailProductsLaptop";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={() => <Body />}></Route>
        <Route path="/sanpham" exact component={() => <Laptops />}></Route>
        {/* <Route path="/laptop" component={() => {}}></Route> */}
        <Route
          path="/sanpham/:id"
          component={(match) => <DetailProductsLaptop match={match}/>}
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
