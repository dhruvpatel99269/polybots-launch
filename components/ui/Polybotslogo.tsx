// components/PolybotsLogo.tsx
import { Icons } from "../ui/logo";

export function PolybotsLogo() {
  return (
    <div className="flex items-center gap-4 relative">
      {/* Logo Icon */}
      <div className="flex items-center justify-center group relative">
        <Icons.polybots className="w-12 h-12 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <div className="absolute inset-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
      </div>

      {/* Logo Text - Hidden on small screens */}
      <div className="hidden sm:flex items-center justify-center">
        <h2 className="text-2xl md:text-2xl lg:text-4xl xl:text-4xl h-20 font-bold mb-14 mt-0 md:mt-4 md:mb-0 text-center bg-gradient-to-r from-blue-400 to-fuchsia-400 text-transparent bg-clip-text animate-slide-in-down">
          Polybots
        </h2>
      </div>
    </div>
  );
}
