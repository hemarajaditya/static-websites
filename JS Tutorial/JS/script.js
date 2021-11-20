// alert("Hello Hemaraj!")
// console.log(prompt("what is your name?"));

// Variable
// let , var and const

//operators

//Datatypes
//String, Number, Boolean, null, undefined

let name = "Hemaraj";
let age = 24;
let good = true;
let noValue = null;
let unAssigned;

let firstName = "Hemaraj";
let lastName = "Aditya";
let languages = "HTML, CSS, JAVASCRIPT";

//console.log("my first name is " + firstName + " last name is " + lastName);

/*console.log(`${firstName} and last name is ${lastName}`);
console.log(languages.substring(1, 6));
console.log(languages.split(",")[2]);
console.log(languages.replace("HTML","HTML5"));*/



//console.log(typeof age);

let frameworks = ["Angular","React","Vue"];
let database = new Array("DB2","SQL","MongoDB")
console.log(frameworks);
database[0] = "Oracle";
console.log(database);
console.log(database.sort());
console.log(database.pop());
console.log(database);
database.shift();
console.log(database);
database.unshift("postgre");
console.log(database);
console.log(Array.isArray(frameworks));
console.log(frameworks instanceof Array);


//objects in javascript


/*let employ = {
    id : 101, 
    firstName:"kumar", 
    lastName:"sekhar",
    skills: ["HTML","CSS","JAVASCRIPT"],
    address: {
        city:"guntur",
        state:"A.P"
    },
    fullName : function () {
        console.log(this)
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(employ.firstName);
console.log(employ.fullName());*/

// array of objects

/*let employees = [
    
    {
        id : 101, 
        firstName:"kumar", 
        lastName:"sekhar",
        age : 23,
    },

    {
        id : 102, 
        firstName:"navin", 
        lastName:"shankar",
        age : 24,
    },

    {
        id : 103, 
        firstName:"kiran", 
        lastName:"chandra",
        age : 25,
        address: {
            city:"guntur",
            state:"A.P"
        },
    }
];

console.log(employees[2].address.city);

const employeesJSON = JSON.stringify(employees);
console.log(employeesJSON);

const empArray = JSON.parse(employeesJSON);
console.log(empArray);*/

// loops in javascript

let employees = [
    
    {
        id : 101, 
        firstName:"kumar", 
        lastName:"sekhar",
        age : 23,
    },

    {
        id : 102, 
        firstName:"navin", 
        lastName:"shankar",
        age : 24,
    },

    {
        id : 103, 
        firstName:"kiran", 
        lastName:"chandra",
        age : 25,
        address: {
            city:"guntur",
            state:"A.P"
        },
    }
];

for (let i = 0; i<employees.length; i ++) {
    console.log(employees[i].age);
}

let j = 0;
while (j < employees.length) {
    console.log(employees[j].id);
    j++;

}

for (let employee of employees) {
    console.log(employee.firstName);
    
}









