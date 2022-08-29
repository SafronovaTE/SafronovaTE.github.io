$(document).ready(function(){
  // jQuery плавный скролл к якорю
  $("a[href^='#']").click(function(){
    //забираем идентификатор бока с атрибута href
    var _href = $(this).attr("href");
    //узнаем высоту от начала страницы до блока на который ссылается якорь и анимируем переход на расстояние - top за 800 мс
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800);
    return false;
  });

  // jQuery плавный скролл вверх
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });
  $('#scroller').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  // jQuery фикс бага с подсчетом vh в мобильных браузерах с динамичной адресной панелью
  function calcVH() {
    $('#header').innerHeight( $(this).innerHeight() );
  }
  (function($) {
    calcVH();
    $(window).on('orientationchange', function() {
      calcVH();
    });
  })(jQuery);

// js присвоение класса active для открытия описания работы в портфолио
  const openBtns = document.querySelectorAll(".open-btn");

  openBtns.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle("open-btn_active");
    })
  })

});
