var express=require("express");
var app=express();
app.get("/",function (solictud,respuesta) {//(peticoin,respuesta)
	respuesta.send("Hola mundo");
});
app.listen(5000);
console.log("Puerto 5000");