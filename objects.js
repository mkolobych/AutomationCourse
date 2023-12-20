//1. створити 3 обʼєкти через {}
/*let aboutMe = {
    name: 'Marian',
    Age: 29,
    manualQA: true,
    hobby: undefined,
    simpleArray: [1,2,3,4,5]
};

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    isElectric: false,
    features:29 ['power windows', 'air conditioning', 'Bluetooth']
};

let movie = {
    title: 'Inception',
    genre: 'Sci-Fi',
    releaseYear: 2010,
    isPopular: true,
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
};

console.log(aboutMe);
console.log(car);
console.log(movie);*/


//2. створити 3 обʼєкти через Object()
/*let myInfo = new Object ();
myInfo.firstName = "Marian";
myInfo.lastName = "Kolobych";
myInfo.age = 29;
myInfo.isMarried = true;
myInfo.hobby = ["Undefined", "nothing"];

let mycar = new Object ();
mycar.brand = "Ford";
mycar.model = "Focus";
mycar.yeat = 2017;
mycar.disel = false;
mycar.feature = ["heated seats", "climate control"];

let motorcycleBrands = Object ();
motorcycleBrands.Brands = ['Honda', 'Yamaha', 'Harley-Davidson', 'Kawasaki', 'BMW']; 
motorcycleBrands.foundedYear = {
    Honda: 1948,
    Yamaha: 1953,
    'Harley-Davidson': 1903,
    Kawasaki: 1896,
    BMW: 1916
}

console.log(myInfo);
console.log(mycar);
console.log(motorcycleBrands);*/

//3. створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі
/*let Object1 = {
    Provesion: 'AQA',
    yearsOfExperience: 5,
}

let Object2 = Object.create(Object1);
Object2.name = 'Vacil';
Object2.Age = 25;
Object2.gender = "male";
Object2.hobby = ["Fishing"];

let Object3 = {
    height: 175,
    weight: 70,
    __proto__: Object1
}

console.log(Object2.Provesion);
console.log(Object3.yearsOfExperience);*/

// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)

let  person = {
    name: "Ivan",
    age: 27,
    aboutPerson: function() {
      console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
    }
  };


let engineer ={
    name: "Oleksii",
    role: "developer",
    progLanguage: "Jave",
    experiance: 7,
    aboutEngineer: function() {
        console.log(`My name is ${this.name}, I have a ${this.experiance}-years of experience in engineer, ${this.progLanguage}-is my favorite programming language`);
        
    },
    __proto__: person
};

let QA_engineer = Object.create(engineer);
QA_engineer.name = 'Oleh';
QA_engineer.experience = 3;
QA_engineer.testingTools = ['TestRail', 'Jenkins'];
QA_engineer.aboutQA = function() {
    console.log(`My name is ${this.name}, I'm a QA engineer with ${this.experience} years of experience.`);
    console.log(`I specialize in manual testing, using tools like ${this.testingTools.join(', ')}.`);
};
console.log("Details about Person:");
engineer.aboutPerson(person);

console.log("Details about Engineer:");
engineer.aboutEngineer(engineer);

console.log("Details about QA Engineer:");
QA_engineer.aboutQA(QA_engineer);





