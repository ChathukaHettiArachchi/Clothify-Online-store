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



const collectiontypes = document.getElementById("collectiontypes");

const collection ={
  gents:[
    {name:"Formal Shirts"},
     {name:"casual Shirts"},
      {name:"Casual T-shirts"},
       {name:"Pants"},
       {name:"Jeans"},
       {name:"Shorts"},
        {name:"Bottoms"}
       
  ]
};



(collection[category] || []).forEach(item => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded-full shadow cursor-pointer hover:shadow-xl transition h-64 ";

  card.innerHTML = `
    <h3 class="font-semibold text-lg mb-2">${item.name}</h3>
    <p class="text-sm text-gray-600">Premium quality</p>
  `;

  collectiontypes.appendChild(card);
});


