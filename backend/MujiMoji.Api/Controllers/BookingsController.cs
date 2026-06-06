using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MujiMoji.Api.Data;
using MujiMoji.Api.Models;

namespace MujiMoji.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public sealed class BookingsController(AppDbContext db) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Booking booking, CancellationToken ct)
    {
        booking.CreatedAt = DateTime.UtcNow;
        db.Bookings.Add(booking);
        await db.SaveChangesAsync(ct);
        return CreatedAtAction(nameof(GetById), new { id = booking.Id }, booking);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id, CancellationToken ct)
    {
        var booking = await db.Bookings.AsNoTracking().FirstOrDefaultAsync(b => b.Id == id, ct);
        return booking is null ? NotFound() : Ok(booking);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll(CancellationToken ct)
    {
        var bookings = await db.Bookings.AsNoTracking().OrderByDescending(b => b.CreatedAt).ToListAsync(ct);
        return Ok(bookings);
    }
}
