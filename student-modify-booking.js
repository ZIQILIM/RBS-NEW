const boxes = document.querySelectorAll('.table > div > #green,#red');
let isConfirmed = false;

function handleBoxClick(box) {
    if (isConfirmed) {
        return;
    }

    const currentColor = getComputedStyle(box).getPropertyValue('background-color');

    if (currentColor === 'rgba(111, 255, 140, 0.5)') {
        box.style.backgroundColor = 'red';
    } else {
        box.style.backgroundColor = 'rgba(111, 255, 140, 0.5)';
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => handleBoxClick(box));
});

const confirmButton = document.querySelector('.confirmbtn');
confirmButton.addEventListener('click', function () {
    if (!isConfirmed) {
        const userConfirmed = window.confirm("Are you sure you want to confirm your selection?");

        if (userConfirmed) {
            isConfirmed = true;
            window.location.href = 'student-existingbooking-view.html';
        }
    }
});
