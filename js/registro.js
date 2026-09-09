/*==================================================
                REGISTRO.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registroForm");

    const nombre = document.getElementById("nombre");

    const apellido = document.getElementById("apellido");

    const correo = document.getElementById("correo");

    const telefono = document.getElementById("telefono");

    const password = document.getElementById("password");

    const confirmPassword = document.getElementById("confirmPassword");

    const togglePassword = document.getElementById("togglePassword");

    const strengthBar = document.getElementById("passwordStrength");

    const strengthText = document.getElementById("strengthText");

    const terminos = document.getElementById("terminos");

    const btn = document.querySelector(".btn-register");

    /*==============================================
            MOSTRAR CONTRASEÑA
    ==============================================*/

    togglePassword.addEventListener("click", () => {

        const icon = togglePassword.querySelector("i");

        if(password.type === "password"){

            password.type = "text";

            confirmPassword.type = "text";

            icon.classList.replace("bi-eye","bi-eye-slash");

        }else{

            password.type = "password";

            confirmPassword.type = "password";

            icon.classList.replace("bi-eye-slash","bi-eye");

        }

    });

    /*==============================================
            VALIDAR EMAIL
    ==============================================*/

    function validarEmail(email){

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

    /*==============================================
            VALIDAR TELÉFONO
    ==============================================*/

    function validarTelefono(tel){

        return /^[0-9]{10}$/.test(tel);

    }

    /*==============================================
            FORTALEZA PASSWORD
    ==============================================*/

    password.addEventListener("input", () => {

        let fuerza = 0;

        const valor = password.value;

        if(valor.length >= 8) fuerza++;

        if(/[A-Z]/.test(valor)) fuerza++;

        if(/[0-9]/.test(valor)) fuerza++;

        if(/[!@#$%^&*(),.?":{}|<>]/.test(valor)) fuerza++;

        switch(fuerza){

            case 0:
            case 1:

                strengthBar.style.width="25%";

                strengthBar.className="progress-bar bg-danger";

                strengthText.textContent="Contraseña débil";

            break;

            case 2:

                strengthBar.style.width="50%";

                strengthBar.className="progress-bar bg-warning";

                strengthText.textContent="Contraseña media";

            break;

            case 3:

                strengthBar.style.width="75%";

                strengthBar.className="progress-bar bg-info";

                strengthText.textContent="Contraseña buena";

            break;

            case 4:

                strengthBar.style.width="100%";

                strengthBar.className="progress-bar bg-success";

                strengthText.textContent="Contraseña muy segura";

            break;

        }

    });

    /*==============================================
            LIMPIAR ERRORES
    ==============================================*/

    function limpiar(){

        document
        .querySelectorAll(".form-control")
        .forEach(input=>{

            input.classList.remove("is-invalid");

        });

    }

    /*==============================================
            ENVIAR FORMULARIO
    ==============================================*/

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        limpiar();

        let valido = true;

        if(nombre.value.trim().length < 2){

            nombre.classList.add("is-invalid");

            valido = false;

        }

        if(apellido.value.trim().length < 2){

            apellido.classList.add("is-invalid");

            valido = false;

        }

        if(!validarEmail(correo.value)){

            correo.classList.add("is-invalid");

            valido = false;

        }

        if(!validarTelefono(telefono.value)){

            telefono.classList.add("is-invalid");

            valido = false;

        }

        if(password.value.length < 8){

            password.classList.add("is-invalid");

            valido = false;

        }

        if(password.value !== confirmPassword.value){

            confirmPassword.classList.add("is-invalid");

            valido = false;

        }

        if(!terminos.checked){

            alert("Debes aceptar los términos y condiciones.");

            valido = false;

        }

        if(!valido){

            return;

        }

        btn.disabled = true;

        btn.innerHTML = `
            <span class="spinner-border spinner-border-sm"></span>
            Creando cuenta...
        `;

        const datos = new FormData(form);

        fetch("php/registro.php",{

            method:"POST",

            body:datos

        })

        .then(response=>response.json())

        .then(data=>{

            btn.disabled = false;

            btn.innerHTML = "Crear Cuenta";

            if(data.status){

                alert(data.mensaje);

                form.reset();

                strengthBar.style.width="0%";

                strengthText.textContent="La contraseña debe contener al menos 8 caracteres.";

                window.location.href="login.html";

            }else{

                alert(data.mensaje);

            }

        })

        .catch(error=>{

            console.error(error);

            btn.disabled = false;

            btn.innerHTML = "Crear Cuenta";

            alert("Error al conectar con el servidor.");

        });

    });

});