function sumAB(A, B) {
    return A + B;
}
function randomPosition() {
    return Math.random() * 140 + 70;
}


function squareRoot(val) {
    if(isNaN(val)) {
        console.log("not a num")
    }
    else {
        sqrtVal = Math.sqrt(val)
        console.log(sqrtVal)
    }
}

function decreasingOrder(val) {
    for(let i = val; i > 0; i--) {
        console.log(i);
    }
}
