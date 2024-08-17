export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="w-full h-15 px-4 py-4 border-b font-bold">
        ショッピングショッピング
      </header>
      {children}
    </div>
  );
}
