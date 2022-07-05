# Pizza Website

#### A Website used to order pizza online

#### By Alex McKnight

## Technologies Used

- _HTML_
- _JavaScript_
- _jQuery_
- _BootStrap_

## Description

A website for a fictional pizza place that allows you to take orders online.

## Setup/Installation Requirements

- _Install Google Chrome Browser_
- _Download GitHub file_
- _https://github.com/alex-mcknight11/Pizza_
- _Open folder labeled "Pizza"_
- _Website will open in browser_

## Tests

- Description: changePrice()
Test: "It should increase price based on user selected size."
Code: 
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

- Description: changeSauce()
Test: "It should change pricing and sauce selection based on user input."
Code:
	if (this.sauce === 'Red') {
		this.cost += 1;
	} else if (this.sauce === 'White') {
		this.cost += 1;
	} else if (this.sauce === 'Pesto') {
		this.cost += 1;
	}
};

- Description: changeTopping()
Test: "It should change topping selection and pricing based on user input."
Code:
	if (this.top1 === 'Pepperoni') {
		this.cost += 1;
	}
	if (this.top2 === 'Mushrooms') {
		this.cost += 1;
	}
	if (this.top3 === 'Sausage') {
		this.cost += 1;
	}
	if (this.top4 === 'Onions') {
		this.cost += 1;
	}
	if (this.top5 === 'Bell Peppers') {
		this.cost += 1;
	}
	if (this.top6 === 'Anchovies') {
		this.cost += 1;
	}
	if (this.top7 === 'Pineapple') {
		this.cost += 1;
	}
	if (this.top8 === 'Ham') {
		this.cost += 1;
	}
	if (this.top9 === 'Basil') {
		this.cost += 1;
	}
	if (this.top10 === 'Artichoke') {
		this.cost += 1;
	}
};

- Description: finalPizzaOrder()
Test: "It should display final pizza order based on user selected inputs"
Code:
function finalPizzaOrder(pizzaOrder) {
	$('#pizza-cost').show();
	$('#pizza-size').text(pizzaOrder.size);
	$('#pizza-sauce').text(pizzaOrder.sauce);
	console.log('hello');
	$('#cost').text(pizzaOrder.cost);
}

## Known Bugs

- _No Known Issues_

## License

MIT
Copyright (c) 6/26/22 Alex McKnight