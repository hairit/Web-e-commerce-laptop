import React, { useEffect, useState } from "react";
import axios from "axios";
import details from "../../../CSS/ProductsCss/details.css";
import Solver from "../../../Classes/Solver";
import freeshipping_4px from "../../../Images/freeshipping_4px.png";
import { NavLink } from "react-router-dom";

export default function SanPhamKhac() {
  const solver = new Solver();
  const [sanpham, setSanpham] = useState([]);
  useEffect(() => {
    axios
      .get("https://localhost:44343/data/Product/type=laptop", null)
      .then((res) => setSanpham(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {sanpham.map((kb, index) => {
        return (
          <div className="col_2 slide-item" key={index}>
            <NavLink to={`/keyboard/${kb.id}`}>
              <div className="imgname inf-price">
                <img
                  className="imgkb"
                  src={`https://localhost:44343/Images/Products/${kb.nameimage}`}
                />
              </div>
            </NavLink>
            <div className="ten-id-gia lt">
              <a>
                {kb.ten} {kb.id}
              </a>
            </div>

            <div className="inf-price">
              <p>{solver.formatCurrency("vi-VN", "currency", "VND", kb.gia)}</p>
              <img src={freeshipping_4px} />
            </div>
          </div>
        );
      })}
    </>
  );
}
