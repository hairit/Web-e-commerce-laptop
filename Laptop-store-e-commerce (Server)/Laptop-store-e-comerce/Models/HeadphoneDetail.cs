using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class HeadphoneDetail
    {
        public string IdProduct { get; set; }
        public string Kieutainghe { get; set; }
        public string Ketnoi { get; set; }
        public string Kieuketnoi { get; set; }
        public string Microphone { get; set; }
        public string Kieupin { get; set; }
        public string Kichthuocdriver { get; set; }
        public string Led { get; set; }
        public string Khoiluong { get; set; }

        public virtual Product IdProductNavigation { get; set; }
    }
}
