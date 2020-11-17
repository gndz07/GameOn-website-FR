function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//DOM element for (X) button
const closeBtn = document.querySelectorAll(".close");

//Close modal function
function closeModal() {
	modalbg.style.display = "none";
}
// close modal form on clicking on close (X) sign
 closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

//on blur form verification
//DOM for all input fields
 var firstName = document.getElementById("first");
 var lastName = document.getElementById("last");
 var email = document.getElementById("email");
 var birthdate = document.getElementById("birthdate");
 var quantity = document.getElementById("quantity");
 var checkboxInput = document.querySelectorAll('input[name="location"]');
 var checkbox1 = document.getElementById("checkbox1");

//made formData into an array
var formDataArr = Array.from(formData);

//form validation onblur
//valid condition
var valid = true;

//function to add attribute to show error message
function showError(index, message) {
	formDataArr[index].setAttribute("data-error", message);
	formDataArr[index].setAttribute("data-error-visible", true);
};

//function to hide error when input is valid
function hideError(index) {
	formDataArr[index].removeAttribute("data-error");
	formDataArr[index].removeAttribute("data-error-visible");
};

//first name validation function
//regex for name formats, not allowing space at the start and end
var nameRegex = /^[^\s][^\s]$/;
function validateFirstName() {
	if (!nameRegex.test(firstName.value) || firstName.value.length < 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
		showError(0, message);		
 	} else {
 		valid;
 		hideError(0);	
 	}
 	return valid;
 };
//onblur validation
firstName.addEventListener('blur', validateFirstName);

//last name validation function
function validateLastName() {
	if (!nameRegex.test(lastName.value) || lastName.value.length < 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
 		showError(1, message);

 	} else {
 		valid;
 		hideError(1);
 	}
 	return valid;
 };
 //onblur validation
lastName.addEventListener('blur', validateLastName);

//email validation function
function validateEmail() {
	var regexEmail = /.+@.+\..+/;
 	if (!regexEmail.test(email.value)) {
 		valid = false;
 		message = "Veuillez entrer une adresse email valide.";
 		showError(2, message);
 	} else {
 		valid;
 		hideError(2);
 	}
 	return valid;
};
//onblur validation
email.addEventListener('blur', validateEmail);

//birthdate validation function
function validateBirthdate() {
	var regexBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
 	
 	if (!regexBirthdate.test(birthdate.value)) {
 		valid = false;
 		message = "Veuillez entrer votre date de naissance au format jj/mm/aaaa.";
		showError(3, message);

 	} else {
 		valid;
 		hideError(3);
 	}
 	return valid;
 };
//onblur validation
birthdate.addEventListener('blur', validateBirthdate);

//quantity validation function
function validateQuantity() {
	var regexQuantity = /\d/;
 	if (!regexQuantity.test(quantity.value)) {
 		valid = false;
 		message = "Veuillez entrer des chiffres pour nous informer votre précédente(s) participation(s).";
 		showError(4, message);
 	} else {
 		valid;
 		hideError(4);
 	}
 	return valid;
 };

//onblur validation
quantity.addEventListener('blur', validateQuantity);

//onsubmit form verification
//submit button DOM
var submitButton = document.querySelector('input[type="submit"]');
//validation on clicking the submit button
submitButton.addEventListener("click", validate);

//function on clicking the submit button, AJAX request
function validate (e) {
	e.preventDefault();

	var request = new XMLHttpRequest();
	request.onload = validateForm();
}
//validate form input onsubmit

//function to validate form onsubmit
function validateForm () {
 	valid = true;
 	//first name validation
 	validateFirstName();
 	//last name validation
 	validateLastName();
 	//email validation
 	validateEmail();
 	//birthdate validation
 	validateBirthdate();
 	//quantity validation
 	validateQuantity();

 	//location radio button validation
 	//Change the checkboxInput NodeList into an array
 	var checkboxArray = Array.from(checkboxInput);
 	//filter the checked input
 	var checkboxInputChecked = checkboxArray.filter(input => input.checked);
 	
 	//put condition to check if a choice has been chosen
 	if (checkboxInputChecked.length < 1) {
 		valid = false;
 		message = "Veuillez choisir une ville.";
 		showError(5, message)
 	} else {
 		valid;
 		hideError(5);
 	};

 	//T&C checkbox validation
 	if (!checkbox1.checked) {
 		valid = false;
 		message = "Veuillez accepter les conditions d'utilisations."
 		showError(6, message)
 	} else {
 		valid;
 		hideError(6);
 	};

 	//valid form, show success message
 	if (valid) {
 		var successMessage = document.getElementById("formResult");
 		var successMessageText = document.getElementById("formResultText");
 		var message = "Merci ! Votre réservation a été reçu.";
 		successMessageText.textContent = message;
 		successMessage.style.display = "block";

 	}
 	return valid;
 };

 //Close button on modal
 //close button DOM
 var modalCloseBtn = document.getElementById("close-btn--validation");
 //close button position
 modalCloseBtn.style.marginTop = "250px";
 //redirecting to index.html on click
 modalCloseBtn.onclick = function() {
 	var successMessage = document.getElementById("formResult");
 	modalbg.style.display = "none";
 	document.querySelector("form").reset();
 	successMessage.style.display = "none";
 };