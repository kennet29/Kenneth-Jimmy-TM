import ModelProperty from "./Model/CommomModel";

//@ts-check
class RegisterModel
{

/**
 * 
 *@param {Object}props
 */


constructor(props={})
{
for(const prop in props)
{
    if(this[prop]) this[prop]=props[prop];
}
}
/**@type {ModelProperty} */
usuario={type:"TEXT"}
/**@type {ModelProperty} */
password={type:"TEXT"}
/**@type {ModelProperty} */
re_password={type:"TEXT"}
/**@type {ModelProperty} */
direccion={type:"TEXT"}
/**@type {ModelProperty} */
correo={type:"TEXT"}
}

export{RegisterModel}