using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class MoTaLaptop
    {
        public string Idsanpham { get; set; }
        public string Detailcpu { get; set; }
        public string Detailram { get; set; }
        public string Detailvga { get; set; }
        public string Detailmanhinh { get; set; }
        public string Ocung { get; set; }
        public string Kieukhe { get; set; }
        public string Congxuathinh { get; set; }
        public string Congketnoi { get; set; }
        public string Ketnoikhongday { get; set; }
        public string Hdh { get; set; }
        public string Size { get; set; }
        public string Khoiluong { get; set; }
        public string Pin { get; set; }

        public virtual Product IdsanphamNavigation { get; set; }
    }
}
