

function validateName(input) {
    var span;
    var str = input.value.trim();
    if (input.id === "fname") {
        span = document.getElementById("s1");
    } else {
        span = document.getElementById("s2");
    }

    if (str.length < 3) {
        span.innerHTML = "Minimum 3 letters";
        span.style.color = "red";
        return;
    }

    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
            span.innerHTML = "Only letters allowed";
            span.style.color = "red";
            return;
        }
    }
    span.innerHTML = "Valid";
    span.style.color = "green";
}

function validateEmail(str) {
    var span = document.getElementById("s3");
    var at = str.indexOf("@");
    var dot = str.lastIndexOf(".");
    if (at > 1 && dot > at + 2 && dot < str.length - 2) {
        span.innerHTML = "Valid";
        span.style.color = "green";
    } else {
        span.innerHTML = "Invalid Email";
        span.style.color = "red";
    }
}

function validatePhone(str) {
    var span = document.getElementById("s4");
    if (str.length !== 10 || isNaN(str)) {
        span.innerHTML = "Enter 10 digit number";
        span.style.color = "red";
    } else if (str.charAt(0) !== "7" && str.charAt(0) !== "8" && str.charAt(0) !== "9") {
        span.innerHTML = "Must start with 7, 8, or 9";
        span.style.color = "red";
    } else {
        span.innerHTML = "Valid";
        span.style.color = "green";
    }
}

function validateDob(str) {
    var span = document.getElementById("s5");
    var birthDate = new Date(str);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 18) {
        span.innerHTML = "Valid";
        span.style.color = "green";
    } else {
        span.innerHTML = "Must be at least 18";
        span.style.color = "red";
    }
}


function validatePassword(pass) {
    var span = document.getElementById("s7");
    if (pass.length >= 8) {
        passval = pass;
        span.innerHTML = "Valid Password";
        span.style.color = "green";
    } else {
        span.innerHTML = "Min 8 characters";
        span.style.color = "red";
    }
}


function validateInteger(str) {
    var span = document.getElementById("s4");
    let doidx=str.lastIndexOf(".");
    let plusIdx=str.indexOf("+");
    let eidx=str.indexOf("e");
    if (doidx > -1 || plsidx >-1 || eidx >-1) {
        span.innerHTML = "Enter Valid Integer";
        span.style.color = "red";
    }else {
        span.innerHTML = "Valid";
        span.style.color = "green";
    }
}

function submitSum(){
    let sum=0;
    let val=getElementById("int");
    var span = document.getElementById("s4");
    for(var i=0;i<val.length;i++){
        sum=sum + Number (val.charAt(i));
    }
    
        span.innerHTML = "Sum is = "+val;
        span.style.color = "green";

}


# commit on 2025-02-06 00:00:00
