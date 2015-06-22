//DESIGNER



var index = {
	onLoad : function() {
		//$(".divMenu").resizable({handles: " e",autoHide: true});
		//$(".divCuerpo").resizable({handles: " w"});
		window.addEventListener("resize", index.alRedimensionar);
		index.moverBarra();
		formularioCargar("navegador.php", ".divNavegador");
		formularioCargar("menu.php", ".divMenu");
		formularioCargar("login.php", ".divCuerpo");
		//paginaCargar("https://www.ietf.org/rfc/rfc2616.txt", ".divCuerpo");
		
		formularioCargar("estado.php", ".divEstado");
	},
	alRedimensionar : function () {
		$('.divCuerpo').css("width", $(window).width() - $('.divMenu').width());
	},
	moverBarra : function () {
		var min = 70;
		var max = 3600;
		var mainmin = 100;

		$('#split-bar').mousedown(function(e) {
			e.preventDefault();
			$(document).mousemove(function(e) {
				e.preventDefault();
				var x = e.pageX - $('.divMenu').offset().left;
				if (x > min && x < max && e.pageX < ($(window).width() - mainmin)) {
					$('.divMenu').css("width", x);
					$('.divCuerpo').css("width", $(window).width() - x);
					// $('.divCuerpo').css("width", (($(window).width()-x)/$(window).width())*100+'%');
				}
			})		
		});

		$(document).mouseup(function(e) {
			$(document).unbind('mousemove');
		});
	},
	anchoBarra : 100,
	ocultarBarra : function () {
		index.anchoBarra = $('.divMenu').css("width");
		$('.divMenu').css("width", 2);
		$('.divCuerpo').css("width", $(window).width() -2);
		// $('.divCuerpo').css("width", (($(window).width()-x)/$(window).width())*100+'%');
		$(document).mouseup(function(e) {
			$(document).unbind('mousemove');
		});
	},
	mostrarBarra : function () {	
		$('.divMenu').css("width", index.anchoBarra);
		$('.divCuerpo').css("width", $(window).width() - $('.divMenu').width());
		// $('.divCuerpo').css("width", (($(window).width()-x)/$(window).width())*100+'%');
		$(document).mouseup(function(e) {
			$(document).unbind('mousemove');
		});
	}	
}




cargarObjeto(index);
