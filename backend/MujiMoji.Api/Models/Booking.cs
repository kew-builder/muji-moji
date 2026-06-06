using System.ComponentModel.DataAnnotations;

namespace MujiMoji.Api.Models;

public sealed class Booking
{
    public int Id { get; set; }

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(20)]
    public string Phone { get; set; } = string.Empty;

    [Required, MaxLength(10)]
    public string Date { get; set; } = string.Empty;

    [Required, MaxLength(5)]
    public string Time { get; set; } = string.Empty;

    [Range(1, 20)]
    public int Guests { get; set; }

    [MaxLength(500)]
    public string? Note { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
