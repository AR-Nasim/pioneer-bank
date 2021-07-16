document.getElementById("login-btn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (email == "" || pass == "") {
        alert("Please fill up the required information.");
        stopPropagation();
    }
    document.getElementById("login").style.display = "none";
    document.getElementById("transaction").style.display = "block";
})
var currentBalance = parseFloat(document.getElementById("currentBalance").innerText);

document.getElementById("deposit-btn").addEventListener("click", function () {
    var updatedDeposit = parseFloat(document.getElementById("addedDeposit").value);
    if (updatedDeposit <= 0) {
        alert("Please enter a proper deposit amount");
    }
    else {
        calculateBalance("currentDeposit", updatedDeposit);
    }
    document.getElementById("addedDeposit").value = "";
})

document.getElementById("withdraw-btn").addEventListener("click", function () {
    var updatedWithdraw = parseFloat(document.getElementById("addedWithdraw").value);
    if (updatedWithdraw <= 0) {
        alert("Please enter a proper withdraw amount");
    }
    else if (updatedWithdraw > currentBalance) {
        alert("You don't have sufficient amount to withdraw");
    }
    else {
        calculateBalance("currentWithdraw", updatedWithdraw);
    }
    document.getElementById("addedWithdraw").value = "";
})

function calculateBalance(id, updatedValue) {
    var current = parseFloat(document.getElementById(id).innerHTML);
    current = current + updatedValue;
    if (id == "currentWithdraw") {
        currentBalance = currentBalance - updatedValue;
    }
    else {
        currentBalance = currentBalance + updatedValue;
    }
    if(current >= 99999 || currentBalance >= 99999){
        var header=document.getElementsByTagName("h1");
        for (let i = 0; i < header.length; i++) {
            const element = header[i];
            element.style.fontSize = "40px";
        }
    }
    document.getElementById(id).innerHTML = current;
    console.log(current);
    document.getElementById("currentBalance").innerHTML = currentBalance;
}
