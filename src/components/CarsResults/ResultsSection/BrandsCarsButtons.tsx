import ButtonBrands from "../../Generals/ButtonBrands";

export default function BrandsCarsButtons({
  actualSection,
  selectSection,
}: {
  actualSection?: string;
  selectSection?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <section className="flex gap-1  h-[2.5rem] border-b border-primary bg-white">
      <ButtonBrands
        text="HERTZ"
        isSelected={actualSection === "Hertz"}
        onclick={selectSection}
        buttonName="Hertz"
      />
      <ButtonBrands
        text="DOLLAR DIAMOND"
        isSelected={actualSection === "Dollar Diamond"}
        onclick={selectSection}
        buttonName="Dollar Diamond"
      />
      <ButtonBrands
        text="AVIS"
        isSelected={actualSection === "Avis"}
        onclick={selectSection}
        buttonName="Avis"
      />
      <ButtonBrands
        text="BUDGET"
        isSelected={actualSection === "Budget"}
        onclick={selectSection}
        buttonName="Budget"
      />
      <ButtonBrands
        text="NATIONAL"
        isSelected={actualSection === "National"}
        onclick={selectSection}
        buttonName="National"
      />
    </section>
  );
}
