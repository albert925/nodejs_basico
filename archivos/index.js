var http=require("http");
var url=require("url");
var fs=require("fs");
var servidor=require("./modulos/servidor.js");
servidor.crear(http,url,fs);
console.log("Servidor en funcionamiento 4000");