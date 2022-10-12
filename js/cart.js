let addButton = document.getElementsByClassName("addCart");
for (let button of addButton) {
  let targetButton = button.addEventListener("click", function (event) {
    let productPrice = event.target.parentNode.parentNode
      .getElementsByClassName("price")
      .item(0);
    productPrice = productPrice.innerText;
    productPrice = parseFloat(productPrice);

    let totalProduct = document.getElementById("totalProduct").innerText;
    totalProduct = parseInt(totalProduct) + 1;
    document.getElementById("totalProduct").innerText = totalProduct;

    //Get All Price
    let currentPrice = document.getElementById("price").innerText;
    currentPrice = parseFloat(currentPrice);

    let currentDeliveryPrice = document.getElementById("delivery").innerText;
    currentDeliveryPrice = parseFloat(currentDeliveryPrice);

    let currentShippingPrice = document.getElementById("shipping").innerText;
    currentShippingPrice = parseFloat(currentShippingPrice);

    let currentTotalPrice = document.getElementById("totalPrice").innerText;
    currentTotalPrice = parseFloat(currentTotalPrice);

    let currentTax = document.getElementById("tax").innerText;
    currentTax = parseFloat(currentTax);

    let currentTotalPriceWT = document.getElementById("totalPriceWT").innerText;
    currentTotalPriceWT = parseFloat(currentTotalPriceWT);
    // Set Price
    let setPrice = PriceCalculation(productPrice, currentPrice);
    document.getElementById("price").innerText = setPrice;

    // Set Delivery Price
    let setDelivery = DeliveryShippingPrice(setPrice, currentDeliveryPrice);
    document.getElementById("delivery").innerText = setDelivery;

    // Set Shipping Price
    let setShipping = setDelivery;
    document.getElementById("shipping").innerText = setShipping;

    // Set Total Price
    let setTotalPrice = setPrice + setDelivery + setShipping;
    document.getElementById("totalPrice").innerText = setTotalPrice;

    // Set Tax
    let setTax = setTotalPrice * 0.15;
    document.getElementById("tax").innerText = setTax;

    // Set Total Price with Tax
    let setTotalPriceWT = setTotalPrice + setTax;
    document.getElementById("totalPriceWT").innerText = setTotalPriceWT;
  });
}
function PriceCalculation(productPrice, currentPrice) {
  return productPrice + currentPrice;
}
function DeliveryShippingPrice(productPrice, currentDeliveryPrice) {
  if (productPrice <= 500) return currentDeliveryPrice;
  else if (productPrice <= 800) return 100;
  else if (productPrice <= 1000) return 150;
  else return 200;
}
// function ShippingPrice(productPrice, currentShippingPrice) {
//   if (productPrice <= 500) return currentShippingPrice;
//   else if (productPrice <= 800) return 100 + currentShippingPrice;
//   else if (productPrice <= 1000) return 150 + currentShippingPrice;
//   else return 200 + currentShippingPrice;
// }

document.getElementById("modalPrice").addEventListener("click", function () {
  let price = document.getElementById("totalPriceWT").innerText;
  document.getElementById("modelPrice").innerText = price;
});

document.getElementById("proceed").addEventListener("click", function () {
  document.getElementById("price").innerText = "0";
  document.getElementById("totalProduct").innerText = "0";
  document.getElementById("delivery").innerText = "0";
  document.getElementById("shipping").innerText = "0";
  document.getElementById("totalPrice").innerText = "0";
  document.getElementById("tax").innerText = "0";
  document.getElementById("totalPriceWT").innerText = "0";
  document.getElementById("modelPrice").innerText = "0";
});
