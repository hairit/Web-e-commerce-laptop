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
                                                            .Where(pro => pro.LaptopDetail.Manhinh.Contains(value))
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
                                                            .Where(pro => pro.LaptopDetail.Cpu.Contains(value))
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
                                                            .Where(pro => pro.Thuonghieu.Contains(value)).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("ram={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByGB(string value)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.LaptopDetail.Ram.Contains(value))
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
                                                             .Where(pro => pro.LaptopDetail.Vga.Contains(value))
                                                             .ToListAsync();
                if (pros.Count != 0) return pros;
                else return NotFound();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("typelaptop={value}")]
        public async Task<ActionResult<List<Product>>> getLaptopByType(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "laptop")
                                              .Where(pro => pro.LaptopDescription.Typelaptop.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
    }
}
