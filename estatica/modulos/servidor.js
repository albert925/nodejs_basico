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
function crear (http,url,fs) {
	http.createServer(function (peticion,respuesta) {
		var ruta_a_archivo=devolverRutaArchivo(url,peticion);
		leerArchivo(fs,ruta_a_archivo,function (numero,contenido_archivo) {
			if (numero===404) {
				respuesta.writeHead(numero,"text/plain");
				respuesta.end("Error 404. EL enlace no existe o ha dejado de existir");
			}
			else{
				if (numero===500) {
					respuesta.writeHead(numero, 'text/plain');
					respuesta.end('Error interno.');
				}
				else{
					var extension=ruta_a_archivo.split(".").pop();
					var m_type=mime_types[extension];
					respuesta.writeHead(numero, {'Content-Type': m_type});
					respuesta.end(contenido_archivo);
				}
			}
		});
	}).listen(3000,"127.0.0.1");
}
function devolverRutaArchivo (url,peticion) {
	var path_nombre="."+((peticion.url=="/")?"/index.html":peticion.url);
	var ruta_archivo=path_nombre;
	return ruta_archivo;
}
function leerArchivo (fs,ruta_archivo,callback) {
	fs.exists(ruta_archivo,function (existe) {
		if (existe) {
			fs.readFile(ruta_archivo,function (error,contenido_archivo) {
				if (error) {
					callback(500,null);
				}
				else{
					callback(200,contenido_archivo);
				}
			});
		}
		else{
			callback(404,null);
		}
	});
}
exports.crear=crear;