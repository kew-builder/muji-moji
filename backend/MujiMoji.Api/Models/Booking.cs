using System.ComponentModel.DataAnnotations;

namespace MujiMoji.Api.Models;

public sealed class Booking
{
    public int Id { get; set; }

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, MaxLength(20)]
    [RegularExpression(@"^0\d{8,9}$", ErrorMessage = "Phone must be a valid Thai number starting with 0 (9–10 digits).")]
    public string Phone { get; set; } = string.Empty;

    [Required, MaxLength(10)]
    [RegularExpression(@"^\d{4}-\d{2}-\d{2}$", ErrorMessage = "Date must be in YYYY-MM-DD format.")]
    public string Date { get; set; } = string.Empty;

    [Required, MaxLength(5)]
    [RegularExpression(@"^(?:[01]\d|2[0-3]):[0-5]\d$", ErrorMessage = "Time must be in HH:mm format.")]
    public string Time { get; set; } = string.Empty;

    [Range(1, 20)]
    public int Guests { get; set; }

    [MaxLength(500)]
    public string? Note { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
