import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route ,useHistory } from "react-router-dom";
import Header from "./Pages/Header.jsx";
import Keyboard from "./Pages/Products/ProductsKeyboard/Keyboard";
import { useState, useEffect } from "react";
import Login from "./Pages/Login/Login";
import Login2 from "./Pages/Login/Login2";
import Body from "./Pages/Body";
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
import ScrollToTop from "./ScrollToTop";
import ThanhToan from "./Pages/ThanhToan";
import DonHang from "./Pages/DonHang";
import call from "./API/API";

function App() {
  const history = useHistory();
  const [blur, setblur] = useState(false);
  const [user, setUser] = useState(null);
  const [userCookie, setUserCookie ,removeCookie] = useCookies(["user"]);
  const [updateDataUser, setUpdateDataUser] = useState(0);
  const [bill, setBill] = useState({id : '',iduser : '',tongtien : 0,ngaydat : '',diachinhan :'',billDetails : []})
  useEffect(() => {
    console.log("reload 1");
    if (userCookie.id !== undefined) {
      console.log("reload in cookie");
      axios
              .get(`https://localhost:44343/data/user/${userCookie.id}`)
              .then((res) => 
              {
                setUser(res.data);
              })
              .catch((err) => console.log("Đăng nhập fail"+err));
    }
  }, []);
  useEffect(() => {
      console.log("Reload 2");
      if(user !== null) {
        call('GET',`data/user/${user.id}`,null)
           .then((res) => setUser(res.data))
           .catch((err) => console.log("Reload User"+err));
      }
  }, [updateDataUser]);
  const updateData = () =>{
    if(updateDataUser === 0) setUpdateDataUser (1);
    else setUpdateDataUser(0);
  }
  const login = (user) => {
    setUserCookie("id", user.id);
    setUser(user);
  };
  const logout = () => {
    removeCookie('id');
    setUser(null);
  }
  
  const clickblur = (isblur) => {
    setblur(isblur);
  }
  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };
  const createBillDetails=(cartDetails) =>{
    var BillDetails = [];
    cartDetails.forEach(element => {
        if(element.selected === 1) {
          BillDetails.push({
            idProduct : element.idProduct,
            soluong :   element.soluong,
            tongtien :  element.tongtien
        });
        }
    });
    return BillDetails;
  }
  const createBill = (cartDetails,totalPrice) => {
    setBill({
      id : ID(),
      iduser : user.id,
      tongtien : totalPrice,
      ngaydat : new Date().toISOString().slice(0, 10),
      diachinhan : user.diachi,
      billDetails : createBillDetails(cartDetails)
    })
  }
  // console.log(user);
  const order =() =>{
    axios.post('https://localhost:44343/data/bill/',bill)
        .then(res => {
          //if(res.status === 201){
            console.log(res.data);
            updateData();
          //}
        })
        .catch((err) => {
             alert("Đặt hàng thất bại");
        })
  }
  const addProductToCart = (idProduct , price )=>{
    if(user === null)
    {
      alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng");
    }
    else{
    axios.get(`https://localhost:44343/data/cartdetail/action=add/iduser=${user.id}/idproduct=${idProduct}/tongtien=${price}`,null)
      .then(res => {
        if(res.status === 201){
           console.log("Da them vao gio hang",user.id,idProduct,price);
           updateData();
        }
        else alert("không thể thêm vào giỏ hàng");
      }).catch(err => console.log("Add cart failed"));
    }
  }
  const deleteCartItem = (iduser,idpro)=>{
    if(window.confirm("Bạn muốn xoá sản phẩm này ra khỏi giỏ hàng?") ===true){
      axios.delete(`https://localhost:44343/data/cartdetail/iduser=${iduser}/idproduct=${idpro}`,null)
      .then(()=> {
        updateData();
      })
      .catch((err)=> 
      console.log("Dell xoa duoc",err))
    }
  }
  const deleteProductFromCart=(iduser, idpro, thanhtien,quantity) => {
    if(quantity <= 1){
      deleteCartItem(iduser, idpro)
    }
    else{
      axios.get(`https://localhost:44343/data/cartdetail/action=delete/iduser=${iduser}/idproduct=${idpro}/tongtien=${thanhtien}`, null)
      .then(()=> {
        updateData();
      })
      .catch((err)=> console.log("Dell xoa duoc",err))
    } 
  }
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header user={user} logout={logout} clickblur={clickblur}/>
            <Route path="/"                               exact component={() => <Body blur={blur} addProductToCart={addProductToCart} />}></Route>

            <Route path="/laptop"                         exact component={() => <Laptops addProductToCart={addProductToCart} />}></Route>
            <Route path="/laptop/:attribute/:value"       exact component={(match) => <Laptops  match={match} /> } ></Route>
            <Route path="/laptop/:attribute/:from/:to"    exact component={(match) => <Laptops  match={match} /> } ></Route>
            
            <Route path="/keyboard"                       exact component={() => <Keyboard addProductToCart={addProductToCart} />}></Route>
            <Route path="/mouse"                          exact component={() =><Mouse addProductToCart={addProductToCart} />} ></Route>
            
            <Route path="/screen"                         exact component={() => <Screen addProductToCart={addProductToCart} />}></Route>
            <Route path="/screen/:attribute/:value"       exact component={(match) => <Screen match={match} addProductToCart={addProductToCart} />}></Route>
            <Route path="/screen/:attribute/:from/:to"    exact component={(match) => <Screen match={match} addProductToCart={addProductToCart} />}></Route>


            <Route path="/pc"                             exact component={() =>         <PC addProductToCart={addProductToCart} />}></Route>
            <Route path="/pc/:attribute/:value"           exact component={(match) =>    <PC addProductToCart={addProductToCart} match={match}  />}></Route>
            <Route path="/pc/:attribute/:from/:to"        exact component={(match) =>    <PC addProductToCart={addProductToCart} match={match}  />}></Route>
            <Route path="/pc/:id"                         exact component={(match) =>    <DetailProductsPC addProductToCart={addProductToCart} match={match} />}></Route>

            <Route path="/checkout"                       exact component={() =>      <ThanhToan user={user} idUser={ user !== null ? user.id : null } updateData={updateData} order={order}/>}></Route>
            <Route path="/laptop/:id"                     exact component={(match) => <DetailProductsLaptop addProductToCart={addProductToCart} match={match} />}></Route>
            <Route path="/keyboard/:id"                   exact component={(match) => <DetailProductsKeyboard addProductToCart={addProductToCart}  match={match} />} ></Route>
            <Route path="/screen/:id"                     exact component={(match) => <DetailProductsScreen addProductToCart={addProductToCart} match={match} />}></Route>
            <Route path="/mouse/:id"                      exact component={(match) => <DetailProductsMouse addProductToCart={addProductToCart} match={match} />}></Route>
            
            <Route path="/card"                           exact component={() => <GioHang user={user} 
                                                          deleteProductFromCart={deleteProductFromCart} 
                                                          deleteCartItem={deleteCartItem} 
                                                          addProductToCart={addProductToCart} 
                                                          idUser={ user !== null ? user.id : null } 
                                                          createBill={createBill} 
                                                          />}></Route>

            <Route path="/login"                          exact component={(match) => <Login  login={login} match={match} /> } ></Route>
            <Route path="/bill"                                 component={() => <DonHang idUser={ user !== null ? user.id : null } />}></Route>
            <Route path="/lienhe"                               component={() => <Lienhe />}></Route>
            <Route path="/tincongnghe"                          component={() => <Tintuc />}></Route>
            <Route path="/showroom"                             component={() => <Showroom />}></Route>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
