age = prompt("Enter your age:");
if (age >= 25) {
    alert("You are 25 years old and up.");
} else {
    alert("You are under 25 years old.");
}

number = prompt("Enter a number less than 100:");
if (number < 100) {
    alert("You entered a number less than 100.");
} else {
    alert("You entered a number greater than 100.");
}

document.write("<h1>The numbers 0-30, one number per line.</h1>");
for (i = 0; i <= 30; i++) {
    document.write(i + "<br>");
}

document.write("<h1>Even numbers 0-40, one number per line.</h1>");
for (i = 0; i <= 40; i+=2) {
    document.write(i + "<br>");
}

document.write("<h1>The numbers 40 to 10 in descending order, but only if the numbers are multiples of 3</h1>");
for (i = 40; i >= 10; i-=3) {
    document.write(i + "<br>");
}