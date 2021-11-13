using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class Bill
    {
        public Bill()
        {
            BillDetails = new HashSet<BillDetail>();
        }

        public string Id { get; set; }
        public int Iduser { get; set; }
        public int Tongtien { get; set; }
        public DateTime Ngaydat { get; set; }
        public string Diachinhan { get; set; }
        public string Phuongthucthanhtoan { get; set; }
        public string Tinhtrang { get; set; }

        public virtual User IduserNavigation { get; set; }
        public virtual ICollection<BillDetail> BillDetails { get; set; }
    }
}
