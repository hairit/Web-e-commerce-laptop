import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header.js";
import Keyboard from "./Pages/Products/ProductsKeyboard/Keyboard";
import slide from "./Scrip/slide";
import { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import Body from "./Pages/Body.js";
import Lienhe from "./Pages/Lienhe";
import Tintuc from "./Pages/Tintuc";
import Login2 from "./Pages/Login/Login2";
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
import Laptops from "./Pages/Products/ProductsLaptop/Laptops";
// import DetailProductsMouse from "./Pages/ProductsMouse/DetailProductsMouse";
import Mouse from "./Pages/ProductsMouse/Mouse";
import DetailProductsMouse from "./Pages/ProductsMouse/DetailProductsMouse";
function App() {
  const [user, setUser] = useState(null);
  const [userCookie, setUserCookie] = useCookies(["user"]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    console.log(userCookie.id);
    if (userCookie.id !== undefined) {
      axios
              .get(`https://localhost:44343/data/user/${userCookie.id}`)
              .then((res) => setUser(res.data))
              .catch((err) => console.log("Đăng nhập fail"+err));
    }
  }, [reload]);
  console.log(user);
  const login = (user) => {
    setUserCookie("id", user.id);
    setUser(user);
  };
  const reLoad = () =>{
    if(reload === 0) setReload(1);
    else setReload(0);
  }
  function addCardHandleClick  (idProduct , price ){
    axios.get(`https://localhost:44343/data/carddetail/add/iduser=${user.id}/idproduct=${idProduct}/tongtien=${price}`,null)
      .then(res => {
        if(res.status === 201){
           console.log("Da them vao gio hang");
           reLoad();
        }
        else alert("không thể thêm vào giỏ hàng");
      }).catch(err => console.log("Add card failed"))
  }
  return (
    <Router>
      <div className="App">
        <Header user={user} />
            <Route path="/" exact component={() => <Body />}></Route>
            <Route path="/keyboard" exact component={() => <Keyboard />}></Route>
            <Route path="/mouse" exact component={() =><Mouse />} ></Route>
            <Route path="/screen" exact component={() => <Screen />}></Route>
            <Route path="/laptop/:id" component={(match) => <DetailProductsLaptop match={match} />}></Route>
            <Route path="/keyboard/:id" component={(match) => <DetailProductsKeyboard match={match} />} ></Route>
            <Route path="/screen/:id" component={(match) => <DetailProductsScreen match={match} />}></Route>
            <Route path="/mouse/:id" component={(match) => <DetailProductsMouse match={match} />}></Route>
            <Route path="/laptop" exact component={() => <Laptops addCardHandleClick={addCardHandleClick} />}></Route>
            <Route path="/card" component={() => <GioHang idUser={ user !== null ? user.id : null } />}></Route>
            <Route path="/login" exact component={() => <Login login={login} /> } ></Route>
            <Route path="/lienhe" component={() => <Lienhe />}></Route>
            <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
            <Route path="/showroom" component={() => <Showroom />}></Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
