USE [Laptop]
GO
/****** Object:  Table [dbo].[ChitietDonHang]    Script Date: 10/28/2021 6:29:05 PM ******/
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
/****** Object:  Table [dbo].[ChitietGioHang]    Script Date: 10/28/2021 6:29:05 PM ******/
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
/****** Object:  Table [dbo].[DetailKeyBoard]    Script Date: 10/28/2021 6:29:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DetailKeyBoard](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[idsanpham] [varchar](50) NULL,
	[ketnoi] [nvarchar](20) NULL,
	[loai] [nvarchar](20) NULL,
	[den] [nvarchar](20) NULL,
	[switch] [nvarchar](20) NULL,
	[phimchucnang] [nvarchar](20) NULL,
	[size] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DonHang]    Script Date: 10/28/2021 6:29:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DonHang](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[iduser] [int] NULL,
	[tongtien] [int] NULL,
	[ngaydat] [date] NULL,
	[ngaytra] [date] NULL,
	[phuongthucthanhtoan] [nvarchar](30) NULL,
	[tinhtrang] [nvarchar](30) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GioHang]    Script Date: 10/28/2021 6:29:05 PM ******/
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
/****** Object:  Table [dbo].[Image]    Script Date: 10/28/2021 6:29:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nameImage] [nvarchar](100) NULL,
	[typeImage] [nvarchar](20) NULL,
	[position] [nvarchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LoaiSanPham]    Script Date: 10/28/2021 6:29:05 PM ******/
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
/****** Object:  Table [dbo].[MoTaLaptop]    Script Date: 10/28/2021 6:29:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MoTaLaptop](
	[idsanpham] [varchar](50) NOT NULL,
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
	[idsanpham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SanPham]    Script Date: 10/28/2021 6:29:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SanPham](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](100) NOT NULL,
	[gia] [int] NOT NULL,
	[idloai] [varchar](50) NULL,
	[thuonghieu] [nvarchar](20) NOT NULL,
	[namsx] [int] NOT NULL,
	[baohanh] [int] NOT NULL,
	[hienthi] [int] NOT NULL,
	[nameimage] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ThongSoLaptop]    Script Date: 10/28/2021 6:29:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThongSoLaptop](
	[idsanpham] [varchar](50) NOT NULL,
	[cpu] [nvarchar](20) NULL,
	[ram] [nvarchar](20) NULL,
	[vga] [nvarchar](20) NULL,
	[manhinh] [nvarchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[idsanpham] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 10/28/2021 6:29:05 PM ******/
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

INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (1, N'slideshow1.jpg', N'slide', N'center')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (2, N'slideshow1.jpg', N'slide', N'center')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (3, N'slideshow1.jpg', N'slide', N'center')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (4, N'slideshow2.jpg', N'slide', N'center')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (5, N'panel1', N'panel', N'bottom')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (6, N'panel2', N'panel', N'bottom')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (7, N'panel3', N'panel', N'bottom')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (8, N'left-panel1', N'panel', N'left')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position]) VALUES (9, N'left-panel2', N'panel', N'left')
SET IDENTITY_INSERT [dbo].[Image] OFF
GO
INSERT [dbo].[LoaiSanPham] ([id], [ten]) VALUES (N'laptop', N'Laptop (Máy tính xách tay)')
GO
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'14-3405', N'AMD Ryzen 5 3500U ( 2.1 GHz - 3.7 GHz / 4MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'AMD Radeon Vega 8 Graphics', N'14" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 NVMe', N'1 x HDMI', N', 2 x USB 3.2 , 1 x USB 2.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.87 x 23.95 x 1.99 cm', N'1.7 kg', N'3 cell 42 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'14-5406', N'Intel Core i7-1165G7 ( 4.7 GHz / 12MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce MX330 2GB GDDR5 / Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD IPS cảm ứng , HD webcam', N'512GB SSD M.2 NVMe ', N'1 x M.2 NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.1 , 1 x SD card slot', N'WiFi 802.11ax (Wifi 6) , Bluetooth 5.1', N'Windows 10 Home SL 64-bit', N'32.43 x 22.29 x 1.894 cm', N'1.5 kg', N'3 cell 40 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'14-bf016TU', N'Intel Core i3-7100U ( 2.4 GHz / 3MB / 2 nhân, 4 luồng ) ', N'1 x 4GB DDR4 2400MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel HD Graphics 620', N'14" ( 1920 x 1080 ) Full HD không cảm ứng , HD webcam', N'1TB HDD 5400RPM', N'M.2 SATA', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 4.2', N'Free DOS', N'32.4 x 22.76 x 1.99 cm', N'1.6 kg', N'3 cell 41 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'15-7501', N'Intel Core i7-10750H ( 2.6 GHz - 5.0 GHz / 12MB / 6 nhân, 12 luồng )', N'1 x 8GB Onboard DDR4 2933MHz ( 1 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1650Ti 4GB GDDR6 / Intel UHD Graphics', N'15.6" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'1 x M.2 SATA/NVMe', N'1 x HDMI', N'2 x USB 3.1 , 1 x Thunderbolt , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'35.61 x 23.45 x 1.89 cm', N'1.8 kg', N'3 cell 56 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'15-dh0169tx', N'Intel Core i9-9880H ( 2.3 GHz - 4.8 GHz / 16MB / 8 nhân, 16 luồng )', N'2 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB ))', N'NVIDIA GeForce RTX 2080 8GB GDDR6 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 240Hz , không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe + 32GB Optane', N'M.2 SATA/NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI , 1 x mini DisplayPort', N'3 x USB 3.1 , 1 x Thunderbolt 3 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26 x 2 cm', N'2.4 kg', N'6 cell 70 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'15-dh0172tx', N'Intel Core i7 9750H ( 2.6 GHz - 4.5 GHz / 12MB / 6 nhân, 12 luồng )', N'1 x 16GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce RTX 2070 8GB GDDR6 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 240Hz , không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe / 1TB HDD 7200RPM', N'M.2 SATA/NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI , 1 x mini DisplayPort', N'3 x USB 3.1 , 1 x Thunderbolt 3 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26 x 2 cm', N'2.4 kg', N'6 cell 70 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'340s-G7', N'Intel Core i7-1065G7 ( 1.3 GHz - 3.9 GHz / 8MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel Iris Plus Graphics', N'14" ( 1920 x 1080 ) Full HD IPS không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.1 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.4 x 22.5 x 1.79 cm', N'1.4 kg', N'3 cell 41 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'430-G6', N'Intel Core i5-8265U ( 1.6 GHz - 3.9 GHz / 6MB / 4 nhân, 8 luồng ) ', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel UHD Graphics 620', N'13.3" ( 1366 x 768 ) HD không cảm ứng , HD webcam', N'256GB SSD M.2 NVMe', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Free DOS', N'30.86 x 23.09 x 1.80', N'1.4 kg', N'3 cell 45 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'5410-2-in-1', N'Intel Core i5-1155G7 ( 2.5 GHz - 4.5 GHz / 8MB / 4 nhân, 8 luồng )', N'2 x 4GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce MX350 2GB GDDR5 / Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD cảm ứng , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe ', N'1 x HDMI  ', N'1 x USB Type C / DisplayPort / Power Delivery , 2 x USB 3.2 , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.1', N'Windows 10 Home SL 64-bit', N'32.15 x 21.135 x 1.8 cm', N'1.6 kg', N'3 cell 41 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'590-N5I5517W', N'Intel Core i5 9300H ( 2.4 GHz - 4.1 GHz / 8MB / 4 nhân, 8 luồng )', N'2 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce GTX 1050 3GB GDDR5', N'14"15.6" ( 1920 x 1080 ) Full HD SVA không cảm ứng , Màn hình chống lóa , HD webcam', N'256GB SSD', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 1 x USB 3.1 , 2 x USB 2.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home SL 64-bit', N'36.55 x 25.4 x 2.16 cm', N'2.3 kg', N'3 cell 51 Wh')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'A315-57G-31YD', N'Intel Core i3-1005G1 ( 1.2 GHz - 3.4 GHz / 4MB / 2 nhân, 4 luồng )', N'1 x 4GB Onboard 2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 20GB )', N'NVIDIA GeForce MX330 2GB GDDR5 / Intel UHD Graphics', N'15.6" ( 1920 x 1080 ) Full HD không cảm ứng , VGA webcam', N'256GB SSD M.2 NVMe /', N'M.2 NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI', N' 2 x USB 3.1 , 1 x USB 2.0 , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home 64-bit', N'36.34 x 25.05 x 1.995 cm', N'1.9 kg', N'3 cell 36 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'AN515-54-784P', N'Intel Core i5-8300H ( 2.3 GHz - 4.0 GHz / 8MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1050Ti 4GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'128GB SSD M.2 SATA / 1TB HDD 5400RPM', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 1 x USB 3.0 , 2 x USB 2.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Linux', N'39 x 22.6 x 2.67 cm', N'2.4 kg', N'4 cell 48 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'FX516PE-HN005T', N'Intel Core i7-11370H ( 4.8 GHz / 12MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 3200MHz ( 1 Khe cắm', N'NVIDIA GeForce RTX 3050Ti 4GB GDDR6 / Intel Iris Xe Graphics', N'15.6" ( 1920 x 1080 ) Full HD IPS 144Hz , không cảm ứng , Màn hình chống lóa', N'512GB SSD M.2 NVMe ', N'1 x M.2 NVMe', N'1 x HDMI', N'1 x USB 3.1 Gen 2 Type C / DisplayPort / Thunderbolt 3 , 3 x USB 3.1 , LAN 1 Gb/s', N'WiFi 802.11ax (Wifi 6) , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36.0 x 25.2 x 1.99cm', N'2 kg', N'4 cell 76 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'GL504GM-ES312T', N'Intel Core i7-8750H ( 2.2 GHz - 4.1 GHz / 9MB / 6 nhân, 12 luồng )', N'1 x 8GB Onboard DDR4 2666MHz ( 6 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce GTX 1060 6GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'1 x M.2 SATA/NVMe', N'1 x HDMI , 1 x mini DisplayPort', N'1 x USB 3.1 Gen 2 Type C , 1 x USB 3.1 Gen 2 , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36.1 x 26.2 x 2.61 cm', N'2.4 kg', N'4 cell 66 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'GX531GM-ES004T', N'Intel Core i7-8750H ( 2.2 GHz - 4.1 GHz / 9MB / 6 nhân, 12 luồng )', N'16GB (8GB + 8GB Onboard) DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1060 6GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 144Hz , không cảm ứng , HD webcam', N'512GB SSD', N'M.2 NVMe /', N'1 x HDMI', N'1 x USB 3.1 Gen 1 Type C, 1 x USB 3.1 Gen 2 Type C / DisplayPort , 1 x USB 3.1 Gen 2 , 2 x USB 2.0', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26.8 x 1.57 cm', N'2.1 kg', N'4 cell 50 Wh, Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'S433EA-AM439T', N'Intel Core i5-1135G7 ( 4.2 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 3200MHz Không nâng cấp được )', N'Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD cảm ứng , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe ', N'1 x HDMI  ', N'2 x USB 2.0 , 1 x Thunderbolt 3 , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.15 x 21.135 x 1.8 cm', N'1.4 kg', N'3 cell 50 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'SF314-55G-76FW', N'Intel Core i7-8565U ( 1.8 GHz - 4.6 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 2666MHz Không nâng cấp được )', N'NVIDIA GeForce MX150 2GB Intel UHD Graphics 620', N'14" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'512GB SSD M.2 NVMe /', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'323 x 228 x 14.95 mm', N'1.5 kg', N'4 cell 50 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'SF315-52-52Z7', N'Intel Core i5-8250U ( 1.6 GHz - 3.4 GHz / 6MB / 4 nhân, 8 luồng )', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel UHD Graphics 620', N'15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'1TB HDD 5400RPM', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x USB 2.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home SL 64-bit', N'34 x 23 x 1.8 cm', N'1.6 kg', N'4 cell 48 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'SF514-53T-740R', N'Intel Core i7-8565U ( 1.8 GHz - 4.6 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 2400MHz Không nâng cấp được )', N'Intel UHD Graphics 620', N'14" ( 1920 x 1080 ) Full HD IPS cảm ứng , HD webcam', N'256GB SSD M.2 NVMe /', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.0', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'329.0 x 228.0 x 14.9 mm', N'1 kg', N'2 cell 36 Wh , Pin liền')
INSERT [dbo].[MoTaLaptop] ([idsanpham], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin]) VALUES (N'UX481FL-BM048T', N'Intel Core i5-10210U ( 1.6 GHz - 4.2 GHz / 6MB / 4 nhân, 8 luồng )', N'8GB DDR4 2666MHz ', N'NVIDIA GeForce MX250 2GB GDDR5 / Intel UHD Graphics', N'14" ( 1920 x 1080 ) Full HD HD không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.1 , 1 x micro SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.87 x 23.95 x 1.99 cm', N'1.6 kg', N'4 cell 70 Wh , Pin liền')
GO
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'14-3405', N'Laptop Dell Vostro', 18090000, N'laptop', N'Dell', 2020, 1, 1, N'14-3405')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'14-5406', N'Laptop Dell Inspiron', 26690000, N'laptop', N'Dell', 2021, 1, 1, N'14-5406')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'14-bf016TU', N'Laptop HP Pavilion', 11490000, N'laptop', N'HP', 2019, 1, 1, N'14-bf016TU')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'15-7501', N'Laptop Dell Inspiron', 31090000, N'laptop', N'Dell', 2020, 1, 1, N'15-7501')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'15-dh0169tx', N'Laptop HP OMEN', 76990000, N'laptop', N'HP', 2021, 2, 1, N'15-dh0172tx')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'15-dh0172tx', N'Laptop HP OMEN', 44490000, N'laptop', N'HP', 2021, 2, 1, N'15-dh0172tx')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'340s-G7', N'Laptop HP', 21690000, N'laptop', N'HP', 2020, 2, 1, N'340s-G7')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'430-G6', N'Laptop HP ProBook', 16190000, N'laptop', N'HP', 2020, 2, 1, N'430-G6')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'5410-2-in-1', N'Laptop Dell Inspiron', 27290000, N'laptop', N'Dell', 2021, 1, 1, N'5410-2-in-1')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'590-N5I5517W', N'Laptop Dell G3', 20590000, N'laptop', N'Dell', 2019, 1, 1, N'590-N5I5517W')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'A315-57G-31YD', N'Laptop Acer Aspire', 13990000, N'laptop', N'Acer', 2021, 2, 1, N'A315-57G-31YD')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'AN515-54-784P', N'Laptop Acer Nitro 5', 28990000, N'laptop', N'Acer', 2019, 2, 1, N'AN515-54-784P')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'FX516PE-HN005T', N'Laptop ASUS TUF Dash', 29790000, N'laptop', N'ASUS', 2021, 1, 1, N'FX516PE-HN005T')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'GL504GM-ES312T', N'Laptop ASUS ROG Strix SCAR II', 39990000, N'laptop', N'ASUS', 2020, 1, 1, N'GL504GM-ES312T ')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'GX531GM-ES004T', N'Laptop ASUS ROG Zephyrus S', 549900000, N'laptop', N'ASUS', 2019, 1, 1, N'GX531GM-ES004T')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'S433EA-AM439T', N'Laptop ASUS Vivobook', 19790000, N'laptop', N'ASUS', 2021, 1, 1, N'S433EA-AM439T')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'SF314-55G-76FW', N'Laptop Acer Swift 3', 33999000, N'laptop', N'Acer', 2021, 2, 1, N'SF314-55G-76FW')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'SF315-52-52Z7', N'Laptop Acer Swift 3', 15999000, N'laptop', N'Acer', 2020, 2, 1, N'SF315-52-52Z7')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'SF514-53T-740R', N'Laptop Acer Swift 5', 27990000, N'laptop', N'Acer', 2019, 2, 1, N'SF514-53T-740R')
INSERT [dbo].[SanPham] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage]) VALUES (N'UX481FL-BM048T', N'Laptop ASUS ZenBook Duo', 30990000, N'laptop', N'ASUS', 2020, 1, 1, N'UX481FL-BM048T')
GO
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-3405', N'ryze?n', N'8', N'', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-5406', N'corei7', N'8', N'NVIDIA', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-bf016TU', N'corei3', N'4', N'', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-7501', N'corei7', N'8', N'NVIDIA', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-dh0169tx', N'corei9', N'16', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-dh0172tx', N'corei7', N'16', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'340s-G7', N'corei7', N'8', N'', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'430-G6', N'corei5', N'4', N'', N'13.3')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'5410-2-in-1', N'corei5', N'8', N'NVIDIA', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'590-N5I5517W', N'corei5', N'8', N'NVIDIA', N'15')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'A315-57G-31YD', N'corei3', N'4', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'AN515-54-784P', N'corei5', N'8', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'FX516PE-HN005T', N'corei7', N'8', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'GL504GM-ES312T', N'corei7', N'8', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'GX531GM-ES004T', N'corei7', N'16', N'nvidia', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'S433EA-AM439T', N'corei5', N'8', N'', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF314-55G-76FW', N'corei7', N'8', N'', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF315-52-52Z7', N'corei5', N'4', N'', N'15.6')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF514-53T-740R', N'corei7', N'8', N'', N'14')
INSERT [dbo].[ThongSoLaptop] ([idsanpham], [cpu], [ram], [vga], [manhinh]) VALUES (N'UX481FL-BM048T', N'corei5', N'8', N'', N'14')
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (4, N'Tường Hải', N'tuonghai.admin@gmail.com', N'tuonghai2021', N'0777741340', N'20/1H', N'Nam', N'admin', N'tuonghaiavatar.jpg')
INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (5, N'Quốc Đạt', N'quocdat.staff@gmail.com', N'quocdat2021', N'0392392071', N'201/1 An Duong Vuong', N'Nữ', N'staff', N'quocdatavatar.jpg')
INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (6, N'Chí Định', N'chidinh.customer@gmail.com', N'chidinh2021', N'0239812931', N'201/1 quận 4', N'Nữ', N'customer', N'chidinhavatar.jpg')
INSERT [dbo].[Users] ([id], [nameuser], [email], [pass], [sdt], [diachi], [gioitinh], [position], [nameimage]) VALUES (7, N'Thanh Hòa', N'lth.staff@gmail.com', N'lth2021', N'0392392071', N'201/1 An Duong Vuong', N'Nam', N'admin', N'lthavatar.jpg')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (NULL) FOR [ngaytra]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (N'Thanh toán khi nhận hàng') FOR [phuongthucthanhtoan]
GO
ALTER TABLE [dbo].[DonHang] ADD  DEFAULT (N'Chờ xác nhận') FOR [tinhtrang]
GO
ALTER TABLE [dbo].[SanPham] ADD  DEFAULT ((1)) FOR [hienthi]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ('CUSTOMER') FOR [position]
GO
ALTER TABLE [dbo].[ChitietDonHang]  WITH CHECK ADD FOREIGN KEY([iddonhang])
REFERENCES [dbo].[DonHang] ([id])
GO
ALTER TABLE [dbo].[ChitietDonHang]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[ChitietGioHang]  WITH CHECK ADD FOREIGN KEY([idgiohang])
REFERENCES [dbo].[GioHang] ([id])
GO
ALTER TABLE [dbo].[ChitietGioHang]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[DetailKeyBoard]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[DonHang]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[GioHang]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[MoTaLaptop]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
ALTER TABLE [dbo].[SanPham]  WITH CHECK ADD FOREIGN KEY([idloai])
REFERENCES [dbo].[LoaiSanPham] ([id])
GO
ALTER TABLE [dbo].[ThongSoLaptop]  WITH CHECK ADD FOREIGN KEY([idsanpham])
REFERENCES [dbo].[SanPham] ([id])
GO
