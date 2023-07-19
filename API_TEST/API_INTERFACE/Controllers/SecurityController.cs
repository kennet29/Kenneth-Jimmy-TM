using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_INTERFACE.Model;
using System.Linq;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        [HttpPost]
        public object login(Usuarios usuario)
        {
            return usuario.Get().Where(x => 
                (x.usuario == usuario.usuario 
                && x.password == usuario.password)
            ).ToList().Count > 0;
        }
    }
}
