const fs = require('fs');
const path = require('path');

const roomsImages = [
  'demi-double.jpg',
  'belle-suite.jpg',
  'grand-belle-verte.jpg',
  'grand-belle-rouge.jpg',
  'junior-queen-suite.jpg',
  'junior-king-suite.jpg',
  'executive-suite.jpg',
  'executive-kitchenette-suite.jpg',
  'one-bedroom-suite.jpg',
  'hero-rooms.jpg'
];

roomsImages.forEach(imageName => {
  const filepath = path.join('public/assets/img/rooms-and-suites', imageName);
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#4a4a4a"/><text x="400" y="300" font-size="30" fill="white" text-anchor="middle">${imageName.replace('.jpg', '').replace(/-/g, ' ')}</text></svg>`;
  
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, svgContent);
    console.log(`Created: ${filepath}`);
  }
});

console.log('\n✅ Additional room images created!');
