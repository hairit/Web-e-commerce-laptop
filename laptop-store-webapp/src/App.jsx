import "./CSS/App.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Header from "./Pages/Header.jsx";
import Keyboard from "./Pages/Products/ProductsKeyboard/Keyboard";
import { useState, useEffect, useCallback, useRef } from "react";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/AdminPages/Admin";
import Body from "./Pages/Body";
import Lienhe from "./Pages/Lienhe";
import Tintuc from "./Pages/Tintuc";
import Showroom from "./Pages/Showroom";
import Footer from "./Pages/Footer";
import Swal from "sweetalert2";
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
import load from "./Images/load.gif"
import GioHangCss from "./CSS/GioHangCss.css"
import Headphone from "./Pages/Products/ProductsHeadphone/Headphone";
import DetailProductsHeadphone from "./Pages/Products/ProductsHeadphone/DetailProductsHeadphone";
import Products from "./Pages/Products/SearchProducts/Products";

function App() {
  const history = useHistory();
  const [adminMode, setAdminMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userCookie, setUserCookie, removeCookie] = useCookies(["user"]);
  const [updateDataUser, setUpdateDataUser] = useState(0);
  const cartDetails = useRef([]);
  const [bill, setBill] = useState({ id: '', iduser: '', tongtien: 0, ngaydat: '', diachinhan: '', billDetails: [] });
  useEffect(() => {
    if (userCookie.id !== undefined) {
      axios
        .get(`https://localhost:44343/data/user/${userCookie.id}`)
        .then((res) => {
          cartDetails.current = res.data.cartDetails;
          setUser(res.data);
        })
        .catch((err) => console.log("????ng nh???p fail" + err));
    }
  }, []);
  useEffect(() => {
    if (user !== null) {
      call('GET', `data/user/${user.id}`, null)
        .then((res) => {
          cartDetails.current = res.data.cartDetails;
          console.log(cartDetails.current);
          setUser(res.data)
        })
        .catch((err) => console.log("Reload User" + err));
    }
  }, [updateDataUser]);
  const updateData = () => {
    if (updateDataUser === 0) setUpdateDataUser(1);
    else setUpdateDataUser(0);
  }
  const login = (user) => {
    setUserCookie("id", user.id);
    setUser(user);
  }
  const changeAdminMode = (action) => {
    if (action === 'off') setAdminMode(false);
    else setAdminMode(true);
  }
  
  const logout = () => {
    removeCookie('id');
    changeAdminMode('off');
    setUser(null);
    history.push('/');
  }
  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };
  function showLoadOrder() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '?????t h??ng th??nh c??ng !',
      showConfirmButton: false,
      timer: 1500
    })
  }
  function showLoadAddCart() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '???? th??m v??o gi??? h??ng !',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const createBillDetails = (SelectedCartDetails) => {
    var BillDetails = [];
    SelectedCartDetails.forEach(element => {
        if(element.selected === 1){
          BillDetails.push({
            idProduct: element.idProduct,
            soluong: element.soluong,
            tongtien: element.tongtien
          });
        }
    });
    return BillDetails;
  }
  const createBill = (SelectedCartDetails, totalPrice, diachi) => {
  // console.log("1", user.diachi)
    setBill({
      id: ID(),
      iduser: user.id,
      tongtien: totalPrice,
      ngaydat: new Date().toISOString().slice(0, 10),
      diachinhan: diachi ? diachi : user.diachi,
      billDetails: createBillDetails(SelectedCartDetails)
    })
  }
  const order = () =>{
    axios.post('https://localhost:44343/data/bill/', bill)
      .then(res => {
        updateData();
        showLoadOrder();
      })
      .catch((err) => {
        alert("?????t h??ng th???t b???i"+err);
      })
  }
  function loadQuantity() {
    if (loading === true) {
      return (
        <div className="loading">
          <img src={load} />
        </div>
      )
    } else {
      <div></div>
    }
  }
  const addQuantityProduct = (idProduct, price) => {
    setTimeout(() => {
      setLoading(false);
    }, 900)
    axios.get(`https://localhost:44343/data/cartdetail/action=add/iduser=${user.id}/idproduct=${idProduct}/tongtien=${price}`, null)
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          updateData();
          setLoading(true);
        }
        else alert("kh??ng th??? th??m v??o gi??? h??ng");
      }).catch(() => console.log("Add cart failed"));
    setLoading(true);
  }
  const addProductToCart = useCallback(
    (idUser,idProduct,price)=>{
      if(idUser === null)
      {
        Swal.fire('B???n c???n ????ng nh???p ????? mua h??ng')
      }
      else {
        axios.get(`https://localhost:44343/data/cartdetail/action=add/iduser=${idUser}/idproduct=${idProduct}/tongtien=${price}`, null)
          .then(res => {
            if (res.status === 201) {
              if (!checkExistCartDetail(res.data.idProduct)) {
                cartDetails.current.push(res.data);
                document.getElementById("quantity-cartdetails-user").textContent = cartDetails.current.length;
                document.getElementById("quantity-cartdetails-user").style.display = 'block';
              }
              showLoadAddCart();
            }
            else alert("kh??ng th??? th??m v??o gi??? h??ng");
          }).catch((err) => console.log("Add cart failed" + err));
      }
    },
    [],
  )
  const checkExistCartDetail = (idProduct) => {
    var exist = false;
    cartDetails.current.forEach(element => {
      if (element.idProduct === idProduct) exist = true;
    });
    return exist;
  }
  const deleteCartItem = (iduser, idpro) => {
    Swal.fire({
      title: 'B???n mu???n x??a s???n ph???m kh???i gi??? h??ng ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://localhost:44343/data/cartdetail/iduser=${iduser}/idproduct=${idpro}`, null)
          .then(() => {
            document.getElementById("quantity-cartdetails-user").textContent = cartDetails.current.length - 1;
            updateData();
          })
          .catch((err) =>
            console.log("Dell xoa duoc", err))
        Swal.fire(
          '???? x??a'
        )
      }
    })
  }
  const deleteProductFromCart = (iduser, idpro, thanhtien, quantity) => {
    if (quantity <= 1) {
      deleteCartItem(iduser, idpro)
    }
    else {
      setTimeout(() => {
        setLoading(false);
      }, 700)
      axios.get(`https://localhost:44343/data/cartdetail/action=delete/iduser=${iduser}/idproduct=${idpro}/tongtien=${thanhtien}`, null)
        .then(() => {
          updateData();
          setLoading(true);
        })
        .catch((err) => console.log("Dell xoa duoc", err))
    }
  }
  return (
    <Router>
      <ScrollToTop />
      <div className={adminMode === false ? "App" : "App-no-scroll"}>
      {loadQuantity()}
        <Header user={user} adminMode={adminMode} logout={logout}  setUser={setUser} updateData={updateData}/>
      
        <Route path="/admin" exact component={() => <Login login={login}  />} ></Route>
        <Route path="/admin/:idUser"  component={(match) => <Admin changeAdminMode={changeAdminMode} user={user} match={match} logout={logout}/>}></Route>


        <Route path="/" exact component={() => <Body idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} changeAdminMode={changeAdminMode}/>}></Route>

        <Route path="/laptop" exact component={() => <Laptops idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} />}></Route>
        <Route path="/laptop/:attribute/:value" exact component={(match) => <Laptops match={match} addProductToCart={addProductToCart} />} ></Route>
        <Route path="/laptop/:attribute/:from/:to" exact component={(match) => <Laptops match={match} addProductToCart={addProductToCart} />} ></Route>

        <Route path="/keyboard" exact component={() => <Keyboard idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} />}></Route>
        <Route path="/mouse" exact component={() => <Mouse idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} />} ></Route>

        <Route path="/screen" exact component={() => <Screen idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} />}></Route>
        <Route path="/screen/:attribute/:value" exact component={(match) => <Screen match={match} addProductToCart={addProductToCart} />}></Route>
        <Route path="/screen/:attribute/:from/:to" exact component={(match) => <Screen match={match} addProductToCart={addProductToCart} />}></Route>

        <Route path="/headphone" exact component={() => <Headphone idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} />}></Route>
        <Route path="/headphone/:attribute/:value" exact component={(match) => <Headphone match={match} addProductToCart={addProductToCart} />}></Route>
        <Route path="/headphone/:attribute/:from/:to" exact component={(match) => <Headphone match={match} addProductToCart={addProductToCart} />}></Route>


        <Route path="/pc" exact component={() => <PC idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} />}></Route>
        <Route path="/pc/:attribute/:value" exact component={(match) => <PC addProductToCart={addProductToCart} match={match} />}></Route>
        <Route path="/pc/:attribute/:from/:to" exact component={(match) => <PC addProductToCart={addProductToCart} match={match} />}></Route>
        <Route path="/pc/:id" exact component={(match) => <DetailProductsPC idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} match={match} />}></Route>

        <Route path="/checkout" exact component={() => <ThanhToan updateData={updateData} createBill={createBill} idUser={user !== null ? user.id : null} order={order} />}></Route>
        <Route path="/laptop/:id" exact component={(match) => <DetailProductsLaptop idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} match={match} />}></Route>
        <Route path="/keyboard/:id" exact component={(match) => <DetailProductsKeyboard idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} match={match} />} ></Route>
        <Route path="/screen/:id" exact component={(match) => <DetailProductsScreen idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} match={match} />}></Route>
        <Route path="/headphone/:id" exact component={(match) => <DetailProductsHeadphone idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} match={match} />}></Route>
        <Route path="/mouse/:id" exact component={(match) => <DetailProductsMouse idUser={user !== null ? user.id : null} addProductToCart={addProductToCart} match={match} />}></Route>

        <Route path="/cart" exact component={() => <GioHang
          user={user}
          deleteProductFromCart={deleteProductFromCart}
          deleteCartItem={deleteCartItem}
          addQuantityProduct={addQuantityProduct}
          addProductToCart={addProductToCart}
          idUser={user !== null ? user.id : null}
          createBill={createBill}
        />}></Route>
        <Route path="/login" exact component={(match) => <Login login={login} match={match} changeAdminMode={changeAdminMode}/>} ></Route>
        <Route path="/bill" component={() => <DonHang idUser={user !== null ? user.id : null} />}></Route>
        <Route path="/products/:namepro" exact component={(match) => <Products match={match} />}></Route>
        <Route path="/lienhe" component={() => <Lienhe />}></Route>
        <Route path="/tincongnghe" component={() => <Tintuc />}></Route>
        <Route path="/showroom" component={() => <Showroom />}></Route>
        <Footer adminMode={adminMode} />
      </div>
    </Router>
  );
}
export default App;
