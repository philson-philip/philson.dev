export default function MainLayout({ children }) {
  return (
    <section className="flex items-start">
      <main className="relative w-full bg-white dark:bg-[#111]">
        {children}
      </main>
    </section>
  );
}
