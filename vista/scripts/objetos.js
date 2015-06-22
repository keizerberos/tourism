var panelCargar = function( texto,imgOpt) {	
	this.texto = texto;
	//this.obj = $('<div class="loading ui-widget-content" ><img src="images/loader.gif" width="35px" height="35px"><div id="progressbar"></div><label id="strLoad" >'+ texto +'</label></div>').appendTo('body');
	this.obj = $('<div class="loading ui-widget-content" ></div>').appendTo('body');
	this.img = $('<img src="images/cat3load.gif" width="90px" height="90px">').appendTo(this.obj);
	
	
	if (imgOpt == 100){
		this.img.attr('src',"images/loader.gif");
		this.img.css('height','30');
		this.img.css('width','30');
		this.img.css('marginLeft','-5px');
		this.img.css('marginTop','-5px');
	}
	if (imgOpt == 101){
		this.img.attr('src',"images/loader1.gif");
		this.img.css('height','8');
		this.img.css('width','30');
		this.img.css('marginLeft','-5px');
		this.img.css('marginTop','8px');
	}
	if (imgOpt == 102){
		this.img.attr('src',"images/loader1.gif");
		this.img.css('height','30');
		this.img.css('width','30');
		this.img.css('marginLeft','-5px');
		this.img.css('marginTop','-5px');
	}
	if (imgOpt == 103){
		this.img.attr('src',"images/blueload.gif");
		this.img.css('height','40');
		this.img.css('width','40');
		this.img.css('marginLeft','-12px');
		this.img.css('marginTop','-10px');
	}
	if (imgOpt == 200){
		this.img.attr('src',"images/cat3load.gif");
		this.img.css('height','90');
		this.img.css('width','90');
		this.img.css('marginLeft','-33px');
		this.img.css('marginTop','-57px');
	}
	if (imgOpt == 201){
		this.img.attr('src',"images/jawload.gif");
		this.img.css('height','40');
		this.img.css('width','60');
		this.img.css('marginLeft','-23px');
		this.img.css('marginTop','-10px');
	}
	if (imgOpt == 202){
		this.img.attr('src',"images/catload.gif");
		this.img.css('height','40');
		this.img.css('width','60');
		this.img.css('marginLeft','-30px');
		this.img.css('marginTop','-10px');
	}
	if (imgOpt == 203){		
		this.img.attr('src',"images/trolload.gif");
		this.img.css('height','32');
		this.img.css('width','42');
		this.img.css('marginLeft','-13px');
		this.img.css('marginTop','-6px');
	}
	if (imgOpt == 204){
		this.img.attr('src',"images/gameload.gif");
		this.img.css('height','32');
		this.img.css('width','32');
		this.img.css('marginLeft','-10px');
		this.img.css('marginTop','-6px');
	}
	if (imgOpt == 205){
		this.img.attr('src',"images/spongeload.gif");
		this.img.css('height','32');
		this.img.css('width','52');
		this.img.css('marginLeft','-16px');
		this.img.css('marginTop','-6px');
	}
	if (imgOpt == 206){	
		this.img.attr('src',"images/cat4load.gif");
		this.img.css('height','70');
		this.img.css('width','90');
		this.img.css('marginLeft','-33px');
		this.img.css('marginTop','-27px');
	}
	
	this.pbar = $('<div class="progressbar""></div>').progressbar({value: 0}).appendTo(this.obj);
	this.txt = $('<label >'+ texto +'</label>').appendTo(this.obj);
	this.obj.dialog(  {
		  //dialogClass: 'alert', 
		  autoOpen : 	false,
		  width: 'auto',
		  height: '45',
		  modal: false,
		  overlay: { 
          opacity: 0.5, 
          background: "#000000" 
      	  },
		  draggable: false,
		 // my: "left bottom", at: "left bottom", of: $(window),
		  //position: { my: "center", at: "left bottom", of: $('body')},
		  position: { my: "center", at: "left bottom", of: $('HTML')},
		  resizable: false, 
		  close: function(event, ui) {
		      //$(this).hide();
		      }
		  }).siblings('.ui-dialog-titlebar').remove();
	this.obj.css("padding", "0.8em 0.5em");
	this.obj.css('overflow','hidden');
	//this.obj.dialog( "option", "show", { effect: "slide", duration: 300, direction: 'left' } );
	//this.obj.dialog( "option", "hide", { effect: "drop", duration: 300, direction: 'left' } );
	this.obj.dialog( "option", "show", { effect: "fade", duration: 100, direction: 'left' } );
	this.obj.dialog( "option", "hide", { effect: "fade", duration: 100, direction: 'left' } );
	this.obj.dialog('open');
	me = this.obj;
	txt = this.txt
	this.pbar.on("progressbarcomplete", function( event, ui ) {
		me.dialog( "close" );
		});
	this.carga = 0;
	this.ponPorcentaje = function (p) { this.pbar.progressbar("option","value",p); };
	this.mostrar = function (){  this.obj.dialog('open'); };
	this.cargar = function (){  this.carga++; if (this.carga > 0) {this.mostrar();}};
	this.descargar = function (){  this.carga--; if (this.carga == 0) {this.ocultar();}};
	this.noBarra = function (){ this.pbar.progressbar().hide(); };
	this.siBarra = function (){ this.pbar.progressbar().show(); };
	this.obtPorcentaje = function () { return this.pbar.progressbar( "option", "value");} 
	this.ocultar = function (){ /*this.txt.html("");*/ ; this.obj.dialog("close");};
	this.eliminar = function (){ me.empty();};
	this.obtTexto = function(){ return this.txt.html(); };
	this.ponTexto = function(t){ return this.txt.html(t); };	
};

var login = function (){
	



}
