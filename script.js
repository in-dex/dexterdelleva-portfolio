// Project Gallery and Modal Functionality
function initProjectModals() {
    // Project data with image paths and video URLs
    window.projectsData = {
        quizscan: {
            title: "QuizScan - .NET MAUI Mobile App",
            category: "Mobile App",
            images: [
                "projects/quizscan/ss1.jpg",
                "projects/quizscan/ss2.jpg",
                "projects/quizscan/ss3.jpg",
                "projects/quizscan/ss4.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/YOUR_QUIZSCAN_VIDEO_ID/preview"
            ],
            description: "A modern cross-platform mobile application built with .NET MAUI for automated quiz grading. Faculty can create quizzes, students can submit via photo capture, and the app uses OCR and AI to automatically grade responses.",
            features: [
                "Cross-platform (Android, Windows)",
                "OCR-based answer recognition",
                "Real-time grading",
                "Gradebook synchronization",
                "Offline mode support"
            ],
            technologies: [".NET MAUI", "C#", "Google Cloud Vision", "SQLite/Firebase", "MVVM Pattern", "XAML"],
            links: [
                { type: "github", url: "#", text: "View Code" },
                { type: "demo", url: "#", text: "Live Demo" }
            ]
        },
        sportsevents: {
            title: "Sports Events Management App",
            category: "Mobile & Desktop App",
            images: [
                "projects/sportsevents/ss1.jpg",
                "projects/sportsevents/ss2.jpg",
                "projects/sportsevents/ss3.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/YOUR_VIDEO_ID_3/preview"
            ],
            description: "A two way app where the sports admin can create, schedule and record sports event using the desktop app while the sports coordinators can request and users can view events using the mobile app.",
            features: [
                "Admin dashboard for event management",
                "Mobile app for coordinators and users",
                "Real-time event updates",
                "Participant registration system",
                "Schedule and venue management"
            ],
            technologies: ["WinUI 3", ".NET MAUI", "Adobe Photoshop", "Visual Studio 2022", "SQLite/Firebase", ".NET", "SQL Server"],
            links: [
                { type: "github", url: "#", text: "View Code" }
            ]
        },
        iconicquest: {
            title: "Iconic Quest - Mobile Game App",
            category: "Mobile Game",
            images: [
                "projects/iconicquest/ss1.jpg",
                "projects/iconicquest/ss2.jpg",
                "projects/iconicquest/ss3.jpg",
                "projects/iconicquest/ss4.jpg",
                "projects/iconicquest/ss5.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/1vALpgZ5ep7FM48gbIsnl_5OHwKCMPyet/preview"
            ],
            description: "A game-based learning on English education where the player can improve their English speech skills by offering engaging game play, using symbols and icons to determine the correct answers.",
            features: [
                "Educational game mechanics",
                "Speech recognition integration",
                "Progress tracking",
                "Multiple difficulty levels",
                "Engaging visual design"
            ],
            technologies: ["Adobe Photoshop", "Visual Code", "Unity", "C#"],
            links: [
                { type: "playstore", url: "#", text: "Play Store" },
                { type: "demo", url: "#", text: "Game Demo" }
            ]
        },
        damathify: {
            title: "Damathify - Mobile Game App",
            category: "Mobile Game",
            images: [
                "projects/damathify/ss1.jpg",
                "projects/damathify/ss2.jpg",
                "projects/damathify/ss3.jpg",
                "projects/damathify/ss4.jpg",
                "projects/damathify/ss5.jpg",
                "projects/damathify/ss6.jpg",
                "projects/damathify/ss7.jpg",
                "projects/damathify/ss8.jpg",
                "projects/damathify/ss9.jpg",
                "projects/damathify/ss10.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/1ZxnBgJ5IDs74W19EDJTPSWro8y4RyfNy/preview"
            ],
            description: "A game-based learning in the form of a Filipino Checkers board game called Dama with math problems to be solved. Offers an online multiplayer mode to compete and play with friends.",
            features: [
                "Traditional Dama gameplay with math integration",
                "Online multiplayer mode",
                "Single player vs AI",
                "Math difficulty progression",
                "Leaderboard system"
            ],
            technologies: ["Adobe Photoshop", "Visual Code", "Unity", "PUN", "C#"],
            links: [
                { type: "playstore", url: "#", text: "Play Store" },
                { type: "github", url: "#", text: "View Code" }
            ]
        },
        digitalmuseum: {
            title: "Digital Museum - Thesis Project",
            category: "Web System / Desktop",
            images: [
                "projects/digitalmuseum/ss1.jpg",
                "projects/digitalmuseum/ss2.jpg",
                "projects/digitalmuseum/ss3.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/YOUR_VIDEO_ID_6/preview"
            ],
            description: "A digital platform for showcasing artifacts and historical items in an interactive, virtual museum environment. Developed as part of my BS Information Technology thesis.",
            features: [
                "Virtual 3D museum tours",
                "Interactive artifact displays",
                "Educational content system",
                "Admin panel for content management",
                "Search and filter functionality"
            ],
            technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Three.js"],
            links: [
                { type: "github", url: "#", text: "View Code" },
                { type: "demo", url: "#", text: "Live Demo" }
            ]
        },
        cipherquest: {
            title: "Cipher Quest - 2D Educational Game",
            category: "Mobile Game",
            images: [
                "projects/cipherquest/ss1.jpg",
                "projects/cipherquest/ss2.jpg",
                "projects/cipherquest/ss3.jpg",
                "projects/cipherquest/ss4.jpg",
                "projects/cipherquest/ss5.jpg",
                "projects/cipherquest/ss6.jpg",
                "projects/cipherquest/ss7.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/1JnR94o_n7c8nicWoOxSgAcHwvkm_xc1O/preview"
            ],
            description: "Cipher Quest is a 2D educational mobile game built with Unity that teaches players about cryptography through engaging gameplay. Players solve increasingly complex cipher challenges (Caesar, Vigenère, Substitution, etc.) to progress through an adventure story.",
            features: [
                "Learn cryptography through gameplay",
                "Multiple cipher types with increasing difficulty",
                "Engaging storyline with educational content",
                "Progress tracking and achievements",
                "Hint system for challenging puzzles"
            ],
            technologies: ["Unity", "C#", "2D Sprite Animation", "Unity UI", "PlayerPrefs", "Scriptable Objects"],
            links: [
                { type: "google-play", url: "#", text: "Play Store" },
                { type: "github", url: "#", text: "View Code" }
            ]
        },
        foodsubay: {
            title: "FoodSubay - Food Subscription App",
            category: "Mobile App",
            images: [
                "projects/foodsubay/ss1.jpg",
                "projects/foodsubay/ss2.jpg",
                "projects/foodsubay/ss3.jpg",
                "projects/foodsubay/ss4.jpg",
                "projects/foodsubay/ss5.jpg",
                "projects/foodsubay/ss6.jpg",
                "projects/foodsubay/ss7.jpg",
                "projects/foodsubay/ss8.jpg",
                "projects/foodsubay/ss9.jpg",
                "projects/foodsubay/ss10.jpg",
                "projects/foodsubay/ss11.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/1-eaOP9vhVoLeJsZschWo_l9mD1U8ltLb/preview",
                "https://drive.google.com/file/d/1YCGcqVLLMZJzcktePWK_wySYI-mlr3JT/preview",
                "https://drive.google.com/file/d/12OfeJ8Q2X2GvjUkEP8v-p203AYrRdRuK/preview"
            ],
            description: "A complete food subscription management app built with Visual Studio Blazor MAUI Hybrid. Users can subscribe to meal plans, manage deliveries, track nutrition, and make payments all in one platform.",
            features: [
                "Meal plan subscription management",
                "Delivery tracking with real-time updates",
                "Nutrition tracking and meal customization",
                "Payment processing with Stripe integration",
                "Push notifications for delivery updates"
            ],
            technologies: ["Blazor MAUI", ".NET 8", "Stripe API", "Google Maps API", "SQLite", "Push Notifications"],
            links: [
                { type: "google-play", url: "#", text: "Play Store" },
                { type: "github", url: "#", text: "View Code" }
            ]
        },
        freecpos: {
            title: "Free Community POS - Complete Business Suite",
            category: "Mobile Business App",
            images: [
                "projects/freecpos/ss1.png",
                "projects/freecpos/ss2.png",
                "projects/freecpos/ss3.png",
                "projects/freecpos/ss4.png",
                "projects/freecpos/ss5.png",
                "projects/freecpos/ss6.png"
            ],
            videos: [
                "https://drive.google.com/file/d/1GTwazx6CWkRtt_Un3VHM0nNxENInVnDw/preview"
            ],
            description: "A completely free Point of Sale system designed for small businesses. The complete suite includes inventory management, sales tracking, customer management, analytics, reporting, and all essential business tools - completely free forever.",
            features: [
                "Complete inventory management with batch updates",
                "Real-time sales dashboard and ML.net powered sales trend and analytics",
                "Customer relationship management",
                "Debt and credit tracking",
                "Product audit trail with change history",
                "Automatic database backups",
                "Multi-shop support",
                "Discount and promotion management"
            ],
            technologies: [".NET MAUI", "Blazor Hybrid", "SQLite", "Chart.js", "PDF Generation", "Local Storage"],
            links: [
                { type: "google-play", url: "#", text: "Play Store" },
                { type: "github", url: "#", text: "Open Source" }
            ]
        },
        corporatehousing: {
            title: "716 Corporate Housing - Modern Business Website",
            category: "Website Demo",
            images: [
                "projects/716corporatehousing/ss1.png",
                "projects/716corporatehousing/ss2.png",
                "projects/716corporatehousing/ss3.png",
                "projects/716corporatehousing/ss4.png",
                "projects/716corporatehousing/ss5.png",
                "projects/716corporatehousing/ss6.png"
            ],
            videos: [
                "https://drive.google.com/file/d/YOUR_CORPORATE_VIDEO_ID/preview"
            ],
            description: "A modern, responsive website demo for a corporate housing business. Features property listings, booking system, Google Reviews integration, content management, and admin dashboard for property management.",
            features: [
                "Modern, responsive design for all devices",
                "Google Reviews integration and management",
                "Property listing with filtering and search",
                "Online booking and inquiry system",
                "Content management system for easy updates",
                "Admin dashboard for property management"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "Google APIs", "Responsive Design", "PHP/MySQL"],
            links: [
                { type: "external-link", url: "https://in-dex.github.io/716CorporateHousing", text: "Live Demo" },
                { type: "github", url: "#", text: "View Code" }
            ]
        },
        quiztrivia: {
            title: "Space Quiz Trivia - Browser Game",
            category: "Browser Game",
            images: [
                "projects/quiztrivia/ss1.jpg",
                "projects/quiztrivia/ss2.jpg"
            ],
            videos: [
                "https://drive.google.com/file/d/1qvu7wAOhpJAjKNeK4Tc4tGA3bBOIW6qq/preview"
            ],
            description: "A space-themed quiz trivia game built with pure HTML, CSS, and JavaScript. Features rich space visuals, animated UI, leaderboards, timer system, and a variety of quiz categories with increasing difficulty.",
            features: [
                "Space-themed visuals with animations",
                "Leaderboard with player rankings",
                "Timer-based scoring system",
                "Multiple quiz categories and difficulty levels",
                "Sound effects and background music",
                "Responsive design for all screen sizes"
            ],
            technologies: ["HTML", "CSS3 Animations", "JavaScript", "Local Storage"],
            links: [
                { type: "external-link", url: "https://in-dex.github.io/QuizTriviaGame", text: "Play Game" },
                { type: "github", url: "https://github.com/in-dex/QuizTriviaGame.git", text: "View Code" }
            ]
        },
        arkela: {
            title: "Arkela Property Management System",
            category: "Business System",
            images: [
                "projects/arkela/ss1.png",
                "projects/arkela/ss2.png",
                "projects/arkela/ss3.png",
                "projects/arkela/ss4.png",
                "projects/arkela/ss5.png"
            ],
            videos: [
                "https://drive.google.com/file/d/1DVVnQZIBPqXMIm9SxjfpHar_4ICOqG9O/preview"
            ],
            description: "A comprehensive Property Management System built with Blazor MAUI Hybrid for desktop and mobile. Manages all aspects of property rental including tenant management, invoicing, billing, contracts, analytics, and utility meter readings.",
            features: [
                "Complete tenant and lease management",
                "Automated invoicing and billing system",
                "Contract generation and management",
                "Rent analytics and financial reporting",
                "Utility meter readings tracking",
                "Maintenance request system",
                "Document storage and management",
                "Multi-property support"
            ],
            technologies: ["Blazor MAUI Hybrid", ".NET 8", "SQL Server", "Chart.js", "PDF Generation"],
            links: [
                { type: "github", url: "#", text: "View Code" }
            ]
        }
    };

    // Create modal HTML
    const modalHTML = `
        <div class="project-modal" id="projectModal">
            <div class="modal-content">
                <div class="modal-header">
                    <div>
                        <h2 class="modal-title" id="modalProjectTitle"></h2>
                        <span class="modal-category" id="modalProjectCategory"></span>
                    </div>
                    <button class="close-modal" id="closeModal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="project-gallery" id="projectGallery"></div>
                    
                    <div class="project-details-grid">
                        <div>
                            <h3>Project Overview</h3>
                            <p class="project-description" id="modalProjectDescription"></p>
                            
                            <div class="project-features">
                                <h4>Key Features</h4>
                                <ul id="modalProjectFeatures"></ul>
                            </div>
                            
                            <div class="project-links" id="modalProjectLinks"></div>
                        </div>
                        
                        <div>
                            <div class="project-technologies">
                                <h4>Technology Stack</h4>
                                <div class="tech-stack" id="modalProjectTech"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="lightbox" id="lightbox">
            <button class="lightbox-close" id="closeLightbox">&times;</button>
            <div class="lightbox-content" id="lightboxContent"></div>
            <div class="lightbox-nav">
                <button id="prevMedia">‹</button>
                <button id="nextMedia">›</button>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Open modal when project card is clicked
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const viewBtn = card.querySelector('.view-gallery-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = card.getAttribute('data-project');
                openProjectModal(projectId);
            });
        }
        
        const projectImg = card.querySelector('.project-img');
        if (projectImg) {
            projectImg.addEventListener('click', (e) => {
                const projectId = card.getAttribute('data-project');
                openProjectModal(projectId);
            });
        }
    });

    // Close modal functionality
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('projectModal');
    
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const closeLightboxBtn = document.getElementById('closeLightbox');
    
    if (lightbox && closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

function initGalleryLoading() {
    // Add loaded class to all existing gallery items after they load
    document.querySelectorAll('.gallery-item').forEach(item => {
        const img = item.querySelector('img');
        if (img) {
            if (img.complete) {
                item.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    item.classList.add('loaded');
                });
                img.addEventListener('error', () => {
                    // Even if image fails to load, remove spinner
                    item.classList.add('loaded');
                });
            }
        } else {
            // If no img element, mark as loaded immediately
            item.classList.add('loaded');
        }
    });
}


function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    
    if (!window.projectsData) {
        console.error('projectsData is not defined');
        return;
    }
    
    const projectData = window.projectsData[projectId];
    
    if (!projectData) {
        console.error('Project data not found:', projectId);
        return;
    }
    
    document.getElementById('modalProjectTitle').textContent = projectData.title;
    document.getElementById('modalProjectCategory').textContent = projectData.category;
    document.getElementById('modalProjectDescription').textContent = projectData.description;
    
    const featuresList = document.getElementById('modalProjectFeatures');
    featuresList.innerHTML = '';
    projectData.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    const techStack = document.getElementById('modalProjectTech');
    techStack.innerHTML = '';
    projectData.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-item';
        span.textContent = tech;
        techStack.appendChild(span);
    });
    
    const linksContainer = document.getElementById('modalProjectLinks');
    linksContainer.innerHTML = '';
    projectData.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.className = 'project-link';
        a.target = '_blank';
        a.innerHTML = `<i class="fab fa-${link.type}"></i> ${link.text}`;
        linksContainer.appendChild(a);
    });
    
    const gallery = document.getElementById('projectGallery');
    gallery.innerHTML = '';
    
    // Add images with click handlers
    projectData.images.forEach((imgSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${projectData.title} Screenshot ${index + 1}`;
        img.loading = "lazy";
        
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);
        
        img.addEventListener('load', () => {
            galleryItem.classList.add('loaded');
        });
        
        // FIXED: Add click event to open lightbox for images
        galleryItem.addEventListener('click', () => {
            openLightbox(projectData, index, 'image');
        });
    });
    
    // Add videos with thumbnails
    projectData.videos.forEach((videoSrc, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item video';
    
    const videoId = extractVideoId(videoSrc);
    const thumbnailUrl = videoId ? 
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3Ctext x="50" y="50" text-anchor="middle" fill="%23fff"%3EVideo%3C/text%3E%3C/svg%3E';
    
    const img = document.createElement('img');
    img.src = thumbnailUrl;
    img.alt = `${projectData.title} Video ${index + 1}`;
    img.loading = "lazy";
    
    galleryItem.appendChild(img);
    
    const playIcon = document.createElement('div');
    playIcon.className = 'video-play-icon';
    playIcon.textContent = '▶';
    galleryItem.appendChild(playIcon);
    
    gallery.appendChild(galleryItem);
    
    // Add loaded class when thumbnail loads
    img.addEventListener('load', () => {
        galleryItem.classList.add('loaded');
    });
    
    // mark as loaded if using data URI (no load event)
    if (thumbnailUrl.startsWith('data:')) {
        galleryItem.classList.add('loaded');
    }
    
    //  Add click event for video
    galleryItem.addEventListener('click', () => {
        openLightbox(projectData, projectData.images.length + index, 'video');
    });

    setTimeout(initGalleryLoading, 100);
});
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openLightbox(projectData, index, type) {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightboxContent');
    
    window.currentLightbox = {
        projectData,
        currentIndex: index,
        mediaType: type
    };
    
    lightboxContent.innerHTML = '';
    
    if (type === 'image') {
        const img = document.createElement('img');
        img.src = projectData.images[index];
        img.alt = `${projectData.title} - Image ${index + 1}`;
        lightboxContent.appendChild(img);
    } else if (type === 'video') {
        const videoIndex = index - projectData.images.length;
        const videoUrl = projectData.videos[videoIndex];
        
        // FIXED: Create a properly sized container for the video
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-iframe-container';
        
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        
        videoContainer.appendChild(iframe);
        lightboxContent.appendChild(videoContainer);
    }
    
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function extractVideoId(url) {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
}

function initLightboxNavigation() {
    const prevBtn = document.getElementById('prevMedia');
    const nextBtn = document.getElementById('nextMedia');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => navigateLightbox(-1));
        nextBtn.addEventListener('click', () => navigateLightbox(1));
    }
}

function navigateLightbox(direction) {
    const lightbox = window.currentLightbox;
    if (!lightbox) return;
    
    const { projectData, currentIndex } = lightbox;
    const totalMedia = projectData.images.length + projectData.videos.length;
    
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = totalMedia - 1;
    if (newIndex >= totalMedia) newIndex = 0;
    
    let newType = newIndex < projectData.images.length ? 'image' : 'video';
    
    openLightbox(projectData, newIndex, newType);
}

// In your DOMContentLoaded, replace everything with:
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded - simple CSS animation');
    

    // Add loaded class to trigger CSS animation
    document.body.classList.add('loaded');
    
    // Initialize all your functionality
    setTimeout(() => {
        initMobileMenu();
        initSideNavigation();
        initSmoothScrolling();
        initScrollAnimations();
        initHeaderScroll();
        initContactForm();
        initProjectFilters();
        updateProjectCards();
        initProjectModals();
        initLightboxNavigation();
        updateProjectCounter();
    }, 100);
});

function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('navMenu');
    const header = document.querySelector('header');
    
    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = menu.classList.toggle('active');
            
            // Update icon
            const icon = btn.querySelector('i');
            if (isActive) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Close menu when clicking outside
                document.addEventListener('click', closeMenuOnClickOutside);
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.removeEventListener('click', closeMenuOnClickOutside);
            }
        });
        
        // Close menu when clicking links
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                btn.querySelector('i').classList.remove('fa-times');
                btn.querySelector('i').classList.add('fa-bars');
                document.removeEventListener('click', closeMenuOnClickOutside);
            });
        });
        
        function closeMenuOnClickOutside(e) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) {
                menu.classList.remove('active');
                btn.querySelector('i').classList.remove('fa-times');
                btn.querySelector('i').classList.add('fa-bars');
                document.removeEventListener('click', closeMenuOnClickOutside);
            }
        }
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Don't prevent default for side nav items
            if (!this.classList.contains('side-nav-item')) {
                e.preventDefault();
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL
                history.pushState(null, null, this.getAttribute('href'));
                
                // Close mobile menu if open
                document.getElementById('navMenu')?.classList.remove('active');
            }
        });
    });
}

// scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => {
        observer.observe(el);
    });
}

function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;
    let ticking = false;
    
    // Set initial padding on body
    document.body.style.paddingTop = headerHeight + 'px';
    
    function updateHeader() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
            
            if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
                // Scrolling down - hide header
                header.classList.remove('header-visible');
                header.classList.add('header-hidden');
            } else {
                // Scrolling up - show header
                header.classList.remove('header-hidden');
                header.classList.add('header-visible');
            }
        } else {
            // At top of page
            header.classList.remove('scrolled', 'header-hidden');
            header.classList.add('header-visible');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
    
    // Initial check
    updateHeader();
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent (demo mode).');
            form.reset();
        });
    }
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectCountElement = document.getElementById('projectCount');

    if (!filterButtons.length || !projectCards.length) {
        console.error('Filter buttons or project cards not found');
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            let visibleCount = 0;
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                const shouldShow = filterValue === 'all' || 
                                  categories.split(' ').includes(filterValue);
                
                if (shouldShow) {
                    card.style.display = 'block';
                    visibleCount++;
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            if (projectCountElement) {
                projectCountElement.textContent = visibleCount;
            }
        });
    });
}

function updateProjectCounter() {
    const projectCount = document.getElementById('projectCount');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (projectCount && projectCards) {
        projectCount.textContent = projectCards.length;
    }
}

function updateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const projectImg = card.querySelector('.project-img');
        
        // Make the whole card clickable
        card.style.cursor = 'pointer';
        
        if (projectImg && !projectImg.querySelector('.project-img-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'project-img-overlay';
            overlay.innerHTML = `
                <button class="view-gallery-btn">
                    <i class="fas fa-images"></i> View Gallery
                </button>
            `;
            projectImg.appendChild(overlay);
        }

        // Add click event to the entire card
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on the button or its children
            if (e.target.closest('.view-gallery-btn') || 
                e.target.closest('a') || 
                e.target.tagName === 'A') {
                return;
            }
            
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });

        // Keep the button functionality
        const viewBtn = card.querySelector('.view-gallery-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = card.getAttribute('data-project');
                openProjectModal(projectId);
            });
        }
    });
}

// Geometric Shapes Generator
function createGeometricEffects() {
    const container = document.createElement('div');
    container.className = 'geometric-container';
    
    // Add large background shapes
    const shapes = [
        { className: 'shape-1', color: 'var(--primary)' },
        { className: 'shape-2', color: 'var(--secondary)' },
        { className: 'shape-3', color: 'var(--accent)' },
        { className: 'shape-4', color: 'var(--primary)' }
    ];
    
    shapes.forEach(shape => {
        const div = document.createElement('div');
        div.className = `geometric-shape ${shape.className}`;
        container.appendChild(div);
    });
    
    // Add floating orbs
    const orbsContainer = document.createElement('div');
    orbsContainer.className = 'floating-orbs';
    
    for (let i = 1; i <= 3; i++) {
        const orb = document.createElement('div');
        orb.className = `floating-orb orb-${i}`;
        orbsContainer.appendChild(orb);
    }
    
    // Add grid overlay
    const grid = document.createElement('div');
    grid.className = 'cyber-grid';
    
    // Add everything to body
    document.body.appendChild(container);
    document.body.appendChild(orbsContainer);
    document.body.appendChild(grid);
    
    // Add particles
    createParticles();
}

// Create floating particles
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 15 + Math.random() * 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.background = Math.random() > 0.5 ? 'var(--primary)' : 
                                  Math.random() > 0.5 ? 'var(--secondary)' : 'var(--accent)';
        
        particles.appendChild(particle);
    }
    
    document.body.appendChild(particles);
}

// Section entrance effects
function initSectionEffects() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add reveal animation
                entry.target.classList.add('section-reveal');
                
                // Create particle trail effect
                createParticleTrail(entry.target);
                
                // Add glow effect
                entry.target.classList.add('glow-effect');
                
                // Remove classes after animation
                setTimeout(() => {
                    entry.target.classList.remove('section-reveal');
                }, 1000);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => observer.observe(section));
}

// Create particle trail for section entrance
function createParticleTrail(section) {
    const rect = section.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'particle-trail';
        
        trail.style.top = `${rect.top + Math.random() * rect.height}px`;
        trail.style.left = `-100px`;
        trail.style.animationDelay = `${i * 0.1}s`;
        trail.style.opacity = 0.3 + Math.random() * 0.2;
        
        document.body.appendChild(trail);
        
        // Remove after animation
        setTimeout(() => {
            trail.remove();
        }, 2000);
    }
}

// Create connection lines between sections
function createConnectionLines() {
    const linesContainer = document.createElement('div');
    linesContainer.className = 'connection-lines';
    
    const sections = document.querySelectorAll('section');
    
    for (let i = 0; i < sections.length - 1; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];
        
        if (currentSection && nextSection) {
            const line = document.createElement('div');
            line.className = 'line';
            
            // Calculate positions
            const rect1 = currentSection.getBoundingClientRect();
            const rect2 = nextSection.getBoundingClientRect();
            
            const x1 = rect1.left + rect1.width / 2;
            const y1 = rect1.bottom;
            const x2 = rect2.left + rect2.width / 2;
            const y2 = rect2.top;
            
            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            
            line.style.width = `${length}px`;
            line.style.left = `${x1}px`;
            line.style.top = `${y1}px`;
            line.style.transform = `rotate(${angle}deg)`;
            line.style.animationDelay = `${i * 0.5}s`;
            
            linesContainer.appendChild(line);
        }
    }
    
    document.body.appendChild(linesContainer);
}

// Initialize all effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code ...
    
    // Add these lines to your existing init code:
    createGeometricEffects();
    initSectionEffects();
    createConnectionLines();
    
    // Add morphing blob effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const blob = document.createElement('div');
        blob.className = 'morphing-blob';
        blob.style.top = '50%';
        blob.style.right = '10%';
        hero.appendChild(blob);
    }
    
    // Add gradient borders to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('gradient-border');
    });
    
    // Add glitch effect to main title
    const mainTitle = document.querySelector('.hero h1');
    if (mainTitle) {
        mainTitle.classList.add('glitch-text');
    }
    
    // Add digital rain effect (optional)
    if (Math.random() > 0.5) { // 50% chance to show
        createDigitalRain();
    }
});

// Optional: Digital rain effect
function createDigitalRain() {
    const rain = document.createElement('div');
    rain.className = 'digital-rain';
    
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'rain-column';
        
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 1 + Math.random() * 2;
        
        column.style.left = `${left}%`;
        column.style.animationDelay = `${delay}s`;
        column.style.animationDuration = `${duration}s`;
        column.style.height = `${50 + Math.random() * 100}px`;
        
        rain.appendChild(column);
    }
    
    document.body.appendChild(rain);
}

// Parallax effect for geometric shapes
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.geometric-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Notion-style Side Navigation
function initSideNavigation() {
    const sideNav = document.getElementById('sideNav');
    if (!sideNav) return;
    
    const navItems = document.querySelectorAll('.side-nav-item');
    const progressFill = document.getElementById('navProgressFill');
    const progressText = document.getElementById('navProgressText');
    const sections = document.querySelectorAll('section[id]');
    
    // Function to update active nav item
    function updateActiveNav() {
        let currentSection = '';
        let maxSectionHeight = 0;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            
            // Check if section is in viewport
            if (sectionTop <= window.innerHeight * 0.3 && sectionTop + sectionHeight > 0) {
                if (sectionHeight > maxSectionHeight) {
                    maxSectionHeight = sectionHeight;
                    currentSection = section.id;
                }
            }
        });
        
        // Update active nav item
        navItems.forEach(item => {
            item.classList.remove('active', 'highlight');
            if (item.getAttribute('data-section') === currentSection) {
                item.classList.add('active');
                
                // Add highlight animation for section change
                if (!item.classList.contains('was-active')) {
                    item.classList.add('highlight');
                    setTimeout(() => item.classList.remove('highlight'), 1500);
                }
                item.classList.add('was-active');
            } else {
                item.classList.remove('was-active');
            }
        });
        
        // Update progress indicator
        updateProgressIndicator();
    }
    
    // Function to update scroll progress
    function updateProgressIndicator() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = Math.min((scrolled / documentHeight) * 100, 100);
        
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }
        
        if (progressText) {
            progressText.textContent = `${Math.round(progress)}%`;
        }
    }
    
    // Smooth scroll to section
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Add click animation
                item.classList.add('clicked');
                setTimeout(() => item.classList.remove('clicked'), 300);
                
                // Scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
            }
        });
        
        // Add tooltip data
        const text = item.querySelector('.side-nav-text').textContent;
        item.setAttribute('data-tooltip', text);
    });
    
    // Toggle collapsed state
    const toggleButton = document.createElement('button');
    toggleButton.className = 'nav-toggle';
  
    toggleButton.title = 'Toggle Navigation';
    sideNav.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', () => {
        sideNav.classList.toggle('collapsed');
        const icon = toggleButton.querySelector('i');
        if (sideNav.classList.contains('collapsed')) {
            icon.classList.remove('fa-chevron-left');
            icon.classList.add('fa-chevron-right');
        } else {
            icon.classList.remove('fa-chevron-right');
            icon.classList.add('fa-chevron-left');
        }
    });
    
    // Add scroll event listener
    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
            updateActiveNav();
        }, 50);
    });
    
    // Initial update
    updateActiveNav();
    updateProgressIndicator();
    
    // Intersection Observer for precise section detection
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navItem = document.querySelector(`.side-nav-item[data-section="${id}"]`);
            
            if (navItem) {
                if (entry.isIntersecting) {
                    navItem.classList.add('active');
                    navItem.classList.add('was-active');
                } else {
                    navItem.classList.remove('active');
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => observer.observe(section));
}

// Add CSS for toggle button
const sideNavCSS = `
    .nav-toggle {
        position: absolute;
        top: 10px;
        right: -12px;
        width: 24px;
        height: 24px;
        background: var(--primary);
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        transition: all 0.3s ease;
        z-index: 101;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    
    .nav-toggle:hover {
        background: var(--secondary);
        transform: scale(1.1);
    }
    
    .side-nav-item.clicked {
        animation: bounce 0.3s ease;
    }
    
    @keyframes bounce {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(10px); }
    }
    
    @media (max-width: 768px) {
        .nav-toggle {
            display: none;
        }
    }
`;

// Add the CSS to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = sideNavCSS;
document.head.appendChild(styleSheet);

// Back to Top functionality
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Call this in your DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
});

// Function to create line dots
function createLineDots() {
    const sideNav = document.getElementById('sideNav');
    if (!sideNav) return;
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'side-nav-dots';
    sideNav.appendChild(dotsContainer);
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    const sectionIds = Array.from(sections).map(s => s.id);
    
    // Create dots for each section
    sectionIds.forEach((sectionId, index) => {
        const dot = document.createElement('div');
        dot.className = 'side-nav-dot';
        dot.setAttribute('data-section', sectionId);
        
        // Position dots evenly along the line
        const totalSections = sectionIds.length;
        const position = ((index + 0.5) / totalSections) * 100;
        dot.style.top = `${position}%`;
        
        // Add click event to scroll to section
        dot.addEventListener('click', () => {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Add hover effect
        dot.addEventListener('mouseenter', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            dot.style.opacity = '1';
            dot.style.background = 'var(--accent)';
        });
        
        dot.addEventListener('mouseleave', () => {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.opacity = '0.6';
            dot.style.background = 'var(--primary)';
        });
        
        dotsContainer.appendChild(dot);
    });
}

// Add this line in your DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {
    createLineDots();
});

