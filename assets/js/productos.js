const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const quantityInput = document.getElementById("quantity");

incrementBtn.addEventListener("click", function () {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

decrementBtn.addEventListener("click", function () {
  if (parseInt(quantityInput.value) > 1) {
    quantityInput.value = parseInt(quantityInput.value) - 1;
  }
});

// codigo para cambiar imagen principal
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnail.src;
}
