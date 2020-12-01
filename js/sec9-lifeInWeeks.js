function lifeInWeeks(age) {
    
    var remainingYearsTo90 = 90 - age;

    var days = remainingYearsTo90 * 365;
    var months = remainingYearsTo90 * 12;
    var weeks = remainingYearsTo90 * 52;

    console.log("You have " + days + " days & " + weeks + " weeks and " + months + " months left to live");
    

}

//you need to console log the age to see the calculation, we could put this in a prompt :   lifeInWeeks(40);