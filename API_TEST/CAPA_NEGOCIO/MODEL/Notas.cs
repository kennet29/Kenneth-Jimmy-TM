using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;

namespace CAPA_NEGOCIO.MODEL
{

    public class Notas:EntityClass
    {
        public string TableName = "Notas";
        public string DNI_Alumno { get; set; }
        public int CodigoCurso { get; set; }
        public decimal Nota { get; set; }



        public void CrearNotas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Save(); // Guardar la instancia actual de Estacion en la base de datos
        }

        // Método para obtener todas las estaciones
        public static List<Notas> ObtenerTodasLasNotas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Notas notas = new Notas();
            return notas.Get<Notas>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static Notas ObtenerNotasPorId(int DNI_Alumno)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Notas notas = new Notas();
            List<Notas> nota1 = notas.Get<Notas>("Id = " + DNI_Alumno); // Obtener estaciones con el ID especificado
            return nota1.Count > 0 ? notas : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        // Método para actualizar una estación
        public void ActualizarNotas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("Id"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }




    }
}
