var http=require("http");
http.createServer(function (peticion,respuesta) {
	var codigohtml="<!DOCTYPE html>"+
		"<html lang='es'>"+
		"<head>"+
			"<title>"+
				"Ejemplo hola mundo"+
			"</title>"+
		"</head>"+
		"<body>"+
			"<h1>Hola mundo</h1>"+
		"</body>"
		"</html>";
	respuesta.writeHead(200, "text/html");
	respuesta.end(codigohtml);
}).listen(3000,"127.0.0.1");
console.log("El servidor esta funcionando correctamente en //http:localhost:3000");