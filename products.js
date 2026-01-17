const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const type = params.get("type");

console.log("Category:", category);
console.log("Type:", type);

const container = document.getElementById("productsContainer");

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    console.log("JSON Loaded:", data);

    const products = data?.[category]?.[type] || [];
    console.log("Products found:", products);

    if (products.length === 0) {
      container.innerHTML = `
        <p class="text-center col-span-full text-gray-500">
          No products found
        </p>`;
      return;
    }

    products.forEach(item => {
      const card = document.createElement("div");
      card.className = "bg-white shadow rounded p-3 cursor-pointer";

      card.innerHTML = `
        <img src="${item.image}" class="w-full h-48 object-cover rounded">
        <p class="mt-2 font-semibold text-center">${item.name}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Fetch error:", err);
  });
