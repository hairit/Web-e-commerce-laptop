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
        public async Task<ActionResult<IEnumerable<Bill>>> GetDonHangs()
        {
            return await _context.Bills.Include(bill => bill.BillDetails).ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Bill>> GetDonHang(string id)
        {
            var bill = await _context.Bills.Include(bill => bill.BillDetails)
                                           .FirstOrDefaultAsync(bill => bill.Id == id);
            if (bill == null)
            {
                return NotFound();
            }
            return bill;
        }
        [HttpGet("action={action}/{id}")]
        public async Task<ActionResult<Bill>> ActionBill(string action,string id)
        {
            var bill = await _context.Bills.Include(bill => bill.BillDetails).FirstOrDefaultAsync(bill => bill.Id == id);
            if (bill == null) return NotFound();
            if(action == "accept")
            {
                  bill.Tinhtrang = "Đã duyệt";
                  try
                  {
                        _context.Entry(bill).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        return NoContent();
                  }catch (Exception) { return BadRequest(); }
            }
            if (action == "cancel")
            {
                List<CartDetail> carts = new List<CartDetail>();
                bill.BillDetails.ToList().ForEach(item =>
                {
                    CartDetail cart = new CartDetail();
                    cart.IdUser = bill.Iduser;
                    cart.Tongtien = item.Tongtien;
                    cart.IdProduct = item.IdProduct;
                    cart.Soluong = item.Soluong;
                    cart.Selected = 1;
                    carts.Add(cart);
                });
                try
                {
                    _context.CartDetails.AddRange(carts);
                    _context.BillDetails.RemoveRange(bill.BillDetails);
                    _context.Bills.Remove(bill);
                    await _context.SaveChangesAsync();
                    return NoContent();
                } catch (Exception) { return BadRequest(); }
            }
            return bill;
        }
        [HttpGet("action={action}/billdetail/idbill={value1}/idproduct={value2}")]
        public async Task<ActionResult<Object>> addABillDetail (String action,String value1,String value2)
        {
            var billDetail = await _context.BillDetails.FirstOrDefaultAsync(detail => detail.IdBill == value1 && detail.IdProduct == value2);
            if (billDetail == null) return NotFound();

            var product = await _context.Products.FindAsync(value2);
            if (product == null) return BadRequest();

            var bill = await _context.Bills.FindAsync(value1);
            if(action == "increase")
            {
                billDetail.Soluong += 1;
                billDetail.Tongtien += product.Gia;
                bill.Tongtien += product.Gia;
            }
            if(action == "decrease")
            {
                billDetail.Soluong -= 1;
                billDetail.Tongtien -= product.Gia;
                bill.Tongtien -= product.Gia;
            }
            if(action == "delete")
            {
                CartDetail restore = new CartDetail();
                restore.IdUser = bill.Iduser;
                restore.IdProduct = product.Id;
                restore.Selected = 1;
                restore.Soluong = billDetail.Soluong;
                restore.Tongtien = billDetail.Tongtien;
                _context.CartDetails.Add(restore);
                _context.BillDetails.Remove(billDetail);
            }
            try
            {
                await _context.SaveChangesAsync();

            }catch(Exception) {return BadRequest();
            }
            return NoContent();
        }
        [HttpGet("iduser={id}")]
        public async Task<ActionResult<List<Bill>>> getBillsByUserID(int id)
        {
            if (!_context.Users.Any(user => user.Id == id)) return BadRequest();
            List<Bill> bills = await _context.Bills.Include(bill => bill.BillDetails).Include(bill => bill.IduserNavigation).Where(bill => bill.Iduser == id).ToListAsync();
            if (bills.Count == 0) return NotFound();
            else return bills;
        }
        [HttpPut]
        public async Task<ActionResult<Bill>> PutDonHang(Bill donHang)
        {
            if (!DonHangExists(donHang.Id)) return NotFound();
            var oldBill = await _context.Bills.Include(bill => bill.BillDetails)
                .FirstOrDefaultAsync(bill => bill.Id == donHang.Id);
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
            try{
                _context.Bills.Add(donHang);
                var cartOrders = await _context.CartDetails.Where(detail => detail.IdUser == donHang.Iduser && detail.Selected == 1).ToListAsync();
                _context.CartDetails.RemoveRange(cartOrders);
                await _context.SaveChangesAsync();}
            catch (Exception)
            {throw;}
            return CreatedAtAction("GetDonHang", new { id = donHang.Id }, donHang);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bill>> DeleteDonHang(string id)
        {
            var bill = await _context.Bills.FindAsync(id);
            if (bill == null) return NotFound();
            else
            {
                var listBillDetail = await _context.BillDetails.Where(billDetail => billDetail.IdBill == id).ToListAsync();
                try
                {
                    _context.BillDetails.RemoveRange(listBillDetail);
                    _context.Bills.Remove(bill);
                    await _context.SaveChangesAsync();
                }
                catch(Exception) { return BadRequest(); }
            }
            return bill;
        }
        private bool DonHangExists(string id)
        {
            return _context.Bills.Any(e => e.Id == id);
        }
    }
}
