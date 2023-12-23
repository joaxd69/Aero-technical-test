import { useState } from "react";
import ButtonBrands from "../../Generals/ButtonBrands";

export default function BrandsCarsButtons({
  operators,
}: {
  actualSection?: string;
  selectSection?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  operators?: string[];
}) {
  const [actualSection, setActualSection] = useState("");
  const selectSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActualSection(e.currentTarget.name);
  };
  return (
    <section className="flex gap-1  h-[2.5rem] border-b-2 border-blueAero bg-white">
      {operators?.map((operator, index) => (
        <ButtonBrands
          key={index}
          text={operator}
          isSelected={actualSection === operator}
          onclick={selectSection}
          buttonName={operator}
        />
      ))}
    </section>
  );
}
