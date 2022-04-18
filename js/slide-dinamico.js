/*===============================
OBJETO CON LAS PROP DEL SLIDE
===============================*/

var ps = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSlide: "slide",
	imgSlide: document.querySelectorAll("#slide ul li"),
	avanzar: document.querySelector("#slide #avanzar"),
	retroceder: document.querySelector("#slide #retroceder"),
	velocidadSlide: 3000, //3 segundos
	formatearLoop: false
}




/*===============================
OBJETO CON LOS METODOS DEL SLIDE
===============================*/

var ms = {

	inicioSlide: function(){


		for (var i = 0; i < ps.paginacion.length; i++) {
			
			ps.paginacion[i].addEventListener("click", ms.paginacionSlide)
			ps.imgSlide[i].style.width = (100/ps.paginacion.length) +"%"
		}

		ps.avanzar.addEventListener("click", ms.avanzar)
		ps.retroceder.addEventListener("click", ms.retroceder)
		ms.intervalo()

		ps.cajaSlide.style.width = (ps.paginacion.length*100) +"%"

	},


	paginacionSlide: function(item){

		ps.item = item.target.parentNode.getAttribute("item");
		
		ms.movimientoSlide(ps.item);

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

	movimientoSlide: function(item){

		ps.formatearLoop = true;

		ps.cajaSlide.style.left = item * -100+"%";

		for (var i = 0; i < ps.paginacion.length; i++) {
			
			ps.paginacion[i].style.opacity = 0.5;
		
		}
		ps.paginacion[item].style.opacity = 1;

		ps.cajaSlide.style.transition = ".7s left ease-in-out";
		

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