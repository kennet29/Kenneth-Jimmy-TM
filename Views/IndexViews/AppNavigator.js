import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Index_Alumnos from './index_Alumnos';
import AlumnoEditView from '../AlumnoEditView';
import IndexEmpresas from './IndexEmpresas';
import CrearEmpresaView from './CrearEmpresaView';
import EditEmpresaView from '../EditEmpresaView';
import CrearAlumnoView from './CrearAlumno'; // Modificado el nombre de la vista aquí
import EditarProfesor from './EditarProfesor'
import CrearProfesorView from './CrearProfesorView';
const MainNavigator = createStackNavigator(
  {
    Index_Alumnos: { screen: Index_Alumnos },
    AlumnoEditView: { screen: AlumnoEditView },
    IndexEmpresas: { screen: IndexEmpresas },
    EditEmpresaView: { screen: EditEmpresaView },
    CrearAlumnoView: { screen: CrearAlumnoView }, 
    CrearEmpresaView:{screen:CrearEmpresaView},
    EditarProfesor:{screen: EditarProfesor},
    CrearProfesorView:{screen: CrearProfesorView},
  },
  {
    initialRouteName: 'Index_Alumnos',
  }
);

export default createAppContainer(MainNavigator);

