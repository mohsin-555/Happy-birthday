const giftBtn = document.getElementById('giftbtn');
const hero = document.querySelector('.hero');

// Array of 30 image paths - replace with your actual image filenames
const images = [
  '/images/image1.webp','/images/image2.webp','/images/image3.webp','/images/image4.webp','/images/image5.jpg',    
  '/images/image6.webp','/images/image7.webp','/images/image8.webp','/images/image9.webp','/images/image10.webp',
  '/images/image11.jpg','/images/image12.webp','/images/image13.webp','/images/image14.webp','/images/image15.webp',
];

giftBtn.addEventListener('click', () => {
  // Spawn all 30 images
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createFloatingImage(i);
    }, i * 100);
  }
});

function createFloatingImage(index) {
  const img = document.createElement('img');
  
  img.src = images[index];
  img.classList.add('floating-photo');
  
  // Start from center bottom
  img.style.left = '50%';
  img.style.bottom = '10%';
  
  // Random spread direction (360 degrees)
  const angle = Math.random() * 360;
  const distance = Math.random() * 600 + 400;
  const driftX = Math.cos(angle * Math.PI / 180) * distance;
  const driftY = Math.sin(angle * Math.PI / 180) * distance;
  
  img.style.setProperty('--drift-x', driftX + 'px');
  img.style.setProperty('--drift-y', driftY + 'px');
  
  // Random rotation
  const rotation = Math.random() * 720 - 360;
  img.style.setProperty('--rotation', rotation + 'deg');
  
  // Random duration
  const duration = Math.random() * 3 + 4;
  img.style.animationDuration = duration + 's';
  
  hero.appendChild(img);
  
  // Remove after animation
  setTimeout(() => {
    img.remove();
  }, duration * 1000);
}