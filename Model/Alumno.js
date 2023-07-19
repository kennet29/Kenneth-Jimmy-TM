//@ts-check
import ModelProperty from "./CommomModel";
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
    Direccion = undefined;
    /**@type {String | undefined} */
    Telefono = undefined;
    /**@type {String | undefined} */
    Nombre = undefined;
    /**@type {String | undefined} */
    Edad = undefined;
   
}
export {Alumnos}

class AlumnosModel
{

  /**@type {ModelProperty} */
  DNI={type:"text"};
  /**@type {ModelProperty} */
  Dirección = {type:"text"};
  /**@type {ModelProperty} */
  Teléfono = {type:"text"};
  /**@type {ModelProperty} */
  Nombre = {type:"text"};
  /**@type {ModelProperty} */
  Edad = {type:"text"};
 


}
export{AlumnosModel}