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

    // Automatic Redirect to GitHub (When using Go Live button)
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        // Only redirect if "local=true" is NOT in the URL
        if (!window.location.search.includes('local=true')) {
            window.location.href = 'https://dsource3101.github.io/dsourcenetworks/';
        } else {
            // Show the banner if we are intentionally staying local
            const banner = document.createElement('div');
            banner.style = 'background: #d4af37; color: black; text-align: center; padding: 12px; font-weight: bold; position: fixed; top: 0; left: 0; width: 100%; z-index: 10000; font-family: sans-serif; box-shadow: 0 2px 10px rgba(0,0,0,0.2);';
            banner.innerHTML = '🛠️ LOCAL MODE ACTIVE: Changes will sync to <a href="https://dsource3101.github.io/dsourcenetworks/" target="_blank" style="text-decoration: underline; color: black;">GitHub Live</a> when you save.';
            document.body.style.marginTop = '45px';
            document.body.prepend(banner);
            
            const close = document.createElement('span');
            close.innerHTML = '&times;';
            close.style = 'float: right; cursor: pointer; padding: 0 10px; font-size: 20px;';
            close.onclick = () => { banner.remove(); document.body.style.marginTop = '0'; };
            banner.appendChild(close);
        }
    }

    // Success Submission Alert
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('submitted')) {
        alert("Your Enquiry form has been submitted we will connect to you within 24hrs");
        // Clean up URL without refreshing
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Dynamic Ad Banner Sync
    const savedAdText = localStorage.getItem('dsource_ad_text');
    if (savedAdText) {
        const adTextElements = document.querySelectorAll('.ad-text');
        adTextElements.forEach(el => el.innerText = savedAdText);
    }

    // Dynamic Product Rendering for Homepage
    const productGrid = document.getElementById('dynamicProductGrid');
    if (productGrid) {
        let inventory = JSON.parse(localStorage.getItem('dsource_inventory'));
        
        // Initial Default Data if empty
        if (!inventory || inventory.length === 0) {
            inventory = [
                { name: "The Elite Executive Box", category: "Ultra-Premium", stock: 15, photo: "images/luxury_signature_box.png" },
                { name: "The Zen Workspace Kit", category: "Wellness", stock: 45, photo: "images/wellness_corporate_kit.png" },
                { name: "The Royal Indian Hamper", category: "Artisanal", stock: 30, photo: "images/artisanal_indian_hamper.png" },
                { name: "Executive Selection 2026", category: "Premium", stock: 45, photo: "images/executive_selection.png" },
                { name: "Festive Grandeur Hamper", category: "Festival", stock: 12, photo: "images/festival_hamper_1777448003402.png" },
                { name: "Premium Welcome Kit", category: "Onboarding", stock: 88, photo: "images/welcome_kit_1777447838852.png" }
            ];
            localStorage.setItem('dsource_inventory', JSON.stringify(inventory));
        }

        productGrid.innerHTML = inventory.map(product => {
            const photoSrc = product.photo || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(product.name) + '&background=f4f4f4&color=d4af37&size=300';
            return `
                <div class="product-card">
                    <div class="product-image" style="height: 300px;">
                        <img src="${photoSrc}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="product-info">
                        <span class="category">${product.category}</span>
                        <h3>${product.name}</h3>
                        <p>Stock Status: ${product.stock > 0 ? product.stock + ' units available' : '<span style="color: #fa5252;">Out of Stock</span>'}</p>
                        <a href="#corporate" class="view-details">Inquire Now <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            `;
        }).join('');
    }
});
