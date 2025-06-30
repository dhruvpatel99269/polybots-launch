const features = [
  {
    icon: "🔧",
    title: "AI-Driven Full-Stack Code Generation",
    description:
      "Turn simple prompts into full-stack application code — including frontend, backend, and database logic — in minutes. Clean, scalable, and production-ready.",
  },
  {
    icon: "🎨",
    title: "Instant Design Previews",
    description:
      "Visualize your UI instantly as it's generated. No more guesswork — see, adjust, and iterate in real time.",
  },
  {
    icon: "🧩",
    title: "Component-Based Code Output",
    description:
      "Get modular, framework-ready component code you can plug directly into your project — optimized for modern stacks like React and Next.js.",
  },
  {
    icon: "🧠",
    title: "System Architecture Auto-Diagramming",
    description:
      "Receive clear, detailed system architecture visuals — from API flow to deployment — for better planning and documentation.",
  },
  {
    icon: "🌐",
    title: "Multibot Collaboration Engine",
    description:
      "Polybots uses a system of specialized AI bots (UI, backend, DevOps) that collaborate to deliver higher-quality, domain-specific results.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12 relative z-10"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl h-20 font-bold mb-14 mt-0 md:mt-4 md:mb-0 text-center bg-gradient-to-r from-blue-400 to-fuchsia-400 text-transparent bg-clip-text animate-slide-in-down">
        🚀 Features That Set Polybots Apart
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col gap-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(99,102,241,0.25)] hover:border-fuchsia-400/40 animate-fade-in"
            style={{ animationDelay: `${0.1 * i + 0.2}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl p-3 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-blue-500/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h2 className="text-xl font-semibold text-fuchsia-100">
                {feature.title}
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-100 leading-relaxed pl-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
