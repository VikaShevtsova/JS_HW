// 1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
const check_age = function(age) {
    if (age <18) {
        console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
    } else if (age >= 18 && age <60) {
        console.log("Welcome!");
    } else  if (age > 60) {
        console.log("Keep calm and look Culture channel.");
    } else {
        console.log("Technical work");
    }
}

check_age(61);
check_age(18);
check_age(61);

// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const check_age = function(age) {
    if (typeof(age) == "number" || typeof(+age) == "number") {
        if (age <18) {
            console.log("You don’t have access cause your age is " + age + ". It’s less then 18");
        } else if (age >= 18 && age <60) {
            console.log("Welcome!");
        } else  if (age > 60) {
            console.log("Keep calm and look Culture channel.");
        } else {
            console.log("Technical work");
        }
    } else {
        console.log("It isn't a number.");
    }
}

check_age(17);
check_age(18);
check_age(61);
check_age("aa");

// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const check_age = function(age) {
    if (/[a-zа-я]/i.test(age)) {
            console.log("It isn't a number!")
    } else if (/^[0-9]+$/.test(age) && typeof(+age) == "number") { 
             if ((+age) <18) {
                console.log("You don’t have access cause your age is " + (+age) + ". It’s less then 18");
            } else if ((+age) >= 18 && (+age) <60) {
                console.log("Welcome!");
            } else  if ((+age) > 60) {
                console.log("Keep calm and look Culture channel.");
            } else {
                console.log("Technical work");
            }
    } else {
            console.log("It isn't a number!!");
        }
}

check_age("17")

// 4***: Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


const check_age = function(age=prompt("How old are you?")) {
    if (/[a-zа-я]/i.test(age)) {
        alert("It isn't a number!")
    } else if ((+age) <18) {
                alert("You don’t have access cause your age is " + (age) + ". It’s less then 18");
            } else if ((age) >= 18 && (age) <60) {
                alert("Welcome!");
            } else  if ((age) > 60) {
                alert("Keep calm and look Culture channel.");
            } else {
                alert("Technical work");
            }
    }
    
check_age()

