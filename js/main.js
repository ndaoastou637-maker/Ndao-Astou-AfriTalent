// ===== ANNÉE DYNAMIQUE =====
document.getElementById('currentYear').textContent = new Date().getFullYear();
// ===== NAVBAR AU SCROLL =====
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        navbar.style.padding = '8px 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '15px 0';
    }
});
// ===== BOUTON RETOUR EN HAUT =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ===== DARK MODE =====
const darkModeToggle = document.getElementById('darkModeToggle');

// Vérifier si le dark mode était activé avant
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
}

// Quand on clique sur le bouton
darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
});
// ===== COMPTEURS ANIMÉS =====
const counters = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            let count = 0;
            const increment = target / 100;
            
            const timer = setInterval(function() {
                count += increment;
                if (count >= target) {
                    entry.target.textContent = '+' + target.toLocaleString();
                    clearInterval(timer);
                } else {
                    entry.target.textContent = '+' + Math.floor(count).toLocaleString();
                }
            }, 20);
            
            counterObserver.unobserve(entry.target);
        }
    });
});

counters.forEach(function(counter) {
    counterObserver.observe(counter);
});
// ===== ANIMATIONS FADE-IN =====
const sections = document.querySelectorAll('section');

const fadeObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(function(section) {
    section.classList.add('fade-in');
    fadeObserver.observe(section);
});