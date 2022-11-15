const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


//   Modal Items
const modal = document.getElementById('email-modal');
const button = document.getElementById('nav_button');
const openBtn = document.querySelector('.main__btn');
const openBtn2 = document.querySelector('.navbar__btn');
const closeBtn = document.querySelector('.close-btn');

// Clicks
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

openBtn2.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});


// Validation Form
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// Error Message show
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//Valid Messages show
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}
//Check fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }else {
            showValid(input);
            return true;
        }
    })
}

//Check unput length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showValid(input);
        return true;

    }
}

//Check passwords match
function passwordMach(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwors do not match');
    } else {
        return true;
    }
}

// Get Field Name
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
//Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const all = checkRequired([name, email, password, passwordConfirm]);
    const the_name = checkLength(name, 3, 30);
    const pass = checkLength(password, 8, 25);
    const pass2 = checkLength(passwordConfirm, 8, 25);
    const match = passwordMach(password, passwordConfirm);
    
    if(the_name === true && pass === true && pass2 === true && match === true) {
        modal.style.display = 'none';
        button.style.display = 'none';
    };
    
})


$(function() {
        $('a[href*=#]').on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
      });