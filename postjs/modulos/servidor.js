var codigo=require("./mensajes.js");
var querystring=require('querystring');
var mensajesver=new Array();
//Expuestos de ataque de enviar informacion de peticoin muy pesasa
var data_post_maximo=8*1024*1024;
function crear (http,url,fs) {
	http.createServer(function (peticion,respuesta) {
		if (peticion.method=="POST") {//si la petcion em metodo post
			//obtemenos los datos con el metodo on('data',funcion); y se visualiza nam:juan&txt:hola
			//---------------------
			/*var data_post="";
			peticion.on("data",function (data_cortada) {
				data_post+=data_cortada;
			});*/
			//--------
			var data_post="";
			peticion.on("data",function (data_cortada) {
				data_post+=data_cortada;
				if (data_post.length>data_post_maximo) {
					this.pause();
					respuesta.writeHead(413);
					respuesta.end("ha surgido un error y no puede continuarse.");
				}
			});
			//para convertirlo en json como por ejemplo man:"juan",txt:"hola" con el metodo on('end',funcion);
			peticion.on('end',function () {
				var data_post_objeto=querystring.parse(data_post);
				mensajesver.push({nam:data_post_objeto.nam,txt:data_post_objeto.txt});
			});
		}
		else{
			respuesta.writeHead(200,{"Content-Type":"text/html"});
			respuesta.end(codigo.codigohtml(mensajesver));
		}
	}).listen(4000,"127.0.0.1");
}
exports.crear=crear;