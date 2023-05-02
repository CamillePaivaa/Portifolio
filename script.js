var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  $("#fileRequest").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'Profile.pdf';
});