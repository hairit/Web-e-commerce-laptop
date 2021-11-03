using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

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
