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
    public class CursosController : ControllerBase
    {

        public CursosController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }

        // GET: api/Curso
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todos los cursos
                var cursos = Cursos.ObtenerTodosLosCursos();
                return cursos;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/Curso/5
        [HttpGet("{id}")]
        public object GetById(int CodigoCurso)
        {
            try
            {
                // Obtener un curso por su ID
                var curso = Cursos.ObtenerCursosPorId(CodigoCurso.ToString());

                if (curso != null)
                {
                    return curso;
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

        // POST: api/Curso
        [HttpPost]
        public IActionResult Post([FromBody] Cursos curso)
        {
            try
            {
                if (curso != null)
                {
                    // Crear un nuevo curso
                    curso.CrearCursos();
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

        // PUT: api/Curso/5
        [HttpPut("{id}")]
        public IActionResult Put(int CodigoCurso, [FromBody] Cursos curso)
        {
            try
            {
                if (curso != null)
                {
                    // Asignar el ID del curso
                    curso.CodigoCurso = CodigoCurso;

                    // Actualizar el curso
                    curso.ActualizarCursos();
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
