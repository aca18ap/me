document.addEventListener('DOMContentLoaded', function() {
    const FOLDER_MAP = {
        'architecture-carousel': 'architecture',
        'landscape-carousel': 'landscapes',
        'city-views-carousel': 'cityviews',
        'animals-carousel': 'animals'
    };

    async function initializeCarousel(carouselId) {
        const container = document.querySelector(`#${carouselId}`);
        const folderPath = `http://aca18ap.github.io/me/assets/${FOLDER_MAP[carouselId]}`;
        const imageContainer = container.querySelector('.carousel-images');
        
        try {
            const response = await fetch(`${folderPath}/index.json`);
            const images = await response.json();
            
            // Clear existing images
            imageContainer.innerHTML = '';
            
            // Create image elements
            images.forEach((imageName, index) => {
                const img = document.createElement('img');
                img.src = `${folderPath}/${imageName}`;
                img.alt = `${FOLDER_MAP[carouselId]} photo ${index + 1}`;
                img.classList.add('carousel-image');
                img.loading = 'lazy';
                img.style.display = index === 0 ? 'block' : 'none';
                imageContainer.appendChild(img);
            });

            let currentIndex = 0;
            const imageElements = container.querySelectorAll('.carousel-image');

            function showImage(index) {
                imageElements.forEach((img, i) => {
                    img.style.display = (i === index) ? 'block' : 'none';
                });
            }

            container.querySelector('.carousel-button.prev').onclick = function() {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageElements.length - 1;
                showImage(currentIndex);
            };

            container.querySelector('.carousel-button.next').onclick = function() {
                currentIndex = (currentIndex < imageElements.length - 1) ? currentIndex + 1 : 0;
                showImage(currentIndex);
            };

        } catch (error) {
            console.error(`Error loading images for ${carouselId}:`, error);
            container.innerHTML = '<p>Error loading images</p>';
        }
    }

    // Initialize all carousels
    initializeCarousel('architecture-carousel');
    initializeCarousel('landscape-carousel');
    initializeCarousel('city-views-carousel');
    initializeCarousel('animals-carousel');
});