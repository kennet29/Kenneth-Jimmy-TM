using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;
namespace CAPA_NEGOCIO.MODEL
{
    public class FechasCursos : EntityClass
    {
        public string TableName = "FechasCursos";
        public int CodigoCurso { get; set; }
        public int NumeroCurso { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }


        public void CrearFechas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Save(); // Guardar la instancia actual de Estacion en la base de datos
        }

        // Método para obtener todas las estaciones
        public static List<FechasCursos> ObtenerTodasLasFechas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            FechasCursos fechas = new FechasCursos();
            return fechas.Get<FechasCursos>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static FechasCursos ObtenerFechaPorId(int CodigoCurso)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            FechasCursos fechas = new FechasCursos();
            List<FechasCursos> fechas1 = fechas.Get<FechasCursos>("Id = " + CodigoCurso); // Obtener estaciones con el ID especificado
            return fechas1.Count > 0 ? fechas : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        // Método para actualizar una estación
        public void ActualizarFechas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("CodigoCurso"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }





    }
}
