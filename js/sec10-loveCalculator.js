//create a random generator love calculator

/*
//using 'Math.random' create a random number generator
var loveCalc = Math.random();
// As i want this to be a percentage up to 100 i have to multiply by 100 
loveCalc = loveCalc * 100;
//As random will only take me to 0-99.999999 I then need to do 'Math.floor' to round down to the nearest whole number (which would be 1)  then add 1, so now i will get 1-100
loveCalc = Math.floor(loveCalc) + 1;
   
  
console.log(loveCalc);
 
*/




    var nameOne = prompt ("What is your name?");
    var nameTwo = prompt ("what is your partners name?");

    var loveCalc = Math.random();
    loveCalc = loveCalc * 100;
    loveCalc = Math.floor(loveCalc) + 1;

    //adding control flow to the function
    if ( loveCalc > 70){
        alert ("The love match for " + nameOne + " and " + nameTwo + " is " + loveCalc + "%. This is a match made in heaven!");
    } else {
        alert ("The love match for " + nameOne + " and " + nameTwo + " is " + loveCalc + "%");

    }

    


    console.log(loveCalc);
