


console.log('Hello from separated file!');
var name = 'Alex';
console.log(name);






var schoolTeam ='basketball';
var schoolNumber = 20;
console.log(schoolNumber);

var isRegistered= true;
console.log(isResistered);

var job;
console.log(job);

job ='student';
console.log(job);

console.log(name + ' ' + schoolNumber);
var schoolName, hasCourse;

schoolName = 'OAKAcademy';
hasCourse = true;


console.log(schoolName + ' has 35 courses. Does it have any course? ' + hasCourse);


schoolNumber = 'twenty two';
console.log(schoolNumber);

schoolTeam = 'tennis';
console.log(schoolTeam);


alert(schoolTeam);
var age=prompt('How old is he');
console.log('Alex is' + age + 'Years Old.');


///////////BASIC OPERATORS/////////////////
var totalDistance, distanceAlex, distanceSam;
var totalDistance= 20;

var distanceAlex =  totalDistance- 12;
console.log(distanceAlex);
var distanceSam = totalDistance - 7;
console.log(distanceSam);
console.log(distanceSam * 2);
console.log(distanceSam / 2);

//logical operators
var distanceToschool, distanceToHome;
distanceToHome = 14;
distanceToschool = 6;
var isCloser = distanceToHome > distanceToschool;
console.log(isCloser);


//BOOLEAN LOGIC
var isLoggedIn = false;


//CONDITIONAL STATEMENTS CODE QUIZ
/*
if a person is under 18, then he /she cannot enter the cafe.

if a person is older than 18 but under 23 then he /she can enter the cafe but cannot drink alcohol

if a person is older than 23, he/she can enter the cafe and drink alcohol.
*/

//CONDITIONAL STATEMENTS

var grade;
grade = 55;

if (grade<40){
    console.log('you can not go to next class.')
} else if (grade >=40 && grade < 45){
    console.log('you can not go to next class but you can enter the exam');

} else{
    console.log('you can go to next class');
}

var age;
age= 16;
if (age < 18){
    console.log('you can not enter the cafe.');

} 

if (age >= 18 && age < 23){

    console.log('you can enter the cafe but can not buy a drink');

} else{
    console.log('you can enter the cafe and can buy a drink');

}


//TERNARY OPERATOR
var grade = 80;
grade < 45
? console.log('you can not go to next class')

:console.log('you can  go to next class')

var result =grade < 45 ? 'failure' : 'success';
console.log(result);

if (grade = 45)
{
    result ='failure'
}  else{
    result = "success"
}

//SWITCH STATEMENTS

var day;
day = 'monday';

switch (day){
    
    
  
    case 'saturday':
        console.log('I like saturday');
        break;

        case 'monday':
        console.log('I  do not like monday');
        break;

        case 'friday':
        console.log('I  really like friday ');
        break;

        default:
            console.log('I do not know the day');
            break;

}


// grade = 55;

// if (grade<40){
//     console.log('you can not go to next class.');
// } else if (grade >=40 && grade < 45){
//     console.log('you can not go to next class but you can enter the exam');

// } else{
//     console.log('you can go to next class');
// }



var grade = 38;
switch (true){
    
    case (grade < 40):
        console.log('you can not go to next class.');
        break;
        case (grade >=40 && grade <45):
     console.log('you can not go to next class but you can enter the exam');
     break;
     default:
        console.log('you can go to next class');
        break;


}



//CODE QUIZ 2

// Alex, sara and nansy are in the same class.
// In math class, Alex's grades are 90, 80, 95.
// sara's grades are 89,76,98
// Nancy's grades are 42,98,83

// 1.calculate the average score for each student , then save that value into a variable.

// 2.find the highest average and then console log the student who has the highest average.
// 3.Averages may be the same.


var gradeAlex = (80 + 90 + 95)
/ 3;


var gradeSara = (89 + 76 + 98)
/ 3;


var gradeNancy = (42 + 98 + 83)
/ 3;

console.log('Alex avarage grade',gradeAlex);
console.log('Alex avarage grade',gradeSara);
console.log('Alex avarage grade',gradeNancy);

if (gradeAlex > gradeSara && gradeAlex > gradeNancy){
    console.log('Alex has the highest grade',gradeAlex);
} else if (gradeSara > gradeAlex && gradeSara > gradeSara){
    console.log('sara has the highest grade',gradeAlex);
} else if (gradeNancy > gradeAlex && gradeNancy > gradeSara){
    console.log('  Nancy has the highest grade',gradeNancy);
} else{
    console.log('Maybe there is same avarage')
}

///////////////LOOPS(Repetitive Situations)///////////
/*
- print numbers from 1 to 10 on the console.
(This is where loops come in to play.)
DRY =DO NOT REPEAT YOURSELF
*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);


/////WHILE LOOPS/////////
/*
Makes the code repeat as soon as a certain situation is correct.
while(situation){
    //if the situation is correct,it will run the code here.

}
*/

var number = 1;
while (number < 11){
    console.log(number);
    number+= 2;//number=number+1
}

/////WHILE LOOPS QUIZ/////////

/*
1.print even numbers from 132 to 148 on the console
2.print numbers between 25 and 100,divisible by 7,to the console
*/


// var number = 132;
// while (number <=148){
//     console.log(number);
//     number += 2;
// }

var number = 132;
while( number <= 148){
    if (number % 2 ===0){
        console.log(number);
    }
    number++;
}
console.log('numbers divisible by 7');
var count = 25;

while (count <= 100){
    if(count % 7 === 0){
        console.log(count);
    }
    count++;
}


////FOR LOOPS////
/*
for(init; condition;step){
    ////If the condition is correct, it will run the code here.
}
*/

/*
var number = 1;
while (number < 11){
    console.log(number);
    number+= 2;//number=number+1
}
*/

for(var number =1; number <11;number++){
    console.log(number);
}


/*
1.print even numbers from 132 to 148 on the console
2.print numbers between 25 and 100,divisible by both 7 and 5,to the console
*/

for(var i = 132; i<= 148; i++){
    if(i % 2 !==0 ){
        console.log(i);
    }
}

for (var i =25; i <=100; i++){
    if ((i % 7 ===0) && (i % 5 ===0)){
        console.log(i);
    }
}


///////CONTINUE AND BREAK/////
/*
1.Check the numbers from 1 to 10 and just print the numbers that can be divided by 2 on the console
2.Check the numbers from 1 to 10 and just print the first number that can be divided by 2 on the console

*/

console.log('continue statement');

for (var i = 1; i<=10; i++){
    if(i % 2 !== 0 ) continue;
        console.log(i);
    
}

console.log('break statement');

for(var i= 1; i <=10; i++){
 if (i % 2 === 0){
    console.log(i);
    break;
 }
}



//////////FUNCTION/////////


// function sayHello(){
//     console.log('Hello world');
// }

// sayHello();
/*
function doSomething(){
    console.log('Hello world');
    console.log('Hello Kartik');
    console.log('How are you');
}

doSomething();
doSomething();
doSomething();
doSomething();
*/

/////FUNCTION WITH ARGUMENTS //////

/*function sayHi(name){
    console.log('Hi' + ' ' + name);
}

sayHi('Sara');
sayHi('John');

function cube(number) {
    console.log(number * number * number);
}

cube(3);
cube(79);

function bmi(length,weight) {
    console.log(weight / (number * number));
}

bmi(1.80, 85);

function checkUserInfo(email,password) {
    if () {
        
    }

} */

//////////FUNCTION RETURN KEYWORD ////////


/* function cube(number) {
    if(number === 25){
        return;
    }
    return (number * number * number);
}

var num = cube(25);


console.log('this is another console',num);
function calculateAge(birthyear){
    return 2020 - birthyear;

}


var age = calculateAge(1992);
console.log('this is the age',age);

function enterCafe(Age){
    if (Age < 18){
        return 'you can not enter cafe';
    }

    return 'you can enter cafe';
}

var cafe = enterCafe(17);
console.log(cafe);
*/


/////////FUNCTION DECLARATION AND EXPRESSION/////////////

// function declaration

// function calculateAge(birthyear){
//     return 2020 - birthyear;

// }

//function expression
var calculateAge = function (birthyear){
    return 2020 -birthyear;
}

var age = calculateAge(1981);
console.log(age);

calculateAge ='john';
console.log(calculateAge);

   var Age = calculateAge(1990);


   ////////Function QUIZ///////
   /*
   1.Create a function called 'subtraction', this function takes
   two arguments x and y, then subtracts one of these arguments from the other and returns the result.Then console log the result.

   2.Declare a function called 'is odd', this function is gonna take one argument and it is gonna check if that argument is an 'odd number',
   then it needs to return a Boolean and console that.

   3.Declare a function called 'addition' it is  gonna take one argument,then it needs to sum up all numbers from 1 to that argument and return the total value. Then you need to console log that total.
   */

  /* function subtraction(x, y){
    return y - x;
   }

   var result = subtraction(18, 97);
   console.log(result);

   var isOdd = function (number) {
    if (number % 2 !== 0){
        return true;

    }

    return false;
   }

   console.log(isOdd(5));

   var addition = function (number){
    var res = 0;
    for(var i = 1; i <= number; i++){
        res = res + i;

    }
    return res;
   }

   var addResult = addition(3);
   */

   ///////////FUNCTION SCOPE/////////////

//    function sayName(){
//     var Name = 'Sheldon';
//     console.log(Name);

//    }

//    sayName();
//    console.log(Name);

//    var count = 18;
//    console.log(Count);

//    function writeCount () {
//     console.log(count);
//    }


//    writeCount () ;

//    function sayHi () {
//     var myWord = 'Hi there';
//     console.log(myWord);
//     sayBye();

//     function sayBye() {
//         console.log(myWord);
//     }




//    }

//    sayHi();


// var sentence = 'Hello world';

// function saySentence(){
//     sentence = 'bye bye';
//     console.log(sentence);
// }

// saySentence();
// console.log(sentence);

// function writeNumber(){
//     var myx = 30;
//     console.log(myx);
// }


// function doSomething(){
//     console.log(myx);
// }

// writeNumber();
// doSomething();


//////////ARRAYS///////////

var student1 = 'Sheldon'

var student2 = 'penny'


var student3 = 'Leonard'


var student4 = 'Raj'

var students = ['Sheldon', 'Leonard','Penny','Raj'];

//Sheldon = index 0
//Leonard = index 1

// penny = index 2

//Raj = index 3


console.log(students);
console.log(students[0]);

student[0]='Amy';
console.log(students);

students[4] = 'Howard';
console.log(students);

students[7] = 'john';
console.log(students);

// var cats = [];

// var cats = new Array();

var commonData = ['john',25,true,null];
commonData[1];

var cars = ['Mercedes','Audi','bmw','volvo'];
var cars_length =cars.length;

console.log(cars_length);

////////ARRAY METHODS///////////

var students = ['Sheldon','Leonard','penny','Raj'];

//push method adds a new item to the end of an array

// students.push('Bernadette');
console.log(students);

//pop method removes the last item from array
var lastStudent = students.pop();
console.log(lastStudent);

//unshift adds new item to the begginning of array
var cats = ['cat1','cat2','cat3'];
cats.unshift('cat4');
console.log(cats);

//shift method removes item from begginning
cats.shift();
console.log(cats);

//indexof
console.log(students.indexOf('Sheldon'));

//slice
var friends = ['Ross','Rachel','joey','chandler'];
var closeFriends = friends.slice(1, 3);
console.log(friends);
console.log(closeFriends);

var otherFriends = friends.slice();
console.log(otherFriends);

/////ARRAY QUIZ///////////////

/*
var books = ['Harry potter','Hobbit','Hunger Games','Little Prince'];
1. Acess the last element of the books array using
the length of the array and print it to the console

var films = [
    ['hobbit1', 'hobbit2', 'hobbit3'],
    ['matrix1','matrix2','matrix3'],
    ['godFather1','godFather2','godFather3']
]

2. print the godFather3 film from the films array to the console
*/
/*
var books = ['Harry potter','Hobbit','Hunger Games','Little Prince'];
console.log(books[books.length - 1]);

var films = [
    ['hobbit1', 'hobbit2', 'hobbit3'],
    ['matrix1','matrix2','matrix3'],
    ['godFather1','godFather2','godFather3']
]

console.log(films[2][2]);
*/

var books = ['Harry potter','Hobbit','Hunger Games','Little Prince'];
/*
for (var i = 0; i < books.length;i++){
    console.log(books[i]);
} */

books.forEach(function (book){
    console.log();
}
);

////////ARRAY ITERATION QUIZ ///////

/*

1. create an array which includes numbers between 0 and 20
by using 'push' method.

2.by using this array you created in the first question, you will print the
numbers that can be divided by 5 to the console using the 'for each' method
*/

/*
var numbers = [];

for(var i =0; i <= 20; i++){
    numbers.push(i);
}

console.log(numbers);

numbers.forEach(function(number){
    if (number % 5 === 0){
        console.log(number);

    }

}
);
*/

/////////objects//////
/*
var student1 = ['Sheldon',36,'calTech'];
var student2 = [35, 'MIT','Leonard'];
student1[2];
student2[1];

*/

/*
var student = new Object();
student.school
*/

var schoolName = 'school';

var student = {
    name: 'Sheldon',
    age: 36,
    school: 'calTech',
};
/*
console.log( student['name']);
console.log(student.school);
*/
/*
console.log(student[schoolName]);



var Leonard = {
    name: 'Leonard',
    
    school: 'calTech',

    age:35
};

Leonard.age += 1;
console.log(Leonard.age);

Leonard['school'] ='MIT';
console.log(Leonard['school']);

var student1 = {
    name: 'Amy',
    age:25,
    friends:['Howard','Bernadette','Raj'],
    bestFriend: {
        firstName:'penny',
        birthyear: 1998
    }
};

var bestFriendOfStudent11 = student11.bestFriend.firstName;
console.log(bestFriendOfStudent11);

var friend2 = student11.friends[1];
console.log(friend2);
*/

////////////HOW TO ADD PROPERTY TO OBJECTS////////

/*
var colors = {};

colors.orange = {code: 123};
console.log(colors.orange.code);

colors.black = {code: [4,5,6]}
console.log(colors.black.code[1]);

var blogposts = [
    {
        title:'whether',
        content: 'it is rainy today',
        comments: [
            {
            name:'John',
            lastName:'Travolta'
            },

            {
                name:'Frodo',
                lastName:'Bagins'
                }
        ]
    },

    {
        title:'whether',
        content: 'i do not like weather'
    }
];

console.log(blogposts[0].title);
console.log(blogposts[0].comments[1].name);

*/

////OBJECTS QUIZ ////////

/*

1. create an array of objects called 'universities'.
Every object needs to have 'name', 'hasGone' and 'year' properties.
loop over this array and if 'hasGone' value is true then print a statement to the console which includes 'name' and 'year' properties.
If 'hasGone' is false, just print the 'name' property to the console.
*/


var universities = [
    {
        name:'MIT',
        hasGone:false,
        year: 1890
    },
    {
        name:'Harvard',
        hasGone:true,
        year:1900
    },
    {
        name:'Oxford',
        hasGone:true,
        year:1800
    }
];

universities.forEach(function(university){
 if(university.hasGone === true){
    console.log(university.name + university.year);
 } else{
    console.log(university.name);
 }
});

/////////OBJECT METHODS ////////

var Sheldon = {
    name: 'Sheldon',
    age: 35,
    hasGone: true,
    friends:['penny', 'Raj'],
    say: function () {
        console.log('say hi');
    }

}

Sheldon.say();


var Leonard = {
    name: 'Leonard',
    say: function(){
        console.log('say hi Leonard');
    }

}

Leonard.say();

////////////////// THIS KEYWORD ///////////

// console.log(this);

function addNumber(x, y){
    console.log(x+y);
    console.log(this);

}


addNumber(10, 20);

var Raj = {
    name: 'Raj',
    year: 1989,
    sayHi:function() {
        console.log(this);
        console.log('say hi ' + this.name);
        function someFunc(){
            console.log(this);

        }
       someFunc(); 

    }
};

Raj.sayHi();































   



   












