using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class LoaiSanPham
    {
        public LoaiSanPham()
        {
            SanPhams = new HashSet<SanPham>();
        }

        public string Id { get; set; }
        public string Ten { get; set; }

        public virtual ICollection<SanPham> SanPhams { get; set; }
    }
}
