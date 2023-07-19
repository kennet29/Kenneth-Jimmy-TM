using CAPA_DATOS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CAPA_NEGOCIO.MODEL
{
    public class Tbl_Investigaciones: EntityClass
    {
        public int? Id_Investigacion { get; set; }
        public string? Titulo { get; set; }
        public string? Estado { get; set; }
        public string? Estado3 { get; set; }       

    }
}
