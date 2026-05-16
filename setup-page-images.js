const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'public/assets/img/amenities',
  'public/assets/img/attractions'
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`Created: ${dir}`);
});

// Create placeholder images
const placeholders = {
  'public/assets/img/amenities/hero-amenities.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 600"><rect width="1920" height="600" fill="#2c3e50"/><text x="960" y="300" font-size="48" fill="#ffffff" text-anchor="middle">Petit Ermitage Amenities</text></svg>',
  'public/assets/img/attractions/hero-attractions.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 600"><rect width="1920" height="600" fill="#34495e"/><text x="960" y="300" font-size="48" fill="#ffffff" text-anchor="middle">West Hollywood Attractions</text></svg>',
  'public/assets/img/attractions/getty-center.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#7f8c8d"/><text x="400" y="300" font-size="36" fill="#ffffff" text-anchor="middle">Getty Center</text></svg>',
  'public/assets/img/attractions/sunset-strip.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#e67e22"/><text x="400" y="300" font-size="36" fill="#ffffff" text-anchor="middle">Sunset Strip</text></svg>',
  'public/assets/img/attractions/melrose-district.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#9b59b6"/><text x="400" y="300" font-size="36" fill="#ffffff" text-anchor="middle">Melrose Arts District</text></svg>',
  'public/assets/img/attractions/hollywood-bowl.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#27ae60"/><text x="400" y="300" font-size="36" fill="#ffffff" text-anchor="middle">Hollywood Bowl</text></svg>',
  'public/assets/img/attractions/griffith-observatory.jpg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#2980b9"/><text x="400" y="300" font-size="36" fill="#ffffff" text-anchor="middle">Griffith Observatory</text></svg>'
};

Object.entries(placeholders).forEach(([filepath, content]) => {
  fs.writeFileSync(filepath, content);
  console.log(`Created: ${filepath}`);
});

console.log('\n✅ Amenities and Attractions page images created!');
