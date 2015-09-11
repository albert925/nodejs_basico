var http = require('http');
var url = require('url');
var fs = require('fs');
var servidor= require("./modulos/servidor.js");
console.log(servidor);
servidor.crear(http,url,fs);
console.log("El servidor esta funcionando correctamente en localhost:3000");