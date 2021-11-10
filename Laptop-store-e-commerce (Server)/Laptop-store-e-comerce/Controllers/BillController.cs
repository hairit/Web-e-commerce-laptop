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
    public class BillController : ControllerBase
    {
        private readonly StoreContext _context;

        public BillController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DonHang>>> GetDonHangs()
        {
            return await _context.DonHangs.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<DonHang>> GetDonHang(string id)
        {
            var donHang = await _context.DonHangs.FindAsync(id);

            if (donHang == null)
            {
                return NotFound();
            }
            return donHang;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDonHang(string id, DonHang donHang)
        {
            if (id != donHang.Id)
            {
                return BadRequest();
            }
            _context.Entry(donHang).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DonHangExists(id))
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
        public async Task<ActionResult<DonHang>> PostDonHang(DonHang donHang)
        {
            if (DonHangExists(donHang.Id)) return Conflict();
            _context.DonHangs.Add(donHang);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return BadRequest();
            }
            return CreatedAtAction("GetDonHang", new { id = donHang.Id }, donHang);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<DonHang>> DeleteDonHang(string id)
        {
            var donHang = await _context.DonHangs.FindAsync(id);
            if (donHang == null)
            {
                return NotFound();
            }
            _context.DonHangs.Remove(donHang);
            await _context.SaveChangesAsync();

            return donHang;
        }
        private bool DonHangExists(string id)
        {
            return _context.DonHangs.Any(e => e.Id == id);
        }
    }
}
