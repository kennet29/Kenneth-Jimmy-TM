using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.MODEL
{
   public class Trabajador:EntityClass
    {
        public string TableName = "Trabajador";
        public string DNI_Alumno { get; set; }
        public string CIF_Empresa { get; set; }

        public void CrearTrabajador()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Save(); // Guardar la instancia actual de Estacion en la base de datos
        }

        // Método para obtener todas las estaciones
        public static List<Trabajador> ObtenerTodosLosTrabajadores()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Trabajador trabajador = new Trabajador();
            return trabajador.Get<Trabajador>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static Trabajador ObtenerTrabajadorPorId(string id)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Trabajador trabajador = new Trabajador();
            List<Trabajador> trabajador1 = trabajador.Get<Trabajador>("Id = " + id); // Obtener estaciones con el ID especificado
            return trabajador1.Count > 0 ? trabajador : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        // Método para actualizar una estación
        public void ActualizarTrabajador()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Update("Id"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }





    }
}
