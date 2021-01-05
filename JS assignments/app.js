// chapter 1
// task 1
// alert("Error! Please enter a valid password")
// task 2
// alert("Welcome to JS land...\nHappy Coding!")
// task 3
// alert("Welcome to JS land")
// task 4
// alert("Happy Coding!\nPrevent this Page from creating additional dialogs")
// task 5
// alert("Hello... I can run JS through my web browser's console")


// chapter 2
// task 1
// var username;
// task 2
// var myName = "Hashir Khan"
// task 3
// var message = "Hello World!"
// alert(message)
// task 4
// var p1 = prompt("Enter Name", "Enter Your Name")
// var p2 = prompt("Enter age", "Enter Your age")
// var p3 = prompt("Enter certification", "Enter Your certification")
// alert ("Name: " + p1 + "\n" + "Age: " + p2 + "\n" + "Certification: " + p3)
// task 5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
// task 6
// const email = "hashirk966@gmail.com"
// alert("My email is" + " " + email)
// task 7
// let book =  "A smarter way to learn JavaScript"
// alert("I am trying to learn from the book" + " " + book)
// task 8
// document.write ("Yah! I can write HTML through Javascript")
// task 9
// var style = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(style)
// document.write (style)


// cahpter 3
// task 1
// var age = 16
// alert("I am" + " " + age + " " + "years old")
// task 3
// var birthYear = 2003;
// document.write("My birth year is " + birthYear);
// task 4
// var name = prompt("Enter Name", "Enter Your Yame Here");
// var product = prompt("Enter Product", "Enter Product Name");
// var quantity = prompt("Enter Quantity", "Enter Product Quantity");
// var store = "ZARA"
// document.write("Name: " + name + "<br>" + "Product: " + product + "<br>" + "Quantity: " + quantity + "<br>" +
//     "Store Name: " + store + " clothing store");


// chapter 4
// task 1
// var a = prompt("enter name", "Ennter Your Name");
// var b = prompt("enter age", "Ennter Your Age");
// var c = prompt("enter qualification", "Ennter Your Qualification");
// alert("Hy! " + a + " you are " + b + " years old and your qualification is " + c + ".");
// task 2
// document.write("<h1>5 LEGAL VARIABLE NAMES</h1> 1. useralert <br> 2. myvar <br> 3. car <br> 4. userName <br> 5. MyPassword")
// document.write("<h1>5 ILLEGAL VARIABLE NAMES</h1> 1. first variable <br> 2. 2book <br> 3. 44 <br> 4. var <br> 5. 33 user")
// task 3
// document.write("<h1>Rules for naming JS variables</h1> variable name can contain only letters, numbers, dollar signs, and underscores. For example $my_1stVariable. <br> Variable must begin with a letter $ or _. For example $my_1stVariable. <br> Variable names are case sensetive. <br> Variable names should not be JS keywords.")


// chapter 5
// task 1
// var sum = 5 + 7;
// document.write('the sum of 5 + 7 is ' + sum + '<br>')
// task 2
// var sub = 5 - 7;
// document.write('the sum of 5 - 7 is ' + sub + '<br>')
// var mul = 5 * 7;
// document.write('the sum of 5 * 7 is ' + mul + '<br>')
// var div = 5 / 7;
// document.write('the sum of 5 / 7 is ' + div + '<br>')
// task 3
// var num = 7;
// document.write("Initial value: " + num + "<br>");
// var num = ++num;
// document.write("Value after increment is: " + num + "<br>");
// var num = num + 7;
// document.write("value after addition is: " + num + "<br>");
// var num = --num;
// document.write("value after decrement is: " + num + "<br>");
// var num = num%3;
// document.write("The remainder is: " + num + "<br>");
// task 4
// var ticket = 600;
// document.write("The price of first ticket is: " + ticket + "<br>");
// var ticket = ticket*5;
// document.write("Total price 0f 5 tickets is: " + ticket);
// task 5
// var b = prompt("Enter number", "Enter table number");
// var c = prompt("Enter length", "Enter length of table");
// document.write("TABLE OF" + " " + b + "<br>" + "<br>");
// for (var a = 1; a <= c; a++) {
//     document.write(b + " * " + a + " = " + b * a + "<br>")
// };
// task 6
// var cel = 33;
// document.write(cel + "<sup>o</sup>C" + " is ");
// var cel = (cel * 9 / 5) + 32;
// document.write(cel + "<sup>o</sup>F" + "<br>");
// var fer = 33;
// document.write(fer + "<sup>o</sup>F" + " is ");
// var fer = (fer - 32) * 5 / 9;
// document.write(fer + "<sup>o</sup>C" + "<br>");
// task 7
// var p1 = +prompt("Enter price", "Enter price of item one");
// var p2 = +prompt("Enter price", "Enter price of item two");
// var q1 = prompt("Enter quantity", "Enter quantity of item one");
// var q2 = prompt("Enter quantity", "Enter quantity of item two");
// var ship = 200;
// var total = p1 + p2 + ship;
// document.write("<h1>SHOPPING CART</h1> Price of item 1 is: " + p1 + "<br>" +
//     "orderd quantity of item 1 is: " + q1 + "<br>" + "Price of item 2 is: " + p2 + "<br>" +
//     "orderd quantity of item 2 is: " + q2 + "<br>" + "Shipping charges: " + ship + "<br>" +
//     "Total coast of your order is: " + total);
// task 8
// var name = prompt('Enter name', "Enter your name here");
// var total = +prompt("Enter total marks", "Enter your total marks");
// var obtained = +prompt("Enter obtained marks", "Enter your obtained marks");
// var percentage = total / obtained * 100 + "%";
// document.write("<h1>MARKSHEET</h1> Your name is: " + name + "<br>" + "Total marks: " + total +
//     "<br>" + "Obtained marks: " + obtained + "<br>" + "Your Percentage: " + percentage);
// task 9
// var usd = 10;
// var saudi = 25;
// var usdpak = 104.80 * usd;
// var saudipak = 28 * saudi;
// var pak = usdpak + saudipak;
// document.write("Toatal currency in PKR is: " + pak);
// task 10
// var num = 6 + 5 * 10 % 2;
// document.write(num);
// task 11
// var dob = new Date(prompt("Enter your date of birth", "Jan 1, 1970"));
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
// document.write("current year: " + today.getFullYear() + "<br>" + "Birth Date: "
//     + dob + "<br>" + "Your age is: " + accuage);
// task 12
// var radius = prompt("Enter radius", "Enter radius of a circle");
// var circum = 2 * 3.142 * radius;
// var area = 2 * 3.142 * radius ** 2;
// document.write("radius: " + radius + "<br>" + "Circumfrence: " + circum + "<br>" +"area: " + area);


// chapter 6-9
// task 1
// var a = prompt("Enter value", "Enter your value");
// document.write("Your value is: " + a + "<br>");
// var a = ++a;
// document.write("value of ++a: " + a + "<br>");
// var a = a++;
// document.write("value of a++: " + a + "<br>");
// var a = --a;
// document.write("value of --a: " + a + "<br>");
// var a = a--;
// document.write("value of a--: " + a + "<br>");
// task 2
// var a = 2;
// var b = 1;
// var result = (--a - --b) + (++b + b--);
// document.write("--a: " + (--a) + "<br>");
// document.write("--a - --b: " + (--a - --b) + "<br>");
// document.write("--a - --b + ++b: " + (--a - --b + ++b) + "<br>");
// document.write("--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>");
// document.write("Result is: " + result);
// task 3
// var name = prompt("Enter Name", "Enter your name here");
// alert("Good morning! " + name);
// task 4
// function multiplication(b) {
//     for (var a = 1; a <= 10; a++) {
//         document.write(b + " * " + a + " = " + b * a + "<br>")
//     };
//     return multiplication
// };
// multiplication(+prompt("Enter Number", "Enter Your Number"));
// task 5
// var sub1 = prompt("Enter Subject name", "Enter Subject one");
// var sub2 = prompt("Enter Subject name", "Enter Subject two");
// var sub3 = prompt("Enter Subject name", "Enter Subject three");
// var obt1 = +prompt("Enter obtained marks", "Enter obtained marks for Subject one");
// var obt2 = +prompt("Enter obtained marks", "Enter obtained marks for Subject two");
// var obt3 = +prompt("Enter obtained marks", "Enter obtained marks for Subject three");
// var totalMarks = 100;
// document.write("<table>");
// document.write("<tr>");
// document.write("<th>");
// document.write("SUBJECT");
// document.write("</th>");
// document.write("<th>");
// document.write("TOTAL MARKS");
// document.write("</th>");
// document.write("<th>");
// document.write("OBTAINED MARKS");
// document.write("</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(sub1);
// document.write("</td>");
// document.write("<td>");
// document.write(totalMarks);
// document.write("</td>");
// document.write("<td>");
// document.write(obt1);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(sub2);
// document.write("</td>");
// document.write("<td>");
// document.write(totalMarks);
// document.write("</td>");
// document.write("<td>");
// document.write(obt2);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(sub3);
// document.write("</td>");
// document.write("<td>");
// document.write(totalMarks);
// document.write("</td>");
// document.write("<td>");
// document.write(obt3);
// document.write("</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>");
// document.write(" ");
// document.write("</td>");
// document.write("<th>");
// document.write(totalMarks + totalMarks + totalMarks);
// document.write("</th>");
// document.write("<th>");
// document.write(obt1 + obt2 + obt3);
// document.write("</th>");
// document.write("</tr>");
// document.write("</table>");
// document.write("<br><br>");
// document.write("YOUR PERCENTAGE IS: " + ((obt1 + obt2 + obt3) / (totalMarks
//     + totalMarks + totalMarks) * 100) + "%");


// chapter 9-11
// task 1
// var city = prompt("Enter city", "Enter your city name");
// var city = city.toUpperCase();
// if (city === "KARACHI") {
//     alert("Welcome to city of lights.");
// } else {
//     alert("Welcome to " + city + " city.");
// }
// task 2
// var gender = prompt("Enter Gender", "Enter Your Gender");
// gender = gender.toLowerCase();
// if (gender === "male") {
//     alert("Good Morning Sir");
// } else {
//     alert("Good Morning Mam");
// }
// task 3
// var traffic = prompt("Enter Color of Road Traffic Signal", "Enter Color");
// traffic = traffic.toLowerCase();
// if (traffic === "red") {
//     alert("MUST STOP");
// } else if (traffic === "yellow") {
//     alert("READY TO MOVE");
// } else if (traffic === "green") {
//     alert("MOVE NOW");
// } else {
//     alert("Enter valid color");
// }
// task 4
// var fuel = +prompt("Enter Remaining Fuel In Your Car", "Enter Fuel In Liters");
// if (fuel === 0.25) {
//     alert("Refuel Your Car");
// } else {
//     alert("Enjoy the ride");
// }
// task 5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// alert is displayed
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// alert is not displayed
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// alert is displayed for condition 2 and 4
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// alert is displayed
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// alertn is displayed for true
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// alert is displayed
// task 6
// var obtmarks = +prompt("Enter Obtained Marks In Three Subjects", "Enter Marks");
// var totmarks = +prompt("Enter Total Marks", "Enter Marks");
// var per = obtmarks / totmarks * 100;
// document.write("Total Marks : " + totmarks + "<br>");
// document.write("Obtained Marks : " + obtmarks + "<br>");
// document.write("Percentage : " + per + "%" + "<br>");
// if (per >= 80) {
//     document.write("Grade : A-one" + "<br>" + "Remarks : Excellent" + "<br>");
// } else if (per >= 70) {
//     document.write("Grade : A" + "<br>" + "Remarks : Good" + "<br>");
// } else if (per >= 60) {
//     document.write("Grade : B" + "<br>" + "Remarks : You need to improve" + "<br>");
// } else if (per < 60) {
//     document.write("Grade : FAIL" + "<br>" + "Remarks : Sorry" + "<br>");
// } else {
//     alert("Enter Valid Marks");
// }
// task 7
// var seceret = 7;
// var secpro = +prompt("Guess The Seceret Number", "Guess Number");
// if (secpro === seceret) {
//     alert("Bingo! Correct Answer");
// } else if (secpro === seceret + 1) {
//     alert("Close enough");
// } else if (secpro === seceret - 1) {
//     alert("Close enough");
// } else {
//     alert("You Lose");
// }
// task 8
// var num = +prompt("Enter any Number", "Enter number");
// if (num % 3 === 0) {
//     alert(num + " is the multiple of 3");
// } else {
//     alert(num + " is not the multiple of 3");
// }
// task 9
// var evenum = +prompt("Enter Any Number", "Enter Number");
// if (evenum % 2 === 0) {
//     alert(evenum + " is even");
// } else {
//     alert(evenum + " is odd");
// }
// task 10
// var temp = +prompt("Enter Temprature", "Enter temprature");
// if (temp >= 40) {
//     alert("It is too hot outside.");
// } else if (temp >= 30) {
//     alert("The Weather today is Normal.");
// } else if (temp >= 20) {
//     alert("Today’s Weather is cool.");
// } else if (temp >= 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("Enter write temprature");
// }
// task 11
// var num1 = +prompt("Enter First Number", "Enter Number");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// var opr = prompt("Enter Operator", "Enter Operator");
// if (opr === "+") {
//     alert(num1 + num2);
// } else if (opr === "-") {
//     alert(num1 - num2);
// } else if (opr === "*") {
//     alert(num1 * num2);
// } else if (opr === "/") {
//     alert(num1 / num2);
// } else if (opr === "%") {
//     alert(num1 / num2 * 100 + "%");
// } else {
//     alert("enter write operator");
// }


// chapter 12-13
// task 1
// var alphabet = prompt("Enter alphabet", "alphabet...")
// var ASCII = alphabet.charCodeAt()
// if (ASCII >= 65 && ASCII <= 90) {
// alert("It is a capital letter")
// } else if (ASCII >= 97 && ASCII <= 9122){
// alert("It is a small letter")
// } else {
// alert("Please enter a alphabet")
// }
// task 2
// var int1 = +prompt("Enter First Intiger", "Enter Intiger");
// var int2 = +prompt("Enter Second Intiger", "Enter Intiger");
// if (int1 > int2) {
//     alert(int1 + " is larger");
// } else if (int2 > int1) {
//     alert(int2 + " is larger");
// } else if (int1 == int1) {
//     alert("Both are equal");
// } else {
//     alert("Enter Right Intiger");
// }
// task 3
// var entnum = +prompt("Enter Any Number", "Enter Number");
// if (entnum < 0) {
//     alert(entnum + " is negative");
// } else if (entnum > 0) {
//     alert(entnum + " is posetive");
// } else if (entnum == 0) {
//     alert(entnum + " is zero");
// } else {
//     alert("Enter a valid number");
// }
// task 4
// var vow = prompt("Enter Any Alphabet", "Enter Alphabet");
// if (vow == "a" || vow == "e" || vow == "i" || vow == "o" || vow == "u") {
//     alert(vow + " is vowel");
// } else {
//     alert(vow + " is not a vowel");
// }
// task 5
// var correct = "ghousshah";
// var pass = prompt("Enter Password", "Enter Password Here");
// if (correct === pass) {
//     alert("Correct! The password you entered matches the original password\n" + "Original Password is " + correct);
// } else {
//     alert("Enter Correct Password");
// }
// task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert(greeting = "Good day");
// } else {
//     alert(greeting = "Good evening");
// }
// task 7
// var time = prompt("Enter Time in 24 Hour formate", "Enter Time");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// } else if (time >= 2100 && time <= 2400) {
//     alert("Good Night");
// } else {
//     alert("Enter Valid Time");
// }


// chapter 14-16
// task 1
// var studata = [];
// studata[0] = Hashir;
// studata[1] = Tawab;
// studata[2] = Wahab;
// task 2
// var studata = [];
// studata[0] = Hashir;
// studata[1] = Tawab;
// studata[2] = Wahab;
// task 3
// var strarr = ["Sir Muhammad Ali", "Sir Ghous", "Sir Basit"];
// task 4
// var numarr = ["1", "2", "3"];
// task 5
// var boolarr = ["True", "False"];
// task 6
// var mixarr = ["True", "1", "Sir Muhammad Ali"];
// task 7
// var eduqual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "MS", "M. Phil", "PhD"];
// document.write("<h2>QUALIFICATIONS:</h2>")
// for (var i = 0; i < eduqual.length; i++) {
//     document.write(i + " ) " + eduqual[i] + "<br>");
// }
// task 8
// var totmark = 500;
// var name1 = prompt("Enter First Name", "Enter Name");
// var name2 = prompt("Enter Second Name", "Enter Name");
// var name3 = prompt("Enter Third Name", "Enter Name");
// var namearr = [name1, name2, name3];
// var score1 = +prompt("Enter Score Of First Student", "Enter Score");
// var score2 = +prompt("Enter Score Of Second Student", "Enter Score");
// var score3 = +prompt("Enter Score Of Third Student", "Enter Score");
// var scorearr = [score1, score2, score3];
// var per1 = score1 / 500 * 100;
// var per2 = score2 / 500 * 100;
// var per3 = score3 / 500 * 100;
// var perarr = [per1, per2, per3];
// for (var j = 0; j < namearr.length; j++) {
//     document.write("Score of " + namearr[j] + " is " + scorearr[j] + "." + " Percentage : " + perarr[j]
//         + "%" + "<br>");
// }
// task 9
// var colorarr = ["Blue", "Red", "Green", "Yellow", "Golden", "Purple"];
// var concolor = +confirm("Do You Want To Add Color");
// if (concolor === 1) {
//     colorprompt();
// } else {
//     colorarray();
// }
// function colorarray() {
//     for (b = 0; b < colorarr.length; b++) {
//         document.write(colorarr[b] + "<br>");
//     }
// }
// function colorprompt() {
//     var colorname = prompt("Enter Color Nmae You Want To Add", "Enter Color");
//     var colorindex = +prompt("Enter Index Number From Where You Want To Add Color", "Enter Index Number");
//     colorarr.splice(colorindex, 0, colorname);
//     colorarray();
// }
// task 10
// var stu1 = prompt("Enter First Student Score", "Enter Score");
// var stu2 = prompt("Enter Second Student Score", "Enter Score");
// var stu3 = prompt("Enter Third Student Score", "Enter Score");
// var stu4 = prompt("Enter Fourth Student Score", "Enter Score");
// var stuarr = [stu1, stu2, stu3, stu4];
// document.write("Scores Of Students: " + stuarr + "<br>");
// var stuarr = stuarr.sort(function (a, b) { return a - b });
// document.write("Ordered Scores Of Students: " + stuarr)
// task 11
// task 12
// var strarr = ["This", "is", "my", "cat"];
// var strarr = strarr.join(" ")
// document.write(strarr);
// task 13
// var comp = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write(comp + "<br><br>");
// for (var i = 0; i < comp.length; i++) {
//     document.write(comp[i] + "<br>");
// }
// task 14
// var comp = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write(comp + "<br><br>");
// var comp = comp.reverse();
// for (var i = 0; i < comp.length; i++) {
//     document.write(comp[i] + "<br>");
// }
// task 15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// document.write("<option>Select Your Company</option>");
// for (var z = 0; z < phone.length; z++) {
//     document.write("<option>" + phone[z] + "</option>");
// }
// document.write("</select>");


// chapter 17-20
// task 1
// var multi = [
//     ['apple', 'orange', 'pear'],
//     ['carrots', 'beans', 'peas'],
//     ['cookies', 'cake', 'muffins', 'pie'],
// ];
// task 2
// var multinum = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// for (i = 0; i < multinum.length; i++) {
//     document.write(multinum[i] + "<br>");
// }
// task 3
// for (var num = 1; num <= 10; num++) {
//     document.write(num + "<br>");
// }
// task 4
// var b = prompt("Enter number")
// var c = prompt("enter length of table")
// document.write("TABLE OF" + " " + b + "<br>" + "<br>")
// for (var a = 1; a <= c; a++) {
//     document.write(b + " * " + a + " = " + b * a + "<br>")
// }
// task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var z = 0; z < fruits.length; z++) {
//     document.write(fruits[z] + "<br>");
// }
// for (var z = 0; z < fruits.length; z++) {
//     document.write("Element at " + z + " index is: " + fruits[z] + "<br>");
// }
// task 6
// task 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome To ABC Bakery, What Do You Want To Order", "Your Order Here");
// search = search.toLowerCase();
// if (A.indexOf(search) !== -1) {
//     alert(search + " is available");
// } else {
//     alert(search + " is not available");
// }
// task 8
// var arr = [24, 53, 78, 91, 12];
// document.write(arr + "<br>");
// document.write("The Largest Number Is: " + Math.max(...arr))
// task 9
// var arr = [24, 53, 78, 91, 12];
// document.write(arr + "<br>");
// document.write("The Smallest Number Is: " + Math.min(...arr));
// task 10
