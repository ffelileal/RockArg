        // Menú móvil
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
        
        // Botones "Ver más"
        document.getElementById('ver-mas-artistas').addEventListener('click', function() {
            alert('Cargando más artistas...');
        });
        
        document.getElementById('ver-mas-albumes').addEventListener('click', function() {
            alert('Cargando más álbumes...');
        });
        
        document.getElementById('ver-mas-fotos').addEventListener('click', function() {
            alert('Cargando más fotos...');
        });
        
        // Animación de scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Efecto parallax en las luces de escenario
        window.addEventListener('scroll', function() {
            const lights = document.querySelectorAll('.stage-light');
            const scrollPosition = window.scrollY;
            
            lights.forEach(light => {
                const speed = 0.05;
                const yPos = -scrollPosition * speed;
                light.style.transform = `translateY(${yPos}px)`;
            });
        });
        
        // Animación de entrada para elementos al hacer scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('section > div > h2, .timeline-item, .artist-card, .album-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
        // Clase para la animación
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                .animate-fadeIn {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            </style>
        `);
