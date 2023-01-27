const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg' : 'Left human eye',
    'pic2.jpg' : 'Rough art',
    'pic3.jpg' : 'White and purple hibicus flowers',
    'pic4.jpg' : 'Eypgt\'s painting',
    'pic5.jpg' : 'Butterfly'
}
/* Looping through images */

for (const pics of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${pics}`);
    newImage.setAttribute('alt', altText[pics]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', imageDisplayed);
        

    function imageDisplayed(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    };
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', darkLightBtn);

function darkLightBtn() {
    const classBtn = btn.getAttribute('class');
    if (classBtn === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = '#000';
        overlay.style.opacity = '0.5';
    } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = '#000';
    overlay.style.opacity = '0';
    };
};
