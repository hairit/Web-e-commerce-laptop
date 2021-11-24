using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class CartDetail
    {
        public int IdUser { get; set; }
        public string IdProduct { get; set; }
        public int Soluong { get; set; }
        public int Tongtien { get; set; }
        public int Selected { get; set; }

        public virtual Product IdProductNavigation { get; set; }
        public virtual User IdUserNavigation { get; set; }
    }
}
