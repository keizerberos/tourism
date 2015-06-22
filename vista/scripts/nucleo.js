//Rebuilding Actions for Developing Interfaces Series - RADIS
//Autor: Jorge Tordoya
//DEFINICIONES
	
/*decisivas*/
var _SI = 0;
var _NO = 0;

/*estados*/
var ESTADO_CARGANDO = 1;
var ESTADO_CARGADO = 2;
var ESTADO_LISTO = 0;
var ESTADO = ESTADO_LISTO;
var SYS_ESTADO = ESTADO_CARGANDO;


//EVENTOS
/*inicializacion*/
function cargarScript(url, callback)
{
    // creando las etiquetas
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // enlazando las funciones
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}	

function _iniciar(){
	//setTimeout(i1, 1000);
	cargarScript("config.js",function (){
		cargarScript(config[0].jquery,function (){
			$('<link/>', {rel: 'stylesheet',type: 'text/css',href: "css/global.css"}).appendTo('head');
			cargarScript(config[0].jqueryui,function (){
				$('<link/>', {rel: 'stylesheet',type: 'text/css',href: config[0].jquerycss}).appendTo('head');
				cargarScript(config[0].objetos,function (){ 
				_inicializarObjetos();
				$('<link/>', {rel: 'stylesheet',type: 'text/css',href: config[0].maincss}).appendTo('head');
				cargarScript(config[0].mainjs,null);
				});				
			});				
		});	
	});
}

function i1(){

}

///*de carga*/
var pc;

function _inicializarObjetos(){	
	$('body').css('overflow','hidden');
	pc = new panelCargar("Cargando",config[0].loadIcon);
}

function cargaIniciar_0(){
	pc.mostrar();
	//console.log(pc.obtTexto());
	//pc.ponTexto("Cargando Datos...");
	//pc.ponPorcentaje(100);
	//pc.eliminar();
	setInterval(simCargar,10);
}


function cargarObjeto(obj){
	obj.onLoad();
};

function simCargar(){	
	pc.ponPorcentaje(pc.obtPorcentaje()+1);
}

//cargaIniciar_1(_mensaje);
//cargaIniciar_2(_mensaje,_bloquear_si_no);
//cargaIniciar_3(_mensaje,_bloquear_si_no,_max);
//cargaPorcentaje(_porcentaje);	//0-100
//cargaPorcentajeAdd(_incremento);
//cargaFinalizar_0();
//cargaFinalizar_1(_mensaje);

///*de formulario*/
function formularioCargar(_formulario,_en){
	pc.cargar();
	pc.ponTexto("Cargando Formulario");
	pc.noBarra();
	$.post(config[0].screens + _formulario, function(responseText) {
		$(_en).append(responseText);		
		//pc.ponTexto("Completado");
		pc.descargar();
	});
}	

function estiloTextBox(obj){
	$(obj).addClass("ui-state-default");
	$(obj).hover(function() {
		$(this).addClass("ui-state-hover");
	}, function() {
		$(this).removeClass("ui-state-hover");
	});
	$(obj).focus(function() {
		$(this).addClass("ui-state-highlight");
	}, function() {
		$(this).removeClass("ui-state-highlight");
	});

	$(obj).blur(function() {
		$(this).removeClass("ui-state-highlight");
      })
      .focus(function() {
        $(this).addClass("ui-state-highlight")
      });
}


function paginaCargar(_pagina,_en){
	pc.cargar();
	pc.ponTexto("Cargando Pagina");
	pc.noBarra();
	$.post(config[0].screens + "/anypage.php",  {p:_pagina},function(responseText) {
		$(_en).append(responseText);
		//pc.ponTexto("Completado");
		pc.descargar();
	});
	
//	$.ajax({
//        type: "POST",
//        url: config[0].screens + "/anypage.php",
//        data: {p: _pagina },        
//        success: function(responseText) {
//			console.log(responseText);		
//        	$(_en).append(responseText);
//    		pc.ocultar();
//        },
//        error: function(result) {
//            console.log("error");
//        }
//    });   
}	



// config.nombre + _formulario
//formularioBorrar();
//
///*de direccion*/
//irAFormulario_0();
//irAFormulario_1(_validar_si_no);

//GENERICAS

//Programacion

_iniciar();