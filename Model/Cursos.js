//@ts-check
import ModelProperty from "./CommomModel";
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



class CursosModel
{
    /**@type {ModelProperty} */
    Codigo_curso={type:"text"};
    /**@type {ModelProperty} */
    Programa = {type:"text"};
    /**@type {ModelProperty} */
    HorasDuracion = {type:"text"};
    /**@type {ModelProperty} */
    Nombre = {type:"text"};
    /**@type {ModelProperty} */
    Dni_Profesor = {type:"text"};



}export{CursosModel}