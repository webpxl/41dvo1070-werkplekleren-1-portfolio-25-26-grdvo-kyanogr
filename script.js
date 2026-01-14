const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');

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

document.getElementById('year').textContent = new Date().getFullYear();