using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class Image
    {
        public int Id { get; set; }
        public string NameImage { get; set; }
        public string TypeImage { get; set; }
        public string Position { get; set; }
        public string Path { get; set; }
    }
}
