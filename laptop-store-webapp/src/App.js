import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Header.js";
import Keyboard from "./Pages/Products/ProductsKeyboard/Keyboard";
import { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
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
import axios from "axios";
import { useCookies } from "react-cookie";
import Laptops from "./Pages/Products/ProductsLaptop/Laptops";
import Mouse from "./Pages/Products/ProductsMouse/Mouse";
import DetailProductsMouse from "./Pages/Products/ProductsMouse/DetailProductsMouse";
import PC from "./Pages/Products/ProductsPC/PC";
import DetailProductsPC from "./Pages/Products/ProductsPC/DetailProductsPC";
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
  function addCardHandleClick(idProduct , price ){
    axios.get(`https://localhost:44343/data/carddetail/action=add/iduser=${user.id}/idproduct=${idProduct}/tongtien=${price}`,null)
      .then(res => {
        if(res.status === 201){
           console.log("Da them vao gio hang",user.id,idProduct,price);
           reLoad();
        }
        else alert("không thể thêm vào giỏ hàng");
      }).catch(err => console.log("Add card failed"))
  }

  function deleteItemCart(iduser,idpro){
  
    if(window.confirm("Bạn muốn xoá sản phẩm này ra khỏi giỏ hàng?") ===true){
      axios.delete(`https://localhost:44343/data/carddetail/iduser=${iduser}/idproduct=${idpro}`,null)
      .then(()=> {
        reLoad();
      })
      .catch((err)=> 
      console.log("Dell xoa duoc",err))
    }
  }

  function deleteQuantityCart(iduser, idpro, thanhtien,quantity) {
    if(quantity <= 1){
      deleteItemCart(iduser, idpro)
    }
    else{
      axios.get(`https://localhost:44343/data/carddetail/action=delete/iduser=${iduser}/idproduct=${idpro}/tongtien=${thanhtien}`, null)
      .then(()=> {
        reLoad();
      })
      .catch((err)=> console.log("Dell xoa duoc",err))
    } 
  }
  return (
    <Router>
      <div className="App">
        <Header user={user} />
            <Route path="/" exact component={() => <Body />}></Route>
            <Route path="/laptop" exact component={() => <Laptops addCardHandleClick={addCardHandleClick} />}></Route>
            <Route path="/keyboard" exact component={() => <Keyboard addCardHandleClick={addCardHandleClick} />}></Route>
            <Route path="/mouse" exact component={() =><Mouse addCardHandleClick={addCardHandleClick} />} ></Route>
            <Route path="/screen" exact component={() => <Screen addCardHandleClick={addCardHandleClick} />}></Route>
            <Route path="/pc" exact component={() => <PC addCardHandleClick={addCardHandleClick} />}></Route>
            <Route path="/laptop/:id" component={(match) => <DetailProductsLaptop addCardHandleClick={addCardHandleClick} match={match} />}></Route>
            <Route path="/keyboard/:id" component={(match) => <DetailProductsKeyboard addCardHandleClick={addCardHandleClick}  match={match} />} ></Route>
            <Route path="/screen/:id" component={(match) => <DetailProductsScreen addCardHandleClick={addCardHandleClick} match={match} />}></Route>
            <Route path="/mouse/:id" component={(match) => <DetailProductsMouse addCardHandleClick={addCardHandleClick} match={match} />}></Route>
            <Route path="/pc/:id" component={(match) => <DetailProductsPC addCardHandleClick={addCardHandleClick} match={match} />}></Route>
            <Route path="/card" component={() => <GioHang deleteQuantityCart={deleteQuantityCart} deleteItemCart={deleteItemCart} addCardHandleClick={addCardHandleClick} idUser={ user !== null ? user.id : null } />}></Route>
            <Route path="/login" exact component={(match) => <Login  login={login} match={match} /> } ></Route>
            <Route path="/lienhe" component={() => <Lienhe />}></Route>
            <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
            <Route path="/showroom" component={() => <Showroom />}></Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
