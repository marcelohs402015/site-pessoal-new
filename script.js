// Theme Management
let currentTheme = localStorage.getItem('theme') || 'dark';

// Function to set theme
function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle icon
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                icon.style.color = '#fbbf24'; // Yellow for sun
            } else {
                icon.className = 'fas fa-moon';
                icon.style.color = '#f59e0b'; // Orange for moon
            }
        }
    }
    
    // Log theme change for debugging
    console.log('Theme changed to:', theme);
}

// Function to toggle theme
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('Theme toggled to:', newTheme);
}

// Initialize theme on page load
function initTheme() {
    console.log('Initializing theme system with:', currentTheme);
    
    // Set initial theme
    setTheme(currentTheme);
    
    // Add event listener to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Remove any existing listeners
        themeToggle.removeEventListener('click', themeToggle._clickHandler);
        
        // Create new handler
        themeToggle._clickHandler = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Theme toggle button clicked!');
            toggleTheme();
        };
        
        // Add new listener
        themeToggle.addEventListener('click', themeToggle._clickHandler);
        console.log('Theme toggle event listener added successfully');
    } else {
        console.error('Theme toggle button not found during initialization!');
    }
}

// Navigation and UI Functions
function initNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Animation Functions
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
}

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        
        // Skip animation for non-numeric values like "AI"
        if (text === 'AI' || text === 'N8N' || !/\d/.test(text)) {
            return;
        }
        
        // Extract numeric value and check for '+' suffix
        const hasPlus = text.includes('+');
        const target = parseInt(text.replace('+', ''));
        
        if (isNaN(target)) {
            return; // Skip if not a valid number
        }
        
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (hasPlus ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (hasPlus ? '+' : '');
            }
        };
        
        updateCounter();
    });
}

// Skills Bar Animation
function animateSkillsBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
}

// Experience Cards Animation
function animateExperienceCards() {
    const experienceCards = document.querySelectorAll('.experience-card');
    
    experienceCards.forEach((card, index) => {
        // Start with animate-out class
        card.classList.add('animate-out');
        
        setTimeout(() => {
            card.classList.remove('animate-out');
            card.classList.add('animate-in');
        }, index * 300);
    });
}

// Project Cards Animation
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
        }, index * 150);
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing site...');
    
    // Initialize theme system
    initTheme();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize animations
    initAnimations();
    
    // Animate counters when about section is visible
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
    
    // Animate skills bars when skills section is visible
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillsBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillsObserver.observe(skillsSection);
    }
    
    // Animate experience cards when experience section is visible
    const experienceSection = document.querySelector('#experience');
    if (experienceSection) {
        const experienceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateExperienceCards();
                    experienceObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        experienceObserver.observe(experienceSection);
    }
    
    // Animate project cards when projects section is visible
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
        const projectsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProjectCards();
                    projectsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        projectsObserver.observe(projectsSection);
    }
    
    console.log('Site initialization complete!');
});

// Add smooth scrolling behavior
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-xl)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
    });
    
    // Add hover effects to skill bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.style.transform = 'scaleX(1.05)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.skill-progress');
            if (progressBar) {
                progressBar.style.transform = 'scaleX(1)';
            }
        });
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add scroll-based navbar styling
window.addEventListener('scroll', throttle(function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}, 100));

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading state for profile image
        if (img.classList.contains('profile-image')) {
            const container = img.closest('.profile-image-container');
            if (container) {
                container.classList.add('loading');
                
                img.addEventListener('load', function() {
                    container.classList.remove('loading');
                    this.classList.add('loaded');
                });
                
                img.addEventListener('error', function() {
                    container.classList.remove('loading');
                    console.warn('Failed to load profile image');
                });
                
                if (img.complete) {
                    container.classList.remove('loading');
                    img.classList.add('loaded');
                }
            }
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            if (img.complete) {
                img.classList.add('loaded');
            }
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    }
    
    // Tab key navigation enhancement
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main';
    }
});

// Add error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'LINK') {
        console.warn('Failed to load external resource:', e.target.src || e.target.href);
    }
}, true);

// Add performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            console.log('DOM content loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
        }
    }
});

console.log('Script loaded successfully!');
