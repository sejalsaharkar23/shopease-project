using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using WebApplication1.Data;
using WebApplication1.Dtos;     
using WebApplication1.Models;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        if (dto == null || string.IsNullOrEmpty(dto.Email) || string.IsNullOrEmpty(dto.Password))
        {
            return BadRequest("Email and Password are required");
        }

        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == dto.Email);

        if (user == null)
            return Unauthorized("Invalid email or password");

        var inputHash = ComputeHash(dto.Password);

        if (user.PasswordHash != inputHash)
            return Unauthorized("Invalid email or password");

        
        var token = Convert.ToBase64String(Guid.NewGuid().ToByteArray());

        return Ok(new { token });
    }

    [HttpGet("hash/{password}")]
public IActionResult GetHash(string password)
{
    var hash = ComputeHash(password);
    return Ok(hash);
}


    
    private string ComputeHash(string input)
    {
        using var sha = SHA256.Create();
        var bytes = sha.ComputeHash(Encoding.UTF8.GetBytes(input));
        return Convert.ToBase64String(bytes);
    }
}
