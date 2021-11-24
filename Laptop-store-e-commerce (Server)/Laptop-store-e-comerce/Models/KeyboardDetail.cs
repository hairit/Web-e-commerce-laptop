using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class KeyboardDetail
    {
        public string IdProduct { get; set; }
        public string Ketnoi { get; set; }
        public string Loai { get; set; }
        public string Den { get; set; }
        public string Motaden { get; set; }
        public string Brandswitch { get; set; }
        public string Typeswitch { get; set; }
        public string Motaswitch { get; set; }
        public int? Layout { get; set; }
        public string Size { get; set; }

        public virtual Product IdProductNavigation { get; set; }
    }
}
