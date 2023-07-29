// Form.js
import React, { Component } from 'react';
import { Text, View , TextInput, Button } from 'react-native';

class Form extends Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.editObject = props.editObject ?? {};
    this.controls = [];
    for (const key in this.model) {
      this.controls.push(
        constructControlFromModel(
          key,
          this.model[key],
          this.editObject[key],
          this.onChangeText
        )
      );
    }
  }

  onChangeText = (value, prop) => {
    this.editObject[prop] = value;
    console.table(this.editObject);
  };

  onSave = () => {
    this.props.onSave(this.editObject);
  };

  render() {
    return (
      <View>
        {this.controls}
        <Button title="Guardar" onPress={this.onSave} />
      </View>
    );
  }
}

function constructControlFromModel(propName, prop, value, onChangeText) {
  if (prop.type.toUpperCase() === 'TEXT') {
    return (
      <View key={propName}>
        <Text>{propName}</Text>
        <TextInput
          style={controls.input}
          onChangeText={(value) => onChangeText(value, propName)}
          value={value}
        />
      </View>
    );
  } else {
    return (
      <View key={propName}>
        <Text>{propName}</Text>
        {/* Implementar otros tipos de controles según sea necesario */}
      </View>
    );
  }
}

export default Form;

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
