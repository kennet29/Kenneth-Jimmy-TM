using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using CAPA_DATOS;
using CAPA_NEGOCIO.MODEL;

namespace API_INTERFACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfesoresController : ControllerBase
    {
        // Constructor
        public ProfesoresController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }

        // GET: api/Profesores
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todos los profesores
                var profesores = Profesores.ObtenerTodosLosProfesores();
                return profesores;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/Profesores/5
        [HttpGet("{id}")]
        public object Get(string id)
        {
            try
            {
                // Obtener un profesor por su ID
                var profesor = Profesores.ObtenerProfesorPorId(id);

                if (profesor != null)
                {
                    return profesor;
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

        // POST: api/Profesores
        [HttpPost]
        public object Post([FromBody] Profesores profesor)
        {
            try
            {
                if (profesor != null)
                {
                    // Crear un nuevo profesor
                    profesor.CrearProfesores();
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

        // PUT: api/Profesores/5
        [HttpPut("{id}")]
        public object Put(string id, [FromBody] Profesores profesor)
        {
            try
            {
                if (profesor != null)
                {
                    // Asignar el ID del profesor
                    profesor.DNI = id;

                    // Actualizar el profesor
                    profesor.ActualizarProfesores();
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
