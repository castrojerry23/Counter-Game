    
$(document).ready(function () {

    let numberToGuess = 0;
    let totalScore = 0;
    let totalWins = 0;
    let totalLosses = 0;
    let rubyValue = 0;
    let weissValue = 0;
    let blakeValue = 0;
    let yangValue = 0;

    resetGame();


    function resetGame() {
        
        numberToGuess = Math.floor(Math.random() * (121 - 19) ) + 19;
        $('#numberToGuess').text(numberToGuess);

        
        totalScore = 0;
        $('#totalScore').text(totalScore);
        $('#totalWins').text(totalWins);
        $('#totalLosses').text(totalLosses);

        
        rubyValue = Math.ceil(Math.random() * 12);
        weissValue = Math.ceil(Math.random() * 12);
        blakeValue = Math.ceil(Math.random() * 12);
        yangValue = Math.ceil(Math.random() * 12);
    }

    function calculateNewScore(rwbyValue) {
        totalScore += rwbyValue;
        $('#totalScore').text(totalScore);
        compareToNumber();
    }

    function compareToNumber() {
        if (numberToGuess - totalScore == 0) {
            totalWins++;
            $('#message').text("You defeated the Grim!");
            resetGame();
        }
        else if (numberToGuess - totalScore < 0) {
            totalLosses++;
            $('#message').text(`Game Over. Your score of ${totalScore} did not match ${numberToGuess}`);
            resetGame();
        }
    };

    $('#ruby').on("click", function(){
        calculateNewScore(rubyValue);
    });

    $('#weiss').on("click", function(){
        calculateNewScore(weissValue);
    });

    $('#blake').on("click", function(){
        calculateNewScore(blakeValue);
    });

    $('#yang').on("click", function(){
        calculateNewScore(yangValue);
    });

});