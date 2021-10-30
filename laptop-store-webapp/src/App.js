import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Header.js';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Body from './Pages/Body.js'
import Lienhe from './Pages/Lienhe';
import Tintuc from './Pages/Tintuc';
import Showroom from './Pages/Showroom';
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
