document.addEventListener('DOMContentLoaded', function () {
  fetch('../nav-foot/navbar.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('navbar-placeholder').innerHTML = data;
    });

  fetch('../nav-foot/footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});
