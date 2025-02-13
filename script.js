// Intersection Observer for scroll animations
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1
});

document.querySelectorAll('.feature-card, .activity-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update stats animation
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    const updateCount = () => {
        const target = parseInt(stat.innerText);
        const count = parseInt(stat.getAttribute('data-count') || 0);
        const increment = target / 50;
        if (count < target) {
            stat.setAttribute('data-count', count + increment);
            stat.innerText = Math.ceil(count + increment) + '+';
            setTimeout(updateCount, 20);
        }
    };
    stat.setAttribute('data-count', '0');
    updateCount();
});
