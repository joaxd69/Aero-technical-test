export default function FullRoundedButton({
  text,
  className,
  onClick,
  type,
  ButtonValue,
}: {
  text: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "one" | "two";
  ButtonValue?: string;
}) {
  const styles = {
    type1:
      "bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-blueAero",
    type2:
      " border border-blueAero text-blueAero  font-bold py-2 px-4 rounded-full hover:bg-blueAero hover:text-black",
  };
  return (
    <button
      onClick={onClick ?? (() => {})}
      value={ButtonValue ?? ""}
      className={`${className} ${
        type === "one" ? styles.type1 : styles.type2
      }`}>
      {text}
    </button>
  );
}
