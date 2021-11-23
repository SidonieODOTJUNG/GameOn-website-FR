/****************/
/* Mobil Navbar */
/****************/

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className == "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/**************************/
/* Launch and close modal */
/**************************/

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".btn-signup");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


/**********************/
/* Unvalidation input */
/**********************/

const formData = document.querySelectorAll(".formData");
const checkboxInputsTown = document.querySelectorAll(".checkbox-input-town");
const inputsNameParents = document.querySelectorAll('.validationName');

// status changed when you click on a radio box to chose your town
//toggle() change état d'un élément à chaque fois qu'elle est appelée


/************* town validation **************/

function toggleCheckbox(checkbox) {

    checkbox.addEventListener("click", (e)=>{
           if(e.target.classList.contains("checked")) {
                e.target.checked = false;
            }else {
                e.target.checked = true;
            }
            e.target.classList.toggle("checked");
            checkboxValidate();
        });
}

checkboxInputsTown.forEach(toggleCheckbox);

// error message showed if no town selectionned
function checkboxValidate() {
    let array = Array.of(...checkboxInputsTown);
    // some() = vérifie si au moins un élém du tableau rempli la condition
    // fonction flechée qui retourne un bool
    let isChecked =  array.some((checkbox)=> checkbox.checked);
    const parent = array[0].parentNode;
    if(isChecked==false) {
        parent.setAttribute("data-error-visible", "true");
    }else{
        parent.setAttribute("data-error-visible", "false");
        return true;
    }
}


/**** firstname et lastname validation ******/
function nameParam(name) {
const parent = name.parentNode;
const value = name.value;
    if (value.length < 2) {
        parent.setAttribute("data-error-visible", "true");
        return false;
    } else {
        parent.setAttribute("data-error-visible", "false");
        return true;
    }
}

function nameFirstValidate() {
    const inputFirst = document.getElementById('first');
    return nameParam(inputFirst);

}

function nameLastValidate() {
    const inputLast = document.getElementById('last');
    return nameParam(inputLast);
}


/************ email validation **************/
function mailValidate() {
    const email = document.getElementById("email");
    const parent = email.parentNode;

    if(email.validity.valueMissing) {
        parent.setAttribute("data-error-visible", "true");
        parent.setAttribute("data-error", "Veuillez entrer une adresse email.");
        return false;
    }

    if(email.validity.patternMismatch) {
        parent.setAttribute("data-error-visible", "true");
        parent.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
        return false;
    } 

    parent.setAttribute("data-error-visible", "false");
    return true;
}


/********** birthdate validation ************/ 
function birthdateValidate() {
    const dateControl = document.getElementById("birthdate");
    const parent = dateControl.parentNode;

    if (dateControl.value == "") {
        parent.setAttribute("data-error-visible", "true");
    } else {
        parent.setAttribute("data-error-visible", "false");
        return true;
    }
}


/********** agreement validation ************/
function agreementValidate() {
    const agreementControl = document.getElementById("checkbox1");
    const parent = agreementControl.parentNode;

    if(!agreementControl.checked) {
        parent.setAttribute("data-error-visible", "true");
        return false;
    } else {
        parent.setAttribute("data-error-visible", "false");
        return true;
    }
}


/********* Competition validation  **********/
function competitionValidate() {
    const numberControl = document.getElementById("quantity");
    const parent = numberControl.parentNode;

    if(numberControl.value == "") {
        parent.setAttribute("data-error-visible", "true");
        return false;
    } else {
        parent.setAttribute("data-error-visible", "false");
        return true;
    }
}


/********* form submit validation  **********/
function validate(event) {
    event.preventDefault();
    if (checkboxValidate()==true && nameFirstValidate()==true && nameLastValidate()==true &&  mailValidate()==true && birthdateValidate()==true && agreementValidate()==true && competitionValidate()==true) {
        return replaceTextValidation();
    }
}



/********************/
/* Validation modal */
/********************/

function replaceTextValidation() {
    const p = document.createElement("p");
    p.innerHTML = "Merci ! Votre réservation a été reçue.";
    p.classList.add("text-validation");
    const form = document.getElementById('reserve');
    const parent = form.parentNode;
    parent.appendChild(p);   
    parent.replaceChild(p, form);
}




