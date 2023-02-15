// Asignamos variables a los elementos html del formulario.

const form = document.getElementById('form');
const username = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password_repeat');

// Usamos .preventDefault para que el formulario no se envie automaticamente.

form.addEventListener('submit', e => {
     e.preventDefault();

     validarInputs();
       
});

// Creamos las variables de error y exito para la validación de los campos.

const noValido = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const siValido = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Validación de correo y usuario con expresiones regulares.

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const isValidUsername = username => {
    const letters = /^[A-Za-zÑñ\s]+$/;
    return letters.test(username);
}

// Asignamos variables al valor de los campos html y usamos .trim para eliminar espacios en blanco de los extremos.

const validarInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordRepeatValue = passwordRepeat.value.trim();

// Validacion y error de los campos del formulario.

    if(usernameValue === '') {
        noValido(username, 'Rellene este campo');
        
    } else if (!isValidUsername(usernameValue)) {
        noValido( username, 'No introduzca números');
        
    } else {
        siValido(username);
    }

    if(emailValue === '') {
        noValido(email, 'Rellene este campo');
    } else if (!isValidEmail(emailValue)) {
        noValido(email, 'Email invalido');
    } else {
        siValido(email);
    }

    if(passwordValue === '') {
        noValido(password, 'Rellene este campo');

    } else if (passwordValue.length < 8 ) {
        noValido(password, 'La contraseña debe tener al menos 8 carácteres.');

    } else {
        siValido(password);
    }

    if(passwordRepeatValue === '') {
        noValido(passwordRepeat, 'Rellene este campo');

    } else if (passwordRepeatValue !== passwordValue) {
        noValido(passwordRepeat, "Las contraseñas no coinciden");
    } else {
        siValido(passwordRepeat);
    }

    if (usernameValue&&emailValue&&passwordValue&&passwordRepeatValue) {
    alert ('Su inscripción ha sido realizada con exito');
    }else {
    alert ('Por favor, revise el formulario');
    }
    
};
