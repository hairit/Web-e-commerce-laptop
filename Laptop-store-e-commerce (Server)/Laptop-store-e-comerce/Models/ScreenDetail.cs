using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class ScreenDetail
    {
        public string IdProduct { get; set; }
        public double? Kichthuoc { get; set; }
        public string Dophangiai { get; set; }
        public string Dophangiaipixel { get; set; }
        public string Tamnen { get; set; }
        public int? Tanso { get; set; }
        public string Kieumanhinh { get; set; }
        public string Thoigianphanhoi { get; set; }
        public string Dosang { get; set; }
        public string Gocnhin { get; set; }
        public string Mauhienthi { get; set; }
        public string Bemat { get; set; }
        public string Hdr { get; set; }
        public string Congxuat { get; set; }
        public string Khoiluong { get; set; }
        public string Tile { get; set; }

        public virtual Product IdProductNavigation { get; set; }
    }
}
