import Link from "next/link";

const perks = [
  {
    icon: "✅",
    title: "First Access to Beta Features",
    description:
      "Be among the early adopters to experience the full power of AI-driven app development before it goes public.",
  },
  {
    icon: "✅",
    title: "Shape the Future of Development",
    description:
      "Provide feedback, influence roadmap features, and join a community of tech pioneers building the future of software creation.",
  },
  {
    icon: "✅",
    title: "Exclusive Launch Perks",
    description:
      "Enjoy waitlist-only benefits like extended free trial, priority support, and early integration access.",
  },
];

export const Perks = () => {
  return (
    <section
      id="perks"
      className="snap-start min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 relative z-10"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl h-20 font-bold mb-14 mt-0 md:mt-4 md:mb-0 text-center bg-gradient-to-r from-blue-400 to-fuchsia-400 text-transparent bg-clip-text animate-slide-in-down">
        🎯 Why Join the Launch Waitlist?
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">
        {perks.map((item, i) => (
          <div
            key={item.title}
            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between min-h-[220px] animate-fade-in hover:scale-[1.03] hover:border-blue-400/40 transition-transform duration-300"
            style={{
              animationDelay: `${0.1 * i + 0.2}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="text-2xl sm:text-3xl text-blue-400">{item.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-fuchsia-200 mt-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-100 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}

        {/* Action Card */}
        <div
          className="bg-gradient-to-r from-blue-700 via-fuchsia-600 to-purple-700 rounded-2xl p-6 sm:p-8 text-center shadow-xl border border-white/30 text-white flex flex-col justify-between min-h-[220px] animate-fade-in hover:scale-[1.03] transition-transform duration-300"
          style={{
            animationDelay: `${0.1 * (perks.length + 1)}s`,
            animationFillMode: "forwards",
          }}
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg">
              🚀 Ready to Build Smarter?
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Don’t just build apps — design, develop, and deploy intelligently
              with Polybots.
            </p>
          </div>
          <Link
            href="/"
            className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-fuchsia-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            🔗 Join our waitlist today
          </Link>
        </div>
      </div>
    </section>
  );
};
