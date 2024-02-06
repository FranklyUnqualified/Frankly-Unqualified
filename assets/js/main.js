document.addEventListener('DOMContentLoaded', function() {
    // Toggle dropdown menu display
    document.getElementById('hamburger-menu').addEventListener('click', function(event) {
        var dropdown = document.getElementById('dropdown-menu');
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        event.stopPropagation(); // Prevent click from immediately propagating to document
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function(event) {
        var dropdown = document.getElementById('dropdown-menu');
        if (!dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});
