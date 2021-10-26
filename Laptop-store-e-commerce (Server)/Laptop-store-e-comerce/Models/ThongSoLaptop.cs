using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class ThongSoLaptop
    {
        public string Idsanpham { get; set; }
        public string Cpu { get; set; }
        public string Ram { get; set; }
        public string Vga { get; set; }
        public string Manhinh { get; set; }

        public virtual SanPham IdsanphamNavigation { get; set; }
    }
}
