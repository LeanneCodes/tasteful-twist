

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
    bodyHtml:
      'Hi [user] Thank you for subscribing to Tasteful Twist, we post weekly update so you don"t miss out on tasty treats',
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
    });
}

// -------------------------------  Ends Contact Form     ---------------------------------------------

// -------------------------------  Starts Local Storage for  Sign up / in form  ---------------------------------------------
// Sign up forms
function signUpFunc (e) {
  event.preventDefault();
  console.log('working');

  var fullName = document.getElementById('fullNameInfoSignUp').value;
  var userName = document.getElementById('userNameInfoSignUp').value;
  var email = document.getElementById('emailInfoSignUp').value;
  var password = document.getElementById('passwordInfoSignUp').value;
  var repeatPassword = document.getElementById('repeatPasswordInfoSignUp').value;

  var user = {
    fullName: fullName,
    userName: userName,
    email: email,
    password: pass,
    repeatPassword: repeatPass,
  };
  var json = JSON.stringify(user);
  localStorage.setItem('userName', json);
  console.log('user added');
};

// Sign in forms
function signInFunc (e) {
  event.preventDefault();

  var userName = document.getElementById('userNameInfoSignUp').value;
  var password = document.getElementById('passwordInfoSignUp').value;
  var result  = document.getElementById('result').value;

  var user =  localStorage.getItem(userName);
  var json = JSON.parse(user);
  console.log(data);

  if (user = null) {
    result.innerHTML = "wrong username";
  } else if (userName == data.userName && pass == data.password) {
    result.innerHTML = "logged in";
  } else {
    result.innerHTML = "wrong password";
  }
};


// -------------------------------  Ends   Local Storage for  Sign up / in form    ---------------------------------------------
// -------------------------------          ---------------------------------------------
