import { LuggageIcon, SuitCaseIcon2, TwoPersonIcon } from "../../Icons";

export default function DescriptionBox() {
  /// to do : add icons and boolean props to reuse according to differents cars
  return (
    <article className="flex flex-wrap  gap-2 text-xs ">
      <div className="flex place-items-center gap-1">
        <TwoPersonIcon />
        <span>5 pasajeros</span>
      </div>
      <div className="flex place-items-center gap-1">
        <LuggageIcon />
        <span>2 valijas grandes</span>
      </div>
      <div className="flex place-items-center gap-1">
        <SuitCaseIcon2 />
        <span>2 equipajes de mano</span>
      </div>
    
    </article>
  );
}
