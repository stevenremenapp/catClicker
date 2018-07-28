let catImage = document.getElementById('catImage');
let clickCount = 0;
catImage.addEventListener('click', function() {
    let clickCountDisplay = document.getElementById('clickCount');
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});