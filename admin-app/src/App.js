import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct"
import Login from "./pages/Login/Login";
import { useState, useEffect } from "react"
import axios from "axios";
import { useCookies } from "react-cookie"


function App() {
  const [user, setuser] = useState(null);
  const [userCookie, setUserCookie, removeCookie] = useCookies(["user"]);
  const [updateDataUser, setUpdateDataUser] = useState(0);
  useEffect(() => {
    console.log("reload 1");
    if (userCookie.id !== undefined) {
      axios
        .get(`https://localhost:44343/data/user/${userCookie.id}`)
        .then((res) => {
          setuser(res.data);
        })
        .catch((err) => console.log("Đăng nhập fail" + err));
    }
  }, []);
  useEffect(() => {
    if (user !== null) {
      axios
        .get(`https://localhost:44343/data/user/${userCookie.id}`)
        .then((res) => {
          setuser(res.data);
        })
        .catch((err) => console.log("Đăng nhập fail" + err));
    }
  }, [updateDataUser]);
  const updateData = () => {
    if (updateDataUser === 0) setUpdateDataUser(1);
    else setUpdateDataUser(0);
  }
  const login = (user) => {
    setUserCookie("id", user.id);
    setuser(user);
  };
  const logout = () => {
    removeCookie('id');
    setuser(null);
  }
  if (user !== null) return (
    <Router>
      <Topbar user={user} logout={logout} />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/" element={<Login login={login} />} />
        </Routes>
      </div>
    </Router>
  ); else return (
    <Router>
      <Login login={login} />
    </Router>

  )


}

export default App;
