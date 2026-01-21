using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Data;
using WebApplication1.Models;   
using System.Linq;

namespace WebApplication1.Controllers
{
    [ApiController]   
    [Route("api/cart")]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CartController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCart()
        {
            return Ok(_context.CartItems.ToList());
        }

       
       [HttpPost("add")]
public IActionResult AddToCart([FromBody] CartRequest request)
{
    if (request == null || request.ProductId <= 0)
        return BadRequest("Invalid request");

     var product = _context.Products
        .FirstOrDefault(p => p.Id == request.ProductId);

    if (product == null)
        return NotFound("Product not found");

    var item = _context.CartItems
        .FirstOrDefault(x => x.ProductId == request.ProductId);

    if (item != null)
    {
        item.Quantity += 1;
    }
    else
    {
        _context.CartItems.Add(new CartItem
        {
            ProductId = product.Id,
            ProductName = product.Name,
            Price = product.Price,
            Quantity = 1,
            ImageUrl = product.ImageUrl
        });
    }

    _context.SaveChanges();
    return Ok(_context.CartItems.ToList());
}

        [HttpPost("decrease")]
        public IActionResult DecreaseQty([FromBody] CartRequest request)
        {
            if (request == null || request.ProductId <= 0)
                return BadRequest("Invalid request");

            var item = _context.CartItems
                .FirstOrDefault(x => x.ProductId == request.ProductId);

            if (item == null)
                return NotFound("Item not found");

            if (item.Quantity > 1)
                item.Quantity -= 1;
            else
                _context.CartItems.Remove(item);

            _context.SaveChanges();
            return Ok(_context.CartItems.ToList());
        }

       
        [HttpPost("remove")]
        public IActionResult RemoveItem([FromBody] CartRequest request)
        {
            if (request == null || request.ProductId <= 0)
                return BadRequest("Invalid request");

            var item = _context.CartItems
                .FirstOrDefault(x => x.ProductId == request.ProductId);

            if (item == null)
                return NotFound("Item not found");

            _context.CartItems.Remove(item);
            _context.SaveChanges();

            return Ok(_context.CartItems.ToList());
        }
    }
}
