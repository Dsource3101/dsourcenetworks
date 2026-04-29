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

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
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
});
