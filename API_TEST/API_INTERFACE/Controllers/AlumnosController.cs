using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using CAPA_DATOS;
using CAPA_NEGOCIO.MODEL;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnosController : ControllerBase
    {
        // Constructor
        public AlumnosController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }

        // GET: api/Alumno
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todos los alumnos
                var alumnos = Alumnos.ObtenerTodosLosAlumnos();
                return alumnos;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/Alumno/5
        [HttpGet("{DNI}")]
        public object Get(string DNI)
        {
            try
            {
                // Obtener un alumno por su DNI
                var alumno = Alumnos.ObtenerAlumnoPorId(DNI);

                if (alumno != null)
                {
                    return alumno;
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

        // POST: api/Alumno
        [HttpPost]
        public object Post([FromBody] Alumnos alumno)
        {
            try
            {
                if (alumno != null)
                {
                    // Crear un nuevo alumno
                    alumno.CrearAlumnos();
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

        // PUT: api/Alumno/5
        [HttpPut("{DNI}")]
        public object Put(string DNI, [FromBody] Alumnos alumno)
        {
            try
            {
                if (alumno != null)
                {
                    // Asignar el DNI del alumno
                    alumno.DNI = DNI;

                    // Actualizar el alumno
                    alumno.ActualizarAlumnos();
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
