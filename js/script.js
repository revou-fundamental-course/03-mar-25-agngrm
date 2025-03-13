// Ini file javascript

// Banner Slideshow
let bannerIndex = 0;
showBanner();

// change banner
function nextBanner() {
  bannerIndex += 1;
  showBanner();
}

// show banner
function showBanner() {
  // banner elements
  const banners = document.getElementsByClassName("banner-img");

  if (bannerIndex >= banners.length) {
    bannerIndex = 0;
  }

  // Looping banner elements
  for (let i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";
  }

  // current banner
  banners[bannerIndex].style.display = "block";
}

// interval change banner
setInterval(nextBanner, 3000);

// Update username
function updateUserName() {
  const nameInput = document.getElementById("name-input-home");
  const userName = document.getElementById("user-name");

  if (nameInput.value.trim() !== "") {
    userName.textContent = nameInput.value;
    // Save to local storage
    localStorage.setItem("userName", nameInput.value);
    nameInput.value = "";
  } else {
    alert("Please enter your name");
  }
}

// Check for saved name
document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    document.getElementById("user-name").textContent = savedName;
  }
});

// validate message form
function validateForm() {
  // form elements
  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const subjectInput = document.getElementById("form-subject");
  const messageInput = document.getElementById("form-message");
  const formResult = document.getElementById("form-result");

  // Reset validation messages
  formResult.innerHTML = "";
  formResult.className = "form-result";

  // Validate all fields
  if (nameInput.value.trim() === "") {
    showValidationError("Name must be filled out");
    return;
  }

  if (emailInput.value.trim() === "") {
    showValidationError("Email must be filled out");
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    showValidationError("Please enter a valid email address");
    return;
  }

  if (subjectInput.value.trim() === "") {
    showValidationError("Subject must be filled out");
    return;
  }

  if (messageInput.value.trim() === "") {
    showValidationError("Message must be filled out");
    return;
  }

  // show success message
  showSuccessMessage(nameInput.value, emailInput.value, subjectInput.value, messageInput.value);

  // Clear form fields
  document.getElementById("message-form").reset();
}

//  validation error
function showValidationError(message) {
  const formResult = document.getElementById("form-result");
  formResult.innerHTML = "<p>" + message + "</p>";
  formResult.className = "form-result error";
  formResult.style.display = "block";
}

// success message
function showSuccessMessage(name, email, subject, message) {
  const formResult = document.getElementById("form-result");

  // Create success message
  let html = "<p>Thank you for your message! We'll get back to you soon.</p>";
  html += "<div class='message-details'>";
  html += "<p><strong>Name:</strong> " + name + "</p>";
  html += "<p><strong>Email:</strong> " + email + "</p>";
  html += "<p><strong>Subject:</strong> " + subject + "</p>";
  html += "<p><strong>Message:</strong> " + message + "</p>";
  html += "</div>";

  formResult.innerHTML = html;
  formResult.className = "form-result success";
  formResult.style.display = "block";
}
