const stats = [
  { number: "500+", label: "Happy Clients" },
  { number: "10+", label: "Expert Barbers" },
  { number: "15+", label: "Years Experience" },
  { number: "20+", label: "Styles Offered" },
];

const Hero_Bottom = () => {
  return (
    <section className="bg-[#111] border-y border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map(({ number, label }, i) => (
          <div key={label} className={`flex flex-col items-center justify-center py-8 px-3 gap-1 ${i < 3 ? 'border-r border-white/5' : ''}`}>
            <span className="text-3xl sm:text-4xl font-extrabold text-[#cf814d] tracking-widest">{number}</span>
            <span className="text-xs uppercase tracking-widest text-gray-500 text-center mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero_Bottom;
