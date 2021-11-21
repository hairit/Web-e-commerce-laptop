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
    public class PCController : ControllerBase
    {
        private readonly StoreContext database;

        public PCController(StoreContext _context)
        {
            database = _context;
        }
        [HttpGet("brand={value}")]
        public async Task<ActionResult<List<Product>>> getPCByBrand(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Thuonghieu.Contains(value))
                                               .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("typepc={value}")]
        public async Task<ActionResult<List<Product>>> getPCByType(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Pcdetail.Typepc.Contains(value))
                                                .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
            return pros;
        }
        [HttpGet("cpu={value}")]
        public async Task<ActionResult<List<Product>>> getPCByCPU(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && (pro.Pcdetail.Cpu.Contains(value)|| pro.Pcdetail.Detailcpu.Contains(value)))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("mainboard={value}")]
        public async Task<ActionResult<List<Product>>> getPCByMainboard(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Pcdetail.Mainboard.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("ram={value}")]
        public async Task<ActionResult<List<Product>>> getPCByRam(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Pcdetail.Ram.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("cputype={value}")]
        public async Task<ActionResult<List<Product>>> getPCByTypeCPU(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Pcdetail.Cputype.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("vgatype={value}")]
        public async Task<ActionResult<List<Product>>> getPCByTypeVGA(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Pcdetail.Vgatype.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
        [HttpGet("vganame={value}")]
        public async Task<ActionResult<List<Product>>> getPCByVGAName(string value)
        {
            var pros = await database.Products.Where(pro => pro.Idloai == "pc" && pro.Pcdetail.Vganame.Contains(value))
                                              .ToListAsync();
            if (pros.Count == 0) return NotFound();
            else return pros;
        }
    }
}
