const Nombre = document.querySelector('.nombre');
const User = document.querySelector('.usuario');
const login = document.querySelector('.enviar');
const pswd = document.querySelector('.constraseña');
const registrar = document.querySelector('.registro')

login.addEventListener("click", (e) =>{
	e.preventDefault();
	if(User.length>=4 || pswd.length>=6){
		window.alert("Inicio de sesion correcto");
	}
	else{
		window.alert("Clave o Usuario incorrecto");
	}
})

registrar.addEventListener("click", (e) =>{
	e.preventDefault();
	window.open("/Registro.html")
})