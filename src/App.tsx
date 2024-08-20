import { useState } from "react";
import { QuestionComponent } from "./components/question-component";
import { questions } from "./data/questions";
import { Results } from "./components/results-component";

export const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showEnding, setShowEnding] = useState(false);
  const [aswers, setAnswers] = useState<number[]>([]);

  const handleNextQuestion = (key: number) => {
    setAnswers([...aswers, key]);
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowEnding(true);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r py-5 from-indigo-500 to-indigo-600 flex items-center">
      <div className="container max-w-3xl overflow-auto h-full mx-auto bg-white/75 p-4 rounded-md shadow-lg">
        {!showEnding && (
          <>
            <h1 className="font-bold text-2xl text-indigo-950 ">
              Quiz Gamer! 🕹️
            </h1>
            <QuestionComponent
              question={questions[currentQuestion]}
              changeQuestion={handleNextQuestion}
            />
            <p className="text-sm text-center font-medium text-indigo-950 mt-6">
              {currentQuestion + 1} de {questions.length} pergunta
              {questions.length > 1 ? "s" : ""}
            </p>
          </>
        )}

        {showEnding && <Results answers={aswers} />}
      </div>
    </div>
  );
};
