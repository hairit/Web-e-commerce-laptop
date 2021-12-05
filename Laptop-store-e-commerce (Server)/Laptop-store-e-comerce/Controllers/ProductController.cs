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
        private readonly StoreContext database;
        public ProductController(StoreContext context)
        {
            database = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await database.Products.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> getproductByID(string id)
        {
            Product pro = await database.Products.Include(pro => pro.IdloaiNavigation)
                                                 .FirstOrDefaultAsync(pro => pro.Id == id);
            if (pro == null) return NotFound();
            else return pro;
        }
        [HttpGet("type={type}/{id}")]
        public async Task<ActionResult<Product>> getProductByID(string type,string id)
        {
            if (!existType(type)) return NotFound();
            Product pro = null;
            if(type =="laptop")  pro = await database.Products.Include(pro => pro.IdloaiNavigation)
                                                              .Include(pro => pro.LaptopDetail)
                                                              .Include(pro => pro.LaptopDescription)
                                                              .Where(pro => pro.Id == id)
                                                              .FirstOrDefaultAsync();
            if(type =="keyboard") pro = await database.Products.Include(pro => pro.IdloaiNavigation)
                                                               .Include(pro => pro.KeyboardDetail)
                                                               .Where(pro => pro.Id == id)
                                                               .FirstOrDefaultAsync();
            if (type == "screen") pro = await database.Products.Include(pro => pro.IdloaiNavigation)
                                                               .Include(pro => pro.ScreenDetail)
                                                               .Where(pro => pro.Id == id)
                                                               .FirstOrDefaultAsync();
            if (type == "pc") pro = await database.Products.Include(pro => pro.Pcdetail)
                                                               .Include(pro => pro.IdloaiNavigation)
                                                               .Where(pro => pro.Idloai == type)
                                                               .Where(pro => pro.Id == id)
                                                               .FirstOrDefaultAsync();
            if (type == "mouse") pro = await database.Products.Include(pro => pro.IdloaiNavigation)
                                                                  .Include(pro => pro.MouseDetail)
                                                                  .Where(pro => pro.Idloai == type)
                                                                  .Where(pro => pro.Id == id)
                                                                  .FirstOrDefaultAsync();
            if (type == "headphone") pro = await database.Products.Include(pro => pro.IdloaiNavigation)
                                                                    .Include(pro => pro.HeadphoneDetail)
                                                                    .Where(pro => pro.Idloai == type)
                                                                    .Where(pro => pro.Id == id)
                                                                    .FirstOrDefaultAsync();
            if (pro == null) return NotFound();
            else return pro;
        }
        [HttpGet("name={name}")]
        public async Task<ActionResult<List<Product>>> getProductByName(string name)
        {
            try
            {
                List<Product> list = null;
                list = await database.Products.Where(pro => pro.Ten.Contains(name)).ToListAsync();
                if (list.Count == 0) return NotFound();
                else return list;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return BadRequest();
            }
        }
        [HttpGet("type={type}")]
        public async Task<ActionResult<List<Product>>> getProductsByType(string type)
        {
            try
            {
                List<Product> pros = await database.Products.Where(pro => pro.Idloai == type).ToListAsync();
                if (pros.Count != 0) return pros;
                else return NotFound();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("type={type}/enable")]
        public async Task<ActionResult<List<Product>>> getProductsToDisPlay(string type)
        {
            try
            {
                return await database.Products
                                              .Where(pro => pro.Idloai == type)
                                              .Where(pro => pro.Hienthi == 1)
                                              .ToListAsync();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("type={type}/from={price1}to={price2}")]
        public async Task<ActionResult<List<Product>>> getProductByPrice(string type,int price1, int price2)
        {
            try
            {
                List<Product> pros =
                    price2 != 999 ? await database.Products.Where(pro => pro.Idloai == type && pro.Gia >= price1 && pro.Gia <= price2).ToListAsync() :
                                 await database.Products.Where(pro => pro.Idloai == type && pro.Gia >= price1).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpPut]
        public async Task<IActionResult> PutProduct(Product pro)
        {
            database.Entry(pro).State = EntityState.Modified;
            try
            {
                if (pro.Idloai == "laptop")
                {
                database.Entry(pro.LaptopDetail).State = EntityState.Modified;
                database.Entry(pro.LaptopDescription).State = EntityState.Modified;
                }
                if (pro.Idloai == "pc") database.Entry(pro.Pcdetail).State = EntityState.Modified;
                if (pro.Idloai == "screen") database.Entry(pro.ScreenDetail).State = EntityState.Modified;
                if (pro.Idloai == "mouse") database.Entry(pro.MouseDetail).State = EntityState.Modified;

                if (pro.Idloai == "keyboard") database.Entry(pro.KeyboardDetail).State = EntityState.Modified;
                await database.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!existID(pro.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("getProductByID", new { type = pro.Idloai, id = pro.Id }, pro);
        }
        [HttpPost()]
        public async Task<ActionResult<Product>> PostProduct(Product pro)
        {
            
            if (existID(pro.Id)) return Conflict();
            if (!existType(pro.Idloai)) return BadRequest();
            try
            {
                database.Products.Add(pro);
                await database.SaveChangesAsync();
                return CreatedAtAction("getProductByID", new { type = pro.Idloai, id = pro.Id }, pro);
            }
            catch (DbUpdateException)            
            {
                return BadRequest();
            }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> DeleteSanPham(string id)
        {
            var pro = await database.Products.FindAsync(id);
            if (pro == null)
            {
                return NotFound();
            }
            if(pro.Idloai == "laptop")
            {
                database.LaptopDetails.Remove(await database.LaptopDetails.FindAsync(id));
                database.LaptopDescriptions.Remove(await database.LaptopDescriptions.FindAsync(id));
            }
            if(pro.Idloai == "keyboard")
            {
                database.KeyboardDetails.Remove(await database.KeyboardDetails.FindAsync(id));
            }
            if(pro.Idloai == "screen")
            {
                database.ScreenDetails.Remove(await database.ScreenDetails.FindAsync(id));
            }
            if (pro.Idloai == "mouse")
            {
                database.MouseDetails.Remove(await database.MouseDetails.FindAsync(id));
            }
            if (pro.Idloai == "headphone")
            {
                database.HeadphoneDetails.Remove(await database.HeadphoneDetails.FindAsync(id));
            }
            if (pro.Idloai == "pc")
            {
                database.Pcdetails.Remove(await database.Pcdetails.FindAsync(id));
            }
            try
            {
                database.Products.Remove(pro);
                await database.SaveChangesAsync();
            }catch {  throw; }
            return pro;
        }
        private bool existID(string id)
        {
            return database.Products.Any(e => e.Id == id);
        }
        private bool existType(string type)
        {
            return database.TypeProducts.Any(h => h.Id == type);
        }
    }
    
}
