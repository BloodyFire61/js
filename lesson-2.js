// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // сначала ++ a =2, c=2
d = b++; alert(d); // сначала b=1 потом ++ d=1
c = (2 + ++a); alert(c); // 2+ ++a(2)=3 c=5
d = (2 + b++); alert(d); // 2+ b(2)++=2 d=4
alert(a); //3
alert(b); //3
// Задание 2
var a = 2;
var x = 1 + (a *= 2);
alert(x); // 1+(a=2*2)
// Задание 3
var a = Math.random(), b = Math.random();
if (a >= 0 && b >= 0) {
    alert("Разность чисел: " + (a - b));
}
else if (a <= 0 && b <= 0) {
    alert("Произведение чисел: " + (a * b));
}
else {
    alert(" Сумма чисел: " + (a + b));
}
// Задание 4
var a = parseInt(Math.random() * (16 - 1) + 1);
switch (a) {
    case 0:
        document.write(0);
    case 1:
        document.write(" 1 ");
    case 2:
        document.write(" 2 ");
    case 3:
        document.write(" 3 ");
    case 4:
        document.write(" 4 ");
    case 5:
        document.write(" 5 ");
    case 6:
        document.write(" 6 ");
    case 7:
        document.write(" 7 ");
    case 8:
        document.write(" 8 ");
    case 9:
        document.write(" 9 ");
    case 10:
        document.write(" 10 ");
    case 11:
        document.write(" 11 ");
    case 12:
        document.write(" 12 ");
    case 13:
        document.write(" 13 ");
    case 14:
        document.write(" 14 ");
    case 15:
        document.write(" 15 ");
}
// 5 задание
var a, b;
function sum(a, b) {
    return a + b;
}
function dif(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function div(a, b) {
    if (b != 0)
        return a / b;
    return 0;
}
// 6 задание
a = +prompt(" Введите первое число");
b = +prompt("Введите второе число");
c = prompt("Введите знак + , - , * , /");
function mathOperation(a, b, c) {
    switch (c) {
        case "+":
            alert(sum(a, b));
            break;
        case "-":
            alert(dif(a, b));
            break;
        case "*":
            alert(multi(a, b));
            break;
        case "/":
            alert(div(a, b));
            break;
        default:
            alert("Введен неверный знак");
            break;
    }
}
mathOperation(a, b, c)
// 7 Задание 
var a = null; var b = 0;
alert(a == b); //false 
alert(null != 0); //true 
alert(null > 0); //false
alert(null < 0); //false
alert(null >= 0); //true
alert(null <= 0); //true