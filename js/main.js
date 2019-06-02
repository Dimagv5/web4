// $(function(){
// 	alert('jquery');
// });

//Variabkes
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
	let desplazamientoActual = window.pageYOffset;

	if(desplazamientoActual >= 300){
		nav.classList.remove('nav1');
		nav.className = 'nav2';
		// nav.style.transition = '1s';
		menu.style.top = '100px';
		abrir.style.color = '#000';
	}else{
		nav.classList.remove('nav2');
		nav.className = 'nav1';
		// nav.style.transition = '1s';
		menu.style.top = '80px';
		abrir.style.color = '#fff';
	}
}

function apertura(){
	if(cerrado){
		menu.style.width = '70vw';
		cerrado = false;
	}else{
		menu.style.width = '0%';
		//menu.style.overflow = 'hidden';
		cerrado = true;
	}
}

window.addEventListener('load', function(){
	//Jquery
	$('#onload').fadeOut();
	$('body').removeClass('hidden');
	//
	menus();
});

window.addEventListener('scroll', function(){
	// console.log(window.pageYOffset);
	menus();
});

window.addEventListener('resize', function(){
	if(screen.width >= 700){
		cerrado = true;
		menu.style.removeProperty('overflow');
		menu.style.removeProperty('width');
	}
});

window.addEventListener('click', function(e){
	if(cerrado == false){
		//console.log(e.target);
		let span = document.querySelector('span');
		if(e.target !== abrir && e.target !== span){
			cerrado = true;
			menu.style.width = '0%';
			menu.style.overflow = 'hidden';
		}
	}	
});

abrir.addEventListener('click', function(){
	apertura();
});

