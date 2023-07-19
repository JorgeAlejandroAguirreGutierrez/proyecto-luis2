import Lightbox from 'bs5-lightbox';

document.querySelectorAll('.my-lightbox-toggle').forEach(el => el.addEventListener('click', Lightbox.initialize));



    var currentSlide = 0;
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var galleryImages = [
    'Img/1.jpg',
    'Img/2.jpg',
    'Img/3.jpg'
    // Add more image URLs here
    ];

    function openLightbox(index) {
    currentSlide = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.addEventListener('keydown', handleKeyboardNavigation);
}

    function closeLightbox() {
    lightbox.classList.remove('active');
    document.removeEventListener('keydown', handleKeyboardNavigation);
}

    function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
    currentSlide = galleryImages.length - 1;
} else if (currentSlide >= galleryImages.length) {
    currentSlide = 0;
}
    updateLightboxImage();
}

    function updateLightboxImage() {
    lightboxImage.src = galleryImages[currentSlide];
}

    function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft') {
    changeSlide(-1);
} else if (event.key === 'ArrowRight') {
    changeSlide(1);
} else if (event.key === 'Escape') {
    closeLightbox();
}
}

    function toggleCaption() {
    var caption = document.getElementById('lightbox-caption');
    if (caption.style.display === 'none') {
    caption.style.display = 'block';
} else {
    caption.style.display = 'none';
}
}
