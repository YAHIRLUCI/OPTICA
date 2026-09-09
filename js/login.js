/*=========================================
            LOGIN.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    const email = document.querySelector('input[type="email"]');

    const password = document.getElementById("password");

    const togglePassword = document.getElementById("togglePassword");

    const loginButton = document.querySelector(".btn-login");

    /*=========================================
        MOSTRAR CONTRASEÑA
    =========================================*/

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if(password.type === "password"){

            password.type = "text";

            icon.classList.replace("bi-eye","bi-eye-slash");

        }else{

            password.type = "password";

            icon.classList.replace("bi-eye-slash","bi-eye");

        }

    });

    /*=========================================
            VALIDAR EMAIL
    =========================================*/

    function validarEmail(email){

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

    /*=========================================
            LOGIN
    =========================================*/

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        email.classList.remove("is-invalid");

        password.classList.remove("is-invalid");

        let valido=true;

        if(!validarEmail(email.value.trim())){

            email.classList.add("is-invalid");

            valido=false;

        }

        if(password.value.length<6){

            password.classList.add("is-invalid");

            valido=false;

        }

        if(!valido){

            return;

        }

        loginButton.disabled=true;

        loginButton.innerHTML=`
            <span class="spinner-border spinner-border-sm"></span>
            Iniciando sesión...
        `;

        const datos = new FormData();

        datos.append("correo",email.value);

        datos.append("password",password.value);

        fetch("php/login.php",{

            method:"POST",

            body:datos

        })

        .then(response=>response.json())

        .then(data=>{

            loginButton.disabled=false;

            loginButton.innerHTML="Iniciar Sesión";

            if(data.status){

                window.location.href=data.redirect;

            }else{

                alert(data.mensaje);

            }

        })

        .catch(error=>{

            console.error(error);

            loginButton.disabled=false;

            loginButton.innerHTML="Iniciar Sesión";

            alert("Error al conectar con el servidor.");

        });

    });

});