interface OptionProps {
  title: string;
  optionKey: number;
  optionSelected: number | null;
  onClick: (index: number) => void;
  correctAnswer: number;
}
interface Props {
  option: OptionProps;
}
export const OptionComponent = ({ option }: Props) => {
  const handleClick = (key: number) => {
    option.onClick(key);
  };

  return (
    <div
      className={`border border-indigo-300 
      my-2 p-2 rounded-lg ${
        option.optionSelected !== null
          ? "cursor-auto"
          : "cursor-pointer hover:bg-indigo-300"
      }
            ${
              option.optionSelected !== null &&
              option.optionSelected === option.correctAnswer &&
              option.optionSelected === option.optionKey &&
              "bg-green-200 border border-green-300"
            }
        
            ${
              option.optionSelected !== null &&
              option.optionSelected !== option.correctAnswer &&
              option.optionSelected === option.optionKey &&
              "bg-red-200 border border-red-300"
            }`}
      onClick={() => handleClick(option.optionKey)}
    >
      <p className="font-medium text-md text-indigo-950">{option.title}</p>
    </div>
  );
};
