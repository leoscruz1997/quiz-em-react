import { questions } from "../data/questions";

interface Props {
  answers: number[];
}
export const Results = ({ answers }: Props) => {
  let count = 0;
  answers.forEach((item, key) => {
    if (item === questions[key].correct) {
      count++;
    }
  });

  return (
    <div className="max-h-3xl">
      <h2 className="text-2xl mb-4 text-indigo-950">Resultados!!!</h2>
      {answers.map((item, key) => (
        <div
          className="border-b border-indigo-950 mb-4 pb-3"
          key={questions[key].id}
        >
          <h3 className="font-bold text-lg text-indigo-950">
            {questions[key].title}
          </h3>
          <p className="font-semibold text-md my-1 text-indigo-950">{`R: ${
            questions[key].options[item]
          } (${
            item === questions[key].correct ? "Acertou!" : "Errroooou!!!"
          })`}</p>
        </div>
      ))}
      <p className="text-xl text-center font-bold text-indigo-950">
        Você acertou {count} pergunta{count > 1 ? "s" : ""}!!!
      </p>
    </div>
  );
};
