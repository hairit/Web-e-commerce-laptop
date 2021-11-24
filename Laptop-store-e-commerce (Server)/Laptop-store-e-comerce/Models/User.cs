using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class User
    {
        public User()
        {
            Bills = new HashSet<Bill>();
            CartDetails = new HashSet<CartDetail>();
        }

        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }
        public string Sdt { get; set; }
        public string Diachi { get; set; }
        public string Mode { get; set; }
        public string Nameimage { get; set; }

        public virtual ICollection<Bill> Bills { get; set; }
        public virtual ICollection<CartDetail> CartDetails { get; set; }
    }
}
