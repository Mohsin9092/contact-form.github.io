//   DOM element selectors
let uname = document.querySelector("#uName");
let email = document.querySelector("#email");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let submit = document.querySelector("button");
let message = document.querySelector("#message");

//Regex

const namePattern = /^[A-Za-z\s]{2,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messagePattern = /^.{10,}$/;

//        VALIDATION FOR NAME FIELD AT INPUT TIME

uname.addEventListener("input", (e) => {
    {
        if (!namePattern.test(e.target.value)) {
            box1.innerText =
                "Name must be at least 2 characters and contain only letters.";
            box1.style.color = "red";
        } else box1.innerText = "";
    }
});
//   VALIDATION FOR EMAIL FIELD AT INPUT TIME

email.addEventListener("input", (e) => {
    if (e.target.value.trim() === "") {
        box2.innerText = "Please Enter Email Address";
    } else if (!emailPattern.test(e.target.value)) {
        box2.innerText = "Enter email in valid format";
        box2.style.color = "red";
    } else {
        box2.innerText = "";
    }
});
//       VALIDATION FOR MESSAGE FIELD AT INPUT TIME

message.addEventListener("input", (e) => {
    if (!messagePattern.test(e.target.value)) {
        box3.innerText = "Message must be at least 10 characters.";
        box3.style.color = "red";
    } else {
        box3.innerText = "";
    }
});

//       VALIDATION  AT SUBMISSION

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    // Name check
    if (uname.value.trim() === "") {
        box1.innerText = "Field is required.";
        box1.style.color = "red";
        isValid = false;
    }

    // Email check
    if (email.value.trim() === "") {
        box2.innerText = "Please enter email address.";
        box2.style.color = "red";
        isValid = false;
    }

    // Message check
    if (message.value.trim() === "") {
        box3.innerText = "Please enter your message.";
        box3.style.color = "red";
        isValid = false;
    }
    if (isValid) {
        alert("Sucessfully Submitted");
    }

    //              old code
    // if (uname.value.trim() === ""  || email.value.trim() === "" || message.value.trim() === '') {
    //     box1.innerText = "The field is required";
    //     box2.innerText = "Please Enter Email Address";
    //     box3.innerText = "Please Enter Your Message";
    // } else {
    //     box1.innerText = ""; // clear error if filled
    //      box2.innerText = "";
    //      box3.innerText = "";
    // }
});
