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
            Bills = new HashSet<Bill>();
            Cards = new HashSet<Card>();
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
        public virtual ICollection<Card> Cards { get; set; }
    }
}
