function dibujarconhtml (mensajes_lista) {
	var html="<!DOCTYPE html>";
	html+="<html>";
	html+="<head>";
		html+="<meta charset='utf-8' />";
		html+="<title>Mensajes</title>";
	html+="</head>";
	html+="<body>";
		html+="<section>";
			html+="<form action='' method='post'>";
				html+="<label name='nam'>*Nombre</label><br />";
				html+="<input type='text' name='nam' required /><br />";
				html+="<label>Mensaje</label><br />";
				html+="<textarea name='txt' rows='4' required></textarea><br />";
				html+="<input type='submit' value='Enviar' />";
			html+="</form>";
			html+="<article id='cajtexto'>"+mostrarmensajes(mensajes_lista)+"</article>";
		html+="</section>";
	html+="</body>";
	html+="</html>";
	return html;
}
function mostrarmensajes (texto) {
	var html="<ul>";
	for (var i in texto) {
		html+="<li>";
			html+="<p><b>"+texto[i].nam+"</b> dijo: "+texto[i].txt+"</p>";
		html+="</li>";
	}
	html+="</ul>";
	return html;
}
exports.codigohtml=dibujarconhtml;