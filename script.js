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

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
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

    // Local Preview Helper
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        const banner = document.createElement('div');
        banner.style = 'background: #d4af37; color: black; text-align: center; padding: 12px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 10000; font-family: sans-serif; box-shadow: 0 2px 10px rgba(0,0,0,0.2);';
        banner.innerHTML = '🛠️ LOCAL PREVIEW: Changes will sync to <a href="https://dsource3101.github.io/dsourcenetworks/" target="_blank" style="text-decoration: underline; color: black;">GitHub Live</a> when you save.';
        document.body.style.marginTop = '45px';
        document.body.prepend(banner);
        
        // Add a close button to the banner
        const close = document.createElement('span');
        close.innerHTML = '&times;';
        close.style = 'float: right; cursor: pointer; padding: 0 10px; font-size: 20px;';
        close.onclick = () => { banner.remove(); document.body.style.marginTop = '0'; };
        banner.appendChild(close);
    }
});
