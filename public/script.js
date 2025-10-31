let count = 1;
document.getElementById("radio1").checked = true;

let intervalo = setInterval(function() {
    nextImage();
}, 2000);

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

const slider = document.querySelector('.slider');

slider.addEventListener('mouseover', () => {
    clearInterval(intervalo);
});

slider.addEventListener('mouseout', () => {
    intervalo = setInterval(function() {
        nextImage();
    }, 2000);
});