// Scroll Reveal Animation Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Sticky Navbar Background & Active Link Highlighting
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');
    
    if (window.scrollY > 50) {
        nav.style.padding = '10px 0';
        nav.style.background = 'rgba(11, 9, 10, 0.95)';
    } else {
        nav.style.padding = '20px 0';
        nav.style.background = 'rgba(11, 9, 10, 0.9)';
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Modal Logic for Portfolio
function openModal(type) {
    const overlay = document.getElementById('modal-overlay');
    const body = document.getElementById('modal-body');
    overlay.style.display = 'flex';
    
    let content = '';
    if(type === 'research-modal') {
        content = '<h2>Research Projects</h2><p>List of GIS and IR papers from University of Peradeniya...</p>';
    } else if(type === 'story-modal') {
        content = '<h2>Story Maps</h2><p>Interactive ArcGIS and QGIS visual projects...</p>';
    } else if(type === 'content-modal') {
        content = '<h2>Public Content</h2><p>Articles on global politics and spatial science...</p>';
    } else if(type === 'vlog-modal') {
        content = '<h2>Travel Vlogs</h2><p>Links to YouTube or Vimeo storytelling pieces...</p>';
    }
    
    body.innerHTML = content;
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const overlay = document.getElementById('modal-overlay');
    if (event.target == overlay) {
        closeModal();
    }
}

// Form Submission (Prevent Default for Demo)
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you, Sandaru will get back to you soon!');
});