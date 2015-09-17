var expr=/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).on("ready",inicio_pagina);
var contador=1;
var bien={color:"#1F7A3A"};
var normal={color:"#fff"};
var mal={color:"#C60902"};
function inicio_pagina () {
	$("#btn_mov").on("click",abrir_menu);
	$("#nvmsct").on("click",nuevo_mensaje);
	$(".submen").on("click",abrirsubmenu);
}
function abrir_menu () {
	if (contador==1) {
		$("#mnP").animate({left:"0"}, 500);
		contador=0;
	}
	else{
		$("#mnP").animate({left:"-100%"}, 500);
		contador=1;
	}
}
function abrirsubmenu () {
	var numerothis=$(this).attr("data-num");
	$(".children"+numerothis).slideToggle();
}
function nuevo_mensaje () {
	var cva=$("#namct").val();
	var cvb=$("#corct").val();
	var cvc=$("#txtct").val();
	if (cva=="") {
		$("#msct").css(mal).text("Ingrese el nombre");
		$("#namct").focus();
		return false;
	}
	else{
		if (cvb=="" || !expr.test(cvb)) {
			$("#msct").css(mal).text("Ingrese el correo");
			$("#corct").focus();
			return false;
		}
		else{
			if (cvc=="") {
				$("#msct").css(mal).text("Ingrese el mensaje");
				$("#txtct").focus();
				return false;
			}
			else{
				$("#msct").css(normal).text("");
				$("#msct").prepend("<center><img scr='imagenes/loadingb.gif' alt='loading' /></center>");
				$.post("new_menasje.php",{a:cva,b:cvb,c:cvc},resulmensaje);
				return false;
			}
		}
	}
}
function resulmensaje (rgmsh) {
	if (rgmsh=="2") {
		$("#msct").css(bien).text("Mensaje enviado");
		location.reload(20);
	}
	else{
		$("#msct").css(mal).html(rgmsh);
		return false;
	}
}