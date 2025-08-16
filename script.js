// Interactive features for Prof. Adebayo's website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive elements
    
    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.section, .card, .profile-container').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // Add click event to cards for subtle interaction
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 300);
        });
    });
    
    // Form validation for any contact forms (if added later)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            alert('Thank you for your message. Prof. Adebayo will contact you soon.');
            contactForm.reset();
        });
    }
});

// Function to scroll to top of page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add a "back to top" button that appears when scrolling down
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        if (!backToTopButton) {
            const button = document.createElement('button');
            button.id = 'back-to-top';
            button.innerHTML = '<i class="fas fa-arrow-up"></i>';
            button.onclick = scrollToTop;
            button.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            document.body.appendChild(button);
        } else {
            backToTopButton.style.display = 'flex';
        }
    } else if (backToTopButton) {
        backToTopButton.style.display = 'none';
    }
});