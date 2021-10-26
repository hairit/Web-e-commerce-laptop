using System;
using System.Collections.Generic;

#nullable disable

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
