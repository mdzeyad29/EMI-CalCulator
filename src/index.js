const slider = document.querySelector(".slider input")
console.log(slider);
function Reset() {
    document.getElementById("loan").value = null;
    document.getElementById("Interest Rate").value = null;
    document.getElementById("Time").value = null;

    document.getElementById("Monthly-Interest").innerHTML = 0;
    document.getElementById("Monthly-Payment").innerHTML = 0;
    document.getElementById("Interest-Cost").innerHTML = 0;

}

function calculation() {
    var loan = document.getElementById("loan").value;
    var interestRate = document.getElementById("Interest Rate").value;
    var Time = document.getElementById("Time").value;

    var interestperYear = (loan * interestRate) / 100;
    var monthlyInterest = interestperYear / 12;

    var monthlyPayment = monthlyInterest + (loan / Time);

    var totalInterestCost = monthlyInterest * Time;

    document.getElementById("Monthly-Interest").innerHTML = monthlyInterest.toFixed(4);
    document.getElementById("Monthly-Payment").innerHTML = monthlyPayment.toFixed(4);
    document.getElementById("Interest-Cost").innerHTML = totalInterestCost.toFixed(4);
}
function sliderupdate() {
    document.getElementById("loan").innerHTML = slider.value;
}
slider.addEventListener("input", sliderupdate);