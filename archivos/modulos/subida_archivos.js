function dibujacabecera () {
	var html="<!DOCTYPE html>";
	html+="<html>";
	html+="<head>";
		html+="<meta charset='utf-8' />";
		html+="<title>Mensajes</title>";
	html+="</head>";
	html+="<body>";
	return html;
}
function dibujarpie () {
	var html="</body>";
	html+="</html>";
	return html;
}
function dibujarformulario () {
	var html = dibujacabecera();
	html += '<form method="post" enctype="multipart/form-data">';
		html += '<label> Archivo: </label>';
		html += '<input type="file" name="file" required />';
		html += '<input type="submit" value="Subir" />';
		html += '</form>';
	html += dibujarpie();
	return html;
}
function respondersubida (archivo_subido) {
	var html=dibujacabecera();
	if (archivo_subido) {
		html+="<p><b>El archivo ha sido subido correctamente.</b></p>";
	}
	else{
		html+="<p style='color:#f00;'><b>Error al intentar subir el archivo.</b></p>";
	}
	html+="<p><a href='/'>Volver</a></p>";
	html+=dibujarpie();
	return html;
}
exports.formul=dibujarformulario;
exports.resub=respondersubida;