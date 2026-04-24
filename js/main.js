// ─── AOS Init ───────────────────────────────────
AOS.init({ duration: 1000, once: false, offset: 80 });

// ─── Counter Animation ───────────────────────────
const animateCounters = () => {
    document.querySelectorAll('.count').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const isPercent = counter.getAttribute('data-type') === 'percent';
        const inc = target / 120;
        let current = 0;
        const update = () => {
            current += inc;
            if (current < target) {
                counter.innerText = Math.ceil(current).toLocaleString();
                setTimeout(update, 16);
            } else {
                counter.innerText = target.toLocaleString() + (isPercent ? '%' : '+');
            }
        };
        update();
    });
};

let countersStarted = false;
const checkCounters = () => {
    const statsSection = document.querySelector('.stats-container');
    if (!statsSection || countersStarted) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        animateCounters();
        countersStarted = true;
    }
};
window.addEventListener('scroll', checkCounters);
window.addEventListener('load', checkCounters);

// ─── 3D Tilt Effect ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tilt-wrapper').forEach(card => {
        card.addEventListener('mousemove', e => {
            const box = card.getBoundingClientRect();
            const x = e.clientX - box.left;
            const y = e.clientY - box.top;
            const cx = box.width / 2;
            const cy = box.height / 2;
            const rotX = ((y - cy) / cy) * -10;
            const rotY = ((x - cx) / cx) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
            card.style.transition = 'transform 0.5s ease';
        });
    });
});

// ─── Navbar Scroll Effect ────────────────────────
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.modern-navbar');
    if (!nav) return;
    if (window.scrollY > 50) {
        nav.style.padding = '8px 0';
        nav.style.background = 'rgba(255,255,255,0.98)';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    } else {
        nav.style.padding = '15px 0';
        nav.style.background = 'rgba(255,255,255,0.95)';
        nav.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)';
    }
});

// ─── Document viewer modal (founders page) ───────
document.addEventListener('DOMContentLoaded', () => {
    const docFrame = document.querySelector('.doc-frame');
    if (docFrame) {
        docFrame.style.cursor = 'pointer';
    }
});
