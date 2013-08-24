$(function(){

// Constantes de movimiento (Por medio de codigo ASCII)
var izquierda = 37;
var derecha = 39;
var arriba = 38; // Para despues


		$('.mario').css('top', ($(window).height()/2)-($('.mario').height()/2));
 
				$('html').keydown(function(){
					$('.mario').css('top', ($(window).height()/2)-($('.mario').height()/2));
					$('.mario').css('margin-left', parseInt($('.mario').css('margin-left'))+10).animate("slow");
 
					if($('.mario').css('background-position') == '-6px -8px'){
						$('.mario').css('background-position', '-34px -8px');
					} else {
						$('.mario').css('background-position', '-6px -8px');
					}
 
					if(parseInt($('#escenario').css('left')) > $(window).width())
					{
						$('.mario').css('left', -parseInt($('.mario').width()));
					}
 
 
				});


});