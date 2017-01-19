
function main(){
	document.getElementById('formulario').onsubmit = validar;
	
		function validar(){
			var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var nombre = document.getElementById('nombre').value;
			var email = document.getElementById('email').value;
			var mensaje = document.getElementById('mensaje').value;
			var asunto = document.getElementById('asunto').value;

			if (!/[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s\t-]/.test(nombre.replace(/\s/g,''))) {
				return pintaMensaje('avisoNombre');	
			}else if(asunto.replace(/\s/g,'') == ""){
				return pintaMensaje('avisoAsunto');
			}else if (!regExpEmail.test(email.replace(/\s/g,''))){
				return pintaMensaje('avisoEmail');
			}else if(mensaje.replace(/\s/g,'') == ''){
				return pintaMensaje('avisoMensaje');
			}
		}
			
		function pintaMensaje(tipo){
		var feedback = document.getElementById('feedback');
		switch(tipo){
			case 'avisoNombre':
				feedback.innerHTML = '<p>Introduzca un <span>nombre con letras</span>, gracias</p>';
				break;
			case 'avisoAsunto':
				feedback.innerHTML = '<p>Introduzca un <span>asunto</span>, gracias</p>';
				break;
			case'avisoEmail':
				feedback.innerHTML = '<p>Introduzca un <span>mail correcto</span>, gracias</p>';
				break;
			case 'avisoMensaje':
				feedback.innerHTML = '<p>Escriba un <span>mensaje</span>, gracias</p>'			
			}
			feedback.scrollIntoView();
			return false;
		}
}

window.onload = main; 
	

