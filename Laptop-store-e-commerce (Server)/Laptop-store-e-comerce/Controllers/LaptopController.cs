using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Laptop_store_e_comerce.Models;

namespace Laptop_store_e_comerce.Controllers
{
    [Route("data/[controller]")]
    [ApiController]
    public class LaptopController : ControllerBase
    {
        private readonly LaptopContext database;

        public LaptopController(LaptopContext context)
        {
            database = context;
        }
        [HttpGet()]
        public async Task<ActionResult<List<SanPham>>> getAllLaptop()
        {
            try{
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop").Include(pro => pro.ThongSoLaptop).Include(pro => pro.MoTaLaptop).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch(Exception e) { return BadRequest();}
        }
        [HttpGet("enable")]
        public async Task<ActionResult<List<SanPham>>> getEnableLaptop()
        {
            return await database.SanPhams.Where(pro => pro.Idloai == "Laptop")
                                          .Include(pro => pro.ThongSoLaptop).Include(pro => pro.MoTaLaptop)
                                          .Where(pro => pro.Hienthi == 1)
                                          .ToListAsync();
        }
        [HttpGet("name={name}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByName(string name)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.Ten.Contains(name))
                                                            .Include(pro => pro.ThongSoLaptop)
                                                            .Include(pro => pro.MoTaLaptop)
                                                            .ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }catch(Exception e) { return BadRequest(); }
        }
        [HttpGet("brand={brand}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByBrand(string brand)
        {
            try
            {
                List<SanPham> list = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                            .Include(pro => pro.ThongSoLaptop)
                                                            .Include(pro => pro.MoTaLaptop)
                                                            .Where(pro => pro.Thuonghieu == brand).ToListAsync();
                if (list.Count == 0) return NotFound();
                else return list;
            }
            catch (Exception e) { return BadRequest(); }
        }
    }
}
