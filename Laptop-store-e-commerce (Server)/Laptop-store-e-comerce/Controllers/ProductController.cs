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
                Console.WriteLine(e.ToString());
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
        /*
        [HttpPost("body={pro}data={data}")]
        public async Task<ActionResult<SanPham>> PostSanPham(SanPham pro,Object data)
        {
            if (existType(pro.Idloai)) return Conflict();
            _context.SanPhams.Add(pro);
            addProductInformation(pro.Id,data);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                return BadRequest();
            }
            return CreatedAtAction("GetSanPham", new { id = pro.Id }, pro);
        }*/
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

        private bool existID(string id)
        {
            return _context.SanPhams.Any(e => e.Id == id);
        }
        private bool existType(string type)
        {
            return _context.LoaiSanPhams.Any(h => h.Id == type);
        }
        private void addProductInformation(string type,Object a)
        {
            try
            {
                if(type == "laptop")
                {
                    LaptopDetail detail = a as LaptopDetail;
                    return;
                }
                if(type == "keyboard")
                {
                    DetailKeyBoard detail = a as DetailKeyBoard;
                    _context.DetailKeyBoards.Add(detail);
                }
            }catch(Exception e)
            {
                Console.WriteLine("Errol: addProductInformation() has a problem" + e.ToString());
            }
        }
    }
}
