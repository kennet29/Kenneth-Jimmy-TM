//@ts-check
import ModelProperty from "./CommomModel";
import { EntityClass } from "./components/Entitys/Entityclass";
class Empresas extends EntityClass {
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
    CIF=undefined;
    /**@type {String | undefined} */
    Nombre = undefined;
    /**@type {String | undefined} */
    Telefono = undefined;
    /**@type {String | undefined} */
    Direccion = undefined;
   
}
export {Empresas}



class EmpresasModel  {
   
    /**@type {ModelProperty} */
    CIF={type:"text"};
    /**@type {ModelProperty} */
    Nombre = {type:"text"};
    /**@type {ModelProperty} */
    Telefono = {type:"text"};
    /**@type {ModelProperty} */
    Direccion = {type:"text"};
   
}
export default EmpresasModel;