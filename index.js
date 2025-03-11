// Distance from HQ (42nd street) in blocks
function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
  }
  
  // Distance from HQ in feet (1 block = 264 feet)
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Distance traveled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Calculate fare price based on distance
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances over 2000 feet
    } else {
      return "cannot travel that far"; // Above 2500 feet is not allowed
    }
  }
  
  // Export functions if needed
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  