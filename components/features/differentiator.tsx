const differentiators = [
  {
    title: "More than a Code Generator",
    description:
      "It's a multi-agent design and dev companion that understands structure, not just syntax.",
  },
  {
    title: "Visual-First Thinking",
    description:
      "Preview interfaces as you build them. No abstract code-only output.",
  },
  {
    title: "Built for Founders, Designers & Devs Alike",
    description:
      "Whether you're technical or not, Polybots helps you ideate, iterate, and launch faster.",
  },
  {
    title: "Explainable Outputs",
    description:
      "Every line of code and every diagram comes with an AI-generated rationale, so you know the 'why' behind the 'what.'",
  },
];

export const Differentiator = () => {
  return (
    <section
      id="differentiator"
      className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative z-10"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl h-20 font-bold mb-14 mt-0 md:mt-4 md:mb-0 text-center bg-gradient-to-r from-blue-400 to-fuchsia-400 text-transparent bg-clip-text animate-slide-in-down">
        💡 What Makes Polybots Different?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {differentiators.map((item, i) => (
          <div
            key={item.title}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(236,72,153,0.25)] hover:border-fuchsia-400/40 animate-fade-in"
            style={{ animationDelay: `${0.1 * i + 0.2}s`, animationFillMode: "forwards" }}
          >
            <h4 className="text-xl font-semibold text-blue-200 group-hover:text-fuchsia-300 transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
