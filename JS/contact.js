

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
      alert('Email sent successfully');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send email');
    });
}

// -------------------------------  Ends Contact Form     ---------------------------------------------

// -------------------------------  Starts Local Storage for  Sign up / in form  ---------------------------------------------
// Sign up forms
function signUpFunc (e) {
  e.preventDefault();
  console.log('working');

  var fullName = document.getElementById('fullNameInfoSignUp').value;
  var userName = document.getElementById('userNameInfoSignUp').value;
  var email = document.getElementById('emailInfoSignUp').value;
  var password = document.getElementById('passwordInfoSignUp').value;
  // var repeatPassword = document.getElementById('repeatPasswordInfoSignUp').value;

  var user = {
    fullName: fullName,
    userName: userName,
    email: email,
    password: password,
    // repeatPassword: repeatPass,
  };
  var json = JSON.stringify(user);
  localStorage.setItem('userName', json);
  console.log('user added');
};

// Sign in forms

function signInFunc (e) {
  e.preventDefault();

  var userName = document.getElementById('userNameInfoSignIn').value;
  var password = document.getElementById('passwordInfoSignIn').value;
  var result  = document.getElementById('result');


  console.log(username, password)


  if (user === null) {
    result.innerHTML = "wrong username";
  } else {
    var json = JSON.parse(user);
    console.log(json);
    if(userName === json.userName && password === json.password) {
      result.innerHTML = "Login successful";
    } else {
      result.innerHTML = "wrong password";
      console.log("result");
  }
};
};

document.getElementById("signInForm").addEventListener("submit", signInFunc)
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
 
let userData = SubscriptionArray.create();
userData=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if (userData.some((v)=>{
  return v.email==emailDocument
})) {
  alert("Email already exists");
} else {
  userData.push({
    fullName: fullNameDocument,
    email: emailDocument,
  });
  localStorage.setItem("users", JSON.stringify(userData));
  alert("Email saved");
}
  
};