const fs = require('fs');
const path = require('path');

const images = {
  'public/assets/img/amenities/hero-amenities.jpg': 'Amenities Hero',
  'public/assets/img/attractions/hero-attractions.jpg': 'Attractions Hero',
  'public/assets/img/amenities/gym.jpg': '24-hour Private Gym',
  'public/assets/img/amenities/pool.jpg': 'Pool',
  'public/assets/img/amenities/mini-bar.jpg': 'Gourmet Mini Bar',
  'public/assets/img/amenities/valet.jpg': 'Valet Parking',
  'public/assets/img/amenities/pet-friendly.jpg': 'Pet Friendly',
  'public/assets/img/amenities/rooftop-garden.jpg': 'Rooftop Garden',
  'public/assets/img/amenities/wifi.jpg': 'Free Wi-Fi',
  'public/assets/img/amenities/bath-products.jpg': 'Grown Alchemist',
  'public/assets/img/amenities/robes.jpg': 'Terry Robes',
  'public/assets/img/amenities/laundry.jpg': 'Laundry Service',
  'public/assets/img/amenities/fireplace.jpg': 'Fireplaces',
  'public/assets/img/amenities/artwork.jpg': 'Original Artwork',
  'public/assets/img/attractions/rodeo-drive.jpg': 'Rodeo Drive',
  'public/assets/img/attractions/runyon-canyon.jpg': 'Runyon Canyon',
  'public/assets/img/attractions/beverly-hills-hotel.jpg': 'Beverly Hills Hotel'
};

Object.entries(images).forEach(([filepath, label]) => {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#4a4a4a"/><text x="400" y="300" font-size="30" fill="white" text-anchor="middle">${label}</text></svg>`;
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`Created: ${filepath}`);
});

console.log('\n✅ All amenity and attraction images created!');
