$(document).ready(function(){//when document is ready(fully loaded), run functions

	//example function to change background color
	//$('body').css('background-color','red')

	//Step1: When 'click' on Collection button('li.Collection button')
	$('li.Collection button').on('click',function(){

	//Step2: Show the dropdown menu('ul.dropdown-menu')
		$('ul.dropdown-menu').fadeToggle();

	//Step3: Toggle the "active" class for 'li.Collection button'
		$(this).toggleClass('active');

	}); 


  $('div.america').hover(function(){
    $('.america-img').attr('src','img/Americanhover.png');
  },function(){
    $('.america-img').attr('src','img/American.png');
  });
});

 $('div.england').hover(function(){
    $('.england-img').attr('src','img/Englandhover.png');
  },function(){
    $('.england-img').attr('src','img/England.png');
  });


 $('div.france').hover(function(){
    $('.france-img').attr('src','img/Frenchhover.png');
  },function(){
    $('.france-img').attr('src','img/French.png');
  });




document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");

  carousel.addEventListener("click", () => {
    const cards = document.querySelectorAll(".carousel .card");

    const order = ["fade-left", "left", "active", "right", "fade-right"];

    let current = Array.from(cards).map(card => {
      return order.find(cls => card.classList.contains(cls));
    });

    current.push(current.shift());

    cards.forEach((card, i) => {
      card.className = "card " + current[i];
    });
  });
});



