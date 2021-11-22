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
    public class KeyboardController : ControllerBase
    {
        private readonly StoreContext database;
        public KeyboardController(StoreContext context)
        {
            database = context;
        }
        [HttpGet("brand={value}")]
        public async Task<ActionResult<List<Product>>> getKeyboardByBrand(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "keyboard" && pro.Thuonghieu.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("ketnoi={value}")]
        public async Task<ActionResult<List<Product>>> getKeyboardByConnect(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "keyboard" && pro.KeyboardDetail.Ketnoi.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("loai={value}")]
        public async Task<ActionResult<List<Product>>> getKeyboardByLoai(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "keyboard" && pro.KeyboardDetail.Loai.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("led={value}")]
        public async Task<ActionResult<List<Product>>> getKeyboardByLed(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "keyboard" && pro.KeyboardDetail.Den.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("brandswitch={value}")]
        public async Task<ActionResult<List<Product>>> getKeyboardByBrandSwitch(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "keyboard" && pro.KeyboardDetail.Brandswitch.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("layout={value}")]
        public async Task<ActionResult<List<Product>>> getKeyboardByLayout(int value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "keyboard" && pro.KeyboardDetail.Layout == value)
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
    }
}
