/****************/
/* Mobil Navbar */
/****************/

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
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
    if(isChecked===false) {
        parent.setAttribute("data-error-visible", "true");
    }else{
        parent.setAttribute("data-error-visible", "false");
    }
}

// form submit validation 
function validate(event) {
    event.preventDefault();
  
//   switch (document.getAttribute("id")) {
//     case 'first' : 
//       if (input.value.length, 2 === false) {
//         // changer la valeur de data-error-visible en true
//         // empecher la validation du formulaire
//       }
//     break;
//     case 'last' : 
//     break
//   }

    let validationInputsTown = checkboxValidate();
    // console.log(validationInputsTown);

}





/********************/
/* Validation modal */
/********************/

// 1. créer la modal en HTML ou replase form par p : "Merci ! Votre réservation a été reçue."
// 2. lancer la modal au click sur c'est parti
// 3. créer le processus de fermeture de la modal

// function replaceTextValidation {

// }



