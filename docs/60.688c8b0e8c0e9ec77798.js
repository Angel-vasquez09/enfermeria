(self.webpackChunkenfermeria=self.webpackChunkenfermeria||[]).push([[60],{5060:(t,e,i)=>{"use strict";i.r(e),i.d(e,{PracticasModule:()=>y});var n=i(5109),o=i(1591),a=i(9105),r=i(6972);let c=(()=>{class t{constructor(t){this.http=t,this.info=new a.vpe,this.calificaiconE=new a.vpe,this.getAllPracticas=()=>this.http.get("https://enfermeria-backend.herokuapp.com/practicas"),this.getPracticaId=t=>this.http.get(`https://enfermeria-backend.herokuapp.com/practicas/${t}`),this.getEstudiante=(t,e)=>this.http.get(`https://enfermeria-backend.herokuapp.com/practicas/${t}`),this.postNewEstudiante=(t,e)=>this.http.post(`https://enfermeria-backend.herokuapp.com/practicas/${t}`,e),this.getPracticasByDocente=t=>this.http.get(`https://enfermeria-backend.herokuapp.com/practicas/practicaDocente/${t}`),this.updateNotas=(t,e,i)=>this.http.post("https://enfermeria-backend.herokuapp.com/practicas/actualizarEstudiante",{codPractica:t,cedulaAlumno:e,notasAlumno:i}),this.get_info=t=>{console.log(t),this.info.emit(t)},this.getCalificacionEstudiante=t=>{this.calificaiconE.emit(t)}}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(r.eN))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=i(1401);let d=(()=>{class t{constructor(t){this.router=t,this.redireccionar=()=>{window.history.back()}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-link"]],decls:2,vars:0,consts:[[1,"position-absolute","regresar",3,"click"],[1,"fas","fa-arrow-left"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.NdJ("click",function(){return e.redireccionar()}),a._UZ(1,"i",1),a.qZA())},styles:[""]}),t})();var l=i(2249);function p(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"tr",24),a.NdJ("click",function(){const e=a.CHM(t),i=e.$implicit,n=e.index;return a.oxw().calificacion_a(i,n)}),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.Gre("estudiante fila",e.index,""),a.xp6(2),a.Oqu(t.cedula),a.xp6(2),a.Oqu(t.nombresApellidos)}}let u=(()=>{class t{constructor(t,e,i){this.serviceSV=t,this.fb=e,this.router=i,this.codigoAlumno="",this.rowAnterior=-1,this.listStudiantes={datosPractica:{},info:{}},this.url="",this.id="",this.idEstudiante="",this.selection=!1,this.numberRegEx=/\-?\d*\.?\d{1,2}/,this.calificacion_a=(t,e)=>{var i;console.log(t),this.idEstudiante=t._id,console.log(this.idEstudiante),this.selection=!0,this.codigoAlumno=e,this.rowAnterior>=0&&document.querySelector(`.fila${this.rowAnterior}`).classList.remove("style-fila"),null===(i=document.querySelector(`.fila${e}`))||void 0===i||i.classList.add("style-fila"),this.rowAnterior=e},this.acceder_alumno=()=>{this.router.navigate([`/practicas/alumno/${this.listStudiantes.datosPractica.id}/${this.idEstudiante}`])},this.formAdd=this.fb.group({cedula:["",[l.kI.required]],nombre:["",[l.kI.required]],pendiente:["",[l.kI.required]],notaFinal:["",[l.kI.required,l.kI.pattern(this.numberRegEx)]]})}ngOnInit(){}submit(){this.formAdd.valid&&this.serviceSV.postNewEstudiante(this.codigoAlumno,{cedula:this.formAdd.value.cedula,nombre:this.formAdd.value.nombre}).subscribe(t=>{alert("Estudiante guardado correctamente")})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c),a.Y36(l.qu),a.Y36(o.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-list-student"]],inputs:{listStudiantes:"listStudiantes"},decls:39,vars:4,consts:[[1,"practicas"],[1,"table","table-striped","table-hover"],["scope","col"],[3,"class","click",4,"ngFor","ngForOf"],[1,"p-3","btns","text-end"],["type","button","data-bs-target","#exampleModal","data-bs-toggle","modal",1,"m-1","btn","btn-outline-primary"],["type","button",1,"m-1","d-none","btn","btn-outline-danger"],["type","button",1,"m-1","btn","btn-outline-success",3,"click"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"text-center"],["type","text","formControlName","cedula","name","cedula","placeholder","Cedula","required","",1,"border"],["type","text","formControlName","nombre","name","nombre","placeholder","Nombre","required","",1,"border"],["type","text","formControlName","notaFinal","name","notaFinal","placeholder","notaFinal","required","",1,"border"],[1,"text-center","mt-3"],["type","submit",1,"btn","btn-primary"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"table",1),a.TgZ(2,"thead"),a.TgZ(3,"tr"),a.TgZ(4,"th",2),a._uU(5,"Codigo"),a.qZA(),a.TgZ(6,"th",2),a._uU(7,"Alumno"),a.qZA(),a._UZ(8,"th",2),a.qZA(),a.qZA(),a.TgZ(9,"tbody"),a.YNc(10,p,5,5,"tr",3),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"div",4),a.TgZ(12,"button",5),a._uU(13,"Agregar"),a.qZA(),a.TgZ(14,"button",6),a._uU(15,"Eliminar"),a.qZA(),a.TgZ(16,"button",7),a.NdJ("click",function(){return e.acceder_alumno()}),a._uU(17,"Acceder"),a.qZA(),a.qZA(),a.TgZ(18,"div",8),a.TgZ(19,"div",9),a.TgZ(20,"div",10),a.TgZ(21,"div",11),a.TgZ(22,"h5",12),a._uU(23,"Agregar nuevo estudiante"),a.qZA(),a._UZ(24,"button",13),a.qZA(),a.TgZ(25,"div",14),a.TgZ(26,"form",15),a.NdJ("ngSubmit",function(){return e.submit()}),a.TgZ(27,"div",16),a._UZ(28,"input",17),a.qZA(),a.TgZ(29,"div",16),a._UZ(30,"input",18),a.qZA(),a.TgZ(31,"div",16),a._UZ(32,"input",19),a.qZA(),a.TgZ(33,"div",20),a.TgZ(34,"button",21),a._uU(35,"Guardar"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(36,"div",22),a.TgZ(37,"button",23),a._uU(38,"Close"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(10),a.Q6J("ngForOf",e.listStudiantes.datosPractica.estudiantes),a.xp6(6),a.ekj("disabled",!e.selection),a.xp6(10),a.Q6J("formGroup",e.formAdd))},directives:[n.sg,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.Q7],styles:[".practicas[_ngcontent-%COMP%]{width:80%;max-height:450px;border-radius:10px;overflow-y:scroll;box-sizing:border-box;padding:10px;box-shadow:5px 5px 10px #ebebeb,-5px -5px 10px #ebebeb}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar:vertical{width:10px;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar-button, .practicas[_ngcontent-%COMP%]::-webkit-scrollbar-button:increment{display:none;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal{height:10px;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#797979;border-radius:20px;border:2px solid #f1f2f3;padding:0!important}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px}.estudiante[_ngcontent-%COMP%]{cursor:pointer}.btns[_ngcontent-%COMP%]{width:80%}.btn-editar-student[_ngcontent-%COMP%]{border:1px solid var(--orange);color:var(--orange)}.btn-editar-student[_ngcontent-%COMP%]:hover{background:var(--orange);color:#fff}@media screen and (max-width:992px){.practicas[_ngcontent-%COMP%]{width:100%;margin-top:3rem}.btns[_ngcontent-%COMP%]{width:100%;padding:0!important;margin-top:1rem}}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline-color:var(--black-primary);height:3rem;width:90%;padding-left:1rem;margin-top:1rem;border:1px solid #d4d4d4}"]}),t})();function g(t,e){if(1&t&&(a.TgZ(0,"strong"),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.hij("",t,",")}}let h=(()=>{class t{constructor(t,e){this.infoSV=t,this.router=e,this.practica={datosPractica:{},info:{}},this.codigo="",this.url="",this.url=this.router.parseUrl(this.router.url);let i=this.url.root.children.primary.segments[this.url.root.children.primary.segments.length-1].path;i.length>10&&(this.codigo=i)}ngOnInit(){console.log(this.practica.datosPractica._id),this.infoSV.info.subscribe(t=>{this.codigo=t,this.infoSV.getPracticaId(this.codigo).subscribe(t=>{this.practica=t,console.log(this.practica)})})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c),a.Y36(o.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-promocion-prevencion"]],inputs:{practica:"practica"},decls:21,vars:7,consts:[[1,"info","d-flex","justify-content-center","align-items-center"],[1,"text-center"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div"),a.TgZ(2,"h4",1),a._uU(3),a.qZA(),a.TgZ(4,"p",1),a.TgZ(5,"strong"),a._uU(6,"Codigo de Practica"),a.qZA(),a._uU(7),a.qZA(),a.TgZ(8,"h3",1),a._uU(9),a.qZA(),a.TgZ(10,"h4",1),a._uU(11,"Calificaciones"),a.qZA(),a.TgZ(12,"h3",1),a._uU(13),a.qZA(),a.TgZ(14,"h3",1),a._uU(15),a.qZA(),a.TgZ(16,"h3",1),a._uU(17),a.qZA(),a.TgZ(18,"h4",1),a._uU(19,"Semestres: "),a.YNc(20,g,2,1,"strong",2),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.hij(" ",e.practica.datosPractica.nombre,""),a.xp6(4),a.hij(": ",e.codigo,""),a.xp6(2),a.hij("",e.practica.info.numEstudiantes," Alumnos"),a.xp6(4),a.hij("",e.practica.info.pendientes," Pendientes"),a.xp6(2),a.hij("",e.practica.info.aprobados," Aprobados"),a.xp6(2),a.hij("",e.practica.info.reprobados," Reprovados"),a.xp6(3),a.Q6J("ngForOf",e.practica.info.semestres))},directives:[n.sg],styles:[".info[_ngcontent-%COMP%]{width:90%;height:60%;border-radius:10px;margin:0;box-shadow:5px 5px 10px #ebebeb,-5px -5px 10px #ebebeb}h3[_ngcontent-%COMP%]{font-size:20px;font-weight:400}h4[_ngcontent-%COMP%]{font-size:25px}h4[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:400;font-size:20px}@media screen and (max-width:992px){.info[_ngcontent-%COMP%]{margin-top:6rem;margin-bottom:3rem;height:auto!important;width:99%;padding:.5rem}}"]}),t})(),m=(()=>{class t{constructor(t,e,i){this.route=t,this.router=e,this.infoSV=i,this.codigo="",this.link="/practicas/docente",this.practica={datosPractica:{},info:{}},this.url="",this.id="",this.url=this.router.parseUrl(this.router.url),this.id=this.url.root.children.primary.segments[2].path,this.codigo=this.id,this.infoSV.getPracticaId(this.id).subscribe(t=>{this.practica=t})}ngOnInit(){console.log(this.practica)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.gz),a.Y36(o.F0),a.Y36(c))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-alumno"]],decls:7,vars:2,consts:[[1,"row","m-0","position-relative"],[1,"position-absolute"],[1,"col-12","col-lg-8"],[1,"w-100","h-100","d-flex","flex-column","justify-content-center","align-items-center",3,"listStudiantes"],[1,"col-12","col-lg-4","position-relative"],[1,"w-100","h-100","d-flex","justify-content-center","align-items-center",3,"practica"]],template:function(t,e){1&t&&(a._UZ(0,"app-header"),a.TgZ(1,"section",0),a._UZ(2,"app-link",1),a.TgZ(3,"div",2),a._UZ(4,"app-list-student",3),a.qZA(),a.TgZ(5,"div",4),a._UZ(6,"app-promocion-prevencion",5),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Q6J("listStudiantes",e.practica),a.xp6(2),a.Q6J("practica",e.practica))},directives:[s.G,d,u,h],styles:["section[_ngcontent-%COMP%]{height:auto;min-height:100vh}"]}),t})();var f=i(2391),b=i.n(f);function Z(t,e){if(1&t&&(a.TgZ(0,"div",15),a._UZ(1,"input",16),a._UZ(2,"i",17),a._UZ(3,"i",18),a.TgZ(4,"small",19),a._uU(5),a.qZA(),a.qZA()),2&t){const t=e.$implicit,i=a.oxw();a.xp6(1),a.s9C("id",t.notax),a.Q6J("readonly",t.cedulaDocenteEncargado!==i.idProAuth)("placeholder",t.notax)("value",t.calificacion),a.xp6(1),a.ekj("d-none",t.cedulaDocenteEncargado!==i.idProAuth),a.xp6(1),a.ekj("d-none",t.cedulaDocenteEncargado===i.idProAuth),a.xp6(2),a.hij("",t.porcentaje,"%")}}let x=(()=>{class t{constructor(t,e,i,n){this.route=t,this.router=e,this.fb=i,this.infoSv=n,this.link="practicas/alumnos",this.estudiante={},this.url="",this.idCod="",this.idEstud="",this.idProAuth="",this.formNotas=this.fb.group({notas:this.fb.array([[]],l.kI.required)}),this.url=this.router.parseUrl(this.router.url),this.idCod=this.url.root.children.primary.segments[2].path,this.idEstud=this.url.root.children.primary.segments[3].path}ngOnInit(){this.idProAuth=JSON.parse(localStorage.getItem("usuario")).cedula,this.infoSv.getPracticaId(this.idCod).subscribe(t=>{let e=[];if(e=t.datosPractica.estudiantes,this.notasPractica=t.datosPractica.notas,this.estudiante=e.filter(t=>t._id===this.idEstud),console.log(this.estudiante),this.estudiante[0].notas.length>0){for(let t=0;t<this.notasPractica.length;t++){const e=this.estudiante[0].notas[t];this.notasPractica[t]={cedulaDocenteEncargado:this.notasPractica[t].cedulaDocenteEncargado,notax:this.notasPractica[t].notax,porcentaje:this.notasPractica[t].porcentaje,calificacion:e.calificacion},console.log(e.calificacion)}console.log(this.notasPractica)}this.notasPractica.forEach(t=>{this.notasArr.push(new l.NI(t.calificacion))})})}get notasArr(){return this.formNotas.get("notas")}submit(){if(this.formNotas.invalid)return void b().fire("Error!","Algo salio mal!, Verifica todos los campos","error");let t=[];document.querySelector("#nota1"),this.notasPractica.forEach(e=>{console.log(e.notax);let i=document.querySelector(`#${e.notax}`);t.push({notax:e.notax,calificacion:i.value,porcentaje:e.porcentaje})}),this.infoSv.updateNotas(this.idCod,this.estudiante[0].cedula,t).subscribe(t=>{b().fire("Correcto!","Todo fue un exito!","success")},t=>{b().fire("Error!","Algo salio mal!","error")})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.gz),a.Y36(o.F0),a.Y36(l.qu),a.Y36(c))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-calificacion-alumno"]],decls:26,vars:4,consts:[[1,"row","m-0","position-relative"],[1,"columna1","col-12","col-lg-7"],[1,"fon-family","ml-m-2"],[1,"m-0","pl-m-2"],[1,"mt-4","mb-2",3,"formGroup","ngSubmit"],["formArrayName","notas"],["class","text-center position-relative",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end",2,"width","80%"],["type","submit",1,"btn-1"],[1,"btn-2"],[1,"col-12","col-lg-5","d-flex","flex-column"],[1,"img-prom","col","d-flex","flex-column","justify-content-center","align-items-center"],["src","https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg","alt",""],[1,"fon-family","fon-size"],[1,"promedio"],[1,"text-center","position-relative"],["type","text",3,"id","readonly","placeholder","value"],[1,"fas","fa-unlock","m-4"],[1,"fas","fa-lock","m-4"],[1,"fon-family"]],template:function(t,e){1&t&&(a._UZ(0,"app-header"),a.TgZ(1,"section",0),a._UZ(2,"app-link"),a.TgZ(3,"div",1),a.TgZ(4,"strong",2),a._uU(5,"Alumno"),a.qZA(),a.TgZ(6,"h1",3),a._uU(7),a.qZA(),a.TgZ(8,"form",4),a.NdJ("ngSubmit",function(){return e.submit()}),a.TgZ(9,"div",5),a.YNc(10,Z,6,9,"div",6),a.qZA(),a.TgZ(11,"div",7),a.TgZ(12,"button",8),a._uU(13,"Guardar"),a.qZA(),a.TgZ(14,"button",9),a._uU(15,"Cancelar"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(16,"div",10),a.TgZ(17,"div",11),a._UZ(18,"img",12),a.TgZ(19,"strong",13),a._uU(20),a.qZA(),a.qZA(),a.TgZ(21,"div",11),a.TgZ(22,"strong",13),a._uU(23,"Promedio"),a.qZA(),a.TgZ(24,"div",14),a._uU(25,"2,7"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Oqu(e.estudiante[0].nombresApellidos),a.xp6(1),a.Q6J("formGroup",e.formNotas),a.xp6(2),a.Q6J("ngForOf",e.notasPractica),a.xp6(10),a.hij("c.c ",e.estudiante[0].cedula,""))},directives:[s.G,d,l._Y,l.JL,l.sg,l.CE,n.sg],styles:["section[_ngcontent-%COMP%]{height:auto;min-height:100vh}h1[_ngcontent-%COMP%]{font-family:var(--raleway)}.columna1[_ngcontent-%COMP%]{padding-left:4rem;padding-right:4rem;padding-top:4rem}form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], i[_ngcontent-%COMP%]{font-size:23px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline-color:var(--black-primary);height:3rem;width:80%;padding-left:1rem;margin-top:1rem;border:1px solid #d4d4d4}.btn-1[_ngcontent-%COMP%], .btn-2[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:var(--raleway)}.btn-1[_ngcontent-%COMP%], .btn-2[_ngcontent-%COMP%]{border:1px solid #0000;background:var(--black-primary);color:#fff;padding:.5rem;position:relative;overflow:hidden;z-index:12;transition:all .5s;margin-left:10px}.btn-1[_ngcontent-%COMP%]:hover, .btn-2[_ngcontent-%COMP%]:hover{background:var(--orange)}.promedio[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{width:200px;height:200px}.promedio[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:50px;font-family:var(--raleway);border:1px solid #d4d4d4;background:var(--orange);border-radius:10px}.small[_ngcontent-%COMP%]{position:absolute;top:20%;right:1rem}@media screen and (max-width:992px){.img-prom[_ngcontent-%COMP%]{margin-top:4rem;margin-bottom:4rem}.columna1[_ngcontent-%COMP%]{padding:0!important;margin-top:3rem}.ml-m-2[_ngcontent-%COMP%]{margin-left:2rem!important}.pl-m-2[_ngcontent-%COMP%]{padding-left:2rem!important}}"]}),t})();function _(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"tr",6),a.NdJ("click",function(){const e=a.CHM(t).$implicit;return a.oxw().detallePractica(e.id)}),a.TgZ(1,"td"),a._uU(2),a.qZA(),a.TgZ(3,"td"),a._uU(4),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.Gre("fila fila",t.id,""),a.xp6(2),a.Oqu(t.id),a.xp6(2),a.Oqu(t.nombre)}}let A=(()=>{class t{constructor(t,e,i){this.infoSV=t,this.router=e,this.render=i,this.itemPracticas=[],this.dataList=[],this.codigo="",this.fila_anterior="",this.disabled=!0}ngOnInit(){}detallePractica(t){this.codigo=t,this.infoSV.get_info(t),""!=this.fila_anterior&&document.querySelector(`.fila${this.fila_anterior}`).classList.remove("style-fila");const e=document.querySelector(`.fila${t}`);null==e||e.classList.add("style-fila"),this.fila_anterior=t,this.disabled=!1}pagina_alumnos(){this.router.navigate([`practicas/alumnos/${this.codigo}`])}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c),a.Y36(o.F0),a.Y36(a.Qsj))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-list-practicas"]],inputs:{itemPracticas:"itemPracticas"},decls:13,vars:3,consts:[[1,"practicas"],[1,"table","table-striped","table-hover"],["scope","col"],[3,"class","click",4,"ngFor","ngForOf"],[1,"btn-acceder"],["type","button",1,"btn","btn-outline-success",3,"click"],[3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"table",1),a.TgZ(2,"thead"),a.TgZ(3,"tr"),a.TgZ(4,"th",2),a._uU(5,"Codigo"),a.qZA(),a.TgZ(6,"th",2),a._uU(7,"Practica"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"tbody"),a.YNc(9,_,5,5,"tr",3),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div",4),a.TgZ(11,"button",5),a.NdJ("click",function(){return e.pagina_alumnos()}),a._uU(12,"Acceder"),a.qZA(),a.qZA()),2&t&&(a.xp6(9),a.Q6J("ngForOf",e.itemPracticas[0]),a.xp6(2),a.ekj("disabled",e.disabled))},directives:[n.sg],styles:[".practicas[_ngcontent-%COMP%]{width:80%;max-height:450px;border-radius:10px;overflow-y:scroll;box-sizing:border-box;padding:10px;box-shadow:5px 5px 10px #ebebeb,-5px -5px 10px #ebebeb}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar{-webkit-appearance:none;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar:vertical{width:10px;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar-button, .practicas[_ngcontent-%COMP%]::-webkit-scrollbar-button:increment{display:none;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar:horizontal{height:10px;padding:0}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#797979;border-radius:20px;border:2px solid #f1f2f3;padding:0!important}.practicas[_ngcontent-%COMP%]::-webkit-scrollbar-track{border-radius:10px}.btn-acceder[_ngcontent-%COMP%]{width:80%;text-align:end;margin-top:25px}.fila[_ngcontent-%COMP%]{cursor:pointer}@media screen and (max-width:992px){.practicas[_ngcontent-%COMP%]{width:100%;margin-top:3rem}}"]}),t})();const v=[{path:"",children:[{path:"docente",component:(()=>{class t{constructor(t){this.service=t,this.practicas=[],this.docente=""}ngOnInit(){const t=JSON.parse(localStorage.getItem("usuario"));this.docente=t.nombre,this.profe=t,console.log(this.profe),this.docente=this.docente.toUpperCase(),this.service.getPracticasByDocente(this.profe.cedula).subscribe(t=>{this.practicas.push(t)})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(c))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-docente"]],decls:6,vars:1,consts:[[1,"row","m-0"],[1,"col-12","col-lg-8"],[1,"w-100","h-100","d-flex","flex-column","justify-content-center","align-items-center",3,"itemPracticas"],[1,"col-12","col-lg-4","position-relative"],[1,"w-100","h-100","d-flex","justify-content-center","align-items-center"]],template:function(t,e){1&t&&(a._UZ(0,"app-header"),a.TgZ(1,"section",0),a.TgZ(2,"div",1),a._UZ(3,"app-list-practicas",2),a.qZA(),a.TgZ(4,"div",3),a._UZ(5,"app-promocion-prevencion",4),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.Q6J("itemPracticas",e.practicas))},directives:[s.G,A,h],styles:["section[_ngcontent-%COMP%]{height:auto;min-height:100vh}"]}),t})()},{path:"alumnos/:codigo",component:m},{path:"alumno/:codigo/:estd",component:x},{path:"**",redirectTo:"docente"}]},{path:"**",redirectTo:"docente"}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.Bz.forChild(v)],o.Bz]}),t})();var q=i(2514);let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,P,q.m,l.UX]]}),t})()}}]);