// Array of image URLs
let images = [
    'images/1.png',
    'images/1.png',
    'images/2.png',
    'images/3,8,22.png',
    'images/4,10,21,24.png',
    'images/5.png',
    'images/6,12,16.png',
    'images/7.png',
    'images/3,8,22.png',
    'images/9.png',
    'images/4,10,21,24.png',
    'images/11.png',
    'images/6,12,16.png',
    'images/13.png',
    'images/14.png',
    'images/15.png',
    'images/6,12,16.png',
    'images/17.png',
    'images/18.png',
    'images/19.png',
    'images/20.png',
    'images/4,10,21,24.png',
    'images/3,8,22.png',
    'images/23.png',
    'images/4,10,21,24.png',
    'images/25.png',
    'images/26.png',
    'images/27.png',
    'images/28.png',
    'images/29.png',
    'images/30.png' // Replace with your actual image paths  
    ];

// Keep track of the current image index
let currentIndex = 0;

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image in the array
    document.getElementById("slider").src = images[currentIndex]; // Change the image source
}

// Event listener for clicks and touch anywhere on the screen
document.body.addEventListener('click', changeImage);
document.body.addEventListener('touchstart', changeImage);
