const User = document.querySelector('.usuario');
const login = document.querySelector('.enviar');
const pswd = document.querySelector('.constraseña');

login.addEventListener("click", (e) =>{
	e.preventDefault();
	const text = User.value;

	if(text.length>=4){
		window.alert("Inicio de sesion correcto");
	}
	else{
		window.alert("");
	}
})

