// مؤشر عالمي لتتبع الصورة الحالية
let num = 0;

// Function to change the background image based on direction
function changeBackground(direction, urlImages, image) {
  // Add transition effect
  image.classList.add(direction === 'right' ? 'op-an-left' : 'op-an-right');
  setTimeout(() => {
    // Update the image index based on the direction
    if (direction === 'right') {
      num = (num + 1) % urlImages.length; // الانتقال للصورة التالية
    } else {
      num = (num - 1 + urlImages.length) % urlImages.length; // العودة للصورة السابقة
    }
    // Update the image source
    image.src = urlImages[num];
  }, 400);
  setTimeout(() => {
    // Remove transition effect
    image.classList.remove(direction === 'right' ? 'op-an-left' : 'op-an-right');
  }, 1000);
}

// Function to set up buttons for image navigation
function setupBlogButtons(blogImages, imageElement, leftButton, rightButton) {
  leftButton.onclick = () => changeBackground('left', blogImages, imageElement);
  rightButton.onclick = () => changeBackground('right', blogImages, imageElement);
}

// Image paths and extensions for blog sections
let blogsrc = `images/`;
let blogType = '.webp';
let blogImages = [
  [`${blogsrc}s1${blogType}`, `${blogsrc}s2${blogType}`, `${blogsrc}s3${blogType}`, `${blogsrc}s4${blogType}`],
  [`${blogsrc}s5${blogType}`, `${blogsrc}s6${blogType}`, `${blogsrc}s7${blogType}`, `${blogsrc}s8${blogType}`],
  [`${blogsrc}s9${blogType}`, `${blogsrc}s10${blogType}`, `${blogsrc}s11${blogType}`, `${blogsrc}s12${blogType}`, `${blogsrc}s13${blogType}`]
];

// Setup navigation for each blog section
setupBlogButtons(blogImages[0], document.querySelector('#blog-image-1'),
  document.querySelector('.blog-left-button1'), document.querySelector('.blog-right-button1'));

setupBlogButtons(blogImages[1], document.querySelector('#blog-image-2'),
  document.querySelector('.blog-left-button2'), document.querySelector('.blog-right-button2'));

setupBlogButtons(blogImages[2], document.querySelector('#blog-image-3'),
  document.querySelector('.blog-left-button3'), document.querySelector('.blog-right-button3'));

// Image paths and extensions for the "about" section
let imagesscr = `images/`;
let srctype = '.webp';
let aboutImages = [
  `${imagesscr}s1${srctype}`, `${imagesscr}s2${srctype}`, `${imagesscr}s3${srctype}`,
  `${imagesscr}s4${srctype}`, `${imagesscr}s5${srctype}`, `${imagesscr}s6${srctype}`
];

// Setup navigation for the "about" section
let aboutImage = document.querySelector('#about-image');
let rightButton = document.querySelector('.right-button');
let leftButton = document.querySelector('.left-button');
setupBlogButtons(aboutImages, aboutImage, leftButton, rightButton);
