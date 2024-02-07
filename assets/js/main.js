document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const dropdown = document.getElementById('dropdown-menu');

    // Toggles the display of the dropdown menu and adds animation to the hamburger icon
    function toggleDropdown() {
        // Toggle the visibility of the dropdown menu
        dropdown.classList.toggle('show');

        // Add spin animation to the hamburger icon
        hamburgerMenu.classList.add('spin-animation');

        // Remove the spin animation class after it completes to reset the animation
        setTimeout(() => {
            hamburgerMenu.classList.remove('spin-animation');
        }, 600); // Ensure this matches the CSS animation duration
    }

    // Adds an event listener for clicks on the hamburger menu to toggle the dropdown
    hamburgerMenu.addEventListener('click', function(event) {
        toggleDropdown();
        // Prevents the click from propagating to the document, which could trigger a close event
        event.stopPropagation();
    });

    // Adds an event listener to the document to close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        // Checks if the click is outside the dropdown and the hamburger menu
        if (!dropdown.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            // Hides the dropdown menu if it's currently shown
            dropdown.classList.remove('show');
        }
    });

    // Prevents the dropdown menu from closing when clicking inside of it
    dropdown.addEventListener('click', function(event) {
        // Stops the click inside the dropdown from propagating to the document
        event.stopPropagation();
    });
});
