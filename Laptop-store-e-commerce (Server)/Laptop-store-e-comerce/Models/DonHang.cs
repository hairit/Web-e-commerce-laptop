﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class DonHang
    {
        public DonHang()
        {
            ChitietDonHangs = new HashSet<ChitietDonHang>();
        }

        public int Id { get; set; }
        public int? Iduser { get; set; }
        public int? Tongtien { get; set; }
        public DateTime? Ngaydat { get; set; }
        public DateTime? Ngaytra { get; set; }
        public string Phuongthucthanhtoan { get; set; }
        public string Tinhtrang { get; set; }

        public virtual User IduserNavigation { get; set; }
        public virtual ICollection<ChitietDonHang> ChitietDonHangs { get; set; }
    }
}
