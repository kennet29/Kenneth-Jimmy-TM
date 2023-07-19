using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CAPA_DATOS;
using CAPA_NEGOCIO.MODEL;
using Microsoft.AspNetCore.Http;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FechasCursosController : ControllerBase
    {
        // Constructor
        public FechasCursosController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }

        // GET: api/FechasCursos
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todas las fechas
                var fechasCursos = FechasCursos.ObtenerTodasLasFechas();
                return fechasCursos;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/FechasCursos/5
        [HttpGet("{id}")]
        public object GetById(int id)
        {
            try
            {
                // Obtener una fecha por su ID
                var fechaCurso = FechasCursos.ObtenerFechaPorId(id);

                if (fechaCurso != null)
                {
                    return fechaCurso;
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

        // POST: api/FechasCursos
        [HttpPost]
        public object Post([FromBody] FechasCursos fechas)
        {
            try
            {
                if (fechas != null)
                {
                    // Crear una nueva fecha
                    fechas.CrearFechas();
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

        // PUT: api/FechasCursos/5
        [HttpPut("{id}")]
        public object Put(int id, [FromBody] FechasCursos fechas)
        {
            try
            {
                if (fechas != null)
                {
                    // Asignar el ID de la fecha
                    fechas.CodigoCurso = id;

                    // Actualizar la fecha
                    fechas.ActualizarFechas();
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
