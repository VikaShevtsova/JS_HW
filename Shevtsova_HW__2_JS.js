let Your_string = 'mdmdmLL51@';


function check_string(Your_string) {
    if (typeof (Your_string) == "string") {
        if (Your_string.length === 0) {
            console.log("Error_1! The string is empty.");
            return false;
        } else {
            //console.log("Cool_1.Stroka ne pustaya.");
            return true;
        }
    } else {
        console.log("Error_2. It isn't a string.");
        return false;
    }
}

function min_lenght_string(Your_string) {
    if (Your_string.length>=5){
    //console.log("Cool_2. dlina stroki bolshe 5"); 
    return true;
    } else {
        console.log("Error_3! Minimal length of the string is 5 simbols.");
        return false;
    }   

} 

function max_lenght_string(Your_string) {
    if (Your_string.length<=64){
    //console.log("Cool_3. dlina stroki menshe 64."); 
    return true;
    } else {
        console.log("Error_4! Maximal length of the string is 64 simbols.");
        return false;
    }   

} 

function bukvy_string (Your_string) {
     if (/[a-zа-я]/i.test(Your_string)){
    //console.log("Cool_4.stroka soderzit bukvy");
    return true; 
    } else {
    console.log("Error_5! The string doesn't contain any letters.");
    return false;
    }

}


function BUkvy1_string (Your_string) {
    if (/[A-ZА-Я]/.test(Your_string)){
    //console.log("Cool_5.stroka soderzit bolshye bukvykvy") 
    return true;
    } else {
    console.log("Error_6! The string doesn't contain any uppercase letters");
    return false;
    }
}

function cyfry_string (Your_string) {
     if (/[0-9]/.test(Your_string)){
   // console.log("Cool_6.stroka soderzit cyfry")
    return true; 
    } else {
    console.log("Error_7! The string doesn't contain any numbers");
    return false;
    }
}

function include_string (Your_string) { 
    if (Your_string.includes("@")) {
    //console.log("cool_7.stroka soderzit @") 
    return true;
    } else {
    console.log("Error_8! The string doesn't contain the simbol '@'");
    return false;
    }
}

let st=check_string(Your_string);
let min=min_lenght_string(Your_string);
let max=max_lenght_string(Your_string);
let bukvy=bukvy_string (Your_string);
let Bukvy=BUkvy1_string (Your_string);
let cyfry=cyfry_string (Your_string);
let incl=include_string (Your_string);


 if (st && min && max && bukvy && Bukvy && cyfry && incl) {
     console.log("All right!")
 //} else { 
     //console.log("Error.Something is wrong.")
 } 
 