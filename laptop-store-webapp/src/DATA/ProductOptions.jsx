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
                 path : "laptop/brand/Dell",
              },
              {
                name :  "ASUS",
                path :  "laptop/brand/ASUS",
              },
              {
                name :  "ACER",
                path :  "laptop/brand/Acer",
              },
              {
                name :  "HP",
                path :  "laptop/brand/HP",
              },
              {
                name :  "MSI",
                path :  "laptop/brand/MSI",
              },
              {
                name :  "LG",
                path :  "laptop/brand/LG",
              },
              {
                name :  "Gigabyte",
                path :  "laptop/brand/Gigabyte",
              },
          ]
       },
       {
          name : "CPU",
          datas : [
              {
                  name : "Intel Corei3",
                  path : "laptop/cpu/corei3"
              },
              {
                  name : "Intel Corei5",
                  path : "laptop/cpu/corei5"
              },
              {
                  name : "Intel Corei7",
                  path : "laptop/cpu/corei7"
              },
              {
                  name : "Intel Corei9",
                  path : "laptop/cpu/corei9"
              },
              {
                  name : "AMD Ryzen3",
                  path : "laptop/cpu/ryzen3"
              },
              {
                  name : "AMD Ryzen5",
                  path : "laptop/cpu/ryzen5"
              },
              {
                  name : "AMD Ryzen7",
                  path : "laptop/cpu/ryzen7"
              },
              ]
       },
       {
        name : "RAM",
        datas : [
            {
              name : "4GB",
              path : "laptop/ram/4"
            },
            {
              name : "8GB",
              path : "laptop/ram/8"
            },
            {
              name : "16GB",
              path : "laptop/ram/16"
            },
            {
              name : "32GB",
              path : "laptop/ram/32"
            },
          ],
        },
        {
          name : "VGA",
          datas : [
            {
              name : "NVIDIA",
              path : "laptop/vga/nvidia"
            },
            {
              name : "AMD",
              path : "laptop/vga/amd"
            },
            ]
        },
        {
          name : "Nhu cầu",
          datas : [
            {
              name : "Laptop Văn Phòng",
              path : "laptop/typelaptop/Laptop Văn Phòng"
            },
            {
              name : "Laptop Gaming-Đồ Họa",
              path : "laptop/typelaptop/Laptop đồ họa"
            },
            {
              name : "Laptop Mỏng nhẹ",
              path : "laptop/typelaptop/Laptop Mỏng nhẹ"
            },
            {
              name : "Laptop Mini",
              path : "laptop/typelaptop/Laptop mini"
            },
            {
              name : "Laptop sinh viên",
              path : "laptop/typelaptop/Laptop sinh viên"
            }
          ]
        },
        {
          name : "Theo giá",
          datas : [
            {
              name : "Dưới 10 triệu",
              path : "laptop/gia/0/10000000"
            },
            {
              name : "10-15 triệu",
              path : "laptop/gia/10000000/15000000"
            },
            {
              name : "15-20 triệu",
              path : "laptop/gia/15000000/20000000"
            },
            {
              name : "20-30 triệu",
              path : "laptop/gia/20000000/30000000"
            },
            {
              name : "30-50 triệu",
              path : "laptop/gia/30000000/50000000"
            },
            {
              name : "Trên 50 triệu",
              path : "laptop/gia/50000000/999"
            },
          ]
        },
        {
          name : "Theo kích thước",
          datas : [
            {
              name : "13 inch",
              path : "laptop/manhinh/13"
            },
            {
              name : "14 inch",
              path : "laptop/manhinh/14"
            },
            {
              name : "15 inch",
              path : "laptop/manhinh/15"
            },
            {
              name : "16 inch",
              path : "laptop/manhinh/16"
            },
            {
              name : "17 inch",
              path : "laptop/manhinh/17"
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
              path : "pc/brand/Dell"
            },
            {
              name : "Asus",
              path : "pc/brand/Asus"
            },
            {
              name : "Acer",
              path : "pc/brand/Acer"
            },
            {
              name : "HP",
              path : "pc/brand/hp"
            },
            {
              name : "Lenovo",
              path : "pc/brand/lenovo"
            }
          ]
      },
      {
              name : "PC theo nhu cầu",
              datas : [
                {
                    name : "PC văn phòng",
                    path : "pc/typepc/PC văn phòng"
                },
                {
                    name : "PC sinh viên",
                    path : "pc/typepc/PC sinh viên"
                },
                {
                    name : "PC đồ họa",
                    path : "pc/typepc/PC đồ họa"
                },
                {
                    name : "PC gaming",
                    path : "pc/typepc/PC gaming"
                },
                {
                    name : "PC giá rẻ",
                    path : "pc/typepc/PC giá rẻ"
                }
            ]
      },
      {
            name : "PC theo giá",
            datas : [
              {
                  name : "Dưới 10 triệu",
                  path : "pc/gia/0/10000000"
              },
              {
                  name : "10-20 triệu",
                  path : "pc/gia/10000000/20000000"
              },
              {
                  name : "20-30 triệu",
                  path : "pc/gia/10000000/20000000"
              },
              {
                  name : "30-40 triệu",
                  path : "pc/gia/30000000/40000000"
              },
              {
                  name : "40-50 triệu",
                  path : "pc/gia/30000000/40000000"
              },
              {
                  name : "50-100 triệu",
                  path : "pc/gia/50000000/100000000"
              },
              {
                  name : "Trên 100 triệu",
                  path : "pc/gia/100000000/999"
              }
            ]
      },
      {
        name : "PC theo cấu hình cpu",
        datas : [
            {
                name : "Intel Pentium",
                path : "pc/cpu/Intel Pentium"
            },
            {
                name : "Intel Corei3",
                path : "pc/cpu/corei3"
            },
            {
                name : "Intel Corei5",
                path : "pc/cpu/corei5"
            },
            {
                name : "Intel Corei7",
                path : "pc/cpu/corei7"
            },
            {
                name : "Intel Corei9",
                path : "pc/cpu/corei9"
            },
            {
                name : "AMD Ryzen3",
                path : "pc/cpu/ryzen3"
            },
            {
                name : "AMD Ryzen5",
                path : "pc/cpu/ryzen5"
            },
            {
                name : "AMD Ryzen7",
                path : "pc/cpu/ryzen7"
            },
            ]
     },
     {
       name : "Mainboard",
       datas : [
            {
                name : "ASUS",
                path : "pc/mainboard/asus",
            },
            {
                name : "MSI",
                path : "pc/mainboard/msi"
            },
            {
                name : "Intel",
                path : "pc/mainboard/intel"
            },
            {
                name : "AMD",
                path : "pc/mainboard/amd"
            },
            {
                name : "GIGABYTE",
                path : "pc/mainboard/gigabyte"
            }
       ]
     },
     {
        name : "Thương hiệu cpu",
        datas : [
          {
              name : "Intel",
              path : "pc/cputype/Intel"
          },
          {
              name : "AMD",
              path : "pc/cputype/AMD"
          }, 
        ]
     },
     {
        name : "RAM",
        datas : [
            {
              name : "4GB",
              path : "pc/ram/4GB"
            },
            {
              name : "8GB",
              path : "pc/ram/8GB"
            },
            {
              name : "16GB",
              path : "pc/ram/16GB"
            },
            {
              name : "32GB",
              path : "pc/ram/32GB"
            },
            {
              name : "64GB",
              path : "pc/ram/64GB"
            }
        ]
     },
     {
        name : "Thương hiệu VGA",
        datas : [
            {
                name : "NVIDIA",
                path : "pc/vgatype/nvidia"
            },
            {
                name : "AMD",
                path : "pc/vgatype/amd"
            },
            {
                name : "ASUS",
                path : "pc/vgatype/asus"
            },
            {
                name : "SamSung",
                path : "pc/vgatype/samsung"
            }
        ]
     }
    ]
  },
  {
    optionName: "Màn hình",
    path: "/screen",
    icon: () => {
        return <RiComputerFill className="pro-list-item-icon" />;
    },
    attributes : [
        {
          name : "Thương hiệu",
          datas : [
              {
                  name : "LG",
                  path : "screen/brand/lg"
              },
              {
                  name : "DELL",
                  path : "screen/brand/dell"
              },
              {
                  name : "Acer",
                  path : "screen/brand/acer"
              },
              {
                  name : "Asus",
                  path : "screen/brand/asus"
              },
              {
                  name : "LCD",
                  path : "screen/brand/lcd"
              }
          ]
        },
        {
          name : "Kích thước",
          datas : [
              {
                  name : "Dưới 18 inch",
                  path : "screen/kichthuoc/0/18"
              },
              {
                  name : "19-22 inch",
                  path : "screen/kichthuoc/19/22"
              },
              {
                  name : "22-24 inch",
                  path : "screen/kichthuoc/22/24"
              },
              {
                  name : "24-27 inch",
                  path : "screen/kichthuoc/24/27"
              },
              {
                  name : "Trên 27 inch",
                  path : "screen/kichthuoc/27/999"
              },
          ]
        },
        {
             name : "Độ phân giải",
             datas : [
              {
                  name : "HD 720p",
                  path : "screen/dophangiai/HD"
              },
              {
                  name : "Full HD 1080p",
                  path : "screen/dophangiai/FHD"
              },
              {
                  name : "1440p",
                  path : "screen/dophangiai/QHD"
              },
              {
                  name : "UltraHD 4K",
                  path : "screen/dophangiai/UltraHD"
              },
            ]
        },
        {
            name : "Tấm nền",
            datas : [
              {
                  name : "TN",
                  path : "screen/tamnen/TN"
              },
              {
                  name : "IPS",
                  path : "screen/tamnen/IPS"
              },
              {
                  name : "VA",
                  path : "screen/tamnen/VA"
              },
              {
                  name : "PLS",
                  path : "screen/tamnen/PLS"
              },
              {
                  name : "OLED",
                  path : "screen/tamnen/OLED"
              }
            ]
        },
        {
            name : "Tần số quét",
            datas : [
              {
                name : "60Hz",
                path : "screen/tanso/60"
              },
              {
                name : "75Hz",
                path : "screen/tanso/75"
              },
              {
                name : "100Hz",
                path : "screen/tanso/100"
              },
              {
                name : "120Hz",
                path : "screen/tanso/120"
              },
              {
                name : "144Hz",
                path : "screen/tanso/140"
              },
              {
                name : "165Hz",
                path : "screen/tanso/165"
              },
              {
                name : "200Hz",
                path : "screen/tanso/200"
              },
              {
                name : "240Hz",
                path : "screen/tanso/240"
              },
              {
                name : "280Hz",
                path : "screen/tanso/280"
              }
            ]
        },
        {
            name : "Theo nhu cầu",
            datas : [
              {
                name : "Màn hình đồ họa",
                path : "screen/kieumanhinh/Màn hình đồ họa"
              },
              {
                name : "Màn hình thiết kế",
                path :  "screen/kieumanhinh/Màn hình thiết kế"
              },
              {
                name : "Màn hình cong",
                path : "screen/kieumanhinh/Màn hình cong"
              },
              {
                name : "Màn hình văn phòng",
                path : "screen/kieumanhinh/Màn hình văn phòng"
              },
              {
                name : "Màn hình Gaming",
                path : "screen/kieumanhinh/Màn hình gaming"
              }
            ]
        }
        ,{
            name : "Màn hình theo giá" ,
            datas : [
                {
                  name : "Dưới 1 triệu",
                  path : "screen/gia/0/1000000"
                },
                {
                  name : "1-3 triệu",
                  path : "screen/gia/1000000/3000000"
                },
                {
                  name : "3-5 triệu",
                  path : "screen/gia/3000000/5000000"
                },
                {
                  name : "5-10 triệu",
                  path : "screen/gia/5000000/10000000"
                },
                {
                  name : "10-20 triệu",
                  path : "screen/gia/10000000/20000000"
                },
                {
                  name : "20-40 triệu",
                  path : "screen/gia/20000000/40000000"
                },
                {
                  name : "Trên 40 triệu",
                  path : "screen/gia/40000000"
                }
            ]
        }
    ]
  },
  {
    optionName: "Bàn phím",
    path: "/keyboard",
    icon: () => {
      return <MdKeyboardAlt className="pro-list-item-icon" />;
    },
    attributes : [
      {
          name :"Kiểu kết nối",
          datas : [
            {
              name : "Bàn phím có dây",
              path : "keyboard/ketnoi/Bàn phím có dây"
            },
            {
              name : "Bàn phím Không dây",
              path : "keyboard/ketnoi/Bàn phím không dây"
            },
            {
              name : "Đa kết nối",
              path : "keyboard/ketnoi/Đa kết nối"
            }
          ]
      },
      {
          name : "Loại bàn phím",
          datas : [
            {
              name : "Bàn phím cơ",
              path : "keyboard/loai/Bàn phím cơ"
            },
            {
              name : "Bàn phím thường",
              path : "keyboard/loai/Bàn phím thường"
            },
            {
              name : "Bàn phím Gaming",
              path : "keyboard/loai/Bàn phím gaming"
            },
            {
              name : "Bàn phím văn phòng",
              path : "keyboard/loai/Bàn phím văn phòng"
            }
          ]
      },
      {
          name  : "Kiểu đèn",
          datas : [
            {
              name : "RGB",
              path : "keyboard/led/RGB"
            },
            {
              name : "Led đơn",
              path  : "keyboard/led/led đơn"
            }
          ]
      },
      {
          name :"Hãng switch",
          datas : [
            {
              name : "DareU",
              path : "keyboard/brandswitch/dareuu"
            },
            {
              name : "Royal Kludge",
              path : "keyboard/brandswitch/RK"
            },
            {
              name : "Cherry MX",
              path : "keyboard/brandswitch/cherry mx"
            },
            {
              name : "Outume",
              path : "keyboard/brandswitch/outume"
            },
            {
              name : "Gateron",
              path : "keyboard/brandswitch/gateron"
            },
            {
              name : "Huano",
              path : "keyboard/brandswitch/huano"
            },
            {
              name : "Razer",
              path : "keyboard/brandswitch/razer"
            }
          ]
      },
      {
          name : "Layout phím",
          datas : [
            {
              name : "108 phím (Cơ bản)",
              path : "keyboard/layout/108"
            },
            {
              name : "87 phím",
              path : "keyboard/layout/87"
            },
            {
              name : "61 phím",
              path : "keyboard/layout/61"
            },
            {
              name : "100 phím",
              path : "keyboard/layout/100"
            }
          ]
      },
      {
        name : "Thương hiệu",
        datas : [
          {
            name : "Dareu",
            path : "keyboard/brand/dareu"
          },
          {
            name : "Royal Kludge",
            path : "keyboard/brand/rk"
          },
          {
            name : "AKKO",
            path : "keyboard/brand/akko"
          },
          {
            name : "Logitech",
            path : "keyboard/brand/logitech"
          },
          {
            name : "HyperX",
            path : "keyboard/brand/hyperx"
          },
          {
            name : "Corsair",
            path : "keyboard/brand/corsair"
          },
          {
            name : "Cooler Master",
            path : "keyboard/brand/coolermaster"
          },
          {
            name : "Dell",
            path : "keyboard/brand/dell"
          },
          {
            name : "Rapoo",
            path : "keyboard/brand/rapoo"
          },
          {
            name : "Phillip",
            path : "keyboard/brand/philip"
          },
          {
            name : "Razer",
            path : "keyboard/brand/razer"
          }
          ,
          {
            name : "Steel Series",
            path : "keyboard/brand/steelseries"
          }
        ]
      },
    ]
  },
  {
    optionName: "Chuột",
    path: "/mouse",
    icon: () => {
      return <BsFillMouse2Fill className="pro-list-item-icon" />;
    },
    attributes : [
      {
        name : "Chuột theo thương hiệu",
        datas : [
            {
              name : "ASUS",
              path : "mouse/brand/asus"
            },
            {
              name : "Dell",
              path : "mouse/brand/dell"
            },
            {
              name : "Logitech",
              path : "mouse/brand/logitech"
            },
            {
              name : "Corsair",
              path : "mouse/brand/corsair"
            },
            {
              name : "Razer",
              path : "mouse/brand/razer"
            },
            {
              name : "Steel Series",
              path : "mouse/brand/steelseries"
            },
            {
              name : "Kingtonx HyperX",
              path : "mouse/brand/kington"
            }
        ]
      },
      {
        name : "Kiểu kết nối",
        datas : [
            {
              name : "Chuột có dây",
              path : "mouse/kieuketnoi/Chuột có dây"
            },
            {
              name : "Chuột không dây",
              path : "mouse/kieuketnoi/Chuột không dây"
            },
        ]
      },
      {
        name : "Kiểu đèn",
        datas : [
            {
              name : "RGB",
              path : "mouse/led/RGB"
            },
            {
              name : "Led đơn",
              path : "mouse/led/len đơn"
            },
            {
              name : "Xanh Lá",
              path : "mouse/led/xanh lá"
            }
        ]
      },
      {
        name : "Kết nối",
        datas : [
            {
              name : "USB 2.0",
              path : "mouse/ketnoi/USB 2.0"
            },
            {
              name : "2.4GHz Wireless",
              path : "mouse/ketnoi/2.4GHz Wireless"
            }
        ]
      },
      {
        name : "Theo nhu cầu",
        datas : [
            {
              name : "Chuột gaming",
              path : "mouse/loaichuot/Chuột gaming"
            },
            {
              name : "Chuột văn phòng",
              path : "mouse/loaichuot/Chuột văn phòng"
            },
            {
              name : "Chuột giá rẻ",
              path : "mouse/loaichuot/Chuột giá rẻ"
            }
        ]
      },
      {
        name  :  "Giá",
        datas : [
            {
              name : "Dưới 500.000đ",
              path : "mouse/gia/0/500000"
            },
            {
              name : "500.000đ - 1tr",
              path : "mouse/gia/500000/1000000"
            },
            {
              name : "1-5 tr",
              path : "mouse/gia/1000000/5000000"
            },
            {
              name : "5-10 tr",
              path : "mouse/gia/5000000/10000000"
            },
            {
              name : "Trên 10 triệu",
              path : "mouse/gia/10000000/999"
            },
        ]
      }
    ]
  },
  {
    optionName: "Tai nghe",
    path: "/headphone",
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
