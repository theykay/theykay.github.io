let rModal = document.getElementById('resumeModal');
let rButton = document.getElementById('resumeBtn');
let rClose = document.getElementById('close');

rButton.addEventListener('click', function() {
    rModal.style.display = "block";
});

rClose.addEventListener('click', function() {
    rModal.style.display = "none";
});

window.addEventListener('click', function() {
    rModal.style.display = "none";
});


