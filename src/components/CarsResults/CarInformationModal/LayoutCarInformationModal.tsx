import LayoutModal from "../../Generals/LayoutModal";

export default function LayoutCarInformationModal({
  children,
  onClick,
  title,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}) {
  return (
    <LayoutModal>
      <div className=" w-11/12 bg-white px-5 flex flex-col text-xs  gap-2 relative py-6">
        <button
          className="text-lg font-bold absolute top-0 right-[20px]"
          onClick={onClick}>
          X
        </button>

        <section>
          <h1 className=" text-base font-bold">{title}</h1>
        </section>
        <hr className="w-full bg-blueAero h-1" />

        {children}
      </div>
    </LayoutModal>
  );
}
