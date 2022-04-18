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

		console.log(pp.posicionScroll);

		if (pp.posicionScroll >= 150) {
			pp.cajaNav.style.position = "fixed";
			console.log("pp.cajaNav", pp.cajaNav.attributes);

			pp.cajaNav.style.zIndex = 10;
		}else{
			pp.cajaNav.style.position = "relative";
			pp.cajaNav.style.zIndex = 10;
		}
	}
}

mp.inicioParallax();