document.addEventListener('DOMContentLoaded', function() {
    console.log('DatXB website loaded!');
    
    // Slider functionality
    let currentSlideIndex = 1;
    showSlide(currentSlideIndex);
    
    // Expose currentSlide function globally
    window.currentSlide = function(n) {
        showSlide(currentSlideIndex = n);
    };
    
    // Auto slide functionality
    setInterval(function() {
        currentSlideIndex++;
        if (currentSlideIndex > 3) {
            currentSlideIndex = 1;
        }
        showSlide(currentSlideIndex);
    }, 8000);
    
    // Navigation menu functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Handle navigation - could add specific page/section navigation here
            console.log('Navigating to:', link.textContent);
        });
    });
    
    // CTA Buttons
    const ctaButtons = document.querySelectorAll('.primary-btn, .secondary-btn, .get-report-btn, .book-demo-btn, .login-link');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Button clicked:', button.textContent);
            
            // Special handling for specific buttons
            if (button.textContent.includes('Free Report')) {
                showModal('report-modal');
            } else if (button.textContent.includes('Book a demo')) {
                showModal('demo-modal');
            }
        });
    });
    
    // Action buttons
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            actionBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            console.log('Action selected:', btn.textContent);
        });
    });
});

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.hero');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.add('hidden');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the specific slide and activate corresponding dot
    slides[n-1].classList.remove('hidden');
    dots[n-1].classList.add('active');
}

// Modal functionality
function showModal(modalId) {
    console.log('Would show modal:', modalId);
    // In a real implementation, this would create and display a modal
    alert('This would open the ' + modalId + ' in a real implementation.');
}