
let count = 0;

function addCart() {
    count++;
    document.getElementById("cart").innerHTML =
        "Cart: " + count;
}
