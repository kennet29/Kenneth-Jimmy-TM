using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.MODEL
{
    public class Profesores : EntityClass
    {
        public string TableName = "Profesores";
        public string DNI { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }





        public void CrearProfesores()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Save(); // Guardar la instancia actual de Estacion en la base de datos
        }

        // Método para obtener todas las estaciones
        public static List<Profesores> ObtenerTodosLosProfesores()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
           Profesores profesores = new Profesores();
            return profesores.Get<Profesores>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static Profesores ObtenerProfesorPorId(string id)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Profesores profesores = new Profesores();
            List<Profesores> profesores1 = profesores.Get<Profesores>("DNI = " + id); // Obtener estaciones con el ID especificado
            return profesores1.Count > 0 ? profesores : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        // Método para actualizar una estación
        public void ActualizarProfesores()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("DNI"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }



    }


}