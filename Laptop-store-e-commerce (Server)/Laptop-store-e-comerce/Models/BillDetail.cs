using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class BillDetail
    {
        public string IdBill { get; set; }
        public string IdProduct { get; set; }
        public int Soluong { get; set; }
        public int Tongtien { get; set; }

        public virtual Bill IdBillNavigation { get; set; }
        public virtual Product IdProductNavigation { get; set; }
    }
}
