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
    public class MouseController : ControllerBase
    {
        private readonly StoreContext database;
        public MouseController(StoreContext context)
        {
            database = context;
        }
        [HttpGet("brand={value}")]
        public async Task<ActionResult<List<Product>>> getMouseByBrand(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "mouse" && pro.Thuonghieu.Contains(value)).ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("led={value}")]
        public async Task<ActionResult<List<Product>>> getMouseByLed(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "mouse" && pro.MouseDetail.Led.Contains(value)).ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("kieuketnoi={value}")]
        public async Task<ActionResult<List<Product>>> getMouseByConnectStyle(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "mouse" && pro.MouseDetail.Kieuketnoi.Contains(value)).ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("ketnoi={value}")]
        public async Task<ActionResult<List<Product>>> getMouseByConnect(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "mouse" && pro.MouseDetail.Ketnoi.Contains(value)).ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("loaichuot={value}")]
        public async Task<ActionResult<List<Product>>> getMouseByLoai(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "mouse" && pro.MouseDetail.Loaichuot.Contains(value)).ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
    }
}
