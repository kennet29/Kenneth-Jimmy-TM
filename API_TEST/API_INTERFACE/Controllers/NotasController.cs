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
    public class NotasController : ControllerBase
    {
        public NotasController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }

        // GET: api/Notas
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todas las notas
                var notas = Notas.ObtenerTodasLasNotas();
                return notas;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/Notas/5
        [HttpGet("{id}")]
        public object Get(int DNI_Alumno)
        {
            try
            {
                // Obtener una nota por su ID
                var nota = Notas.ObtenerNotasPorId(DNI_Alumno);

                if (nota != null)
                {
                    return nota;
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

        // POST: api/Notas
        [HttpPost]
        public object Post([FromBody] Notas notas)
        {
            try
            {
                if (notas != null)
                {
                    // Crear una nueva nota
                    notas.CrearNotas();
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

        // PUT: api/Notas/5
        [HttpPut("{id}")]
        public object Put(string id, [FromBody] Notas notas)
        {
            try
            {
                if (notas != null)
                {
                    // Asignar el ID de la nota
                    notas.DNI_Alumno = id;

                    // Actualizar la nota
                    notas.ActualizarNotas();
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
