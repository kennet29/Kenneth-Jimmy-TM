using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;
namespace CAPA_NEGOCIO.MODEL
{
   public  class Cursos:EntityClass
    {
        public string TableName = "Cursos";
        public int CodigoCurso { get; set; }
        public string Programa { get; set; }
        public int HorasDuracion { set; get; }
        public string Titulo { get; set; }
       public  Profesores Profesor { get; set; }

        public void CrearCursos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Save(); // Guardar la instancia actual de Estacion en la base de datos
        }

        // Método para obtener todas las estaciones
        public static List<Cursos> ObtenerTodosLosCursos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Cursos cursos = new Cursos();
            return cursos.Get<Cursos>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static Cursos ObtenerCursosPorId(int CodigoCurso)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Cursos cursos = new Cursos();
            List<Cursos> cursos1 = cursos.Get<Cursos>("Id = " + CodigoCurso); // Obtener estaciones con el ID especificado
            return cursos1.Count > 0 ? cursos : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        public static object ObtenerCursosPorId(string v)
        {
            throw new NotImplementedException();
        }

        // Método para actualizar una estación
        public void ActualizarCursos()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("CodigoCurso"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }



    }
}
