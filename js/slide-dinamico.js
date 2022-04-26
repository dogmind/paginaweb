/*===============================
OBJETO CON LAS PROP DEL SLIDE
===============================*/

var ps = {

	paginacion: document.querySelectorAll("#paginacion button"),
	item: 0,
	cajaSlide: document.querySelector(".carousel-inner"),
	animacionSlide: "slide",
	imgSlide: document.querySelectorAll(".carousel-item"),
	avanzar: document.querySelector(".carousel-control-next"),
	retroceder: document.querySelector(".carousel-control-prev"),
	velocidadSlide: 3000, //3 segundos
	formatearLoop: false
}


/*===============================
OBJETO CON LOS METODOS DEL SLIDE
===============================*/

var ms = {

	inicioSlide: function(){

		for (var i = 0; i < ps.paginacion.length; i++) {
			ps.paginacion[i].addEventListener("click", ms.paginacionSlide);
		}

		ps.avanzar.addEventListener("click", ms.avanzar)
		ps.retroceder.addEventListener("click", ms.retroceder)
		ms.intervalo()
	},


	paginacionSlide: function(item){
		ps.item = item.target.getAttribute("data-bs-slide-to");						
		ms.movimientoSlide(ps.item);
	},

	movimientoSlide: function(item){

		ps.formatearLoop = true;

		for (var i = 0; i < ps.paginacion.length; i++) {
			ps.paginacion[i].style.opacity = 0.5;
			ps.imgSlide[i].setAttribute("class", "carousel-item");
		}
		
		ps.paginacion[item].style.opacity = 1;
		ps.imgSlide[item].setAttribute("class", "carousel-item active");
		ps.cajaSlide.style.transition = ".7s left ease-in-out";
	},

	avanzar:function(){
		
		ps.item++;
		if (ps.item == ps.imgSlide.length) {
			ps.item = 0;	
		}
		ms.movimientoSlide(ps.item);
	},

	retroceder: function(){
		
		ps.item--;
		if (ps.item < 0) {
			ps.item = ps.imgSlide.length -1;	
		}
		ms.movimientoSlide(ps.item);
	},

	
	intervalo: function(){

		setInterval(function(){

			if (ps.formatearLoop) {
				ps.formatearLoop = false
			}else{
				ms.avanzar();	
			}			
		}, ps.velocidadSlide)
	}	
}

ms.inicioSlide();