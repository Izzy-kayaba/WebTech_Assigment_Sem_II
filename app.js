const buttons = document.querySelectorAll('.btn');
const winnerDisplay = document.getElementById('winner');
const choices = ['Rock', 'Paper', 'Scissors'];
// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const userChoice = this.textContent;
        const computerChoice = getComputerChoice();
        const resultMessage = determineWinner(userChoice, computerChoice);
        // Display the result message
        winnerDisplay.textContent = resultMessage;
    });
});
function getComputerChoice() {
    // Generate a random index to pick a choice from the 'choices' array
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Function to determine the winner based on the user's and computer's choices
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `It's a tie! You both chose ${userChoice}.`;
    }
    else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper') ||
        (userChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        return `You win! ${userChoice} beats ${computerChoice}.`;
    }
    else {
        return `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}
