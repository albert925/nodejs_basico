var lista={
	"aves":new Array("Loro","Canario"),
	"mamiferos":new Array("Perro","Gato","Nutria"),
	"reptiles":new Array("Cocodrilo","Serpiente","Tortuga")
};
function dibujarcodigohtml (grupo) {
	var html="<!DOCTYPE html>";
	html+="<html>";
	html+="<head>";
		html+="<meta charset='utf-8' />";
		html+="<title>Animeles Js</title>";
	html+="</head>";
	html+="<body>";
		html+="<section>";
			html+="<form action=''>";
				html+="<label name='grupo'>Seleccione el tipo de animal</label>";
				html+="<select name='grupo'>"+listarGrupos(grupo)+"</select>";
				html+="<input type='submit' value='Enviar' />";
			html+="</form>";
			html+="<article id='anmls'>"+listaranimales(grupo)+"</article>";
		html+="</section>";
	html+="</body>";
	html+="</html>";
	return html;
}
function listarGrupos (grupo) {
	var html="<option value='0'>Selecione</option>";
	var selected;
	for (var item in lista) {
		selected=(item==grupo)?"selected='selected'":"";
		html+="<option "+selected+" value='"+item+"'>"+item+"</option>";
	}
	return html;
}
function listaranimales (grupo) {
	var html="";
	if (lista[grupo]!=undefined) {
		html+="<ul>";
		for (var i in lista[grupo]) {
			html+="<li>"+lista[grupo][i]+"</li>";
		}
		html+="</ul>";
	}
	return html;
}
exports.htmlver=dibujarcodigohtml;