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
    [Route("api/[controller]")]
    [ApiController]
    public class HeadphoneController : ControllerBase
    {
        private readonly StoreContext database;
        public HeadphoneController(StoreContext context)
        {
            database = context;
        }
        [HttpGet("brand={value}")]
        public async Task<ActionResult<List<Product>>> getHeadphoneByBrand(string value)
        {
            List<Product> pros = await database.Products.Where(pro => pro.Idloai == "headphone" && pro.Thuonghieu.Contains(value))
                                        .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("kieutainghe={value}")]
        public async Task<ActionResult<List<Product>>> getHeadphoneByStyle(string value)
        {
            List<Product> pros = await database.Products.Where(pro => pro.Idloai == "headphone" && pro.HeadphoneDetail.Kieutainghe.Contains(value))
                                        .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("ketnoi={value}")]
        public async Task<ActionResult<List<Product>>> getHeadphoneByConnect(string value)
        {
            List<Product> pros = await database.Products.Where(pro => pro.Idloai == "headphone" && pro.HeadphoneDetail.Ketnoi.Contains(value))
                                        .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("kieuketnoi={value}")]
        public async Task<ActionResult<List<Product>>> getHeadphoneByConnectStyle(string value)
        {
            List<Product> pros = await database.Products.Where(pro => pro.Idloai == "headphone" && pro.HeadphoneDetail.Kieuketnoi.Contains(value))
                                        .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        private bool ProductExists(string id)
        {
            return database.Products.Any(e => e.Id == id);
        }
    }
}
