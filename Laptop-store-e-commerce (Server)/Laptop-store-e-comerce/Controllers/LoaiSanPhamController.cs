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
    [Route("data/typeproduct")]
    [ApiController]
    public class LoaiSanPhamController : ControllerBase
    {
        private readonly StoreContext _context;

        public LoaiSanPhamController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LoaiSanPham>>> GetLoaiSanPhams()
        {
            return await _context.LoaiSanPhams.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<LoaiSanPham>> GetLoaiSanPham(string id)
        {
            var loaiSanPham = await _context.LoaiSanPhams.FindAsync(id);
            if (loaiSanPham == null)
            {
                return NotFound();
            }
            return loaiSanPham;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLoaiSanPham(string id, LoaiSanPham loaiSanPham)
        {
            if (id != loaiSanPham.Id)
            {
                return BadRequest();
            }

            _context.Entry(loaiSanPham).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LoaiSanPhamExists(id))
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
        public async Task<ActionResult<LoaiSanPham>> PostLoaiSanPham(LoaiSanPham loaiSanPham)
        {
            _context.LoaiSanPhams.Add(loaiSanPham);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LoaiSanPhamExists(loaiSanPham.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetLoaiSanPham", new { id = loaiSanPham.Id }, loaiSanPham);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<LoaiSanPham>> DeleteLoaiSanPham(string id)
        {
            var loaiSanPham = await _context.LoaiSanPhams.FindAsync(id);
            if (loaiSanPham == null)
            {
                return NotFound();
            }
            _context.LoaiSanPhams.Remove(loaiSanPham);
            await _context.SaveChangesAsync();

            return loaiSanPham;
        }
        private bool LoaiSanPhamExists(string id)
        {
            return _context.LoaiSanPhams.Any(e => e.Id == id);
        }
    }
}
