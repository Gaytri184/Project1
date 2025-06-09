document.getElementById('openForm').addEventListener('click', function() {
    document.getElementById('queryForm').style.display = 'block';
});

function closeForm() {
    document.getElementById('queryForm').style.display = 'none';
}
document.closeform('.cross').style.display='none';
   
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign-up successful!");
    }
});
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Example validation (you can replace with actual authentication)
  if (username === "admin" && password === "password") {
    alert("Login successful!");
    error.textContent = "";
    // Redirect or further logic can go here
  } else {
    error.textContent = "Invalid username or password";
  }
});

