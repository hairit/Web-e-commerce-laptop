using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class ChitietDonHang
    {
        public int Id { get; set; }
        public int? Iddonhang { get; set; }
        public string Idsanpham { get; set; }
        public int? Soluong { get; set; }
        public int? Tongtien { get; set; }

        public virtual DonHang IddonhangNavigation { get; set; }
        public virtual SanPham IdsanphamNavigation { get; set; }
    }
}
