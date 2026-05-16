const fs = require('fs');
const path = require('path');

// Simple SVG placeholders (no actual image files needed)
const placeholders = {
  'public/assets/img/home/hero.jpg': '<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#2c3e50"/><text x="50%" y="50%" font-size="40" fill="white" text-anchor="middle">Veloura Hero Image</text></svg>',
  'public/assets/img/rooms-and-suites/grand-belle-bleue.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#34495e"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Grand Belle Bleue</text></svg>',
  'public/assets/img/rooms-and-suites/demi-suite.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#34495e"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Demi Suite</text></svg>',
  'public/assets/img/rooms-and-suites/grand-belle-terrace.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#34495e"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Grand Belle Terrace</text></svg>',
  'public/assets/img/offers/extend-pleasure.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e67e22"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Extend Your Pleasure</text></svg>',
  'public/assets/img/offers/plan-ahead.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e67e22"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Plan Ahead</text></svg>',
  'public/assets/img/dining/rooftop-dining.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#27ae60"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Rooftop Dining</text></svg>',
  'public/assets/img/gallery/event-space.jpg': '<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#8e44ad"/><text x="50%" y="50%" font-size="30" fill="white" text-anchor="middle">Event Space</text></svg>'
};

Object.entries(placeholders).forEach(([filepath, svgContent]) => {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, svgContent);
  console.log(`Created: ${filepath}`);
});

console.log('\n✅ Placeholder images created!');
console.log('Note: Replace these with your actual images from the assets/img directory');
