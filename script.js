const btn = document.querySelector('#add-btn');
const namber = document.querySelector('#namber');

let count = 0

btn.addEventListener('click', function() {
    count = count + 1;
    namber.textContent = count;
});

const btn2 = document.querySelector('#add-btn-cheats');

btn2.addEventListener('click', function() {
    namber.textContent = "10000";
});