import { Text, View, Button, Alert } from 'react-native';
import React from 'react';
import { Form } from '../components/Form';
import { LoginModel } from '../LoginModel';

const loginForm = {
    usuario: { type: "TEXT" },
    password: { type: "TEXT" }
}


const LoginView = ({ navigation, route }) => {
    return <Form model={new LoginModel()} action={async (user) => {
        
        Alert.alert(JSON.stringify(responseTest));
    }} />;
};
export { LoginView }