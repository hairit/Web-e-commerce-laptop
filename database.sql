USE [Store]
GO
/****** Object:  Table [dbo].[Bill]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bill](
	[id] [varchar](50) NOT NULL,
	[iduser] [int] NOT NULL,
	[tongtien] [int] NOT NULL,
	[ngaydat] [date] NOT NULL,
	[phuongthucthanhtoan] [nvarchar](30) NOT NULL,
	[tinhtrang] [nvarchar](30) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BillDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillDetail](
	[idBill] [varchar](50) NOT NULL,
	[idProduct] [varchar](50) NOT NULL,
	[soluong] [int] NOT NULL,
	[tongtien] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idBill] ASC,
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartDetail](
	[idUser] [int] NOT NULL,
	[idProduct] [varchar](50) NOT NULL,
	[soluong] [int] NOT NULL,
	[tongtien] [int] NOT NULL,
	[selected] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idUser] ASC,
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Color]    Script Date: 12/1/2021 10:15:48 PM ******/
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
/****** Object:  Table [dbo].[HeadphoneDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HeadphoneDetail](
	[idProduct] [varchar](50) NOT NULL,
	[kieutainghe] [nvarchar](50) NULL,
	[ketnoi] [nvarchar](50) NULL,
	[kieuketnoi] [nvarchar](100) NULL,
	[microphone] [nvarchar](30) NULL,
	[kieupin] [nvarchar](50) NULL,
	[kichthuocdriver] [nvarchar](30) NULL,
	[led] [nvarchar](30) NULL,
	[khoiluong] [nvarchar](40) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Image]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Image](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nameImage] [nvarchar](100) NOT NULL,
	[typeImage] [nvarchar](20) NULL,
	[position] [nvarchar](20) NULL,
	[path] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[KeyboardDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
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
/****** Object:  Table [dbo].[LaptopDescription]    Script Date: 12/1/2021 10:15:48 PM ******/
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
	[typelaptop] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LaptopDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
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
/****** Object:  Table [dbo].[MouseDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MouseDetail](
	[idProduct] [varchar](50) NOT NULL,
	[kieuketnoi] [nvarchar](50) NULL,
	[led] [nvarchar](50) NULL,
	[ketnoi] [nvarchar](50) NULL,
	[dophangiai] [nvarchar](50) NULL,
	[thoigianphanhoi] [nvarchar](50) NULL,
	[dangcambien] [nvarchar](50) NULL,
	[kichthuoc] [nvarchar](50) NULL,
	[khoiluong] [nvarchar](40) NULL,
	[sonutbam] [int] NULL,
	[tencambien] [nvarchar](50) NULL,
	[loaichuot] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PCDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PCDetail](
	[idProduct] [varchar](50) NOT NULL,
	[typepc] [nvarchar](50) NULL,
	[mainboard] [nvarchar](50) NULL,
	[cputype] [nvarchar](50) NULL,
	[cpu] [nvarchar](50) NULL,
	[detailcpu] [nvarchar](100) NULL,
	[ram] [nvarchar](30) NULL,
	[detailram] [nvarchar](100) NULL,
	[vgatype] [nvarchar](30) NULL,
	[vganame] [nvarchar](50) NULL,
	[psu] [nvarchar](50) NULL,
	[casepc] [nvarchar](100) NULL,
	[cool] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[idProduct] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](100) NOT NULL,
	[gia] [int] NOT NULL,
	[idloai] [varchar](50) NULL,
	[thuonghieu] [nvarchar](20) NULL,
	[namsx] [int] NULL,
	[baohanh] [int] NULL,
	[hienthi] [int] NULL,
	[nameimage] [nvarchar](100) NULL,
	[mau] [nvarchar](20) NULL,
	[tinhtrang] [nvarchar](500) NULL,
	[uudai] [nvarchar](500) NULL,
	[giacu] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ScreenDetail]    Script Date: 12/1/2021 10:15:48 PM ******/
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
/****** Object:  Table [dbo].[TypeProduct]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeProduct](
	[id] [varchar](50) NOT NULL,
	[ten] [nvarchar](40) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/1/2021 10:15:48 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[firstname] [nvarchar](100) NOT NULL,
	[lastname] [nvarchar](100) NOT NULL,
	[email] [nvarchar](50) NOT NULL,
	[pass] [varchar](50) NOT NULL,
	[sdt] [nvarchar](11) NULL,
	[diachi] [nvarchar](100) NULL,
	[mode] [nvarchar](20) NOT NULL,
	[nameimage] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (8, N'14-bf016TU', 1, 11490000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (8, N'15-7501', 2, 62180000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (8, N'340s-G7', 1, 21690000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (8, N'5410-2-in-1', 2, 54580000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (9, N'14-3405', 2, 36180000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (9, N'15-7501', 2, 62180000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (9, N'5410-2-in-1', 1, 27290000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (9, N'AKKOOBlue', 1, 2250000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (9, N'SF514-53T-740R', 1, 27990000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (10, N'15-7501', 1, 31090000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (10, N'340s-G7', 1, 21690000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (10, N'5410-2-in-1', 1, 27290000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (11, N'15-7501', 1, 31090000, 1)
INSERT [dbo].[CartDetail] ([idUser], [idProduct], [soluong], [tongtien], [selected]) VALUES (11, N'340s-G7', 1, 21690000, 1)
GO
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'AH-318N', N'Over-ear', N'USB 2.0, 3.5 mm', N'Tai nghe có dây', N'Có', NULL, NULL, N'Có', N'74g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'ATH-J100', N'In-ear', N'3.5mm', N'Tai nghe có dây', N'Có', NULL, NULL, NULL, N'74g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'AUK-72891', N'Over-ear', N'3.5mm', N'Tai nghe có dây', N'Có', NULL, N'40 mm', NULL, N'74g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'GT-03', N'Over-ear', N'USB 2.0, 3.5 mm', N'Tai nghe có dây', N'Có', NULL, NULL, N'Có', N'74g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'H110', N'On-ear', N'3.5mm', N'Tai nghe có dây', N'Có', NULL, NULL, NULL, N'74g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'H430D', N'On-ear', N'3.5mm', N'Tai nghe có dây', N'Có', NULL, NULL, NULL, N'80g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'TNH150', N'On-ear', N'3.5mm', N'Tai nghe có dây', N'Có', N'22 ohms', NULL, NULL, N'80g')
INSERT [dbo].[HeadphoneDetail] ([idProduct], [kieutainghe], [ketnoi], [kieuketnoi], [microphone], [kieupin], [kichthuocdriver], [led], [khoiluong]) VALUES (N'TNH150X', N'On-ear', N'3.5mm', N'Tai nghe có dây', N'Có', NULL, NULL, NULL, N'80g')
GO
SET IDENTITY_INSERT [dbo].[Image] ON 

INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (15, N'slide1.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (16, N'slide2.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (17, N'slide3.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (18, N'slide4.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (20, N'right1.png', N'panel', N'right', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (21, N'right2.png', N'panel', N'right', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (22, N'bottom(4)1.png', N'panel', N'bottom(4)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (23, N'bottom(4)2.png', N'panel', N'bottom(4)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (24, N'bottom(4)3.png', N'panel', N'bottom(4)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (25, N'bottom(4)4.png', N'panel', N'bottom(4)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (26, N'bottom(3)1.png', N'panel', N'bottom(3)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (27, N'bottom(3)2.png', N'panel', N'bottom(3)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (28, N'bottom(3)3.png', N'panel', N'bottom(3)', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (29, N'slide5.png', N'slide', N'center', N'/')
INSERT [dbo].[Image] ([id], [nameImage], [typeImage], [position], [path]) VALUES (30, N'slide6.png', N'slide', N'center', N'/')
SET IDENTITY_INSERT [dbo].[Image] OFF
GO
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'AKKOOBlue', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB( 7 chế độ led)', N'DareU', N'blue', N'Dare-U Blue Switch : Clicky', 108, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'AKKOOrange', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB( 7 chế độ led)', N'DareU', N'orange', N'Dare-U Orange Switch : Tactile', 108, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'AKKOPink', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB(7 chế độ led)', N'DareU', N'pink', N'Dare-U Pink Switch : Tactile', 108, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'EK880Brown', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB(10 chế độ led)', N'DareU', N'brown', N'Dare-U Brown Switch : Tactile', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'EK880Red', N'Bàn phím có dây', N'Bàn Phím cơ', N'RGB', N'RGB(10 chế độ led)', N'DareU', N'red', N'Dare-U Red Switch : Linear', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK61', N'Đa kết nối', N'Bàn Phím cơ', N'Đơn', N'Led đơn', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 61, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK61RGB', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 61, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK61RGBBlACK', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led ', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 61, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK837', N'Đa kết nối', N'Bàn phím cơ', N'RGB', N'16 triệu màu', N'Cherry', N'Blue', N'Blue switch clicky - tactile', 87, NULL)
INSERT [dbo].[KeyboardDetail] ([idProduct], [ketnoi], [loai], [den], [motaden], [brandswitch], [typeswitch], [motaswitch], [layout], [size]) VALUES (N'RK837RGB', N'Đa kết nối', N'Bàn Phím cơ', N'RGB', N'19 chế độ led', N'RK', N'blue', N'Mặc định Blue-Clicky : Hỗ trợ HotSwap thay switch nóng', 87, NULL)
GO
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'14-3405', N'AMD Ryzen 5 3500U ( 2.1 GHz - 3.7 GHz / 4MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'AMD Radeon Vega 8 Graphics', N'14" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 NVMe', N'1 x HDMI', N', 2 x USB 3.2 , 1 x USB 2.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.87 x 23.95 x 1.99 cm', N'1.7 kg', N'3 cell 42 Wh , Pin liền', N'Laptop Mỏng nhẹ Văn phòng')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'14-5406', N'Intel Core i7-1165G7 ( 4.7 GHz / 12MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce MX330 2GB GDDR5 / Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD IPS cảm ứng , HD webcam', N'512GB SSD M.2 NVMe ', N'1 x M.2 NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.1 , 1 x SD card slot', N'WiFi 802.11ax (Wifi 6) , Bluetooth 5.1', N'Windows 10 Home SL 64-bit', N'32.43 x 22.29 x 1.894 cm', N'1.5 kg', N'3 cell 40 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'14-bf016TU', N'Intel Core i3-7100U ( 2.4 GHz / 3MB / 2 nhân, 4 luồng ) ', N'1 x 4GB DDR4 2400MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel HD Graphics 620', N'14" ( 1920 x 1080 ) Full HD không cảm ứng , HD webcam', N'1TB HDD 5400RPM', N'M.2 SATA', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 4.2', N'Free DOS', N'32.4 x 22.76 x 1.99 cm', N'1.6 kg', N'3 cell 41 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'15-7501', N'Intel Core i7-10750H ( 2.6 GHz - 5.0 GHz / 12MB / 6 nhân, 12 luồng )', N'1 x 8GB Onboard DDR4 2933MHz ( 1 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1650Ti 4GB GDDR6 / Intel UHD Graphics', N'15.6" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'1 x M.2 SATA/NVMe', N'1 x HDMI', N'2 x USB 3.1 , 1 x Thunderbolt , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'35.61 x 23.45 x 1.89 cm', N'1.8 kg', N'3 cell 56 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'15-dh0169tx', N'Intel Core i9-9880H ( 2.3 GHz - 4.8 GHz / 16MB / 8 nhân, 16 luồng )', N'2 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB ))', N'NVIDIA GeForce RTX 2080 8GB GDDR6 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 240Hz , không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe + 32GB Optane', N'M.2 SATA/NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI , 1 x mini DisplayPort', N'3 x USB 3.1 , 1 x Thunderbolt 3 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26 x 2 cm', N'2.4 kg', N'6 cell 70 Wh , Pin liền', N'Laptop Đồ họa Laptop cấu hình cao')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'15-dh0172tx', N'Intel Core i7 9750H ( 2.6 GHz - 4.5 GHz / 12MB / 6 nhân, 12 luồng )', N'1 x 16GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce RTX 2070 8GB GDDR6 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 240Hz , không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe / 1TB HDD 7200RPM', N'M.2 SATA/NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI , 1 x mini DisplayPort', N'3 x USB 3.1 , 1 x Thunderbolt 3 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26 x 2 cm', N'2.4 kg', N'6 cell 70 Wh , Pin liền', N'Laptop Đồ họa Gaming')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'340s-G7', N'Intel Core i7-1065G7 ( 1.3 GHz - 3.9 GHz / 8MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel Iris Plus Graphics', N'14" ( 1920 x 1080 ) Full HD IPS không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.1 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.4 x 22.5 x 1.79 cm', N'1.4 kg', N'3 cell 41 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'430-G6', N'Intel Core i5-8265U ( 1.6 GHz - 3.9 GHz / 6MB / 4 nhân, 8 luồng ) ', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel UHD Graphics 620', N'13.3" ( 1366 x 768 ) HD không cảm ứng , HD webcam', N'256GB SSD M.2 NVMe', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Free DOS', N'30.86 x 23.09 x 1.80', N'1.4 kg', N'3 cell 45 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'5410-2-in-1', N'Intel Core i5-1155G7 ( 2.5 GHz - 4.5 GHz / 8MB / 4 nhân, 8 luồng )', N'2 x 4GB DDR4 3200MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce MX350 2GB GDDR5 / Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD cảm ứng , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe ', N'1 x HDMI  ', N'1 x USB Type C / DisplayPort / Power Delivery , 2 x USB 3.2 , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.1', N'Windows 10 Home SL 64-bit', N'32.15 x 21.135 x 1.8 cm', N'1.6 kg', N'3 cell 41 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'590-N5I5517W', N'Intel Core i5 9300H ( 2.4 GHz - 4.1 GHz / 8MB / 4 nhân, 8 luồng )', N'2 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce GTX 1050 3GB GDDR5', N'15.6" ( 1920 x 1080 ) Full HD SVA không cảm ứng , Màn hình chống lóa , HD webcam', N'256GB SSD', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 1 x USB 3.1 , 2 x USB 2.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home SL 64-bit', N'36.55 x 25.4 x 2.16 cm', N'2.3 kg', N'3 cell 51 Wh', N'Laptop Đồ họa thiết kế')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'A315-57G-31YD', N'Intel Core i3-1005G1 ( 1.2 GHz - 3.4 GHz / 4MB / 2 nhân, 4 luồng )', N'1 x 4GB Onboard 2400MHz ( 1 Khe cắm / Hỗ trợ tối đa 20GB )', N'NVIDIA GeForce MX330 2GB GDDR5 / Intel UHD Graphics', N'15.6" ( 1920 x 1080 ) Full HD không cảm ứng , VGA webcam', N'256GB SSD M.2 NVMe /', N'M.2 NVMe (Hỗ trợ Intel Optane)', N'1 x HDMI', N' 2 x USB 3.1 , 1 x USB 2.0 , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home 64-bit', N'36.34 x 25.05 x 1.995 cm', N'1.9 kg', N'3 cell 36 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'AN515-54-784P', N'Intel Core i5-8300H ( 2.3 GHz - 4.0 GHz / 8MB / 4 nhân, 8 luồng )', N'1 x 8GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1050Ti 4GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'128GB SSD M.2 SATA / 1TB HDD 5400RPM', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 1 x USB 3.0 , 2 x USB 2.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ac , Bluetooth 5.0', N'Linux', N'39 x 22.6 x 2.67 cm', N'2.4 kg', N'4 cell 48 Wh , Pin liền', N'Laptop Gaming')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'FX516PE-HN005T', N'Intel Core i7-11370H ( 4.8 GHz / 12MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 3200MHz ( 1 Khe cắm', N'NVIDIA GeForce RTX 3050Ti 4GB GDDR6 / Intel Iris Xe Graphics', N'15.6" ( 1920 x 1080 ) Full HD IPS 144Hz , không cảm ứng , Màn hình chống lóa', N'512GB SSD M.2 NVMe ', N'1 x M.2 NVMe', N'1 x HDMI', N'1 x USB 3.1 Gen 2 Type C / DisplayPort / Thunderbolt 3 , 3 x USB 3.1 , LAN 1 Gb/s', N'WiFi 802.11ax (Wifi 6) , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36.0 x 25.2 x 1.99cm', N'2 kg', N'4 cell 76 Wh , Pin liền', N'Laptop 2-1')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'GL504GM-ES312T', N'Intel Core i7-8750H ( 2.2 GHz - 4.1 GHz / 9MB / 6 nhân, 12 luồng )', N'1 x 8GB Onboard DDR4 2666MHz ( 6 Khe cắm / Hỗ trợ tối đa 32GB )', N'NVIDIA GeForce GTX 1060 6GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD WVA không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'1 x M.2 SATA/NVMe', N'1 x HDMI , 1 x mini DisplayPort', N'1 x USB 3.1 Gen 2 Type C , 1 x USB 3.1 Gen 2 , 2 x USB 3.0 , 1 x SD card slot , LAN 1 Gb/s', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36.1 x 26.2 x 2.61 cm', N'2.4 kg', N'4 cell 66 Wh , Pin liền', N'Laptop văn phòng')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'GX531GM-ES004T', N'Intel Core i7-8750H ( 2.2 GHz - 4.1 GHz / 9MB / 6 nhân, 12 luồng )', N'16GB (8GB + 8GB Onboard) DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'NVIDIA GeForce GTX 1060 6GB GDDR5 / Intel UHD Graphics 630', N'15.6" ( 1920 x 1080 ) Full HD 144Hz , không cảm ứng , HD webcam', N'512GB SSD', N'M.2 NVMe /', N'1 x HDMI', N'1 x USB 3.1 Gen 1 Type C, 1 x USB 3.1 Gen 2 Type C / DisplayPort , 1 x USB 3.1 Gen 2 , 2 x USB 2.0', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'36 x 26.8 x 1.57 cm', N'2.1 kg', N'4 cell 50 Wh, Pin liền', N'Laptop văn phòng')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'S433EA-AM439T', N'Intel Core i5-1135G7 ( 4.2 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 3200MHz Không nâng cấp được )', N'Intel Iris Xe Graphics', N'14" ( 1920 x 1080 ) Full HD cảm ứng , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 SATA/NVMe ', N'1 x HDMI  ', N'2 x USB 2.0 , 1 x Thunderbolt 3 , 1 x micro SD card slot', N'WiFi 802.11ax , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.15 x 21.135 x 1.8 cm', N'1.4 kg', N'3 cell 50 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'SF314-55G-76FW', N'Intel Core i7-8565U ( 1.8 GHz - 4.6 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 2666MHz Không nâng cấp được )', N'NVIDIA GeForce MX150 2GB Intel UHD Graphics 620', N'14" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'512GB SSD M.2 NVMe /', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'323 x 228 x 14.95 mm', N'1.5 kg', N'4 cell 50 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'SF315-52-52Z7', N'Intel Core i5-8250U ( 1.6 GHz - 3.4 GHz / 6MB / 4 nhân, 8 luồng )', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm / Hỗ trợ tối đa 16GB )', N'Intel UHD Graphics 620', N'15.6" ( 1920 x 1080 ) Full HD IPS không cảm ứng , HD webcam', N'1TB HDD 5400RPM', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.0 , 1 x USB 2.0 , 1 x SD card slot', N'WiFi 802.11ac , Bluetooth 4.2', N'Windows 10 Home SL 64-bit', N'34 x 23 x 1.8 cm', N'1.6 kg', N'4 cell 48 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'SF514-53T-740R', N'Intel Core i7-8565U ( 1.8 GHz - 4.6 GHz / 8MB / 4 nhân, 8 luồng )', N'8GB Onboard DDR4 2400MHz Không nâng cấp được )', N'Intel UHD Graphics 620', N'14" ( 1920 x 1080 ) Full HD IPS cảm ứng , HD webcam', N'256GB SSD M.2 NVMe /', N'M.2 SATA/NVMe', N'1 x HDMI', N'1 x USB Type C / DisplayPort , 2 x USB 3.0', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'329.0 x 228.0 x 14.9 mm', N'1 kg', N'2 cell 36 Wh , Pin liền', N'Laptop Mỏng nhẹ')
INSERT [dbo].[LaptopDescription] ([idProduct], [detailcpu], [detailram], [detailvga], [detailmanhinh], [ocung], [kieukhe], [congxuathinh], [congketnoi], [ketnoikhongday], [hdh], [size], [khoiluong], [pin], [typelaptop]) VALUES (N'UX481FL-BM048T', N'Intel Core i5-10210U ( 1.6 GHz - 4.2 GHz / 6MB / 4 nhân, 8 luồng )', N'8GB DDR4 2666MHz ', N'NVIDIA GeForce MX250 2GB GDDR5 / Intel UHD Graphics', N'14" ( 1920 x 1080 ) Full HD HD không cảm ứng , Màn hình chống lóa , HD webcam', N'512GB SSD M.2 NVMe', N'M.2 NVMe', N'1 x HDMI', N'1 x USB Type C , 2 x USB 3.1 , 1 x micro SD card slot', N'WiFi 802.11ac , Bluetooth 5.0', N'Windows 10 Home SL 64-bit', N'32.87 x 23.95 x 1.99 cm', N'1.6 kg', N'4 cell 70 Wh , Pin liền', NULL)
GO
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-3405', N'ryzen5', N'8', N'amd', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-5406', N'corei7', N'8', N'NVIDIA', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'14-bf016TU', N'corei3', N'4', N'intel', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-7501', N'corei7', N'8', N'NVIDIA', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-dh0169tx', N'corei9', N'16', N'NVIDIA', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'15-dh0172tx', N'corei7', N'16', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'340s-G7', N'corei7', N'8', N'intel', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'430-G6', N'corei5', N'4', N'intel', N'13.3')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'5410-2-in-1', N'corei5', N'8', N'NVIDIA', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'590-N5I5517W', N'corei5', N'8', N'NVIDIA', N'15')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'A315-57G-31YD', N'corei3', N'4', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'AN515-54-784P', N'corei5', N'8', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'FX516PE-HN005T', N'corei7', N'8', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'GL504GM-ES312T', N'corei7', N'8', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'GX531GM-ES004T', N'corei7', N'16', N'nvidia', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'S433EA-AM439T', N'corei5', N'8', N'intel', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF314-55G-76FW', N'corei7', N'8', N'nvidia', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF315-52-52Z7', N'corei5', N'4', N'intel', N'15.6')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'SF514-53T-740R', N'corei7', N'8', N'intel', N'14')
INSERT [dbo].[LaptopDetail] ([idProduct], [cpu], [ram], [vga], [manhinh]) VALUES (N'UX481FL-BM048T', N'corei5', N'8', N'intel', N'14')
GO
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'CH-9301111-AP', N'Chuột có dây', N'RGB', N'USB 2.0', N'12000DPI', N'1ms', N'Optical', N'115.5(L) x 68.3(W) x 40.4(H) mm', N'85 g', 6, N'PMW3389', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'G102White', N'Chuột có dây', N'RGB', N'USB 2.0', N'80000DPI', N'1ms', N'Optical', N'11.66 x 6.215 x 3.82 cm', N'85 g', 6, NULL, N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'G302BLACK', N'Chuột có dây', N'RGB', N'USB 2.0', N'40000DPI', N'1ms', N'Optical', N'11.66 x 6.215 x 3.82 cm', N'87 g', 6, NULL, N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'G403', N'Chuột có dây', N'RGB', N'USB 2.0', N'16000DPI', N'1ms', N'Optical', N'11.66 x 6.215 x 3.82 cm', N'87.3 g', 6, N'HERO', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'G502', N'Chuột có dây', N'RGB', N'USB 2.0', N'16000DPI', N'1ms', N'Optical', N'
124 x 68 x 43 mm', N'', 11, N'HERO', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'LW325', N'Chuột có dây', N'RGB', N'USB 2.0', N'50000DPI', N'1ms', N'Optical', N'123 x 68 x 39 mm', N'113 g', 7, N'TrueMove 3 Esburtz pro Juan: Juan', NULL)
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'M105', N'Chuột có dây', NULL, N'USB 2.0', N'10000DPI', N'1ms', N'Optical', N'123 x 68 x 39 mm', N'73 g', 3, NULL, N'Chuột Văn Phòng')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'M105BLLACK', N'Chuột có dây', NULL, N'USB 2.0', N'10000DPI', NULL, N'Optical', N'123 x 68 x 39 mm', N'73 g', 3, NULL, N'Chuột Văn Phòng')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'M221', N'Chuột không dây', NULL, N'2.4 GHz Wireless', N'10000DPI', NULL, N'Optical', N'123 x 68 x 39 mm', N'73 g', 3, NULL, N'Chuột Văn Phòng')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'M350PINK', N'Chuột không dây', NULL, N'Bluetooth, Wireless', N'10000DPI', NULL, N'Optical', N'10.7 x 5.9 x 2.65', N'100 g', 3, NULL, N'Chuột Văn Phòng')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'ROG-1231', N'Chuột có dây', N'RGB', N'USB 2.0', N'62000DPI', N'1ms', N'Optical', N'12.6 x 6.7 x 4.5 cm', N'79 g', 6, N'HERO', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'ROG-2765', N'Chuột có dây', N'RGB', N'USB 2.0', N'62000DPI', N'1ms', N'Optical', N'3.9 x 11.8 x 6.2 cm', N'62 g', 5, N'PMW3389', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'RZ01-03210100-R3M1', N'Chuột có dây', N'RGB', N'USB 2.0', N'20000DPI', N'1ms', N'Optical', N'118.3 x 53.5 x 38.3 mm', N'82 g', 8, N'PMW3389', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'RZ01-03250100-R3M1', N'Chuột có dây', N'RGB', N'USB 2.0', N'85000DPI', N'1ms', N'Optical', N'118.3 x 53.5 x 38.3 mm', N'85 g', 6, N'PMW3389', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'steelrival3', N'Chuột có dây', N'RGB', N'USB 2.0', N'20000DPI', N'1ms', N'Optical', N'120 x 58 x 21 mm', N'77 g', 6, N'PMW3389', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'steelrival310', N'Chuột có dây', N'RGB', N'USB 2.0', N'20000DPI', N'1ms', N'Optical', N'120 x 58 x 21 mm', N'88.3 g', 6, NULL, N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'steelrival650', N'Chuột có dây', N'RGB', N'USB 2.0', N'20000DPI', N'1ms', N'Optical', N'120 x 58 x 21 mm', N'88.3 g', 7, N'TrueMove 3 Esburtz pro Juan: Juan', N'Chuột Gaming')
INSERT [dbo].[MouseDetail] ([idProduct], [kieuketnoi], [led], [ketnoi], [dophangiai], [thoigianphanhoi], [dangcambien], [kichthuoc], [khoiluong], [sonutbam], [tencambien], [loaichuot]) VALUES (N'steelrival710', N'Chuột có dây', N'RGB', N'USB 2.0', N'20000DPI', N'1ms', N'Optical', N'120 x 58 x 21 mm', N'88.3 g', 7, N'TrueMove 3 Esburtz pro Juan: Juan', N'Chuột Gaming')
GO
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'AS-XC780', N'PC văn phòng,PC thường', N'Acer', N'Intel', N'Intel corei5', N'Intel Core i5-7400 ( 3.0 GHz - 3.5 GHz / 6MB / 4 nhân, 4 luồng )', N'4GB', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )', N'NVIDIA', N'Intel HD Graphics 630 / GeForce GT 720 2GB', NULL, NULL, NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'Assassin-M', N'PC gaming đồ họa', N'Mainboard ASUS PRIME A320M-E', N'AMD', N'Ryzen3', N'AMD Ryzen 3 3200G / 6MB / 4.0GHz / 4 nhân 4 luồng / AM4', N'8GB', N'(8GB DDR4 1x8G 2666) Ram Gigabyte Memory 2666', N'NVIDIA', N'GIGABYTE GeForce GTX 1050 Ti D5 4GB', N'Nguồn CoolerMaster MWE 400 Bronze - V2 230V', N'XIGMATEK NYX 3F RGB', NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'AXE-M', N'PC Gaming đồ họa thiết Kế', N'GIGABYTE H510M S2H (rev. 1.0)', N'Intel', N'Corei3', N'Intel Core i3 10100F / 6MB / 4.3GHZ / 4 nhân 8 luồng / LGA 1200', N'8GB', N'(8GB DDR4 1x8G 2666) Ram Gigabyte Memory 2666', N'NVIDIA', N'PALIT GeForce GT 710 2GB DDR3 (NEAT7100HD46-2080F', N'Nguồn CoolerMaster MWE 400 Bronze - V2 230V', N'XIGMATEK NYX 3F RGB', NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'JSKLW821', N'PC Gaming đồ Họa thiết Kế', N'GIGABYTE H510M S2H (rev. 1.0)', N'Intel', N'Penium', N'Intel Pentium G6405 / 4MB / 4.1GHz / 2 Nhân 4 Luồng / LGA 1200', N'8GB', N'(8GB DDR4 1x8G 2666) Ram Gigabyte Memory 2666', N'NVIDIA', N'GIGABYTE GeForce GTX 1050 Ti D5 4GB', N'Nguồn CoolerMaster (400W) MWE 400 Bronze - V2 230V', N'XIGMATEK NYX 3F RGB', NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'M230', N'PC văn phòng,PC thường', N'Acer', N'Intel', N'Intel Pentium G', N'Intel Pentium G5400 ( 3.70 GHz / 4MB / 2 nhân, 4 luồng )', N'4GB', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )', N'Intel', N'Intel HD Graphics 630 / GeForce GT 720 2GB', NULL, NULL, NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'M230I8', N'PC văn phòng,PC thường', N'Acer', N'Intel', N'Intel corei3', N'Intel Core i3-8100 ( 3.60 GHz / 6MB / 4 nhân, 4 luồng )', N'4GB', N'1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )', N'Intel', N'Intel HD Graphics 630', NULL, NULL, NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'M230I84', N'PC văn phòng,PC thường', N'Acer', N'Intel', N'Intel corei5', N'Intel Core i5-8400 ( 2.80 GHz - 4.00 GHz / 9MB / 6 nhân, 6 luồng )', N'4GB', N'1 x 4GB DDR4 2400MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )', N'Intel', N'Intel HD Graphics 630', NULL, NULL, NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'Minion-M', N'PC Gaming đồ Họa thiết Kế', N'GIGABYTE H510M S2H (rev. 1.0)', N'Intel', N'Corei3', N'Intel Core i3 10100F / 6MB / 4.3GHZ / 4 nhân 8 luồng / LGA 1200', N'8GB', N'(8GB DDR4 1x8G 2666) Ram Gigabyte Memory 2666', N'ASUS', N'ASUS TUF Gaming GeForce GTX 1660 Ti EVO 6GB', N'Nguồn SilverStone ST50F-ES230 - 80 Plus', N'XIGMATEK NYX 3F RGB', NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'TC-865', N'PC văn phòng,PC thường', N'acer', N'Intel', N'Intel corei3', N'Intel Core i3-9100 ( 3.6 GHz up to 4.20 GHz / 6MB / 4 nhân, 4 luồng )', N'4GB', N'1 x 4GB DDR4 2666MHz ( 2 Khe cắm Hỗ trợ tối đa 32GB )', N'Intel', N'Intel UHD Graphics 630', NULL, N'Acer', NULL)
INSERT [dbo].[PCDetail] ([idProduct], [typepc], [mainboard], [cputype], [cpu], [detailcpu], [ram], [detailram], [vgatype], [vganame], [psu], [casepc], [cool]) VALUES (N'Ventus-M', N'PC Gaming đồ Họa thiết Kế', N'GIGABYTE H510M S2H (rev. 1.0)', N'Intel', N'Corei3', N'Intel Core i3 10100F / 6MB / 4.3GHZ / 4 nhân 8 luồng / LGA 1200', N'8GB', N'(8GB DDR4 1x8G 2666) Ram Gigabyte Memory 2666', N'ASUS', N'ASUS Phoenix GeForce GT 1030 OC 2GB GDDR5', N'Nguồn CoolerMaster MWE 400 Bronze - V2 230V', N'XIGMATEK NYX 3F RGB', NULL)
GO
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'14-3405', N'Laptop Dell Vostro ( AMD Ryzen 5 3500U | 8GB | AMD Radeon Vega 8 Graphics | 14")', 18090000, N'laptop', N'Dell', 2020, 1, 1, N'14-3405.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 20090000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'14-5406', N'Laptop Dell Inspiron ( Core i7-1165G7 | 8GB | NVIDIA GeForce MX330 2GB GDDR5 | 14")', 26690000, N'laptop', N'Dell', 2021, 1, 0, N'14-5406.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 24690000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'14-bf016TU', N'Laptop HP Pavilion (Core i3-7100U | 4GB | Intel HD Graphics 620 |14")', 11490000, N'laptop', N'HP', 2019, 1, 1, N'14-bf016TU.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 12490000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'15-7501', N'Laptop Dell Inspiron ( Core i7-10750H | 8GB | NVIDIA GeForce GTX 1650Ti 4GB GDDR6 | 15.6")', 31090000, N'laptop', N'Dell', 2020, 1, 1, N'15-7501.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 34090000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'15-dh0169tx', N'Laptop HP OMEN ( Core i9-9880H | 16GB | NVIDIA GeForce RTX 2080 8GB GDDR6 | 15.6 ")', 76990000, N'laptop', N'HP', 2021, 2, 0, N'15-dh0169tx.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 80990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'15-dh0172tx', N'Laptop HP OMEN ( Core i7 9750H | 16GB | NVIDIA GeForce RTX 2070 8GB GDDR6 | 15.6")', 44490000, N'laptop', N'HP', 2021, 2, 0, N'15-dh0172tx.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 45490000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'27MK600M-B', N'Màn hình LCD LG 27'''' 27MK600M-B(1920 x 1080/IPS/5ms)', 5090000, N'screen', N'LG', 2021, 24, 1, N'27MK600M-B.png', NULL, NULL, NULL, 5290000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'340s-G7', N'Laptop HP ( Core i7-1065G7 | 8GB | Intel Iris Plus Graphics | 14" )', 21690000, N'laptop', N'HP', 2020, 2, 1, N'340s-G7.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 25690000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'430-G6', N'Laptop HP ProBook ( Core i5-8265U | 4GB | Intel UHD Graphics 620 | 13.3")', 16190000, N'laptop', N'HP', 2020, 2, 0, N'430-G6.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 18190000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'5410-2-in-1', N'Laptop Dell Inspiron ( Core i5-1155G7 | 8GB | NVIDIA GeForce MX350 2GB GDDR5 | 14")', 27290000, N'laptop', N'Dell', 2021, 1, 1, N'5410-2-in-1.png', NULL, NULL, N'Tặng kèm túi chống sóc', 29290000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'590-N5I5517W', N'Laptop Dell G3 ( Core i5 9300H | 8GB | NVIDIA GeForce GTX 1050 3GB GDDR5 | 15.6")', 20590000, N'laptop', N'Dell', 2019, 1, 0, N'590-N5I5517W.png', NULL, NULL, N'Tặng kèm túi chống sóc', 22590000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'A315-57G-31YD', N'Laptop Acer Aspire ( Core i3-1005G1 | 4GB | NVIDIA GeForce MX330 2GB GDDR5 | 15.6") ', 13990000, N'laptop', N'Acer', 2021, 2, 0, N'A315-57G-31YD.png', NULL, NULL, N'Tặng kèm túi chống sóc', 15990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AH-318N', N'Tai nghe Over-ear SoundMAX AH 318 (Nâu)', 570000, N'headphone', N'SOUNDMAX', 2020, 12, 1, N'AH-318N.png', N'Nâu', NULL, NULL, 600000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AKKOOBlue', N'Bàn phím cơ AKKO 3108 Dragon Ball Z - Goku Blue Switch', 2250000, N'keyboard', N'AKKO', 2020, 24, 1, N'AKKOBlue.png', N'Cam', NULL, N'Phụ kiện : 1 thanh gắp keycap', 2550000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AKKOOrange', N'Bàn phím cơ AKKO 3108 Dragon Ball Z - Goku Orange Switch', 2250000, N'keyboard', N'AKKO', 2020, 24, 1, N'AKKOOrange.png', N'Cam', NULL, N'Phụ kiện : 1 thanh gắp keycap', 2550000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AKKOPink', N'Bàn phím cơ AKKO 3108 Dragon Ball Z - Goku Pink Switch', 2250000, N'keyboard', N'AKKO', 2020, 24, 1, N'AKKOPink.png', N'Cam', NULL, N'Phụ kiện : 1 thanh gắp keycap', 2550000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AN515-54-784P', N'Laptop Acer Nitro 5 ( Core i5-8300H | 8GB | NVIDIA GeForce GTX 1050Ti 4GB GDDR5 | 15.6")', 28990000, N'laptop', N'Acer', 2019, 2, 1, N'AN515-54-784P.png', NULL, NULL, N'Tặng kèm túi chống sóc', 29990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AS-XC780', N'Máy tính để bàn - PC Acer Aspire AS-XC780 DT.B8ASV.006 (i5-7400/4GB/1TB HDD/GT 720/Free DOS)', 11690000, N'pc', N'Acer', 2019, 24, 1, N'AS-XC780.png', N'Đen', NULL, NULL, 15000000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'Assassin-M', N'PC Gaming Assassin-M', 21590000, N'pc', NULL, 0, 36, 1, N'Assassin-M.png', NULL, NULL, NULL, 25590000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'ATH-J100', N'Tai nghe In-ear Audio-technica ATH-J100', 189000, N'headphone', N'Audio-technica', 2020, 24, 1, N'ATH-J100.png', N'Xanh', NULL, NULL, 300000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AUK-72891', N'Tai nghe Ovan X6 (Vàng đen)', 270000, N'headphone', N'Ovan', 2020, 24, 1, N'AUK-72891.png', N'vàng,đen', NULL, NULL, 400000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'AXE-M', N'PC Gaming AXE-M', 8590000, N'pc', NULL, 0, 24, 1, N'AXE-M.png', NULL, NULL, NULL, 8990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'CH-9301111-AP', N'Chuột máy tính Corsair Harpoon PRO RGB - CH-9301111-AP', 499000, N'mouse', N'CORSAIR', 2021, 24, 1, N'CH-9301111-AP.png', N'Đen', NULL, N'Tặng kèm lót chuột', 599000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'E1916HV', N'Màn Hình Dell 18.5 inch E1916HV (1366x768/TN/60Hz/5ms)', 4440000, N'screen', N'DELL', 2019, 36, 1, N'E1916HV.png', NULL, NULL, NULL, 5440000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'E2016HV', N'Màn Hình Dell 19.5 inch E2016HV (1600x900/5ms)', 3440000, N'screen', N'DELL', 2020, 36, 1, N'E2016HV.png', NULL, NULL, NULL, 5440000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'EK241Y', N'Màn hình LCD ACER EK241Y (1920 x 1080/75Hz/4 ms)', 3890000, N'screen', N'ACER', 2021, 24, 1, N'EK241Y.png', NULL, NULL, NULL, 5890000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'EK880Brown', N'Bàn phím cơ Dareu EK880 Brown Switch', 1550000, N'keyboard', N'DareU', 2021, 24, 1, N'EK880Brown.png', N'Đen', NULL, N'Phụ kiện : 1 thanh gắp keycap.', 2550000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'EK880Red', N'Bàn phím cơ Dareu EK880 Red Switch', 1550000, N'keyboard', N'DareU', 2021, 24, 1, N'EK880Red.png', N'Đen', NULL, N'Phụ kiện : 1 thanh gắp keycap', 2550000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'FX516PE-HN005T', N'Laptop ASUS TUF Dash ( Core i7-11370H | 8GB | NVIDIA GeForce RTX 3050Ti 4GB GDDR6 | 15.6")', 29790000, N'laptop', N'ASUS', 2021, 1, 0, N'FX516PE-HN005T.png', NULL, NULL, N'Tặng kèm túi chống sóc', 31790000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'G102White', N'Chuột gaming Logitech G102White Gen2 Lightsync (Trắng)', 389000, N'mouse', N'Logitech', 2021, 24, 1, N'G102White.png', N'Trắng', NULL, N'Tặng kèm lót chuột ', 409000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'G302BLACK', N'Chuột gaming Logitech G302 (Đen)', 679000, N'mouse', N'Logitech', 2021, 24, 1, N'G302BLACK.png', N'Đen', NULL, N'Tặng kèm lót chuột ', 709000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'G403', N'Chuột gaming Logitech G403 Hero', 989000, N'mouse', N'Logitech', 2021, 24, 1, N'G403.png', N'Đen', NULL, N'Tặng kèm lót chuột ', 909000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'G502', N'Chuột gaming Logitech G502 HERO (Đen)', 1089999, N'mouse', N'Logitech', 2021, 24, 1, N'G502.png', N'Đen', NULL, N'Tặng kèm lót chuột ', 1289999)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'GL504GM-ES312T', N'Laptop ASUS ROG Strix SCAR II ( Core i7-8750H | 8GB | NVIDIA GeForce GTX 1060 6GB GDDR5 | 15.6)', 39990000, N'laptop', N'ASUS', 2020, 1, 1, N'GL504GM-ES312T.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 42990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'GT-03', N'Tai nghe Over-ear TAKO GT-03 (Xanh)', 105000, N'headphone', N'Khác', 2020, 12, 1, N'GT-03.png', N'Xanh,đen', NULL, NULL, 200000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'GX531GM-ES004T', N'Laptop ASUS ROG Zephyrus S ( Core i7-8750H | 16GB | NVIDIA GeForce GTX 1060 6GB GDDR5 | 15.6")', 59900000, N'laptop', N'ASUS', 2019, 1, 0, N'GX531GM-ES004T.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 62900000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'H110', N'Tai nghe Logitech H110', 220000, N'headphone', N'Logitech', 2020, 24, 1, N'H110.png', N'Đen', NULL, NULL, 400000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'H430D', N'Tai nghe On-ear Logitech H340 (Đen)', 630000, N'headphone', N'Logitech', 2020, 24, 1, N'H430D.png', N'Đen', NULL, NULL, 1000000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'HA270', N'Màn hình LCD HKC HA270 (1920 x 1080/IPS/75Hz/12 ms)', 3999000, N'screen', N'LCD', 2021, 24, 1, N'HA270.png', NULL, NULL, NULL, 4299000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'JSKLW821', N'PC Gaming DBQ', 12500000, N'pc', NULL, NULL, 24, 1, N'JSKLW821.png', NULL, NULL, NULL, 15500000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'K202HQL', N'Màn Hình Acer 19.5 inch K202HQL (1600x900/TN/60Hz/5ms)', 18090000, N'screen', N'ACER', 2020, 1, 1, N'K202HQL.png', NULL, NULL, NULL, 20090000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'LC27R500FHEXXV', N'Màn hình Samsung 27 inch LC27R500FHEXXV (1920x1080/VA/60Hz/4ms)', 4990000, N'screen', N'LG', 2021, 24, 1, N'LC27R500FHEXXV.png', NULL, NULL, NULL, 5990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'LW325', N'Chuột máy tính Akko LW325 (Đen)', 589000, N'mouse', N'AKKO', 2021, 12, 1, N'LW325.png', N'Đen', NULL, NULL, 689000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M105', N'Chuột máy tính Logitech M105 (Đỏ)', 129000, N'mouse', N'Logitech', 2021, 12, 1, N'M105.png', N'Đỏ', NULL, NULL, 229000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M105BLLACK', N'Chuột máy tính Logitech M105 (Đen)', 129000, N'mouse', N'Logitech', 2021, 12, 1, N'M105BLACK.png', N'Đen', NULL, NULL, 229000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M221', N'Chuột máy tính không dây Logitech M221 (Xanh)', 330000, N'mouse', N'Logitech', 2021, 12, 1, N'M221.png', N'Xanh', NULL, NULL, 430000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M230', N'Máy tính để bàn - PC Acer Aspire M230 UX.VQVSI.143 (G5400/4GB/1TB HDD/UHD 610/Endless)', 8490000, N'pc', N'Acer', 2019, 24, 1, N'M230.png', N'Đen', NULL, NULL, 10000000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M230I8', N'Máy tính để bàn - PC Acer Aspire M230 UX.VQVSI.144 (i3-8100/4GB/1TB HDD/UHD 630/Endless)', 9990000, N'pc', N'Acer', 2019, 24, 1, N'M230I8.png', N'Đen', NULL, NULL, 10990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M230I84', N'Máy tính để bàn - PC Acer Aspire M230 UX.VQVSI.145 (i5-8400/4GB/1TB HDD/UHD 630/Endless)', 11990000, N'pc', N'Acer', 2019, 24, 1, N'M230I84.png', N'Đen', NULL, NULL, 12990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'M350PINK', N'Chuột không dây Logitech Pebble M350 (Hồng)', 129000, N'mouse', N'Logitech', 2021, 12, 1, N'M350PINK.png', N'Hồng', NULL, NULL, 229000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'Minion-M', N'PC Gaming Minion-M', 21590000, N'pc', NULL, 0, 36, 1, N'Minion-M.png', NULL, NULL, NULL, 25590000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'P2219H', N'Màn Hình Dell 21.5 inch P2219H LED IPS (1920x1080/IPS/60Hz/5ms)', 4790000, N'screen', N'DELL', 2021, 36, 1, N'P2219H.png', NULL, NULL, NULL, 5090000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RK61', N'Bàn phím cơ Royal-Kludge RK61 (HotSwap)(Trắng)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK61.png', N'Trắng', NULL, N'Phụ kiện : 1 thanh gắp keycap', 745000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RK61RGB', N'Bàn phím cơ Royal-Kludge RK61 (HotSwap)(Trắng)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK61RGB.png', N'Trắng', NULL, N'Phụ kiện : 1 thanh gắp keycap', 745000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RK61RGBBlACK', N'Bàn phím cơ Royal-Kludge RK61 (HotSwap)(Đen)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK61RGBBLACK.png', N'Đen', NULL, N'Phụ kiện : 1 thanh gắp keycap', 745000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RK837', N'Bàn phím cơ Royal-Kludge RK837 (HotSwap)', 640000, N'keyboard', N'Royal-Kludge', 2020, 12, 1, N'RK837.png', N'Trắng', NULL, N'Phụ kiện : 1 thanh gắp keycap', 745000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RK837RGB', N'Bàn phím cơ Royal-Kludge RK837 (HotSwap)', 645000, N'keyboard', N'Royal-Kludge', 2020, 24, 1, N'RK837RGB.png', N'Trắng', NULL, N'Phụ kiện : 1 thanh gắp keycap', 745000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'ROG-1231', N'Chuột gaming Asus ROG Strix Impact II (Đen)', 799000, N'mouse', N'ASUS', 2021, 24, 1, N'ROG-1231.png', N'Đen', NULL, NULL, 899000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'ROG-2765', N'Chuột gaming Asus ROG Keris (P509) (Đen)', 799000, N'mouse', N'ASUS', 2021, 24, 1, N'ROG-2765.png', N'Đen', NULL, NULL, 899000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RZ01-03210100-R3M1', N'Chuột máy tính gaming Razer Deathadder V2 RZ01-03210100-R3M1 (Đen)', 1690000, N'mouse', N'RAZER', 2021, 24, 1, N'RZ01-03210100-R3M1.png', N'Đen', NULL, NULL, 2690000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'RZ01-03250100-R3M1', N'Chuột máy tính gaming Razer Viper Mini (RZ01-03250100-R3M1)', 1290000, N'mouse', N'RAZER', 2021, 24, 1, N'CH-9301111-AP.png', N'Đen', NULL, NULL, 2290000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'S433EA-AM439T', N'Laptop ASUS Vivobook ( Core i5-1135G7 | 8GB | Intel Iris Xe Graphics | 14")', 19790000, N'laptop', N'ASUS', 2021, 1, 1, N'S433EA-AM439T.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 21790000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'SF314-55G-76FW', N'Laptop Acer Swift 3 ( Core i7-8565U | 8GB | NVIDIA GeForce MX150 2GB | 14")', 33999000, N'laptop', N'Acer', 2021, 2, 0, N'SF314-55G-76FW.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 37999000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'SF315-52-52Z7', N'Laptop Acer Swift 3 ( Core i5-8250U | 4GB | Intel UHD Graphics 620 | 15.6") ', 15999000, N'laptop', N'Acer', 2020, 2, 0, N'SF315-52-52Z7.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 18999000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'SF514-53T-740R', N'Laptop Acer Swift 5 ( Core i7-8565U | 8GB | Intel UHD Graphics 620 | 14")', 27990000, N'laptop', N'Acer', 2019, 2, 1, N'SF514-53T-740R.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 30990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'steelrival3', N'Chuột máy tính Steelseries Rival 3', 940000, N'mouse', N'SteelSeries', 2021, 24, 1, N'steelrival3.png', N'Đen', NULL, NULL, 1040000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'steelrival310', N'Chuột gaming SteelSeries Rival 310 (Đen)', 1299000, N'mouse', N'SteelSeries', 2021, 12, 1, N'steelrival310.png', N'Đen', NULL, NULL, 2299000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'steelrival650', N'Chuột gaming không dây SteelSeries Rival 650 Wireless (Đen)', 2589000, N'mouse', N'SteelSeries', 2021, 12, 1, N'steelrival650.png', N'Đen', NULL, NULL, 3589000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'steelrival710', N'Chuột gaming SteelSeries Rival 710 (Đen)', 2390000, N'mouse', N'SteelSeries', 2021, 12, 1, N'steelrival710.png', N'Đen', NULL, NULL, 3390000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'TC-865', N'PC Acer Aspire TC-865 (DT.BARSV.00A) (i3-9100/4GB/1TB HDD/UHD 630/Endless)', 9690000, N'pc', N'Acer', 2019, 24, 1, N'TC-865.png', N'Đen', NULL, NULL, 10690000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'TNH150', N'Tai nghe On-ear Logitech H150 (Trắng)', 280000, N'headphone', N'Logitech', 2020, 12, 1, N'TNH150.png', N'Trắng', NULL, NULL, 380000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'TNH150X', N'Tai nghe On-ear Logitech H150 (Xanh)', 280000, N'headphone', N'Logitech', 2020, 24, 1, N'TNH150X.png', N'Xanh duong', NULL, NULL, 380000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'UX481FL-BM048T', N'Laptop ASUS ZenBook Duo ( Core i5-10210U | 8GB | NVIDIA GeForce MX250 2GB GDDR5 | 14")', 30990000, N'laptop', N'ASUS', 2020, 1, 1, N'UX481FL-BM048T.png', NULL, NULL, N'Phần mềm Diệt Virus , Microsoft Office chính hãng chỉ từ 50k', 32990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'Ventus-M', N'PC Gaming VENTUS-M', 9990000, N'pc', NULL, 0, 24, 1, N'Ventus-M.png', NULL, NULL, NULL, 1990000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'VG240Y', N'Màn Hình Acer Nitro 23.8 inch VG240Y (1920x1080/IPS/75Hz/1ms/FreeSync)', 4390000, N'screen', N'ACER', 2021, 36, 1, N'VG240Y.png', NULL, NULL, NULL, 5390000)
INSERT [dbo].[Product] ([id], [ten], [gia], [idloai], [thuonghieu], [namsx], [baohanh], [hienthi], [nameimage], [mau], [tinhtrang], [uudai], [giacu]) VALUES (N'VY249HE', N'Màn hình LCD ASUS VY249HE (1920 x 1080/IPS/75Hz/1 ms/FreeSync)', 3490000, N'screen', N'ASUS', 2020, 1, 1, N'VY249HE.png', NULL, NULL, NULL, 4490000)
GO
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'27MK600M-B', 27, N'FHD', N'1920x1080', N'IPS', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'90 (H) / 50 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x HDMI , 1 x VGA/D-sub', N'4.8 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'E1916HV', 18.5, N'HD', N'1366x768', N'LED', 60, N'Màn hình phẳng', N'5ms', N'250 cd/m2', N'90 (H) / 65 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x VGA/D-sub', N'3 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'E2016HV', 19.5, N'HD+', N'1600x900', N'TN LED', 75, N'Màn hình phẳng', N'5ms', N'250 cd/m2', N'170 (H) / 160 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x VGA/D-sub', N'3.02 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'EK241Y', 23.8, N'FHD', N'1920x1080', N'LED', 75, N'Màn hình phẳng', N'4ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x HDMI , 1 x VGA/D-sub', N'4,3 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'HA270', 27, N'FHD', N'1920x1080', N'IPS', 75, N'Màn hình phẳng', N'4ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', N'Màn hình gương', NULL, N'1 x HDMI , 1 x VGA/D-sub', N'5.59 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'K202HQL', 19.5, N'HD+', N'1600x900', N'TN', 60, N'Màn hình phẳng', N'5ms', N'200 cd/m2', N'90 (H) / 65 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x VGA/D-sub', N'2.7 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'LC27R500FHEXXV', 27, N'FHD', N'1920x1080', N'IPS', 60, N'Màn hình phẳng', N'4ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x HDMI , 1 x VGA/D-sub', N'4,3kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'P2219H', 21.5, N'FHD', N'1920x1080', N'IPS', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'90 (H) / 50 (V)', N'16.7 triệu màu', N'Màn hình gương', NULL, N'1 x HDMI , 1 x VGA/D-sub', N'2.2 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'VG240Y', 23.8, N'FHD', N'1920x1080', N'IPS', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', NULL, NULL, N'1 x HDMI , 1 x VGA/D-sub', N'2.0 kg', N'16:9')
INSERT [dbo].[ScreenDetail] ([idProduct], [kichthuoc], [dophangiai], [dophangiaipixel], [tamnen], [tanso], [kieumanhinh], [thoigianphanhoi], [dosang], [gocnhin], [mauhienthi], [bemat], [hdr], [congxuat], [khoiluong], [tile]) VALUES (N'VY249HE', 23.8, N'FHD', N'1920x1080', N'IPS LED', 75, N'Màn hình phẳng', N'1ms', N'250 cd/m2', N'178 (H) / 178 (V)', N'16.7 triệu màu', N'Màn hình chống lóa', NULL, N'1 x HDMI 1.4 , 1 x VGA/D-sub', N'3.38 kg', N'16:9')
GO
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'headphone', N'Tai Nghe')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'keyboard', N'Bàn phím')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'laptop', N'Laptop (Máy tính xách tay)')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'mainboard', N'Mainboard-Bộ vi xử lý')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'mouse', N'Chuột máy tính')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'pc', N'PC (Máy tính để bàn)')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'ram', N'Ram (Bộ nhớ máy tính)')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'screen', N'Màn hình máy tính')
INSERT [dbo].[TypeProduct] ([id], [ten]) VALUES (N'vga', N'Card màn hình')
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([id], [firstname], [lastname], [email], [pass], [sdt], [diachi], [mode], [nameimage]) VALUES (8, N'Hải', N'Tường', N'tuonghai.contact@gmail.com', N'tuonghai2022', N'0777741340', N'20/1H ấp chánh 2', N'ADMIN', N'tuonghaiavatar.png')
INSERT [dbo].[Users] ([id], [firstname], [lastname], [email], [pass], [sdt], [diachi], [mode], [nameimage]) VALUES (9, N'Đạt', N'Quốc', N'quocdat@gmail.com', N'quocdat2021', N'999999999', N'3170/1H ', N'STAFF', N'quocdatavatar.png')
INSERT [dbo].[Users] ([id], [firstname], [lastname], [email], [pass], [sdt], [diachi], [mode], [nameimage]) VALUES (10, N'Thanh', N'Hòa', N'lth.contact@gmail.vn', N'thanhhoa2021', N'01222941261', N'371 Nguyễn Văn Cừ', N'CUSTOMER', N'thanhhoaavatar.png')
INSERT [dbo].[Users] ([id], [firstname], [lastname], [email], [pass], [sdt], [diachi], [mode], [nameimage]) VALUES (11, N'Nguyễn Chí', N'Định', N'chidinh2000.contact@gmail.com', N'chidinh2000', N'01222942673', N'371 Nguyễn Thị Minh Khai', N'CUSTOMER', N'chidinhavatar.png')
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Bill] ADD  DEFAULT (N'Thanh toán khi nhận hàng') FOR [phuongthucthanhtoan]
GO
ALTER TABLE [dbo].[Bill] ADD  DEFAULT (N'Chờ xác nhận') FOR [tinhtrang]
GO
ALTER TABLE [dbo].[CartDetail] ADD  DEFAULT ((1)) FOR [selected]
GO
ALTER TABLE [dbo].[Product] ADD  DEFAULT ((1)) FOR [hienthi]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ('CUSTOMER') FOR [mode]
GO
ALTER TABLE [dbo].[Bill]  WITH CHECK ADD FOREIGN KEY([iduser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[BillDetail]  WITH CHECK ADD FOREIGN KEY([idBill])
REFERENCES [dbo].[Bill] ([id])
GO
ALTER TABLE [dbo].[CartDetail]  WITH CHECK ADD FOREIGN KEY([idUser])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[HeadphoneDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
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
ALTER TABLE [dbo].[MouseDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[PCDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD FOREIGN KEY([idloai])
REFERENCES [dbo].[TypeProduct] ([id])
GO
ALTER TABLE [dbo].[ScreenDetail]  WITH CHECK ADD FOREIGN KEY([idProduct])
REFERENCES [dbo].[Product] ([id])
GO
