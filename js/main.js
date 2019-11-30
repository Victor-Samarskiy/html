var euro, dollar;
var menu;
let burger;
var c_ontainer;

$(function () {



	// блок летающие символы
	// блок прячется под любой блок и принимает его размеры
	// container_for_cloning - здесь пишем название блока где должны летать символы
	// доделать, убрать ховеры из css
	var container_for_cloning = '.start-screen';
	var block_width = $(container_for_cloning).width();
	var block_height = $(container_for_cloning).height();

	$(".flying-block").width(block_width);
	$(".flying-block").height(block_height);

	$(window).resize(function () {
		block_width = $(container_for_cloning).width();
		block_height = $(container_for_cloning).height();
		$(".flying-block").width(block_width);
		$(".flying-block").height(block_height);
	});

	$(container_for_cloning)
		.mouseover(function () {
			// навели курсор на объект     
		})
		.mouseout(function () {
			// отвели курсор с объекта
		});
	// *** конец *** блок летающие символы






	const burger = document.querySelector('.page-header__burger');
	var visible = false;

	burger.addEventListener('click', () => {
		burger.classList.toggle('is-active');
		if (visible == false) {
			visible = true;
			$('.menu__list').css('display', 'block');
		}
		else {
			visible = false;
			$('.menu__list').removeAttr('style');
		}
	});
	
       



});


