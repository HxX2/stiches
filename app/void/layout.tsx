export default function VoidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <section className="flex items-center justify-center h-full w-full">
          {children}
        </section>
  );
}