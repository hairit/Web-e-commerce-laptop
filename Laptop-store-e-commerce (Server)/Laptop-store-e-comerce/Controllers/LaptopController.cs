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
        private readonly StoreContext database;

        public LaptopController(StoreContext context)
        {
            database = context;
        }
       
        [HttpGet("manhinh={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByScreen(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.LaptopDetail.Manhinh == value)
                                                            .ToListAsync();
                if (pros.Count == 0) return NotFound();
                return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("cpu={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByCpu(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.LaptopDetail.Cpu == value)
                                                            .ToListAsync();
                if (pros.Count == 0) return NotFound();
                return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("name={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByName(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.Ten.Contains(value))
                                                            .ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("brand={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByBrand(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.Thuonghieu == value).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("gb={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByGB(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.LaptopDetail.Ram == value)
                                                            .ToListAsync();
                if (pros.Count != 0) return pros;
                else return NotFound();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("vga={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByVGA(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                             .Where(pro => pro.LaptopDetail.Vga == value)
                                                             .ToListAsync();
                if (pros.Count != 0) return pros;
                else return NotFound();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
    }
}
