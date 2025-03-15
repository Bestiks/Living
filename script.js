document.addEventListener("DOMContentLoaded", () => {
    // Get the mobile menu button and mobile menu elements
    const mobileMenuButton = document.querySelector(".nav__mobile-menu")
    const mobileMenu = document.querySelector(".nav__mobile")
  
    // Check if elements exist before adding event listeners
    if (mobileMenuButton && mobileMenu) {
      // Toggle menu when button is clicked
      mobileMenuButton.addEventListener("click", function (event) {
        // Prevent default behavior and stop propagation
        event.preventDefault()
        event.stopPropagation()
  
        // Toggle active classes
        this.classList.toggle("nav__mobile-menu--active")
        mobileMenu.classList.toggle("active")
  
        // Update aria-expanded attribute
        const isExpanded = this.classList.contains("nav__mobile-menu--active")
        this.setAttribute("aria-expanded", isExpanded ? "true" : "false")
  
        console.log("Menu button clicked, active:", isExpanded)
      })
  
      // Close menu when clicking outside
      document.addEventListener("click", (event) => {
        // Check if click is outside menu and button
        if (
          mobileMenu.classList.contains("active") &&
          !mobileMenu.contains(event.target) &&
          !mobileMenuButton.contains(event.target)
        ) {
          // Remove active classes
          mobileMenu.classList.remove("active")
          mobileMenuButton.classList.remove("nav__mobile-menu--active")
          mobileMenuButton.setAttribute("aria-expanded", "false")
  
          console.log("Clicked outside, closing menu")
        }
      })
  
      // Add click handlers for mobile menu links
      const mobileLinks = mobileMenu.querySelectorAll(".nav__link")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          // Close menu when a link is clicked
          mobileMenu.classList.remove("active")
          mobileMenuButton.classList.remove("nav__mobile-menu--active")
          mobileMenuButton.setAttribute("aria-expanded", "false")
  
          console.log("Menu link clicked, closing menu")
        })
      })
  
      console.log("Mobile menu initialized")
    } else {
      console.error("Mobile menu elements not found")
    }
  })
  
  