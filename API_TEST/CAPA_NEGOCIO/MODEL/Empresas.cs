using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CAPA_DATOS;
namespace CAPA_NEGOCIO.MODEL
{
    public class Empresas:EntityClass
    {
        public string DataTable = "Empresas";
        public string CIF { get; set; }
        public string Nombre { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }



        public void CrearEmpresas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            this.Save(); // Guardar la instancia actual de Estacion en la base de datos
        }

        // Método para obtener todas las estaciones
        public static List<Empresas> ObtenerTodosLasEmpresas()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Empresas empresa = new Empresas();
            return empresa.Get<Empresas>(); // Obtener una lista de todas las estaciones de la base de datos
        }

        // Método para obtener una estación por su ID
        public static Empresas ObtenerEmpresaPorId(string CIF)
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Empresas empresa = new Empresas();
            List<Empresas> empresa1 = empresa.Get<Empresas>("CIF = " + CIF); // Obtener estaciones con el ID especificado
            return empresa1.Count > 0 ? empresa : null; // Devolver la primera estación encontrada o null si no hay coincidencias
        }

        // Método para actualizar una estación
        public void ActualizarEmpresa()
        {
            SqlADOConexion.IniciarConexion("sa", "1234");
            Update("CIF"); // Actualizar los datos de la estación en la base de datos utilizando el ID
        }


    }
}
