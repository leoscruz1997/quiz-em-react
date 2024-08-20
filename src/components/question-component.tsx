import { useState } from "react";
import { Question } from "../types";
import { OptionComponent } from "./option-component";

interface Props {
  question: Question;
  changeQuestion: (key: number) => void;
}
export const QuestionComponent = ({ question, changeQuestion }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);

  ///if (selected) setSelected(null);
  const handleAnswer = (key: number) => {
    if (selected === null) {
      setSelected(key);
      setTimeout(() => {
        changeQuestion(key);
        setSelected(null);
      }, 1500);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-950 my-4">
        {question.id}. {question.title}
      </h2>
      <div>
        {question.options.map((item, key) => (
          <OptionComponent
            key={key}
            option={{
              title: item,
              optionKey: key,
              optionSelected: selected,
              correctAnswer: question.correct,
              onClick: handleAnswer,
            }}
          />
        ))}
      </div>
    </div>
  );
};
