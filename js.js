// Array of suggested texts
const suggestions = ["History", "Story", "Book", "Picture"];

// Function to create dropdown items
function createDropdownItems() {
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = ''; // Clear existing items

    // Create and append dropdown items
    suggestions.forEach(suggestion => {
        const dropdownItem = document.createElement('div');
        dropdownItem.classList.add('dropdown-item');
        dropdownItem.textContent = suggestion;
        dropdownItem.addEventListener('click', () => {
            // Set the value of the search input to the selected suggestion
            setSearchValue(suggestion);
            // Hide the dropdown
            dropdown.classList.add('hidden');
        });
        dropdown.appendChild(dropdownItem);
    });

    // Show the dropdown
    dropdown.classList.remove('hidden');
}

// Function to hide the dropdown when clicked outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown');
    const searchInput = document.getElementById('searchInput');
    if (event.target !== dropdown && event.target !== searchInput) {
        dropdown.classList.add('hidden');
    }
});

// Attach the createDropdownItems function to the input field's click event
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('click', createDropdownItems);

// Function to set the value of the search input and clear button
function setSearchValue(value) {
    searchInput.value = value;
    toggleClearButtonVisibility();
}

// Function to toggle the visibility of the clear button based on the search input's value
function toggleClearButtonVisibility() {
    const clearButton = document.getElementById('clearButton');
    clearButton.style.display = searchInput.value ? 'block' : 'none';
}

// Add event listener to clear button to clear the search input
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
    searchInput.value = '';
    toggleClearButtonVisibility();
});
