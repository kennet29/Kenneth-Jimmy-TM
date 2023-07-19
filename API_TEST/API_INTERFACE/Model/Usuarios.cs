using System.Collections.Generic;

namespace API_INTERFACE.Model
{
    public class Usuarios
    {
        public string usuario { get; set; }
        public string password { get; set; }
        public Usuarios Save() { return this; }
        public List<Usuarios> Get()
        {
            return new List<Usuarios>()
            {
                new Usuarios(){usuario = "sa", password="zaxscd"}
            };
        }
    }
}
