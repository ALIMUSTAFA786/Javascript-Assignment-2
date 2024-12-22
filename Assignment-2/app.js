// ch 4
// q1
// var Product="Bread";
// var Price=120;
// var Quantity=1;
// document.write(Product+ " " + Price + " " + Quantity)

//q2
// Legal Variables
// var firstName="Ali"
// document.write(firstName)
// var age= 18;
// document.write(age)
// var _value= 2;
// document.write(_value)
// var $price= 20;
// document.write($price)
// var user_123="Ali"
// document.write(user_123)

// Illegal Variables
// var var="keyword";
// document.write(var)
// var 123abc= "Cannot start with number";
// document.write(123abc)
// var function="keyword";
// document.write(function)
// var @user="Cannot start with a special character";
// document.write(@user)
 //q3
// a
// document.body.innerHTML+="<h1>Rules for naming JS variables<h1>";
// b
// document.write("Variable names can only contain numbers, $,and _.For example $my_1stVariable<br />")
//c
// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br />")
//d
// document.write("Variable names are case sensitive<br />")
//e
// document.write("Variable names should not be JS keywords<br />")

//ch4 done

//ch5
//q1
// let a= 4;
// let b= 6;
// document.write("The Sum of 4 & 6 is",Number(a) + Number(b));
//q2
// let a= 4;
// let b= 6;
// document.write("The Sum of 4 & 6 is",Number(a) + Number(b)+" <br />");
// document.write("The Sum of 4 & 6 is",Number(a) - Number(b)+ "<br />");
// document.write("The Sum of 4 & 6 is",Number(a) * Number(b)+ "<br />");
// document.write("The Sum of 4 & 6 is",Number(a) / Number(b)+ "<br />");
// document.write("The Sum of 4 & 6 is",Number(a) % Number(b)+ "<br />");
//q3
// var a=2;
// document.write("Value after variable declaration is: " ,a + "<br />");
// var b=3;
// document.write("Initialize value is: " ,b +"<br />");
// document.write("Increment value is: " ,b + 1  +"<br />");
// document.write("Value after increment is: " ,b + 1  +"<br />");
// document.write("The value after addition is: " ,b + 7  +"<br />");
// document.write("Value after decrement is: " ,b + 7 -1  +"<br />");
// document.write("The reaminder is: " ,b + 7 -1/3  +"<br />");
//q4
// var ticketPrice=600;
// document.write("Total cost to buy 5 tickets to a movie is", Number(ticketPrice)*Number(5));
//q5
// document.write("Table of 3<br />");
// var num= 3;
// document.write("3x1=",num*1 +"<br />");
// document.write("3x2=",num*2 +"<br />");
// document.write("3x3=",num*3 +"<br />");
// document.write("3x4=",num*4 +"<br />");
// document.write("3x5=",num*5 +"<br />");
// document.write("3x6=",num*6 +"<br />");
// document.write("3x7=",num*7 +"<br />");
// document.write("3x8=",num*8 +"<br />");
// document.write("3x9=",num*9 +"<br />");
// document.write("3x10=",num*10 +"<br />");
//q6
// let celcius= 20;
// let fahrenheit= celcius*9/+32;
// document.write(celcius,"°C is",fahrenheit,"°F"+"<br /");
// let fahrenheitTemperature= 20;
// let celciusTemperature= fahrenheitTemperature-32*5/9;
// document.write(fahrenheitTemperature,"°F is",celciusTemperature,"°C");
//q7
// let item1=650;
// let item2=100;
// let Quantity1=3;
// let Quantity2=7;
// let shippingCharges=100;
// document.write("Price of item1 is:",item1+ "<br />");
// document.write("Quantity of item1 is:",Quantity1+ "<br />");
// document.write("Price of item2 is:",item2+ "<br />");
// document.write("Quantity of item2 is:",Quantity2+ "<br />");
// document.write("Total cost of your order is",item1*Quantity1+item2*Quantity2+shippingCharges);
//q8
// let totalMarks=980;
// let obtainedMarks=804;
// document.write("Total marks:",totalMarks +"<br />");
// document.write("Obtained marks:",obtainedMarks+"<br />");
// document.write("Percentage:",(obtainedMarks/totalMarks)*100);
//q9
// let USdollar=104.80;
// let Saudiriyal=28;
// document.write("Total currency in PKR:",10*USdollar+25*Saudiriyal);
//q10
// var num=5;
// document.write(num+5+ "<br />");
// document.write(num*10+ "<br />");
// document.write(num*10/2+ "<br />");
//q11
// var currentYear="2024";
// var birthYear="2008";
// document.write("Current Year:",currentYear +"<br >");
// document.write("Birth Year:",birthYear+"<br >");
// document.write("They are",currentYear-birthYear,"years old");
//q12
// document.body.innerHTML+="<h1>The Geometrizer<h1>";
// let radius=10;
// document.write("Radius of circle is: ",radius +"<br />");
// document.write("The circumtences is: ",2*radius*3.142+"<br />");
// document.write("The area is:",3.142*radius*2);
//q13
// var snack= "biscuit";
// var snackPerday=2;
// let currentAge= 23;
// let maximumAge= 64;
// document.write("Favorite snack: ",snack+"<br />");
// document.write("Current Age: ",currentAge+"<br />");
// document.write("Maximum Age; ",maximumAge+"<br />");
// document.write("Amount of snacks per day: ",snackPerday +"<br />");
// document.write("You will need ",currentAge + maximumAge * snackPerday,snack, " to last you until the ripe old age of ", maximumAge);
//ch 5 done
//ch 6
//q1
// document.write("Result:"+"<br />")
// var a=10;
// document.write("The value of a is: ", a +"<br />")
// document.write("............................."+"<br />")
// document.write("The value of ++a is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 1 + "<br />")
// document.write("The value of a++ is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 2 + "<br />")
// document.write("The value of --a is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 1 + "<br />")
// document.write("The value of a-- is: ",a + 1 + "<br />")
// document.write("Now the value of a is: ",a + 1 - 1 + "<br />")
//q2
// var a= 2;
// var b= 1;
// document.write("a is ",a +"<br />")
// document.write("b is ",b +"<br />")
// var result= --a - --b + ++b  + b--; 
// document.write("result is ", result)
//q3
// let user_input= prompt("Enter your name :");
// document.write("Assalam O Alaikum " + "\n",user_input);
//q4 is not given
//q5
// function generateTable() {
// var user_input= prompt("Enter a number: ");
// if (user_input=== "" || user_input === null) {
//     user_input = 5;
// }
// var num=Number(user_input);
// for (var i = 1; i <= 10; i++) {
//     document.write(user_input +  "x" + i + "=" + (num* i)+"<br />");
// }
// }
// generateTable();
//q6
// var subject1=prompt("Enter the name of first subject: ");
// var subject2=prompt("Enter the name of second subject: ");
// var subject3=prompt("Enter the name of third subject: ");
// var totalMarks= 100;
// var obtainedMarks1= parseInt(prompt("Enter the obtained marks for" + subject1 + ":" ));
// var obtainedMarks2= parseInt(prompt("Enter the obtained marks for" + subject2 + ":" ));
// var obtainedMarks3= parseInt(prompt("Enter the obtained marks for" + subject3 + ":" ));
// var totalObtainedmarks= obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var Percentage= (totalObtainedmarks / (3*totalMarks))*100;
// document.write(`
//     <table border="1" style="width:50%; text-align:center; border-collapse:collapse; margin:20px auto;">
//     <thead>
//         <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//         <td>${subject1}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks1}</td>
//         <td>${((obtainedMarks1/totalMarks)*100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//         <td>${subject2}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks2}</td>
//         <td>${((obtainedMarks2/totalMarks)*100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//         <td>${subject3}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks3}</td>
//         <td>${((obtainedMarks3/totalMarks)*100).toFixed(2)}%</td>
//         </tr>
//         <tr>
//         <td><stong>Total</strong></td>
//         <td>${totalMarks}</td>
//         <td>${totalObtainedmarks}</td>
//         <td>${Percentage.toFixed(2)}%</td>
//         </tr>
//     </tbody>
//     </table>
//     `);
//ch 6 done