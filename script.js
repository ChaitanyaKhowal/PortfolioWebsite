// Get all dropdown items
const dropdowns = document.querySelectorAll('.nav-item.dropdown');

// Add a click event listener for each dropdown item
dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.nav-link.dropdown-toggle');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Toggle the dropdown content visibility when the dropdown is clicked
    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default action (e.g., following the link)

        // Close all other dropdowns
        dropdowns.forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                const otherDropdownContent = otherDropdown.querySelector('.dropdown-content');
                otherDropdownContent.style.display = 'none';
            }
        });

        // Toggle the current dropdown content visibility
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});

// Close the dropdown when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside of the dropdown menu or toggle link
    const isClickInsideDropdown = event.target.closest('.nav-item.dropdown') !== null;

    if (!isClickInsideDropdown) {
        dropdowns.forEach(dropdown => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.style.display = 'none'; // Close the dropdown
        });
    }
});
