

// -------------------------------     Starts Contact Form     ---------------------------------------------

// -------------------------------     Contact Form fetch API  ---------------------------------------------
var apiKey =
  '8A9095FB9C65F69112D8892DBF85CB7CC9DD90831581D86EE171EF5B72F088E457A6A7F5493C42295233D4A679F8B87A';

// index.js
function sendEmail() {
  var data = {
    apikey: apiKey,
    from: 'annie.rizvi@hotmail.com',
    fromName: 'Annie',
    to: 'anam.k@live.com',
    subject: 'Thank you for subscribing to TastefulTwist',
    bodyHtml: 'Hi [user] Thank you for subscribing to Tasteful Twist, we post weekly updates so you don\'t miss out on tasty treats',
    bodyText: '',
    isTransactional: true,
  };

  fetch('https://api.elasticemail.com/v2/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // alert('Email sent successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
      // alert('Failed to send email');
    });
}

// -------------------------------  Ends Contact Form     ---------------------------------------------

// -------------------------------  Starts Local Storage for  Sign up / in form  ---------------------------------------------
// Sign up forms
function signUpFunc(e) {
  e.preventDefault();
  console.log('working');

  var fullName = document.getElementById('fullNameInfoSignUp').value;
  var userName = document.getElementById('userNameInfoSignUp').value;
  var email = document.getElementById('emailInfoSignUp').value;
  var password = document.getElementById('passwordInfoSignUp').value;

  var user = {
    fullName: fullName,
    userName: userName,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(userName, json); // Storing user data with the username as the key
  console.log('user added', user);
  var params = 
  {
    from_name: document.getElementById("fullNameInfoSignUp").value,
    email_id: document.getElementById("emailInfoSignUp").value,
    message: document.getElementById("messageInfoSignUp").value
  }
  emailjs.send("service_u8kqcpb","template_b8zepg3", params);
  console.log(params,"h");
};

// Sign in forms
function signInFunc(e) {
  e.preventDefault();

  var userName = document.getElementById('userInfoSignIn').value;
  var password = document.getElementById('passwordInfoSignIn').value;
  var result = document.getElementById('result');

  var user = localStorage.getItem(userName); // Retrieve user data using the username

  if (user === null) {
    result.innerHTML = "wrong username";
  } else {
    var json = JSON.parse(user);
    console.log(json);
    if (userName === json.userName && password === json.password) {
      result.innerHTML = "Login successful";
    } else {
      result.innerHTML = "wrong password";
      console.log("result");
    }
  }
};

document.addEventListener("submit", signInFunc);
document.addEventListener("submit", signUpFunc);
// -------------------------------  End Local Storage for  Sign up / in form    ---------------------------------------------


// -------------------------------  Start Local Storage for Subscription  ---------------------------------------------
function saveData() {
  // alert("hi")
  let fullName, email;
  fullNameDocument= document.getElementById("fullNameInfo").value;
  emailDocument= document.getElementById("emailInfo").value;
  // console.log("fullName+email")

  // localStorage.setItem("fullNameInfo", fullName);
  // localStorage.setItem("emailInfo", email);
 
let userData = SubscriptionArray();
userData=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if (userData.some((v)=>{
  return v.email==emailDocument
})) {
  // alert("Email already exists");
} else {
  userData.push({
    fullName: fullNameDocument,
    email: emailDocument,
  });
  localStorage.setItem("users", JSON.stringify(userData));
  // alert("Email saved");
}
  
};
//--------------------------------------------------------------------    Email Confirmations    ------------------------------------------------------
// -------------------------------  Start Email Confirmation for Subscription  ---------------------------------------------

function saveData() {
  var params ={
    from_name: document.getElementById("fullNameInfo").value,
    email_id: document.getElementById("emailInfo").value,
    // message: document.getElementById("message").value
  }
  console.log(params);
  emailjs.send("service_u8kqcpb","template_b8zepg3", params);
}

// -------------------------------  End Email Confirmation for Subscription  ---------------------------------------------

// -------------------------------  Start Email Confirmation for Contact  ---------------------------------------------

function sendEmail() {
  var params ={
    from_name: document.getElementById("nameInfoContact").value,
    email_id: document.getElementById("emailInfoContact").value,
    message: document.getElementById("messageInfoContact").value
  }
  emailjs.send("service_u8kqcpb","template_b8zepg3", params);
console.log(params,"hi");
localStorage.setItem("users", JSON.stringify(params));
console.log("from sendEmail",params);

}
// ------------------------------- End Email Confirmation for Subscription ---------------------------------------------


// -------------------------------  Start Email Confirmation for Sign Up ---------------------------------------------

// function signUpFunc() {
//   var params = 
//   {
//     from_name: document.getElementById("fullNameInfoSignUp").value,
//     email_id: document.getElementById("emailInfoSignUp").value,
//     message: document.getElementById("messageInfoSignUp").value
//   }
//   emailjs.send("service_u8kqcpb","template_b8zepg3", params);
//   console.log(params,"h");
// }