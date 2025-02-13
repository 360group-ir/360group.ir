    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      speed: 1500,
      lazy: true,
      touchStartPreventDefault: false,
      longSwipes: true,
      longSwipesMs: 300,
      longSwipesRatio: 0.2,
      threshold: 10,
      resistance: true,
      resistanceRatio: 0.5,
      followFinger: true,
      touchReleaseOnEdges: true,
      on: {
        init() {
          const swiperWrapper = document.querySelector('.swiper-wrapper');
          const slides = Array.from(swiperWrapper.children);
          swiperWrapper.appendChild(slides[2]);
          swiperWrapper.insertBefore(slides[0], swiperWrapper.firstChild);
          this.update();
        },
      },
      breakpoints: {
        768: { spaceBetween: 0 },
        1024: { spaceBetween: 0 },
      },
    });
