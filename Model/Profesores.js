//@ts-check
import ModelProperty from "./CommomModel";
import { EntityClass } from "./components/Entitys/Entityclass";

class Profesores extends EntityClass {
  /**
   *
   * @param {Object} [props]
   */
  constructor(props = {}) {
    super();
    for (const prop in props) {
      if (this[prop]) this[prop] = props[prop];
    }
  }
  /**@type {string | undefined} */
  DNI = undefined;
  /**@type {String | undefined} */
  Nombres = undefined;
  /**@type {String | undefined} */
  Apellidos = undefined;
  /**@type {String | undefined} */
  Direccion = undefined;
  /**@type {String | undefined} */
  Telefono = undefined;
}
export { Profesores };

class ProfesoresModel {
  /**@type {ModelProperty} */
  DNI = { type: "text" };
  /**@type {ModelProperty} */
  Nombres = { type: "text" };
  /**@type {ModelProperty} */
  Apellidos = { type: "text" };
  /**@type {ModelProperty} */
  Direccion = { type: "text" };
  /**@type {ModelProperty} */
  Telefono = { type: "text" };
}
export  {ProfesoresModel} ;
