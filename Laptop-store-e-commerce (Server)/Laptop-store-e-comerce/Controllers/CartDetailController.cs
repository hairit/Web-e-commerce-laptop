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
    public class CartDetailController : ControllerBase
    {
        private readonly StoreContext _context;

        public CartDetailController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CartDetail>>> GetCardDetails()
        {
            return await _context.CartDetails.ToListAsync();
        }
        [HttpGet("iduser={value1}/idproduct={value2}")]
        public async Task<ActionResult<CartDetail>> GetCardDetail(int value1 , string value2)
        {
            var cartDetail = await _context.CartDetails.Where(detail => detail.IdUser == value1 && detail.IdProduct == value2)
                                                       .FirstOrDefaultAsync();      
            if (cartDetail == null)
            {
                return NotFound();
            }
            return cartDetail;
        }
        [HttpGet("iduser={id}")]
        public async Task<ActionResult<List<CartDetail>>> getCardDetailsByUser(int id)
        {
            if (!_context.Users.Any(user => user.Id == id)) return BadRequest();
            List<CartDetail> listCardDetails= await _context.CartDetails.Where(cardDetail => cardDetail.IdUser == id)
                                                                        .ToListAsync();
            if (listCardDetails.Count == 0) return NotFound();
            else return listCardDetails;
        }
        [HttpGet("iduser={id}/selected")]
        public async Task<ActionResult<List<CartDetail>>> getSelectedCardDetailsByUser(int id)
        {
            if (!CartDetailsUserExist(id)) return NotFound();
            var list = await _context.CartDetails.Where(c => c.IdUser == id && c.Selected == 1).ToListAsync();
            if (list.Count == 0) return NotFound();
            else return list;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCardDetail(int id, CartDetail cardDetail)
        {
            if (id != cardDetail.IdUser)
            {
                return BadRequest();
            }
            _context.Entry(cardDetail).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CartDetailsUserExist(id))
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
        [HttpGet("action={action}/iduser={value1}/idproduct={value2}/tongtien={value3}")]
        public async Task<ActionResult<CartDetail>> PostCardDetail(string action,int value1 , string value2 , int value3)
        {
            if (action == "add")
            {
                if (CartDetailItemExist(value1, value2))
                {
                    var newCard = await _context.CartDetails.Where(detail => detail.IdUser == value1 && detail.IdProduct == value2).FirstOrDefaultAsync();
                    if (newCard == null) return NotFound();
                    newCard.Soluong += 1;
                    //Product pro = await _context.Products.FindAsync(value2);
                    //newCard.Tongtien += pro.Gia;
                    newCard.Tongtien += value3;
                    _context.Entry(newCard).State = EntityState.Modified;
                    try
                    {
                        await _context.SaveChangesAsync();
                    } catch (Exception) { return BadRequest(); }
                    return CreatedAtAction("GetCardDetail", new { value1 = value1, value2 = value2 }, newCard);
                }
                else
                {
                    //Product pro = await _context.Products.FindAsync(value2);
                    CartDetail newCard = new CartDetail();
                    newCard.IdUser = value1;
                    newCard.IdProduct = value2;
                    newCard.Tongtien = value3;
                    newCard.Soluong = 1;
                    //newCard.Tongtien = pro.Gia;
                    _context.CartDetails.Add(newCard);
                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (Exception)
                    { return BadRequest(); }
                    return CreatedAtAction("GetCardDetail", new { value1 = value1, value2 = value2 }, newCard);
                }
            }
            else
            {
                var newCard = await _context.CartDetails.Where(detail => detail.IdUser == value1 && detail.IdProduct == value2).FirstOrDefaultAsync();
                if (newCard == null) return NotFound();
                newCard.Soluong -= 1;
                //Product pro = await _context.Products.FindAsync(value2);
                //newCard.Tongtien += pro.Gia;
                newCard.Tongtien -= value3;
                _context.Entry(newCard).State = EntityState.Modified;
                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (Exception) { return BadRequest(); }
                return CreatedAtAction("GetCardDetail", new { value1 = value1, value2 = value2 }, newCard);
            }
        }
        [HttpGet("select={select}/iduser={value1}/idproduct={value2}")]
        public async Task<ActionResult<CartDetail>> selectCardItem(string select, int value1 , string value2)
        {
            var card = await _context.CartDetails.FirstOrDefaultAsync(c => c.IdUser == value1 && c.IdProduct == value2);
            if (card == null) return NotFound();
            else{
                    if (select == "selected") card.Selected = 1;
                    else card.Selected = 0;
                    try
                    {
                        _context.Entry(card).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                    }
                    catch (Exception)
                    {
                        return BadRequest();
                    }
                    return card;
            }
        }
        
        [HttpDelete("iduser={value1}/idproduct={value2}")]
        public async Task<ActionResult<CartDetail>> DeleteCardDetail(int value1 , string value2)
        {
            var cardDetail = await _context.CartDetails.FirstOrDefaultAsync(detail => detail.IdUser == value1 && detail.IdProduct == value2);
            if (cardDetail == null)
            {
                return NotFound();
            }
            _context.CartDetails.Remove(cardDetail);
            await _context.SaveChangesAsync();
            return cardDetail;
        }
        private bool CartDetailsUserExist(int id)
        {
            return _context.CartDetails.Any(e => e.IdUser == id);
        }
        private bool CartDetailItemExist(int a ,string b)
        {
            return _context.CartDetails.Any(e => e.IdUser == a && e.IdProduct == b);
        }
    }
}
