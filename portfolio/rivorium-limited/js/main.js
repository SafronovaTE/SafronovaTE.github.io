$(document).ready(function(){
  // jQuery плавный скролл к якорю
  $("a[href^='#']").click(function(){
    //забираем идентификатор бока с атрибута href
    var _href = $(this).attr("href");
    //узнаем высоту от начала страницы до блока на который ссылается якорь и анимируем переход на расстояние - top за 800 мс
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800);
    return false;
  });
});
