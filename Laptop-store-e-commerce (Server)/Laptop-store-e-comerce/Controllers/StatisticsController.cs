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
    public class StatisticsController : ControllerBase
    {
        private readonly StoreContext database;

        public StatisticsController(StoreContext context)
        {
            database = context;
        }
        [HttpGet("bill/date={value}")]
        public async Task<ActionResult<List<Bill>>> getBillsByTime(String value)
        {
                try {
                    DateTime date = Convert.ToDateTime(value);
                int day = date.Day;
                int month = date.Month;
                int year = date.Year;
                    List<Bill> bills = await database.Bills.Where(bill => bill.Ngaydat == date).ToListAsync();
                    if (bills.Count == 0) return NotFound();
                    else return bills;
                }catch(Exception e) { return BadRequest(); }
        }
        [HttpGet("bill/month={month}/year={year}")]
        public async Task<ActionResult<List<Bill>>> getBillsByTime(int month,int year)
        {
            try
            {
                List<Bill> bills = await database.Bills.Where(bill => bill.Ngaydat.Month == month
                        && bill.Ngaydat.Year == year ).ToListAsync();
                if (bills.Count == 0) return NotFound();
                else return bills;
            }
            catch (Exception e) { return BadRequest(); }
        }
        [HttpGet("bill/year={year}")]
        public async Task<ActionResult<List<Bill>>> getBillsByTime(int year)
        {
            try
            {
                List<Bill> bills = await database.Bills.Where(bill => bill.Ngaydat.Year == year).ToListAsync();
                if (bills.Count == 0) return NotFound();
                else return bills;
            }
            catch (Exception e) { return BadRequest(); }
        }
        [HttpGet("bill/from={from}/to={to}")]
        public async Task<ActionResult<List<Bill>>> getBillsByTime(String from , String to)
        {
            try
            {
                DateTime dateFrom = Convert.ToDateTime(from);
                DateTime dateTo = Convert.ToDateTime(to);
                List<Bill> bills = await database.Bills.Where(bill => bill.Ngaydat >= dateFrom && bill.Ngaydat <= dateTo).ToListAsync();
                if (bills.Count == 0) return NotFound();
                else return bills;
            }
            catch (Exception e) { return BadRequest(); }
        }
    }
}
