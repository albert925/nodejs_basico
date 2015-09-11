var http=require("http");
var url=require("url");
var fs=require("fs");
var mime_types={
	"js":"text/javascrip",
	"html":"text/html",
	"css":"text:css",
	"jpg":"image/jpg",
	"png":"image/png",
	"gif":"image/gif",
	"webm":"video/webm",
	"mp4":"video/map4",
	"ogv":"video/ogv"
};
http.createServer(function (peticion,respuesta) {
	//var path_nombre=url.parse(peticion.url).pathname;
	//var path_nombre=(url.parse(peticion.url).pathname=="/") ? "index.html":url.parse(peticion.url).pathname;
	var path_nombre="."+((peticion.url=="/")?"/index.html":peticion.url);
	var ruta_archivo=path_nombre;
	fs.exists(ruta_archivo,function (existe) {
		if (existe) {
			fs.readFile(ruta_archivo,function (error, contenido_archivo) {
				if (error) {
					respuesta.writeHead(500,"text/plain");
					respuesta.end("["+ruta_archivo+"]Error interno");
				}
				else{
					var extension=ruta_archivo.split(".").pop();
					var my_type=mime_types[extension];
					respuesta.writeHead(200,{"Content-Type":my_type});
					respuesta.end(contenido_archivo);
				}
			});
		}
		else{
			respuesta.writeHead(404,"text/plain");
			respuesta.end("["+ruta_archivo+"] Error 404. El enlace no existe o ha dejado de existir.");
		}
	});
}).listen(3000,"127.0.0.1");
console.log("ejecutando");