const User = document.querySelector('.usuario');
const login = document.querySelector('.enviar');
const pswd = document.querySelector('.pswd');


login.addEventListener("click", (e) =>{
	e.preventDefault();
	const text = User.value;
	const pass = pswd.value;
	if(text.length>=4){
		if(pass.length>=6)
		window.alert("Inicio de sesion correcto");
		else window.alert("Contraseña muy corta, introduzca 6 o mas caracteres")
	}
	else{
		window.alert("Usuario muy corto");
	}
})

