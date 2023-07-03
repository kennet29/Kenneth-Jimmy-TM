import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Navbar from './Views/components/Navbar';
import AlumnosViews from "./Views/components/AlumnoView";
import EmpresaView from "./Views/components/EmpresaView";
import CursoView from "./Views/components/CursoView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navbar" headerMode="screen">
        <Stack.Screen style={{backgroundColor:'darkred'}}
          name="Navbar"
          component={Navbar}
          options={{
            headerTitle: (props) => (
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                Registro Académico
              </Text>
            ),
          }}
        />
        <Stack.Screen name="Inicio" component={AlumnosViews} />
        <Stack.Screen name="Explorar" component={EmpresaView} />
        <Stack.Screen name="Perfil" component={CursoView} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
