var http=require("http");
var url=require("url");
http.createServer(function (peticion,respuesta) {
	var path_nombre= url.parse(peticion.url).pathname;
	respuesta.writeHead(200);
	respuesta.end("El path es: "+path_nombre);
}).listen(4000,"127.0.0.1");
console.log("Ejejcuntado..");