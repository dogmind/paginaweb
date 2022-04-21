/*=============================================
PROPIEDADES
=============================================*/

var pp = {
	posicionScroll: 0,
	cajaNav: document.querySelector("nav")
}


/*=============================================
METODOS
=============================================*/

var mp = {

	inicioParallax: function(){

		document.addEventListener("scroll", mp.efectoParallax);
	},

	efectoParallax: function(){

		pp.posicionScroll = window.pageYOffset;

		// console.log(pp.posicionScroll);

		
	}
}

mp.inicioParallax();