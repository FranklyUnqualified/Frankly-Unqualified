document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdown = document.getElementById('dropdown-menu');
    let isDropdownOpen = false; // Track the state of the dropdown
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const tooltip = document.getElementById('accessibility-tooltip'); // Ensure this matches the tooltip's ID

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

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !hamburgerMenu.contains(event.target) && isDropdownOpen) {
            dropdown.classList.remove('show');
            hamburgerMenu.classList.remove('spin-to-side');
            hamburgerMenu.classList.add('spin-back');
            isDropdownOpen = false; // Update the state
        }
    });

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Show tooltip on button click
    accessibilityBtn.addEventListener('click', function() {
        tooltip.style.display = tooltip.style.display === "block" ? "none" : "block";
    });

    // Close tooltip when cursor leaves the tooltip
    tooltip.addEventListener('mouseleave', function() {
        tooltip.style.display = "none";
    });

    // Close tooltip when cursor leaves the accessibility button (and not moving towards the tooltip)
    accessibilityBtn.addEventListener('mouseleave', function(event) {
        if (!tooltip.contains(event.relatedTarget)) {
            tooltip.style.display = "none";
        }
    });
});
