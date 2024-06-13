let price1;
let price2;
let price3;

function groceryTracker() {
    price1= parseFloat(document.getElementById('price1').value);
    price2 = parseFloat(document.getElementById('price2').value);
    price3 = parseFloat(document.getElementById('price3').value);

    let total = price1 + price2 + price3;
    document.getElementById('result').innerText = `The total amount is :$ ${total}`;
   }