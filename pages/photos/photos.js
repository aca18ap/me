document.addEventListener('DOMContentLoaded', function() {
    
    const container = document.querySelector('.carousel-container');
    for (let i = 4; i < 37; i++) {
        container.innerHTML += (`<img class="carousel-image" src="../../assets/landscapes/${i}.jpg" alt="Image ${i}">`);
    }
    
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    document.querySelector('.carousel-button.prev').onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    };

    document.querySelector('.carousel-button.next').onclick = function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    };

    showImage(currentIndex);
});
