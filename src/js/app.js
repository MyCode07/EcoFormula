import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/sliders.js";
import { toTop } from "./static/to-top.js";
import { list } from "./parts/list.js";
toTop();
list()

import { maskInputs } from "./static/inputmask.js";

maskInputs('+7 (999) 999-99-99', '._phone-mask')

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})
