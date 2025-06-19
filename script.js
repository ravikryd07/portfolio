// 🌗 Theme Toggle Logic + Typing + Scroll Observer
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle button");
  const body = document.body;

  // ✅ Set default to dark mode
  body.classList.remove("light");
  body.classList.add("dark");

  // ✅ Theme toggle button logic
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");
  });

  // 🔡 Typing Animation in About Section
  const typingTexts = ["Passionate Coder", "Aspiring Software Developer"];
  let typingIndex = 0;
  let charIndex = 0;
  const typingElement = document.querySelector(".animated-text");

  function typeEffect() {
    if (charIndex < typingTexts[typingIndex].length) {
      typingElement.textContent += typingTexts[typingIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingElement.textContent = typingTexts[typingIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      typingIndex = (typingIndex + 1) % typingTexts.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  // 🧭 Smooth Scrolling from Sidebar
  document.querySelectorAll('.sidebar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // ☰ Sidebar Toggle for Mobile
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("hidden");
  });

  // ✨ Scroll Reveal for Sections
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('hidden'); // Remove hidden class on appear
      }else {
      entry.target.classList.remove('visible'); // 👈 This allows animation to restart
      entry.target.classList.add('hidden');
    }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add('hidden'); // Set initial hidden
    observer.observe(section);
  });

  // 📚 Reveal Education Timeline Blocks (if used separately)
  const timelineBlocks = document.querySelectorAll('.timeline-block');

  function revealTimeline() {
    timelineBlocks.forEach(block => {
      const top = block.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        block.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealTimeline);
  revealTimeline(); // Trigger on load
});

// ✨ Particles JS in About Section
tsParticles.load("particles-js", {
  fullScreen: false,
  background: {
    color: "transparent"
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 120,
      enable: true,
      opacity: 0.3,
      width: 1
    },
    collisions: {
      enable: false
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce"
      },
      random: true,
      speed: 0.7,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 70 // 👈 Increase particle count here
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 4 }
    }
  },
  detectRetina: true
});

// ✨ Contact Us Section Particles (📞 ✉️ 💬)
tsParticles.load("contact-particles", {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: {
      value: 65,
      density: { enable: true, area: 800 }
    },
    shape: {
      type: "char",
      character: [
        { value: "📞", font: "Verdana", style: "", weight: "400" },
        { value: "💬", font: "Verdana", style: "", weight: "400" },
        
      ]
    },
    size: {
      value: 20,
      random: true
    },
    opacity: {
      value: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      outModes: { default: "bounce" },
      straight: false
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  retina_detect: true
});
