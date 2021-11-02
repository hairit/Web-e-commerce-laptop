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
    public class UserController : ControllerBase
    {
        private readonly LaptopContext database;
        public UserController(LaptopContext context)
        {
            database = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await database.Users.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await database.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            return user;
        }
        [HttpGet("name={value}")]
        public async Task<ActionResult<List<User>>> getUserByName(string value)
        {
            try{
                List<User> users = await database.Users.Where(user => user.Nameuser.Contains(value)).ToListAsync();
                if (users.Count != 0) return users;
                else return NotFound();
            }catch(Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("login/{email}/{pass}")]
        public async Task<ActionResult<User>> Login(string email ,string pass)
        {
            var user = await database.Users.Include(a => a.DonHangs)
                                           .Include(a => a.GioHangs)
                                           .FirstOrDefaultAsync(a => a.Email == email);
            if (user != null)
            {
                if (pass != user.Pass) return BadRequest();
                else return user;
            }
            else return NotFound();
        }
        [HttpGet("email={value}")]
        public async Task<ActionResult<User>> getUserByEmail(string value)
        {
            try {
                var user = await database.Users.FirstOrDefaultAsync(user => user.Email == value);
                if (user != null) return user;
                else return NotFound();
            }catch(Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            database.Entry(user).State = EntityState.Modified;
            try
            {
                await database.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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
        public async Task<ActionResult<User>> PostUser(User user)
        {
            if (existEmail(user.Email)) return Conflict();
            try{
                database.Users.Add(user);
                await database.SaveChangesAsync();
                return CreatedAtAction("GetUser", new { id = user.Id }, user);
            }
            catch(Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            var user = await database.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            database.Users.Remove(user);
            await database.SaveChangesAsync();

            return user;
        }
        private bool UserExists(int id)
        {
            return database.Users.Any(e => e.Id == id);
        }
        private bool existEmail(string email)
        {
            return database.Users.Any(user => user.Email == email);
        }
    }
}
