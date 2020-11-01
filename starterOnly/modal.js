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
 	var quantity = document.getElementById("quantity").value;

 	// validation status

 	var valid = true;
 	var message = "";

 	if (firstName.length <= 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

 		document.getElementById("firstResult").textContent = message;
 	};

 	if (lastName.length <= 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

 		document.getElementById("lastResult").textContent = message;
 	};

 	var regexEmail = /.+@.+\..+/;
 	if (!regexEmail.test(email)) {
 		valid = false;
 		message = "Veuillez entrer une adresse email valide.";

 		document.getElementById("emailResult").textContent = message;
 	};

 	var regexQuantity = /\d/;
 	if (!regexQuantity.test(quantity)) {
 		valid = false;
 		message = "Veuillez entrer des chiffres pour nous informer votre précédente(s) participation(s).";
 	
 		document.getElementById("quantityResult").textContent = message;
 	};


 	return valid;


 }