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
    public class EmpresaController : ControllerBase
    {
        public EmpresaController()
        {
            // Inicializar la conexión en SqlADOConexion
            SqlADOConexion.IniciarConexion("sa", "1234");
        }

        // GET: api/Empresa
        [HttpGet]
        public object Get()
        {
            try
            {
                // Obtener todas las empresas
                var empresas = Empresas.ObtenerTodosLasEmpresas();
                return empresas;
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }

        // GET: api/Empresa/5
        [HttpGet("{CIF}")]
        public object Get(string CIF)
        {
            try
            {
                // Obtener una empresa por su CIF
                var empresa = Empresas.ObtenerEmpresaPorId(CIF);

                if (empresa != null)
                {
                    return empresa;
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

        // POST: api/Empresa
        [HttpPost]
        public IActionResult Post([FromBody] Empresas empresa)
        {
            try
            {
                if (empresa != null)
                {
                    // Crear una nueva empresa
                    empresa.CrearEmpresas();
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

        // PUT: api/Empresa/5
        [HttpPut("{CIF}")]
        public IActionResult Put(string CIF, [FromBody] Empresas empresa)
        {
            try
            {
                if (empresa != null)
                {
                    // Asignar el CIF de la empresa
                    empresa.CIF = CIF;

                    // Actualizar la empresa
                    empresa.ActualizarEmpresa();
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
