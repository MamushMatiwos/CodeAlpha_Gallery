const images = [
            { 
                id: 1, 
                src: "image/phone1.jpg", 
                title: "Apple", 
                category: "Smart phone" 
            },
            { 
                id: 2, 
                src: "image/pc1.jpg", 
                title: "Hp", 
                category: "Laptop" 
            },
            { 
                id: 3, 
                src: "image/sum1.jpg", 
                title: "I-phone", 
                category: "Phone" 
            },
            { 
                id: 4, 
                src: "image/sum2.jpg", 
                title: "Techno", 
                category: "Phone" 
            },
            { 
                id: 5, 
                src: "image/lab3.jpg", 
                title: "Huawei", 
                category: "Tablet" 
            },
            { 
                id: 6, 
                src: "image/phone2.jpg", 
                title: "Infinix", 
                category: "Smart phone" 
            },
            { 
                id: 7, 
                src: "image/pc2.jpg", 
                title: "Toshiba", 
                category: "Laptop" 
            },
            { 
                id: 8, 
                src: "image/lab2.jpg", 
                title: "Huawei", 
                category: "Tablet" 
            },
            { 
                id: 9, 
                src: "image/phone3.jpg", 
                title: "Huawei", 
                category: "Smart phone" 
            },
            { 
                id: 10, 
                src: "image/pc3.jpg", 
                title: "Lenovo", 
                category: "Laptop" 
            },
            { 
                id: 11, 
                src: "image/sum3.jpg", 
                title: "I-phone", 
                category: "Phone" 
            },
            { 
                id: 12, 
                src: "image/lab1.jpg", 
                title: "Sumsung", 
                category: "Tablet" 
            }
        ];
const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentImageIndex = 0;

function initGallery() {
    gallery.innerHTML = '';
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;

    const filteredImages = images.filter(image => {
        return activeFilter === 'all' || image.category === activeFilter;
    });

    filteredImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;
        imgElement.dataset.id = image.id;
        imgElement.classList.add('gallery-img');

        imgElement.addEventListener('click', () => {
            openLightbox(image.id);
        });

        gallery.appendChild(imgElement);
    });
}

function openLightbox(imageId) {
    currentImageIndex = images.findIndex(img => img.id === imageId);
    const image = images[currentImageIndex];

    lightboxImg.src = image.src;
    lightboxCaption.textContent = image.title;
    lightbox.classList.add('active');
}

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    updateLightboxImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    updateLightboxImage();
});

function updateLightboxImage() {
    const image = images[currentImageIndex];
    lightboxImg.src = image.src;
    lightboxCaption.textContent = image.title;
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        initGallery();
    });
});
initGallery();

