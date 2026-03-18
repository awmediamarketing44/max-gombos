// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
});

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// ===== PARALLAX ON IMAGE BREAKS =====
const parallaxEls = document.querySelectorAll('[data-parallax] img');

function updateParallax() {
    parallaxEls.forEach(img => {
        const rect = img.parentElement.getBoundingClientRect();
        const windowH = window.innerHeight;

        if (rect.bottom > 0 && rect.top < windowH) {
            const progress = (rect.top + rect.height) / (windowH + rect.height);
            const offset = (progress - 0.5) * 80;
            img.style.transform = `translateY(${offset}px)`;
        }
    });
    requestAnimationFrame(updateParallax);
}

requestAnimationFrame(updateParallax);

// ===== SMOOTH HOVER ON PAIN ITEMS =====
document.querySelectorAll('.pain-item, .become-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.cross, .accent-line').style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        const marker = item.querySelector('.cross');
        if (marker) marker.style.transform = 'scale(1.3)';
        const line = item.querySelector('.accent-line');
        if (line) line.style.width = '48px';
    });
    item.addEventListener('mouseleave', () => {
        const marker = item.querySelector('.cross');
        if (marker) marker.style.transform = 'scale(1)';
        const line = item.querySelector('.accent-line');
        if (line) line.style.width = '32px';
    });
});
