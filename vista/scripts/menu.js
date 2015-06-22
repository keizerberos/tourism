var menu = {
	onLoad : function() {
		var c = $("#menuAccord").find("h3").size();
		window.addEventListener("resize", function() {
			$("#menuAccord div").height($("#menuAccord").height() - 36 * c)
		});
		//	console.log(c);
		$("#menuAccord div").height($(".divMenu").height() - 36 * c);
		//$( "#menuAccord" ).accordion("refresh");
		$("#menuAccord").accordion({
			heightStyle : 'content'
		});
		//$( "#accordion" ).accordion("refresh");
		$("#menuAccord").find("button").button();
		$("#menuAccord").find("button").width("100%");
		
		$("#menuAccord").find("button").click(function (){ menu.ocultar(); });
	},
	estaOculto : false,
	ocultar : function(){
		$("#menuAccord").hide("fade",function (){ index.ocultarBarra()});
		menu.estaOculto = true;
	},
	mostrar: function(){
		index.mostrarBarra();
		$("#menuAccord").show("fade");
		menu.estaOculto = false;
	}
};

cargarObjeto(menu);	
