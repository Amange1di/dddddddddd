

document.querySelectorAll('.hero').forEach((hero) => {
    hero.addEventListener('click', (event) => {
        const heroItem = event.target.closest('.hero-item');
        if (heroItem) {
            heroItem.classList.toggle('open');
            heroItem.querySelector('.hero_item__icon').innerHTML =
                heroItem.classList.contains('open') ? '-' : '+';
        }
    });
});


