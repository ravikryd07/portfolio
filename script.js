// Ultra-Optimized Quantum Reality Loader
document.addEventListener("DOMContentLoaded", () => {
  // Initialize quantum reality loader
  initQuantumRealityLoader();
});
function initQuantumRealityLoader() {
  const loader = document.getElementById('quantum-reality-loader');
  const progressFill = document.querySelector('.progress-fill');
  const progressPercentage = document.querySelector('.progress-percentage');
  const stateTexts = document.querySelectorAll('.state-text');
  
  // Status messages
  const statusMessages = [
    "INITIALIZING",
    "QUANTUM",
    "REALITY"
  ];
  
  let progress = 0;
  let stateIndex = 0;
  let animationId = null;
  
  // Initialize simplified quantum field
  initQuantumField();
  
  // Smooth loading progress with optimized requestAnimationFrame
  function animateLoading(timestamp) {
    // Calculate progress based on time for smoothness
    const duration = 5000; // 5 seconds total
    const elapsed = timestamp % duration;
    progress = (elapsed / duration) * 100;
    
    // Update progress bar
    progressFill.style.width = `${progress}%`;
    
    // Update percentage text
    progressPercentage.textContent = `${Math.floor(progress)}%`;
    
    // Update state text
    const newStateIndex = Math.floor(progress / (100 / statusMessages.length));
    if (newStateIndex !== stateIndex && newStateIndex < statusMessages.length) {
      // Deactivate current state
      stateTexts.forEach(text => text.classList.remove('active'));
      
      // Activate next state
      stateIndex = newStateIndex;
      stateTexts[stateIndex].classList.add('active');
    }
    
    // Complete loading
    if (progress >= 99) {
      // Final state
      stateTexts.forEach(text => text.classList.remove('active'));
      stateTexts[2].classList.add('active');
      
      // Hide loader
      setTimeout(() => {
        loader.classList.add('hidden');
        
        // Initialize the rest of the portfolio
        setTimeout(() => {
          initializePortfolio();
        }, 1500);
      }, 1000);
    } else {
      // Continue animation
      animationId = requestAnimationFrame(animateLoading);
    }
  }
  
  // Start animation
  animationId = requestAnimationFrame(animateLoading);
  
  // Clean up animation when loader is hidden
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class' && 
          loader.classList.contains('hidden')) {
        cancelAnimationFrame(animationId);
        observer.disconnect();
      }
    });
  });
  
  observer.observe(loader, { attributes: true });
}
// Optimized Quantum Field
function initQuantumField() {
  const fieldParticles = document.querySelector('.field-particles');
  const particleCount = 30; // Reduced for performance
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'field-particle';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    
    // Random delay
    const delay = Math.random() * 5;
    
    // Set styles
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Create optimized animation
    particle.animate([
      { 
        transform: 'translate(0, 0) scale(1)', 
        opacity: 0.6 
      },
      { 
        transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.5)`, 
        opacity: 0.3,
        offset: 0.5
      },
      { 
        transform: 'translate(0, 0) scale(1)', 
        opacity: 0.6 
      }
    ], {
      duration: duration * 1000,
      delay: delay * 1000,
      iterations: Infinity,
      easing: 'ease-in-out'
    });
    
    fieldParticles.appendChild(particle);
  }
}
// Initialize all components
function initializePortfolio() {
  // Theme Management
  setupThemeToggle();
  
  // Animations
  startTypingAnimation();
  setupInteractiveOrbs();
  setup3DCardEffects();
  
  // Scroll Effects
  setupScrollReveal();
  setupActiveNavigation();
  
  // Particles
  setupAboutParticles();
  setupProjectsParticles();
  setupContactParticles();
  setupSidebarParticles();
  
  // Forms
  setupContactForm();
  
  // Sidebar
  setupSidebarNavigation();
  setupSidebarThemeToggle();
  setupSocialLinks();
  
  // Project Section
  initProjectsSection();
  
  // Education Section
  initEducationSection();
  
  // Profile Particles
  initProfileParticles();
}
// ===== THEME MANAGEMENT =====
function setupThemeToggle() {
  const html = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle button");
  
  // Set initial theme
  const currentTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', currentTheme);
  updateAllThemeToggles(currentTheme);
  
  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateAllThemeToggles(newTheme);
    updateParticlesTheme(newTheme);
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('themeChange', {
      detail: { theme: newTheme }
    }));
  });
  
  // Listen for theme changes from other toggles
  document.addEventListener('themeChange', (e) => {
    updateAllThemeToggles(e.detail.theme);
    updateParticlesTheme(e.detail.theme);
  });
}
function updateAllThemeToggles(theme) {
  // Update main theme toggle
  const themeToggle = document.querySelector(".theme-toggle button");
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }
  
  // Update sidebar theme toggle
  updateThemeButton(theme);
}
function updateThemeButton(theme) {
  const themeIcon = document.querySelector('.theme-icon i');
  const themeText = document.querySelector('.theme-text');
  
  if (themeIcon && themeText) {
    if (theme === 'light') {
      themeIcon.className = 'fas fa-sun';
      themeText.textContent = 'Light Mode';
    } else {
      themeIcon.className = 'fas fa-moon';
      themeText.textContent = 'Dark Mode';
    }
  }
}
function updateParticlesTheme(theme) {
  const particleColor = theme === 'light' ? '#000000' : '#ffffff';
  
  // Update about particles
  if (window.particlesJS_about_container) {
    window.particlesJS_about_container.options.particles.color.value = particleColor;
    window.particlesJS_about_container.options.particles.links.color = particleColor;
    window.particlesJS_about_container.refresh();
  }
  
  // Update projects particles
  if (window.projectsParticles) {
    window.projectsParticles.options.particles.color.value = particleColor;
    window.projectsParticles.options.particles.links.color = particleColor;
    window.projectsParticles.refresh();
  }
  
  // Update contact particles
  if (window.particlesJS_contact_container) {
    window.particlesJS_contact_container.options.particles.color.value = particleColor;
    window.particlesJS_contact_container.options.particles.links.color = particleColor;
    window.particlesJS_contact_container.refresh();
  }
}
// ===== ANIMATIONS =====
function startTypingAnimation() {
  const roles = ["Full-Stack Developer", "Software Engineer", "Problem Solver"];
  let roleIndex = 0;
  let charIndex = 0;
  const roleElement = document.querySelector(".role-text");
  
  if (!roleElement) return;
  
  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeRole, 100);
    } else {
      setTimeout(eraseRole, 2000);
    }
  }
  
  function eraseRole() {
    if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseRole, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    }
  }
  
  typeRole();
}
function setupInteractiveOrbs() {
  const orbs = document.querySelectorAll('.interactive-orb');
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.5;
      const xOffset = (x - 0.5) * speed * 20;
      const yOffset = (y - 0.5) * speed * 20;
      
      orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });
}
function setup3DCardEffects() {
  const card3D = document.querySelector('.profile-card-3d');
  
  if (!card3D) return;
  
  card3D.addEventListener('mousemove', (e) => {
    const rect = card3D.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card3D.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  card3D.addEventListener('mouseleave', () => {
    card3D.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
}
// ===== SCROLL EFFECTS =====
function setupScrollReveal() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden');
      } else {
        entry.target.classList.remove('visible');
        entry.target.classList.add('hidden');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  
  // Skills animation
  animateSkills();
}
function setupActiveNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  
  // Set active nav item based on scroll position
  function updateActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  }
  
  updateActiveNavItem();
  window.addEventListener('scroll', updateActiveNavItem);
  
  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Smooth scroll to section
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
      
      // Close mobile menu after clicking a link
      if (window.innerWidth <= 768) {
        document.querySelector(".sidebar").classList.add("hidden");
      }
    });
  });
}
function animateSkills() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;
  
  const techOrbs = document.querySelectorAll('.tech-orb');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate tech orbs
        techOrbs.forEach((orb, index) => {
          setTimeout(() => {
            orb.classList.add('animate');
            
            // Add a special effect to each orb after a delay
            setTimeout(() => {
              const rays = orb.querySelector('.orb-rays');
              const glow = orb.querySelector('.orb-glow');
              
              // Temporarily increase the glow and rays
              if (rays) rays.style.opacity = '0.8';
              if (glow) {
                glow.style.transform = 'scale(1.2)';
                glow.style.opacity = '0.8';
              }
              
              // Reset after a short time
              setTimeout(() => {
                if (rays) rays.style.opacity = '';
                if (glow) {
                  glow.style.transform = '';
                  glow.style.opacity = '';
                }
              }, 500);
            }, 300);
          }, 150 * index);
        });
        
        // Disconnect observer after animation
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(skillsSection);
}
// ===== PARTICLES =====
function setupAboutParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (!particlesContainer || typeof tsParticles === 'undefined') return;
  
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const particleColor = currentTheme === 'light' ? '#000000' : '#ffffff';
  
  tsParticles.load("particles-js", {
    fullScreen: false,
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    particles: {
      color: { value: particleColor },
      links: {
        color: particleColor,
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 1,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80
      },
      opacity: { value: 0.5 },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: { polygon: { sides: 6 } }
      },
      size: { value: { min: 1, max: 5 } }
    },
    detectRetina: true
  }).then(container => {
    window.particlesJS_about_container = container;
  });
}
function setupProjectsParticles() {
  const particlesContainer = document.getElementById('projects-particles');
  if (!particlesContainer || typeof tsParticles === 'undefined') return;
  
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const particleColor = currentTheme === 'light' ? '#000000' : '#ffffff';
  
  tsParticles.load("projects-particles", {
    fullScreen: false,
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: {
        value: 30,
        density: { enable: true, area: 800 }
      },
      color: { value: particleColor },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: { polygon: { sides: 6 } }
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: { min: 1, max: 4 },
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        distance: 150,
        color: particleColor,
        opacity: 0.2,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  }).then(container => {
    window.projectsParticles = container;
  });
}
function setupContactParticles() {
  const particlesContainer = document.getElementById('contact-particles');
  if (!particlesContainer || typeof tsParticles === 'undefined') return;
  
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const particleColor = currentTheme === 'light' ? '#000000' : '#ffffff';
  
  tsParticles.load("contact-particles", {
    fullScreen: false,
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 }
      },
      color: { value: particleColor },
      shape: {
        type: ["circle", "triangle", "polygon"],
        options: { polygon: { sides: 6 } }
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: { min: 1, max: 5 },
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        distance: 150,
        color: particleColor,
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true
  }).then(container => {
    window.particlesJS_contact_container = container;
  });
}
function setupSidebarParticles() {
  const particlesContainer = document.querySelector('.sidebar-particles');
  if (!particlesContainer) return;
  
  // Add animated particles to the sidebar background
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'sidebar-particle';
    
    // Random size
    const size = Math.random() * 4 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `floatParticle ${duration}s infinite ease-in-out`;
    
    // Random delay
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    particlesContainer.appendChild(particle);
  }
}
// ===== FORM HANDLING =====
function setupContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  const formGroups = contactForm.querySelectorAll('.form-group');
  const submitBtn = contactForm.querySelector('.submit-btn');
  
  // Add focus effects to form inputs
  formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const highlight = group.querySelector('.form-highlight');
    
    input.addEventListener('focus', () => {
      if (highlight) highlight.style.width = '100%';
    });
    
    input.addEventListener('blur', () => {
      if (!input.value && highlight) {
        highlight.style.width = '0';
      }
    });
  });
  
  // Form submission
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Validation
    if (!name || !email || !phone || !message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      showNotification('Please enter a valid phone number', 'error');
      return;
    }
    
    // Show loading state
    if (submitBtn) {
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
    }
    
    // Simulate form submission (replace with actual submission)
    setTimeout(() => {
      // Reset loading state
      if (submitBtn) {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
      }
      
      // Show success message
      showNotification(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`, 'success');
      
      // Reset form
      contactForm.reset();
      
      // Reset highlights
      formGroups.forEach(group => {
        const highlight = group.querySelector('.form-highlight');
        if (highlight) highlight.style.width = '0';
      });
    }, 3000);
  });
}
// ===== SIDEBAR FUNCTIONALITY =====
function setupSidebarNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
    });
  });
}
function setupSidebarThemeToggle() {
  const themeBtn = document.querySelector('.theme-btn');
  if (!themeBtn) return;
  
  // Set initial theme state
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  updateThemeButton(currentTheme);
  
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeButton(newTheme);
    
    // Dispatch custom event for other components
    document.dispatchEvent(new CustomEvent('themeChange', {
      detail: { theme: newTheme }
    }));
  });
  
  // Listen for theme changes from other toggles
  document.addEventListener('themeChange', (e) => {
    updateThemeButton(e.detail.theme);
  });
}
function setupSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Add ripple effect
      createRipple(e, this);
      
      // Track social link clicks
      const platform = this.getAttribute('aria-label');
      console.log(`Social link clicked: ${platform}`);
      
      // Here you can add analytics tracking code
      // Example: gtag('event', 'social_click', { platform: platform });
    });
  });
}
// ===== PROJECTS SECTION =====
function initProjectsSection() {
  // Animate project cards on scroll
  animateProjectCards();
  
  // Setup project navigation
  setupProjectNavigation();
  
  // Setup quantum orbs interaction
  setupQuantumOrbs();
  
  // Setup project card interactions
  setupProjectCardInteractions();
}
function animateProjectCards() {
  const projectCards = document.querySelectorAll('.project-hologram');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });
  
  projectCards.forEach(card => {
    observer.observe(card);
  });
}
function setupProjectNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const navIndicator = document.querySelector('.nav-indicator');
  const projectCards = document.querySelectorAll('.project-hologram');
  
  // Set initial indicator position
  if (navItems.length > 0 && navIndicator) {
    const activeItem = document.querySelector('.nav-item.active');
    updateIndicator(activeItem, navIndicator);
  }
  
  // Add click event to nav items
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all buttons
      navItems.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      item.classList.add('active');
      
      // Update indicator position
      updateIndicator(item, navIndicator);
      
      // Filter projects
      const filterValue = item.getAttribute('data-filter');
      filterProjects(filterValue, projectCards);
    });
  });
}
function updateIndicator(item, indicator) {
  if (!item || !indicator) return;
  
  const itemRect = item.getBoundingClientRect();
  const containerRect = item.parentElement.getBoundingClientRect();
  
  const left = itemRect.left - containerRect.left;
  const width = itemRect.width;
  
  indicator.style.left = `${left}px`;
  indicator.style.width = `${width}px`;
}
function filterProjects(filterValue, projectCards) {
  projectCards.forEach(card => {
    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
      card.classList.remove('hidden');
      setTimeout(() => {
        card.classList.add('animate');
      }, 100);
    } else {
      card.classList.add('hidden');
      card.classList.remove('animate');
    }
  });
}
function setupQuantumOrbs() {
  const orbs = document.querySelectorAll('.quantum-orb');
  
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.3;
      const xOffset = (x - 0.5) * speed * 40;
      const yOffset = (y - 0.5) * speed * 40;
      
      orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });
}
function setupProjectCardInteractions() {
  const projectCards = document.querySelectorAll('.project-hologram');
  
  projectCards.forEach(card => {
    // Add 3D tilt effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      const hologramContainer = card.querySelector('.hologram-container');
      if (hologramContainer) {
        hologramContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });
    
    card.addEventListener('mouseleave', () => {
      const hologramContainer = card.querySelector('.hologram-container');
      if (hologramContainer) {
        hologramContainer.style.transform = 'rotateX(0) rotateY(0)';
      }
    });
    
    // Add click tracking for project actions
    const actionButtons = card.querySelectorAll('.action-btn');
    actionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const projectTitle = card.querySelector('.project-title').textContent;
        const actionType = button.querySelector('.btn-text').textContent;
        
        console.log(`Project interaction: ${projectTitle} - ${actionType}`);
        
        // Add ripple effect
        createRipple(e, button);
      });
    });
  });
}
// ===== EDUCATION SECTION =====
function initEducationSection() {
  // Setup education heading animation
  setupEducationHeading();
  
  // Animate neural pathway on scroll
  animateNeuralPathway();
  
  // Setup neural nodes interaction
  setupNeuralNodes();
  
  // Setup education cards animation
  animateEducationCards();
  
  // Create neural particles
  createNeuralParticles();
}
function setupEducationHeading() {
  const educationSection = document.getElementById('education');
  if (!educationSection) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Reset animations
        const neuralText = entry.target.querySelector('.neural-text');
        const circuitLines = entry.target.querySelectorAll('.circuit-line');
        const circuitNodes = entry.target.querySelectorAll('.circuit-node');
        const subtitleBar = entry.target.querySelector('.subtitle-bar');
        
        // Reset elements
        circuitLines.forEach(line => {
          line.style.animation = 'none';
        });
        
        circuitNodes.forEach(node => {
          node.style.animation = 'none';
        });
        
        if (subtitleBar) {
          subtitleBar.style.animation = 'none';
        }
        
        // Force reflow
        void neuralText.offsetWidth;
        
        // Restart animations
        circuitLines.forEach((line, index) => {
          const delay = 0.5 + (index * 0.2);
          line.style.animation = `drawCircuit 2s forwards ${delay}s`;
        });
        
        circuitNodes.forEach((node, index) => {
          const delay = 1.3 + (index * 0.1);
          node.style.animation = `nodeAppear 0.5s forwards ${delay}s`;
        });
        
        if (subtitleBar) {
          subtitleBar.style.animation = `subtitleBarExpand 2s forwards 1.8s`;
        }
        
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(educationSection);
}
function animateNeuralPathway() {
  const neuralPath = document.querySelector('.neural-path');
  if (!neuralPath) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate the path
        neuralPath.style.strokeDashoffset = '0';
        neuralPath.style.transition = 'stroke-dashoffset 2s ease-in-out';
        
        // Animate the nodes
        const nodes = document.querySelectorAll('.neural-node');
        nodes.forEach((node, index) => {
          setTimeout(() => {
            node.style.opacity = '1';
            node.style.transform = 'scale(1)';
          }, 500 + (index * 300));
        });
        
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  // Set initial state
  neuralPath.style.strokeDashoffset = '1000';
  
  const nodes = document.querySelectorAll('.neural-node');
  nodes.forEach(node => {
    node.style.opacity = '0';
    node.style.transform = 'scale(0.5)';
    node.style.transition = 'all 0.5s ease';
  });
  
  observer.observe(neuralPath);
}
function setupNeuralNodes() {
  const nodes = document.querySelectorAll('.neural-node');
  const cards = document.querySelectorAll('.edu-card');
  
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const year = node.getAttribute('data-year');
      
      // Highlight the corresponding card
      cards.forEach(card => {
        if (card.getAttribute('data-year') === year) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('highlighted');
          
          // Remove highlight after animation
          setTimeout(() => {
            card.classList.remove('highlighted');
          }, 2000);
        }
      });
      
      // Create pulse effect at the node
      createNodePulse(node);
    });
    
    // Add hover effect
    node.addEventListener('mouseenter', () => {
      const year = node.getAttribute('data-year');
      cards.forEach(card => {
        if (card.getAttribute('data-year') === year) {
          card.style.transform = 'translateY(-5px)';
          card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
        }
      });
    });
    
    node.addEventListener('mouseleave', () => {
      cards.forEach(card => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  });
}
function createNodePulse(node) {
  const pulse = document.createElement('div');
  pulse.className = 'node-extra-pulse';
  pulse.style.position = 'absolute';
  pulse.style.top = '50%';
  pulse.style.left = '50%';
  pulse.style.width = '20px';
  pulse.style.height = '20px';
  pulse.style.borderRadius = '50%';
  pulse.style.background = 'var(--accent-color)';
  pulse.style.transform = 'translate(-50%, -50%)';
  pulse.style.opacity = '0.7';
  pulse.style.animation = 'nodePulse 1s ease-out forwards';
  pulse.style.zIndex = '10';
  
  node.appendChild(pulse);
  
  // Remove after animation
  setTimeout(() => {
    pulse.remove();
  }, 1000);
}
function animateEducationCards() {
  const cards = document.querySelectorAll('.edu-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 150);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    observer.observe(card);
  });
}
function createNeuralParticles() {
  const container = document.getElementById('neural-particles');
  if (!container) return;
  
  // Create particles
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'neural-particle';
    
    // Random size
    const size = Math.random() * 4 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    // Random animation duration
    const duration = Math.random() * 20 + 10;
    particle.style.animation = `floatParticle ${duration}s infinite ease-in-out`;
    
    // Random delay
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(particle);
  }
}
// ===== PROFILE PARTICLES =====
function initProfileParticles() {
  const container = document.querySelector('.profile-particles');
  if (!container) return;
  
  // Create particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'profile-particle';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random animation duration
    const duration = Math.random() * 10 + 5;
    
    // Random delay
    const delay = Math.random() * 5;
    
    // Set styles
    particle.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background-color: var(--accent-color);
      opacity: 0.7;
      box-shadow: 0 0 ${size * 2}px var(--accent-color);
      animation: floatParticle ${duration}s infinite ease-in-out;
      animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
  }
}
// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <div class="notification-icon">
        ${type === 'success' ? '<i class="fas fa-check-circle"></i>' : 
          type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' : 
          '<i class="fas fa-info-circle"></i>'}
      </div>
      <div class="notification-message">${message}</div>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Auto remove after 5 seconds
  const autoRemove = setTimeout(() => {
    removeNotification(notification);
  }, 5000);
  
  // Close button
  const closeBtn = notification.querySelector('.notification-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      clearTimeout(autoRemove);
      removeNotification(notification);
    });
  }
}
function removeNotification(notification) {
  notification.classList.remove('show');
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}
function createRipple(event, button) {
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");
  
  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  
  button.appendChild(circle);
}
// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
    });
    
    // Close sidebar when clicking outside (mobile only)
    document.addEventListener('click', function(event) {
      if (window.innerWidth <= 768 && !sidebar.classList.contains("hidden")) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
          sidebar.classList.add("hidden");
        }
      }
    });
  }
});
// Add CSS for sidebar particles
const style = document.createElement('style');
style.textContent = `
  .sidebar-particle {
    position: absolute;
    border-radius: 50%;
    background-color: var(--accent-color);
    opacity: 0.3;
    pointer-events: none;
  }
  
  @keyframes floatParticle {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
    50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
    75% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
  }
`;
document.head.appendChild(style);
// Add CSS for neural particles and node pulse
const neuralStyle = document.createElement('style');
neuralStyle.textContent = `
  .neural-particle {
    position: absolute;
    border-radius: 50%;
    background-color: var(--accent-color);
    pointer-events: none;
  }
  
  @keyframes floatParticle {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
    50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
    75% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
  }
  
  @keyframes nodePulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) scale(5);
      opacity: 0;
    }
  }
  
  .highlighted {
    animation: cardHighlight 2s ease;
  }
  
  @keyframes cardHighlight {
    0%, 100% {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      border-color: rgba(255, 255, 255, 0.1);
    }
    50% {
      box-shadow: 0 0 30px var(--accent-color);
      border-color: var(--accent-color);
    }
  }
  
  [data-theme="light"] .highlighted {
    animation: cardHighlightLight 2s ease;
  }
  
  @keyframes cardHighlightLight {
    0%, 100% {
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, 0.1);
    }
    50% {
      box-shadow: 0 0 30px var(--accent-color);
      border-color: var(--accent-color);
    }
  }
`;
document.head.appendChild(neuralStyle);

// Add this to your initialization code to ensure no rotation
document.addEventListener("DOMContentLoaded", () => {
  // Ensure no rotation on profile elements
  const profileRings = document.querySelectorAll('.ring');
  const profileImageWrapper = document.querySelector('.profile-image-wrapper');
  const profileImage = document.querySelector('.profile-image');
  const hologramOverlay = document.querySelector('.hologram-overlay');
  const scanLine = document.querySelector('.scan-line');
  const profileGlow = document.querySelector('.profile-glow');
  const profileParticles = document.querySelector('.profile-particles');
  
  // Remove any animation that might cause rotation
  [profileRings, profileImageWrapper, profileImage, hologramOverlay, scanLine, profileGlow, profileParticles].flat().forEach(element => {
    if (element) {
      element.style.animation = 'none';
      // Force reflow to ensure animation is removed
      void element.offsetWidth;
    }
  });
  
  // Re-apply non-rotation animations
  if (hologramOverlay) {
    hologramOverlay.style.animation = 'hologramShift 8s infinite linear';
  }
  
  if (scanLine) {
    scanLine.style.animation = 'scanLine 4s linear infinite';
  }
  
  if (profileGlow) {
    profileGlow.style.animation = 'glowPulse 4s ease-in-out infinite';
  }
});
