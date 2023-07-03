//@ts-check
import ModelProperty from "./CommomModel";
import { EntityClass } from "./components/Entitys/Entityclass";
class InfoCurso extends EntityClass {
    /**
     *
     * @param {Object} [props]
     */
    constructor(props = {}) {
        super();
        for (const prop in props) {
           if (this[prop])  this[prop] = props[prop];          
        }
    }
    /**@type {String | undefined} */
    DNI_Alumno=undefined;
    /**@type {String | undefined} */
    Codigo_curso = undefined;
    /**@type {String | undefined} */
    Numero_curso = undefined;
    /**@type {String | undefined} */
    Fecha_inicio = undefined;
    /**@type {String | undefined} */
    Fecha_final = undefined;
    /**@type {String | undefined} */
    Nota_Final = undefined;
   
}
export {InfoCurso}

class InfoCursoModel  {
  
    /**@type {ModelProperty} */
    DNI_Alumno={type:"text"};
    /**@type {ModelProperty} */
    Codigo_curso = {type:"text"};
    /**@type {ModelProperty} */
    Numero_curso = {type:"text"};
    /**@type {ModelProperty} */
    Fecha_inicio = {type:"text"};
    /**@type {ModelProperty} */
    Fecha_final = {type:"text"};
    /**@type {ModelProperty} */
    Nota_Final = {type:"text"};
   
}
export default InfoCursoModel;