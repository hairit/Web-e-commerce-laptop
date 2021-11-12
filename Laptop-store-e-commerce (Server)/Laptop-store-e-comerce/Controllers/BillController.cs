﻿using System;
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
        public async Task<ActionResult<IEnumerable<Bill>>> GetDonHangs()
        {
            return await _context.Bills.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Bill>> GetDonHang(string id)
        {
            var bill = await _context.Bills.Include(bill => bill.BillDetails).FirstOrDefaultAsync(bill => bill.Id == id);

            if (bill == null)
            {
                return NotFound();
            }
            return bill;
        }
        [HttpGet("user={id}")]
        public async Task<ActionResult<List<Bill>>> getBillsByUserID(int id)
        {
            if (!_context.Users.Any(user => user.Id == id)) return BadRequest();
            List<Bill> bills = await _context.Bills.Include(bill => bill.BillDetails).Where(bill => bill.Iduser == id).ToListAsync();
            if (bills.Count == 0) return NotFound();
            else return bills;
        }
        [HttpPut]
        public async Task<ActionResult<Bill>> PutDonHang(Bill donHang)
        {
            if (!DonHangExists(donHang.Id)) return NotFound();
            var oldBill = await _context.Bills.Include(bill => bill.BillDetails).FirstOrDefaultAsync(bill => bill.Id == donHang.Id);
            _context.BillDetails.RemoveRange(oldBill.BillDetails);
            _context.Bills.Remove(oldBill);
            try
            {
                _context.Bills.Add(donHang);
                await _context.SaveChangesAsync();
            }
            catch (Exception) {
                return BadRequest();
            }
            return CreatedAtAction("GetDonHang", new { id = donHang.Id }, donHang);
        }
        [HttpPost]
        public async Task<ActionResult<Bill>> PostDonHang(Bill donHang)
        {
            if (DonHangExists(donHang.Id)) return Conflict();
            try
            {
                _context.Bills.Add(donHang);
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                return BadRequest();
            }
            return CreatedAtAction("GetDonHang", new { id = donHang.Id }, donHang);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bill>> DeleteDonHang(string id)
        {
            var donHang = await _context.Bills.FindAsync(id);
            if (donHang == null)
            {
                return NotFound();
            }
            _context.Bills.Remove(donHang);
            await _context.SaveChangesAsync();

            return donHang;
        }
        private bool DonHangExists(string id)
        {
            return _context.Bills.Any(e => e.Id == id);
        }
    }
}
