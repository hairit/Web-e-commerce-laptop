using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Laptop_store_e_comerce.Models
{
    public class LaptopDetail
    {
        private ThongSoLaptop inf;
        private MoTaLaptop des;
        LaptopDetail(ThongSoLaptop inf ,MoTaLaptop des)
        {
            this.Inf = inf;
            this.Des = des;
        }

        public ThongSoLaptop Inf { get => inf; set => inf = value; }
        public MoTaLaptop Des { get => des; set => des = value; }
    }
}
