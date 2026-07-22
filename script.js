function addToCart(button){
    const price= parseInt(button.getAttribute('data-price'));
    let cartTotal= parseInt(localStorage.getItem('cartTotal')) || 0;
    cartTotal += price; 
    localStorage.setItem('cartTotal', cartTotal);
    alert(`Item Added! Cart total: ${cartTotal}E`); 
}
function clearCart() {
    localStorage.removeItem(`cartTotal`);
}