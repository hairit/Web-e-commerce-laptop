using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class SanPham
    {
        public SanPham()
        {
            ChitietDonHangs = new HashSet<ChitietDonHang>();
            ChitietGioHangs = new HashSet<ChitietGioHang>();
            DetailKeyBoards = new HashSet<DetailKeyBoard>();
        }

        public string Id { get; set; }
        public string Ten { get; set; }
        public int Gia { get; set; }
        public string Idloai { get; set; }
        public string Thuonghieu { get; set; }
        public int Namsx { get; set; }
        public int Baohanh { get; set; }
        public int Hienthi { get; set; }
        public string Nameimage { get; set; }

        public virtual LoaiSanPham IdloaiNavigation { get; set; }
        public virtual MoTaLaptop MoTaLaptop { get; set; }
        public virtual ThongSoLaptop ThongSoLaptop { get; set; }
        public virtual ICollection<ChitietDonHang> ChitietDonHangs { get; set; }
        public virtual ICollection<ChitietGioHang> ChitietGioHangs { get; set; }
        public virtual ICollection<DetailKeyBoard> DetailKeyBoards { get; set; }
    }
}
