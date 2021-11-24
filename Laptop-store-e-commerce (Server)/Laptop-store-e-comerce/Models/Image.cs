using System;
using System.Collections.Generic;

#nullable disable

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
