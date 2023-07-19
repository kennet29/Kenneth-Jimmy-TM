using CAPA_DATOS;
using CAPA_NEGOCIO.MODEL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public ValuesController()
        {
            SqlADOConexion.IniciarConexionAnonima(); 
        }
       /*  [HttpGet]
        public List<Tbl_Investigaciones> getInvestigaciones()
        {
            return new Tbl_Investigaciones().Get<Tbl_Investigaciones>();
        }*/
    }
}
