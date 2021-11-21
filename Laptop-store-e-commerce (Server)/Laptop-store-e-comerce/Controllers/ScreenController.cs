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
    public class ScreenController : ControllerBase
    {
        private readonly StoreContext database;
        public ScreenController(StoreContext context)
        {
            database = context;
        }
        [HttpGet("screen={value}")]
        public async Task<ActionResult<List<Product>>> getScreenByBrand(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && pro.Thuonghieu == value)
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("kichthuoc={value}")]
        public async Task<ActionResult<List<Product>>> getScreenBySizeString(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && pro.ScreenDetail.Kichthuoc.ToString() == value)
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("kichthuoc=from={value1}to={value2}")]
        public async Task<ActionResult<List<Product>>> getScreenBySizeInt(int value1 , int value2)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && 
                                                        value2 == 999 ?
                                                        pro.ScreenDetail.Kichthuoc >= value1 && pro.ScreenDetail.Kichthuoc <= value2
                                                        :
                                                        pro.ScreenDetail.Kichthuoc >= value1
                                                        )
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("dophangiai={value}")]
        public async Task<ActionResult<List<Product>>> getScreenByDoPhanGiai(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && pro.ScreenDetail.Dophangiai.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("tamnen={value}")]
        public async Task<ActionResult<List<Product>>> getScreenByTamNen(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && pro.ScreenDetail.Tamnen.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("tanso={value}")]
        public async Task<ActionResult<List<Product>>> getScreenByTanSo(int value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && pro.ScreenDetail.Tanso == value)
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("kieumanhinh={value}")]
        public async Task<ActionResult<List<Product>>> getScreenByType(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "screen" && pro.ScreenDetail.Kieumanhinh.Contains(value))
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
