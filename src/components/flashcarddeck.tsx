import FlashCard from "./flashcard";

function FlashCardDeck({ flashcards }) {
    return (
      <div className="items-center">
        {flashcards.map((card, index) => (
          <FlashCard key={index} question={card.question} answers={card.answers} />
        ))}
      </div>
    );
  }

export default FlashCardDeck;