// Contact form API URL - Update this to your deployed backend URL
const API_BASE = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/api' 
    : 'https://your-backend-url.herokuapp.com/api'; // Update with your deployed backend URL

// Project data for detail pages
const projects = {
    'silenced-voices': {
        title: 'Silenced Voices: Censorship & Resilience',
        description: 'An interactive experience and silent short film exploring the hardships journalists face during wartime and how censorship affects their work.',
        fullDescription: `
            <div class="project-detail-content">
                <p>This project is a powerful exploration of censorship and resilience in conflict zones. Through an interactive web experience and a silent short film, I aimed to highlight the challenges faced by journalists and activists in Palestine.</p>
                
                <h4>Project Overview</h4>
                <p>Silenced Voices combines digital storytelling with traditional documentary techniques to create an immersive experience that highlights the impact of censorship on Palestinian communities and the spirit of Sumud (resilience) that fights against oppression.</p>
                
                <h4>Key Features:</h4>
                <ul>
                    <li>Interactive storytelling experience using web technologies</li>
                    <li>Silent film metaphor for censorship and oppression</li>
                    <li>Cultural preservation through digital media</li>
                    <li>Social justice advocacy and awareness</li>
                    <li>Multi-platform presentation (web, exhibition, film)</li>
                </ul>
                
                <h4>Technical Implementation:</h4>
                <p>Built using HTML5, CSS3, and JavaScript for the interactive elements. The film was shot using professional equipment (C90 camera) and edited with Adobe Premiere Pro. Photography series captured using DSLR with careful attention to composition and metaphor.</p>
                
                <h4>Creative Process:</h4>
                <p>The project evolved from initial research into censorship patterns in conflict zones. I conducted interviews with affected individuals, developed metaphorical visual language, and created a narrative that could communicate complex issues without explicit dialogue.</p>
                
                <h4>Impact & Recognition:</h4>
                <p>The project has been featured in university exhibitions and has sparked important conversations about freedom of speech and cultural preservation. It has been recognized for its innovative approach to documentary storytelling and its powerful social commentary.</p>
                
                <h4>Technologies Used:</h4>
                <div class="project-meta">
                    <span class="meta-tag">HTML5/CSS3/JavaScript</span>
                    <span class="meta-tag">Adobe Premiere Pro</span>
                    <span class="meta-tag">DSLR Photography</span>
                    <span class="meta-tag">C90 Camera</span>
                    <span class="meta-tag">Interactive Storytelling</span>
                </div>
            </div>
        `,
        images: [
            'assets/images/Photography/Silenced-voices-photos/elmadani_1.jpg',
            'assets/images/Photography/Silenced-voices-photos/elmadani_2.jpg',
            'assets/images/Photography/Silenced-voices-photos/elmadani_3.jpg',
            'assets/images/Photography/Silenced-voices-photos/elmadani_4.jpg',
            'assets/images/Photography/Silenced-voices-photos/elmadani_5.jpg'
        ],
        video: 'assets/videos/Stains.mp4',
        links: [
            { text: 'Interactive Experience', url: 'https://zeinamadani.itch.io/silenced-voices' },
            { text: 'View Gallery', url: '#work' }
        ]
    },
    'ezpark': {
        title: 'EZPark Website Design',
        description: 'UX/UI design for a campus parking app solution.',
        fullDescription: `
            <div class="project-detail-content">
                <p>EZPark is an innovative app concept designed to solve campus parking challenges by providing real-time information about available parking spots.</p>
                
                <h4>Project Overview</h4>
                <p>As the lead UX/UI designer, I was responsible for creating an intuitive and accessible website design that would serve as the primary interface for the EZPark application.</p>
                
                <h4>Design Challenges:</h4>
                <ul>
                    <li>Reducing time students spend looking for parking</li>
                    <li>Minimizing traffic congestion around campus</li>
                    <li>Creating an accessible interface for all users</li>
                    <li>Providing real-time parking availability data</li>
                </ul>
                
                <h4>My Contribution:</h4>
                <p>I led the website design process, focusing on user experience and accessibility. This included user research, wireframing, prototyping, and creating the final UI design using Figma.</p>
                
                <h4>Key Features Designed:</h4>
                <ul>
                    <li>Real-time parking availability map</li>
                    <li>User-friendly navigation system</li>
                    <li>Accessibility-focused interface design</li>
                    <li>Responsive design for all devices</li>
                    <li>Clear information hierarchy</li>
                </ul>
                
                <h4>Design Process:</h4>
                <p>The design process involved multiple iterations based on user feedback. I conducted usability testing with students to ensure the interface met their needs and was intuitive to use.</p>
                
                <h4>Technologies Used:</h4>
                <div class="project-meta">
                    <span class="meta-tag">Figma</span>
                    <span class="meta-tag">UX Research</span>
                    <span class="meta-tag">UI Design</span>
                    <span class="meta-tag">Prototyping</span>
                    <span class="meta-tag">Accessibility</span>
                </div>
            </div>
        `,
        images: [],
        links: [
            { text: 'View Prototype', url: 'https://embed.figma.com/proto/HFLnf9BFMisFcZJ9EheHH9/EZPark-Website--Copy-?node-id=5-4&starting-point-node-id=5%3A4&embed-host=share' }
        ]
    },
    'subject-seasons': {
        title: 'Subject vs Seasons',
        description: 'A photographic exploration of how individuals react to and interact with different seasonal environments.',
        fullDescription: `
            <div class="project-detail-content">
                <p>This photography series explores the relationship between human subjects and their seasonal environments, capturing the emotional and psychological impact of changing surroundings.</p>
                
                <h4>Project Concept</h4>
                <p>Subject vs Seasons is an ongoing photographic study that examines how individuals' essence and aura are influenced by different seasonal contexts. The project aims to make viewers feel the emotional impact each season evokes through carefully composed environmental portraiture.</p>
                
                <h4>Artistic Approach:</h4>
                <ul>
                    <li>Environmental portraiture focusing on seasonal transitions</li>
                    <li>Study of emotional responses to changing environments</li>
                    <li>Exploration of geometric patterns and psychological impact</li>
                    <li>Narrative storytelling through still imagery</li>
                </ul>
                
                <h4>Technical Execution:</h4>
                <p>All photographs were captured using professional DSLR equipment with careful attention to lighting, composition, and color theory. Each session was planned according to seasonal conditions and natural light availability.</p>
                
                <h4>Series Composition:</h4>
                <p>The series includes multiple subjects across different seasonal environments, with each photograph telling a unique story about the interaction between person and place. The sequencing creates a narrative arc that explores adaptation, transformation, and the human connection to natural cycles.</p>
                
                <h4>Exhibition & Recognition:</h4>
                <p>Selected works from this series have been featured in university art exhibitions and have received recognition for their innovative approach to environmental portraiture and seasonal storytelling.</p>
                
                <h4>Techniques Used:</h4>
                <div class="project-meta">
                    <span class="meta-tag">Environmental Portraiture</span>
                    <span class="meta-tag">Seasonal Photography</span>
                    <span class="meta-tag">Color Theory</span>
                    <span class="meta-tag">Composition</span>
                    <span class="meta-tag">Natural Light</span>
                </div>
            </div>
        `,
        images: [
            'assets/images/Photography/mesmerization/Pau1.jpg',
            'assets/images/Photography/mesmerization/pau2.jpg',
            'assets/images/Photography/mesmerization/pau3.jpg',
            'assets/images/Photography/mesmerization/pau4.jpg',
            'assets/images/Photography/mesmerization/pau5.jpg'
        ],
        links: [
            { text: 'View Full Gallery', url: '#work' }
        ]
    },
    'beach-day': {
        title: 'Beach Day Photography Series',
        description: 'Coastal documentation capturing moments of serenity and natural beauty.',
        fullDescription: `
            <div class="project-detail-content">
                <p>This photography series captures the serene beauty of coastal environments, focusing on natural patterns, textures, and the interplay of light and water.</p>
                
                <h4>Project Focus</h4>
                <p>The Beach Day series is a meditation on coastal landscapes, documenting the subtle beauty of beach environments through careful observation of natural patterns, water reflections, and atmospheric conditions.</p>
                
                <h4>Artistic Elements:</h4>
                <ul>
                    <li>Study of wave patterns and water textures</li>
                    <li>Exploration of natural light on coastal landscapes</li>
                    <li>Documentation of sand patterns and formations</li>
                    <li>Capture of horizon lines and spatial relationships</li>
                </ul>
                
                <h4>Technical Approach:</h4>
                <p>Using natural light and careful composition, this series explores the minimalist beauty of beach environments. Each photograph is timed to capture specific lighting conditions and tidal patterns.</p>
                
                <h4>Series Themes:</h4>
                <p>The collection moves from intimate details of sand and water to expansive coastal views, creating a comprehensive documentation of beach environments and their ever-changing nature.</p>
            </div>
        `,
        images: [
            'assets/images/Photography/Beach-photos/beach1.JPG',
            'assets/images/Photography/Beach-photos/beach2.JPG',
            'assets/images/Photography/Beach-photos/beach3.JPG',
            'assets/images/Photography/Beach-photos/beach4.JPG',
            'assets/images/Photography/Beach-photos/beach5.JPG'
        ],
        links: [
            { text: 'View Gallery', url: '#work' }
        ]
    },
    'graphic-design': {
        title: 'Activism Through Design',
        description: 'Graphic design pieces supporting cultural preservation and awareness.',
        fullDescription: `
            <div class="project-detail-content">
                <p>This collection of graphic design work focuses on using visual communication to support social justice causes, cultural preservation, and awareness campaigns.</p>
                
                <h4>Design Philosophy</h4>
                <p>I believe graphic design should serve a purpose beyond aesthetics. My work in this area focuses on creating visual communications that educate, inspire action, and support important social and cultural causes.</p>
                
                <h4>Project Areas:</h4>
                <ul>
                    <li>Social justice awareness campaigns</li>
                    <li>Cultural preservation initiatives</li>
                    <li>Educational materials for activism</li>
                    <li>Visual storytelling for non-profit organizations</li>
                </ul>
                
                <h4>Design Approach:</h4>
                <p>Each design is created with careful consideration of color theory, typography, and visual hierarchy to effectively communicate complex messages and inspire emotional responses.</p>
                
                <h4>Impact:</h4>
                <p>These designs have been used in university campaigns, cultural events, and awareness initiatives, helping to communicate important messages and mobilize communities around social justice causes.</p>
            </div>
        `,
        images: [
            'assets/images/Graphic-design/Silenced-voices.jpg'
        ],
        links: []
    },
    'sumud-video': {
        title: 'Sumud: Censorship - A Short Experimental Film',
        description: 'A metaphorical exploration of censorship and oppression through experimental filmmaking.',
        fullDescription: `
            <div class="project-detail-content">
                <p>This experimental short film uses the destruction of a pomegranate as a powerful metaphor for the censorship and oppression faced by Palestinian communities and pro-Palestine activists.</p>
                
                <h4>Conceptual Framework</h4>
                <p>The film emerged as a response to the censorship and suppression of voices speaking out against injustice. Using minimalistic, black-and-white cinematography, it creates a visceral experience that communicates the emotional weight of censorship without explicit dialogue.</p>
                
                <h4>Artistic Approach:</h4>
                <ul>
                    <li>Metaphorical storytelling through object destruction</li>
                    <li>Black and white cinematography for emotional intensity</li>
                    <li>Silent film format to emphasize the theme of silencing</li>
                    <li>Experimental sequencing to create tension and release</li>
                </ul>
                
                <h4>Technical Execution:</h4>
                <p>Shot using a C90 camera with careful attention to lighting and composition. The editing process focused on creating rhythmic sequences that build emotional tension, using the destruction of the pomegranate as a central visual metaphor.</p>
                
                <h4>Symbolism:</h4>
                <p>The pomegranate represents Palestinian culture and resilience, while its systematic destruction symbolizes the various forms of censorship and oppression faced by the community. The absence of dialogue reinforces the theme of silenced voices.</p>
                
                <h4>Reception:</h4>
                <p>Viewers have described the film as "viscerally powerful" and "emotionally resonant," with many noting how effectively it communicates complex political themes through simple, powerful imagery.</p>
            </div>
        `,
        images: [],
        video: 'assets/videos/Stains.mp4',
        links: []
    }
};

// Gallery data
const galleryItems = [
    // Silenced Voices Photography
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_1.jpg', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Silenced Voices #1',
        description: 'Metaphorical representation of censorship and oppression in Palestinian communities'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_2.jpg', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Silenced Voices #2',
        description: 'Exploring themes of resistance and resilience through visual storytelling'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_3.jpg', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Silenced Voices #3',
        description: 'Contrast between visibility and invisibility in oppressed communities'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_4.jpg', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Cultural Resistance',
        description: 'Documenting the spirit of Sumud - resilience against oppression'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_5.jpg', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Narrative Preservation',
        description: 'Using photography to ensure stories are not forgotten or silenced'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_edited.gif', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Animated Expression',
        description: 'Dynamic representation of the struggle against silencing'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_still.gif', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Frozen Moment',
        description: 'Capturing the tension between movement and stillness'
    },
    { 
        src: 'assets/images/Photography/Silenced-voices-photos/elmadani_video.gif', 
        alt: 'Sumud Photography', 
        categories: ['photography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Video Still',
        description: 'Frame from the moving image series on censorship'
    },

    // Subject vs Seasons Project
    { 
        src: 'assets/images/Photography/mesmerization/Pau1.jpg', 
        alt: 'Subject vs Seasons', 
        categories: ['photography'], 
        project: 'subject-seasons',
        title: 'Subject vs Seasons #1',
        description: 'Exploring human interaction with different seasonal environments'
    },
    { 
        src: 'assets/images/Photography/mesmerization/pau2.jpg', 
        alt: 'Subject vs Seasons', 
        categories: ['photography'], 
        project: 'subject-seasons',
        title: 'Subject vs Seasons #2',
        description: 'Capturing the essence and aura of individuals in seasonal contexts'
    },
    { 
        src: 'assets/images/Photography/mesmerization/pau3.jpg', 
        alt: 'Subject vs Seasons', 
        categories: ['photography'], 
        project: 'subject-seasons',
        title: 'Subject vs Seasons #3',
        description: 'Study of emotional responses to changing environments'
    },
    { 
        src: 'assets/images/Photography/mesmerization/pau4.jpg', 
        alt: 'Subject vs Seasons', 
        categories: ['photography'], 
        project: 'subject-seasons',
        title: 'Subject vs Seasons #4',
        description: 'Geometric patterns and their psychological impact'
    },
    { 
        src: 'assets/images/Photography/mesmerization/pau5.jpg', 
        alt: 'Subject vs Seasons', 
        categories: ['photography'], 
        project: 'subject-seasons',
        title: 'Subject vs Seasons #5',
        description: 'Final composition in the seasonal exploration series'
    },

    // Beach Day Photography
    { 
        src: 'assets/images/Photography/Beach-photos/beach1.JPG', 
        alt: 'Beach Day Photography', 
        categories: ['photography'], 
        project: 'beach-day',
        title: 'Coastal Documentation',
        description: 'Capturing moments of serenity and natural beauty'
    },
    { 
        src: 'assets/images/Photography/Beach-photos/beach2.JPG', 
        alt: 'Beach Day Photography', 
        categories: ['photography'], 
        project: 'beach-day',
        title: 'Beach Day #2',
        description: 'Waves and textures in natural light'
    },
    { 
        src: 'assets/images/Photography/Beach-photos/beach3.JPG', 
        alt: 'Beach Day Photography', 
        categories: ['photography'], 
        project: 'beach-day',
        title: 'Beach Day #3',
        description: 'Coastal landscape and horizon study'
    },
    { 
        src: 'assets/images/Photography/Beach-photos/beach4.JPG', 
        alt: 'Beach Day Photography', 
        categories: ['photography'], 
        project: 'beach-day',
        title: 'Beach Day #4',
        description: 'Sand patterns and natural formations'
    },
    { 
        src: 'assets/images/Photography/Beach-photos/beach5.JPG', 
        alt: 'Beach Day Photography', 
        categories: ['photography'], 
        project: 'beach-day',
        title: 'Beach Day #5',
        description: 'Water reflections and color palettes'
    },

    // Videography
    { 
        src: 'assets/videos/Stains.mp4', 
        alt: 'Silent Short Film: Censorship', 
        categories: ['videography', 'documentary'], 
        project: 'silenced-voices',
        title: 'Silent Short Film: Censorship',
        description: 'Metaphorical exploration of oppression and censorship affecting Palestinian communities',
        isVideo: true
    },
    
    // Graphic Design
    { 
        src: 'assets/images/Graphic-design/Silenced-voices.jpg', 
        alt: 'Graphic Design Project', 
        categories: ['design'], 
        project: 'graphic-design',
        title: 'Activism Through Design',
        description: 'Graphic design pieces supporting cultural preservation and awareness'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeLoader();
    initializeNavigation();
    initializeTypingEffect();
    initializeGallery();
    initializeProjects();
    initializeResume();
    initializeContactForm();
    initializeProjectDetails();
    initializeBackToTop();
    
    // Update copyright year
    updateCopyrightYear();
});

function initializeLoader() {
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
}

function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Navigation toggle for mobile
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
}

function initializeTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
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
}

function initializeGallery() {
    const workGallery = document.querySelector('.work-gallery');
    if (!workGallery) return;
    
    // Populate gallery items
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', item.categories.join(' '));
        galleryItem.setAttribute('data-project', item.project);
        
        if (item.isVideo) {
            galleryItem.innerHTML = `
                <video class="gallery-video" controls>
                    <source src="${item.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="gallery-item-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button class="view-details-btn">View Details</button>
                </div>
            `;
        } else {
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}">
                <div class="gallery-item-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button class="view-details-btn">View Details</button>
                </div>
            `;
        }
        
        workGallery.appendChild(galleryItem);
    });
    
    // Initialize filter functionality
    initializeGalleryFilter();
    initializeLightbox();
}

function initializeGalleryFilter() {
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
}

function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    if (!lightbox) return;
    
    // Open lightbox for images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            lightbox.style.display = 'flex';
            lightboxImg.src = this.src;
            lightboxImg.style.display = 'block';
            lightboxVideo.style.display = 'none';
        });
    });
    
    // Open lightbox for videos
    document.querySelectorAll('.gallery-item video').forEach(video => {
        video.addEventListener('click', function(e) {
            e.stopPropagation();
            lightbox.style.display = 'flex';
            const source = this.querySelector('source');
            if (source) {
                lightboxVideo.src = source.src;
            }
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
}

function initializeProjects() {
    const projectsContainer = document.querySelector('.projects-container');
    if (!projectsContainer) return;
    
    const featuredProjects = [
        {
            id: 'silenced-voices',
            title: 'Silenced Voices: Censorship & Resilience',
            description: 'An interactive experience and silent short film exploring the hardships journalists face during wartime and how censorship affects their work. This project uses metaphor to highlight the impact of censorship on Palestinian communities and the spirit of Sumud (resilience) that fights against oppression.',
            embed: 'silenced-voices/game-embed.html',
            tags: ['Documentary', 'Interactive Story', 'Social Justice', 'Cultural Preservation'],
            link: 'https://zeinamadani.itch.io/silenced-voices'
        },
        {
            id: 'ezpark',
            title: 'EZPark Website Design',
            description: 'EZPark is an app idea aiming to inform users regarding different open parking spots on campus which can allow students to decrease time looking for open spots on campus and also help to reduce traffic congestion. My contribution to the project was the Website design, focusing on user experience and accessibility.',
            embed: 'https://embed.figma.com/proto/HFLnf9BFMisFcZJ9EheHH9/EZPark-Website--Copy-?node-id=5-4&starting-point-node-id=5%3A4&embed-host=share',
            tags: ['Website Design', 'UX/UI', 'Accessibility'],
            link: 'https://embed.figma.com/proto/HFLnf9BFMisFcZJ9EheHH9/EZPark-Website--Copy-?node-id=5-4&starting-point-node-id=5%3A4&embed-host=share'
        },
        {
            id: 'subject-seasons',
            title: 'Subject vs Seasons',
            description: 'A photographic exploration of how individuals react to and interact with different seasonal environments. This project captures the essence and aura of people within their surroundings, making viewers feel the emotional impact each season evokes. Through this series, I explored narrative storytelling through still imagery and environmental portraiture.',
            tags: ['Photography', 'Environmental Portraiture', 'Storytelling'],
            link: '#work'
        }
    ];
    
    featuredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.id = project.id;
        projectCard.setAttribute('data-project', project.id);
        
        projectCard.innerHTML = `
            <div class="project-media">
                ${project.embed ? 
                    `<iframe src="${project.embed}" frameborder="0" class="game-embed"></iframe>` :
                    `<div class="project-placeholder">
                        <h4>${project.title}</h4>
                        <p>${project.tags[0]} Series</p>
                    </div>`
                }
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    ${project.tags.map(tag => `<span class="meta-tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" ${project.link.startsWith('http') ? 'target="_blank"' : ''}>
                    ${project.id === 'subject-seasons' ? 'View Gallery' : 'Explore Project'}
                </a>
                <button class="project-details-btn">View Project Details</button>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

function initializeResume() {
    populateSkills();
    populateExperience();
}

function populateSkills() {
    const skillsCloud = document.querySelector('.skills-cloud');
    if (!skillsCloud) return;
    
    const skills = [
        'Documentary Filmmaking', 'Cultural Preservation', 'Social Justice', 'Storytelling',
        'Photography', 'Videography', 'Color Grading', 'Sound Design', 
        'Framing & Composition', 'Lighting Design', 'Video Editing', 'Sequencing',
        'Narrative Development', 'Adobe Creative Suite', 'Digital Marketing',
        'Arabic Language', 'Cross-Cultural Communication', 'Activism'
    ];
    
    skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.classList.add('skill-tag');
        skillTag.textContent = skill;
        skillsCloud.appendChild(skillTag);
    });
}

function populateExperience() {
    const experienceAccordion = document.querySelector('.experience-accordion');
    if (!experienceAccordion) return;
    
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
    
    // Initialize accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (!contactForm) return;

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
}

function initializeProjectDetails() {
    const projectModal = document.getElementById('project-modal');
    const projectModalBody = document.getElementById('project-modal-body');
    const closeModal = document.querySelector('.close-modal');

    // Close modal function
    function closeProjectModal() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Open modal function
    function openProjectModal(projectId) {
        const project = projects[projectId];
        if (!project) return;

        // Create modal content
        projectModalBody.innerHTML = `
            <h2 style="color: var(--arab-green); margin-bottom: 1rem; font-family: 'Playfair Display', serif;">${project.title}</h2>
            ${project.fullDescription}
            
            ${project.images.length > 0 ? `
                <div class="project-gallery">
                    <h4 style="color: var(--arab-green); margin: 2rem 0 1rem 0; font-family: 'Playfair Display', serif;">Project Gallery</h4>
                    ${project.images.map(img => `
                        <img src="${img}" alt="${project.title}" style="width: 100%; margin: 1rem 0; border-radius: 5px; box-shadow: var(--shadow-md); cursor: pointer;" onclick="openImageModal('${img}')">
                    `).join('')}
                </div>
            ` : ''}
            
            ${project.video ? `
                <div class="project-video">
                    <h4 style="color: var(--arab-green); margin: 2rem 0 1rem 0; font-family: 'Playfair Display', serif;">Project Video</h4>
                    <video controls style="width: 100%; border-radius: 5px; box-shadow: var(--shadow-md);">
                        <source src="${project.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            ` : ''}
            
            ${project.links.length > 0 ? `
                <div class="project-links">
                    <h4 style="color: var(--arab-green); margin: 2rem 0 1rem 0; font-family: 'Playfair Display', serif;">Project Links</h4>
                    ${project.links.map(link => `
                        <a href="${link.url}" class="project-link" ${link.url.startsWith('http') ? 'target="_blank"' : ''}>${link.text}</a>
                    `).join('')}
                </div>
            ` : ''}
        `;

        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Event listeners for project detail buttons
    document.addEventListener('click', function(e) {
        // Project card detail buttons
        if (e.target.classList.contains('project-details-btn')) {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                const projectId = projectCard.getAttribute('data-project') || projectCard.id;
                openProjectModal(projectId);
            }
        }

        // Gallery item detail buttons
        if (e.target.classList.contains('view-details-btn')) {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const projectId = galleryItem.getAttribute('data-project');
                openProjectModal(projectId);
            }
        }

        // Sumud video placeholder
        if (e.target.closest('.sumud-video-placeholder')) {
            openProjectModal('sumud-video');
        }

        // Close modal when clicking close button
        if (e.target.classList.contains('close-modal')) {
            closeProjectModal();
        }

        // Close modal when clicking outside content
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'flex') {
            closeProjectModal();
        }
    });
}

// Image modal functionality
function openImageModal(src) {
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
            <img src="${src}" style="max-width: 100%; max-height: 80vh; object-fit: contain; border-radius: 5px;">
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

function initializeBackToTop() {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    backToTop.title = 'Back to Top';
    
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function updateCopyrightYear() {
    const yearElement = document.querySelector('.year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}