document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdown = document.getElementById('dropdown-menu');

    // Function to toggle the dropdown display and add animation
    function toggleDropdown() {
        // Check if the dropdown is currently shown
        const isShown = dropdown.classList.contains('show');

        // Toggle the show class to either display or hide the dropdown
        dropdown.classList.toggle('show', !isShown);

        // Add spin animation to the hamburger icon
        hamburgerMenu.classList.add('spin-animation');

        // Remove the spin animation class after it completes
        setTimeout(() => {
            hamburgerMenu.classList.remove('spin-animation');
        }, 600); // This duration should match the CSS animation duration
    }

    // Event listener for clicking the hamburger menu
    hamburgerMenu.addEventListener('click', function(event) {
        toggleDropdown();
        event.stopPropagation(); // Prevent click from immediately propagating to document
    });

    // Event listener for clicking outside the dropdown to close it
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });

    // Prevent dropdown menu from closing when clicking inside it
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
