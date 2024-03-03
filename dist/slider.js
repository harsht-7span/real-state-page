$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 3,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  if (window.innerWidth > 1024) {
    console.log("enter");
    $(".price").removeClass("price-active flex");
    $(".slick-current.slick-active:eq(0)").addClass("show");
    $(".slick-current.slick-active:eq(0)")
      .find(".price")
      .addClass("price-active");
  }
  $(".slick-arrow").click(function () {
    if (window.innerWidth > 1024) {
      $(".price").removeClass("price-active flex");
      $(".slick-slide").removeClass("show");
      setTimeout(function () {
        $(".slick-current.slick-active:eq(0)").addClass("show");
        $(".slick-current.slick-active:eq(0)")
          .find(".price")
          .addClass("price-active");
      }, 500);
    }
  });

  $("#arrow-1").click(function () {
    $(".slick-prev").click();
  });
  $("#arrow-2").click(function () {
    $(".slick-next").click();
  });
});
