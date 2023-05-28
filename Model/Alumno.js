//@ts-check
import { EntityClass } from "./components/Entitys/Entityclass";
class Alumnos extends EntityClass {
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
    DNI=undefined;
    /**@type {String | undefined} */
    Dirreccion = undefined;
    /**@type {String | undefined} */
    Telefono = undefined;
    /**@type {String | undefined} */
    Nombre = undefined;
    /**@type {String | undefined} */
    Edad = undefined;
   
}
export {Alumnos}