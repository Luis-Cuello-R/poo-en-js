/* const luis1 = {
    name: "LuisC",
    username: "lumac",
    points: 100,
    socialMedia: {
        facebook: "Luis Mario",
        instagram: "Luis Mario",
        X: undefined,
    },
    approvedCourses: [
        "Curso definitivo de html y css",
        "Curso practico de html y css",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de html y css",
                "Curso practico de html y css",
                "Responsive design ",
            ]
        },
        {
            name: "Escuela de videoJuegos",
            courses: [
                "Curso introducción a la producción de video juegos",
                "Unreal engine",
                "Unity 3D ",
            ]
        },
    ],
};

const luis2 = {
    name: "LuisCR",
    username: "lumac",
    points: 1000,
    socialMedia: {
        facebook: "Luis_Mario",
        instagram: "Luis Mario",
        X: undefined,
    },
    approvedCourses: [
        "Curso Data Business",
        "Curso DataViz",
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de html y css",
                "Curso practico de html y css",
                "Responsive design ",
            ]
        },
        {
            name: "Escuela de data sciences",
            courses: [
                "Curso Data Business",
                "Curso DataViz",
                "Table ",
            ]
        },
    ],
}; */


class student {
    constructor({
        name,
        email,
        username,
        x = undefined,
        instagram = undefined ,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],     
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            x,
            instagram,
            facebook,
        },
        this.approvedCourses  = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgramacionBasica = new courses({
  name: "curso gratis de programación básica",

});

const cursoDefinitivoHTML = new courses({
  name: "curso definitivo html y css",

});

const cursoPracticoHTML = new courses({
  name: "curso practico html y css",

});
  
class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}


const escuelaWeb = new learningPaths({
  name: "Escuela de desarrollo Web",
  courses: [
    cursoProgramacionBasica,
    "curso práctico de html y css",
  ],
});

const escuelaData = new learningPaths({
  name: "Escuela de Data Science",
  courses: [
    cursoProgramacionBasica,
    "curso Data business",
    "curso Dataviz",
  ],
});

const escuelaVgs = new learningPaths({
  name: "Escuela de video juegos",
  courses: [
    cursoProgramacionBasica,
    "curso de unity",
    "curso Unreal",
  ],
});