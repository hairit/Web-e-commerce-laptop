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
    [Route("api/[controller]")]
    [ApiController]
    public class KeyboardController : ControllerBase
    {
        private readonly StoreContext database;

        public KeyboardController(StoreContext context)
        {
            database = context;
        }

        // GET: api/Keyboard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetKeyboards()
        {
            return await database.Products.ToListAsync();
        }


    }
}
