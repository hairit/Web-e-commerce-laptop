using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class Product
    {
        public Product()
        {
            BillDetails = new HashSet<BillDetail>();
            CartDetails = new HashSet<CartDetail>();
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
        public string Tinhtrang { get; set; }
        public string Uudai { get; set; }
        public int? Giacu { get; set; }

        public virtual TypeProduct IdloaiNavigation { get; set; }
        public virtual KeyboardDetail KeyboardDetail { get; set; }
        public virtual LaptopDescription LaptopDescription { get; set; }
        public virtual LaptopDetail LaptopDetail { get; set; }
        public virtual MouseDetail MouseDetail { get; set; }
        public virtual Pcdetail Pcdetail { get; set; }
        public virtual ScreenDetail ScreenDetail { get; set; }
        public virtual ICollection<BillDetail> BillDetails { get; set; }
        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
