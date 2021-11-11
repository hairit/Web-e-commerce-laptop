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
            var bill = await _context.DonHangs.Include(bill => bill.DonHangDetails).FirstOrDefaultAsync(bill => bill.Id == id);

            if (bill == null)
            {
                return NotFound();
            }
            return bill;
        }
        [HttpPut]
        public async Task<ActionResult<DonHang>> PutDonHang(DonHang donHang)
        {
            try
            {
                //_context.Entry(donHang).State = EntityState.Modified;
                ICollection<DonHangDetail> list = await _context.DonHangDetails.Where(a => a.IdDonHang == donHang.Id).ToListAsync();
                _context.DonHangDetails.RemoveRange(list);
                await _context.SaveChangesAsync();
                _context.DonHangs.Remove(await _context.DonHangs.FindAsync(donHang.Id));
                await _context.SaveChangesAsync();
                _context.DonHangs.Add(donHang);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (!DonHangExists(donHang.Id))
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }
            return CreatedAtAction("GetDonHang", new { id = donHang.Id }, donHang);
        }
        [HttpPost]
        public async Task<ActionResult<DonHang>> PostDonHang(DonHang donHang)
        {
            if (DonHangExists(donHang.Id)) return Conflict();
            try
            {
                _context.DonHangs.Add(donHang);
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
