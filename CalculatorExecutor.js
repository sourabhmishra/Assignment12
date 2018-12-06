var calculator = require('./CalculatorModule.js');
var rs = require('readline-sync');

//Calculator
var x = rs.question("Please enter a number ");
var symbol = rs.question('Please enter an operator (+, - , / , * ) ');
var y = rs.question('Please enter another number ');

switch(symbol){
case '+':
calculator.add(x, y);
break;
case '-':
calculator.subtract(x, y);
break;
case '*':
calculator.multiply(x,y);
break;
case '/':
calculator.divide(x, y);
break;
default:
console.log("Invalid Entry was made!!");
}
