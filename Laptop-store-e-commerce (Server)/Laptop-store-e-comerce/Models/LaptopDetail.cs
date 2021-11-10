using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class LaptopDetail
    {
        public string IdProduct { get; set; }
        public string Cpu { get; set; }
        public string Ram { get; set; }
        public string Vga { get; set; }
        public string Manhinh { get; set; }

        public virtual Product IdProductNavigation { get; set; }
    }
}
