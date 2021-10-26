using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class GioHang
    {
        public GioHang()
        {
            ChitietGioHangs = new HashSet<ChitietGioHang>();
        }

        public int Id { get; set; }
        public int? Iduser { get; set; }

        public virtual User IduserNavigation { get; set; }
        public virtual ICollection<ChitietGioHang> ChitietGioHangs { get; set; }
    }
}
