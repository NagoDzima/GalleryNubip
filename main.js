document.addEventListener('DOMContentLoaded', function() {
    // Get references to buttons, galleries, and fon overlay
    const buttons = [
        document.getElementById('first-button'),
        document.getElementById('second-button'),
        document.getElementById('third-button'),
        document.getElementById('fourth-button')
    ];
    const galleries = [
        document.getElementById('first-gallery'),
        document.getElementById('second-gallery'),
        document.getElementById('third-gallery'),
        document.getElementById('fourth-gallery')
    ];
    const fon = document.getElementById('fon');

    // Helper to close all galleries
    function closeAllGalleries() {
        galleries.forEach(gallery => {
            gallery.classList.remove('show');
        });
        fon.classList.remove('show');
    }

    // Open gallery by index
    function openGallery(index) {
        closeAllGalleries();
        galleries[index].classList.add('show');
        fon.classList.add('show');
    }

    // Add click events to buttons
    buttons.forEach((button, idx) => {
        button.addEventListener('click', () => {
            openGallery(idx);
        });
    });

    // Add click event to fon to close gallery
    fon.addEventListener('click', closeAllGalleries);
});