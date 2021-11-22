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

// TODO : voir comment ne pas garder en mémoire les réponses apportées précédement dans le form

const formData = document.querySelectorAll(".formData");
const checkboxInputsTown = document.querySelectorAll(".checkbox-input-town");
const inputsNameParents = document.querySelectorAll('.validationName');

// status changed when you click on a radio box to chose your town
//toggle() change état d'un élément à chaque fois qu'elle est appelée

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



// firstname et lastname validation
function nameValidate() {

    const inputfirst = document.getElementById('first').value.length;
    const inputlast = document.getElementById('last').value.length;
    const parent = document.querySelectorAll(".validationName");

            if (inputfirst < 2) {
                parent[0].setAttribute("data-error-visible", "true");
            } else if (inputlast < 2){
                parent[1].setAttribute("data-error-visible", "true");
            } else {
                parent[0].setAttribute("data-error-visible", "false");
                parent[1].setAttribute("data-error-visible", "false");
                return true;
            }
}


// email validation

function mailValidate() {
    const email = document.getElementById("email");
    const parent = document.querySelectorAll(".validationMail");


    if(!email.validity.valid) {
        parent[0].setAttribute("data-error-visible", "true");
        if(email.validity.typeMismatch == true && email.validity.patternMismatch == true ) {
            debugger
            parent[0].setAttribute("data-error", "Veuillez entrer une adresse email valide.");
        } else if(email.validity.valueMissing == true) {
            parent[0].setAttribute("data-error", "Veuillez entrer une adresse email.");
        } else {
            parent[0].setAttribute("data-error-visible", "false");
        }
    } else {
        parent[0].setAttribute("data-error-visible", "false");
        return true;
    }

}

// validation date de naissance

function birthdayValidation() {
    const dateControl = document.querySelector('input[type="date"]');

    dateControl.minValue = '2017-06-01';

}



// form submit validation 
function validate(event) {
    event.preventDefault();
    if (checkboxValidate()==true && nameValidate()==true &&  mailValidate()==true) {
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


