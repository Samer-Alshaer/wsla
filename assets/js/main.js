$(window).on("load", function () {
  /*------- preloader ---------*/
  $(".preloader").fadeOut("slow");
});

$(document).ready(function () {
  new WOW().init();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-moved");
    } else {
      $(".navbar").removeClass("navbar-moved");
    }
  });
});

/*-------- mobile menu ---------*/
$(document).ready(function () {
  $(".mobile-menu-icon").click(function () {
    $(this).toggleClass("open");
    $(".mobile-menu").toggleClass("open");
    $(".back-drop").toggleClass("show");
    if ($(".mobile-menu").hasClass("open")) {
      $("body").css({ overflow: "hidden" });
    } else {
      $("body").css({ overflow: "auto" });
    }
  });
});

/*---------- Back To Top -------*/

$(document).ready(function () {
  $(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 300) {
      $(".back-top").fadeIn();
    } else {
      $(".back-top").fadeOut();
    }
  });

  $(".back-top").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

/*------------------------------------------*/

$(".form-check-input").on("click", function () {
  $(this).parent().toggleClass("active");
});

$(".works").on("click", function () {
  $(this).toggleClass("open");
});

/*---------- Hero Carousel ---------*/
$(document).ready(function () {
  var swiper = new Swiper(".my-swiper", {
    direction: "horizontal",
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
/*------- Services Carousel ----------*/

$(document).ready(function () {
  var swiper = new Swiper(".services-swiper", {
    direction: "horizontal",
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    speed: 1000,
  });
});

if (window.matchMedia("(max-width: 480px)").matches) {
  var swiper = new Swiper(".partner-swiper", {
    spaceBetween: 30,
    slidesPerView: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".partner-swiper-button-next",
      prevEl: ".partner-swiper-button-prev",
    },
  });
} else {
  var swiper = new Swiper(".partner-swiper", {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      450: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".partner-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".partner-swiper-button-next",
      prevEl: ".partner-swiper-button-prev",
    },
  });
}

/*---------- form validation ---------*/
$(document).ready(function () {
  $("#contact-form-v")
    .submit(function (e) {
      e.preventDefault();
    })
    .validate({
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          number: true,
        },
        email: {
          required: true,
          email: true,
        },
        subject: {
          required: true,
        },
        tell_subject: {
          required: true,
        },
        i_subject: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "حقل مطلوب يرجي استكمال تعبئة البيانات",
        },
        phone: {
          required: "حقل مطلوب يرجي استكمال تعبئة البيانات",
          number: "يجب ان يكون رقم الهاتف ارقام فقط",
        },
        email: {
          required: "حقل مطلوب يرجي استكمال تعبئة البيانات",
          email: "يجب ان يكون البريد الالكتروني بالصيغة الصحيحة",
        },
        subject: {
          required: "حقل مطلوب يرجي استكمال تعبئة البيانات",
        },
        tell_subject: {
          required: "حقل مطلوب يرجي استكمال تعبئة البيانات",
        },
        i_subject: {
          required: "حقل مطلوب يرجي استكمال تعبئة البيانات",
        },
      },
      errorElement: "div",
      submitHandler: function (form) {
        $(".contact-page .success").css("display", "block");
        return false; // for demo
      },
    });
});
