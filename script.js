// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

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
    console.log('Initializing theme with:', currentTheme);
    setTheme(currentTheme);
    
    // Add event listener to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle event listener added');
    } else {
        console.error('Theme toggle button not found!');
    }
}

// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';

// Language data
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-greeting': 'Hello, I\'m',
        'hero-subtitle': 'Java Senior Developer & AI Specialist',
        'hero-description': 'Professional with over 25 years of experience in software development, working with various technologies using agile methodologies. Currently specializing in Model Context Protocol (MCP) and generative AI integration, developing production-ready tools that reduce engineering overhead.',
        'btn-projects': 'View Projects',
        'btn-contact': 'Contact',
        
        // About Section
        'about-title': 'About Me',
        'about-text-1': 'I am a passionate Java Senior Developer with over 25 years of experience in software development, working with various technologies using agile methodologies. My journey in IT has allowed me to work with the most modern technologies and architectures.',
        'about-text-2': 'Currently at Foursys, I am involved in migrating services from Google Cloud Platform to Equifax Cloud, as well as updating microservices written in Java 17 to Java 21 and developing new encryption microservices using Java\'s Barricade library for data cryptography. I also lead development teams, contributing to the success of projects and the professional growth of my colleagues.',
        'about-text-3': 'I\'m currently specializing in Model Context Protocol (MCP) and generative AI integration. I\'m developing production-ready tools that reduce engineering overhead by automating repetitive tasks. My goal is to provide quality, secure, and high-performance solutions for clients, using best practices and my knowledge in information technology management.',
        'stat-experience': 'Years of Experience',
        'stat-ai': 'MCP & Generative AI',
        'stat-repos': 'GitHub Repositories',
        'stat-projects': 'Featured Projects',
        
        // Experience Section
        'experience-title': 'Professional Experience',
        'exp-1-title': 'Java Senior Developer & Team Lead',
        'exp-1-company': 'Foursys',
        'exp-1-period': '2023 - Present',
        'exp-1-desc': 'Leading development teams, migrating services from GCP to Equifax Cloud, updating microservices from Java 17 to Java 21, developing encryption microservices with Java Barricade library, and specializing in MCP and generative AI integration.',
        'exp-2-title': 'Java Mid/Senior Developer',
        'exp-2-company': 'Technology Companies',
        'exp-2-period': '2010 - 2020',
        'exp-2-desc': 'Development of Java EE applications, enterprise management systems, database integration and third-party APIs.',
        'exp-3-title': 'Java Junior/Mid Developer',
        'exp-3-company': 'Startups and IT Companies',
        'exp-3-period': '1995 - 2010',
        'exp-3-desc': 'Beginning of Java development career, learning frameworks and software development methodologies.',
        
        // Projects Section
        'projects-title': 'Featured Projects',
        'project-handyman-desc': 'Complete management system for service providers, with React frontend and Java backend.',
        'project-concierge-desc': 'Access control and concierge management system for residential buildings.',
        'project-parking-desc': 'RESTful API for parking system with JPA and Spring Boot.',
        'project-security-desc': 'Security and access control system for buildings with web interface.',
        'project-spring-desc': 'Modern API with Spring Boot 3, JPA and the latest framework features.',
        'project-quarkus-desc': 'High-performance API developed with Quarkus for cloud-native applications.',
        'btn-demo': 'Demo',
        'btn-code-1': 'Code',
        'btn-code-2': 'Code',
        'btn-code-3': 'Code',
        'btn-code-4': 'Code',
        'btn-code-5': 'Code',
        
        // Skills Section
        'skills-title': 'Technical Skills',
        'skill-lang': 'Programming Languages',
        'skill-frameworks': 'Frameworks & Technologies',
        'skill-cloud': 'Cloud & DevOps',
        'skill-tools': 'Tools & Methodologies',
        
        // Contact Section
        'contact-title': 'Get in Touch',
        'contact-subtitle': 'Let\'s Talk!',
        'contact-text': 'I\'m always open to new opportunities and interesting collaborations. If you have a project in mind or would like to discuss possibilities, don\'t hesitate to get in touch.',
        'contact-social': 'Social Media',
        'contact-cv-title': 'Download CV',
        'contact-cv-text': 'Get my professional resume in PDF format',
        'cv-download-text': 'Download CV (PDF)',
        
        // Footer
        'footer-rights': 'All rights reserved.',
        'footer-developed': 'Developed with',
        'footer-code': 'and lots of code'
    },
    pt: {
        // Navigation
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-experience': 'Experiência',
        'nav-projects': 'Projetos',
        'nav-skills': 'Habilidades',
        'nav-contact': 'Contato',
        
        // Hero Section
        'hero-greeting': 'Olá, eu sou',
        'hero-subtitle': 'Desenvolvedor Java Senior & Especialista em IA',
        'hero-description': 'Profissional com mais de 25 anos de experiência em desenvolvimento de software, trabalhando com diversas tecnologias usando metodologias ágeis. Atualmente especializando-se em Model Context Protocol (MCP) e integração de IA generativa, desenvolvendo ferramentas prontas para produção que reduzem a sobrecarga de engenharia.',
        'btn-projects': 'Ver Projetos',
        'btn-contact': 'Contato',
        
        // About Section
        'about-title': 'Sobre Mim',
        'about-text-1': 'Sou um desenvolvedor Java Senior apaixonado por tecnologia, com mais de 25 anos de experiência em desenvolvimento de software, trabalhando com diversas tecnologias usando metodologias ágeis. Minha jornada na área de TI me permitiu trabalhar com as mais modernas tecnologias e arquiteturas.',
        'about-text-2': 'Atualmente na Foursys, estou envolvido na migração de serviços do Google Cloud Platform para Equifax Cloud, bem como na atualização de microserviços escritos em Java 17 para Java 21 e no desenvolvimento de novos microserviços de criptografia usando a biblioteca Barricade do Java para criptografia de dados. Também lidero equipes de desenvolvimento, contribuindo para o sucesso dos projetos e o crescimento profissional dos meus colegas.',
        'about-text-3': 'Atualmente estou me especializando em Model Context Protocol (MCP) e integração de IA generativa. Estou desenvolvendo ferramentas prontas para produção que reduzem a sobrecarga de engenharia automatizando tarefas repetitivas. Meu objetivo é fornecer soluções de qualidade, seguras e de alto desempenho para os clientes, usando as melhores práticas e meu conhecimento em gestão de tecnologia da informação.',
        'stat-experience': 'Anos de Experiência',
        'stat-ai': 'MCP & IA Generativa',
        'stat-repos': 'Repositórios GitHub',
        'stat-projects': 'Projetos em Destaque',
        
        // Experience Section
        'experience-title': 'Experiência Profissional',
        'exp-1-title': 'Desenvolvedor Java Senior & Líder de Equipe',
        'exp-1-company': 'Foursys',
        'exp-1-period': '2023 - Presente',
        'exp-1-desc': 'Liderando equipes de desenvolvimento, migrando serviços do GCP para Equifax Cloud, atualizando microserviços de Java 17 para Java 21, desenvolvendo microserviços de criptografia com biblioteca Barricade do Java, e especializando-se em MCP e integração de IA generativa.',
        'exp-2-title': 'Desenvolvedor Java Pleno/Sênior',
        'exp-2-company': 'Empresas de Tecnologia',
        'exp-2-period': '2010 - 2020',
        'exp-2-desc': 'Desenvolvimento de aplicações Java EE, sistemas de gestão empresarial, integração com bancos de dados e APIs de terceiros.',
        'exp-3-title': 'Desenvolvedor Java Júnior/Pleno',
        'exp-3-company': 'Startups e Empresas de TI',
        'exp-3-period': '1995 - 2010',
        'exp-3-desc': 'Início da carreira em desenvolvimento Java, aprendizado de frameworks e metodologias de desenvolvimento de software.',
        
        // Projects Section
        'projects-title': 'Projetos em Destaque',
        'project-handyman-desc': 'Sistema completo de gestão para prestadores de serviços, com frontend React e backend Java.',
        'project-concierge-desc': 'Sistema de controle de acesso e gestão de portaria para condomínios residenciais.',
        'project-parking-desc': 'API RESTful para sistema de estacionamento com JPA e Spring Boot.',
        'project-security-desc': 'Sistema de segurança e controle de acesso para condomínios com interface web.',
        'project-spring-desc': 'API moderna com Spring Boot 3, JPA e as últimas funcionalidades do framework.',
        'project-quarkus-desc': 'API de alta performance desenvolvida com Quarkus para aplicações nativas em cloud.',
        'btn-demo': 'Demo',
        'btn-code-1': 'Código',
        'btn-code-2': 'Código',
        'btn-code-3': 'Código',
        'btn-code-4': 'Código',
        'btn-code-5': 'Código',
        
        // Skills Section
        'skills-title': 'Habilidades Técnicas',
        'skill-lang': 'Linguagens de Programação',
        'skill-frameworks': 'Frameworks & Tecnologias',
        'skill-cloud': 'Cloud & DevOps',
        'skill-tools': 'Ferramentas & Metodologias',
        
        // Contact Section
        'contact-title': 'Entre em Contato',
        'contact-subtitle': 'Vamos Conversar!',
        'contact-text': 'Estou sempre aberto a novas oportunidades e colaborações interessantes. Se você tem um projeto em mente ou gostaria de discutir possibilidades, não hesite em entrar em contato.',
        'contact-social': 'Redes Sociais',
        'contact-cv-title': 'Baixar CV',
        'contact-cv-text': 'Baixe meu currículo profissional em formato PDF',
        'cv-download-text': 'Baixar CV (PDF)',
        
        // Footer
        'footer-rights': 'Todos os direitos reservados.',
        'footer-developed': 'Desenvolvido com',
        'footer-code': 'e muito código'
    }
};

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update page title
    const title = document.querySelector('title');
    if (lang === 'pt') {
        title.textContent = 'Marcelo Hernandes da Silva - Desenvolvedor Java Senior';
    } else {
        title.textContent = 'Marcelo Hernandes da Silva - Java Senior Developer';
    }
    
    // Update all elements by ID
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update console message
    updateConsoleMessage(lang);
}

// Function to update console message based on language
function updateConsoleMessage(lang) {
    if (lang === 'pt') {
        console.log('🌍 Idioma alterado para Português');
        console.log('👨‍💻 Marcelo Hernandes da Silva - Desenvolvedor Java Senior');
        console.log('🌟 28+ anos de experiência em tecnologia');
    } else {
        console.log('🌍 Language changed to English');
        console.log('👨‍💻 Marcelo Hernandes da Silva - Java Senior Developer');
        console.log('🌟 28+ years of experience in technology');
    }
}

// Initialize language system
function initLanguage() {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
        changeLanguage(savedLang);
    } else {
        // Default to English
        changeLanguage('en');
    }
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            changeLanguage(lang);
        });
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate skill bars when they come into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when about section is visible
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Project cards hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline animation
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-content').forEach((item, index) => {
    item.style.opacity = '0';
    if (index % 2 === 0) {
        item.style.transform = 'translateX(-50px)';
    } else {
        item.style.transform = 'translateX(50px)';
    }
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Smooth reveal for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-title, .about-text, .project-card, .skill-category');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active class styles to CSS
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize all animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language system
    initLanguage();
    
    // Initialize theme
    initTheme();
    
    // Add initial fade-in class to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.classList.add('fade-in-up');
    }
    
    // Preload profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const img = new Image();
        img.onload = () => {
            profileImage.style.opacity = '1';
        };
        img.src = profileImage.src;
    }
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
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
    revealOnScroll();
}, 16)); // 60fps

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

// Error handling for failed image loads
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        console.warn('Failed to load image:', this.src);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu with Escape key
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link, .btn, .project-link, .social-link').forEach(link => {
    link.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('🚀 Personal website loaded successfully!');
console.log('🌍 Multi-language support: English (EN) and Portuguese (PT)');
console.log('👨‍💻 Marcelo Hernandes da Silva - Java Senior Developer');
console.log('🌟 28+ years of experience in technology');
console.log('💡 Tip: Click EN/PT buttons to change language');
