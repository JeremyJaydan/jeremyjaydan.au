
export function stringToComplexGradient(str) {
  // A more complex hash function to convert string to a number
  const hash = Array.from(str).reduce((acc, char) => {
      return (acc << 5) - acc + char.charCodeAt(0); // Bitwise hash
  }, 0);

  // Function to generate a color from a hash value
  function hashToColor(hashValue) {
      const r = (hashValue & 0xFF0000) >> 16;
      const g = (hashValue & 0x00FF00) >> 8;
      const b = (hashValue & 0x0000FF);
      return `rgb(${r % 256}, ${g % 256}, ${b % 256})`;
  }

  // Generate multiple colors based on the hash
  const colorStops = [];
  const numberOfColors = 5; // Number of colors in the gradient
  for (let i = 0; i < numberOfColors; i++) {
      const colorHash = hash + (i * 12345); // Offset for each color
      colorStops.push(hashToColor(colorHash));
  }

  // Create a gradient string with random angles and color stops
  const angle = Math.floor(Math.random() * 360); // Random angle for the gradient
  const gradient = `linear-gradient(${angle}deg, ${colorStops.join(', ')})`;

  return gradient;
}

export function stringToSolidBorderColor(str) {
  // A more complex hash function to convert string to a number
  const hash = Array.from(str).reduce((acc, char) => {
      return (acc << 5) - acc + char.charCodeAt(0); // Bitwise hash
  }, 0);

  // Function to generate a random color based on a seed
  function randomColor(seed) {
      const random = (seed * 9301 + 49297) % 233280; // Simple random number generator
      const r = Math.floor((random / 233280) * 256);
      const g = Math.floor((random / 233280) * 256);
      const b = Math.floor((random / 233280) * 256);
      return `rgb(${r}, ${g}, ${b})`;
  }

  // Generate a solid color based on the hash
  const solidColor = randomColor(hash);

  return solidColor;
}
