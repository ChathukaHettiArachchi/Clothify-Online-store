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
    {name:"Formal Shirts", image:"images/genshirt.jpg"},
     {name:"Casual Shirts", image:"images/gencasual.jpg"},
      {name:"T-shirts", image:"images/gentshirts.jpg"},
       {name:"Pants", image:"images/genpants.jpg"},
       {name:"Jeans", image:"images/genjeans.jpg"},
       {name:"Shorts"},
        {name:"Bottoms"}
       
  ]
};




(collection[category] || []).forEach(item => {
  
  const wrapper=document.createElement("div");
  wrapper.className="flex flex-col items-center justify-center h-full";

  const card = document.createElement("div");
  card.className="bg-white p-4 w-40 rounded-full shadow cursor-pointer hover:shadow-xl transition h-40 bg-center bg-contain ";
  card.style.backgroundImage=`url(${item.image})`;
  card.style.backgroundSize = "75%";
card.style.backgroundRepeat = "no-repeat";
card.style.backgroundPosition = "center";
  
 

const text=document.createElement("p");
text.className="text-center font-bold mt-2 text-2xl";
text.innerHTML=item.name;
 
  wrapper.appendChild(card);
  wrapper.appendChild(text);
  collectiontypes.appendChild(wrapper);
});


