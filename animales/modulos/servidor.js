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
var animales=require("./animales.js");
function crear (http,url,fs) {
	http.createServer(function (peticion,respuesta) {
		var query=url.parse(peticion.url,true).query;
		var grupo=(query.grupo!=undefined)?query.grupo:"";
		var variableget=query.variableget;
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.end(animales.htmlver(grupo));
	}).listen(4000,"127.0.0.1");
}
exports.crear=crear;