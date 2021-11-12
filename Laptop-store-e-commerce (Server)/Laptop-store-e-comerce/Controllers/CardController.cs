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
    public class CardController : ControllerBase
    {
        private readonly StoreContext _context;

        public CardController(StoreContext context)
        {
            _context = context;
        }

        // GET: api/Card
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Card>>> GetCards()
        {
            return await _context.Cards.ToListAsync();
        }

        // GET: api/Card/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Card>> GetCard(string id)
        {
            var card = await _context.Cards.Include(card => card.CardDetails).FirstOrDefaultAsync(card => card.Id == id);

            if (card == null)
            {
                return NotFound();
            }

            return card;
        }
        [HttpGet("user={id}")]
        public async Task<ActionResult<List<Card>>> getCardsByUserID(int id)
        {
            if (!_context.Users.Any(user => user.Id == id)) return BadRequest();
            List<Card> cards = await _context.Cards.Include(card => card.CardDetails).Where(card => card.Iduser == id).ToListAsync();
            if (cards.Count == 0) return NotFound();
            else return cards;
        }
        [HttpPut]
        public async Task<IActionResult> PutCard(Card card)
        {
            if (!CardExists(card.Id)) return NotFound();
            var oldCard = await  _context.Cards.Include(old => old.CardDetails).FirstOrDefaultAsync(old => old.Id == card.Id);
            _context.CardDetails.RemoveRange(oldCard.CardDetails);
            _context.Cards.Remove(oldCard);
            try
            {
                _context.Cards.Add(card);
                await _context.SaveChangesAsync();
            }
            catch (Exception) {
                return BadRequest();
            } 
            return CreatedAtAction("GetCard", new { id = card.Id }, card);
        }
        [HttpPost]
        public async Task<ActionResult<Card>> PostCard(Card card)
        {
            if (CardExists(card.Id)) return Conflict();
            try
            {
                _context.Cards.Add(card);
                await _context.SaveChangesAsync();
            }
            catch (Exception){   return BadRequest();   }
            return CreatedAtAction("GetCard", new { id = card.Id }, card);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Card>> DeleteCard(string id)
        {
            var card = await _context.Cards.FindAsync(id);
            if (card == null)
            {
                return NotFound();
            }
            _context.Cards.Remove(card);
            await _context.SaveChangesAsync();
            return card;
        }

        private bool CardExists(string id)
        {
            return _context.Cards.Any(e => e.Id == id);
        }
    }
}
