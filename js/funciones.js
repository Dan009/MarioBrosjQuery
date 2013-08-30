$(function() {
	
	var ancho_juego = 505;
	var altura_juego = 200;
	var numero = 1;
	var divNivel = "";
	var stage = "nivel"+numero;
	var cajas = "";
	var intercambiar = true;

	divNivel += "<div id='"+stage+"'></div>";
	$("#escenario").append(divNivel);

	//Setear Plataforma
		$("#"+stage).playground({width: ancho_juego, height: altura_juego});

	//Mapas y esas cosas :P
		// Generated with gQ's Tiles map editor
		var animations = [];
		animations[0] =  new $.gameQuery.Animation({
		    imageURL:      'file:///C:/Documents%20and%20Settings/Ortega/Escritorio/Nueva%20carpeta/game%20DUDE/imagenes/mini-bush.png',
		    type:          $.gameQuery.ANIMATION_VERTICAL,
		    numberOfFrame: 1,
		    delta:         0,
		    rate:          0,
		    offsetx:       0,
		    offsety:       0
		});


		 // the tilemap array
		var map = [[1, 1, 1]]

		// $('TODO:select the playground here').playground({height: 64, width: 350});
		$.playground()
		       .addTilemap('arbustos', map,  animations, {width: 15, height: 22, sizex: 3, sizey: 1});

	//Grupo de cajas
		$.playground().addGroup("cajas0",{width:34, height:17});
		$.playground().addGroup("cajas1",{width:34, height:17});
		
	  	for (var i = 0; i < 2; i++) {
	  		cajas = "";
	  		cajas += "<table id='tblCajas"+i+"'><tbody><tr>";
	  		
  			cajas += "<td><div class='caja-pregunta pegado'></div></td>";
  			intercambiar = !intercambiar;

  			cajas += "<td><div class='caja-pregunta'></div></td>";
  			intercambiar = !intercambiar;

	  		
	  		cajas += "</tr></tbody></table>";

	  		$("#cajas"+i).append(cajas);
		
	  	}

	//Arreglar posiciones (No tengo que de otra D:<)

		$("#cajas0").css({bottom:'110px', left:'230px'});
		$("#cajas1").css({bottom:'70px', left:'185px'});
		$("#arbustos").css({bottom:'18px', left:'180px'});
		
	$("#"+stage).startGame();

	// Animaciones	
		$('.caja-pregunta').sprite({fps: 8, no_of_frames: 4});

});

