using System;
using System.Collections.Generic;

#nullable disable

namespace Laptop_store_e_comerce.Models
{
    public partial class TypeProduct
    {
        public TypeProduct()
        {
            Products = new HashSet<Product>();
        }

        public string Id { get; set; }
        public string Ten { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
