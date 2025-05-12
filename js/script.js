document.addEventListener('DOMContentLoaded', function() {
    // Loader animation
    const loader = document.querySelector('.loader');
    const censoredText = document.querySelector('.censored-text');
    const nav = document.querySelector('.main-nav');
    
    // Simulate loading
    setTimeout(() => {
        censoredText.textContent = censoredText.getAttribute('data-text');
        censoredText.style.color = '#e94560';
        
        setTimeout(() => {
            loader.style.opacity = '0';
            
            setTimeout(() => {
                loader.style.display = 'none';
                nav.style.transform = 'translateY(0)';
            }, 500);
        }, 1000);
    }, 1500);
    
    // Typing effect for hero section
    const typingText = document.querySelector('.typing-text');
    const words = ['resilience', 'censorship', 'storytelling', 'digital media', 'creativity', 'nostalgia', 'Peace'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        typingText.textContent = currentChar;
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1000);
        }
    }
    
    setTimeout(type, 2000);
    
    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        });
    });
    
    // Work gallery filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    // Open lightbox for images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
        });
    });
    
    // Open lightbox for videos
    document.querySelectorAll('.gallery-item video').forEach(video => {
        video.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxVideo.src = this.querySelector('source').src;
            lightboxVideo.style.display = 'block';
            lightboxImg.style.display = 'none';
            lightboxVideo.play();
        });
    });
    
    // Close lightbox
    closeLightbox.addEventListener('click', function() {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
    });
    
    // Close when clicking outside content
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            lightboxVideo.pause();
        }
    });
    
    // Rest of your existing JavaScript...
    // (Keep all the other functions like accordion, form submission, etc.)
    
    // Update copyright year
    const yearElement = document.querySelector('.year');
    yearElement.textContent = new Date().getFullYear();
    
    // Populate skills cloud
    const skillsCloud = document.querySelector('.skills-cloud');
    const skills = [
        'Photography', 'Videography', 'Graphic Design', 'Journalism', 
        'Adobe Creative Suite', 'HTML/CSS', 'JavaScript', 'PHP', 
        'jQuery', 'Digital Marketing', 'Social Media', 'Content Creation',
        'Sound Design', 'Logic Pro', 'Pro Tools', 'Spanish', 'Arabic'
    ];
    
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.classList.add('skill-tag');
        skillTag.textContent = skill;
        skillsCloud.appendChild(skillTag);
    });
    
    // Populate experience accordion
    const experienceAccordion = document.querySelector('.experience-accordion');
    const experiences = [
        {
            title: 'Event and Classroom Management',
            location: 'Rochester, New York',
            description: 'Assisted in setting up, running and managing audiovisual equipment, lighting, and sound systems. Troubleshot technical issues during events and ensured the proper functioning of equipment throughout the event. Provided technical support to event organizers and worked with other event staff and technicians to ensure seamless execution.'
        },
        {
            title: 'Social Media Marketing Intern',
            location: 'Genesee Valley Council for the Arts, Rochester, New York',
            description: 'Evaluated the current social media presence and provided insights for optimization. Established guidelines for consistent branding across platforms, incorporating video content and digital marketing trends. Developed and implemented a social media marketing plan to promote GVCA\'s spring programming effectively.'
        }
    ];
    
    experiences.forEach(exp => {
        const item = document.createElement('div');
        item.classList.add('accordion-item');
        
        item.innerHTML = `
            <div class="accordion-header">
                <h4 class="accordion-title">${exp.title}</h4>
                <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
                <p class="accordion-location">${exp.location}</p>
                <p class="accordion-description">${exp.description}</p>
            </div>
        `;
        
        experienceAccordion.appendChild(item);
    });
    
    // Initialize accordion items
    const newAccordionItems = document.querySelectorAll('.accordion-item');
    newAccordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const message = this.querySelector('#message').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });
});