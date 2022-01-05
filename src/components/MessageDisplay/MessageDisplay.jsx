const MessageDisplay = ({isSelected, isCorrect, playAgain}) => {

  //Object to store correct and incorrect message
  const message = {
    correctMessage: 'Your answer is correct.  Great job!',
    incorrectMessage:'Your answer is incorrect.  Better luck next time!  Please try again!'
  }

  //Function that gets message to display based on isCorrect value
  const displayMessage = () => {
    const {correctMessage, incorrectMessage} = message;
    return isCorrect ? correctMessage : incorrectMessage;
  }

  //Handle Play Again button click
  const handlePlayAgainClick = () => {
    playAgain();
  }

    return (
    <div className="message-container">
      <p>Which movie has a lower IMDB rating?</p>
        {/* Below content will only show if isSelected is true */}
        {isSelected && 
        <>
        <p style={{color: isCorrect ? 'green' : 'red'}}>{displayMessage()}</p>
        <button className="btn btn-primary" onClick={handlePlayAgainClick}>Play Again</button>
        </>}
    </div>
  );
}


export default MessageDisplay;


