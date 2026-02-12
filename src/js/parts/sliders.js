import Swiper from 'swiper';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper/modules';

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
            });

            new Swiper('.areas-text', {
                modules: [
                    Thumbs, Navigation
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
            });
        }

        if (slider.closest('.reviews')) {
            new Swiper(slider, {
                modules: [
                    Navigation
                ],
                spaceBetween: 16,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },

                breakpoints: {
                    769: {
                        slidesPerView: 4,
                    },
                    300: {
                        slidesPerView: 2,
                    }
                }
            });
        }


    })
}
