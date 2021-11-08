using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class User
    {
        public User()
        {
            DonHangs = new HashSet<DonHang>();
            GioHangs = new HashSet<GioHang>();
        }

        public int Id { get; set; }
        public string Nameuser { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }
        public string Sdt { get; set; }
        public string Diachi { get; set; }
        public string Position { get; set; }
        public string Nameimage { get; set; }

        public virtual ICollection<DonHang> DonHangs { get; set; }
        public virtual ICollection<GioHang> GioHangs { get; set; }
    }
}
