// Contact form API URL - Update this to your backend URL
const API_BASE = 'http://localhost:3001/api';

// Project data for detail modals
const projects = {
    'silenced-voices': {
        title: 'Silenced Voices: Censorship & Resilience',
        description: 'An interactive game exploring the hardships journalists face during wartime and how censorship affects their work.',
        fullDescription: `
            <p>This project is a powerful exploration of censorship and resilience in Palestine during the ongoing genocide. The game is designed to make you feel frustrated as each choice is either putting you, as a journalist in the game, at risk of being killed or facing you with obstacles that can't be solved. So every choice leads to a dead end. I aimed to highlight the challenges faced by journalists and activists in Palestine.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Interactive storytelling experience</li>
                <li>Silent film metaphor for censorship</li>
                <li>Cultural preservation through digital media</li>
                <li>Social justice advocacy</li>
            </ul>

            <h4>Impact:</h4>
            <p>The project has sparked important conversations about freedom of speech and censorship.</p>
        `,
        link: 'https://zeinamadani.itch.io/silenced-voices'
    },
    'ezpark': {
        title: 'EZPark Website Design',
        description: 'UX/UI design for a campus parking app solution.',
        fullDescription: `
            <p>EZPark is an app idea aiming to inform users regarding different open parking spots on campus which can allow students to decrease time looking for open spots on campus and also help to reduce traffic congestion.</p>
            
            <h4>My Role:</h4>
            <p>My contribution to the project was the Website design, focusing on user experience and accessibility. I created wireframes, mockups, and interactive prototypes using Figma.</p>
            
            <h4>Design Process:</h4>
            <ul>
                <li>User research and needs analysis</li>
                <li>Wireframing and prototyping</li>
                <li>UI design and visual identity</li>
                <li>Accessibility testing</li>
            </ul>
        `,
        link: 'https://embed.figma.com/proto/HFLnf9BFMisFcZJ9EheHH9/EZPark-Website--Copy-?node-id=5-4&starting-point-node-id=5%3A4&embed-host=share'
    },
    'subject-seasons': {
        title: 'Subject vs Seasons: A Photography Exploration',
        description: 'A photographic exploration of how individuals react to and interact with different seasonal environments.',
        fullDescription: `
            <p>This project explores how the subject reacts to light and seasons changing in Rochester. So far two seasons have been captured: Spring and Summer. It is still an ongoing project and when Fall and Winter photos will be taken, the project would be completed.</p>
            
            <h4>Project Overview:</h4>
            <p>In the spring the photos were taken next to flowers and green grass. For the summer, the photos were taken at Lake Ontario Beach. I realized that people's mood changes according to the weather. The person in the photoshoot mentioned that she adjusts her outfits based on her mood, which inspired this exploration of how individuals interact with seasonal environments.</p>
            
            <h4>My Role and Duration:</h4>
            <p>I was the photographer, and the project was taken in the spring of 2024 and the summer of 2024. I would ask the subject to pose however they want and then adjust her accordingly. I also edited the photos post photoshoot to adjust them and color correct them using Adobe Photoshop.</p>
            
            <h4>Creative Concept:</h4>
            <p>The goal was to portray her feelings and emotions that she feels during each season. To show how her mood changes accordingly and how she expresses herself. I wanted to show that seasons have an effect on how people feel and their mental health and how different people react to the seasons changing.</p>
            
            <h4>Design Process:</h4>
            <p>I used a lumix p10 camera to take the photos. A lot of the process is going with the flow of the subject and seeing what area they would choose and what they would do and how they would pose. I barely directed her on what to do but I would adjust occasionally to fix the photo structure. Then I decided to edit the photos to highlight certain aspects of its composition.</p>
            
            <h4>Results:</h4>
            <p>In the spring photos, she appears to be breathing in fresh air and feeling the grass, while in the summer photos she is sunbathing and playing with the sand and rocks. The contrast between seasons shows how environmental context influences emotional expression and personal interaction with nature.</p>
            
            <h4>Future Development:</h4>
            <p>This project may expand to involve different people to compare how various individuals react to seasonal changes, creating a broader study of human-environment interaction.</p>
        `,
        images: [
            'frontend/assets/images/Photography/mesmerization/Pau1.jpg',
            'frontend/assets/images/Photography/mesmerization/pau2.jpg',
            'frontend/assets/images/Photography/mesmerization/pau3.jpg',
            'frontend/assets/images/Photography/mesmerization/pau4.jpg',
            'frontend/assets/images/Photography/mesmerization/pau5.jpg'
        ]
    }
};

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
    
    // Typing effect for hero section - Updated words
    const typingText = document.querySelector('.typing-text');
    const words = ['Cultural Preservation', 'Social Justice', 'Documentary', 'Storytelling', 'Activism', 'Resilience', 'Change'];
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
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
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
                const categories = item.getAttribute('data-category').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
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
    
    if (lightbox) {
        // Open lightbox for images
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', function() {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                lightboxImg.style.display = 'block';
                lightboxVideo.style.display = 'none';
            });
        });
        
        // Close lightbox
        closeLightbox.addEventListener('click', function() {
            lightbox.style.display = 'none';
            if (lightboxVideo) lightboxVideo.pause();
        });
        
        // Close when clicking outside content
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                if (lightboxVideo) lightboxVideo.pause();
            }
        });
    }
    
    // Update copyright year
    const yearElement = document.querySelector('.year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Populate skills cloud - Updated skills
    const skillsCloud = document.querySelector('.skills-cloud');
    const skills = [
        'Documentary Filmmaking', 'Cultural Preservation', 'Social Justice', 'Storytelling',
        'Photography', 'Videography', 'Color Grading', 'Sound Design', 
        'Framing & Composition', 'Lighting Design', 'Video Editing', 'Sequencing',
        'Narrative Development', 'Adobe Creative Suite', 'Digital Marketing',
        'Arabic Language', 'Cross-Cultural Communication', 'Activism'
    ];
    
    if (skillsCloud) {
        skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.classList.add('skill-tag');
            skillTag.textContent = skill;
            skillsCloud.appendChild(skillTag);
        });
    }
    
    // Populate experience accordion - Updated experiences
    const experienceAccordion = document.querySelector('.experience-accordion');
    const experiences = [
        {
            title: 'Marketing Intern',
            location: 'Genesee Valley Council for the Arts, Rochester, New York',
            description: 'Creating design posters and shooting short reel videos to promote events throughout the year. Developing social media marketing strategies and visual content for cultural events and art exhibitions.'
        },
        {
            title: 'Publicity Chair',
            location: 'University of Rochester Film Club',
            description: 'Marketing club events and participating in student film shoots as Gaffer, Art Team, Production Assistant, Boom Operator, and Grip. Organized promotional campaigns and managed social media presence for film screenings and events.'
        },
        {
            title: 'Lighting Designer',
            location: 'School Theater Productions',
            description: 'Operated lighting board for school plays and developed understanding of color theory that now informs color grading decisions in film projects. Collaborated with directors to create atmospheric lighting that enhanced narrative storytelling.'
        }
    ];
    
    if (experienceAccordion) {
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
    }
    
    // Updated Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.classList.add('loading');
            
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                message: this.querySelector('#message').value
            };

            try {
                const response = await fetch(`${API_BASE}/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                
                if (result.success) {
                    showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
                    this.reset();
                } else {
                    showFormMessage('There was an error sending your message. Please try again.', 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                showFormMessage('There was an error sending your message. Please try again.', 'error');
            } finally {
                // Reset button
                submitButton.textContent = originalText;
                submitButton.classList.remove('loading');
            }
        });
    }

    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('.timeline-content, .highlight-item, .experience-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize project functionality
    initializeProjectButtons();
});

// Initialize project explore buttons
function initializeProjectButtons() {
    // Add event listeners to all explore buttons
    document.querySelectorAll('.explore-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            if (projects[projectId]) {
                showProjectDetail(projects[projectId]);
            }
        });
    });
}

// Show project detail modal
function showProjectDetail(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    `;

    // Build images HTML if project has images
    let imagesHTML = '';
    if (project.images && project.images.length > 0) {
        imagesHTML = `
            <div class="project-gallery" style="margin: 2rem 0;">
                <h4 style="color: var(--arab-green); margin-bottom: 1rem;">Project Images</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${project.images.map(img => `
                        <img src="${img}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 5px; cursor: pointer;" onclick="showImageDetail('${img}', '${project.title}')">
                    `).join('')}
                </div>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="project-modal-content" style="
            background: var(--beige);
            padding: 2rem;
            border-radius: 10px;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        ">
            <button class="close-modal" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: var(--arab-red);
                color: white;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
            ">×</button>
            
            <h2 style="color: var(--arab-green); margin-bottom: 1rem;">${project.title}</h2>
            <div class="project-detail-content">
                ${project.fullDescription || project.description}
            </div>
            
            ${imagesHTML}
            
            ${project.link ? `
                <a href="${project.link}" target="_blank" class="project-link" style="
                    display: inline-block;
                    padding: 0.8rem 2rem;
                    background: var(--arab-red);
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 1rem;
                ">View Project</a>
            ` : ''}
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal handlers
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Enhanced image detail view
function showImageDetail(src, caption) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    `;

    modal.innerHTML = `
        <div class="image-modal-content" style="max-width: 90vw; max-height: 90vh; position: relative;">
            <button class="close-modal" style="
                position: absolute;
                top: -40px;
                right: 0;
                background: var(--arab-red);
                color: white;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
                z-index: 2001;
            ">×</button>
            <img src="${src}" style="max-width: 100%; max-height: 80vh; object-fit: contain;">
            ${caption ? `<div style="color: white; text-align: center; margin-top: 1rem;">${caption}</div>` : ''}
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}