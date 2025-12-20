// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Set title
const title = {
  "gents": "Gents Collection",
  "ladies": "Ladies Collection",
  "kids": "Kids Collection",
  "mothers-baby": "Mothers & Baby Care",
  "bags": "Back Packs & Travelling Bags",
  "wearables": "Wearables"
};

document.getElementById("inventoryTitle").innerText =
  title[category] || "Our Collection";



  
  
  
  
  const inventoryGrid = document.getElementById("inventoryGrid");

const products = {
  gents: ["Shirt", "Jeans", "T-Shirt"],
  ladies: ["Dress", "Top", "Skirt"],
  kids: ["Kids Shirt","Skinnies" ,"Kids shorts","toys","shoes","Kids Shirt","Skinnies" ,"Kids shorts","toys","shoes","Kids Shirt","Skinnies" ,"Kids shorts","toys","shoes","Kids Shirt","Skinnies" ,"Kids shorts","toys","shoes","Kids Shirt","Skinnies" ,"Kids shorts","toys","shoes","Kids Shirt","Skinnies" ,"Kids shorts","toys","shoes"],
  "mothers-baby": ["Baby Dress", "Feeding Wear"],
  bags: ["Backpack", "Travel Bag"],
  wearables: ["Watch", "Smart Band"]
};

(products[category] || []).forEach(item => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow cursor-pointer hover:shadow-xl transition h-64";

  card.innerHTML = `
    <h3 class="font-semibold text-lg mb-2">${item}</h3>
    <p class="text-sm text-gray-600">Premium quality</p>
  `;

  inventoryGrid.appendChild(card);
});


