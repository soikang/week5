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

// below is the jQuery code for the light box - Week5 day3 lab assignment
$(document).ready(function () {
    // Open lightbox on image click
    $('img').click(function () {
        var $imgSrc = $(this).attr('src');
        var $imgAlt = $(this).attr('alt');

        // Clear previous content and add the clicked image to the lightbox
        $('.box').empty().append(`<img src="${$imgSrc}" alt="${$imgAlt}">`);
        
        // Show the backdrop and lightbox
        $('.backdrop').css('display', 'block').animate({ 'opacity': '0.7' }, 300);
        $('.box').fadeIn();
    });

    // Close lightbox on close button or backdrop click
    $('.closeX, .backdrop').click(function () {
        $('.box').fadeOut(function () {
            $('.backdrop').css('display', 'none').animate({ 'opacity': '0' }, 300);
        });
    });
});