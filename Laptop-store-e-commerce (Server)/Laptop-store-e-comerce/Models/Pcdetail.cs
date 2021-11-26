using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class Pcdetail
    {
        public string IdProduct { get; set; }
        public string Typepc { get; set; }
        public string Mainboard { get; set; }
        public string Cputype { get; set; }
        public string Cpu { get; set; }
        public string Detailcpu { get; set; }
        public string Ram { get; set; }
        public string Detailram { get; set; }
        public string Vgatype { get; set; }
        public string Vganame { get; set; }
        public string Psu { get; set; }
        public string Casepc { get; set; }
        public string Cool { get; set; }

        public virtual Product IdProductNavigation { get; set; }
    }
}
