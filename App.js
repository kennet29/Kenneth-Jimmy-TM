import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Navbar from './Views/components/Navbar';
import AlumnosViews from "./Views/components/AlumnoView";
import EmpresaView from "./Views/components/EmpresaView";
import CursoView from "./Views/components/CursoView";
import ProfesoresView from "./Views/components/ProfesorView"
import FechaCursosView from './Views/components/FechaCursosView';
import Index_Alumnos from './Views/IndexViews/index_Alumnos';
import index_Empresas from './Views/IndexViews/index_Empresas';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Navbar" headerMode="screen" >
    
        <Stack.Screen 
          name="Navbar"
          style={{background: 'darkred'}}
          component={Navbar}
          options={{
            headerTitle: (props) => (
              <Text style={{ fontSize: 24, fontWeight: 'bold',  }}>
                Registro Académico
              </Text>
            ),
          }}
        />
        
        <Stack.Screen name="Alumnos" component={Index_Alumnos} />
        <Stack.Screen name="Empresas" component={index_Empresas} />
        <Stack.Screen name="Perfil" component={CursoView} />
        <Stack.Screen name="Profesores" component={ProfesoresView} />
        <Stack.Screen name="Informacion_Cursos" component={FechaCursosView} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
  
}
