using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;
namespace CAPA_NEGOCIO.MODEL
{
   public class Alumnos:EntityClass
    {
        public string TableName = "Alumnos";
        public string DNI { get; set; }
        public string Direccion { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public int? Edad { get; set; }

        public void CrearAlumnos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Save(); // Guardar la instancia actual de Estacion en la base de datos
        }


        // Método para obtener todas las estaciones
        public static List<Alumnos> ObtenerTodosLosAlumnos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Alumnos alumno = new Alumnos();
            return alumno.Get<Alumnos>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static Alumnos ObtenerAlumnoPorId(string DNI)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Alumnos alumno = new Alumnos();
            List<Alumnos> Alumno1 = alumno.Get<Alumnos>("DNI = " + DNI); // Obtener estaciones con el ID especificado
            return Alumno1.Count > 0 ? alumno : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        // Método para actualizar una estación
        public void ActualizarAlumnos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("DNI"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }


    }
}
