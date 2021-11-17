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
    public class CardDetailController : ControllerBase
    {
        private readonly StoreContext _context;

        public CardDetailController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CardDetail>>> GetCardDetails()
        {
            return await _context.CardDetails.ToListAsync();
        }
        [HttpGet("iduser={value1}/idproduct={value2}")]
        public async Task<ActionResult<CardDetail>> GetCardDetail(int value1 , string value2)
        {
            var cardDetail = await _context.CardDetails.Include(detail => detail.IdProductNavigation).ThenInclude(pro => pro.IdloaiNavigation)
                                                       .Where(detail => detail.IdUser == value1 && detail.IdProduct == value2)
                                                       .FirstOrDefaultAsync();      
            
            if (cardDetail == null)
            {
                return NotFound();
            }
            return cardDetail;
        }
        [HttpGet("iduser={id}")]
        public async Task<ActionResult<List<CardDetail>>> getCardDetailsByUser(int id)
        {
            if (!_context.Users.Any(user => user.Id == id)) return BadRequest();
            List<CardDetail> listCardDetails= await _context.CardDetails.Include(detail => detail.IdProductNavigation)
                                                                        .ThenInclude(detail => detail.IdloaiNavigation)
                                                                        .Where(cardDetail => cardDetail.IdUser == id)
                                                         .ToListAsync();
            if (listCardDetails.Count == 0) return NotFound();
            else return listCardDetails;
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCardDetail(int id, CardDetail cardDetail)
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
                if (!CardDetailExists(id))
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
        public async Task<ActionResult<CardDetail>> PostCardDetail(string action ,int value1 , string value2 , int value3)
        {
            if(action == "add")
            {
                if (existCardDetail(value1, value2))
                {
                    var newCard = await _context.CardDetails.Where(detail => detail.IdUser == value1 && detail.IdProduct == value2).FirstOrDefaultAsync();
                    if (newCard == null) return NotFound();
                    newCard.Soluong += 1;
                    //Product pro = await _context.Products.FindAsync(value2);
                    //newCard.Tongtien += pro.Gia;
                    newCard.Tongtien += value3;
                    _context.Entry(newCard).State = EntityState.Modified;
                    try
                    {
                        await _context.SaveChangesAsync();
                    }
                    catch (Exception) { return BadRequest(); }
                    return CreatedAtAction("GetCardDetail", new { value1 = value1, value2 = value2 }, newCard);
                }
                else
                {
                    //Product pro = await _context.Products.FindAsync(value2);
                    CardDetail newCard = new CardDetail();
                    newCard.IdUser = value1;
                    newCard.IdProduct = value2;
                    newCard.Tongtien = value3;
                    newCard.Soluong = 1;
                    //newCard.Tongtien = pro.Gia;
                    _context.CardDetails.Add(newCard);
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
                    var newCard = await _context.CardDetails.Where(detail => detail.IdUser == value1 && detail.IdProduct == value2).FirstOrDefaultAsync();
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
        [HttpDelete("iduser={value1}/idproduct={value2}")]
        public async Task<ActionResult<CardDetail>> DeleteCardDetail(int value1 , string value2)
        {
            var cardDetail = await _context.CardDetails.FirstOrDefaultAsync(detail => detail.IdUser == value1 && detail.IdProduct == value2);
            if (cardDetail == null)
            {
                return NotFound();
            }

            _context.CardDetails.Remove(cardDetail);
            await _context.SaveChangesAsync();

            return cardDetail;
        }

        private bool CardDetailExists(int id)
        {
            return _context.CardDetails.Any(e => e.IdUser == id);
        }
        private bool existCardDetail(int a ,string b)
        {
            return _context.CardDetails.Any(e => e.IdUser == a && e.IdProduct == b);
        }
    }
}
