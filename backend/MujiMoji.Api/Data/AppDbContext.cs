using Microsoft.EntityFrameworkCore;
using MujiMoji.Api.Models;

namespace MujiMoji.Api.Data;

public sealed class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Booking> Bookings => Set<Booking>();
}
