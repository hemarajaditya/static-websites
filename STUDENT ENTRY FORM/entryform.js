let addUserFormE1 = document.getElementById("addUserForm");

let firstNameE1 = document.getElementById("firstName");
let lastNameE1 = document.getElementById("lastName");
let nameErrMsgE1 = document.getElementById("nameErrMsg1");
let nameErrMsgE2 = document.getElementById("nameErrMsg2");


let errMsg = "*Required";

firstNameE1.addEventListener("blur", function(event){
    if(event.target.value === ""){
        nameErrMsgE1.textContent = errMsg
    }else{
        nameErrMsgE1.textContent = ""
    }
})

lastNameE1.addEventListener("blur", function(event){
    if(event.target.value === ""){
        nameErrMsgE2.textContent = errMsg
    }else{
        nameErrMsgE2.textContent = ""
    }
})