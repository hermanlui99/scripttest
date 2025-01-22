// Plant Management Script

// Sample in-memory storage for plants
let plants = [
  { id: 1, name: "Plant A", location: "Greenhouse 1" },
  { id: 2, name: "Plant B", location: "Greenhouse 2" },
];

// Helper function to log the current plant list
function logPlants() {
  console.log("Current Plants:", JSON.stringify(plants, null, 2));
}

/**
 * Fetch all plants
 */
function getPlants() {
  console.log("Fetching all plants...");
  logPlants();
}


function createPlant(plant) {
  console.log(`Adding new plant: ${JSON.stringify(plant)}`);
  plants.push(plant);
  logPlants();
}

/**
 * Update an existing plant
 * @param {number} id - The ID of the plant to update
 * @param {Object} updatedData - The updated plant data
 */
function updatePlant(id, updatedData) {
  console.log(`Updating plant with ID: ${id}`);
  const plantIndex = plants.findIndex((p) => p.id === id);
  if (plantIndex !== -1) {
    plants[plantIndex] = { ...plants[plantIndex], ...updatedData };
    console.log("Plant updated successfully.");
  } else {
    console.log("Plant not found.");
  }
  logPlants();
}

/**
 * Delete a plant
 * @param {number} id - The ID of the plant to delete
 */
function deletePlant(id) {
  console.log(`Deleting plant with ID: ${id}`);
  plants = plants.filter((p) => p.id !== id);
  console.log("Plant deleted successfully.");
  logPlants();
}

// Example usage
console.log("=== Plant Management Example ===");

getPlants();

