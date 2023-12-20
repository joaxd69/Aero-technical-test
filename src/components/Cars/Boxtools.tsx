export default function Boxtools({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-w-[12rem] grow   gap-6  p-4   py-10 items-center "
      style={{ boxShadow: " 0px 0px 8.173px 0px rgba(0, 0, 0, 0.20)" }}>
      {children}
      <h3>{title}</h3>
    </div>
  );
}
