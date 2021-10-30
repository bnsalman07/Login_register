const User = document.querySelector('.usuario1');
const register = document.querySelector('.registrar');
const pswd1 = document.querySelector('.pswd1')
const pswd2 = document.querySelector('.pswd2')
const nombre = document.querySelector('.nombre');
const apellidos = document.querySelector('.Apellido');
const correo = document.querySelector('.correo');



register.addEventListener("click", (e) =>{
	e.preventDefault();
	const usuario = User.value;
	const pass1 = pswd1.value;
	const pass2 = pswd2.value;
	const name = nombre.value;
	const surname = apellidos.value;
	const email= correo.value;
	if(usuario.length>0){
		if(pass1.value==pass2.value && pass1.length>0){
			if(name.length>0){
				if(surname.length>0){ 
					if(email.length>0){
		window.alert("Registro completado");
	
					
					}else window.alert("Correo electronico vacio");
				}else window.alert("campo de apellidos vacio");
			}else window.alert("Campo de nombre vacio");
		}else window.alert("Las contraseñas no son iguales o el campo esta vacio")
	}else window.alert("Campo de usuario vacio");
})