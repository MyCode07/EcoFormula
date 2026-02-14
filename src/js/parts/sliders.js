import Swiper from 'swiper';
import { Navigation, Autoplay, FreeMode, Thumbs } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        const prev = section.querySelector('.prev');
        const next = section.querySelector('.next');
        const pagination = section.querySelector('.pagination');

        if (slider.closest('.areas')) {
            const thumbs = new Swiper('.areas-img', {
                modules: [
                    FreeMode
                ],
                freeMode: true,
                watchSlidesProgress: true,
                slidesPerView: 1,
                spaceBetween: 10,
                allowTouchMove: false,
                simulateTouch: false,

            });

            new Swiper('.areas-text', {
                modules: [
                    Thumbs, Navigation, Autoplay
                ],
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                slidesPerView: 1,
                spaceBetween: 10,
                thumbs: {
                    swiper: thumbs,
                },
                allowTouchMove: false,
                simulateTouch: false,
                autoplay: {
                    pauseOnMouseEnter: true,
                    delay: 2000
                }
            });
        }
    })
}
