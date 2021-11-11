using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class GioHang
    {
        public GioHang()
        {
            GioHangDetails = new HashSet<GioHangDetail>();
        }

        public string Id { get; set; }
        public int Iduser { get; set; }

        public virtual User IduserNavigation { get; set; }
        public virtual ICollection<GioHangDetail> GioHangDetails { get; set; }
    }
}
