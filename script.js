document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // Open Corporate Modal
            if (targetId === '#corporate' || targetId === '#contact') {
                document.getElementById('corporateModal').classList.add('show');
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Close Corporate Modal Logic
    const modal = document.getElementById('corporateModal');
    const closeBtn = document.querySelector('.close-modal');

    // Auth Modals Logic
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginBtn = document.getElementById('loginBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('show');
        });
    }

    document.getElementById('closeLogin')?.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });

    document.getElementById('closeSignup')?.addEventListener('click', () => {
        signupModal.classList.remove('show');
    });

    document.getElementById('openSignup')?.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('show');
        signupModal.classList.add('show');
    });

    document.getElementById('openLogin')?.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.classList.remove('show');
        loginModal.classList.add('show');
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
            if (e.target === loginModal) loginModal.classList.remove('show');
            if (e.target === signupModal) signupModal.classList.remove('show');
        });
    }

    // Program Author Signature
    console.log("%cMade By Harsh", "color: #d4af37; font-size: 16px; font-weight: bold;");

    // Floating Items Animation for Hero Section
    const floatingContainer = document.getElementById('floating-container');
    if (floatingContainer) {
        const emojis = ['🎁', '🧸', '🎀', '🛍️', '📦', '✨', '💖', '🎉', '🎊', '🍫', '🥂', '🍾', '💐', '🌹', '🎈', '💝', '💌', '🏆'];

        function createFloatingItem() {
            const item = document.createElement('div');
            item.className = 'floating-item';
            item.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            
            const left = Math.random() * 100;
            const size = Math.random() * 2.5 + 1.5; // 1.5rem to 4.0rem
            const duration = Math.random() * 7 + 5; // 5s to 12s
            const delay = Math.random() * 2;
            
            item.style.left = `${left}%`;
            item.style.fontSize = `${size}rem`;
            item.style.animationDuration = `${duration}s`;
            item.style.animationDelay = `${delay}s`;
            
            floatingContainer.appendChild(item);
            
            setTimeout(() => {
                item.remove();
            }, (duration + delay) * 1000);
        }

        for(let i=0; i<60; i++) {
            setTimeout(createFloatingItem, Math.random() * 2000);
        }
        
        setInterval(createFloatingItem, 300);
    }

    // Ad Slider Logic
    const adSlider = document.getElementById('adSlider');
    const dotsContainer = document.getElementById('sliderDots');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    if (adSlider && dotsContainer) {
        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = index === 0 ? 'dot active' : 'dot';
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            adSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        window.moveSlide = function(direction) {
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            goToSlide(currentSlide);
        }

        // Auto-play
        let slideInterval = setInterval(() => moveSlide(1), 5000);

        // Pause on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });

            sliderContainer.addEventListener('mouseleave', () => {
                slideInterval = setInterval(() => moveSlide(1), 5000);
            });
        }
    }
});
