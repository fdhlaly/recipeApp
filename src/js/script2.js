document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const nama = params.get("nama");
  const bahan = params.get("bahan");
  const langkah = params.get("langkah");
  const imageUrl = params.get("image");

  const containerDetail = document.getElementById("container-detail");

  if (containerDetail) {
    containerDetail.innerHTML = "";
    if (nama) {
      const recipeTitleDetail = document.createElement("h2");
      recipeTitleDetail.className = "recipe-title-detail";
      recipeTitleDetail.textContent = nama;
      containerDetail.appendChild(recipeTitleDetail);
    }
    const recipeCardDetail = document.createElement("div");
    recipeCardDetail.className = "recipe-card-detail";
    containerDetail.appendChild(recipeCardDetail);

    const recipeImageDetail = document.createElement("div");
    recipeImageDetail.className = "recipe-image-detail";
    recipeCardDetail.appendChild(recipeImageDetail);

    if (imageUrl) {
      const image = document.createElement("img");
      image.src = imageUrl;
      image.alt = nama;
      recipeImageDetail.appendChild(image);
    }

    const recipeContent = document.createElement("div");
    recipeContent.className = "recipe-content";
    recipeCardDetail.appendChild(recipeContent);

    const ingredients = document.createElement("div");
    ingredients.className = "ingredients";
    recipeContent.appendChild(ingredients);

    const steps = document.createElement("div");
    steps.className = "steps";
    recipeContent.appendChild(steps);

    if (bahan) {
      const h3 = document.createElement("h3");
      h3.textContent = "Bahan-Bahan";
      ingredients.appendChild(h3);

      const ul = document.createElement("ul");
      ingredients.appendChild(ul);

      bahan.split(",").forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
    }

    if (langkah) {
      const h3 = document.createElement("h3");
      h3.textContent = "Langkah-Langkah";
      steps.appendChild(h3);

      const ol = document.createElement("ol");
      steps.appendChild(ol);

      langkah.split(",").forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ol.appendChild(li);
      });
    }
  }

  const backButton = document.createElement("button");
  backButton.textContent = "Kembali";
  backButton.className = "back-btn";
  backButton.onclick = () => backToMain();
  containerDetail.appendChild(backButton);

  const backToMain = () => {
    location.href = "index.html";
  };
});
