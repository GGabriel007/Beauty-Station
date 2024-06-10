document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const selectedImage = document.getElementById('selectedImage');


    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            selectedImage.src = thumbnail.src;
        })
    } )
})