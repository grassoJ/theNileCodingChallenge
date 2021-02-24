// Checkout items stored as objects

const inCart = [
  {
    Name: "Game of Thrones: Season 1",
    sku: 9325336130810,
    num: 0,
    price: 39.49,
  },
  {
    title: "The Fresh Prince of Bel-Air",
    sku: 9325336028278,
    num: 0,
    price: 19.99,
  },
  {
    title: "The Mythical Man-Month",
    sku: 9780201835953,
    num: 0,
    price: 31.87,
  },
  {
    title: "Coders at Work",
    sku: 9781430219484,
    num: 3,
    price: 28.72,
  },
  {
    title: "Artificial Intelligence",
    sku: 9780132071482,
    num: 1,
    price: 119.92,
  },
];

let totalPrice = 0;

//First Promotions are applied, then the items are totaled

function total() {
  for (i = 0; i < inCart.length; i++) {
    promo1();
    promo2();
    totalPrice += inCart[i].price * inCart[i].num;
    return totalPrice;
  }
}

//  Promo functions
function promo1() {
  if (buy10Discount.includes(inCart[i].sku) && inCart[i].num >= 10) {
    inCart[i].price = 21.99;
  }
}
function promo2() {
  if (threeForPriceOf2.includes(inCart[i].sku) && inCart[i].num >= 3) {
    inCart[i].num = inCart[i].num - 1;
  }
}

// Items that have the same promotion can have their sku's grouped together so we don't have to hard code them into the promo function
threeForPriceOf2 = [
  9781430219484,
  928143021941,
  938143021948,
  9481430219484,
  9151430219484,
];
buy10Discount = [
  9780201835953,
  9180201835953,
  9580201835953,
  9280501835953,
  9480261835953,
  9780201835753,
];

total();
