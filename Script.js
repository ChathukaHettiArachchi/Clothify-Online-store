 const btn = document.getElementById("menuBtn");
        const menu = document.getElementById("mobileMenu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });


        
        // direct to inventory page
        function goToInventory(category) {
    window.location.href = `inventory.html?category=${category}`;
  }


  