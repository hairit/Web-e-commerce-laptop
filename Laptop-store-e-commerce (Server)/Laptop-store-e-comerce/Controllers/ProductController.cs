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
    public class ProductController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.Include(pro => pro.LaptopDetail).Include(pro => pro.MoTaLaptop).ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(string id)
        {
            var pro = await _context.Products.Include(pro => pro.LaptopDetail).Include(pro => pro.MoTaLaptop).Where(pro => pro.Id==id).FirstOrDefaultAsync();
            if (pro == null)
            {
                return NotFound();
            }
            return pro;
        }
        [HttpGet("name={name}")]
        public async Task<ActionResult<List<Product>>> getProductByName(string name)
        {
            try
            {
                List<Product> list = null;
                list = await _context.Products.Where(pro => pro.Ten.Contains(name)).ToListAsync();
                if (list.Count == 0) return NotFound();
                else return list;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return BadRequest();
            }
        }
        [HttpGet("type={value}/enable")]
        public async Task<ActionResult<List<Product>>> getProductsToDisPlay(string value)
        {
            try
            {
                return await _context.Products.Where(pro => pro.Idloai == value)
                                              .Where(pro => pro.Hienthi == 1)
                                              .ToListAsync();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(string id, Product pro)
        {
            if (id != pro.Id)
            {
                return BadRequest();
            }
            _context.Entry(pro).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!existID(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        [HttpPost()]
        public async Task<ActionResult<Product>> PostProduct(Product pro)
        {
            if (existID(pro.Id)) return Conflict();
            try{
                _context.Products.Add(pro);
                _context.SaveChangesAsync();
                return CreatedAtAction("GetSanPham",new { id = pro.Id }, pro);
            }
            catch(Exception e) {
                    Console.WriteLine("Errol when add product");
                    return BadRequest();
             }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteSanPham(string id)
        {
            var pro = await _context.Products.FindAsync(id);
            if (pro == null)
            {
                return NotFound();
            }
            if(pro.Idloai == "laptop")
            {
                _context.LaptopDetails.Remove(await _context.LaptopDetails.FindAsync(id));
                _context.MoTaLaptops.Remove(await _context.MoTaLaptops.FindAsync(id));
            }
            if(pro.Idloai == "keyboard")
            {
                _context.KeyboardDetails.Remove(await _context.KeyboardDetails.FindAsync(id));
            }
            _context.Products.Remove(pro);
            await _context.SaveChangesAsync();

            return pro;
        }
        private bool existID(string id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
        private bool existType(string type)
        {
            return _context.LoaiSanPhams.Any(h => h.Id == type);
        }
    }
}
