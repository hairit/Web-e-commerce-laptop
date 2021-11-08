using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class Product
    {
        public Product()
        {
            ChitietDonHangs = new HashSet<ChitietDonHang>();
            ChitietGioHangs = new HashSet<ChitietGioHang>();
        }

        public string Id { get; set; }
        public string Ten { get; set; }
        public int Gia { get; set; }
        public string Idloai { get; set; }
        public string Thuonghieu { get; set; }
        public int? Namsx { get; set; }
        public int? Baohanh { get; set; }
        public int? Hienthi { get; set; }
        public string Nameimage { get; set; }
        public string Mau { get; set; }

        public virtual TypeProduct IdloaiNavigation { get; set; }
        public virtual KeyboardDetail KeyboardDetail { get; set; }
        public virtual LaptopDescription LaptopDescription { get; set; }
        public virtual LaptopDetail LaptopDetail { get; set; }
        public virtual Pcdetail Pcdetail { get; set; }
        public virtual ScreenDetail ScreenDetail { get; set; }
        public virtual ICollection<ChitietDonHang> ChitietDonHangs { get; set; }
        public virtual ICollection<ChitietGioHang> ChitietGioHangs { get; set; }
    }
}
