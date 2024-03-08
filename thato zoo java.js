function calculatePrice() {
    const age = parseInt(document.getElementById('age-input').value);
    let price;

    if (age <= 3 || age > 65) {
        price = 0;
    } else if (age <= 12) {
        price = 100;
    } else if (age <= 18) {
        price = 150;
    } else {
        price = 200;
    }

    document.getElementById('answer').innerHTML = `Price: ${price} ZAR`;
    document.getElementById('price-calculation').style.display = 'block';
}

function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseInt(document.getElementById('answer').innerText.split(' ')[1]);
    const totalPrice = price * quantity;
    document.getElementById('total-price').value = totalPrice + " ZAR";
}