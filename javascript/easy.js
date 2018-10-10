
var nameOne = "Maggie";
var nameTwo = "Mark";

function nameLengths() {
    if (nameOne > nameTwo) {
        var difference = nameOne - nameTwo;
        return "Name one is " + difference + " character(s) longer."
    }else if (nameOne < nameTwo){
        var difference = nameTwo - nameOne;
        return "Name two is " + differnce + " character(s) longer."
    } else {
        return "The names are the same length."
    }
}

console.log (nameLengths());