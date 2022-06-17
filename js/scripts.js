function Pizza(size, sauce, top1, top2, top3, top4,
	top5,
	top6,
	top7,
	top8,
	top9,
	top10
) {
	this.cost = 10;
	this.size = size;
	this.sauce = sauce;
	this.top1 = top1;
	this.top2 = top2;
	this.top3 = top3;
	this.top4 = top4;
	this.top5 = top5;
	this.top6 = top6;
	this.top7 = top7;
	this.top8 = top8;
	this.top9 = top9;
	this.top10 = top10;
}
Pizza.prototype.changePrice = function () {
	if (this.size === 'Personal') {
		this.cost += 1;
	} else if (this.size === 'Small') {
		this.cost += 2;
	} else if (this.size === 'Medium') {
		this.cost += 3;
	} else if (this.size === 'Large') {
		this.cost += 4;
	} else if (this.size === 'Family') {
		this.cost += 5;
	}
};

Pizza.prototype.changeSauce = function () {
	if (this.sauce === 'Red') {
		this.cost += 1;
	} else if (this.sauce === 'White') {
		this.cost += 1;
	} else if (this.sauce === 'Pesto') {
		this.cost += 1;
	}
};

Pizza.prototype.changeTopping = function () {
	if (this.top1 === 'Pepperoni') {
		this.price += 1;
	}
	if (this.top2 === 'Mushrooms') {
		this.price += 1;
	}
	if (this.top3 === 'Sausage') {
		this.price += 1;
	}
	if (this.top4 === 'Onions') {
		this.price += 1;
	}
	if (this.top5 === 'Bell Peppers') {
		this.price += 1;
	}
	if (this.top6 === 'Anchovies') {
		this.price += 1;
	}
	if (this.top7 === 'Pineapple') {
		this.price += 1;
	}
	if (this.top8 === 'Ham') {
		this.price += 1;
	}
	if (this.top9 === 'Basil') {
		this.price += 1;
	}
	if (this.top10 === 'Artichoke') {
		this.price += 1;
	}
};

function finalPizzaOrder(pizzaOrder) {
	$('#pizza-cost').show();
	$('#pizza-size').html(pizzaOrder.size);
	$('#pizza-sauce').html(pizzaOrder.sauce);
	$('#top1').html(pizzaOrder.top1);
	$('#top2').html(pizzaOrder.top2);
	$('#top3').html(pizzaOrder.top3);
	$('#top4').html(pizzaOrder.top4);
	$('#top5').html(pizzaOrder.top5);
	$('#top6').html(pizzaOrder.top6);
	$('#top7').html(pizzaOrder.top7);
	$('#top8').html(pizzaOrder.top8);
	$('#top9').html(pizzaOrder.top9);
	$('#top10').html(pizzaOrder.top10);
	$('.cost').html(pizzaOrder.price);
}

$(document).ready(function () {
	$('#finalOrderReadout').hide();
	$('form#pizzaOrder').submit(function (event) {
		event.preventDefault();
		let pizzaSize = $('select#sizeSelect').val();
		let pizzaSauce = $('select#sauceSelect').val();
		let pizzaTop1 = $('input:checkbox[name=top1]:checked').val();
		let pizzaTop2 = $('input:checkbox[name=top2]:checked').val();
		let pizzaTop3 = $('input:checkbox[name=top3]:checked').val();
		let pizzaTop4 = $('input:checkbox[name=top4]:checked').val();
		let pizzaTop5 = $('input:checkbox[name=top5]:checked').val();
		let pizzaTop6 = $('input:checkbox[name=top6]:checked').val();
		let pizzaTop7 = $('input:checkbox[name=top7]:checked').val();
		let pizzaTop8 = $('input:checkbox[name=top8]:checked').val();
		let pizzaTop9 = $('input:checkbox[name=top9]:checked').val();
		let pizzaTop10 = $('input:checkbox[name=top10]:checked').val();
		let pizzaOrder = new Pizza(
			pizzaSize,
			pizzaSauce,
			pizzaTop1,
			pizzaTop2,
			pizzaTop3,
			pizzaTop4,
			pizzaTop5,
			pizzaTop6,
			pizzaTop7,
			pizzaTop8,
			pizzaTop9,
			pizzaTop10
		);
		pizzaOrder.changePrice();
		pizzaOrder.toppingVisible();
		console.log(pizzaOrder);
		$('#finalOrderReadout').show();
	});
});

Pizza.prototype.toppingVisible = function () {
	if (this.top1 !== 'on') {
		$('#top1').hide();
	}
	if (this.top2 !== 'on') {
		$('#top2').hide();
	}
	if (this.top3 !== 'on') {
		$('#top3').hide();
	}
	if (this.top4 !== 'on') {
		$('#top4').hide();
	}
	if (this.top5 !== 'on') {
		$('#top5').hide();
	}
	if (this.top6 !== 'on') {
		$('#top6').hide();
	}
	if (this.top7 !== 'on') {
		$('#top7').hide();
	}
	if (this.top8 !== 'on') {
		$('#top8').hide();
	}
	if (this.top9 !== 'on') {
		$('#top9').hide();
	}
	if (this.top10 !== 'on') {
		$('#top10').hide();
	}
};
$();
