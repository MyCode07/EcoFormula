import "./parts/menu.js";
import "./parts/sliders.js";
import { toTop } from "./static/to-top.js";
toTop();

document.addEventListener('click', function (e) {
    let targetEl = e.target;
    if (targetEl.classList.contains('pages-close')) {
        document.querySelector('.pages').classList.toggle('_hide');
    }
})
