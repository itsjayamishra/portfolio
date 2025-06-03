// Background gradient animation on load
gsap.to('body', {
    background: 'linear-gradient(135deg, #00c4b4 0%, #1a3c34 100%)',
    duration: 2,
    ease: 'power2.out'
});

// Entrance and scroll animations
function animateContent() {
    // Animate profile image (only on home page)
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        gsap.fromTo(profileImg, 
            { opacity: 0, scale: 0.5, rotation: -90 }, 
            { opacity: 1, scale: 1, rotation: 0, duration: 1.8, ease: 'elastic.out(1, 0.5)' }
        );

        profileImg.addEventListener('mouseenter', () => {
            gsap.to(profileImg, { 
                rotation: 360, 
                scale: 1.2, 
                duration: 0.8, 
                ease: 'elastic.out(1, 0.3)' 
            });
        });
        profileImg.addEventListener('mouseleave', () => {
            gsap.to(profileImg, { 
                rotation: 0, 
                scale: 1, 
                duration: 0.8, 
                ease: 'elastic.out(1, 0.3)' 
            });
        });
    }

    // Staggered text animations
    gsap.fromTo(['h1', '.subtitle', 'h2', 'p'], 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: 'power2.out' }
    );

    // Scroll-triggered card animations
    gsap.utils.toArray('.project-card, .education-card, .skill-card').forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
}

// Nav button hover animations
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});

// Run animations on page load
document.addEventListener('DOMContentLoaded', () => {
    animateContent();
});