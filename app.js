const randomNumberFeedback = document.querySelector('#randomNumber');
const generateRandomBtn = document.querySelector('#generateRandomBtn');


generateRandomBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * (11-1) +1);
    const feedbackMessage = `Random number: ${randomNumber}`;
    randomNumberFeedback.innerHTML = feedbackMessage;
});
