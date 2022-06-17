function Pizza(size, sauce, top1, top2, top3, top4,
	top5,
	top6,
	top7,
	top8,
	top9,
	top10
) {
	this.cost = 15;
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
		this.cost += 4;
	} else if (this.size === 'Large') {
		this.cost += 6;
	} else if (this.size === 'Family') {
		this.cost += 8;
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
