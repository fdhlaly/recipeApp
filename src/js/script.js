import recipe from "../data/arrayData/recipe.js";

const container = document.getElementById("container");
const searchInput = document.getElementById("search");

const renderRecipes = (filteredRecipes) => {
  container.innerHTML = ""; // Clear existing content
  filteredRecipes.forEach((resep) => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";
    recipeCard.onclick = () =>
      viewDetail(resep.nama, resep.bahan, resep.langkah, resep.imageUrl);

    const recipeImage = document.createElement("img");
    recipeImage.className = "recipe-image";
    recipeImage.alt = resep.nama;
    recipeImage.src = resep.imageUrl;

    const recipeTitle = document.createElement("p");
    recipeTitle.className = "recipe-title";
    recipeTitle.textContent = resep.nama;

    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeTitle);
    container.appendChild(recipeCard);
  });
};

const viewDetail = (nama, bahan, langkah, image) => {
  console.log(`Nama masakan: ${nama}`);
  window.location.href = `index2.html?nama=${encodeURIComponent(
    nama
  )}&bahan=${encodeURIComponent(bahan)}&langkah=${encodeURIComponent(
    langkah
  )}&image=${encodeURIComponent(image)}`;
};

document.addEventListener("DOMContentLoaded", () => {
  // Ensure recipe data is loaded
  if (recipe.length === 0) {
    console.error("Recipe data is empty or not loaded correctly.");
  } else {
    renderRecipes(recipe); // Render all recipes initially
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = recipe.filter((resep) =>
      resep.nama.toLowerCase().includes(query)
    );
    renderRecipes(filteredRecipes);
  });
});
