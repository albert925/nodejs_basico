var formidable=require("../formidable/index.js");
var subir_archivos=require("./subida_archivos.js");
function crear (http,url,fs) {
	http.createServer(function (peticion,respuesta) {
		//Creamos una instancia  de IncomingForm
		var incoming=new formidable.IncomingForm();
		//carpeta donde se guardarán los archivos
		incoming.uploadDir="./archivos_subidos";
		//Parseamos la peticion
		incoming.parse(peticion);
		//Se dispara en caso de que haya algún error.
		incoming.on("error",function (err) {
			respuesta.writeHead(200,{"Content-Type":"text/html"});
			respuesta.end(subir_archivos.resub(false));
		});
		//Se dispara cuando el archivo llegó al servidor.
		incoming.on('file', function(field, file){
			console.log('Archivo recibido');
		});
		//Se dispara antes de guardar el archivo.
		incoming.on("fileBegin",function (field,file) {
			if (file.name) {
				//modificamos el nombre del archivo por código al azar más "_nombre original del archivo"
				file.path+="_"+file.name;
			}
		});
		//Se dispara una vez que los archivos fueron guardados.
		incoming.on("end",function () {
			respuesta.writeHead(200,{"Content-Tupe":"text/html"});
			respuesta.end(subir_archivos.formul());
		});
	}).listen(4000,"127.0.0.1");
}
exports.crear=crear;