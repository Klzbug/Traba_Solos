const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('header .navbar');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('fa-bars');
    toggleBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


let count = 1 
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
},7000) 

function nextImage() {
    count++; 
    if(count>4) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true

}


	const description = document.querySelector(".tooltip");

		document.querySelectorAll('path').forEach((el) => {

			el.addEventListener('mouseover', (event) => {
				event.target.className = ("enabled");
				description.classList.add("active");
				description.innerHTML = event.target.id;
			})

			el.addEventListener("mouseout", () => {
				description.classList.remove("active");
			})

			el.addEventListener("click", () => {

				//pega a sigla do estado selecionado
				const estadoSelecionado = event.target.id;
				// atribui ao link a ser direcionado
				const link = `https://www.google.com.br/search?q=${estadoSelecionado}`;

				// alert(estadoSelecionado);			
				// Abre o link em uma nova aba
				window.open(link, "_blank");
			})
		});



		document.onmousemove = function (e) {
			description.style.left = e.pageX + "px";
			description.style.top = (e.pageY - 70) + "px";
        }

new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
});

