// components/PolybotsLogo.tsx
import { Icons } from "../ui/logo";

export function PolybotsLogo() {
  return (
    <div className="flex flex-col items-center gap-4 mb-8">
      <div className="relative group">
        <Icons.polybots className="w-20 h-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
      </div>
      <div className="flex items-center gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Polybots
        </h1>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>
    </div>
  );
}