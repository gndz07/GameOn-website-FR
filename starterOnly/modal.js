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


 //DOM for validation result
 var firstNameResult = document.getElementById("firstResult");
 var lastNameResult = document.getElementById("lastResult");
 var emailResult = document.getElementById("emailResult");
 var birthdateResult = document.getElementById("birthdateResult");
 var quantityResult = document.getElementById("quantityResult");
 var radioResult = document.getElementById("radioResult");
 var checkboxResult = document.getElementById("checkboxResult");


//form validation onblur

//valid condition
var valid = true;

//change border color when input is invalid
var inputField = document.getElementsByClassName("text-control");

function changeBorder(i) {
	inputField[i].style.borderColor = "red";
	};

//when input is valid
function changeBackBorder(i) {
	inputField[i].style.border = "none";
};


//first name validation
firstName.addEventListener('blur', function() {
	if (firstName.value.length < 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
		firstNameResult.textContent = message;

		changeBorder(0);
 		
 	} else {
 		valid;
 		firstNameResult.textContent = "";
 		changeBackBorder(0);
 	}

 	return valid;
 });



//last name validation
lastName.addEventListener('blur', function() {
	if (lastName.value.length < 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

 		lastNameResult.textContent = message;

 		changeBorder(1);

 	} else {
 		valid;
 		lastNameResult.textContent = "";
 		changeBackBorder(1);
 	}
 	return valid;
});



//email validation
email.addEventListener('blur', function() {
	var regexEmail = /.+@.+\..+/;
 	if (!regexEmail.test(email.value)) {
 		valid = false;
 		message = "Veuillez entrer une adresse email valide.";

 		emailResult.textContent = message;

 		changeBorder(2);

 	} else {
 		valid;
 		emailResult.textContent = "";
 		changeBackBorder(2);
 	}
 	return valid;
});



//birthdate validation
birthdate.addEventListener('blur', function() {
	var regexBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
 	// /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
 	
 	if (!regexBirthdate.test(birthdate.value)) {
 		valid = false;
 		message = "Veuillez entrer votre date de naissance au format jj/mm/aaaa.";

 		birthdateResult.textContent = message;

 		changeBorder(3);

 	} else {
 		valid;
 		birthdateResult.textContent = "";
 		changeBackBorder(3);
 	}
 	return valid;
});



//quantity validation
quantity.addEventListener('blur', function() {
	var regexQuantity = /\d/;
 	if (!regexQuantity.test(quantity.value)) {
 		valid = false;
 		message = "Veuillez entrer des chiffres pour nous informer votre précédente(s) participation(s).";
 	
 		quantityResult.textContent = message;
 		changeBorder(4);

 	} else {
 		valid;
 		quantityResult.textContent = "";
 		changeBackBorder(4);
 	}
 	return valid;
 });	





 //onsubmit form verification

//submit button DOM
var submitButton = document.querySelector('input[type="submit"]');
//validation on clicking the submit button
submitButton.addEventListener("click", validate);

//function on clicking the submit button, AJAX request
function validate (e) {
	e.preventDefault();

	var request = new XMLHttpRequest();

 		request.onreadystatechange = function () {
 			if(request.readyState === XMLHttpRequest.DONE) {
 				var status = request.status;
 				if (status === 0 || (status >= 200 && status < 400)) {
 					validateForm();
 				} else {
 					//error
 				}
 			}
 		};

 		//mock localhost server
 		request.open("POST", "http://localhost/projet4-oc/content.json", true);
 		request.setRequestHeader("Content-Type", "application/json");
 		request.send(JSON.stringify());
};



//validate form input onsubmit

//function to validate form onsubmit
function validateForm () {


 	// validation status

 	var valid = true;
 	


 	//first name validation

 	if (firstName.value.length < 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";

 		firstNameResult.textContent = message;
 	} else {
 		valid;
 		firstNameResult.textContent = "";
 	};


 	//last name validation
 	if (lastName.value.length < 2) {
 		valid = false;
 		message = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";

 		lastNameResulttextContent = message;
 	} else {
 		valid;
 		lastNameResult.textContent = "";
 	};


 	//email validation
 	var regexEmail = /.+@.+\..+/;
 	if (!regexEmail.test(email.value)) {
 		valid = false;
 		message = "Veuillez entrer une adresse email valide.";

 		emailResult.textContent = message;
 	} else {
 		valid;
 		emailResult.textContent = "";
 	};



 	//birthdate validation
 	var regexBirthdate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
 	
 	
 	if (!regexBirthdate.test(birthdate.value)) {
 		valid = false;
 		message = "Veuillez entrer votre date de naissance au format jj/mm/aaaa.";

 		birthdateResult.textContent = message;
 	} else {
 		valid;
 		birthdateResult.textContent = "";
 	};



 	//quantity validation
 	var regexQuantity = /\d/;
 	if (!regexQuantity.test(quantity.value)) {
 		valid = false;
 		message = "Veuillez entrer des chiffres pour nous informer votre précédente(s) participation(s).";
 	
 		quantityResult.textContent = message;
 	} else {
 		valid;
 		quantityResult.textContent = "";
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

 		radioResult.textContent = message;
 	} else {
 		valid;
 		radioResult.textContent = "";
 	};


 	//T&C checkbox validation

 	if (!checkbox1.checked) {
 		valid = false;
 		message = "Veuillez accepter les conditions d'utilisations."

 		checkboxResult.textContent = message;
 	} else {
 		valid;
 		checkboxResult.textContent = "";
 	};

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
 var modalCloseBtn = document.getElementById("close-btn--validation");
 modalCloseBtn.style.marginTop = "310px";
 modalCloseBtn.onclick = function() {
 	location.href = "index.html";
 };