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
    attributes : [
       {
          name : "Thương hiệu",
          datas : [
              {
                 name : "DELL",
                 path : "/brand/DELL",
              },
              {
                name :  "ASUS",
                path :  "/brand/DELL",
              },
              {
                name :  "ACER",
                path :  "/brand/DELL",
              },
              {
                name :  "MSI",
                path :  "/brand/MSI",
              },
              {
                name :  "LG",
                path :  "/brand/LG",
              },
              {
                name :  "Gigabyte",
                path :  "/brand/gigabyte",
              },
          ]
       },
       {
          name : "CPU",
          datas : [
              {
                  name : "Intel Corei3",
                  path : "/cpu/corei3"
              },
              {
                  name : "Intel Corei5",
                  path : "/cpu/corei5"
              },
              {
                  name : "Intel Corei7",
                  path : "/cpu/corei7"
              },
              {
                  name : "Intel Corei9",
                  path : "/cpu/corei9"
              },
              {
                  name : "AMD Ryzen3",
                  path : "/cpu/ryzen3"
              },
              {
                  name : "AMD Ryzen5",
                  path : "/cpu/ryzen5"
              },
              {
                  name : "AMD Ryzen7",
                  path : "/cpu/ryzen7"
              },
              ]
       },
       {
        name : "RAM",
        datas : [
            {
              name : "4GB",
              path : "/ram/4"
            },
            {
              name : "8GB",
              path : "/ram/8"
            },
            {
              name : "16GB",
              path : "/ram/16"
            },
            {
              name : "32GB",
              path : "/ram/32"
            },
          ],
        },
        {
          name : "VGA",
          datas : [
            {
              name : "NVIDIA",
              path : "/vga/brand/name/nvidia"
            },
            {
              name : "AMD",
              path : "/vga/brand/name/amd"
            },
            ]
        },
        {
          name : "Nhu cầu",
          datas : [
            {
              name : "Laptop Văn Phòng",
              path : "/style/1"
            },
            {
              name : "Laptop Gaming-Đồ Họa",
              path : "/style/2"
            },
            {
              name : "Laptop Mỏng nhẹ",
              path : "/style/3"
            },
            {
              name : "Laptop Mini",
              path : "/style/4"
            },
            {
              name : "Laptop sinh viên",
              path : "/style/5"
            }
          ]
        },
        {
          name : "Theo giá",
          datas : [
            {
              name : "Dưới 10 triệu",
              path : "/from=0to=10000000"
            },
            {
              name : "10-15 triệu",
              path : "/from=10000000to=15000000"
            },
            {
              name : "15-20 triệu",
              path : "/from=15000000to=20000000"
            },
            {
              name : "20-30 triệu",
              path : "/from=20000000to=30000000"
            },
            {
              name : "30-50 triệu",
              path : "/from=30000000to=50000000"
            },
            {
              name : "Trên 50 triệu",
              path : "/from=50000000to=999"
            },
          ]
        },
        {
          name : "Theo kích thước",
          datas : [
            {
              name : "Dưới 13 inch",
              path : "/size/from=0to=13"
            },
            {
              name : "13 đến 15 inch",
              path : "/size/from=13to15"
            },
            {
              name : "Trên 15 inch",
              path : "/size/from=15to999"
            },
          ]
        },
    ]
  },
  {
    optionName: "PC(Máy tính bàn)",
    path: "/pc",
    icon: () => {
      return <RiComputerLine className="pro-list-item-icon" />;
    },
    attributes : [
      {
          name : "PC theo thương hiệu",
          datas : [
            {
              name : "Dell",
              path : "/"
            },
            {
              name : "Asus",
              path : "/"
            },
            {
              name : "Acer",
              path : "/"
            },
            {
              name : "Dell",
              path : "/"
            },
            {
              name : "HP",
              path : "Lenovo"
            },
            {
              name : "Lenovo",
              path : "/"
            }
          ]
      },
      {
            name : "PC theo nhu cầu",
            datas : [
              {
                  name : "PC văn phòng",
                  path : "/"
              },
              {
                  name : "PC sinh viên",
                  path : "/"
              },
              {
                  name : "PC đồ họa",
                  path : "/"
              },
              {
                  name : "PC gaming",
                  path : "/"
              },
              {
                  name : "PC giá rẻ",
                  path : "/"
              }
            ]
      },
      {
            name : "PC theo giá",
            datas : [
              {
                  name : "Dưới 10 triệu",
                  path : "/"
              },
              {
                  name : "10-20 triệu",
                  path : "/"
              },
              {
                  name : "20-30 triệu",
                  path : "/"
              },
              {
                  name : "30-40 triệu",
                  path : "/"
              },
              {
                  name : "40-50 triệu",
                  path : "/"
              },
              {
                  name : "50-100 triệu",
                  path : "/"
              },
              {
                  name : "Trên 100 triệu",
                  path : "/"
              }
            ]
      },
      {
        name : "PC theo cấu hình cpu",
        datas : [
            {
                name : "Intel Pentium",
                path : "/"
            },
            {
                name : "Intel Corei3",
                path : "/cpu/corei3"
            },
            {
                name : "Intel Corei5",
                path : "/cpu/corei5"
            },
            {
                name : "Intel Corei7",
                path : "/cpu/corei7"
            },
            {
                name : "Intel Corei9",
                path : "/cpu/corei9"
            },
            {
                name : "AMD Ryzen3",
                path : "/cpu/ryzen3"
            },
            {
                name : "AMD Ryzen5",
                path : "/cpu/ryzen5"
            },
            {
                name : "AMD Ryzen7",
                path : "/cpu/ryzen7"
            },
            ]
     },
    ]
  },
  {
    optionName: "Màn hình",
    path: "/screen",
    icon: () => {
      return <RiComputerFill className="pro-list-item-icon" />;
    },
    attributes : null
  },
  {
    optionName: "Bàn phím",
    path: "/keyboard",
    icon: () => {
      return <MdKeyboardAlt className="pro-list-item-icon" />;
    },
    attributes : null
  },
  {
    optionName: "Chuột",
    path: "/mouse",
    icon: () => {
      return <BsFillMouse2Fill className="pro-list-item-icon" />;
    },
    attributes : null
  },
  {
    optionName: "Tai nghe",
    path: "",
    icon: () => {
      return <BsHeadphones className="pro-list-item-icon" />;
    },
    attributes : null
  },
  {
    optionName: "Flash sale",
    path: "",
    icon: () => {
      return <FcSalesPerformance className="pro-list-item-icon" />;
    },
    attributes : null
  },
  {
    optionName: "Mua để nhận quà",
    path: "",
    icon: () => {
      return <AiFillGift className="pro-list-item-icon" id="gift" />;
    },
    attributes : null
  },
  {
    optionName: "Miễn phí giao hàng",
    path: "",
    icon: () => {
      return <FcShipped className="pro-list-item-icon" />;
    },
    attributes : null
  },
  {
    optionName: "Hàng chính hãng",
    path: "",
    icon: () => {
      return <FaMedal className="pro-list-item-icon" id="medal-icon" />;
    },
    attributes : null
  },
];
export default PRODUCT_OPTIONS;
