const url = "https://192.168.162.37:5001/api/";
class EntityClass {
  save = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(this),
    });
    const responseTest = await response.json();
  };
   obtenerAlumnos = async () => {
    const response = await fetch(`${url}Alumnos`);
    const data = await response.json();
    return data;
  };
  
}


const obtenerAlumnoPorDNI = async (dni) => {
  const response = await fetch(`${url}Alumno/${dni}`);
};

const actualizarAlumno = async (dni, alumno) => {
  const response = await fetch(`${url}Alumno/${dni}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alumno),
  });

  if (response.ok) {
    console.log("Alumno actualizado exitosamente");
  } else if (response.status === 404) {
    console.log("Alumno no encontrado");
  } else {
    throw new Error("Error al actualizar el alumno");
  }
};

const obtenerCursos = async () => {
  const response = await fetch(`${url}Curso`);
  const data = await response.json();
  return data;
};

const obtenerCursoPorId = async (id) => {
  const response = await fetch(`${url}Curso/${id}`);
};

const crearCurso = async (curso) => {
  const response = await fetch(`${url}Curso`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(curso),
  });
};

const actualizarCurso = async (id, curso) => {
  const response = await fetch(`${url}Curso/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(curso),
  });
};

const obtenerEmpresas = async () => {
  const response = await fetch(`${url}Empresa`);
  const data = await response.json();
  return data;
};

const obtenerEmpresaPorCIF = async (cif) => {
  const response = await fetch(`${url}Empresa/${cif}`);
};

const crearEmpresa = async (empresa) => {
  const response = await fetch(`${url}Empresa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(empresa),
  });
};

const obtenerFechasCursos = async () => {
  const response = await fetch(`${url}FechasCursos`);
  const data = await response.json();
  return data;
};
const obtenerFechaCursoPorId = async (id) => {
  const response = await fetch(`${url}FechasCursos/${id}`);
};
const crearFechaCurso = async (fechaCurso) => {
  const response = await fetch(`${url}FechasCursos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fechaCurso),
  });
};
const actualizarFechaCurso = async (id, fechaCurso) => {
  const response = await fetch(`${url}FechasCursos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fechaCurso),
  });
};
const obtenerNotaPorId = async (id) => {
  const response = await fetch(`${url}Notas/${id}`);
};

const crearNota = async (nota) => {
  const response = await fetch(`${url}Notas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nota),
  });
};

const actualizarNota = async (id, nota) => {
  const response = await fetch(`${url}Notas/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nota),
  });
};

const obtenerNotas = async () => {
  const response = await fetch(`${url}Notas`);
};

const obtenerProfesores = async () => {
  const response = await fetch(`${url}Profesores`);
  const data = await response.json();
  return data;
};

const obtenerProfesorPorId = async (id) => {
  const response = await fetch(`${url}Profesores/${id}`);
};
const crearProfesor = async (profesor) => {
  const response = await fetch(`${url}Profesores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profesor),
  });
};
const actualizarProfesor = async (id, profesor) => {
  const response = await fetch(`${url}Profesores/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profesor),
  });
};
export { EntityClass };
