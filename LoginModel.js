import ModelProperty from "./Model/CommomModel";

//@ts-check
class LoginModel
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
}

export{LoginModel}