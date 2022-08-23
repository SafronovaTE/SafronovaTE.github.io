// Слайдер (js)
let next = document.getElementById('nextBtn');
let previous = document.getElementById('prevBtn');
let slides = document.getElementById("sliderWrapper").children;
let currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slide active';
}

next.onclick = function () {
  goToSlide(currentSlide + 1);
};
previous.onclick = function () {
  goToSlide(currentSlide - 1);
};

// Сортировка товаров по цене (jQuery)

$(document).on("change", ".filter", function() {
  let sortingMethod = $(this).val();
  if(sortingMethod == 'cheaper')
  {sortProductsPriceAscending();}
  else if(sortingMethod == 'expensive')
  {sortProductsPriceDescending();}
});

function getAmount(price){
  return parseFloat(price.replace('$', ''));
}

function sortProductsPriceAscending()
{
  let products = $('.plant');
  products.sort(function(a, b){ return getAmount($(a).find('.price').text()) - getAmount($(b).find('.price').text()) });
  $(".plants").html(products);
}

function sortProductsPriceDescending()
{
  let products = $('.plant');
  products.sort(function(a, b){ return getAmount($(b).find('.price').text()) - getAmount($(a).find('.price').text()) });
  $(".plants").html(products);
}