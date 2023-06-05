import React, { Component } from 'react';
import { Text, View , TextInput, Button} from 'react-native';
import { Principal } from '../styles/main_style';
import { Calendar } from 'react-native-calendars';
// @ts-ignore
import { ModelProperty } from '../Model/CommomModel';

class Form extends Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.editObject = props.editObject ?? {};
    this.controls = [];
    for (const key in this.model) {
      this.controls.push(constructControlFromModel(
        key,
        this.model[key],
        this.editObject[key],
        this.onChangeText
      ));
    }
  }

  onChangeText = (value, prop) => {
    this.editObject[prop] = value;
    console.table(this.editObject);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.controls}
        <Button
          title="Save"
          onPress={() => this.props.onSave(this.editObject)}
        />
      </View>
    );
  }
}

/**
 * @param {String} propName
 * @param {ModelProperty} prop
 * @param {String} value
 * @param {Function} onChangeText
 * @returns {any}
 */
function constructControlFromModel(propName, prop, value, onChangeText) {
  if (prop.type.toUpperCase() === "TEXT") {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{propName}</Text>
        <TextInput
          placeholder={propName.toString()}
          style={styles.input}
          onChangeText={value => onChangeText(value, propName)}
          value={value}
        />
      </View>
    );
  } else if (prop.type.toUpperCase() === "DATE") {
    return (
      <View style={styles.calendarContainer}>
        <Text style={styles.label}>Fecha</Text>
        <Calendar 
          onDayPress={date => onChangeText(date, propName)}
          markedDates={{ [value]: { selected: true } }}
        />
      </View>
    );
  } else if (prop.type.toUpperCase() === "PASSWORD") {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Ingrese su contraseña"
          style={styles.input}
          onChangeText={value => onChangeText(value, propName)}
          value={value}
          secureTextEntry
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

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
  },
  calendarContainer: {
    marginBottom: 20,
  },
};

export { Form };
