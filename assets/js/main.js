document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdown = document.getElementById('dropdown-menu');
    let isDropdownOpen = false; // Track the state of the dropdown
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const tooltip = document.getElementById('accessibility-tooltip');


    hamburgerMenu.addEventListener('click', function(event) {
        // Toggle the visibility of the dropdown menu
        dropdown.classList.toggle('show');
        isDropdownOpen = !isDropdownOpen; // Update the state

        // Depending on the state, add the appropriate animation class
        if (isDropdownOpen) {
            this.classList.add('spin-to-side');
            this.classList.remove('spin-back');
        } else {
            this.classList.remove('spin-to-side');
            this.classList.add('spin-back');
        }

        event.stopPropagation(); // Prevent the click from propagating
    });

    // Adds an event listener to the document to close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !hamburgerMenu.contains(event.target) && isDropdownOpen) {
            dropdown.classList.remove('show');
            hamburgerMenu.classList.remove('spin-to-side');
            hamburgerMenu.classList.add('spin-back');
            isDropdownOpen = false; // Update the state
        }
    });

    // Prevents the dropdown menu from closing when clicking inside of it
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Accessibility button tooltip
    accessibilityBtn.addEventListener('click', function() {
        // Toggle tooltip visibility
        if (tooltip.style.display === "none" || !tooltip.style.display) {
            tooltip.style.display = "block";
        } else {
            tooltip.style.display = "none";
        }
    });

});
