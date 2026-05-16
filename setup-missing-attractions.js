const fs = require('fs');
const path = require('path');

const missingImages = [
  'hero-attractions.jpg',
  'rodeo-drive.jpg',
  'runyon-canyon.jpg',
  'beverly-hills-hotel.jpg'
];

missingImages.forEach(imageName => {
  const filepath = path.join('public/assets/img/attractions', imageName);
  
  if (!fs.existsSync(filepath)) {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#4a4a4a"/><text x="400" y="300" font-size="30" fill="white" text-anchor="middle">${imageName.replace('.jpg', '').replace(/-/g, ' ')}</text></svg>`;
    fs.writeFileSync(filepath, svgContent);
    console.log(`Created: ${filepath}`);
  } else {
    console.log(`Exists: ${filepath}`);
  }
});

console.log('\n✅ All attraction images ready!');
