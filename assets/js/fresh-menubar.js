var timer;

      function openNav(id) {
        // Hide all submenus initially
        var menus = document.getElementsByClassName("menu-overlay");
        for (var i = 0; i < menus.length; i++) {
          menus[i].style.display = "none";
        }

        // Display the submenu with the given id
        var submenu = document.getElementById(id);
        submenu.style.display = "flex";

        submenu.style.display = "block";
        submenu.style.position = "fixed";
        submenu.style.width = "84%";
        submenu.style.top = "100%";
        submenu.style.borderRadius = "8px";
        submenu.style.marginLeft = "200px";
        submenu.style.marginRight = "200px";
      }

      function closeNav(id) {
        // Delay closing the submenu to allow time for mouse to enter it
        timer = setTimeout(function () {
          // Hide the submenu with the given id
          document.getElementById(id).style.display = "none";
        }, 10000); // Adjust the delay as needed
      }

      function cancelClose() {
        // Cancel the scheduled closing of the submenu
        clearTimeout(timer);
      }

      // when clicking out side of sub-menu it will disappear

      function closeSubMenu(menuId) {
        var subMenu = document.getElementById(menuId);
        subMenu.style.display = "none";
      }

      // Add event listeners to the parent elements
      document.getElementById("service-menu").addEventListener("mouseleave", function () {
          closeSubMenu("service-menu");
        });

      document.getElementById("careers-menu").addEventListener("mouseleave", function () {
          closeSubMenu("careers-menu");
        });

      document.getElementById("industries-menu").addEventListener("mouseleave", function () {
          closeSubMenu("industries-menu");
        });

      //Hovered for gray color prasad [24-04-24]
      // JavaScript

      document.getElementById("about-us-menu-parent").addEventListener("mouseover", function () {
        openNav("about-us-menu");
      });
      document.getElementById("blog-menu-parent").addEventListener("mouseover", function () {
        openNav("blog-menu");
      });
      
     
      
      document
        .getElementById("service-menu-parent")
        .addEventListener("mouseover", function () {
          document.getElementById("service-menu").classList.add("hovered");
        });

      document
        .getElementById("industries-menu-parent")
        .addEventListener("mouseover", function () {
          document.getElementById("industries-menu").classList.add("hovered");
        });

      document
        .getElementById("careers-menu-parent")
        .addEventListener("mouseover", function () {
          document.getElementById("careers-menu").classList.add("hovered");
        });


       
          
         

      //