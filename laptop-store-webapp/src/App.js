import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Body from "./Pages/Body/Laptop.js";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Lienhe from "./Pages/Lienhe";
import Tintuc from "./Pages/Tintuc";
import Showroom from "./Pages/Showroom";
import Header from "./Pages/Header.js";

=======
import Header from './Pages/Header.js';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Body from './Pages/Body.js'
import Lienhe from './Pages/Lienhe';
import Tintuc from './Pages/Tintuc';
import Showroom from './Pages/Showroom';
>>>>>>> f234e74f72c9879741108b8ce4796ea76c81f0a6
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={() => <Body />}></Route>
        <Route path="/sanpham" component={() => <Product />}></Route>
        <Route path="/login" component={() => <Login />}></Route>
        <Route path="/lienhe" component={() => <Lienhe />}></Route>
        <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
        <Route path="/showroom" component={() => <Showroom />}></Route>
      </div>
    </Router>
  );
}
export default App;
