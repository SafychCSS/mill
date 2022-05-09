document.addEventListener('load', function () {
    /* btn answer */
    const btnAnswers = document.querySelectorAll('.btn-answer');
    btnAnswers.forEach(btn => {
        btn.addEventListener('click', () => {
            // btn.classList.add('active');
        });
    });
});