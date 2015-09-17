var express=require("express");
var app=express();
app.set("view engine","jade");
app.use(express.static("public"));//carpetas estatica assets carpeta creada public
app.get("/",function (solictud,respuesta) {//(peticoin,respuesta)
	respuesta.render("index");
});
app.listen(5000);
console.log("Puerto 5000");