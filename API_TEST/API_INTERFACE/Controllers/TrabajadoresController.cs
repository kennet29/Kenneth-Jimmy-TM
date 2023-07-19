using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAPA_DATOS;
using CAPA_NEGOCIO.MODEL;


namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrabajadoresController : ControllerBase
    {

        public TrabajadoresController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }



        // GET: api/Estacion
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todas las estaciones
                return Trabajador.ObtenerTodosLosTrabajadores();

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/Estacion/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            try
            {
                // Obtener un profesor por su ID
               Trabajador trabajador = Trabajador.ObtenerTrabajadorPorId (id);

                if (trabajador != null)
                {
                    // Serializar el profesor a JSON
                    //string jsonProf = JsonConvert.SerializeObject(profesores);
                    return (IActionResult)Trabajador.ObtenerTrabajadorPorId(id);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }


        // POST: api/Estacion
        [HttpPost]
        public IActionResult Post([FromBody] Trabajador trabajador)
        {
            try
            {
                if (trabajador != null)
                {
                    // Crear una nueva estación
                    trabajador.CrearTrabajador();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }


        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Trabajador trabajador)
        {
            try
            {
                if (trabajador != null)
                {
                    // Asignar el ID de la estación
                    trabajador.DNI_Alumno = id;

                    // Actualizar la estación
                    trabajador.ActualizarTrabajador();
                    return Ok();
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }











    }
}
