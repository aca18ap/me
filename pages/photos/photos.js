document.addEventListener('DOMContentLoaded', function() {
    const FOLDER_MAP = {
        'architecture-carousel': 'architecture',
        'landscape-carousel': 'landscapes',
        'city-views-carousel': 'city_views',
        'animals-carousel': 'animals'
    };

    async function initializeCarousel(carouselId) {
        const container = document.querySelector(`#${carouselId}`);
        const folderPath = `https://portfolio-images.albi-pia99.workers.dev/${FOLDER_MAP[carouselId]}`;
        const imageContainer = container.querySelector('.carousel-images');
        
        try {
            const response = await fetch(`${folderPath}/index.json`);
            const images = await response.json();
            
            // Clear loading message
            imageContainer.innerHTML = '';
            
            let currentIndex = 0;
            const imageElements = [];
            
            // Create image elements but don't set src yet (except first)
            images.forEach((imageName, index) => {
                const img = document.createElement('img');
                img.dataset.src = `${folderPath}/${imageName}`; // Store URL in data attribute
                img.alt = `${FOLDER_MAP[carouselId]} photo ${index + 1}`;
                img.classList.add('carousel-image');
                img.style.position = 'absolute';
                img.style.top = '0';
                img.style.left = '0';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in-out';

                // Only load the first image immediately
                if (index === 0) {
                    img.src = img.dataset.src;
                    img.style.opacity = '1';
                }
                
                imageContainer.appendChild(img);
                imageElements.push(img);
            });

            function loadImage(index) {
                const img = imageElements[index];
                // Only load if not already loaded
                if (!img.src && img.dataset.src) {
                    img.src = img.dataset.src;
                }
            }

            function showImage(index) {
                imageElements.forEach((img, i) => {
                    if (i === index) {
                        img.style.opacity = '1';
                        img.style.zIndex = '1';
                        // Preload next and previous images
                        loadImage(index);
                        loadImage((index + 1) % imageElements.length); // Next
                        loadImage((index - 1 + imageElements.length) % imageElements.length); // Prev
                    } else {
                        img.style.opacity = '0';
                        img.style.zIndex = '0';
                    }
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
            imageContainer.innerHTML = '<p>Error loading images</p>';
        }
    }

    // Initialize all carousels
    initializeCarousel('architecture-carousel');
    initializeCarousel('landscape-carousel');
    initializeCarousel('city-views-carousel');
    initializeCarousel('animals-carousel');
});