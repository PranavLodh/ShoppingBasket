using Microsoft.AspNetCore.Mvc;
using ShoppingBasketApi.Models;

namespace ShoppingBasketApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        [HttpPost]
        public IActionResult AuthenticateUser([FromBody]Login request)
        {
            if(request.UserName=="Pranav" &&  request.Password=="Pranav")
            {
                return Ok("This works fine");
            }
            else
            {
                return BadRequest();
            }
            
        }
    }
}
