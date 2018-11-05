var num = 5;
console.log(typeof num);

var message = 'SkillUp Lesson 9 Homework'
console.log(typeof message);

var logic = true;
console.log(typeof logic);

var question = null;
console.log(typeof question);

var x;
console.log(typeof undefined);

var user = { name: "Nina Tertychnyy" };
console.log(typeof user);

var myCurrentAge = 32;
var over = 'I am over 25 years old';
var under = 'I am under 25';


if (myCurrentAge >= 25) {
    console.log(over);
} else {
    console.log(under);
}

myCurrentAge >= 25 ? console.log(over) : console.log(under);