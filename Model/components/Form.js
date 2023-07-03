//@ts-check
import React, { Component } from 'react';
import { Text, View , TextInput} from 'react-native';

// @ts-ignore
import { ModelPropierty } from '../MODEL/CommonModel';

class Form extends Component {
    constructor(props) {
        super(props);
        this.model = props.model;
        this.editObject = props.editObject ?? {};
        this.controls = [];
        for (const key in this.model) {
            this.controls.push(constructControlFromModel(key,
                this.model[key],
                this.editObject[key],
                this.onChangeText));
        }
    }
    onChangeText = (value, prop)=>{
        this.editObject[prop] = value;
        console.table(this.editObject);
    }
    render() {
         /* aca boton de guardado -
           ejecutara la funcion save,
           que ejucutara una funcion
           action que sera un parametro
           de las props */
        return (
            <View>
                {this.controls}              
            </View>
        );
    }
}
/**
 *  * @param {String} propName
     * @param {ModelPropierty} prop
     * @param {any} propName
     * @param {Function} propName
     * @returns {any}
     */
function constructControlFromModel(propName, prop, value, onChangeText) {
     /* aca boton de guardado -
           implemntar tipo fecha y password*/
    if (prop.type.toUpperCase() == "TEXT") {
        return (
            <View>
                <Text >{propName}</Text>
                <TextInput
                    style={controls.input}
                    onChangeText={ value => onChangeText(value, propName) }
                    value={value}
                />
            </View>
        );
    } else {
        return (
            <View>
                <Text>{propName}</Text>
            </View>
        );
    }
}
export { Form };

const text_style = {
    header2: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  };
  
  const controls = {
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
  };
  