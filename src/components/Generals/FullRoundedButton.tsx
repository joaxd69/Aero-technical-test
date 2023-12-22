export default function FullRoundedButton({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      onClick={onClick ?? (() => {})}
      className={`bg-primary text-white font-bold py-2 px-4 rounded-full ${className}  hover:bg-blueAero`}>
      {text}
    </button>
  );
}
