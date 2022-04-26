/*=============================================
PROPIEDADES
=============================================*/

var p = {
	contenedor: document.querySelector("#contenedor"),
	// fotosCab: document.querySelectorAll("#cabecera #fotosCab img"),
	// logoCabeza: document.querySelector("#logoCabeza"),
	// logoLetras: document.querySelector("#logoLetras"),
	botonesMenu: document.querySelectorAll("nav ul li a"),
	botonMenu: null,
	slideshow: document.querySelector(".slide")
}

/*=============================================
METODOS
=============================================*/

var m = {

	inicio: function(){

		

			p.contenedor.style.opacity = 1;

			//cargo logos
			// m.cargarLogos();

			//cargo fotos de la cabecera		
			// for(var i = 0; i < p.fotosCab.length; i++){
			// 	m.cargarFotosCab(p.fotosCab[i].style,i)
			// }

			//cargar menu
			for(var i = 0; i < p.botonesMenu.length; i++){
				m.cargarBotonesMenu(p.botonesMenu[i].style);
			}

			//mostrar slideshow
			m.cargarSlideshow(p.slideshow.style);
			
		

	},

	// cargarLogos: function(){
	// 	//cargo los logos con efecto FADE
	// 	// logoCabeza.style.opacity = 0;
	// 	// logoLetras.style.opacity = 0;

	// 	setTimeout(function(){
	// 		logoCabeza.style.transition = "3s opacity ease";
	// 		logoLetras.style.transition = "3s opacity ease";
	// 		logoCabeza.style.opacity = 1;
	// 		logoLetras.style.opacity = 1;
	// 	},20)
	// },

	// cargarFotosCab: function(imgStyle, index){
		
	// 	//cargo fotos con efecto SLIDE desde la derecha
	// 	imgStyle.right = "-1000%";

	// 	setTimeout(function(){
	// 		imgStyle.transition	= (index+1)*.5 + "s right ease";
	// 		imgStyle.right = "0";				
	// 	},20);

	// },

	cargarBotonesMenu: function(btnStyle){

		//cargo el manu con efecto FADE
		btnStyle.opacity = 0;
		
		setTimeout(function(){
			btnStyle.transition = "2s opacity ease";
			btnStyle.opacity = 1;
		},200)	
		
	},

	cargarSlideshow: function(ssStyle){
		ssStyle.opacity = 0;
				
		setTimeout(function(){
			ssStyle.transition = "2s opacity ease";
			ssStyle.opacity = 1;
			
		},500)
	}


}

m.inicio();