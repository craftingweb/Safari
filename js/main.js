$(function () {
  $(".popup__link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".gallery__slider").slick({
    prevArrow: '<img class="prev-arrow" src="images/arrow-left.svg" alt="">',
    nextArrow: '<img class="next-arrow" src="images/arrow-right.svg" alt="">',
  });

  $(".gallery__item-inner").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
});
