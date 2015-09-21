var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.set("view engine","jade");
app.use(express.static("public"));//carpetas estatica assets carpeta creada public

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

//convertir cada campo en tipo de campo
/*var formiSchema={
	name:String
};*/

app.get("/",function (solictud,respuesta) {//(peticoin,respuesta)  /nombre que qiueres colocar la ruta '/ olo dominio o /nombrequequierascolocar'
	respuesta.render("index"); //index
});
app.get("/nosotros",function (solictud,respuesta) {
	respuesta.render("nosotros/new");
});
app.get("/form",function (solictud,respuesta) {
	respuesta.render("formpost");
});
app.post("/form/sl",function (slic,res) {
	//optiniendo los datos en post
	//var data={name:slic.body.tit};
	console.log(slic.body);
	res.render("formpost");
})
app.listen(5000);
console.log("Puerto 5000");