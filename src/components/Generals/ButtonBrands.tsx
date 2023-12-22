export default function ButtonBrands({
  text,
  isSelected,
  onclick,
  buttonName,
}: {
  text: string;
  isSelected?: boolean;
  buttonName?: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      onClick={onclick ?? (() => {})}
      name={buttonName ?? ""}
      className={`${
        isSelected ? "bg-blueAero text-white" : "bg-[#E7E7E7]"
      } px-4 h-full hover:bg-blueAero hover:text-white`}>
      {text}
    </button>
  );
}
