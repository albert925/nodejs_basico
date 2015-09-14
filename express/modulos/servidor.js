var app=require("../app.js");
function crear (http,url,fs) {
	http.createServer(function (peticion,respuesta) {
		app.get("/prueba",function (req,res) {
			res.render("Accion prueba");
		});
		respuesta.writeHead(200,"text/plain");
		respuesta.end("sert");
	}).listen(4000,"127.0.0.1");
}
exports.crear=crear;