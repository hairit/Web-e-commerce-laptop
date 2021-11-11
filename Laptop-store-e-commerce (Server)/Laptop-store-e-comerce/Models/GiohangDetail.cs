﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class GioHangDetail
    {
        public string Id { get; set; }
        public string IdGioHang { get; set; }
        public string IdProduct { get; set; }
        public int Soluong { get; set; }
        public int Tongtien { get; set; }

        public virtual GioHang IdGioHangNavigation { get; set; }
        public virtual Product IdProductNavigation { get; set; }
    }
}
