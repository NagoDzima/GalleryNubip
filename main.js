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
    document.getElementById('fon').addEventListener("click", closeAllGalleries);
    document.getElementById('close-button').addEventListener('click', closeAllGalleries);

    // Helper to close all galleries
    function closeAllGalleries() {
        galleries.forEach(gallery => {
            gallery.classList.remove('show');
        });
        fon.classList.remove('show');
        document.getElementById('close-button').classList.remove('show');
        document.getElementById('galleries').classList.remove('show');
    }

    // Open gallery by index
    function openGallery(index) {
        closeAllGalleries();
        galleries[index].classList.add('show');
        fon.classList.add('show');
        document.getElementById('close-button').classList.add('show');
        document.getElementById('galleries').classList.add('show');
    }

    // Add click events to buttons
    buttons.forEach((button, idx) => {
        button.addEventListener('click', () => {
            openGallery(idx);
        });
    });
});