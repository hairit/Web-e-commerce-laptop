USE [Store]
GO
/****** Object:  Table [dbo].[ChitietDonHang]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChitietDonHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iddonhang] [int] NULL,
	[idsanpham] [varchar](50) NULL,
	[soluong] [int] NULL,
	[tongtien] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ChitietGioHang]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChitietGioHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idgiohang] [int] NULL,
	[idsanpham] [varchar](50) NULL,
	[soluong] [int] NULL,
	[tongtien] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Color]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Color](
	[id] [varchar](20) NOT NULL,
	[name] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iduser] [int] NULL,
	[tongtien] [int] NULL,
	[ngaydat] [date] NULL,
	[ngayhuydon] [date] NULL,
	[phuongthucthanhtoan] [nvarchar](30) NULL,
	[tinhtrang] [nvarchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GioHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iduser] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Image]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nameImage] [nvarchar](100) NULL,
	[typeImage] [nvarchar](20) NULL,
	[position] [nvarchar](20) NULL,
	[path] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KeyboardDetail]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KeyboardDetail](
	[idProduct] [varchar](50) NOT NULL,
	[ketnoi] [nvarchar](50) NULL,
	[loai] [nvarchar](50) NULL,
	[den] [nvarchar](50) NULL,
	[motaden] [nvarchar](100) NULL,
	[brandswitch] [nvarchar](50) NULL,
	[typeswitch] [nvarchar](20) NULL,
	[motaswitch] [nvarchar](100) NULL,
	[layout] [int] NULL,
	[size] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LaptopDescription]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LaptopDescription](
	[idProduct] [varchar](50) NOT NULL,
	[detailcpu] [nvarchar](100) NULL,
	[detailram] [nvarchar](100) NULL,
	[detailvga] [nvarchar](100) NULL,
	[detailmanhinh] [nvarchar](100) NULL,
	[ocung] [nvarchar](100) NULL,
	[kieukhe] [nvarchar](100) NULL,
	[congxuathinh] [nvarchar](100) NULL,
	[congketnoi] [nvarchar](100) NULL,
	[ketnoikhongday] [nvarchar](100) NULL,
	[hdh] [nvarchar](100) NULL,
	[size] [nvarchar](100) NULL,
	[khoiluong] [nvarchar](100) NULL,
	[pin] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LaptopDetail]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LaptopDetail](
	[idProduct] [varchar](50) NOT NULL,
	[cpu] [nvarchar](20) NULL,
	[ram] [nvarchar](20) NULL,
	[vga] [nvarchar](20) NULL,
	[manhinh] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoaiSanPham]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LoaiSanPham](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](40) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](100) NOT NULL,
	[gia] [int] NOT NULL,
	[idloai] [varchar](50) NULL,
	[thuonghieu] [nvarchar](20) NOT NULL,
	[namsx] [int] NOT NULL,
	[baohanh] [int] NOT NULL,
	[hienthi] [int] NOT NULL,
	[nameimage] [nvarchar](100) NULL,
	[mau] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ScreenDetail]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ScreenDetail](
	[idProduct] [varchar](50) NOT NULL,
	[kichthuoc] [float] NULL,
	[dophangiai] [nvarchar](30) NULL,
	[dophangiaipixel] [nvarchar](30) NULL,
	[tamnen] [nvarchar](30) NULL,
	[tanso] [int] NULL,
	[kieumanhinh] [nvarchar](50) NULL,
	[thoigianphanhoi] [nvarchar](20) NULL,
	[dosang] [nvarchar](30) NULL,
	[gocnhin] [nvarchar](30) NULL,
	[mauhienthi] [nvarchar](30) NULL,
	[bemat] [nvarchar](50) NULL,
	[hdr] [nvarchar](40) NULL,
	[congxuat] [nvarchar](40) NULL,
	[khoiluong] [nvarchar](10) NULL,
	[tile] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 11/6/2021 3:53:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nameuser] [nvarchar](100) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[pass] [varchar](50) NOT NULL,
	[sdt] [nvarchar](11) NOT NULL,
	[diachi] [nvarchar](100) NOT NULL,
	[gioitinh] [nvarchar](10) NOT NULL,
	[position] [nvarchar](20) NULL,
	[nameimage] [nvarchar](200) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Image] ON 

INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (2, N'slideshow2.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (3, N'slideshow3.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (4, N'slideshow4.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (8, N'left-panel1.png', N'panel', N'right', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (9, N'left-panel2.png', N'panel', N'right', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (10, N'phongvupanel1.png', N'panel', N'bottom', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (11, N'phongvupanel2.png', N'panel', N'bottom', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (12, N'phongvupanel3.png', N'panel', N'bottom', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (13, N'phongvupanel4.png', N'panel', N'bottom', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (14, N'slideshow1.png', N'slide', N'center', N'/')
SET IDENTITY_INSERT [dbo].[Image] OFF
GO
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'AKKOOBlue', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB 16.5 triệu màu( 7 chế độ led)', N'DareU', N'blue', N'Dare-U Blue Switch : Clicky', 108, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'AKKOOrange', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB 16.5 triệu màu (7 chế độ led)', N'DareU', N'orange', N'Dare-U Orange Switch : Tactile', 108, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'AKKOPink', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB 16.5 triệu màu (7 chế độ led)', N'DareU', N'pink', N'Dare-U Pink Switch : Tactile', 108, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'EK880Brown', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB (10 chế độ led)', N'DareU', N'brown', N'Dare-U Brown Switch : Tactile', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'EK880Red', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB (10 chế độ led)', N'DareU', N'red', N'Dare-U Red Switch : Linear', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK61', N'Đa kết nối', N'Bàn Phím cơ', N'Đơn', N'Led đơn', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 61, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK61RGB', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 61, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK61RGBBlACK', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led 16.5 triệu màu', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 61, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK837', N'Đa kết nối', N'Bàn Phím cơ', N'Đơn', N'Led đơn', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK837RGB', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led 16.5 triệu màu', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK837RGBBlACK', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led 16.5 triệu màu', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 87, NULL)
GO
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'14-3405', N'AMD Ryzen 5 3500U ( 2.1 GHz - 3.7 GHz / 4MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'AMD Radeon Vega 8 Graphics', N'14" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 NVMe', N'1 x HDMI', N', 2 x USB 3.2 , 1 x USB 2.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.87 x 23.95 x 1.99 cm', N'1.7 kg', N'3 cell 42 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'14-5406', N'Intel Core i7-1165G7 ( 4.7 GHz / 12MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce MX330 2GB GDDR5 / Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD IPS cảm ứng , HD webcam', N'512GB SSD M.2 NVMe ', N'1 x M.2 NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.1 , 1 x SD card slot', N'WiFi 802.11ax (Wifi 6) , Bluetooth 5.1', N'Windows 10 Home SL 64-bit', N'32.43 x 22.29 x 1.894 cm', N'1.5 kg', N'3 cell 40 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'14-bf016TU', N'Intel Core i3-7100U ( 2.4 GHz / 3MB / 2 nhân, 4 luồng ) ', N'1 x 4GB DDR4 2400MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel HD Graphics 620', N'14" ( 1920 x 1080 ) Full HD không cảm ứng , HD webcam', N'1TB HDD 5400RPM', N'M.2 SATA', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 4.2', N'Free DOS', N'32.4 x 22.76 x 1.99 cm', N'1.6 kg', N'3 cell 41 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'15-7501', N'Intel Core i7-10750H ( 2.6 GHz - 5.0 GHz / 12MB / 6 nhân, 12 luồng )', N'1 x 8GB Onboard DDR4 2933MHz ( 1 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1650Ti 4GB GDDR6 / Intel UHD Graphics', N'15.6" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'1 x M.2 SATA/NVMe', N'1 x HDMI', N'2 x USB 3.1 , 1 x Thunderbolt , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'35.61 x 23.45 x 1.89 cm', N'1.8 kg', N'3 cell 56 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'15-dh0169tx', N'Intel Core i9-9880H ( 2.3 GHz - 4.8 GHz / 16MB / 8 nhân, 16 luồng )', N'2 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB ))', N'NVIDIA GeForce RTX 2080 8GB GDDR6 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 240Hz , không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe + 32GB Optane', N'M.2 SATA/NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI , 1 x mini DisplayPort', N'3 x USB 3.1 , 1 x Thunderbolt 3 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26 x 2 cm', N'2.4 kg', N'6 cell 70 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'15-dh0172tx', N'Intel Core i7 9750H ( 2.6 GHz - 4.5 GHz / 12MB / 6 nhân, 12 luồng )', N'1 x 16GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce RTX 2070 8GB GDDR6 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 240Hz , không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe / 1TB HDD 7200RPM', N'M.2 SATA/NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI , 1 x mini DisplayPort', N'3 x USB 3.1 , 1 x Thunderbolt 3 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26 x 2 cm', N'2.4 kg', N'6 cell 70 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'340s-G7', N'Intel Core i7-1065G7 ( 1.3 GHz - 3.9 GHz / 8MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel Iris Plus Graphics', N'14" ( 1920 x 1080 ) Full HD IPS không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.1 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.4 x 22.5 x 1.79 cm', N'1.4 kg', N'3 cell 41 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'430-G6', N'Intel Core i5-8265U ( 1.6 GHz - 3.9 GHz / 6MB / 4 nhân, 8 luồng ) ', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel UHD Graphics 620', N'13.3" ( 1366 x 768 ) HD không cảm ứng , HD webcam', N'256GB SSD M.2 NVMe', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Free DOS', N'30.86 x 23.09 x 1.80', N'1.4 kg', N'3 cell 45 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'5410-2-in-1', N'Intel Core i5-1155G7 ( 2.5 GHz - 4.5 GHz / 8MB / 4 nhân, 8 luồng )', N'2 x 4GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce MX350 2GB GDDR5 / Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD cảm ứng , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe ', N'1 x HDMI  ', N'1 x USB Type C / DisplayPort / Power Delivery , 2 x USB 3.2 , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.1', N'Windows 10 Home SL 64-bit', N'32.15 x 21.135 x 1.8 cm', N'1.6 kg', N'3 cell 41 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'590-N5I5517W', N'Intel Core i5 9300H ( 2.4 GHz - 4.1 GHz / 8MB / 4 nhân, 8 luồng )', N'2 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce GTX 1050 3GB GDDR5', N'15.6" ( 1920 x 1080 ) Full HD SVA không cảm ứng , Màn hình chống lóa , HD webcam', N'256GB SSD', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 1 x USB 3.1 , 2 x USB 2.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home SL 64-bit', N'36.55 x 25.4 x 2.16 cm', N'2.3 kg', N'3 cell 51 Wh')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'A315-57G-31YD', N'Intel Core i3-1005G1 ( 1.2 GHz - 3.4 GHz / 4MB / 2 nhân, 4 luồng )', N'1 x 4GB Onboard 2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 20GB )', N'NVIDIA GeForce MX330 2GB GDDR5 / Intel UHD Graphics', N'15.6" ( 1920 x 1080 ) Full HD không cảm ứng , VGA webcam', N'256GB SSD M.2 NVMe /', N'M.2 NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI', N' 2 x USB 3.1 , 1 x USB 2.0 , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home 64-bit', N'36.34 x 25.05 x 1.995 cm', N'1.9 kg', N'3 cell 36 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'AN515-54-784P', N'Intel Core i5-8300H ( 2.3 GHz - 4.0 GHz / 8MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1050Ti 4GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'128GB SSD M.2 SATA / 1TB HDD 5400RPM', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 1 x USB 3.0 , 2 x USB 2.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Linux', N'39 x 22.6 x 2.67 cm', N'2.4 kg', N'4 cell 48 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'FX516PE-HN005T', N'Intel Core i7-11370H ( 4.8 GHz / 12MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 3200MHz ( 1 Khe cắm', N'NVIDIA GeForce RTX 3050Ti 4GB GDDR6 / Intel Iris Xe Graphics', N'15.6" ( 1920 x 1080 ) Full HD IPS 144Hz , không cảm ứng , Màn hình chống lóa', N'512GB SSD M.2 NVMe ', N'1 x M.2 NVMe', N'1 x HDMI', N'1 x USB 3.1 Gen 2 Type C / DisplayPort / Thunderbolt 3 , 3 x USB 3.1 , LAN 1 Gb/s', N'WiFi 802.11ax (Wifi 6) , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36.0 x 25.2 x 1.99cm', N'2 kg', N'4 cell 76 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'GL504GM-ES312T', N'Intel Core i7-8750H ( 2.2 GHz - 4.1 GHz / 9MB / 6 nhân, 12 luồng )', N'1 x 8GB Onboard DDR4 2666MHz ( 6 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce GTX 1060 6GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'1 x M.2 SATA/NVMe', N'1 x HDMI , 1 x mini DisplayPort', N'1 x USB 3.1 Gen 2 Type C , 1 x USB 3.1 Gen 2 , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36.1 x 26.2 x 2.61 cm', N'2.4 kg', N'4 cell 66 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'GX531GM-ES004T', N'Intel Core i7-8750H ( 2.2 GHz - 4.1 GHz / 9MB / 6 nhân, 12 luồng )', N'16GB (8GB + 8GB Onboard) DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1060 6GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 144Hz , không cảm ứng , HD webcam', N'512GB SSD', N'M.2 NVMe /', N'1 x HDMI', N'1 x USB 3.1 Gen 1 Type C, 1 x USB 3.1 Gen 2 Type C / DisplayPort , 1 x USB 3.1 Gen 2 , 2 x USB 2.0', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26.8 x 1.57 cm', N'2.1 kg', N'4 cell 50 Wh, Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'S433EA-AM439T', N'Intel Core i5-1135G7 ( 4.2 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 3200MHz Không nâng cấp được )', N'Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD cảm ứng , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe ', N'1 x HDMI  ', N'2 x USB 2.0 , 1 x Thunderbolt 3 , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.15 x 21.135 x 1.8 cm', N'1.4 kg', N'3 cell 50 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'SF314-55G-76FW', N'Intel Core i7-8565U ( 1.8 GHz - 4.6 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 2666MHz Không nâng cấp được )', N'NVIDIA GeForce MX150 2GB Intel UHD Graphics 620', N'14" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'512GB SSD M.2 NVMe /', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'323 x 228 x 14.95 mm', N'1.5 kg', N'4 cell 50 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'SF315-52-52Z7', N'Intel Core i5-8250U ( 1.6 GHz - 3.4 GHz / 6MB / 4 nhân, 8 luồng )', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel UHD Graphics 620', N'15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'1TB HDD 5400RPM', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x USB 2.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home SL 64-bit', N'34 x 23 x 1.8 cm', N'1.6 kg', N'4 cell 48 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'SF514-53T-740R', N'Intel Core i7-8565U ( 1.8 GHz - 4.6 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 2400MHz Không nâng cấp được )', N'Intel UHD Graphics 620', N'14" ( 1920 x 1080 ) Full HD IPS cảm ứng , HD webcam', N'256GB SSD M.2 NVMe /', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.0', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'329.0 x 228.0 x 14.9 mm', N'1 kg', N'2 cell 36 Wh , Pin liền')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'UX481FL-BM048T', N'Intel Core i5-10210U ( 1.6 GHz - 4.2 GHz / 6MB / 4 nhân, 8 luồng )', N'8GB DDR4 2666MHz ', N'NVIDIA GeForce MX250 2GB GDDR5 / Intel UHD Graphics', N'14" ( 1920 x 1080 ) Full HD HD không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.1 , 1 x micro SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.87 x 23.95 x 1.99 cm', N'1.6 kg', N'4 cell 70 Wh , Pin liền')
GO
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-3405', N'ryze?n', N'8', N'', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-5406', N'corei7', N'8', N'NVIDIA', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-bf016TU', N'corei3', N'4', N'', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-7501', N'corei7', N'8', N'NVIDIA', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-dh0169tx', N'corei9', N'16', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-dh0172tx', N'corei7', N'16', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'340s-G7', N'corei7', N'8', N'', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'430-G6', N'corei5', N'4', N'', N'13.3')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'5410-2-in-1', N'corei5', N'8', N'NVIDIA', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'590-N5I5517W', N'corei5', N'8', N'NVIDIA', N'15')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'A315-57G-31YD', N'corei3', N'4', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'AN515-54-784P', N'corei5', N'8', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'FX516PE-HN005T', N'corei7', N'8', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'GL504GM-ES312T', N'corei7', N'8', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'GX531GM-ES004T', N'corei7', N'16', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'S433EA-AM439T', N'corei5', N'8', N'', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF314-55G-76FW', N'corei7', N'8', N'', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF315-52-52Z7', N'corei5', N'4', N'', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF514-53T-740R', N'corei7', N'8', N'', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'UX481FL-BM048T', N'corei5', N'8', N'', N'14')
GO
INSERT [dbo].[LoaiSanPham] ([id], [ten]) VALUES (N'keyboard', N'Bàn phím')
INSERT [dbo].[LoaiSanPham] ([id], [ten]) VALUES (N'laptop', N'Laptop (Máy tính xách tay)')
INSERT [dbo].[LoaiSanPham] ([id], [ten]) VALUES (N'screen', N'Màn hình máy tính')
GO
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'14-3405', N'Laptop Dell Vostro ( AMD Ryzen 5 3500U | 8GB | AMD Radeon Vega 8 Graphics | 14")', 18090000, N'laptop', N'Dell', 2020, 1, 1, N'14-3405.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'14-5406', N'Laptop Dell Inspiron ( Core i7-1165G7 | 8GB | NVIDIA GeForce MX330 2GB GDDR5 | 14")', 26690000, N'laptop', N'Dell', 2021, 1, 0, N'14-5406.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'14-bf016TU', N'Laptop HP Pavilion (Core i3-7100U | 4GB | Intel HD Graphics 620 |14")', 11490000, N'laptop', N'HP', 2019, 1, 1, N'14-bf016TU.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'15-7501', N'Laptop Dell Inspiron ( Core i7-10750H | 8GB | NVIDIA GeForce GTX 1650Ti 4GB GDDR6 | 15.6")', 31090000, N'laptop', N'Dell', 2020, 1, 1, N'15-7501.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'15-dh0169tx', N'Laptop HP OMEN ( Core i9-9880H | 16GB | NVIDIA GeForce RTX 2080 8GB GDDR6 | 15.6 ")', 76990000, N'laptop', N'HP', 2021, 2, 0, N'15-dh0169tx.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'15-dh0172tx', N'Laptop HP OMEN ( Core i7 9750H | 16GB | NVIDIA GeForce RTX 2070 8GB GDDR6 | 15.6")', 44490000, N'laptop', N'HP', 2021, 2, 0, N'15-dh0172tx.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'27MK600M-B', N'Màn hình LCD LG 27'''' 27MK600M-B(1920 x 1080/IPS/5ms)', 5090000, N'screen', N'LG', 2021, 24, 1, N'27MK600M-B.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'340s-G7', N'Laptop HP ( Core i7-1065G7 | 8GB | Intel Iris Plus Graphics | 14" )', 21690000, N'laptop', N'HP', 2020, 2, 1, N'340s-G7.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'430-G6', N'Laptop HP ProBook ( Core i5-8265U | 4GB | Intel UHD Graphics 620 | 13.3")', 16190000, N'laptop', N'HP', 2020, 2, 0, N'430-G6.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'5410-2-in-1', N'Laptop Dell Inspiron ( Core i5-1155G7 | 8GB | NVIDIA GeForce MX350 2GB GDDR5 | 14")', 27290000, N'laptop', N'Dell', 2021, 1, 1, N'5410-2-in-1.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'590-N5I5517W', N'Laptop Dell G3 ( Core i5 9300H | 8GB | NVIDIA GeForce GTX 1050 3GB GDDR5 | 15.6")', 20590000, N'laptop', N'Dell', 2019, 1, 0, N'590-N5I5517W.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'A315-57G-31YD', N'Laptop Acer Aspire ( Core i3-1005G1 | 4GB | NVIDIA GeForce MX330 2GB GDDR5 | 15.6") ', 13990000, N'laptop', N'Acer', 2021, 2, 0, N'A315-57G-31YD.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'AKKOOBlue', N'Bàn phím cơ AKKO 3108 Dragon Ball Z - Goku Blue Switch', 2250000, N'keyboard', N'AKKO', 2020, 24, 1, N'AKKOBlue.png', N'Cam')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'AKKOOrange', N'Bàn phím cơ AKKO 3108 Dragon Ball Z - Goku Orange Switch', 2250000, N'keyboard', N'AKKO', 2020, 24, 1, N'AKKOOrange.png', N'Cam')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'AKKOPink', N'Bàn phím cơ AKKO 3108 Dragon Ball Z - Goku Pink Switch', 2250000, N'keyboard', N'AKKO', 2020, 24, 1, N'AKKOPink.png', N'Cam')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'AN515-54-784P', N'Laptop Acer Nitro 5 ( Core i5-8300H | 8GB | NVIDIA GeForce GTX 1050Ti 4GB GDDR5 | 15.6")', 28990000, N'laptop', N'Acer', 2019, 2, 1, N'AN515-54-784P.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'E1916HV', N'Màn Hình Dell 18.5 inch E1916HV (1366x768/TN/60Hz/5ms)', 4440000, N'screen', N'DELL', 2019, 36, 1, N'E1916HV.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'E2016HV', N'Màn Hình Dell 19.5 inch E2016HV (1600x900/5ms)', 3440000, N'screen', N'DELL', 2020, 36, 1, N'E2016HV.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'EK241Y', N'Màn hình LCD ACER EK241Y (1920 x 1080/75Hz/4 ms)', 3890000, N'screen', N'ACER', 2021, 24, 1, N'EK241Y.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'EK880Brown', N'Bàn phím cơ Dareu EK880 Brown Switch', 1550000, N'keyboard', N'DareU', 2021, 24, 1, N'EK880Brown.png', N'Đen')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'EK880Red', N'Bàn phím cơ Dareu EK880 Red Switch', 1550000, N'keyboard', N'DareU', 2021, 24, 1, N'EK880Red.png', N'Đen')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'FX516PE-HN005T', N'Laptop ASUS TUF Dash ( Core i7-11370H | 8GB | NVIDIA GeForce RTX 3050Ti 4GB GDDR6 | 15.6")', 29790000, N'laptop', N'ASUS', 2021, 1, 0, N'FX516PE-HN005T.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'GL504GM-ES312T', N'Laptop ASUS ROG Strix SCAR II ( Core i7-8750H | 8GB | NVIDIA GeForce GTX 1060 6GB GDDR5 | 15.6)', 39990000, N'laptop', N'ASUS', 2020, 1, 1, N'GL504GM-ES312T.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'GX531GM-ES004T', N'Laptop ASUS ROG Zephyrus S ( Core i7-8750H | 8GB | NVIDIA GeForce GTX 1060 6GB GDDR5 | 15.6")', 59900000, N'laptop', N'ASUS', 2019, 1, 0, N'GX531GM-ES004T.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'HA270', N'Màn hình LCD HKC HA270 (1920 x 1080/IPS/75Hz/12 ms)', 3999000, N'screen', N'LCD', 2021, 24, 1, N'HA270.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'K202HQL', N'Màn Hình Acer 19.5 inch K202HQL (1600x900/TN/60Hz/5ms)', 18090000, N'screen', N'ACER', 2020, 1, 1, N'K202HQL.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'LC27R500FHEXXV', N'Màn hình Samsung 27 inch LC27R500FHEXXV (1920x1080/VA/60Hz/4ms)', 4990000, N'screen', N'LG', 2021, 24, 1, N'LC27R500FHEXXV.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'P2219H', N'Màn Hình Dell 21.5 inch P2219H LED IPS (1920x1080/IPS/60Hz/5ms)', 4790000, N'screen', N'DELL', 2021, 36, 1, N'P2219H.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'RK61', N'Bàn phím cơ Royal-Kludge RK61 (HotSwap)(Trắng)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK61.png', N'Trắng')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'RK61RGB', N'Bàn phím cơ Royal-Kludge RK61 (HotSwap)(Trắng)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK61RGB.png', N'Trắng')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'RK61RGBBlACK', N'Bàn phím cơ Royal-Kludge RK61 (HotSwap)(Đen)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK61RGBBLACK.png', N'Đen')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'RK837', N'Bàn phím cơ Royal-Kludge RK837 (HotSwap)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK837.png', N'Trắng')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'RK837RGB', N'Bàn phím cơ Royal-Kludge RK837 (HotSwap)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK837RGB.png', N'Trắng')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'RK837RGBBlACK', N'Bàn phím cơ Royal-Kludge RK837 (HotSwap)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK837RGBBLACK.png', N'Đen')
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'S433EA-AM439T', N'Laptop ASUS Vivobook ( Core i5-1135G7 | 8GB | Intel Iris Xe Graphics | 14")', 19790000, N'laptop', N'ASUS', 2021, 1, 1, N'S433EA-AM439T.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'SF314-55G-76FW', N'Laptop Acer Swift 3 ( Core i7-8565U | 8GB | NVIDIA GeForce MX150 2GB | 14")', 33999000, N'laptop', N'Acer', 2021, 2, 0, N'SF314-55G-76FW.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'SF315-52-52Z7', N'Laptop Acer Swift 3 ( Core i5-8250U | 4GB | Intel UHD Graphics 620 | 15.6") ', 15999000, N'laptop', N'Acer', 2020, 2, 0, N'SF315-52-52Z7.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'SF514-53T-740R', N'Laptop Acer Swift 5 ( Core i7-8565U | 8GB | Intel UHD Graphics 620 | 14")', 27990000, N'laptop', N'Acer', 2019, 2, 1, N'SF514-53T-740R.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'UX481FL-BM048T', N'Laptop ASUS ZenBook Duo ( Core i5-10210U | 8GB | NVIDIA GeForce MX250 2GB GDDR5 | 14")', 30990000, N'laptop', N'ASUS', 2020, 1, 1, N'UX481FL-BM048T.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'VG240Y', N'Màn Hình Acer Nitro 23.8 inch VG240Y (1920x1080/IPS/75Hz/1ms/FreeSync)', 4390000, N'screen', N'ACER', 2021, 36, 1, N'VG240Y.png', NULL)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau]) VALUES (N'VY249HE', N'Màn hình LCD ASUS VY249HE (1920 x 1080/IPS/75Hz/1 ms/FreeSync)', 3490000, N'screen', N'ASUS', 2020, 1, 1, N'VY249HE.png', NULL)
GO
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'27MK600M-B', 27, N'FHD', N'1920 x 1080', N'IPS', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'90 (H) / 50 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x HDMI , 1 x VGA/D-sub', N'4.8 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'E1916HV', 18.5, N'FHD', N'1366 x 768', N'LED', 60, N'Màn hình phẳng', N'5ms', N'250 cd/m2', N'90 (H) / 65 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x VGA/D-sub', N'3 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'E2016HV', 19.5, N'FHD', N'1600 x 900', N'TN LED', 75, N'Màn hình phẳng', N'5ms', N'250 cd/m2', N'170 (H) / 160 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x VGA/D-sub', N'3.02 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'EK241Y', 23.8, N'FHD', N'1920 x 1080', N'LED', 75, N'Màn hình phẳng', N'4ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x HDMI , 1 x VGA/D-sub', N'4,3 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'HA270', 27, N'FHD', N'1920 x 1080', N'IPS', 75, N'Màn hình phẳng', N'4ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', N'Màn hình gương', NULL, N'1 x HDMI , 1 x VGA/D-sub', N'5.59 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'K202HQL', 19.5, N'FHD', N'1600 x 900', N'TN', 60, N'Màn hình phẳng', N'5ms', N'200 cd/m2', N'90 (H) / 65 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x VGA/D-sub', N'2.7 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'LC27R500FHEXXV', 27, N'UltraHD', N'1920 x 1080', N'IPS', 60, N'Màn hình phẳng', N'4ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x HDMI , 1 x VGA/D-sub', N'4,3kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'P2219H', 21.5, N'FHD', N'1920 x 1080', N'IPS', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'90 (H) / 50 (V)', N'16.7 triệu màu', N'Màn hình gương', NULL, N'1 x HDMI , 1 x VGA/D-sub', N'2.2 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'VG240Y', 23.8, N'UltraHD', N'1920 x 1080', N'IPS', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x HDMI , 1 x VGA/D-sub', N'2.0 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'VY249HE', 23.8, N'FHD', N'1920 x 1080', N'IPS LED', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x HDMI 1.4 , 1 x VGA/D-sub', N'3.38 kg', N'16:9')
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (4, N'Tường Hải', N'tuonghai.admin@gmail.com', N'tuonghai2021', N'0777741340', N'20/1H', N'Nam', N'admin', N'tuonghaiavatar.jpg')
INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (5, N'Quốc Đạt', N'quocdat.staff@gmail.com', N'quocdat2021', N'0392392071', N'201/1 An Duong Vuong', N'Nữ', N'staff', N'quocdatavatar.jpg')
INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (6, N'Chí Định', N'chidinh.customer@gmail.com', N'chidinh2021', N'0239812931', N'201/1 quận 4', N'Nữ', N'customer', N'chidinhavatar.jpg')
INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (7, N'Thanh Hòa', N'lth.staff@gmail.com', N'lth2021', N'0392392071', N'201/1 An Duong Vuong', N'Nam', N'admin', N'lthavatar.jpg')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (NULL) FOR [ngayhuydon]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (N'Thanh toán khi nhận hàng') FOR [phuongthucthanhtoan]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (N'Chờ xác nhận') FOR [tinhtrang]
GO
ALTER TABLE [dbo].[Product] ADD  DEFAULT ((1)) FOR [hienthi]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ('CUSTOMER') FOR [position]
GO
ALTER TABLE [dbo].[ChitietDonHang]  WITH CHECK ADD FOREIGN KEY([iddonhang])
REFERENCES [dbo].[DonHang] ([id])
GO
ALTER TABLE [dbo].[ChitietDonHang]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[ChitietGioHang]  WITH CHECK ADD FOREIGN KEY([idgiohang])
REFERENCES [dbo].[GioHang] ([id])
GO
ALTER TABLE [dbo].[ChitietGioHang]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[KeyboardDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[LaptopDescription]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[LaptopDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD FOREIGN KEY([idloai])
REFERENCES [dbo].[LoaiSanPham] ([id])
GO
ALTER TABLE [dbo].[ScreenDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
