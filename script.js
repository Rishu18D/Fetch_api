document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const ageVerification = document.getElementById('age-verification');
    const ageYesButton = document.getElementById('age-yes');
    const ageNoButton = document.getElementById('age-no');
    const gallery = document.getElementById('gallery');

    const fetchPhotos = async () => {
        const apiKey = '44424785-1d818f5a568192e6301d48d61';
        const url = `https://pixabay.com/api/?key=${apiKey}&q=animals+nature+landscape+wallpaper&image_type=photo&per_page=200`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.hits && data.hits.length > 0) {
                data.hits.forEach(photo => {
                    const img = document.createElement('img');
                    img.src = photo.webformatURL;
                    img.alt = photo.tags;
                    img.dataset.large = photo.largeImageURL;
                    gallery.appendChild(img);
                });

                // Add click event to images for the modal
                document.querySelectorAll('.gallery img').forEach(img => {
                    img.addEventListener('click', (event) => {
                        openModal(event.target.dataset.large);
                    });
                });
            } else {
                console.log('No images found.');
            }
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    const openModal = (src) => {
        // Hide the gallery container when modal is open
        galleryContainer.style.display = 'none';

        modal.style.display = 'block';
        modalImg.src = src;
    };

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImg">
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById('modalImg');
    const closeModal = modal.querySelector('.close');

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        // Show the gallery container when modal is closed
        galleryContainer.style.display = 'block';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            // Show the gallery container when modal is closed
            galleryContainer.style.display = 'block';
        }
    });

    ageYesButton.addEventListener('click', () => {
        ageVerification.style.display = 'none';
        galleryContainer.style.display = 'block';
        fetchPhotos();
    });

    ageNoButton.addEventListener('click', () => {
        ageVerification.innerHTML = '<h1>You are Stupid</h1>';
    });
});
