document.addEventListener("DOMContentLoaded", function() {
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const openLightboxButtons = document.querySelectorAll('[id^="openLightbox"]');
    const closeLightboxButton = document.getElementById('closeLightbox');
    
    openLightboxButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imageUrl = this.querySelector('img').src;
            lightbox.style.display = 'flex';
            lightboxImage.src = imageUrl;
        });
    });

    closeLightboxButton.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});
