using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class LaptopDetail
    {
        public string Idsanpham { get; set; }
        public string Cpu { get; set; }
        public string Ram { get; set; }
        public string Vga { get; set; }
        public string Manhinh { get; set; }

        public virtual SanPham IdsanphamNavigation { get; set; }
    }
}
