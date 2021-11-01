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
        private readonly LaptopContext _context;
        public ProductController(LaptopContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SanPham>>> GetSanPhams()
        {
            return await _context.SanPhams.Include(sp =>  sp.ThongSoLaptop).Include(sp => sp.MoTaLaptop).ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<SanPham>> GetSanPham(string id)
        {
            var sanPham = await _context.SanPhams.FindAsync(id);
            if (sanPham == null)
            {
                return NotFound();
            }
            return sanPham;
        }
        [HttpGet("name={name}")]
        public async Task<ActionResult<List<SanPham>>> getProductByName(string name)
        {
            try
            {
                List<SanPham> list = null;
                list = await _context.SanPhams.Where(pro => pro.Ten.Contains(name)).ToListAsync();
                if (list.Count == 0) return NotFound();
                else return list;
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }   
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSanPham(string id, SanPham sanPham)
        {
            if (id != sanPham.Id)
            {
                return BadRequest();
            }
            _context.Entry(sanPham).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SanPhamExists(id))
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
        [HttpPost]
        public async Task<ActionResult<SanPham>> PostSanPham(SanPham sanPham)
        {
            _context.SanPhams.Add(sanPham);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (SanPhamExists(sanPham.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetSanPham", new { id = sanPham.Id }, sanPham);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<SanPham>> DeleteSanPham(string id)
        {
            var sanPham = await _context.SanPhams.FindAsync(id);
            if (sanPham == null)
            {
                return NotFound();
            }

            _context.SanPhams.Remove(sanPham);
            await _context.SaveChangesAsync();

            return sanPham;
        }
        private bool SanPhamExists(string id)
        {
            return _context.SanPhams.Any(e => e.Id == id);
        }
    }
}
// To protect from overposting attacks, enable the specific properties you want to bind to, for
// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
