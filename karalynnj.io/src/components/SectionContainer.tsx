const SectionContainer: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <section className="flex flex-col m-12 mb-6 gap-6 max-w-screen-xl">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="font-grotesk text-4xl text-ghost">{title}</h1>
        <div className="w-[300px] h-[8px] bg-lilac"></div>
      </div>
      {children}
    </section>
  );
};

export default SectionContainer;
