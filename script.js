function toggleContactForm() {
  var form = document.getElementById("contact-form");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  var mailtoString = "mailto:ryaankhan1004@outlook.com.com" +
                     "?subject=Website Inquiry" +
                     "&body=Name: " + encodeURIComponent(name) +
                     "%0AEmail: " + encodeURIComponent(email) +
                     "%0AMessage: " + encodeURIComponent(message);
  
  window.open(mailtoString);
});
