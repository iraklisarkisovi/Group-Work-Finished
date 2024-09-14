const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const teamMembers = document.querySelectorAll('.team-member');

let index = 0;

nextButton.addEventListener('click', () => {
    if (index < teamMembers.length - 1) {
        index++;
        slider.style.transform = `translateX(-${index * 100}%)`;
    } else {
        index = 0;
        slider.style.transform = `translateX(0)`;
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * 100}%)`;
    } else {
        index = teamMembers.length - 1;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});
