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
    public class LaptopController : ControllerBase
    {
        private readonly StoreContext database;

        public LaptopController(StoreContext context)
        {
            database = context;
        }
        [HttpGet()]
        public async Task<ActionResult<List<SanPham>>> getAllLaptop()
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop").Include(pro => pro.LaptopDetail).Include(pro => pro.MoTaLaptop).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("enable")]
        public async Task<ActionResult<List<SanPham>>> getEnableLaptop()
        {
            try
            {
                return await database.SanPhams.Where(pro => pro.Idloai == "Laptop")
                                              .Include(pro => pro.LaptopDetail).Include(pro => pro.MoTaLaptop)
                                              .Where(pro => pro.Hienthi == 1)
                                              .ToListAsync();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("id={value}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByID(string value)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                    .Include(pro => pro.LaptopDetail)
                    .Include(pro => pro.MoTaLaptop)
                    .Where(pro => pro.Id == value)
                    .ToListAsync();
                if (pros.Count == 0) return NotFound();
                return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("from={price1}to={price2}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByPrice(int price1,int price2)
        {
            try {
                List<SanPham> pros = 
                    price2!=999? await database.SanPhams.Where(pro => pro.Idloai=="laptop" && pro.Gia >= price1 && pro.Gia <= price2).ToListAsync():
                                 await database.SanPhams.Where(pro => pro.Idloai=="laptop" && pro.Gia >= price1).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }catch(Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("manhinh={value}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByScreen(string value)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                            .Include(pro => pro.LaptopDetail)
                                                            .Include(pro => pro.MoTaLaptop)
                                                            .Where(pro => pro.LaptopDetail.Manhinh == value)
                                                            .ToListAsync();
                if (pros.Count == 0) return NotFound();
                return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("name={value}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByName(string value)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                            .Where(pro => pro.Ten.Contains(value))
                                                            .Include(pro => pro.LaptopDetail)
                                                            .Include(pro => pro.MoTaLaptop)
                                                            .ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("brand={value}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByBrand(string value)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                            .Include(pro => pro.LaptopDetail)
                                                            .Include(pro => pro.MoTaLaptop)
                                                            .Where(pro => pro.Thuonghieu == value).ToListAsync();
                if (pros.Count == 0) return NotFound();
                else return pros;
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("gb={value}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByGB(string value)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                            .Include(pro => pro.LaptopDetail)
                                                            .Include(pro => pro.MoTaLaptop)
                                                            .Where(pro => pro.LaptopDetail.Ram == value)
                                                            .ToListAsync();
                if (pros.Count != 0) return pros;
                else return NotFound();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
        [HttpGet("vga={value}")]
        public async Task<ActionResult<List<SanPham>>> getLaptopByVGA(string value)
        {
            try
            {
                List<SanPham> pros = await database.SanPhams.Where(pro => pro.Idloai == "laptop")
                                                             .Include(pro => pro.LaptopDetail)
                                                             .Include(pro => pro.MoTaLaptop)
                                                             .Where(pro => pro.LaptopDetail.Vga == value)
                                                             .ToListAsync();
                if (pros.Count != 0) return pros;
                else return NotFound();
            }
            catch (Exception e) { Console.WriteLine(e.ToString()); return BadRequest(); }
        }
    }
}
