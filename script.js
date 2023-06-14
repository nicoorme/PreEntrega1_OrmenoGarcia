let alumnos = [
    {
        legajo: 1001,
        nombre: 'Ana',
        apellido: 'Vivas',
        dni: 45234442,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1002,
        nombre: 'Manuel',
        apellido: 'Ordoñez',
        dni: 42330393,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1003,
        nombre: 'Alejandro',
        apellido: 'Moran',
        dni: 43982710,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1004,
        nombre: 'Eugenio',
        apellido: 'Islas',
        dni: 44992692,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1005,
        nombre: 'Carla',
        apellido: 'Gomez',
        dni: 45927433,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1006,
        nombre: 'Natalia',
        apellido: 'Acosta',
        dni: 44229018,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1007,
        nombre: 'Federico',
        apellido: 'Rivas',
        dni: 43847993,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1008,
        nombre: 'Laura',
        apellido: 'Giordano',
        dni: 45929111,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1009,
        nombre: 'Micaela',
        apellido: 'Martinez',
        dni: 46301112,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
    {
        legajo: 1010,
        nombre: 'Joaquin',
        apellido: 'Garcia',
        dni: 46321234,
        matematica: null,
        lengua: null,
        sociales: null,
        naturales: null,
        promedio: null,
        estado: null,
    },
];

console.log(alumnos.legajo);

let nombre = prompt('Ingresa tu nombre').toUpperCase();
let menu;
let legajoNuevo = 1010;

do {
    menu = prompt(
        'BIENVENIDO/A ' +
            nombre +
            '\n\nElegí una opción:\n1) Ver lista de alumnos\n2) Ingresar alumno nuevo\n3) Cargar notas\n4) Ver nota promedio y estado\n5) Estado de alumnos\n0) Salir'
    );
    if (menu == 1) {
        alert(lista(alumnos));
    }
    if (menu == 2) {
        nuevoAlumno();
    }
    if (menu == 3) {
        cargarNota();
    }
    if (menu == 4) {
        alert(listaPromediosYEstado(alumnos));
    }
    if (menu == 5) {
        alert(estadoAlumnos(alumnos));
    }
} while (menu != 0);

function lista(arrayIngresado) {
    let listado = 'Legajo - Nombre y Apellido\n\n';
    arrayIngresado.forEach((elemento) => {
        listado = listado + elemento.legajo + ' - ' + elemento.nombre + ' ' + elemento.apellido + '\n';
    });
    return listado;
}

function listaPromediosYEstado(arrayIngresado) {
    let listado = 'Legajo - Nombre y Apellido - Promedio\n\n';
    arrayIngresado.forEach((elemento) => {
        if (elemento.promedio == null) {
            listado =
                listado +
                elemento.legajo +
                ' - ' +
                elemento.nombre +
                ' ' +
                elemento.apellido +
                ' - ' +
                'Sin datos' +
                ' - ' +
                'Sin datos' +
                '\n';
        } else {
            listado =
                listado +
                elemento.legajo +
                ' - ' +
                elemento.nombre +
                ' ' +
                elemento.apellido +
                ' - ' +
                elemento.promedio +
                ' - ' +
                elemento.estado +
                '\n';
        }
    });
    return listado;
}

function nuevoAlumno() {
    let legajo = legajoNuevo + 1;
    let nombre = prompt('Ingrese nombre del alumno');
    let apellido = prompt('Ingrese apellido del alumno');
    let dni = Number(prompt('Ingrese DNI del alumno'));
    let matematicas = null;
    let lengua = null;
    let sociales = null;
    let naturales = null;
    let promedio = null;
    let estado = null;

    legajoNuevo = legajo;

    alumnos.push({ legajo, nombre, apellido, dni, matematicas, lengua, sociales, naturales, promedio, estado });
}

function cargarNota() {
    let legajoElegido = prompt('CARGAR NOTAS\nElegi nro de legajo:\n\n' + lista(alumnos));

    const alumnoNotas = alumnos.find((alumno) => alumno.legajo == legajoElegido);

    let matematicas = Number(prompt('Ingrese nota de matematicas'));
    let lengua = Number(prompt('Ingrese nota de lenguas'));
    let sociales = Number(prompt('Ingrese nota de sociales'));
    let naturales = Number(prompt('Ingrese nota de naturales'));

    alumnoNotas.matematicas = matematicas;
    alumnoNotas.lengua = lengua;
    alumnoNotas.sociales = sociales;
    alumnoNotas.naturales = naturales;
    alumnoNotas.promedio = (matematicas + lengua + sociales + naturales) / 4;

    if (alumnoNotas.promedio >= 7) {
        alumnoNotas.estado = 'REGULAR';
    } else {
        alumnoNotas.estado = 'LIBRE';
    }
}

function estadoAlumnos(arrayIngresado) {
    let opcion = Number(prompt('ESTADOS\nElija:\n\n1) REGULAR\n2) LIBRE'));
    let listado = 'Legajo - Nombre y Apellido - Promedio\n\n';

    if (opcion == 1) {
        const filtroEstado = arrayIngresado.filter((elemento) => elemento.estado == 'REGULAR');
        filtroEstado.forEach((elemento1) => {
            listado = listado + elemento1.legajo + ' - ' + elemento1.nombre + ' ' + elemento1.apellido + ' - ' + elemento1.estado + '\n';
        });
        return listado;
    } else if (opcion == 2) {
        const filtroEstado = arrayIngresado.filter((elemento) => elemento.estado == 'LIBRE');
        filtroEstado.forEach((elemento1) => {
            listado = listado + elemento1.legajo + ' - ' + elemento1.nombre + ' ' + elemento1.apellido + ' - ' + elemento1.estado + '\n';
        });
        return listado;
    }
}

console.log(alumnos);
