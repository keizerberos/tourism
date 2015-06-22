$("button").button();
$(".b1").click(function (){ 	
	if (menu.estaOculto) {
		menu.mostrar(); 
	}
	else  { 
		menu.ocultar(); }
  });