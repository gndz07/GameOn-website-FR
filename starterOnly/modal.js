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



 //form verification

 function validate () {
 	var firstName = document.getElementById("first").value;
 	var lastName = document.getElementById("last").value;
 	var email = document.getElementById("email").value;
 	var birthdate = document.getElementById("birthdate").value;
 	var quantity = document.getElementById("quantity").value;
 	var checkboxInput = document.querySelectorAll('input[name="location"]');
 	var checkbox1 = document.getElementById("checkbox1");

 	// validation status

 	var valid = true;
 	var message = "";


 	//first name validation

 	if (firstName.length <= 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

 		document.getElementById("firstResult").textContent = message;
 	};


 	//last name validation
 	if (lastName.length <= 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

 		document.getElementById("lastResult").textContent = message;
 	};


 	//email validation
 	var regexEmail = /.+@.+\..+/;
 	if (!regexEmail.test(email)) {
 		valid = false;
 		message = "Veuillez entrer une adresse email valide.";

 		document.getElementById("emailResult").textContent = message;
 	};



 	//birthdate validation
 	var regexBirthdate = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
 	if (!regexBirthdate.test(birthdate)) {
 		valid = false;
 		message = "Veuillez entrer votre date de naissance au format jj/mm/aaaa.";

 		document.getElementById("birthdateResult").textContent = message;
 	};



 	//quantity validation
 	var regexQuantity = /\d/;
 	if (!regexQuantity.test(quantity)) {
 		valid = false;
 		message = "Veuillez entrer des chiffres pour nous informer votre précédente(s) participation(s).";
 	
 		document.getElementById("quantityResult").textContent = message;
 	};



 	//location radio button validation
 	
 	//Change the checkboxInput NodeList into an array
 	var checkboxArray = Array.from(checkboxInput);

 	//filter the checked input
 	var checkboxInputChecked = checkboxArray.filter(input => input.checked);
 	
 	//put condition to check if a choice has been chosen
 	if (checkboxInputChecked.length < 1) {
 		valid = false;
 		message = "Veuillez choisir une ville.";

 		document.getElementById("radioResult").textContent = message;
 	};


 	//T&C checkbox validation

 	if (!checkbox1.checked) {
 		valid = false;
 		message = "Veuillez accepter les conditions d'utilisations."

 		document.getElementById("checkboxResult").textContent = message;
 	};

 	return valid;

 }