using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class GioHang
    {
        public GioHang()
        {
            GiohangDetails = new HashSet<GiohangDetail>();
        }

        public string Id { get; set; }
        public int Iduser { get; set; }

        public virtual User IduserNavigation { get; set; }
        public virtual ICollection<GiohangDetail> GiohangDetails { get; set; }
    }
}
