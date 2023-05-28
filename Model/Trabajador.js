//@ts-check
import { EntityClass } from "./components/Entitys/Entityclass";
class Trabajador extends EntityClass {
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
    CIF_Empresa = undefined;
 
   
}
export {Trabajador}