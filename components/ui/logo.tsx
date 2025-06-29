export const Icons = {
  twitter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M22.46 6c-.77.34-1.6.56-2.46.66.89-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.37 0-4.3 1.93-4.3 4.3 0 .34.04.67.11.99C8.3 9.05 5.47 7.57 3.6 5.1c-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.92 3.59-.7-.02-1.37-.21-1.95-.5v.05c0 2.09 1.49 3.83 3.47 4.22-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.72 2.14 2.97 4.03 3.01-1.48 1.16-3.35 1.85-5.39 1.85-.35 0-.69-.02-1.03-.06C3.2 20.8 5.3 21.5 7.5 21.5c8.99 0 13.92-7.45 13.92-13.92 0-.21-.01-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55z" />
    </svg>
  ),
  gitHub: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.879 24 17.37 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  polybots: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      {...props}
    >
      {/* Main hexagon */}
      <polygon
        points="60,10 90,30 90,70 60,90 30,70 30,30"
        fill="url(#gradient1)"
        stroke="rgba(59, 130, 246, 0.8)"
        strokeWidth="2"
      />
      {/* Inner triangle */}
      <polygon
        points="60,25 80,55 40,55"
        fill="url(#gradient2)"
        stroke="rgba(147, 51, 234, 0.8)"
        strokeWidth="1.5"
      />
      {/* Bottom diamond */}
      <polygon
        points="60,60 75,75 60,90 45,75"
        fill="url(#gradient3)"
        stroke="rgba(236, 72, 153, 0.8)"
        strokeWidth="1.5"
      />
      {/* Side polygons */}
      <polygon
        points="25,45 40,35 40,55 25,65"
        fill="rgba(59, 130, 246, 0.3)"
        stroke="rgba(59, 130, 246, 0.6)"
        strokeWidth="1"
      />
      <polygon
        points="95,45 80,35 80,55 95,65"
        fill="rgba(147, 51, 234, 0.3)"
        stroke="rgba(147, 51, 234, 0.6)"
        strokeWidth="1"
      />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
          <stop offset="100%" stopColor="rgba(147, 51, 234, 0.2)" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" />
          <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
