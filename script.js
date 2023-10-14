// JavaScript

document.addEventListener('click', function (e) {
    const dropdowns = document.querySelectorAll('.subcategory');
    
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});

