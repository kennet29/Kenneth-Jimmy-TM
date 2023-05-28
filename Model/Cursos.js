//@ts-check
import { EntityClass } from "./components/Entitys/Entityclass";
class Cursos extends EntityClass {
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
    Codigo_curso=undefined;
    /**@type {String | undefined} */
    Programa = undefined;
    /**@type {String | undefined} */
    HorasDuracion = undefined;
    /**@type {String | undefined} */
    Nombre = undefined;
    /**@type {String | undefined} */
    Dni_Profesor = undefined;
   
}
export {Cursos}