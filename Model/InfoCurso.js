//@ts-check
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