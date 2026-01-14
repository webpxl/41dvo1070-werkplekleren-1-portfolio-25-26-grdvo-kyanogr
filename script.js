const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
const scrollToTopBtn = document.getElementById('scrollToTop');
const nav = document.getElementById("site-nav");

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("site-nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});

function applyFilter(category) {
    cards.forEach(card => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.display = match ? '' : 'none';
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        applyFilter(btn.dataset.filter);
    });
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('year').textContent = new Date().getFullYear();