var express=require("express");
var bodyParser=require("body-parser");
var multer=require("multer");//para subir archivos con multi-part npm install multer --save

//mantener la estenxion del archivo
var storage=multer.diskStorage({
	destination:function (res,file,cb) {
		cb(null, "uploads/"); //directorio donde se guardaran los archivos
	},
	filename:function (res,file,cb) {
		cb(null,Date.now()+file.originalname);
	}
});
var upload=multer({storage:storage}); //.array('name del form') o .single('name del form') normal dest: "uploads/"
var app=express();
app.set("view engine","jade");
app.use(express.static("public"));//carpetas estatica assets carpeta creada public

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
//decir a exprese que use multer dest(detino)
//app.use(multer({dest: "uploads/"}).single("image_avatar"));
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
app.post("/form/sl",upload.single("arcimg"),function (slic,res) {
	//optiniendo los datos en post
	//var data={name:slic.body.tit};
	console.log(slic.body);
	console.log(slic.file);
	//console.log(slic.body);
	res.render("formpost");
})
app.listen(5000);
console.log("Puerto 5000");