import { BsLaptop } from "react-icons/bs";
import { RiComputerLine, RiComputerFill } from "react-icons/ri";
import { MdKeyboardAlt } from "react-icons/md";
import { BsFillMouse2Fill, BsHeadphones } from "react-icons/bs";
import { FcSalesPerformance } from "react-icons/fc";
import { AiFillGift } from "react-icons/ai";
import { FcShipped } from "react-icons/fc";
import { FaMedal } from "react-icons/fa";
const PRODUCT_OPTIONS = [
  {
    optionName: "Laptop",
    path: "/laptop",
    icon: () => {
      return <BsLaptop className="pro-list-item-icon" />;
    },
    data : [
       
    ]
  },
  {
    optionName: "PC(Máy tính bàn)",
    path: "/pc",
    icon: () => {
      return <RiComputerLine className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Màn hình",
    path: "/screen",
    icon: () => {
      return <RiComputerFill className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Bàn phím",
    path: "/keyboard",
    icon: () => {
      return <MdKeyboardAlt className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Chuột",
    path: "/mouse",
    icon: () => {
      return <BsFillMouse2Fill className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Tai nghe",
    path: "",
    icon: () => {
      return <BsHeadphones className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Flash sale",
    path: "",
    icon: () => {
      return <FcSalesPerformance className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Mua để nhận quà",
    path: "",
    icon: () => {
      return <AiFillGift className="pro-list-item-icon" id="gift" />;
    },
  },
  {
    optionName: "Miễn phí giao hàng",
    path: "",
    icon: () => {
      return <FcShipped className="pro-list-item-icon" />;
    },
  },
  {
    optionName: "Hàng chính hãng",
    path: "",
    icon: () => {
      return <FaMedal className="pro-list-item-icon" id="medal-icon" />;
    },
  },
];
export default PRODUCT_OPTIONS;
