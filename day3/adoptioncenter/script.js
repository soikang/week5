 // Function to toggle the visibility of the description box
 function displayDesc(element) {
    var infoBox = element.nextElementSibling; // Find the next sibling, which is the info-box
    if (infoBox) {
        infoBox.style.display = (infoBox.style.display === 'block') ? 'none' : 'block';
    }
}

// Function to close the description box
function closeDescription(element) {
    var infoBox = element.parentElement;
    infoBox.style.display = 'none';
}
// Add click event listeners to all description text elements
var descriptionTexts = document.querySelectorAll('.description');
descriptionTexts.forEach(function (description) {
    description.addEventListener('click', function () {
        displayDesc(this);
    });
});