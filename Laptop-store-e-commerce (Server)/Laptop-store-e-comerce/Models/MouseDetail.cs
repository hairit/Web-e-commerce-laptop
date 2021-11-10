using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class MouseDetail
    {
        public string IdProduct { get; set; }
        public string Kieuketnoi { get; set; }
        public string Led { get; set; }
        public string Ketnoi { get; set; }
        public string Dophangiai { get; set; }
        public string Thoigianphanhoi { get; set; }
        public string Dangcambien { get; set; }
        public string Kichthuoc { get; set; }
        public string Khoiluong { get; set; }
        public int? Sonutbam { get; set; }
        public string Tencambien { get; set; }
        public string Loaichuot { get; set; }

        public virtual Product IdProductNavigation { get; set; }
    }
}
