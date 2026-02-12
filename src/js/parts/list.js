export function list() {
    const list = document.querySelector('.list');

    if (!list || window.innerWidth <= 768) {
        return
    }

    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let animationFrame;
    let lastX;
    let lastTime;

    list.addEventListener('mousedown', (e) => {
        isDown = true;
        list.classList.add('dragging');
        startX = e.pageX - list.offsetLeft;
        scrollLeft = list.scrollLeft;
        lastX = e.pageX;
        lastTime = Date.now();
        velocity = 0;

        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }
    });

    list.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            list.classList.remove('dragging');
            startInertia();
        }
    });

    list.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            list.classList.remove('dragging');
            startInertia();
        }
    });

    list.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();

        const currentTime = Date.now();
        const timeDelta = currentTime - lastTime;

        const x = e.pageX - list.offsetLeft;
        const walk = (x - startX) * 1.5;

        // Вычисляем скорость для инерции
        if (timeDelta > 0) {
            velocity = (lastX - e.pageX) / timeDelta;
        }

        list.scrollLeft = scrollLeft - walk;

        lastX = e.pageX;
        lastTime = currentTime;
    });

    function startInertia() {
        function inertia() {
            velocity *= 0.95; // Замедление

            if (Math.abs(velocity) > 0.1) {
                list.scrollLeft += velocity * 5;
                animationFrame = requestAnimationFrame(inertia);
            } else {
                cancelAnimationFrame(animationFrame);
            }
        }

        animationFrame = requestAnimationFrame(inertia);
    }
}