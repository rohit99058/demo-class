// let num = 5;
// let newNum = num++;
// console.log(num);
// newNum = ++num;
// console.log(newNum)

// let a = 22;
// console.log(typeof(a))
// a = true;
// console.log(typeof(a))

// let name = "Rohit Kumar";
// console.log(name[6]);
// console.log(name.length)

// let name = "Rohit Kumar";
// console.log(name[name.length]);
// console.log(name[name.length - 1]);
// console.log(name[10])
// console.log(name[11 - 1])

// let firsName = "Rohit";
// let lastName = "Kumar";
// let fullName = firsName + " " + lastName;
// console.log(fullName);

// let name = "Rohit";
// let num = 1;
// let str = name + num;
// console.log(str)

// let a;
// console.log(a)


// let a = null;
// console.log(a)


//PRACTICE QUESTION---->

// let name = "Rohit Kumar"
// console.log(name.length)

// let firstName = "Rohit";
// console.log(firstName[0])

// let firstName = "Rohit";
// console.log(firstName[firstName.length - 1])

// let str = "apnacollege" + 123;
// console.log(str);

// let emp = "";
// console.log(emp.length)


// let col = prompt("enter the colour name");
// if (col === "red") {
//     console.log("Stop!");

// } else if (col === "green") {
//     console.log("Go");
// } else {
//     console.log("Light is brocken");
// }



// let size = prompt("enter the Pocket size of popcorn");
// if (size === "XL") {
//     console.log(`price is ${250}`);

// } else if (size === "L") {
//     console.log(`price is ${200}`)
// } else if (size === "M") {
//     console.log("100")
// } else if (size === "S") {
//     console.log(`price is ${50}`)
// }

// let str = prompt("enter the string to be checked as good or not");


// if ((str[0] === "a") && (str.length > 3)) {
//     console.log("string is the good")
// } else {
//     console.log("string is not good")
// }




// let sig_col = prompt("enter the signal color to know the properties");

// switch (sig_col) {
//     case "red":
//         console.log("stop!");
//         break;
//     case "green":
//         console.log("Go")
//         break;

// }


// let num1 = Number(prompt("enter the first number: "));
// let num2 = Number(prompt("enter the second number: "));
// let num3 = Number(prompt("enter the third number: "));

// if ((num1 > num2) && (num2 > num3)) {
//     alert(`${num1} is the greatest `);

// } else if ((num2 > num3) && (num3 > num1)) {
//     alert(`${num2} is the greatest`)
// } else {
//     alert(`${num3} is the greatest`)
// }

// let str = "RohitKumar"
// console.log(str.indexOf("K"))


// let msg = "  Rohit"
// let newMsg = msg.trim().toUpperCase().toLowerCase();
// console.log(newMsg);




// let str = "RohitKumar";
// let NewStr = str.slice(5);
// console.log(NewStr);



// let n = Number(prompt("enter a number"));

// for (let i = 1; i <= n; i++) {
//     console.log(i)
// }

// let n = Number(prompt("enter a number"));

// for (let i = n; i >= 1; i--) {
//     console.log(i)
// }

// let n = Number(prompt("enter a number"));

// for (let i = 1; i <= 10; i++) {
//     let tab =
//         console.log(tab)
// }


// let n = Number(prompt("enter the number from 1 to the upto"));


// for (let n = 1; n < 11; n++) {
//     for (let i = 20; i >= 1; i--) {
//         console.log(n + " * " + i + " = " + n * i)
//     }
// }




// let i = Number(prompt("enter the number to print the star"))

// for (i = 1; i <= 3; i++) {
//     for (let j = 1; j >= i; j++) {
//         console.log("*")
//     }
// }



//************RECURSION************* */

// function fn(n) {
//     if (n === 0) {
//         return
//     }
//     console.log("Stree 2")
//     N--
//     fn(n)
// }
// let n = 5;
// fn(n)


// let n = Number(prompt("enter the number"))

// function printToN(n) {
//     if (n == 0) {
//         return
//     }
//     fn(n - 1)
//     console.log(n)
// }
// printToN(n)


// let n = Number(prompt("enter the number"))

// function factOfN(n) {
//     if (n == 1)

//     {
//         return 1
//     }
//     if (n == 0) {
//         return 1
//     }
//     return n * factOfN(n - 1)


// }
// console.log(factOfN(n));



// function reverseString(str) {
//     // Base case: if the string is empty or has one character, return it
//     if (str === "" || str.length === 1) {
//         return str;
//     }
//     // Recursive case: take the last character and append the reverse of the rest of the string
//     return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
// }

// // Example usage:
// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log(reversedString); // Output: "olleh"






let months = ["January", "july", "march", "august"];

months.shift("January")
months.shift("july")
months.unshift("june")
months.unshift("july")

console.log(months)