var login = {
	onLoad : function() {
		$(".log_Dialog").dialog();
		$(".log_Dialog").find("button").button();
		estiloTextBox($(".log_Dialog").find("input"));
	},

	ocultar : function() {
		
	},
	mostrar : function() {

	}

};

cargarObjeto(login);