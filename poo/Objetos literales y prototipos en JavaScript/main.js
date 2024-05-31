const natalia = {
    name: "Luis",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de html y css",
        "Curso práctico de html y css",
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

function student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

student.prototype.aprobarCurso = function(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new student(
    "Juanita alejandra",
    20,
    [
        "curso de introducción a la producción de video juegos",
        "curso de creación de personajes",
    ],
);

// hacer que luis apruebe otro curso
natalia.cursosAprobados.push("Curso de responsive design");

// prototipos con la sintaxis de clases 

class student2 {
    constructor({
        name,
        age,
        cursosAprobados = [""],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

const luchito = new student2({
    name: "Lucho",
    age: 28,
});