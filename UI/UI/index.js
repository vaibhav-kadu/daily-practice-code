let pass;

let button = document.getElementById("submit");


function nameVal(val) {
    let name = val.trim();
    let span=document.getElementById("sname");

    if (name.length < 3) {
        span.innerHTML = "Minimum 3 letters";
        span.style.color = "red";
        return;
    }

    for (let i = 0; i < name.length; i++) {
        let code = name.charCodeAt(i);
        if (!((code >= 65 && code <= 90) || (code >= 97 && code <= 122))) {
            span.innerHTML = "Only letters allowed";
            span.style.color = "red";
            return;
        }
    }
    span.innerHTML = "Valid";
    span.style.color = "green";
}

function addressVal(val){
    let span=document.getElementById("saddress");
    let add=val.trim();
    if(add.length<20){
        span.innerHTML="At Least 20 Characters";
        span.style.color="red";
    }
     span.innerHTML = "Valid";
        span.style.color = "green";
}




function emailVal(str) {
    let span = document.getElementById("semail");
    let at = str.indexOf("@");
    let dot = str.lastIndexOf(".");
    if (at > 1 && dot > at + 2 && dot < str.length - 2) {
        span.innerHTML = "Valid";
        span.style.color = "green";
    } else {
        span.innerHTML = "Invalid Email";
        span.style.color = "red";
    }
}


function contactVal(val){
    let span=document.getElementById("scontact");
    let contact= val;
    if(contact[0]<7){
        span.innerHTML="Invalid Start";
        span.style.color="red";
    }else{
        if(contact.length !==10){
            span.innerHTML="Must 10 Digit";
            span.style.color="red";
        }else{
            span.innerHTML="";
            span.style.color="";
        }
    }
    
}

function dobVal(val){
    let span=document.getElementById("sdob");
    let dob=val;
    if(dob>"2007-07-15"){
        span.innerHTML="You Are Not 18+";
        span.style.color="red";
    }else{
        span.innerHTML="";
        span.style.color="";
    }
}


function passVal(val) {
    pass=val;
    let span = document.getElementById("spass");
    let num=/[0-9]/.test(val);
    let alpha=/[A-Za-z]/.test(val);
    let spe=/[!@#$%^&*]/.test(val);
    if (pass.length >= 8  && num && alpha && spe) {
        passval = pass;
        span.innerHTML = "Valid Password";
        span.style.color = "green";
    } else {
        span.innerHTML = "Min 8 characters";
        span.style.color = "red";
    }
}

function cpassVal(cpass) {
    let span = document.getElementById("scpass");
    if (cpass==pass) {
        span.innerHTML = "Valid Password";
        span.style.color = "green";
    } else {
        span.innerHTML = "Not Mached";
        span.style.color = "red";
    }
}
# commit on 2025-10-27 00:00:00
