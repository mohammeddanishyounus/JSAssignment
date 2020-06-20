// // //Chapter 1
// // //1
// // alert("Hello! Welcome to our website");
// // //2
// // alert("Error! Please enter a valid password.");
// // //3
// // alert("Welcome to JS Land... \nHappy Coding!");
// // //4
// // function confirmalert(){
// //     var userselection = confirm("Welcome to JS Land...");
// //     if (userselection == true){
// //         alert("Happy Coding!");
// //       }
// //     else{
// //         alert("Not a Happy Coding!");
// //     }  
// //     }
// //     confirmalert();
// // //5
// // alert ("Hello...I can run JS through my web browser's console");

// //Chapter2
// //1
// var username;
// //2
// var myName = "Mohammed Danish";
// //3
// var message = "Hello World";
// alert (message);
// //4
// var studentName= "Mohammed Danish Younus";
// var studentAge= "28 years old";
// var studentCource= "Web and Hybrid Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCource);
// //5
// var name = ["P", "I", "Z", "Z", "A"];
// var len = 4;
// for (var i=len; i>0; i--)
// { 
//    alert(name);
//    document.write(name);
//    name.pop()
// }
// //6
// var email = "mohammeddanishyounus@gmail.com";
// alert ("My email is " + email);
// //7
// var book = "A smarter way to learn JavaScript";
// alert ("I am trying to learn from the Book " + book);
// //8
// var sent = "Yah! I can write HTML content through Javascript";
// document.write(sent);
// //9
// var symbol="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert (symbol);

//Chapter3
// //1
// var age = 28;
// alert("I am " + age + " years old")
// //2
// var visitCheck = 0;
// for(var i=0; i>0; i++){
//     visitCheck++;
//     alert ("You have visited this site " + visitCheck + " times")
// }
// //3
// var birthYear=1992;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof birthYear);
// //4
// var StoreName="DH Online Store";
// var VisitorName=prompt("Enter your name: ");
// var ProductTitle=prompt("Which product want to buy: ");
// var Qty = prompt("Enter Quantity: ");
// document.write(VisitorName + " ordered " + ProductTitle + " on " + StoreName);

//Chapter4
// //1
// var me, my, mine;
// //2 
// var me, my, mine, many, must; 
// var 1me, +me, ^me, #$, 90;

//Chapter5 
// //1 
// var a=prompt("Enter 1st number: ");
// var b=prompt("Enter 2nd number: ");
// sum=((+a)+(+b));
// sub=a-b;
// mul=a*b;
// div=a/b;
// mod=a%b;
// alert("Addition of " + a + " and " + b + " is " + sum);
// //2
// alert("subtraction of " + a + " and " + b + " is " + sub);
// alert("Multiplication of " + a + " and " + b + " is " + mul);
// alert("Division of " + a + " and " + b + " is " + div);
// alert("Division of " + a + " and " + b + " is " + mod);
// //3
// var a;
// document.write("Value after variable declaration is : " + a);
// a=5;
// document.write("Initial value : " + a);
// a++;
// document.write("Value after increment is:" + a);
// a=a+7;
// document.write("Value after addition is:" + a );
// a--;
// document.write("Value after decement is:" + a);
// a=a%3;
// document.write("The remainder is:" + a);
// //4
// var ticketCost=600;
// var ticketQty=5;
// document.write("The cost to buy " + ticketQty + " tickets to a movie is " + ticketCost*ticketQty + "PKR" )
// //5
// var number=prompt("enter any number: ");
// for (var i=1; i<=10; i++){
//     document.write(number+" X "+i+" = "+number*i+"<br>"); 
// }
// //6
// var celsius, fahrenheit;
// var forC, forH;
// celsius=32;
// fahrenheit=60;
// document.write(forC=(fahrenheit-32)*5/9);
// document.write(forF=(celsius*9/5)+32);
// //7
// var price1=700;
// var price2=900;
// var item1="Sugar";
// var item2="Milk";
// var item1Qty=3;
// var item2Qty=4;
// document.write("Price of " + item1 + " is: "+price1);
// document.write("Qty avialable of "+ item1 + " is: "+item1Qty);
// document.write("Price of " + item2 + " is: "+price2);
// document.write("Qty avialable of "+ item2 + " is: "+item2Qty);
// //8
// var totalMarks= 980;
// var marksObtained=760;
// var per=marksObtained*100/totalMarks;
// document.write("Total Marks = " + totalMarks +"Marks Obtained = " + marksObtained +"Perentage = " + per );
// //9
// var dollar=10;
// var riyal=25;
// var dollarRate=104.80;
// var riyalRate=28;
// var totalDollar=dollar*dollarRate;
// var totalRiyal=riyal*riyalRate;
// document.write("Total amount in PKR: " + (totalDollar+totalRiyal));
// //10
// var num=9;
// document.write(((num+5)*10)/2);
// //11
// var currentYear=2020;
// var birthYear=1992;
// document.write("Current Year: " + currentYear 
//             +"Birth Year : " + birthYear
//             +"Your age is : "+ (currentYear-birthYear));
// //12
// var circleRadius = 20;
// var pie = 3.142;
// var cirCircle=2*pie*circleRadius;
// var areaCircle=pie*circleRadius*circleRadius;
// document.write("Radius of Circle: " + circleRadius
//                 + "The circumference is : " + cirCircle
//                 + "The Area is : " + areaCircle);
// //13
// var favSnack = "Chocolate Chips";
// var currentAge = 28;
// var maxAge = 50;
// var estAmount = 30;
// var totalAmount = maxAge*estAmount;
// document.write("You will need " + totalAmount + favSnack + 
// "last you until the ripe old age of " + maxAge );

//Chapter6-9
// //1
// var a=10;
// document.write("The value of a is : "+ a);
// ++a;
// document.write("The value of ++a is : "+ a);
// a++;
// document.write("The value of a++ is : "+ a);
// --a;
// document.write("The value of --a is : "+ a);
// a--;
// document.write("The value of a-- is : "+ a);
// //2
// var a=2, b=1;
// var one=--a;
// document.write("The value after --a is : "+ a +"total"+one);
// var two=--a - --b;
// document.write("The value after --a - --b is : "+a+" and "+b+"total"+two);
// var three=--a - --b + ++b;
// document.write("The value after --a - --b + ++b is : "+a+" and "+b+"total"+three);
// var four=--a - --b + ++b + b--;
// document.write("The value after --a - --b + ++b + b-- is : "+a+" and "+b+"total"+four);
// //3
// var name=prompt("Enter your name: ");
// alert("Welcome " + name);
// //4
// var number=prompt("Enter any number: ");
// number=(+number);
// if(number!==5||number==0){
//     for (var i=1; i<=10; i++){
//         document.write(number+" X "+i+" = "+number*i+"<br>");
//  }
// }
// else{
//     for (var i=1; i<=10; i++){
//          document.write(5+" X "+i+" = "+5*i+"<br>");
//  }}
// //5
// var sub1=prompt("Enter Subject 1: ");
// var sub2=prompt("Enter Subject 2: ");
// var sub3=prompt("Enter Subject 3: ");
// var sub1mark=prompt("Enter Subject 1 Marks: ");
// var sub2mark=prompt("Enter Subject 2 Marks: ");
// var sub3mark=prompt("Enter Subject 3 Marks: ");
// var totalmarks=100;
// document.write("Subjects"+"\t\t\t"+"Total Marks"+"\t\t\t"+"Marks Obtained"+"\t\t\t"+"Percentage"+"<br>")
// document.write(sub1+"\t\t\t"+totalmarks+"\t\t\t"+sub1mark+"\t\t\t"+sub1mark/totalmarks*100+"<br>")
// document.write(sub2+"\t\t\t"+totalmarks+"\t\t\t"+sub1mark+"\t\t\t"+sub2mark/totalmarks*100+"<br>")
// document.write(sub3+"\t\t\t"+totalmarks+"\t\t\t"+sub1mark+"\t\t\t"+sub3mark/totalmarks*100+"<br>")
// document.write("\t\t\t"+"\t\t\t"+totalmarks*3+"\t\t\t"+sub1mark+sub2mark+sub3mark+"\t\t\t"+sub1mark+sub2mark+sub3mark*100/300)

//Chapter9-11
// //1
// var city=prompt("Enter city name: ");
// if(city==="Karachi")
// {
//     document.write("Welcome to city of lights");
// }
// else {
//     document.write("You entered a city name "+city);
// }
// //2
// var gender=prompt("Enter your gender: ");
// if(gender=="Male"||gender=="male"){
//     document.write("Good Morning Sir");
// }
// else {
//     document.write("Good Morning Maam");
// }
// //3
// var signal=prompt("Enter signal colour: ");
// if (signal=="red"||signal=="Red"){
//     document.write("Must Stop");
// }
// else if(signal=="yellow"||signal=="Yellow") {
//     document.write("Ready to move");
// }
// else if (signal=="Green"||signal=="green"){
//     document.write("Move now");
// }
// else {
//     document.write("You entered a wrong colour");
// }
// //4
// var fuel=prompt("Enter remaining fuel in car: ");
// if(fuel<=0.25){
// document.write("Please refill the fuel in your car.")
// }
// else{
//     document.write("Fuel is enough in the car.");
// }
// //5
// //a 
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true"); 
// }
// //b 
// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }
// //c 
// var c = 12; 
// if (c++ === 13){ 
//     alert("condition 1 is true"); 
// } 
// if (c === 13){ 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// }
// //d
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
// }
// //e
// if (true){ 
//     alert("True"); 
// } 
// if (false){ 
//     alert("False"); 
// }
// //f
// if("car" < "cat"){ 
//     alert("car is smaller than cat");
//  }
// //6
// var sub1mark=prompt("Enter Subject 1 Marks: ");
// var sub2mark=prompt("Enter Subject 2 Marks: ");
// var sub3mark=prompt("Enter Subject 3 Marks: ");
// var totalmarks=100;
// marksObtained=((+sub1mark)+(+sub2mark)+(+sub3mark));
// percentage=(marksObtained/(totalmarks*3))*100;
// document.write("Total Marks: "+totalmarks*3);
// document.write("Marks Obtained: "+marksObtained);
// document.write("Percentage: "+percentage);
// if(percentage>=80){
//     document.write("Grade:A-one");
//     document.write("Remarks:Excellent");
// }
// else if(percentage>=70){
//     document.write("Grade:A");
//     document.write("Remarks:Good");
// }
// else if(percentage>=60){
//     document.write("Grade:B");
//     document.write("Remarks:You need to improve");
// }
// else{
//     document.write("Grade:Fail");
//     document.write("Remarks:Sorry");
// }
// //7
// var secretNumber=8;
// var userNumber=prompt("Enter any number: ");
// userNumber=(+userNumber);
// if(secretNumber==userNumber){
//     document.write("Bingo! Correct answer.");
// }
// else if (++secretNumber==userNumber){
// document.write("Close enough to the correct answer.");
// }
// else{
//     document.write("You guess incorrect.");
// }
// //8
// var userNumber=prompt("Enter number diviable by 3: ");
// userNumber=(+userNumber);
// formula=userNumber%3;
// if(formula==0){
//     document.write(userNumber+" divisable by 3.");
// }
// else{
//     document.write(userNumber+" is not diviable by 3.");
// }
// //9
// var userNumber=prompt("Enter number: ");
// userNumber=(+userNumber);
// formula=userNumber%2;
// if(formula==0){
//     document.write("You entered a even number.");
// }
// else{
//     document.write("You entered a odd number.");
// }
// //10
// var userTemperature=prompt("Enter a temperature: ");
// userTemperature=(+userTemperature);
// if(userTemperature>40){
//     document.write("It is too hot outside.");
// }
// else if (userTemperature>30){
//     document.write("The Weather today is Normal.");
// }
// else if (userTemperature>20){
//     document.write("Today’s Weather is cool.");
// }
// else if (userTemperature>10){
//     document.write("OMG! Today’s weather is so Cool.");
// }
// else {
//     document.write("Temperature is less than 10.");
// }
// //11
// var num1=prompt("Enter first number: ");
// var num2=prompt("Enter second number: ");
// var operator=prompt("Enter operator: ");
// num1=(+num1);
// num2=(+num2);

// if(operator=="+"){
//     var sum=num1+num2;
//     document.write("Addition of " + num1 + " and " + num2 + " is : "+(num1+num2));
// }
// else if (operator=="-"){
//     var sum=num1-num2;
//     document.write("Subtraction of " + num1 + " and " + num2 + " is : "+(num1-num2));
// }
// else if(operator=="*"){
//     var sum=num1*num2;
//     document.write("Multiplication of " + num1 + " and " + num2 + " is : "+(num1*num2));
// }
// else if(operator=="/"){
//     var sum=num1/num2;
//     document.write("Division of " + num1 + " and " + num2 + " is : "+(num1/num2));
// }
// else if(operator=="%"){
//     document.write("Moduler of " + num1 + " and " + num2 + " is : "+(num1%num2));
// }
// else {
//     document.write("You entered a wrong number.");
// }

//chapter 12-13
// //1
// var check = prompt ("Enter any number or character: ");
// if (check =>"0" || check <="9"){
//     document.write ("Input is Number");
// }
// else if (check=>"a" || check <="z"){
// document.write ("Input is Lower Case Character");
// }
// else if (check=>"A" || check <="Z"){
//     document.write ("Input is Upper Case Character");
// }
// else {
//     document.write ("Wrong Input");
// }

// //2
// var number1 = prompt("Enter first integer: ");
// var number2 = prompt("Enter second integer: ");
// number1=(+number1);
// number2=(+number2);
// if(number1>number2){
//     document.write(number1+" is larger than "+number2);
// }
// else if (number1<number2){
//     document.write(number2+" is larger than "+number1);
// }
// else if (number1===number2){
//     document.write(number1+" and "+number2+" are equal.");
// }

// //3
// var number = prompt("Enter any integer: ");
// number=(+number);
// if(number===0){
//     document.write(number+" is Zero");
// }
// else if (number>0){
//     document.write(number+" is Positive");
// }
// else if (number<0){
//     document.write(number+" is Negative");
// }
// else {
//     document.write("Wrong Input");
// }

// //4
// var check = prompt("Enter a single character: ");
// if(check=="a"||check=="e"||check=="i"||check=="o"||check=="u"){
//     document.write(check+" is a vowel.");
// }
// else if(check=="A"||check=="E"||check=="I"||check=="O"||check=="U"){
//     document.write(check+" is a vowel.");
// }
// else{
//     document.write(check +" is a consonent");
// }

// //5
// var storedPassword = "Danish";
// var userPassword = prompt("Enter your password: ");
// if (userPassword==null||userPassword===undefined||userPassword.length <=0){
//      document.write("Please enter your password")
// }
// else if (userPassword===storedPassword){
//     document.write("Correct! The password you entered matches the original password")
// }
// else {
//     document.write("Your entered password is incorrect.");
// }

// //6
// var greeting;
// var hour = 19;
// if (hour < 18) {
//     greeting = "Good day"; 
//     prompt(greeting);
// }

// else {
//     greeting = "Good evening"; 
//     prompt(greeting);
// }

//7
// var time = prompt("Enter time (format 0000): ");
// time=(+time);
// if(time>=0000 && time<1200){
//     document.write("Good Morning!")
// }
// else if (time>=1200 && time<1700){
//     document.write("Good Afternoon!")
// }
// else if (time>=1700 && time<2100){
//     document.write("Good Evening!")
// }
// else if (time>=2100 && time<2359){
//     document.write("Good Night!")
// }
// else {
//     document.write("Wrong Input");
// }

//Chapter 14-16

// //1 var emptyArray = [];
// //3 var stringArray=["Cat", "Dog", "Snake"];
// //4 var numberArray=[1,2,3,4,5];
// //5 var booleanArray=[true, false];
// //6 var mixedArray = [1, "Bob", "Now is", true];
// //7 
// var qualifications=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// for (var i=0; i<qualifications.length; i++){
//     var text="<ol>";
//     document.write("<li>"+qualifications[i]+"</li> <br>");
//     text=text+"</ol>";
// }

// //8
// var stuName=["Danish", "Waqas", "Frrukh"];
// var stuMarks=[88,78,58];
// var totalMarks = 500;
// for (var i=0; i<stuName.length;i++){
//     document.write("Score of "+stuName[i]+" is "+stuMarks[i]+". Percentage: "+stuMarks[i]*100/totalMarks+"% <br>");
// }

// //9
// var colour=["red","green","blue"];
// document.write(colour+'<br>');
// //a
// var addColourStart=prompt("what colour you want to add in the begining: ");
// colour.unshift(addColourStart);
// document.write(colour+'<br>');
// //b
// var addColourEnd=prompt("what colour you want to add in the end: ");
// colour.push(addColourEnd);
// document.write(colour+'<br>');
// //c
// colour.unshift("Yellow","Black");
// document.write(colour+'<br>');
// //d
// colour.shift();
// colour.shift();
// document.write(colour+'<br>');
// //e
// colour.pop();
// colour.pop();
// document.write(colour+'<br>');
// //f
// var addColourName=prompt("what colour you want to add: ");
// var addColourPosition=prompt("at which position: ");
// addColourPosition=(+addColourPosition);
// colour.splice(addColourPosition,0,addColourName);
// document.write(colour+'<br>');
// //g
// var delColourPosition=prompt("what index do you want to delete colour: ");
// var delColourCount=prompt("how many colours want to delete: ");
// delColourPosition=(+delColourPosition);
// delColourCount=(+delColourCount);
// colour.splice(delColourPosition,delColourCount);
// document.write(colour+'<br>');

// //10
// var unSorted =[320, 230, 480, 120];
// document.write(unSorted+"<br>");
// unSorted.sort();
// document.write(unSorted+"<br>");

// //11
// var cities=["Karachi", "Lahore", "Islambad", "Quetta", "Peshawar"];
// document.write(cities+"<br>");
// var selectedCities=cities.slice(0,2);
// document.write(cities+"<br>");
// document.write(selectedCities+"<br>");

// //12
// var arry=["My","Name","is","Danish"];
// arry.join();
// document.write(arry+"<br>");
// arry.join(' ');
// document.write(arry+"<br>");

// //13
// var devices=["keyboard", "mouse","printer","monitor"];
// document.write(devices+"<br>");
// for(var i=0;i<devices.length+1;i++){
//     devices.shift();
//     document.write(devices+"<br>");
// }

// //14
// var devices=["keyboard", "mouse","printer","monitor"];
// document.write(devices+"<br>");
// for(var i=0;i<devices.length+1;i++){
//     devices.pop();
//     document.write(devices+"<br>");
// }

// //15
// var phonesManufacters=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write ("<select>");
// for(var i=0;i<phonesManufacters.length;i++){
// document.write("<option>"+phonesManufacters[i]+"</option>");
// }
// document.write ("</select>");

//Chapter 17-20
// //1
// var arry=[[],[],[]];
// //2
// var arry=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(arry[0]+"<br>");
// document.write(arry[1]+"<br>");
// document.write(arry[2]+"<br>");
// //3
// var i=1;
// for (i;i<=10;i++){
//     document.write(i+"<br>");
// }
// //4
// var tableNumber=prompt("Enter a number to show its multiplication table: ");
// var tableMultiplication=prompt("Enter length muliplication table: ");
// tableNumber=(+tableNumber);
// tableMultiplication=(+tableMultiplication);
// for (var i=1; i<=tableMultiplication; i++){
//         document.write(tableNumber+" X "+i+" = "+tableNumber*i+"<br>");
//  }

// //5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i=0;i<fruits.length;i++){
//     document.write('Element at index '+i+' is '+fruits[i]+'<br>');
// }

// //6
// var counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("Counting: "+counting+"<br>");
// counting.reverse();
// document.write("Reverse Counting: "+counting+"<br>");
// counting.reverse();
// document.write("Even Counting: ");
// for(var i=0; i<counting.length;i++){
//     if(counting[i]%2===0){       
//         document.write(counting[i]+",");
//     }
// }
// document.write("<br> Odd Counting: ");
// for(var i=0; i<counting.length;i++){
//     if(counting[i]%2!==0){
//         document.write(counting[i]+",");
//     }
// }
// document.write("<br> Series: ");
// for(var i=0; i<counting.length;i++){
//     if(counting[i]%2===0){       
//         document.write(counting[i]+"k,");
//     }
// }

// //7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search=prompt("Welcome to DH Bakery! What do you want to order Sir/Madam: ");
//     if(A.indexOf(search)!==-1){
//         document.write("<br>"+search+" is found");
//     }
//     else {
//         document.write("<br>"+search+" is not found");
//     }

// //8
// var A = [24, 53, 78, 91, 12];
// var largest=0;
// for (i=0; i<=A.length;i++){
//     if (A[i]>largest) {
//         largest=A[i];
//     }
// }
// document.write("Largest numbers is: "+largest);

// //9
// var A = [24, 53, 78, 91, 12];
// var smallest=A[0];
// for (i=0; i<=A.length;i++){
//     if (A[i]<smallest) {
//         smallest=A[i];
//     }
// }
// document.write("Largest numbers is: "+smallest);

// //10
// var number=5;
// for (var i=1;i<=20;i++){
//     document.write(number*i+",");
// }

