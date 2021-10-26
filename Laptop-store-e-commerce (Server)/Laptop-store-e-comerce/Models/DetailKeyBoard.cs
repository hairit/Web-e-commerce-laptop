using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class DetailKeyBoard
    {
        public int Id { get; set; }
        public string Idsanpham { get; set; }
        public string Ketnoi { get; set; }
        public string Loai { get; set; }
        public string Den { get; set; }
        public string Switch { get; set; }
        public string Phimchucnang { get; set; }
        public string Size { get; set; }

        public virtual SanPham IdsanphamNavigation { get; set; }
    }
}
